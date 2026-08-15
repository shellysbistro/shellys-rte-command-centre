# Master build prompt — Shelly’s Bistro RTE Project Command Centre

Version: August 15, 2026  
Repository: `shellysbistro/shellys-rte-command-centre`

Copy this prompt into an AI application builder when rebuilding or extending the command centre. Supply the files listed under **Authoritative sources** in the same build session. This document supersedes the incomplete August 11 pasted prompt while preserving its truth, privacy and evidence rules.

---

## Role and objective

Act as a senior product designer, data architect, full-stack engineer and project-controls specialist. Build a secure, polished, responsive web application called:

**Shelly’s Bistro — RTE Project Command Centre**

RTE means **ready-to-eat**. This is an internal operational command centre for Shelly’s Indigenous Bistro’s proposed institutional RTE food-production expansion. It must show, with evidence, what has been done, what is underway, who has been contacted, which contractors and suppliers have been identified, which organizations have been approached, what options have been proposed, what decisions remain, what is blocking progress and what should happen next.

Build a working data application, not a static landing page or a generic restaurant dashboard.

## Canonical user corrections

These direct project-owner instructions override older figures or roles in the original brief. Preserve the older statements only as historical/conflicting source evidence.

1. Total owner equity is **CA$1.0 million / 4%**, not CA$6.25 million.
2. Proposed debt remains **CA$8.75 million / 35%**.
3. Add the former CA$5.25 million owner-equity balance to the grant/contribution layer. Proposed grants and contributions are therefore **CA$15.25 million / 61%**.
4. Total proposed project cost remains **CA$25.0 million**.
5. Do not imply that the debt or grant/contribution layers are approved, awarded or secured.
6. Current project leadership contains **Vince Bignell and Cat only**. Richard Chimebele is not displayed as current leadership.
7. Richard remains the authenticated `richardc@shellysbistro.com` mailbox profile, a workplan assignee and a person named in historical source material.
8. Publish Richard’s six-week task chart under Workplan.
9. Do not show dedicated Sources, Conflicts or Pending Source Review tabs in the main navigation. Keep provenance and conflict controls in the data model and on relevant records.
10. Do not show pending source-review clutter on the user’s operational tabs.

## Non-negotiable truth rules

1. Never convert a target, proposal, forecast, design capacity, prospective organization, researched supplier or planned outreach into a completed fact.
2. Never describe a party as contacted without an approved sent email, meeting record, call note, sent letter or source document proving contact.
3. Never describe funding, financing, a customer, supplier, contractor, purchase, quote, permit, certification or partnership as secured unless its source proves that status.
4. Preserve these distinct states: verified current fact; completed action; in progress; submitted/applied but not approved; in discussion but not committed; researched/identified but not contacted; proposed/planned; assumption requiring validation; conflicting information; and missing information.
5. Important records retain source name, source type, source date, page/section/tab/row when available, import date, verification state and a link or reference to the source.
6. Uploaded originals are immutable. Corrections alter structured records, not source files.
7. Show confidence and verification state on extracted records. Require approval before unreviewed AI extraction becomes an official project record.
8. Do not fabricate dates, contacts, email addresses, prices, quotes, contractors, outreach, commitments or completion percentages.
9. Do not calculate an overall completion percentage from status labels alone. Only show weighted completion when approved weights or explicit completion values exist.
10. Treat business, financial, email, contact, quotation and project information as confidential.
11. Keep the repository private. Do not add passwords, OAuth tokens, bulk mailbox exports, `.env` files or other secrets.
12. Do not make the application or its content publicly indexable.

## Authoritative sources

### Files preserved in the repository

1. `sources/Shellys School Nutrition Menu.pdf`
   - Six pages created August 11, 2026.
   - 45 menu items across Eggless Breakfast, Egg-cellent Breakfast, Nutritious Menu and Fat Lunch, followed by an allergen legend.
   - SHA-256: `771A90B689B22A5E2421DAF09210F3245C7BFCB43E908A4DE0C2C55DD31AB416`.
2. `sources/PRODUCTION LOGISTICS BREAKDOWN.docx`
   - August 11, 2026 production logistics and capacity analysis.
3. `sources/Equipment_Report_v2.docx`
   - Revision 2 dated July 20, 2026; China-direct equipment sourcing and procurement report.
4. `sources/41_Paquin_Contractor_Tracker.xlsx`
   - Contractor due-diligence tracker reported as of July 20, 2026.
5. `sources/Shellys_Bistro_Canada_Produce_Data.xlsx`
   - Canadian produce market and supply data with an August 13, 2026 cutoff.
6. `sources/Shellys_LOI_MOU_Target_List_Expanded.xlsx`
   - Eight-tier, 56-target Manitoba relationship pipeline.
7. `assets/shellys-bistro-logo.png`
   - Approved circular Shelly’s Bistro floral logo and visual-theme reference.

### Connected sources

1. Richard Project Management Google Sheet:
   `https://docs.google.com/spreadsheets/d/1gqojEjzs8s99tcJHS9bwhLfvhzeSxCaXauj2-oFf1E8/edit?gid=613747079#gid=613747079`
   - Use the `General` tab and the complete `Richard Workplan` tab.
   - Current repository snapshot was refreshed August 15, 2026.
2. Gmail account `richardc@shellysbistro.com`
   - Connect only through secure OAuth.
   - Use read-only scopes by default.
   - Never request, expose or store the mailbox password.
3. Richard Chimebele’s primary Google Calendar
   - Use read-only access unless the user explicitly authorizes a calendar write.

### Missing source

`shelly general proposal.docx` remains unattached. Treat proposal-derived facts as pending verification until the original is supplied and reviewed.

## Source precedence by subject

- Workplan task status and owners: live Google Sheet, then approved manual updates.
- Formal scope, readiness, governance and program positions: latest approved proposal.
- User-directed financing corrections and leadership corrections: direct approved user instruction, while preserving conflicting older source statements.
- Equipment categories, supplier research, machine counts and sourcing assumptions: latest approved equipment report.
- Chilling, flow, throughput and logistics assumptions: latest approved production-logistics analysis.
- Menu items and declared allergen icons: school nutrition menu PDF.
- Produce market statistics, risk scores and sourcing actions: Canada produce workbook.
- Menu-to-produce evidence: menu PDF.
- LOI/MOU planning targets: expanded target workbook.
- Contact and outreach status: approved sent email, meeting, call or letter evidence.
- Schedule: connected calendar; email-proposed meetings remain unconfirmed until saved or otherwise confirmed.
- If two sources disagree, retain a conflict record. Do not silently choose one.

## Required navigation

Use exactly these eleven operational tabs in this order:

1. Overview
2. Workplan
3. Equipment & prices
4. Production flow
5. Research & innovation
6. Market & LOI targets
7. Funding & budget
8. Live funding
9. Meeting schedule
10. People & outreach
11. Email follow-ups

Do not add Sources, Conflicts or Pending Review to the main navigation.

## Branding and UI/UX

- Use the supplied Shelly’s Bistro circular logo.
- Derive the theme from the logo’s black background, cream typography, red/orange flowers, purple petals, green stems and warm yellow accents.
- Keep the interface polished, highly readable and responsive on desktop, tablet and mobile.
- Use a persistent desktop sidebar and a compact mobile navigation pattern.
- Keep tables horizontally contained so they do not create document-level mobile overflow.
- Use strong hierarchy, compact evidence badges, helpful empty states, sticky first columns where useful and clear hover/focus states.
- Put the outcome and action first; keep audit details available without overwhelming the operational view.
- Include global search, confidential-workspace labeling and a local JSON snapshot export.

## View requirements

### 1. Overview

- Identify the proposed 41 Paquin Road institutional RTE expansion.
- Distinguish the current approximately 4,000-square-foot operation from the proposed 40,000-plus-square-foot facility.
- Show the one-million-meal/day concept as proposed design capacity, not achieved production.
- Show the current funding stack without implying approval.
- Show readiness, blockers, near-term actions and evidence state.
- Current leadership cards: Vince Bignell and Cat only. Do not invent Cat’s title or contact information.

### 2. Workplan

- Reflect the connected Google Sheet.
- Preserve the 18 current general assignment rows and Richard’s three assigned items in the current snapshot.
- Include the complete six-week Richard Workplan.
- Publish the six-week task chart, including objectives, actions and deliverables.
- Do not expose pending source-review controls in the workplan table.

### 3. Equipment & prices

- Include all 22 equipment categories and 64 machines from the equipment report.
- Retain original USD FOB prices and separately labeled Canadian landed-cost planning figures.
- Keep approximation, quote and research states visible.
- Show procurement waves and the CA$1.6–1.8 million equipment-scope budget.
- Preserve the blast-chiller price conflict instead of resolving it silently.

### 4. Production flow

- Show the quantified one-million-meal/day capacity model.
- Show the documented 38/62 hot/cold flow and the recommended 40/60 operating mix without confusing the two.
- Visualize receiving, preparation, cooking/cold assembly, chilling, packing, cold storage and dispatch.
- Make the blast-chilling bottleneck, logistics footprint and scaling rule prominent.
- State that the model requires engineering and commissioning validation.

### 5. Research & innovation

Create an innovative researcher workspace containing four linked, stage-gated programs. Label every item as a research hypothesis, concept, experiment or proposed partnership until evidence supports a stronger state.

**Problem statement:** Researchers, community partners and facility planners need one place to convert promising circular-economy, learner-support, workforce and food-science ideas into measurable studies. Without an evidence-led workspace, unmeasured ideas may be mistaken for active programs, technical feasibility or approved claims.

**Primary user stories:**

- As a facility researcher, I want a measurable waste-stream register so that technology decisions begin with real mass-balance data.
- As a learner or research partner, I want transparent paid-placement and award concepts so that I can see the support, governance and expected outputs.
- As a community referral partner, I want a voluntary minimal-data service blueprint so that participants are supported without exposing sensitive case information.
- As a food scientist or regulator, I want candidate interventions tied to validation gates so that no unsafe formula or shelf-life claim enters production.
- As a project leader, I want a copy-ready Research Pipeline with concrete deliverables so that research can be commissioned and reviewed consistently.

**P0 requirements:** four program cards; explicit stage and truth boundary; seven-stream waste register; six-stage employment pathway; four-family preservation matrix; a twelve-assignment Research Pipeline; official-source links; responsive search; and mobile-contained tables.

**P1 requirements:** editable owners, milestones, study status, attachments, decisions and outcome data after a server-side multi-user data layer exists.

**Future considerations:** sensor/scale ingestion, lifecycle-carbon modeling, biogas simulation, applicant portal, consented referral integration, laboratory-information integration and research-partner workspaces.

**Non-goals for this release:** selecting or purchasing a digester; opening a funded scholarship; accepting participant referrals; promising employment; changing food formulas; assigning a shelf life; or making antimicrobial, nutrition or health claims.

**Suggested phasing:** Phase 1 baseline and co-design; Phase 2 pre-feasibility and protocols; Phase 3 approved pilots; Phase 4 independent evaluation and scale decision. Do not advance a program merely because a target date has arrived.

#### Program A — Zero food waste and factory-to-biogas

- Follow the Canadian food-recovery hierarchy: prevent first, then safely recover or upcycle edible food, then recycle unavoidable residuals. Do not present anaerobic digestion as the first destination for edible food.
- Add a waste-stream register covering edible overproduction, plant trim, starch/grain residuals, fats/oils/grease, animal-protein residuals, high-COD liquids/wastewater solids and packaging-contaminated organics.
- Keep every baseline as **Not measured** until scale records exist.
- Capture source point, SKU/recipe, line, shift, mass or volume, reason code, edibility, time/temperature, contamination, moisture/solids where needed, destination, cost and evidence.
- Require a representative four-week waste characterization before technology selection.
- Compare prevention, safe redistribution/upcycling, third-party organics offtake, co-digestion and on-site anaerobic digestion.
- Any biogas pre-feasibility study must cover feedstock acceptance, mass and energy balance, methane/biogas yield ranges, depackaging, pre-treatment, digestate route, odour, biosecurity, utilities, permitting, safety, lifecycle impacts and economics.
- Track `kg waste / 1,000 meals`, percentage prevented/recovered, percentage diverted, contamination, cost per tonne, modeled energy and digestate yield.
- Cite Environment and Climate Change Canada’s food-loss hierarchy, Natural Resources Canada’s anaerobic-digestion demonstration and Manitoba’s Waste Use Efficiency program.

#### Program B — Scholarships and bursaries

- Map existing Indigenous and Manitoba scholarships, bursaries, grants, student aid and paid research placements before proposing a new fund.
- Focus potential applied-research disciplines on food science, nutrition, microbiology, bioprocess/energy engineering, equipment/process engineering, supply chain, data science and community food systems.
- Research whether the highest-value intervention is a bursary, merit scholarship, needs-based award, paid placement or a stackable combination.
- Co-design eligibility, selection, conflicts, privacy, mentorship, community knowledge ownership and reporting with learners, institutions and Indigenous partners.
- Never claim that a Shelly’s award is funded or open until governance, capital and application terms are approved.
- Track applicants, awards, unmet-cost reduction, paid placements, research outputs and learner retention.
- Cite Canada’s Indigenous bursary search, Indigenous Scholars Awards and Supplements, and Manitoba’s Advancing Futures Bursary as landscape evidence—not as funding secured by Shelly’s.

#### Program C — Inclusive employment and training pathway

- Design a voluntary, paid, trauma-informed pathway for school-division parents, families affected by incarceration, CFS-connected people and EIA participants.
- Do not conflate justice-affected family members with offenders. Do not use stigmatizing labels in participant-facing content.
- Use a six-stage service blueprint: voluntary referral; participant-led plan; paid foundation; credential pathway; supported placement; retention and advancement.
- Include food-safety and essential-skills foundations, role sampling, recognized microcredentials or apprenticeship hours where available, coaching, predictable scheduling and progressive wage/role milestones.
- Research barrier-removal support for child care, transportation, identification, accessibility, work clothing/equipment, scheduling and digital access.
- Referrals require informed consent, minimal data, withdrawal rights and a clear rule that participation is not a condition of school, CFS, EIA, corrections or community services.
- Keep sensitive data with the originating organization unless the participant explicitly authorizes transfer and an approved data-sharing agreement exists.
- Track voluntary referrals, paid training completion, credentials, 90/180/365-day retention, wages, promotion and participant-defined outcomes.
- Cite Manitoba Training and Employment Services, Manitoba EIA employment assistance, Indigenous Skills and Employment Training and CORCAN only as program/referral precedents. A partnership is not established until documented.

#### Program D — Nutrition-forward natural preservation

- Treat vinegar/acetic-acid systems, ascorbic-acid/vitamin-C systems, fermentation/protective cultures and herb/spice/berry polyphenol candidates as research candidates—not approved formulations or claims.
- Confirm that each substance and intended purpose is permitted for the exact food category and level in Canada.
- Select two priority menu products and build a product-specific design of experiments with control formulas, replicate lots, pH, water activity, relevant pathogen and spoilage testing, sensory acceptance, nutrient stability, packaging interaction, cold-chain abuse and statistical decision rules.
- Require regulator-reviewed protocols, accredited laboratory work where applicable, Preventive Control Plan updates and label review.
- Do not change shelf life or claim preservation, antimicrobial action, health or nutrient content without validated evidence and approval.
- Track Listeria growth potential, spoilage counts, validated shelf-life days, nutrient retention, sensory acceptance and cost per meal.
- Cite Health Canada’s permitted-preservatives list and CFIA’s Listeria-control and shelf-life-study guidance.

#### Research Pipeline

Display twelve copy-ready research assignments with priority, discipline, full research brief and concrete deliverable:

| ID | Discipline | Research assignment | Required deliverable |
|---|---|---|---|
| R01 | Data engineering | Factory material-mass balance | Data dictionary, event model, validation rules and dashboard measures |
| R02 | Process engineering | Four-week waste characterization | Sampling protocol, station layout, training sheet and QA checks |
| R03 | Bioenergy engineering | Anaerobic-digestion pre-feasibility | Options matrix, mass/energy balance, risk register and stage-gate recommendation |
| R04 | Program design | Scholarship gap map | Deduplicated opportunity map and funding-gap thesis |
| R05 | Governance | Community-led award model | Terms of reference, scoring rubric and decision log |
| R06 | Research partnerships | Paid applied-research placement | Placement brief, supervision model, IP/data clauses and output rubric |
| R07 | Service design | Consent-based referral pathway | Service blueprint, consent language, data map and escalation paths |
| R08 | Workforce development | Paid training architecture | Competency matrix, curriculum sequence and advancement map |
| R09 | Impact measurement | Barrier and retention model | Unit-cost model, support policy and outcomes framework |
| R10 | Food science | Nutrition-forward preservation screen | Candidate matrix with go/no-go evidence gates |
| R11 | Microbiology | Shelf-life design of experiments | Regulator-reviewable protocol and laboratory data plan |
| R12 | Regulatory affairs | Claim and commercialization gate | Compliance checklist, approval record and launch gate |

The tab must show zero measured waste baseline until real data is supplied and must state that no digester, scholarship, referral agreement, job placement, preservative system or shelf-life extension is operational.

### 6. Market & LOI targets

- Include the 52-category national produce inventory summary.
- Show all 20 Shelly’s priority produce rows.
- Use the menu PDF—not inferred dishes—as each row’s menu evidence.
- Show all 56 LOI/MOU targets across eight tiers.
- Upgrade target status only where sent-mail or another approved communication record proves contact.
- Provide download links to the immutable produce workbook, target workbook and menu PDF.

#### Daily produce-use planning model

Add an **Expected daily use** column to the produce-priority table.

Use this explicit scenario:

- Target capacity: 1,000,000 meals/day.
- Menu items: 45.
- Equal modeled item mix: `1,000,000 ÷ 45 = 22,222.22` servings of each menu item per day.
- Formula: `daily kg = planning grams across one 45-item menu set × 22,222.22 ÷ 1,000`.
- Split meals offering mashed potatoes or carrot/celery sticks 50/50 between the two options; split the vegetable-stick share equally between carrots and celery.
- Split generic mixed fruit, fruit topping and fruit compote equally across apples, bananas, grapes, strawberries and blueberries/cranberries.
- Do not include trim, spoilage, cooking loss, purchasing yield or actual menu popularity.
- Zero means the produce is not named in the current PDF; it does not mean the ingredient can never be used.
- Display the model as an estimate requiring standardized recipes and a real demand mix before procurement.

| Produce priority | Menu evidence | Planning g per equal 45-item set | Expected kg/day |
|---|---|---:|---:|
| Lettuce | Named ingredient | 260 | 5,777.78 |
| Tomatoes | Named ingredient | 765 | 17,000.00 |
| White potatoes | Named ingredient and side-choice allocation | 850 | 18,888.89 |
| Celery | Named ingredient and side-choice allocation | 290 | 6,444.44 |
| Onions and shallots | Onion named; shallot not separately named | 180 | 4,000.00 |
| Cabbage / kale | Cabbage named; kale not named | 20 | 444.44 |
| Dill / mixed herbs | Named ingredient | 5 | 111.11 |
| Garlic | Named ingredient | 19 | 422.22 |
| Blueberries / cranberries | Generic-fruit allocation | 74 | 1,644.44 |
| Carrots and turnips | Carrot named; turnip not separately named | 520 | 11,555.56 |
| Avocados | Not named | 0 | 0.00 |
| Peppers | Not named | 0 | 0.00 |
| Cucumbers | Named ingredient | 20 | 444.44 |
| Strawberries | Generic-fruit allocation | 74 | 1,644.44 |
| Lemons and limes | Not named | 0 | 0.00 |
| Bananas | Generic-fruit allocation | 74 | 1,644.44 |
| Broccoli and cauliflower | Not named | 0 | 0.00 |
| Peas | Named ingredient | 15 | 333.33 |
| Grapes | Generic-fruit allocation | 74 | 1,644.44 |
| Apples | Generic-fruit allocation | 74 | 1,644.44 |

Modeled total: approximately **73,644 kg/day or 73.64 tonnes/day**, averaging approximately **73.6 g of these listed produce priorities per meal**.

### 7. Funding & budget

- Total proposed cost: CA$25.0 million.
- Owner equity: CA$1.0 million / 4%.
- Proposed debt: CA$8.75 million / 35%.
- Proposed grants/contributions: CA$15.25 million / 61%.
- State clearly that proposed allocations are not evidence of awards or credit approval.
- Keep the original twelve-activity budget incomplete until the missing proposal table or another approved budget source is supplied. Do not invent eleven missing rows.

### 8. Live funding

- Show only live or plausibly accessible funding opportunities that fit the project.
- Use current email evidence and authoritative public program sources.
- Track program, funder, fit, amount/range, deadline, current status, evidence, owner and next action.
- Mark applications as submitted, in discussion or planned accurately; never convert them into awards.
- Keep live-program data refreshable because deadlines and eligibility change.

### 9. Meeting schedule

- Show the connected primary calendar as a read-only schedule snapshot.
- The August 15–September 15, 2026 snapshot contained no saved upcoming events.
- Keep email-proposed meetings separate and label them unconfirmed until added to the calendar or otherwise confirmed.

### 10. People & outreach

- Leadership: Vince Bignell and Cat only.
- Include the current 23-row sent-mail tracker covering 13 Manitoba ministerial portfolios, two provincial program/department relationships, seven school divisions and MFNERC.
- Use a table with organization, category, contact person/role, email recipient, first contact, last contact, evidence status, current status, response state, owner, next action and evidence link.
- Include all province ministries and school divisions evidenced in sent mail.
- Do not count a target-workbook row as contacted without communication evidence.

### 11. Email follow-ups

- Build the follow-up queue from Shelly’s Bistro-related Gmail threads.
- Store only the metadata and excerpts needed for the operational record; do not create a bulk mailbox archive.
- Track sender/recipient, organization, subject, last date, thread state, urgency, owner, next action, due date and secure link back to Gmail.
- Separate waiting-for-reply, Richard-to-follow-up and informational threads.

## Data model and evidence controls

Every structured project record should support:

- stable ID;
- title and record type;
- factual status;
- accountable owner;
- source ID and source name;
- source type and source date;
- page, section, tab, row, message or event locator;
- source link or immutable relative path;
- import timestamp;
- notes and next action;
- confidence;
- verification state;
- official-record flag;
- review history;
- conflict links when applicable.

Keep immutable source files under `sources/` and store SHA-256 fingerprints in the source register. Browser-local edits are drafts until reviewed. Exports must retain truth and verification states.

## Security and deployment boundary

- The current implementation is a local operational prototype.
- Bind the development server to `127.0.0.1` only.
- Use restrictive browser/server headers and no analytics or trackers.
- Do not collect passwords.
- Before hosted multi-user deployment, add organization authentication, role-based access, encrypted server-side storage, audit logs, backups, retention rules and approved OAuth integrations.
- Keep GitHub visibility private unless the project owner explicitly approves a change.

## Repository and team workflow

- Default branch: `main`.
- Run locally with `npm start` or `start-app.ps1`.
- Validate with `npm test` before committing.
- Use feature branches and pull requests for teammate changes when practical.
- Do not force-push shared branches or commit secrets.
- Keep `README.md`, this master prompt and the application behavior synchronized.

## Acceptance criteria

The build is acceptable only when:

1. All eleven operational tabs render with meaningful current content.
2. Owner equity, debt and grants total CA$25.0 million and use the corrected 4% / 35% / 61% split.
3. Current leadership shows Vince and Cat only.
4. Workplan reflects the Google Sheet snapshot and publishes the six-week task chart.
5. Equipment and production views retain source quantities, prices, constraints and uncertainty labels.
6. Research & innovation displays four research programs, seven unmeasured waste streams, a six-stage voluntary employment pathway, four preservation experiment families and a twelve-assignment Research Pipeline.
7. Market displays 20 produce priorities, 56 LOI/MOU targets, PDF-backed menu evidence and the expected-daily-use column.
8. The produce model shows its assumptions and the approximately 73.64-tonne/day result as an estimate.
9. People & outreach displays 23 evidence-backed government and education rows.
10. Live funding, calendar and email follow-ups distinguish confirmed facts from proposed or pending actions.
11. Dedicated source-review and conflict tabs are absent from the operational navigation.
12. Desktop and mobile layouts have no document-level horizontal overflow; controls retain visible focus and mobile touch targets.
13. Source downloads work, immutable hashes match and automated validation passes without JavaScript errors.
