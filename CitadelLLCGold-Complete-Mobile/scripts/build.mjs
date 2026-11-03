import {rm,cp,readFile,writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
const root=resolve(import.meta.dirname,'..');
await rm(resolve(root,'dist'),{recursive:true,force:true});
await cp(resolve(root,'public'),resolve(root,'dist'),{recursive:true});
console.log('Build complete: dist/');
