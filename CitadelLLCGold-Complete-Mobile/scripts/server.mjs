import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const base=resolve(import.meta.dirname,'../dist');
const types={'.html':'text/html; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.txt':'text/plain; charset=utf-8'};
const server=http.createServer(async(req,res)=>{try{const u=new URL(req.url,'http://localhost');let name=decodeURIComponent(u.pathname);let file=resolve(base,'.'+name);if(file!==base&&!file.startsWith(base+sep)){res.writeHead(403);res.end();return;}if((await stat(file)).isDirectory())file=resolve(file,'index.html');const body=await readFile(file);res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream'});res.end(body);}catch{res.writeHead(404);res.end('Not found');}});const port=Number(process.env.PORT||3000);server.listen(port,'0.0.0.0',()=>console.log('Website available at http://localhost:'+port));
