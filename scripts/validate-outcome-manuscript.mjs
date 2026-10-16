#!/usr/bin/env node
import {loadDocuments,validateOutcomeManuscript} from "./outcome-manuscript-validation-core.mjs";
const r=validateOutcomeManuscript(loadDocuments());
if(r.errors.length){console.error("INC-07 manuscript validation FAILED");for(const x of r.errors)console.error(" - "+x);process.exitCode=1;}
else console.log("INC-07 manuscript validation passed",JSON.stringify(r.summary));
