import http from 'node:http';
import { readFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomBytes } from 'node:crypto';
import { Store, Fault } from './core.mjs';
import { modules, kinds } from './catalog.mjs';
import { prepareMeeting,prepareBusiness } from './ai.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
export function createApp({file=join(process.env.BN_DATA_DIR||join(root,'.data'),'business.sqlite'),module=process.env.BN_MODULE||'all',prepare=prepareMeeting,prepareBusinessDraft=prepareBusiness}={}){
 if(module!=='all'&&!modules.some(m=>m.id===module))throw new Error('Ismeretlen BN_MODULE.');
 const dependencies={'ajanlatkeszito':['ugyfelszerzo'],'ugyfel-onboarding':['ugyfelszerzo','ajanlatkeszito'],'ugyfelkezelo':['ugyfel-onboarding'],'meeting-teendo':['ugyfelkezelo'],'utankoveto':['ugyfelszerzo'],'heti-attekinto':['ugyfelszerzo','ajanlatkeszito','ugyfelkezelo']};
 const visible=module==='all'?modules:modules.filter(m=>m.id===module||(dependencies[module]||[]).includes(m.id)).sort((a,b)=>a.id===module?-1:b.id===module?1:a.number-b.number);
 const store=new Store(file),csrf=randomBytes(32).toString('hex');
 const server=http.createServer(async(req,res)=>{
  const send=(status,value,type='application/json; charset=utf-8')=>{res.writeHead(status,{'Content-Type':type,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self'; connect-src 'self'; img-src 'self' data:; frame-ancestors 'none'; base-uri 'none'; form-action 'self'"});res.end(type.startsWith('application/json')?JSON.stringify(value):value);};
  try{
   const expected=`127.0.0.1:${server.address().port}`;
   if(req.headers.host!==expected)return send(403,{error:'Csak helyi elérés engedélyezett.'});
   if(req.headers.origin&&req.headers.origin!==`http://${expected}`)return send(403,{error:'Idegen eredet tiltva.'});
   const url=new URL(req.url,`http://${expected}`);
   if(req.method==='GET'){
    if(url.pathname==='/api/state')return send(200,{profile:store.profile(),modules:visible,data:Object.fromEntries(kinds.map(k=>[k,store.list(k)])),csrf,mode:process.env.OPENAI_API_KEY&&process.env.OPENAI_MODEL?'ai-available':'local',module});
    if(url.pathname==='/api/export'){res.setHeader('Content-Disposition','attachment; filename="businessnative-backup.json"');return send(200,store.export());}
    const files={'/':['web/index.html','text/html; charset=utf-8'],'/app.js':['web/app.js','text/javascript; charset=utf-8'],'/csv.js':['web/csv.js','text/javascript; charset=utf-8'],'/style.css':['web/style.css','text/css; charset=utf-8']};
    if(files[url.pathname]){const [path,type]=files[url.pathname];return send(200,readFileSync(join(root,path)),type);}return send(404,{error:'Nem található.'});
   }
   if(req.method!=='POST')return send(405,{error:'Nem támogatott metódus.'});
   if(req.headers['x-bn-csrf']!==csrf)return send(403,{error:'Frissítsd az oldalt a művelethez.'});
   if(!(req.headers['content-type']||'').startsWith('application/json'))return send(415,{error:'JSON szükséges.'});
   const chunks=[];let bytes=0;for await(const chunk of req){bytes+=chunk.length;if(bytes>2*1024*1024)throw new Fault('Legfeljebb 2 MiB kérés.',413);chunks.push(chunk);}const raw=Buffer.concat(chunks).toString('utf8');
   let body;try{body=JSON.parse(raw);}catch{throw new Fault('Hibás JSON.');}
   if(!body||typeof body!=='object'||Array.isArray(body))throw new Fault('JSON objektum szükséges.');
   if(url.pathname==='/api/restore')return send(200,store.restore(body));
   if(url.pathname==='/api/ai/business'){
    if(!modules.some(m=>m.id===body.module))throw new Fault('Ismeretlen modul.');
    const key=req.headers['idempotency-key'],cached=store.cached('business.prepare',body,key);if(cached!==undefined){store.assertSources(cached.sourceVersions);return send(200,cached);}
    const mapping={'ugyfelszerzo':['lead'],'erdeklodo-minosito':['lead'],'ajanlatkeszito':['proposal'],'ugyfel-onboarding':['project'],'ugyfelkezelo':['contact','task','project'],'meeting-teendo':['meeting'],'utankoveto':['followup'],'tudasrendszer':['document'],'heti-attekinto':['review']};
    const sources=mapping[body.module].flatMap(kind=>store.list(kind)).filter(r=>r.status!=='deleted').slice(0,20).map(r=>({id:r.id,version:r.version,text:JSON.stringify(r,null,2).slice(0,4000)}));
    if(!sources.length)throw new Fault('Először rögzíts adatot ebben a modulban.');
    const context={module:body.module,profile:{name:store.profile().name,services:store.profile().services,tone:store.profile().tone},sources};
    const refs=context.sources.map(({id,version})=>({id,version}));const result=await store.prepareResult('business.prepare',body,key,async()=>{const draft=await prepareBusinessDraft(context);store.assertSources(refs);return {...draft,sourceVersions:refs};});store.assertSources(result.sourceVersions);return send(200,result);
   }
   if(url.pathname==='/api/ai/meeting'){
    return send(200,await store.prepareOnce(body,req.headers['idempotency-key'],prepare));
   }
   if(url.pathname!=='/api/action')return send(404,{error:'Nem található.'});
   return send(200,store.execute(body.action,body.input,req.headers['idempotency-key']));
  }catch(e){send(e.status||400,{error:e instanceof Fault?e.message:e instanceof RangeError?'Hibás dátum vagy időzóna.':'A művelet nem hajtható végre. Ellenőrizd a bemenetet.'});}
 });return {server,store};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){const {server}=createApp();const port=Number(process.env.PORT||4317);server.listen(port,'127.0.0.1',()=>console.log(`BusinessNative: http://127.0.0.1:${server.address().port} — helyi mód, automatikus küldés nincs.`));}
