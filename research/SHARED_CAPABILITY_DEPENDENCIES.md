# Shared Capabilities, Outcome Dependencies and Public Safeguards

**The Republic We Build | ARFI | INC-06 v0.1.0**  
**Status:** Draft, unratified research; no institution or government is assigned new powers  
**Canonical models:** [ARFI institutional reference and shared-capability overlay](https://github.com/American-Republic-Futures-Institute/afri-architecture/tree/main/model/reference)  
**Plan snapshot:** `173476efd1e66988d7f51f67526025d007e44e93` — the merged INC-05 plan, before this explanatory guide

## 1. Why capabilities must be modeled across policy domains

Public outcomes are not isolated. The ability to receive healthcare depends on energy, logistics and secure records. Economic opportunity depends on education, infrastructure, market integrity and financial stability. Privacy matters to students, patients, consumers and people participating in civic life. A domain-by-domain narrative can describe what matters to people, but the underlying architecture must also recognize the same dependency when it appears in another context.

**Shared capability** means a function that might enable more than one domain outcome. It is not a government office or legal authority, and it need not be delivered by the federal government. It may involve community institutions, market participants, households, multiple sovereign governments and voluntary cooperation.

ARFI's technical architecture provides a first small catalog of **eight candidate cross-domain capabilities** linked through **29 trace hypotheses** to four manuscript domains. Its separate **24 institution-candidate links** identify whom we might need to study; they do not identify legal owners.

## 2. Proposed shared-capability map

| Stable capability | People-centered purpose | Example outcome dependencies | Material safeguard |
| --- | --- | --- | --- |
| **CAP-XDOM-001 — Privacy-preserving information stewardship** | Necessary information helps people without making them subjects of unlimited collection or profiling. | Education EDU-C11/EDU-O10; health HLT-C10/HLT-O09; economy EPR-C06/EPR-O03; cyber CYB-C04/CYB-O03. | Lawful purpose, minimization, scope-specific rights and remedies; efficient sharing is not authorization to surveil. |
| **CAP-XDOM-002 — Essential-service continuity and recovery** | Critical services can continue, fail safely and recover after disruption. | Health HLT-C08/HLT-O08; economic capacity EPR-C08/EPR-O08; cyber CYB-C06/CYB-C07/CYB-O01. | Focus on actual human service, not mere network uptime; avoid permanent extraordinary powers. |
| **CAP-XDOM-003 — Lifelong skill and workforce development** | People can acquire and retain meaningful skills through changing circumstances. | Education EDU-C06/EDU-C08/EDU-O08; health HLT-C05/HLT-O01; economy EPR-C03/EPR-O02; cyber CYB-C12/CYB-O09. | Do not substitute course completion for competence; preserve lawful State and local education roles. |
| **CAP-XDOM-004 — Independent evidence and outcome measurement** | Citizens can understand real progress and challenge errors or preferred narratives. | Education EDU-C11/EDU-O10; health HLT-C12/HLT-O02; prosperity EPR-C10/EPR-O01; cyber CYB-C11/CYB-O09. | Representative sampling, source transparency, privacy and explicit causal uncertainty. |
| **CAP-XDOM-005 — Transparent public finance and stewardship** | Public resources support long-term outcomes without concealing fiscal or household costs. | Education EDU-C12/EDU-O09; health HLT-C06/HLT-O03; economy EPR-C11/EPR-O10. | Distinguish Congress, Treasury, independent central banking and State finance. No tax is approved through a model. |
| **CAP-XDOM-006 — Accessible participation and meaningful remedies** | A person can actually use a service and challenge incorrect decisions. | Education EDU-C05/EDU-O06; health HLT-C11/HLT-O07; economy EPR-C05/EPR-O01; cyber CYB-C11/CYB-O04. | Remedies depend on law and setting; accessibility measures must not normalize arbitrary automated denials. |
| **CAP-XDOM-007 — Resilient infrastructure and supply networks** | Households, clinics and businesses can rely on essential systems and supplies. | Health HLT-C08/HLT-O08; economy EPR-C08/EPR-O08; cyber CYB-C07/CYB-O01. | No assumption that one government should own every system; assess vulnerability and full lifecycle cost. |
| **CAP-XDOM-008 — Secure identity, verification and restoration** | Fraud and wrongful exclusion can be prevented or corrected without unnecessary intrusion. | Education EDU-C10/EDU-O06; health HLT-C10/HLT-O09; economy EPR-C06/EPR-O03; cyber CYB-C03/CYB-O04. | Do not assume mandatory national biometrics, centralized citizen profiles or a single authentication provider. |

*These links are conceptual research propositions, not empirically established causal effects. Details and source-commit reconciliation are maintained in the architecture model, not repeated here as competing canonical records.*

## 3. How to interpret the model

A **domain outcome** describes a desirable condition in people's lives. A **domain capability** describes a function necessary or potentially useful in that subject. A **shared capability** expresses a similar function at a cross-domain level. An **institutional record** identifies a real office or branch from a source-date catalog. An **authority record** must identify the controlling legal basis for any actual governmental power.

There are no shortcuts between those layers.

For example, `HLT-O08` expresses continuity of essential healthcare. `HLT-C08` identifies the capability for service continuity. `CAP-XDOM-002` relates the same general capability to cybersecurity and economic resilience. An HHS or DHS institutional record may be a useful focus for research on existing preparedness authorities. **None of these links grants one department power to direct the other, acquire a private hospital, monitor patients or change a State's laws.**

This is the practical separation between architectural traceability and legal competence.

## 4. Interactions that should be tested

### A. Critical care depends on infrastructure

A regional power outage combined with a communications failure may interrupt medication administration, emergency transport, digital health records, payroll, banking and emergency response. A single incident can affect health, economic activity and digital resilience simultaneously.

**Research test:** Do published outcome measures expose people unable to access actual care and financial services? Does the proposed remedy improve recovery without granting expansive new surveillance powers or transferring obligations without authority?

### B. Better data sharing can create worse privacy

A common information service could make educational, health or workforce coordination more efficient. It could also give organizations an unjustifiably broad picture of a person's financial condition, medical treatment, disability, beliefs or family life.

**Research test:** Is the intended benefit possible using less data, purpose restrictions, consent or alternative legal bases, segregated access, shortened retention and independent remedies? Is centralized architecture creating a new single point of political or security failure?

### C. A common identity design can exclude people

High-assurance verification could reduce account fraud, yet people without required devices, documents, biometrics or stable connectivity may lose access to essential services.

**Research test:** Can legitimate access be preserved through accessible, independently reviewable alternatives? Does fraud reduction count genuine inclusion and wrongful lockouts rather than only the percentage of successful automated checks?

### D. Education and workforce investment create complementary benefits

More useful lifelong training may help clinicians, emergency responders, cybersecurity practitioners, engineers and local employers. Training opportunities alone do not establish that people learned, secured better work or can serve community needs.

**Research test:** Do participants demonstrate durable competence, progress in their chosen paths and maintain individual agency? Who bears tuition, travel, childcare and opportunity costs?

### E. Fiscal efficiencies can move costs between sectors

A public program could reduce its own expenditure while shifting costs to another agency, State, family, employer or future generation. Cybersecurity incidents and medical disruption may move financial burdens out of obvious line items.

**Research test:** Are household, employer, State and federal costs measured alongside service consequences and fiscal sustainability? Are the alternatives compared on equivalent assumptions and legal constraints?

## 5. Government participation is not an assigned capability owner

The machine-readable model contains a small set of institutional research links. Examples include Congressional budget analysis, Treasury finance, independent Federal Reserve monetary functions, State/local educational responsibility, HHS health administration and the judicial function of adjudicating actual rights disputes.

Those examples must never be converted into claims such as 'the Federal Reserve owns public finance across the nation' or 'federal cybersecurity coordination controls all private infrastructure.' Different organizations have different laws, oversight, independence, public duties and appropriate boundaries.

The crosswalk should be expanded only when office-level primary authorities are verified. State, tribal, territorial and local roles must be represented using their own jurisdictional models, not inferred from federal branch membership.

## 6. FEAF family mapping: analytical only

The cross-domain catalog tags selected capabilities to FEAF-v2 reference-model families for future interoperability:

| Family | Why relevant in the research model | What this does not establish |
| --- | --- | --- |
| **PRM — Performance** | Define citizen-centered outcomes and verify progress. | No single official national score or ratified performance target. |
| **BRM — Business** | Describe public functions and their interactions independent of agency ownership. | No new government mission, statutory command or program. |
| **DRM — Data** | Describe provenance, data stewardship, privacy, and controlled exchange. | No legal permission for new personal-data collection. |
| **ARM — Application** | May describe future software services and reuse when appropriate. | No required federal application suite. |
| **IRM — Infrastructure** | Describe dependencies for continuity and resilience. | No preferred vendor, central utility owner or procurement. |
| **SRM — Security** | Capture security and civil-liberty requirements for trusted systems. | No unrestricted surveillance or validated national security posture. |

These are **reference-family associations**, not a claim that ARFI or a public agency has certified a formal government FEAF implementation.

## 7. Source control, publication and open decisions

**Canonical machine model:** [`afri-architecture/model/reference/`](https://github.com/American-Republic-Futures-Institute/afri-architecture/tree/main/model/reference).  
**Relevant narrative:** [Government Institutional Reference](../manuscript/institutions/00-government-institution-reference.md); [Education](../manuscript/02-education-and-lifelong-learning.md); [Health](../manuscript/domains/DOM-03-health-and-human-well-being.md); [Economy](../manuscript/domains/DOM-05-economy-work-and-prosperity.md); [Cyber/Privacy](../manuscript/domains/DOM-12-cybersecurity-privacy-and-information-integrity.md).

**Version handling:** The architecture links source domains to the immutable plan snapshot `173476efd1e66988d7f51f67526025d007e44e93`; changes to domain IDs require reconciling the contract, downstream links and public editorial records. The documents remain conceptually open for review, not ratified.

**Open decisions:** Whether eight shared capabilities are correctly scoped; how to represent rights conflicts and changes in lawful authority; what evidence is sufficient to turn a hypothesis into a tested relationship; whether some capabilities should be subdivided; how to represent local and tribal organizational data without imposed templates; and how the website can render public review without becoming the authoritative research store.

**Independent review needed:** Federal and State public-law specialists, tribal and territorial representatives, economists, patients, educational practitioners, privacy/civil-rights experts, critical-infrastructure operators, statistical methodologists and public participants.

*The shared architecture can make dependencies visible. It cannot, by itself, tell the people what choices they must make or grant government powers to carry those choices out.*
