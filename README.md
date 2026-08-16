# Shelly’s Bistro — RTE Project Command Centre

A responsive, private-first project-controls application for the proposed institutional ready-to-eat production expansion.

The current canonical implementation brief is [MASTER_BUILD_PROMPT.md](MASTER_BUILD_PROMPT.md). Keep it synchronized with approved project corrections, new source imports and material application changes.

## Run it

Install [Node.js 20+](https://nodejs.org), clone the private repository, and run:

```powershell
git clone <private-repository-url>
Set-Location shellys-rte-command-centre
npm install
npm start
```

Then open [http://127.0.0.1:4317](http://127.0.0.1:4317). The dedicated port avoids a collision with another local dashboard on port 4173. The server binds only to the local computer.

Windows teammates can also run `.\start-app.ps1` after cloning.

## Shared task assignments and notifications

The **Task assignments** tab provides one server-backed queue for Cat, Vince and Richard. Cat and Vince can assign through **Add record**, all three people can be assignees, and each selected user can move work from Assigned to In progress to Completed. New tasks appear immediately in every connected app through a live event stream.

Task alerts are email-only. A thread heartbeat named **Shelly task email dispatcher** checks the local task store every five minutes and sends each previously unseen task ID once through connected Gmail. Its deduplication state remains under the ignored `.data/` directory. An approved email webhook can be added later for instant server-side delivery, but Slack and browser-push task routing are not used.

Notification contacts supplied by the project owner are:

- Cat: `catherine@aimadvisors.ca`
- Richard task alerts: `richardc@shellysbistro.com`
- Vince: `vince@shellysbistro.com`

The Aimadvisors Slack account may remain connected for other collaboration, but it is excluded from task-alert routing.

On August 15, 2026, the project owner corrected Richard’s task-alert recipient to the authenticated Gmail/Calendar address `richardc@shellysbistro.com`. Three previously missed task notifications were sent manually from Cat Lee at `catherine@aimadvisors.ca` to the corrected Richard address. The five-minute connector dispatcher now supplies local automatic email recovery; instant server-side email delivery still requires the approved webhook.

Configure private deployment variables without committing a `.env` file:

```text
TASK_NOTIFICATIONS_ENABLED=true
TASK_APP_BASE_URL=https://private-project-host.example
TASK_EMAIL_WEBHOOK_URL=https://approved-private-email-gateway.example/task-alert
CAT_TASK_EMAIL=catherine@aimadvisors.ca
RICHARD_TASK_EMAIL=richardc@shellysbistro.com
VINCE_TASK_EMAIL=vince@shellysbistro.com
TASK_NOTIFICATION_CHANNELS_CAT=email
TASK_NOTIFICATION_CHANNELS_RICHARD=email
TASK_NOTIFICATION_CHANNELS_VINCE=email
```

The email webhook receives a least-data JSON task alert and must return an HTTP success response. Real webhook URLs belong only in deployment secrets.

The default server remains bound to `127.0.0.1`. Team members can only share the queue when their clients reach the same running server. A real cross-device deployment therefore needs HTTPS, durable storage and organization authentication before use; do not expose the unauthenticated server directly to the public internet.

## Team workflow

This repository is intended to remain private. For each change:

```powershell
git pull --ff-only
git switch -c feature/short-description
# edit and test
npm test
git add .
git commit -m "Describe the change"
git push -u origin feature/short-description
```

Open a pull request on GitHub and have another teammate review it before merging into `main`. Do not commit passwords, OAuth tokens, mailbox exports, or `.env` files.

## What works

- Branded floral interface built from the supplied Shelly’s Bistro logo, with responsive desktop and mobile layouts.
- Shared Cat/Vince/Richard task assignments with live list updates, due dates, priorities, status controls and email-only alerts through the connected Gmail dispatcher.
- Connected Google Sheet workplan with 18 Shelly’s Bistro assignment rows, Richard’s three assigned items, and the complete six-week `Richard Workplan` tab.
- Published task chart, global search, funding and budget views, a live list of available project-fit funding, meeting schedule, contact/outreach controls and an email follow-up queue.
- Equipment & prices tab with the complete 22-category / 64-machine sourcing register, original USD FOB figures, supplemental Canadian landed-cost items, procurement waves and the CA$1.6–1.8M equipment-scope budget.
- Production flow tab with the quantified one-million-meal/day model, 38/62 hot-cold flow, chilling constraint, space impact and scaling rule.
- Research & innovation tab with four mission-led programs: prevention-first factory waste and biogas research, scholarships/bursaries, voluntary inclusive employment pathways, and nutrition-forward preservation experiments. It includes seven unmeasured waste streams, a six-stage service blueprint and a twelve-assignment Research Pipeline with evidence gates.
- Market & LOI targets tab with a 52-category national produce inventory summary, 20 sourcing priorities linked to the attached 45-item school menu, transparent estimated daily-use figures and all 56 Manitoba LOI/MOU targets across eight tiers.
- People & outreach includes a 23-row sent-mail tracker covering 13 Manitoba ministerial portfolios, two provincial program/department relationships, seven school divisions and MFNERC.
- Pending source-review controls remain internal and are intentionally absent from the main navigation and workplan table.
- Source provenance remains attached to individual records and exports. The dedicated Sources, conflicts and review-queue tabs were removed at the user’s request.
- Confidential JSON snapshot export with truth and verification state retained on every record.
- Browser-local evidence persistence plus server-backed shared tasks; no analytics, trackers or public indexing.

## Important source limitation

Of the four named project documents from the original build brief, only `shelly general proposal.docx` remains unattached. The Google Sheet is connected: a read-only snapshot of `Richard Project Management` was refreshed on August 15, 2026 from the `General` and `Richard Workplan` tabs. The application links back to the live Sheet; changes made there after the snapshot require a refresh/import before they appear locally.

`Equipment_Report_v2.docx` and `PRODUCTION LOGISTICS BREAKDOWN.docx` were attached and imported on August 12, 2026. Immutable copies are included under `sources/` with their SHA-256 fingerprints. Prices remain in the source currencies and retain approximation/quote labels. A source-level conflict between the blast-chiller landed unit price (~CA$17,000) and the later incremental-unit statement (~CA$6,500) is displayed rather than silently resolved.

On August 12, 2026, the user corrected total owner equity to **CA$1.0M** and directed that the prior CA$5.25M gap be added to grants. The command centre now shows CA$1.0M / 4% owner equity, CA$8.75M / 35% proposed debt and **CA$15.25M / 61% proposed grant/contribution funding**. These are financing-plan allocations, not evidence of awards or lender approval.

Secure Gmail OAuth is connected for `richardc@shellysbistro.com`; the Gmail profile confirms Richard Chimebele. The August 11 baseline covered 410 messages across 184 threads, followed by an incremental review through August 15. Selected funding, ministry, school-division and follow-up metadata are included; the application does not store a bulk mailbox copy or any password.

The Meeting schedule is a read-only snapshot of the `richardc@shellysbistro.com` primary Google Calendar. No saved upcoming event was found in the August 15–September 15 search window. One FPEGF lunch proposal is shown from email but is explicitly marked unconfirmed and was not added to Calendar.

The user also supplied `41_Paquin_Contractor_Tracker.xlsx`. Its 11 unique contractor engagements are imported with exact sheet/row provenance, tracker status, quoted ranges, dates and flags. These extracted records remain pending review, and the source workbook is preserved as a read-only copy with its SHA-256 fingerprint. Two internal tracker contradictions are flagged rather than silently resolved.

`Shellys_Bistro_Canada_Produce_Data.xlsx` and `Shellys_LOI_MOU_Target_List_Expanded.xlsx` were imported on August 15, 2026 and preserved under `sources/` with SHA-256 fingerprints. The produce source mixes CAD and USD bases for specified rows, and some HS categories cover multiple products. Blank status cells in the LOI/MOU source are treated as not started unless a matching sent-mail thread supplies contact evidence.

`Shellys School Nutrition Menu.pdf` was imported on August 15, 2026 and preserved under `sources/` with its SHA-256 fingerprint. Its 45 menu items now supply the ingredient evidence shown beside each produce priority. The expected-daily-use column is a capacity-planning scenario: one million meals are split evenly across the 45 items and multiplied by planning portions; side-choice and generic-fruit allocation rules are shown in the app. It excludes trim, spoilage, cooking loss and actual menu popularity, so it is not a purchasing forecast.

The Research & innovation portfolio uses current official Canadian and Manitoba sources as precedents and regulatory anchors. It does not claim that a factory waste baseline, anaerobic digester, scholarship fund, referral partnership, employment placement, preservative system or shelf-life extension exists. Each program remains behind measurement, ethics, technical, regulatory and community-governance gates.

Current project leadership is Vince Bignell and Cat only. Cat’s formal title was not supplied; her task-notification email is `catherine@aimadvisors.ca`. Richard Chimebele remains identified only as the authenticated Gmail mailbox profile, a task/workplan participant and a person in historical source notes—not as current leadership.

The pasted prompt also ends after the first row of the requested twelve-activity budget table. The app includes the one supplied row and records an explicit conflict for the eleven missing activities; it does not invent them.

## Security boundary

This is a private operational prototype. It includes restrictive browser/server headers, local-only binding by default and no password collection. Task alerts use the connected Gmail dispatcher only; a direct email webhook would still require private provider credentials. Before multi-user or hosted deployment, add organization authentication, role-based permissions, server-side encrypted storage, delivery audit logs, backups, retention rules and approved OAuth/provider integrations. Do not expose this build directly to the public internet.
