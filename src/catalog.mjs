export const modules = [
 ['ugyfelszerzo','Ügyfélszerző rendszer','Ügyfélszerzés','Gyűjtsd egy helyre az érdeklődéseket, és kövesd őket a konzultációig.'],
 ['erdeklodo-minosito','Érdeklődő-minősítő','Ügyfélszerzés','Rendszerezd az igényeket, lásd a hiányzó információkat és a következő lépést.'],
 ['ajanlatkeszito','Ajánlatkészítő','Ügyfélszerzés','Készíts ellenőrizhető, tételes ajánlatot az ügyféligényből.'],
 ['ugyfel-onboarding','Ügyfél-onboarding','Ügyfélkezelés','Indítsd el a közös munkát átlátható adatbekéréssel és ellenőrzőlistával.'],
 ['ugyfelkezelo','Ügyfélkezelő','Ügyfélkezelés','Tartsd egy helyen az ügyfeleket, feladatokat és a következő lépéseket.'],
 ['meeting-teendo','Meetingből teendők','Háttérműködés','Készíts ellenőrizhető feladatokat és összefoglalót a megbeszélés szövegéből.'],
 ['utankoveto','Utánkövető','Ügyfélszerzés','Lásd, kinek és mikor esedékes az utánkövetés, és készíts választervezetet.'],
 ['tudasrendszer','Ügyfélszolgálati és tudásrendszer','Háttérműködés','Keress a vállalkozás dokumentumaiban pontos forráshivatkozásokkal.'],
 ['heti-attekinto','Heti üzleti áttekintő','Háttérműködés','Tekintsd át a heti eseményeket, pénzmozgásokat és nyitott feladatokat.'],
].map(([id,title,group,description],i)=>({id,title,group,description,number:i+1,repo:`bn-${id==='meeting-teendo'?'meeting-teendo':id==='heti-attekinto'?'heti-attekinto':id==='ugyfelszerzo'?'ugyfelszerzo-rendszer':id}`}));
export const kinds=['lead','proposal','project','task','contact','meeting','followup','document','ticket','payment','review'];
