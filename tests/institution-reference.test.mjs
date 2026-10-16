import test from "node:test";
import assert from "node:assert/strict";
import {loadDocuments,validateDocuments} from "../scripts/institution-reference-validation-core.mjs";
const copy=()=>structuredClone(loadDocuments());
const failures=d=>validateDocuments(d).issues.join(" | ");
const broken=(name,change,pattern)=>test(name,()=>{const d=copy();change(d);assert.match(failures(d),pattern);});
test("Reference documents meet all requirements",()=>{
  const r=validateDocuments(copy());
  assert.deepEqual(r.issues,[]);
  assert.equal(r.summary.departments,15);
  assert.equal(r.summary.shared_capabilities,8);
});
broken("Detect missing Cabinet reference",d=>{
  const p="manuscript/institutions/00-government-institution-reference.md";
  d[p]=d[p].replace("ORG-FED-EXE-DEP-DHS","ORG-FED-EXE-UNMAPPED");
},/fifteen canonical Cabinet/);
broken("Detect missing cross-domain shared capability",d=>{
  const p="research/SHARED_CAPABILITY_DEPENDENCIES.md";
  d[p]=d[p].replace(/CAP-XDOM-008/g,"CAP-XOTHER");
},/eight candidate shared capabilities|Missing cross-domain capability/);
broken("Detect omitted draft status",d=>{
  const p="manuscript/institutions/README.md";d[p]=d[p].replace(/unratified/gi,"approved");
},/Draft\/unratified status missing/);
broken("Detect broken relative link",d=>{
  d["manuscript/institutions/README.md"]+="\n[Bad](missing/none.md)\n";
},/Missing relative link/);
broken("Detect retired initiative title",d=>{
  d["research/SHARED_CAPABILITY_DEPENDENCIES.md"]+="\nUnited States 2100\n";
},/Retired working title/);
broken("Detect unpinned plan contract",d=>{
  const p="research/SHARED_CAPABILITY_DEPENDENCIES.md";
  d[p]=d[p].replaceAll("173476efd1e66988d7f51f67526025d007e44e93","main");
},/Immutable plan snapshot ref missing/);
broken("Detect missing institutional navigation",d=>{
  d["README.md"]=d["README.md"].replace("manuscript/institutions/00-government-institution-reference.md","not-here.md");
},/Main navigation omits/);
