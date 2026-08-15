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

Use exactly these ten operational tabs in this order:

1. Overview
2. Workplan
3. Equipment & prices
4. Production flow
5. Market & LOI targets
6. Funding & budget
7. Live funding
8. Meeting schedule
9. People & outreach
10. Email follow-ups

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

### 5. Market & LOI targets

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

### 6. Funding & budget

- Total proposed cost: CA$25.0 million.
- Owner equity: CA$1.0 million / 4%.
- Proposed debt: CA$8.75 million / 35%.
- Proposed grants/contributions: CA$15.25 million / 61%.
- State clearly that proposed allocations are not evidence of awards or credit approval.
- Keep the original twelve-activity budget incomplete until the missing proposal table or another approved budget source is supplied. Do not invent eleven missing rows.

### 7. Live funding

- Show only live or plausibly accessible funding opportunities that fit the project.
- Use current email evidence and authoritative public program sources.
- Track program, funder, fit, amount/range, deadline, current status, evidence, owner and next action.
- Mark applications as submitted, in discussion or planned accurately; never convert them into awards.
- Keep live-program data refreshable because deadlines and eligibility change.

### 8. Meeting schedule

- Show the connected primary calendar as a read-only schedule snapshot.
- The August 15–September 15, 2026 snapshot contained no saved upcoming events.
- Keep email-proposed meetings separate and label them unconfirmed until added to the calendar or otherwise confirmed.

### 9. People & outreach

- Leadership: Vince Bignell and Cat only.
- Include the current 23-row sent-mail tracker covering 13 Manitoba ministerial portfolios, two provincial program/department relationships, seven school divisions and MFNERC.
- Use a table with organization, category, contact person/role, email recipient, first contact, last contact, evidence status, current status, response state, owner, next action and evidence link.
- Include all province ministries and school divisions evidenced in sent mail.
- Do not count a target-workbook row as contacted without communication evidence.

### 10. Email follow-ups

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

1. All ten operational tabs render with meaningful current content.
2. Owner equity, debt and grants total CA$25.0 million and use the corrected 4% / 35% / 61% split.
3. Current leadership shows Vince and Cat only.
4. Workplan reflects the Google Sheet snapshot and publishes the six-week task chart.
5. Equipment and production views retain source quantities, prices, constraints and uncertainty labels.
6. Market displays 20 produce priorities, 56 LOI/MOU targets, PDF-backed menu evidence and the expected-daily-use column.
7. The produce model shows its assumptions and the approximately 73.64-tonne/day result as an estimate.
8. People & outreach displays 23 evidence-backed government and education rows.
9. Live funding, calendar and email follow-ups distinguish confirmed facts from proposed or pending actions.
10. Dedicated source-review and conflict tabs are absent from the operational navigation.
11. Desktop and mobile layouts have no document-level horizontal overflow.
12. Source downloads work, immutable hashes match and automated validation passes without JavaScript errors.

