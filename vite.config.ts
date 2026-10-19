import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { cpSync, mkdirSync } from 'node:fs';
const root=fileURLToPath(new URL('.',import.meta.url));
export default defineConfig({root:root+'pages-app',publicDir:false,base:'./',plugins:[react(),{name:'copy-public-data',closeBundle(){mkdirSync(root+'dist',{recursive:true});cpSync(root+'data',root+'dist/data',{recursive:true});cpSync(root+'favicon.svg',root+'dist/favicon.svg')}}],css:{postcss:root},build:{outDir:root+'dist',emptyOutDir:true}});
