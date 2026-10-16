#!/usr/bin/env node
import {loadDocuments,validateDocuments} from "./institution-reference-validation-core.mjs";
const result=validateDocuments(loadDocuments());
if(result.issues.length){
  console.error("INC-06 manuscript reference validation FAILED");
  for(const issue of result.issues)console.error(" - "+issue);
  process.exitCode=1;
}else console.log("INC-06 manuscript reference validation passed",JSON.stringify(result.summary));
