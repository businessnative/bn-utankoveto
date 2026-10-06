import {Store} from '../src/core.mjs';
import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
const [operation,path]=process.argv.slice(2);
if(!['migrate','backup','restore'].includes(operation))throw new Error('migrate | backup FILE | restore FILE');
const store=new Store(resolve(process.env.BN_DATA_DIR||'.data','business.sqlite'));
try{
 if(operation==='migrate')console.log('Schema 1: adatbázis létrehozva / ellenőrizve.');
 else if(operation==='backup'){if(!path)throw new Error('Add meg a mentési fájl nevét.');if(existsSync(path))throw new Error('A célfájl már létezik; válassz új nevet.');writeFileSync(path,JSON.stringify(store.export(),null,2),{flag:'wx',mode:0o600});console.log('Mentés elkészült.');}
 else {if(!path)throw new Error('Add meg a mentési fájl nevét.');console.log(store.restore(JSON.parse(readFileSync(path,'utf8'))));}
}finally{store.close();}
