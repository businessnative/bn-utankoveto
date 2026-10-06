import {createApp} from './src/server.mjs';
const {server}=createApp({module:"utankoveto"});
const port=Number(process.env.PORT||4317);server.listen(port,'127.0.0.1',()=>console.log('http://127.0.0.1:'+server.address().port));
