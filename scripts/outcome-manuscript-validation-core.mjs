// INC-07 manuscript Part IV navigation/continuity validation, without network or 3rd-party packages.
import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const chosen=["README.md","MANUSCRIPT_OUTLINE.md","docs/INCREMENT_ROADMAP.md",
 "manuscript/04-connecting-national-outcomes.md","research/INC07_DEPENDENCIES_AND_REVIEW_REGISTER.md"];
const r=(p,dir=root)=>fs.readFileSync(path.join(dir,p),"utf8");
export function loadDocuments(dir=root){
 return Object.fromEntries(chosen.map(p=>[p,r(p,dir)]));
}
export function validateOutcomeManuscript(d,dir=root){
 const errors=[],note=(okay,msg)=>{if(!okay)errors.push(msg);};
 const part="manuscript/04-connecting-national-outcomes.md",reg="research/INC07_DEPENDENCIES_AND_REVIEW_REGISTER.md";
 let linkCount=0;
 for(const file of chosen){
  const s=d[file];note(typeof s==="string"&&s.length>100,"Missing manuscript material "+file);
  if(typeof s!=="string")continue;
  const heading=s.split("\n").filter(x=>/^#{1,6} /.test(x));
  note(heading.filter(x=>/^# /.test(x)).length===1,"Incorrect H1 count in "+file);
  let last=0;
  for(const h of heading){const level=h.match(/^#+/)[0].length;if(last&&level>last+1)errors.push("Invalid heading jump in "+file);last=level;}
  for(const m of s.matchAll(/\]\(([^)]+)\)/g)){
   const u=m[1];if(/^(https?:\/\/|mailto:|#)/.test(u))continue;linkCount++;
   const target=path.resolve(dir,path.dirname(file),u.split("#")[0]);
   note(target.startsWith(dir+path.sep),"Relative link escapes repository "+file+" -> "+u);
   note(fs.existsSync(target),"Broken Markdown relative link "+file+" -> "+u);
  }
 }
 const fixture=JSON.parse(r("tests/fixtures/inc07-outline-ids.json",dir));
 const ids=[...(d["MANUSCRIPT_OUTLINE.md"]||"").matchAll(/^#{3,4} ([A-Z]+-[A-Z0-9]+) — /gm)].map(x=>x[1]);
 note(fixture.ids?.length===149&&JSON.stringify(ids)===JSON.stringify(fixture.ids),"Master outline stable IDs changed without separate approved taxonomy mapping");
 const ps=d[part]||"",rs=d[reg]||"";
 for(let i=1;i<=9;i++)note(new RegExp("^## "+i+"\\.","m").test(ps),"Part IV must retain conceptual section "+i);
 for(let i=1;i<=10;i++){
  const id="OPT-07-"+String(i).padStart(2,"0");
  note(rs.includes(id),"Unrecorded proposed option "+id);
 }
 for(let i=1;i<=9;i++){
  const id="SCN-07-"+String(i).padStart(2,"0");
  note(rs.includes(id),"Unrecorded qualitative scenario "+id);
 }
 for(const kind of ["supports","depends_on","conflicts_with","constrained_by","requires_legal_authority"])
  note(rs.includes(kind),"Unknown typed relationship or broken paper semantics "+kind);
 for(const file of [part,reg]){
  note(/not ratified|unratified/i.test(d[file]||""),"No explicit unratified qualification in "+file);
  note(!(d[file]||"").includes("United States 2100"),"Retired initiative title in "+file);
 }
 for(const pin of ["d856e926f4180225fc74cb57ba770b6189016be3","ac04222e2f543e12c1c460d6d5581a33ba9b4d2a"])
  note(rs.includes(pin),"Missing immutable cross-repository baseline "+pin);
 note((d["README.md"]||"").includes(part),"Main readme does not link Part IV");
 note((d["MANUSCRIPT_OUTLINE.md"]||"").includes(part),"Living outline does not link Part IV");
 note((d["README.md"]||"").includes(reg),"Main readme lacks review register");
 note((d["docs/INCREMENT_ROADMAP.md"]||"").includes("INC-08"),"Roadmap omitted follow-on public review increment");
 note(ps.includes("legal authority")&&rs.includes("legal authority"),"Legal authorization boundary not explained");
 note(/not predictions|not simulations|not ratified|not forecasts/i.test(ps),"Scenario qualification missing");
 return {errors,summary:{documents:chosen.length,relative_links:linkCount,outline_ids:ids.length,option_ids:10,scenario_ids:9}};
}
