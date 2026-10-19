import { cpSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
rmSync(root+'assets',{recursive:true,force:true});
cpSync(root+'dist/assets',root+'assets',{recursive:true});
cpSync(root+'dist/index.html',root+'index.html');
console.log('Updated root index.html and assets. Commit these alongside source changes.');
