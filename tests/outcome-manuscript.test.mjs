import test from "node:test";
import assert from "node:assert/strict";
import {loadDocuments,validateOutcomeManuscript} from "../scripts/outcome-manuscript-validation-core.mjs";
const clone=()=>structuredClone(loadDocuments());
const problems=x=>validateOutcomeManuscript(x).errors.join(" | ");
const rejects=(name,mutate,pattern)=>test(name,()=>{
 const d=clone();mutate(d);assert.match(problems(d),pattern);
});
test("The INC-07 manuscript and evidence register pass integrated checks",()=>{
 const r=validateOutcomeManuscript(clone());
 assert.deepEqual(r.errors,[]);
 assert.equal(r.summary.documents,5);
 assert.equal(r.summary.outline_ids,149);
 assert.equal(r.summary.option_ids,10);
 assert.equal(r.summary.scenario_ids,9);
});
rejects("Protect original 149 legacy outline identifiers",d=>{
 d["MANUSCRIPT_OUTLINE.md"]=d["MANUSCRIPT_OUTLINE.md"].replace("### DOM-03 —","### DOM-30 —");
},/Master outline stable IDs changed/);
rejects("Protect unratified manuscript status",d=>{
 d["manuscript/04-connecting-national-outcomes.md"]=
 d["manuscript/04-connecting-national-outcomes.md"].replace(/unratified/gi,"approved").replace(/not ratified/gi,"approved");
},/No explicit unratified qualification/);
rejects("Detect broken relative link",d=>{
 d["README.md"]+="\n[Not there](missing/none.md)\n";
},/Broken Markdown relative link/);
rejects("Detect invalid Markdown heading hierarchy",d=>{
 d["manuscript/04-connecting-national-outcomes.md"]+="\n#### Hidden subsection\n";
},/Invalid heading jump/);
rejects("Detect missing Part IV conceptual section",d=>{
 d["manuscript/04-connecting-national-outcomes.md"]=
 d["manuscript/04-connecting-national-outcomes.md"].replace("## 8. Conditions for credible future progress","## The progress conditions");
},/Part IV must retain conceptual section 8/);
rejects("Detect unregistered hypothetical policy option",d=>{
 d["research/INC07_DEPENDENCIES_AND_REVIEW_REGISTER.md"]=
 d["research/INC07_DEPENDENCIES_AND_REVIEW_REGISTER.md"].replace("OPT-07-04","OPTION-UNKNOWN");
},/Unrecorded proposed option OPT-07-04/);
rejects("Detect unregistered adversarial scenario",d=>{
 d["research/INC07_DEPENDENCIES_AND_REVIEW_REGISTER.md"]=
 d["research/INC07_DEPENDENCIES_AND_REVIEW_REGISTER.md"].replace("SCN-07-08","SCN-FAKE");
},/Unrecorded qualitative scenario SCN-07-08/);
rejects("Detect lost architecture provenance",d=>{
 d["research/INC07_DEPENDENCIES_AND_REVIEW_REGISTER.md"]=
 d["research/INC07_DEPENDENCIES_AND_REVIEW_REGISTER.md"].replace("ac04222e2f543e12c1c460d6d5581a33ba9b4d2a","current-main");
},/Missing immutable cross-repository baseline/);
rejects("Detect lost manuscript provenance",d=>{
 d["research/INC07_DEPENDENCIES_AND_REVIEW_REGISTER.md"]=
 d["research/INC07_DEPENDENCIES_AND_REVIEW_REGISTER.md"].replace("d856e926f4180225fc74cb57ba770b6189016be3","current-main");
},/Missing immutable cross-repository baseline/);
rejects("Detect retired initiative working title",d=>{
 d["research/INC07_DEPENDENCIES_AND_REVIEW_REGISTER.md"]+="\nUnited States 2100\n";
},/Retired initiative title/);
rejects("Detect absent relationship type semantics",d=>{
 d["research/INC07_DEPENDENCIES_AND_REVIEW_REGISTER.md"]=
 d["research/INC07_DEPENDENCIES_AND_REVIEW_REGISTER.md"].replace(/requires_legal_authority/g,"unverified");
},/Unknown typed relationship/);
rejects("Detect main manuscript index orphan",d=>{
 d["README.md"]=d["README.md"].replace("manuscript/04-connecting-national-outcomes.md","missing.md");
},/Main readme does not link Part IV/);
