import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
const root = path.join(process.cwd(), "dist");
async function walk(dir){ return (await Promise.all((await readdir(dir)).map(async n=>{const p=path.join(dir,n);return (await stat(p)).isDirectory()?walk(p):p}))).flat(); }
const files = await walk(root), html = files.filter(f=>f.endsWith(".html"));
const failures=[];
for(const file of html){const s=await readFile(file,"utf8"); const h1=(s.match(/<h1/g)||[]).length; if(h1!==1) failures.push(`${file}: expected one H1, found ${h1}`); for(const token of ['rel="canonical"','hreflang=','name="description"','name="robots"','application/ld+json']) if(!s.includes(token)) failures.push(`${file}: missing ${token}`);}
for(const req of ["robots.txt","sitemap.xml","favicon.svg","assets/site.css","assets/site.js","assets/momo-hero.webp","assets/og-avaru.png"]) if(!files.includes(path.join(root,req))) failures.push(`missing ${req}`);
const combined=await Promise.all(html.map(f=>readFile(f,"utf8"))).then(x=>x.join("\n"));
for(const url of ["https://wa.me/9779822403262","/ne/","/products/momo-achar-masala/"]) if(!combined.includes(url)) failures.push(`missing expected link ${url}`);
if(failures.length){console.error(failures.join("\n"));process.exit(1)}
console.log(`Checked ${html.length} pages: one H1, core metadata, local assets and contact links present.`);
