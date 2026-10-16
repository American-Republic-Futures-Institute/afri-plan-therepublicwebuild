// INC-06 Markdown navigation, scope and source-control validator. Node built-ins only.
import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";
export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const focus = [
  "README.md","MANUSCRIPT_OUTLINE.md","docs/INCREMENT_ROADMAP.md",
  "manuscript/_templates/INSTITUTIONAL_PROFILE_TEMPLATE.md",
  "manuscript/institutions/README.md",
  "manuscript/institutions/00-government-institution-reference.md",
  "research/SHARED_CAPABILITY_DEPENDENCIES.md"
];
export function loadDocuments(base=root) {
  return Object.fromEntries(focus.map(p=>[p,fs.readFileSync(path.join(base,p),"utf8")]));
}
export function validateDocuments(docs,base=root) {
  const issues=[],assert=(okay,msg)=>{if(!okay)issues.push(msg);};
  const ref="manuscript/institutions/00-government-institution-reference.md";
  const deps="research/SHARED_CAPABILITY_DEPENDENCIES.md";
  for(const file of focus){
    const content=docs[file];
    assert(typeof content==="string"&&content.length>30,"Missing reference document "+file);
    if(typeof content!=="string")continue;
    const heads=content.split("\n").filter(x=>/^#{1,6} /.test(x));
    assert(heads.filter(h=>/^# /.test(h)).length===1,"Exactly one H1 expected in "+file);
    let last=0;
    for(const h of heads){const n=h.match(/^#+/)[0].length;if(last&&n>last+1)issues.push("Heading level jump in "+file);last=n;}
    for(const m of content.matchAll(/\]\(([^)]+)\)/g)){
      const url=m[1];if(/^(https?:\/\/|mailto:|#)/.test(url))continue;
      const resolved=path.resolve(base,path.dirname(file),url.split("#")[0]);
      assert(resolved.startsWith(base+path.sep),"Repository-escaping reference "+file+" -> "+url);
      assert(fs.existsSync(resolved),"Missing relative link "+file+" -> "+url);
    }
  }
  const body=docs[ref]||"", research=docs[deps]||"";
  const departments=new Set([...body.matchAll(/\bORG-FED-EXE-DEP-[A-Z0-9-]+\b/g)].map(x=>x[0]));
  assert(departments.size===15,"Expected exactly fifteen canonical Cabinet references");
  for(const branch of ["Legislative branch","Executive branch","Judicial branch"])
    assert(body.includes(branch),"Missing constitutional branch "+branch);
  for(const jurisdiction of ["States","tribal nations","territories","District of Columbia"])
    assert(body.includes(jurisdiction),"Missing jurisdiction distinction "+jurisdiction);
  const capabilities=new Set([...research.matchAll(/CAP-XDOM-[0-9]{3}/g)].map(x=>x[0]));
  assert(capabilities.size===8,"Expected eight candidate shared capabilities");
  for(let i=1;i<=8;i++)assert(capabilities.has("CAP-XDOM-"+String(i).padStart(3,"0")),"Missing cross-domain capability "+i);
  for(const domain of ["DOM-02","DOM-03","DOM-05","DOM-12"])
    assert((docs["MANUSCRIPT_OUTLINE.md"]||"").includes("### "+domain+" —"),"Missing outcome domain "+domain);
  for(const dest of [ref,deps])
    assert((docs["README.md"]||"").includes(dest),"Main navigation omits "+dest);
  assert((docs["MANUSCRIPT_OUTLINE.md"]||"").includes(ref),"Institutional outline link missing");
  assert((docs["manuscript/institutions/README.md"]||"").includes("education/00-institutional-crosswalk.md"),"Education exemplar index missing");
  assert((docs["docs/INCREMENT_ROADMAP.md"]||"").includes("INC-07"),"Next stage of roadmap missing");
  for(const file of [ref,deps,"manuscript/institutions/README.md"]){
    assert(/unratified|not ratified/i.test(docs[file]||""),"Draft/unratified status missing "+file);
    assert(!(docs[file]||"").includes("United States 2100"),"Retired working title found "+file);
  }
  assert(research.includes("173476efd1e66988d7f51f67526025d007e44e93"),"Immutable plan snapshot ref missing");
  assert(body.includes("legal authority")&&research.includes("legal authority"),"Law/authority guardrails missing");
  return {issues,summary:{files:focus.length,departments:departments.size,shared_capabilities:capabilities.size}};
}
