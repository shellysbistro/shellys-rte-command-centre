# Shelly’s Bistro — RTE Project Command Centre

A responsive, local-first project-controls application for the proposed institutional ready-to-eat production expansion.

## Run it

Install [Node.js 20+](https://nodejs.org), clone the private repository, and run:

```powershell
git clone <private-repository-url>
Set-Location shellys-rte-command-centre
npm start
```

Then open [http://127.0.0.1:4173](http://127.0.0.1:4173). The server binds only to the local computer.

Windows teammates can also run `.\start-app.ps1` after cloning.

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
- Connected Google Sheet workplan with 18 Shelly’s Bistro assignment rows, Richard’s three assigned items, and the complete six-week `Richard Workplan` tab.
- Published task chart, global search, funding and budget views, a live list of available project-fit funding, meeting schedule, contact/outreach controls and an email follow-up queue.
- Equipment & prices tab with the complete 22-category / 64-machine sourcing register, original USD FOB figures, supplemental Canadian landed-cost items, procurement waves and the CA$1.6–1.8M equipment-scope budget.
- Production flow tab with the quantified one-million-meal/day model, 38/62 hot-cold flow, chilling constraint, space impact and scaling rule.
- Pending source-review controls remain internal and are intentionally absent from the main navigation and workplan table.
- Source provenance remains attached to individual records and exports. The dedicated Sources, conflicts and review-queue tabs were removed at the user’s request.
- Confidential JSON snapshot export with truth and verification state retained on every record.
- Browser-local persistence; no analytics, trackers, external API calls or public indexing.

## Important source limitation

The four named project documents from the original build brief remain unattached. The Google Sheet is now connected: a read-only snapshot of `Richard Project Management` was imported on August 12, 2026 from the `General` and `Richard Workplan` tabs. The application links back to the live Sheet; changes made there after the snapshot require a refresh/import before they appear locally.

`Equipment_Report_v2.docx` and `PRODUCTION LOGISTICS BREAKDOWN.docx` were attached and imported on August 12, 2026. Immutable copies are included under `sources/` with their SHA-256 fingerprints. Prices remain in the source currencies and retain approximation/quote labels. A source-level conflict between the blast-chiller landed unit price (~CA$17,000) and the later incremental-unit statement (~CA$6,500) is displayed rather than silently resolved.

On August 12, 2026, the user corrected total owner equity to **CA$1.0M** and directed that the prior CA$5.25M gap be added to grants. The command centre now shows CA$1.0M / 4% owner equity, CA$8.75M / 35% proposed debt and **CA$15.25M / 61% proposed grant/contribution funding**. These are financing-plan allocations, not evidence of awards or lender approval.

Secure Gmail OAuth is connected for `richardc@shellysbistro.com`; the Gmail profile confirms Richard Chimebele. On August 12, 2026, an all-time matching project scan reviewed 410 messages across 184 threads dated March 19–August 11, 2026. Selected funding evidence and current follow-up metadata are included; the application does not store a bulk mailbox copy or any password.

The Meeting schedule is a read-only snapshot of the currently connected primary Google Calendar, which is `richardc@yensbooks.com` rather than the Shelly’s Bistro Gmail account. Likely work meetings are marked for project-relevance confirmation, and no calendar event was created or changed.

The user also supplied `41_Paquin_Contractor_Tracker.xlsx`. Its 11 unique contractor engagements are imported with exact sheet/row provenance, tracker status, quoted ranges, dates and flags. These extracted records remain pending review, and the source workbook is preserved as a read-only copy with its SHA-256 fingerprint. Two internal tracker contradictions are flagged rather than silently resolved.

Current project leadership is Vince Bignell and Cat only. Cat’s formal title and contact details were not supplied and are therefore left missing. Richard Chimebele remains identified only as the authenticated Gmail mailbox profile and in historical source notes—not as current leadership.

The pasted prompt also ends after the first row of the requested twelve-activity budget table. The app includes the one supplied row and records an explicit conflict for the eleven missing activities; it does not invent them.

## Security boundary

This is a local operational prototype. It includes restrictive browser/server headers, local-only binding, no external connections, and no password collection. Before multi-user or hosted deployment, add organization authentication, role-based permissions, server-side encrypted storage, audit logging, backups, retention rules and approved OAuth integrations for Google Workspace/email. Do not expose this build directly to the public internet.
