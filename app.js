"use strict";

const STORAGE_KEY = "shellys-rte-command-centre-v11";
const SOURCE_DB = "shellys-rte-source-vault-v1";
const TASK_USER_KEY = "shellys-rte-task-user-v1";
const TASK_PUSH_PERSON_KEY = "shellys-rte-push-person-v1";

function savedTaskUser() {
  try {
    const saved = localStorage.getItem(TASK_USER_KEY);
    return ["Cat", "Richard"].includes(saved) ? saved : "Cat";
  } catch (_error) {
    return "Cat";
  }
}

function savedPushPerson() {
  try {
    const saved = localStorage.getItem(TASK_PUSH_PERSON_KEY);
    return ["Cat", "Richard"].includes(saved) ? saved : "";
  } catch (_error) {
    return "";
  }
}

const seedState = {
  version: 1,
  metadata: {
    projectName: "Shelly’s Bistro — RTE Project Command Centre",
    seededFrom: "Master build prompt supplied in this build session",
    importedAt: "2026-08-15",
    note: "The supplied prompt ended after the first row of the twelve-activity budget table. No missing values were inferred.",
  },
  sources: [
    {
      id: "proposal",
      name: "shelly general proposal.docx",
      type: "Proposal",
      declaredDate: "August 2026",
      state: "Missing",
      detail: "Named as authoritative for project scope, financing, readiness, governance and program positions. Original file was not attached to this workspace.",
      reference: "Awaiting immutable original",
    },
    {
      id: "menu",
      name: "Shellys School Nutrition Menu.pdf",
      type: "Menu",
      declaredDate: "PDF created August 11, 2026",
      state: "Available",
      detail: "Six-page school nutrition menu with 45 items across eggless breakfast, egg breakfast, nutritious menu and fat lunch sections, plus a six-icon allergen legend. Ingredient statements are used as the menu evidence for produce priorities.",
      reference: "Pages 1–6 · imported August 15, 2026 · SHA-256 771A90B689B22A5E2421DAF09210F3245C7BFCB43E908A4DE0C2C55DD31AB416",
      relativePath: "sources/Shellys School Nutrition Menu.pdf",
      sha256: "771A90B689B22A5E2421DAF09210F3245C7BFCB43E908A4DE0C2C55DD31AB416",
    },
    {
      id: "logistics",
      name: "PRODUCTION LOGISTICS BREAKDOWN.docx",
      type: "Logistics analysis",
      declaredDate: "August 11, 2026",
      state: "Available",
      detail: "Production capacity analysis for the one-million-meal/day concept, including chilling limits, hot/cold parallel flows, logistics footprint and supplemental chilled-equipment pricing.",
      reference: "Imported August 12, 2026 · SHA-256 B485D36BAEA3B2C7AB8EDB2BA3B0B4FF843D24F576D7CA8165B24AA2704AB87A",
      relativePath: "sources/PRODUCTION LOGISTICS BREAKDOWN.docx",
      sha256: "B485D36BAEA3B2C7AB8EDB2BA3B0B4FF843D24F576D7CA8165B24AA2704AB87A",
    },
    {
      id: "equipment",
      name: "Equipment_Report_v2.docx",
      type: "Equipment report",
      declaredDate: "July 20, 2026 · Revision 2",
      state: "Available",
      detail: "China-direct multi-unit equipment plan covering 22 categories, 64 machines, supplier pricing, landed-cost planning, compliance and staged procurement.",
      reference: "Imported August 12, 2026 · SHA-256 B9279450191C930C2CCEF5AEB57E1D7EF4DAD2E10BD4046433F39F4737B19038",
      relativePath: "sources/Equipment_Report_v2.docx",
      sha256: "B9279450191C930C2CCEF5AEB57E1D7EF4DAD2E10BD4046433F39F4737B19038",
    },
    {
      id: "workplan-sheet",
      name: "Richard Project Management Google Sheet",
      type: "Live workplan",
      declaredDate: "Snapshot refreshed August 15, 2026",
      state: "Connected",
      detail: "Read-only import of the General assignment register and Richard Workplan tabs. Refreshed August 15, 2026; the sheet contained the same 23 assignments and six-week workplan as the prior snapshot.",
      reference: "docs.google.com/spreadsheets/d/1gqojEjzs8s99tcJHS9bwhLfvhzeSxCaXauj2-oFf1E8 · General gid 613747079 · Richard Workplan gid 1493963392",
    },
    {
      id: "mailbox",
      name: "richardc@shellysbistro.com project mailbox",
      type: "Email evidence",
      declaredDate: "Ongoing",
      state: "Connected",
      detail: "Secure Gmail OAuth connection verified August 15, 2026. The March 19–August 11 baseline covered 410 messages across 184 threads; an incremental August 12–15 review added current funding, Food Development Centre and school-division actions. No mailbox password or bulk message body archive is stored in this application.",
      reference: "Gmail OAuth profile · account ID 110400205241251263409",
    },
    {
      id: "calendar",
      name: "Richard Chimebele primary Google Calendar",
      type: "Meeting schedule",
      declaredDate: "Snapshot refreshed August 15, 2026",
      state: "Connected",
      detail: "Read-only schedule snapshot from richardc@shellysbistro.com. No saved upcoming events were found for August 15–September 15, 2026; one email-derived FPEGF lunch proposal is shown separately and remains unconfirmed.",
      reference: "Google Calendar OAuth profile · account ID 110400205241251263409",
    },
    {
      id: "contractor-tracker",
      name: "41_Paquin_Contractor_Tracker.xlsx",
      type: "Contractor due-diligence tracker",
      declaredDate: "Report as of July 20, 2026",
      state: "Available",
      detail: "Two-sheet workbook containing 11 unique contractor engagements. The detailed tracker records quoted ranges, contact activity, proposed dates, source statuses and flags. Extracted records remain pending review.",
      reference: "Contractor Tracker!A1:L21 and Sheet1!A1:C23 · imported August 12, 2026 · SHA-256 6395F01FA0FD4B636F4E2D8CF608051FF4F3D9E11E4098B50E28F3171C845A9F",
      relativePath: "sources/41_Paquin_Contractor_Tracker.xlsx",
      sha256: "6395F01FA0FD4B636F4E2D8CF608051FF4F3D9E11E4098B50E28F3171C845A9F",
    },
    {
      id: "produce-data",
      name: "Shellys_Bistro_Canada_Produce_Data.xlsx",
      type: "Produce market and supply data",
      declaredDate: "Data cutoff August 13, 2026",
      state: "Available",
      detail: "Seven-sheet workbook with a 52-category Canadian produce inventory, supplier and consumption detail, and 20 Shelly’s priority ingredients with supply-risk and sourcing actions.",
      reference: "Shellys Priorities!A1:V21 and Master Inventory!A1:M53 · imported August 15, 2026 · SHA-256 8CA9AAED8B79D0638D659EAE99BD526196CFF2E15B2CBE249A9830DB20015B60",
      relativePath: "sources/Shellys_Bistro_Canada_Produce_Data.xlsx",
      sha256: "8CA9AAED8B79D0638D659EAE99BD526196CFF2E15B2CBE249A9830DB20015B60",
    },
    {
      id: "loi-targets",
      name: "Shellys_LOI_MOU_Target_List_Expanded.xlsx",
      type: "LOI / MOU target pipeline",
      declaredDate: "Imported August 15, 2026",
      state: "Available",
      detail: "Eight-tier Manitoba target list containing 56 institutional, Indigenous, emergency, commercial and supply-chain relationship targets. Blank workbook statuses remain shown as not started unless sent-mail evidence establishes contact.",
      reference: "LOI-MOU Targets!A4:H68 · imported August 15, 2026 · SHA-256 7C15464EAB9A61475503C656E7AA36416E9813861D07652A5D90C5087233C31E",
      relativePath: "sources/Shellys_LOI_MOU_Target_List_Expanded.xlsx",
      sha256: "7C15464EAB9A61475503C656E7AA36416E9813861D07652A5D90C5087233C31E",
    },
    {
      id: "manual",
      name: "Manual project records",
      type: "Manual evidence",
      declaredDate: "Ongoing",
      state: "Available",
      detail: "Draft call notes, meeting notes, quotes and other records can be entered locally. They require evidence review before approval.",
      reference: "Local browser storage",
    },
    {
      id: "build-prompt",
      name: "Master build prompt",
      type: "Build brief",
      declaredDate: "Imported August 11, 2026",
      state: "Available",
      detail: "Used to seed this preliminary workspace. It is not a substitute for the named authoritative originals.",
      reference: "Attached pasted-text.txt · lines 1–96; content ends mid-budget table",
    },
  ],
  records: [
    {
      id: "claim-indigenous-owned",
      title: "100% Indigenous-owned Manitoba food producer",
      type: "Evidence",
      status: "Verified current fact",
      owner: "Unassigned",
      sourceId: "proposal",
      sourceName: "shelly general proposal.docx",
      locator: "Project identity section · exact page pending",
      sourceDate: "August 2026",
      notes: "The supplied brief says the proposal describes Shelly’s Indigenous Bistro as 100% Indigenous-owned and First Nations-owned.",
      verification: "Pending source attachment",
      confidence: "Medium",
      official: false,
      importedAt: "2026-08-11",
      nextAction: "Attach the proposal and verify the exact wording and page.",
    },
    {
      id: "claim-current-operation",
      title: "Current Winnipeg kitchen and production scale",
      type: "Evidence",
      status: "Verified current fact",
      owner: "Unassigned",
      sourceId: "proposal",
      sourceName: "shelly general proposal.docx",
      locator: "Current operation section · exact page pending",
      sourceDate: "August 2026",
      notes: "Brief describes a roughly 4,000 sq. ft. commercial kitchen, more than 1.2 million meals annually for paying institutional clients, and support for more than 50 micro-cafés.",
      verification: "Pending source attachment",
      confidence: "Medium",
      official: false,
      importedAt: "2026-08-11",
      nextAction: "Verify each operating metric independently against the proposal.",
    },
    {
      id: "claim-expansion",
      title: "Proposed 40,000+ sq. ft. RTE facility at 41 Paquin Road",
      type: "Evidence",
      status: "Proposed",
      owner: "Unassigned",
      sourceId: "proposal",
      sourceName: "shelly general proposal.docx",
      locator: "Expansion scope section · exact page pending",
      sourceDate: "August 2026",
      notes: "Proposed facility concept includes one-way food-safe flow, allergen-separated zones, test-kitchen capability, cold storage and an ordering/nutrition/dispatch platform.",
      verification: "Pending source attachment",
      confidence: "Medium",
      official: false,
      importedAt: "2026-08-11",
      nextAction: "Confirm address, area and design features in the approved proposal and concept plans.",
    },
    {
      id: "task-site",
      title: "Site identified and conditional bid placed",
      type: "Task",
      status: "In progress",
      owner: "Unassigned",
      sourceId: "proposal",
      sourceName: "shelly general proposal.docx",
      locator: "Readiness snapshot · exact page pending",
      sourceDate: "August 2026",
      notes: "A conditional bid is not possession or completed acquisition.",
      verification: "Pending source attachment",
      confidence: "Medium",
      official: false,
      importedAt: "2026-08-11",
      nextAction: "Verify conditions, expiry dates, deposit evidence and closing dependencies.",
    },
    {
      id: "task-concept",
      title: "Concept design",
      type: "Task",
      status: "In progress",
      owner: "Unassigned",
      sourceId: "proposal",
      sourceName: "shelly general proposal.docx",
      locator: "Readiness snapshot · exact page pending",
      sourceDate: "August 2026",
      notes: "The brief labels concept design as in progress. No completion percentage was supplied.",
      verification: "Pending source attachment",
      confidence: "Medium",
      official: false,
      importedAt: "2026-08-11",
      nextAction: "Attach dated concept drawings and confirm accountable design lead.",
    },
    {
      id: "task-equipment",
      title: "Equipment packages selected or researched",
      type: "Task",
      status: "Identified",
      owner: "Unassigned",
      sourceId: "equipment",
      sourceName: "Equipment_Report_v2.docx",
      locator: "Equipment categories and sourcing assumptions · section pending",
      sourceDate: "July 20, 2026",
      notes: "Equipment is described as researched/selected, not ordered. Firm quotations are pending.",
      verification: "Pending source attachment",
      confidence: "Medium",
      official: false,
      importedAt: "2026-08-11",
      nextAction: "Attach the report; reconcile machine counts, specifications, vendors and quote status.",
    },
    {
      id: "task-tech",
      title: "Ordering, nutrition and dispatch platform",
      type: "Evidence",
      status: "Verified current fact",
      owner: "Unassigned",
      sourceId: "proposal",
      sourceName: "shelly general proposal.docx",
      locator: "Technology platform section · exact page pending",
      sourceDate: "August 2026",
      notes: "The proposal is described as saying the platform is designed and in use with current customers. This does not prove readiness for the proposed expansion.",
      verification: "Pending source attachment",
      confidence: "Medium",
      official: false,
      importedAt: "2026-08-11",
      nextAction: "Validate current production use, expansion requirements, integrations and capacity.",
    },
    {
      id: "task-procurement-registration",
      title: "Manitoba Indigenous Procurement Initiative registration",
      type: "Task",
      status: "Completed",
      owner: "Unassigned",
      sourceId: "proposal",
      sourceName: "shelly general proposal.docx",
      locator: "Readiness section · exact page pending",
      sourceDate: "August 2026",
      notes: "The supplied brief says the proposal describes registration as complete. Completion remains unverified until the original evidence is approved.",
      verification: "Pending source attachment",
      confidence: "Medium",
      official: false,
      importedAt: "2026-08-11",
      nextAction: "Attach registration confirmation and verify current status.",
    },
    {
      id: "task-construction",
      title: "Facility construction and conversion",
      type: "Task",
      status: "Not started",
      owner: "Unassigned",
      sourceId: "proposal",
      sourceName: "shelly general proposal.docx",
      locator: "Readiness and dependencies · exact page pending",
      sourceDate: "August 2026",
      notes: "Not complete; dependent on financing/funding and later gates.",
      verification: "Pending source attachment",
      confidence: "Medium",
      official: false,
      importedAt: "2026-08-11",
      nextAction: "Define scope, contracting strategy, prerequisites and evidence-based start gate.",
    },
    {
      id: "task-engineering",
      title: "Conversion engineering",
      type: "Task",
      status: "Not started",
      owner: "Unassigned",
      sourceId: "proposal",
      sourceName: "shelly general proposal.docx",
      locator: "Readiness and dependencies · exact page pending",
      sourceDate: "August 2026",
      notes: "Not documented as complete and expected to depend on financing/funding or later gates.",
      verification: "Pending source attachment",
      confidence: "Medium",
      official: false,
      importedAt: "2026-08-11",
      nextAction: "Identify engineering disciplines, procurement route and approval dependencies.",
    },
    {
      id: "task-permits",
      title: "Permits and approvals for the new facility",
      type: "Task",
      status: "Not started",
      owner: "Unassigned",
      sourceId: "proposal",
      sourceName: "shelly general proposal.docx",
      locator: "Readiness and dependencies · exact page pending",
      sourceDate: "August 2026",
      notes: "No permit is treated as issued. The brief identifies permits as not complete.",
      verification: "Pending source attachment",
      confidence: "Medium",
      official: false,
      importedAt: "2026-08-11",
      nextAction: "Build a permit register with authority, submission date, status and supporting document.",
    },
    {
      id: "task-licensing",
      title: "New-plant licensing and certification",
      type: "Task",
      status: "Not started",
      owner: "Unassigned",
      sourceId: "proposal",
      sourceName: "shelly general proposal.docx",
      locator: "Readiness and dependencies · exact page pending",
      sourceDate: "August 2026",
      notes: "No new-plant licence or certification is documented as secured.",
      verification: "Pending source attachment",
      confidence: "Medium",
      official: false,
      importedAt: "2026-08-11",
      nextAction: "Confirm applicable regulators, requirements, lead times and dependencies.",
    },
    {
      id: "task-staffing",
      title: "Staffing waves for expanded operations",
      type: "Task",
      status: "Proposed",
      owner: "Unassigned",
      sourceId: "proposal",
      sourceName: "shelly general proposal.docx",
      locator: "Staffing plan · exact page pending",
      sourceDate: "August 2026",
      notes: "Staffing waves are planned and not complete.",
      verification: "Pending source attachment",
      confidence: "Medium",
      official: false,
      importedAt: "2026-08-11",
      nextAction: "Validate roles, wave timing, costs, training and responsible owner.",
    },
    {
      id: "task-commissioning",
      title: "Equipment installation and commissioning",
      type: "Task",
      status: "Not started",
      owner: "Unassigned",
      sourceId: "equipment",
      sourceName: "Equipment_Report_v2.docx",
      locator: "Procurement sequence · exact section pending",
      sourceDate: "July 20, 2026",
      notes: "Equipment is not documented as ordered; commissioning therefore remains a future gate.",
      verification: "Pending source attachment",
      confidence: "Medium",
      official: false,
      importedAt: "2026-08-11",
      nextAction: "Establish approved purchase, delivery, utility, FAT/SAT and acceptance prerequisites.",
    },
    {
      id: "task-possession",
      title: "Possession of proposed facility",
      type: "Milestone",
      status: "Not started",
      owner: "Unassigned",
      sourceId: "proposal",
      sourceName: "shelly general proposal.docx",
      locator: "Facility acquisition section · exact page pending",
      sourceDate: "August 2026",
      notes: "A conditional bid and deposit do not establish possession. No possession date is claimed.",
      verification: "Pending source attachment",
      confidence: "Medium",
      official: false,
      importedAt: "2026-08-11",
      nextAction: "Confirm agreement conditions, closing requirements and possession evidence.",
    },
    {
      id: "fund-owner-equity",
      title: "Owner equity financing layer",
      type: "Funding",
      status: "Verified current fact",
      owner: "Vince Bignell",
      sourceId: "manual",
      sourceName: "Approved user correction",
      locator: "Direct project-owner correction in Codex task",
      sourceDate: "August 12, 2026",
      notes: "Owner equity is CA$1.0M in total, not CA$6.25M. The project brief separately describes this CA$1.0M as the facility deposit already deployed; deposit evidence still requires attachment.",
      verification: "Approved",
      confidence: "High",
      official: true,
      importedAt: "2026-08-12",
      nextAction: "Attach proof of the CA$1.0M facility deposit and reconcile the user-directed grant/contribution allocation against the approved financing plan.",
    },
    {
      id: "fund-debt",
      title: "Debt financing layer",
      type: "Funding",
      status: "In discussion",
      owner: "Unassigned",
      sourceId: "mailbox",
      sourceName: "FCC Follow Up-Financial Statements/IC Canada",
      locator: "Gmail message 19fd7a48b9f888cf · August 6–11, 2026 thread",
      sourceDate: "August 11, 2026",
      notes: "CA$8.75M / 35% remains the proposed debt layer. FCC is evaluating the opportunity and may partner with another financial institution, but requires accountant-prepared statements and revenue-support documentation before serious financing consideration. No term sheet or credit approval is documented.",
      verification: "Email evidence reviewed",
      confidence: "High",
      official: false,
      importedAt: "2026-08-12",
      nextAction: "Vince to provide accountant-prepared statements; add signed LOIs or MOUs as they are obtained. Keep the layer labelled in discussion until a lender issues approval.",
    },
    {
      id: "fund-grants",
      title: "Grant or contribution financing layer",
      type: "Funding",
      status: "Proposed",
      owner: "Unassigned",
      sourceId: "manual",
      sourceName: "Approved user correction",
      locator: "Direct project-owner correction in Codex task",
      sourceDate: "August 12, 2026",
      notes: "CA$15.25M / 61% is now allocated to the proposed grant/contribution layer. This is a financing-plan allocation, not an award. The separate SRF Food Security application is under review and does not establish approval of this amount.",
      verification: "Approved allocation · program awards unverified",
      confidence: "High",
      official: false,
      importedAt: "2026-08-12",
      nextAction: "Map the CA$15.25M allocation to specific programs and amounts; preserve application, review and approval states separately.",
    },
    {
      id: "contractor-transcona",
      title: "Transcona Roofing",
      type: "Contractor",
      status: "Conflicting information",
      sourceStatus: "Invoiced Dispute Resolved",
      scope: "Commercial roof inspection",
      contact: "Jackelynn Payne",
      contactDetail: "204-806-1517",
      quoteLow: 795,
      quoteHigh: 795,
      totalLow: 834.75,
      totalHigh: 834.75,
      proposedDate: "Jul 14 (completed) — DISPUTED",
      owner: "Unassigned",
      sourceId: "contractor-tracker",
      sourceName: "41_Paquin_Contractor_Tracker.xlsx",
      locator: "Contractor Tracker!A5:L5",
      sourceDate: "Report as of July 20, 2026",
      notes: "The row says the inspection was completed and labels the invoice dispute resolved, but its note says authorization was disputed and payment should be held until resolved. Current resolution cannot be inferred.",
      verification: "Pending source review",
      confidence: "High",
      official: false,
      importedAt: "2026-08-12",
      nextAction: "Resolve the authorization/payment contradiction and approve current invoice status before payment.",
    },
    {
      id: "contractor-mcw",
      title: "MCW Consultants",
      type: "Contractor",
      status: "In discussion",
      sourceStatus: "Range Given — Final Fee Pending",
      scope: "Mechanical/electrical engineering review",
      contact: "Elliott Garfinkel / Cam Dahl",
      contactDetail: "ext. 237",
      quoteLow: 6800,
      quoteHigh: 10000,
      totalLow: 7140,
      totalHigh: 10500,
      proposedDate: "TBD (availability ≈ 2 weeks from Jul 6)",
      owner: "Unassigned",
      sourceId: "contractor-tracker",
      sourceName: "41_Paquin_Contractor_Tracker.xlsx",
      locator: "Contractor Tracker!A6:L6",
      sourceDate: "Report as of July 20, 2026",
      notes: "Estimated range excludes tax and disbursements. Final fee depends on building size/complexity; the tracker says a final fee and schedule update had not been received since Jul 10.",
      verification: "Pending source review",
      confidence: "High",
      official: false,
      importedAt: "2026-08-12",
      nextAction: "Obtain the final fee, disbursements and confirmed schedule.",
    },
    {
      id: "contractor-hlc-pca",
      title: "HLC Consulting (PCA)",
      type: "Contractor",
      status: "Identified",
      sourceStatus: "Listed on Sheet1 only",
      scope: "Property Condition Assessment (ASTM E2018-24)",
      contact: "Nathan Moschler",
      contactDetail: "Not supplied for this engagement",
      quoteLow: null,
      quoteHigh: null,
      totalLow: null,
      totalHigh: null,
      proposedDate: "Not supplied",
      owner: "Unassigned",
      sourceId: "contractor-tracker",
      sourceName: "41_Paquin_Contractor_Tracker.xlsx",
      locator: "Sheet1!A4:C4",
      sourceDate: "Workbook attached August 12, 2026",
      notes: "This PCA engagement appears in the workbook’s secondary list but not in the detailed tracker. No price, date, contact activity or engagement status is supplied.",
      verification: "Pending source review",
      confidence: "High",
      official: false,
      importedAt: "2026-08-12",
      nextAction: "Confirm whether PCA outreach occurred and add a dated communication or proposal record.",
    },
    {
      id: "contractor-hlc-esa",
      title: "HLC Consulting (Phase I ESA)",
      type: "Contractor",
      status: "In discussion",
      sourceStatus: "Proposal Received — Unsigned",
      scope: "Environmental Site Assessment (CSA Z768-01)",
      contact: "Nathan Moschler",
      contactDetail: "204-290-1031",
      quoteLow: 3700,
      quoteHigh: 3700,
      totalLow: 3885,
      totalHigh: 3885,
      proposedDate: "Proposed Jul 23 PM or Jul 24 AM",
      owner: "Unassigned",
      sourceId: "contractor-tracker",
      sourceName: "41_Paquin_Contractor_Tracker.xlsx",
      locator: "Contractor Tracker!A7:L7",
      sourceDate: "Report as of July 20, 2026",
      notes: "Proposal is recorded as received but unsigned. Fee includes an assumed CA$1,000 third-party ERIS search; reliance letters are CA$450 each. Signing is required before engagement.",
      verification: "Pending source review",
      confidence: "High",
      official: false,
      importedAt: "2026-08-12",
      nextAction: "Review scope and agreement, then record signature or rejection evidence.",
    },
    {
      id: "contractor-barnes",
      title: "Barnes & Duncan",
      type: "Contractor",
      status: "In discussion",
      sourceStatus: "Estimate Received — Unsigned",
      scope: "Building Location Certificate + Additional Features",
      contact: "Avery Bowen / Christian Korell",
      contactDetail: "204-284-5999",
      quoteLow: 2950,
      quoteHigh: 2950,
      totalLow: 3150.5,
      totalHigh: 3150.5,
      proposedDate: "Fieldwork starts 5 business days after authorization",
      owner: "Unassigned",
      sourceId: "contractor-tracker",
      sourceName: "41_Paquin_Contractor_Tracker.xlsx",
      locator: "Contractor Tracker!A8:L8",
      sourceDate: "Report as of July 20, 2026",
      notes: "Estimate is recorded as received but unsigned. The stated scope is narrower than the originally requested boundary/easement/encroachment survey; CA$53 of other fees is included in estimated totals.",
      verification: "Pending source review",
      confidence: "High",
      official: false,
      importedAt: "2026-08-12",
      nextAction: "Confirm required survey scope and estimate validity before authorization.",
    },
    {
      id: "contractor-jilmark",
      title: "Jilmark Construction",
      type: "Contractor",
      status: "Conflicting information",
      sourceStatus: "No Fee required",
      scope: "Design-build / GC pricing",
      contact: "David Regehr-Wiens",
      contactDetail: "Not supplied",
      quoteLow: null,
      quoteHigh: null,
      totalLow: null,
      totalHigh: null,
      proposedDate: "Confirmed Jul 24, 9:30–11am",
      owner: "Unassigned",
      sourceId: "contractor-tracker",
      sourceName: "41_Paquin_Contractor_Tracker.xlsx",
      locator: "Contractor Tracker!A9:L9",
      sourceDate: "Report as of July 20, 2026",
      notes: "The status says no fee is required, while the note says no fee yet and instructs the team to request one. It also asks whether the Jul 16 site visit actually took place.",
      verification: "Pending source review",
      confidence: "High",
      official: false,
      importedAt: "2026-08-12",
      nextAction: "Confirm site-visit occurrence and whether a fee or pricing proposal is expected.",
    },
    {
      id: "contractor-castle",
      title: "Castle Pest Control",
      type: "Contractor",
      status: "In discussion",
      sourceStatus: "No Fee required",
      scope: "Pest inspection & program plan",
      contact: "James Girden",
      contactDetail: "431-999-2402",
      quoteLow: null,
      quoteHigh: null,
      totalLow: null,
      totalHigh: null,
      proposedDate: "Proposed Jul 24, 10am",
      owner: "Unassigned",
      sourceId: "contractor-tracker",
      sourceName: "41_Paquin_Contractor_Tracker.xlsx",
      locator: "Contractor Tracker!A10:L10",
      sourceDate: "Report as of July 20, 2026",
      notes: "The tracker says no fee is required but also says to confirm whether the Jul 13 visit occurred and that no quote was received.",
      verification: "Pending source review",
      confidence: "High",
      official: false,
      importedAt: "2026-08-12",
      nextAction: "Confirm whether an inspection occurred, what scope is included and whether ongoing program pricing is required.",
    },
    {
      id: "contractor-airrite",
      title: "Air-Rite Inc",
      type: "Contractor",
      status: "In discussion",
      sourceStatus: "Awaiting Scope Answers",
      scope: "HVAC, refrigeration & kitchen equipment review",
      contact: "Ben Hueging",
      contactDetail: "Not supplied",
      quoteLow: null,
      quoteHigh: null,
      totalLow: null,
      totalHigh: null,
      proposedDate: "TBD — awaiting project reply",
      owner: "Unassigned",
      sourceId: "contractor-tracker",
      sourceName: "41_Paquin_Contractor_Tracker.xlsx",
      locator: "Contractor Tracker!A11:L11",
      sourceDate: "Report as of July 20, 2026",
      notes: "The contractor asked whether the plant is operating and for exact review scope. The tracker records that a project-side reply is required.",
      verification: "Pending source review",
      confidence: "High",
      official: false,
      importedAt: "2026-08-12",
      nextAction: "Send approved operating-status and scope answers, then record the response and schedule.",
    },
    {
      id: "contractor-parsus",
      title: "Parsus Engineering",
      type: "Contractor",
      status: "In discussion",
      sourceStatus: "Awaiting Callback",
      scope: "Facility/process engineering review (CFIA readiness)",
      contact: "Alex Korotkov / Jesse Nugent",
      contactDetail: "Callback recorded from 204-336-6637",
      quoteLow: null,
      quoteHigh: null,
      totalLow: null,
      totalHigh: null,
      proposedDate: "TBD — awaiting callback",
      owner: "Unassigned",
      sourceId: "contractor-tracker",
      sourceName: "41_Paquin_Contractor_Tracker.xlsx",
      locator: "Contractor Tracker!A12:L12",
      sourceDate: "Report as of July 20, 2026",
      notes: "The tracker records that Jesse Nugent attempted a return call on Jul 16 and that the call had not been returned as of the report date.",
      verification: "Pending source review",
      confidence: "High",
      official: false,
      importedAt: "2026-08-12",
      nextAction: "Assign a current owner to return the call and document the outcome.",
    },
    {
      id: "contractor-phillips",
      title: "Phillips & Stevens",
      type: "Contractor",
      status: "In discussion",
      sourceStatus: "No Response",
      scope: "Survey certificate",
      contact: "Wilson Phillips",
      contactDetail: "Not supplied",
      quoteLow: null,
      quoteHigh: null,
      totalLow: null,
      totalHigh: null,
      proposedDate: "TBD — no response",
      owner: "Unassigned",
      sourceId: "contractor-tracker",
      sourceName: "41_Paquin_Contractor_Tracker.xlsx",
      locator: "Contractor Tracker!A13:L13",
      sourceDate: "Report as of July 20, 2026",
      notes: "The tracker says drawings and the address were sent Jul 10 and no availability or fee response had been received as of the report date.",
      verification: "Pending source review",
      confidence: "High",
      official: false,
      importedAt: "2026-08-12",
      nextAction: "Follow up or establish a documented alternate survey option.",
    },
    {
      id: "contractor-beach-rocke",
      title: "Beach Rocke Engineering",
      type: "Contractor",
      status: "Declined",
      sourceStatus: "Declined",
      scope: "Structural engineering assessment",
      contact: "Roman Hudon",
      contactDetail: "Not supplied",
      quoteLow: null,
      quoteHigh: null,
      totalLow: null,
      totalHigh: null,
      proposedDate: "N/A",
      owner: "Unassigned",
      sourceId: "contractor-tracker",
      sourceName: "41_Paquin_Contractor_Tracker.xlsx",
      locator: "Contractor Tracker!A14:L14",
      sourceDate: "Report as of July 20, 2026",
      notes: "The tracker records two declines, first due to timing and then because the building was too large for the office to take on.",
      verification: "Pending source review",
      confidence: "High",
      official: false,
      importedAt: "2026-08-12",
      nextAction: "Identify an alternate structural engineering firm; do not treat Beach Rocke as available.",
    },
    {
      id: "risk-offtake",
      title: "No signed supply or offtake contracts documented",
      type: "Risk",
      status: "Missing information",
      owner: "Unassigned",
      sourceId: "proposal",
      sourceName: "shelly general proposal.docx",
      locator: "Commercial readiness · exact page pending",
      sourceDate: "August 2026",
      notes: "The supplied brief explicitly says no signed supply or offtake contracts are documented for the expansion.",
      verification: "Pending source attachment",
      confidence: "Medium",
      official: false,
      importedAt: "2026-08-11",
      nextAction: "Maintain a prospect pipeline, but only mark a contract secured when a signed agreement is approved as evidence.",
    },
    {
      id: "risk-firm-quotes",
      title: "Firm equipment quotations are pending",
      type: "Risk",
      status: "Missing information",
      owner: "Unassigned",
      sourceId: "equipment",
      sourceName: "Equipment_Report_v2.docx",
      locator: "Sourcing status · exact section pending",
      sourceDate: "July 20, 2026",
      notes: "Researched supplier and pricing assumptions are not firm quotations or purchase orders.",
      verification: "Pending source attachment",
      confidence: "Medium",
      official: false,
      importedAt: "2026-08-11",
      nextAction: "Obtain comparable, dated quotations including freight, duty, installation, warranty and certification.",
    },
  ],
  people: [
    {
      id: "person-vince",
      name: "Vince Bignell",
      role: "Owner and culinary lead",
      relationship: "Project leadership",
      outreachState: "Verified current fact",
      evidence: "Named in the supplied brief and retained in the current two-person leadership roster by the user on August 12, 2026.",
      contact: "Not stored",
    },
    {
      id: "person-cat",
      name: "Cat",
      role: "Leadership role — title not supplied",
      relationship: "Project leadership",
      outreachState: "Verified current fact",
      evidence: "Added to the current leadership roster through the user’s direct correction on August 12, 2026.",
      contact: "Contact details and formal title not supplied.",
    },
  ],
  funding: [
    { id: "owner-equity", label: "Owner equity", amount: 1000000, percent: 4, status: "Confirmed by user", detail: "CA$1.0M total owner equity; described in the brief as the facility deposit already deployed." },
    { id: "debt", label: "Debt", amount: 8750000, percent: 35, status: "In discussion", detail: "No issued term sheet or credit approval documented in the brief." },
    { id: "grant", label: "Grant / contribution", amount: 15250000, percent: 61, status: "Proposed allocation", detail: "Includes the user-directed CA$5.25M reallocation. No award is implied." },
  ],
  equipmentData: {
    importedAt: "August 15, 2026",
    sourceDate: "Revision 2 · July 20, 2026",
    categories: 22,
    machineCount: 64,
    equipmentFob: "USD ~$689K (~CA$930K)",
    totalProject: "CA$1.6–1.8M",
    timeline: "Staged delivery over 4–6 months",
    sourcePath: "sources/Equipment_Report_v2.docx",
    items: [
      { id: "eq-01", line: "Meat slicer / flaker", supplier: "Zhengzhou Beres Machinery (Henan)", capacity: "6,000 kg/hr", required: "4,765 kg/hr", qty: 2, unitFob: "US$2,299–4,000", extendedFob: "US$6,300", wave: "Wave 2" },
      { id: "eq-02", line: "Meat dicer", supplier: "Chengdu Vleda Star (Sichuan) — Verified", capacity: "3,000 kg/hr", required: "3,176 kg/hr", qty: 2, unitFob: "US$7,800–8,385", extendedFob: "US$16,200", wave: "Wave 2" },
      { id: "eq-03", line: "Root vegetable wash + peel", supplier: "Jiaozuo Zhoufeng (Henan) — 13 yrs", capacity: "2,000 kg/hr", required: "3,971 kg/hr", qty: 2, unitFob: "~US$2,000", extendedFob: "US$4,000", wave: "Wave 3" },
      { id: "eq-04", line: "Root vegetable multi-cutter", supplier: "Saidashi Machinery (Henan)", capacity: "2,500 kg/hr", required: "1,588 kg/hr", qty: 1, unitFob: "US$3,365", extendedFob: "US$3,365", wave: "Wave 3" },
      { id: "eq-05", line: "Root vegetable slicer", supplier: "Shandong Xinlongjia (Shandong)", capacity: "3,000 kg/hr", required: "1,191 kg/hr", qty: 1, unitFob: "~US$3,500", extendedFob: "US$3,500", wave: "Wave 2" },
      { id: "eq-06", line: "Root vegetable dicer", supplier: "Shandong Dongsheng (Shandong)", capacity: "3,000–5,000 kg/hr", required: "1,191 kg/hr", qty: 1, unitFob: "Quote ~US$17,500", extendedFob: "US$17,500", wave: "Wave 2" },
      { id: "eq-07", line: "Leafy vegetable washer", supplier: "Zhaoqing Fengxiang (Guangdong) — 17 yrs", capacity: "3,000 kg/hr", required: "2,647 kg/hr", qty: 2, unitFob: "US$1,500–3,370", extendedFob: "US$4,870", wave: "Wave 3" },
      { id: "eq-08", line: "Leafy vegetable cutter", supplier: "Zhucheng Dayang (Shandong) — 5 yrs", capacity: "2,000 kg/hr", required: "2,647 kg/hr", qty: 2, unitFob: "US$1,200–4,000", extendedFob: "US$5,200", wave: "Wave 3" },
      { id: "eq-09", line: "Leafy centrifugal dryer", supplier: "Shandong Leading (Shandong) — 10 yrs", capacity: "1,500 kg/hr", required: "2,647 kg/hr", qty: 2, unitFob: "US$17,600–22,000", extendedFob: "US$39,600", wave: "Wave 2" },
      { id: "eq-10", line: "Potato peel + wash line", supplier: "Zibo Taibo Industrial (Shandong)", capacity: "3,000 kg/hr", required: "2,647 kg/hr", qty: 1, unitFob: "Quote ~US$20,000/line", extendedFob: "US$20,000", wave: "Wave 2" },
      { id: "eq-11", line: "Fruit peel / cut", supplier: "Henan Vic Machinery (Henan) — 13 yrs", capacity: "1,500 kg/hr", required: "1,324 kg/hr", qty: 1, unitFob: "~US$6,200", extendedFob: "US$6,200", wave: "Wave 3" },
      { id: "eq-12", line: "Rice multihead weighers", supplier: "Guangdong Kenwei (Guangdong) — 18 yrs", capacity: "120 packs/min", required: "245 packs/min", qty: 3, unitFob: "~US$14,000", extendedFob: "US$42,000", wave: "Wave 1" },
      { id: "eq-13", line: "Soup fillers — hot/chunks", supplier: "Guangdong Rifu (Guangdong) — Verified", capacity: "133 packs/min", required: "196 packs/min", qty: 2, unitFob: "US$15,000–20,000", extendedFob: "US$35,000", wave: "Wave 1" },
      { id: "eq-14", line: "Sauce fillers — servo", supplier: "Shanghai Npack (Shanghai) — 15 yrs", capacity: "100 packs/min", required: "147 packs/min", qty: 2, unitFob: "~US$15,000", extendedFob: "US$30,000", wave: "Wave 1" },
      { id: "eq-15", line: "Salad multihead weighers", supplier: "Guangdong Kenwei (Guangdong) — 18 yrs", capacity: "80 packs/min", required: "98 packs/min", qty: 2, unitFob: "~US$30,000", extendedFob: "US$60,000", wave: "Wave 1" },
      { id: "eq-16", line: "Noodle multihead weighers", supplier: "Guangdong Kenwei (Guangdong) — 18 yrs", capacity: "60 packs/min", required: "98 packs/min", qty: 2, unitFob: "~US$17,000", extendedFob: "US$34,000", wave: "Wave 1" },
      { id: "eq-17", line: "MAP tray sealers", supplier: "Guangzhou Fuhe (Guangdong) — 16 yrs", capacity: "140 trays/min", required: "~690 trays/min", qty: 6, unitFob: "~US$34,000", extendedFob: "US$204,000", wave: "Wave 1" },
      { id: "eq-18", line: "Rotary cup fill-seal", supplier: "Wenzhou Crownchi (Zhejiang) — 8 yrs", capacity: "60 cups/min", required: "~200 cups/min", qty: 4, unitFob: "~US$11,000", extendedFob: "US$44,000", wave: "Wave 2" },
      { id: "eq-19", line: "Tunnel ovens — patties", supplier: "Henan Gondor (Henan) — 5 yrs", capacity: "2,000 kg/hr", required: "3,970 kg/hr", qty: 2, unitFob: "US$8,499–18,499", extendedFob: "US$27,000", wave: "Wave 1" },
      { id: "eq-20", line: "Pressure cookers — 1,000 L", supplier: "Shandong Longze (Shandong) — 12 yrs", capacity: "~470 kg/hr each", required: "2,382 kg/hr", qty: 6, unitFob: "US$7,500–8,000", extendedFob: "US$46,500", wave: "Wave 2" },
      { id: "eq-21", line: "Jacketed kettles — 1,000 L", supplier: "Shandong Hede (Shandong) — 6 yrs", capacity: "~500 kg/hr each", required: "1,588 kg/hr", qty: 4, unitFob: "US$650–2,930", extendedFob: "US$7,160", wave: "Wave 3" },
      { id: "eq-22", line: "Metal detectors — CCP", supplier: "JunHong Electronic (Guangdong) — 20 yrs", capacity: "1 per lane", required: "12 lanes + 2 spare", qty: 14, unitFob: "~US$2,300", extendedFob: "US$32,200", wave: "Wave 3" },
    ],
    supplemental: [
      { line: "200 L Euro-bin / meat trolley", specification: "790 × 675 × 700 mm · SS304 mirror finish · DIN 9797", qty: 400, unitCost: "~CA$500 landed", total: "CA$200,000" },
      { line: "Industrial 10-trolley blast chiller", specification: "5.2 × 1.8 × 2.4 m · 30–50 HP · includes stated SPE-1000 certification", qty: 10, unitCost: "~CA$17,000 landed", total: "CA$170,000" },
    ],
    budget: [
      { item: "Equipment FOB China — 64 machines", estimate: "USD ~$689K (~CA$930K)", note: "Extended prices; quoted items use estimates." },
      { item: "Freight, insurance, customs and inland rail", estimate: "CA$220–320K", note: "10–14 40-ft containers via Vancouver and rail to Winnipeg." },
      { item: "SPE-1000 field evaluation", estimate: "CA$51–96K", note: "CA$800–1,500 per machine for 64 machines." },
      { item: "CRN registration", estimate: "CA$30–50K", note: "Ten pressure vessels: six cookers and four kettles." },
      { item: "Installation and commissioning", estimate: "CA$120–180K", note: "Planning estimate for multi-line integration." },
      { item: "Contingency — 15%", estimate: "CA$210–240K", note: "Remediation, spares and price variance." },
      { item: "Total equipment-scope project", estimate: "CA$1.6–1.8M", note: "Excludes building services, cold-chain warehousing and outbound logistics." },
    ],
  },
  productionData: {
    importedAt: "August 12, 2026",
    sourceDate: "August 11, 2026",
    sourcePath: "sources/PRODUCTION LOGISTICS BREAKDOWN.docx",
    targetMeals: "1,000,000 meals/day",
    mealWeight: "450 g average",
    dailyMass: "450,000 kg/day",
    effectiveHours: "17 hr/day at 85% OEE",
    plantRate: "26,500 kg/hr",
    packRate: "~980 packs/min sustained",
    split: { hot: 38, cold: 62 },
    hotCapacity: "170,000 kg/day · approximately 377,000 meals",
    chilling: { fleet: "10 blast chillers", bins: "100 × 200 L bins per cycle", load: "20,000 kg/cycle", cycle: "120 minutes", throughput: "10,000 kg/hr" },
    footprint: [
      { area: "Chilling area", metric: "~250 m²", imperial: "~2,700 sq. ft." },
      { area: "Bin storage / wash", metric: "~150 m²", imperial: "~1,600 sq. ft." },
      { area: "Total logistics footprint", metric: "~400 m²", imperial: "~4,300 sq. ft." },
    ],
    streams: [
      { id: "hot", name: "Heat flow", share: "38% of capacity", steps: [
        { step: "01", title: "Cooking", detail: "Kettles and ovens run on staggered 45–60 minute cycles." },
        { step: "02", title: "Transfer", detail: "Product is decanted through mobile lobe pumps into 200 L Euro-bins." },
        { step: "03", title: "Blast chilling", detail: "Bins enter ten blast chillers for a two-hour drop to 41°F." },
        { step: "04", title: "Cold buffer", detail: "Chilled work-in-progress is held in cold storage." },
        { step: "05", title: "Packaging", detail: "Product is called forward to packaging lines 1–4." },
      ]},
      { id: "cold", name: "Cold flow", share: "62% of capacity", steps: [
        { step: "01", title: "Wash and prep", detail: "Vegetables and fruit are washed and cut on high-capacity continuous lines." },
        { step: "02", title: "Assembly", detail: "Sandwich and wrap items move through high-velocity assembly belts." },
        { step: "03", title: "Direct packaging", detail: "Items feed directly to MAP sealers and cup fillers on lines 5–12." },
        { step: "04", title: "Cold-chain dispatch", detail: "Unheated products bypass blast chilling, preserving hot-flow capacity." },
      ]},
    ],
    scaling: "+1 ten-trolley blast chiller adds approximately 1,000 kg/hr of hot-food capacity.",
    scalingCost: "The same source separately states ~CA$6,500 per additional unit; this conflicts with its ~CA$17,000 landed unit price and requires supplier reconciliation.",
    recommendation: "Proceed with an approximately 40/60 hot/cold split for initial Wave 1 procurement and facility layout.",
  },
  workplanSnapshot: {
    importedAt: "August 12, 2026",
    spreadsheetName: "Richard Project Management",
    spreadsheetUrl: "https://docs.google.com/spreadsheets/d/1gqojEjzs8s99tcJHS9bwhLfvhzeSxCaXauj2-oFf1E8/edit#gid=613747079",
    assignments: [
      { id: "sheet-01", assignment: "Shelly’s Bistro — proposal for the restaurant assessment", originalDue: "12 Jun 2026", newDue: "31 Aug 2026", community: "SIB", collaborators: "Cat, Princely", status: "In progress", notes: "Waiting for further instructions from Cat." },
      { id: "sheet-02", assignment: "The franchise book for Shelly’s", originalDue: "12 Jun 2026", newDue: "31 Aug 2026", community: "SIB", collaborators: "Cat, Vince", status: "In progress", notes: "Cat is reviewing." },
      { id: "sheet-03", assignment: "OCCFN store assessment", originalDue: "12 Jun 2026", newDue: "31 Aug 2026", community: "AIMA", collaborators: "Paul, Michael", status: "Blocker", notes: "No leadership feedback as of June 22; passed to Michael." },
      { id: "sheet-04", assignment: "OCCFN proposal for store expansion", originalDue: "12 Jun 2026", newDue: "31 Aug 2026", community: "AIMA", collaborators: "Paul, Michael", status: "Blocker", notes: "Passed to Michael." },
      { id: "sheet-05", assignment: "Update business plan for the commissary unit", originalDue: "19 Jun 2026", newDue: "31 Aug 2026", community: "SIB", collaborators: "Cat", status: "In progress", notes: "Cat is currently reviewing." },
      { id: "sheet-06", assignment: "Flush the machinery out", originalDue: "19 Jun 2026", newDue: "31 Aug 2026", community: "SIB", collaborators: "Cat, Princely", status: "In progress", notes: "For Cat’s review." },
      { id: "sheet-07", assignment: "Promotional materials audit", originalDue: "31 Aug 2026", newDue: "", community: "SIB", collaborators: "Princely", status: "Recurring", notes: "Brochure, pitch deck, magazine, presentation slides and webpage QR code." },
      { id: "sheet-08", assignment: "3CX 1-800 number setup", originalDue: "30 Jun 2026", newDue: "31 Aug 2026", community: "SIB", collaborators: "Princely", status: "Blocker", notes: "1-800-Shellys; REM is still working on it." },
      { id: "sheet-09", assignment: "IT assessment lists", originalDue: "24 Jul 2026", newDue: "31 Aug 2026", community: "SIB", collaborators: "Richard", status: "Blocker", notes: "Awaiting detailed IT assessment lists from James via WhatsApp." },
      { id: "sheet-10", assignment: "Mail program funders", originalDue: "31 Aug 2026", newDue: "", community: "SIB", collaborators: "Richard", status: "Recurring", notes: "Funding outreach." },
      { id: "sheet-11", assignment: "Project email management", originalDue: "31 Aug 2026", newDue: "", community: "SIB", collaborators: "Princely", status: "Recurring", notes: "Daily follow-up required." },
      { id: "sheet-12", assignment: "Facility / routine audit", originalDue: "31 Aug 2026", newDue: "", community: "SIB", collaborators: "Princely", status: "Recurring", notes: "Ensure routines are being implemented." },
      { id: "sheet-13", assignment: "Ministerial outreach follow-up", originalDue: "31 Aug 2026", newDue: "", community: "SIB", collaborators: "Richard", status: "Recurring", notes: "Materials shared with Minister office (Julie Kentner); awareness confirmed, with site visit pending post-NDA." },
      { id: "sheet-14", assignment: "AI / dashboard consolidation meeting", originalDue: "5 Aug 2026", newDue: "", community: "AIMA", collaborators: "Cat, Jayce", status: "In progress", notes: "Integration of updates." },
      { id: "sheet-15", assignment: "Meeting with CS Mac Gillivray", originalDue: "6 Aug 2026", newDue: "", community: "SIB", collaborators: "Cat, Vince", status: "Pending", notes: "Frontier School Division." },
      { id: "sheet-16", assignment: "Meeting with Minister Munoz", originalDue: "6 Aug 2026", newDue: "", community: "SIB", collaborators: "Ashley, Cat, Vince", status: "Pending", notes: "Ministry of New Technology." },
      { id: "sheet-17", assignment: "Work on Cat’s business cards and titles", originalDue: "7 Aug 2026", newDue: "", community: "AIMA", collaborators: "Favour, Duche", status: "In progress", notes: "Align cards and titles." },
      { id: "sheet-18", assignment: "SJASD Nutrition Program — menu and pricing", originalDue: "10 Aug 2026", newDue: "", community: "SIB", collaborators: "Cat, Duche, Favour", status: "In progress", notes: "Prepare nutritious menu options and pricing for the school-based program (Yvonne Perry, SJASD)." },
      { id: "sheet-19", assignment: "Factory design 3D rendering and motion graphics", originalDue: "10 Aug 2026", newDue: "", community: "SIB", collaborators: "Princely, Duche", status: "In progress", notes: "Awaiting pricing breakdown and timeline from Jethro (Cocreators Built)." },
      { id: "sheet-20", assignment: "Workflow strategy meeting", originalDue: "31 Aug 2026", newDue: "", community: "AIMA", collaborators: "Duche, Izzi, Moses", status: "Recurring", notes: "Focus on aligning current assignments." },
      { id: "sheet-21", assignment: "Marketing review meeting", originalDue: "31 Aug 2026", newDue: "", community: "AIMA, SIB, Audit Expert", collaborators: "Duche, Izzi, Cat, Favour, Moses", status: "Recurring", notes: "5:00 AM." },
      { id: "sheet-22", assignment: "Shelly’s Bistro floorplans factory meeting", originalDue: "31 Aug 2026", newDue: "", community: "SIB", collaborators: "Cat, Vince", status: "Recurring", notes: "Expansion discussion." },
      { id: "sheet-23", assignment: "Flush out version 3 of the business plan using Cat’s edit", originalDue: "", newDue: "", community: "SIB", collaborators: "Cat", status: "In progress", notes: "" },
    ],
    sixWeekPlan: [
      { week: "Week 1", focus: "Asset development, funding framework, promotion and institutional outreach", objective: "Build the foundation: assets, funding model and broad institutional buy-in.", actions: "Develop the funding framework and pricing/grant model. Finalize designs; print Week Packs and Sovereignty brochures; launch webpage content. Contact school divisions, MFNERC and Ministers, then submit AMP proof-of-concept grant applications.", deliverable: "Funding framework, final printed materials and webpage launch, outreach/LOI log, ministerial correspondence log and grant submissions." },
      { week: "Week 2", focus: "Institutional negotiation and LOI tracking", objective: "Convert interest to commitment.", actions: "Follow up on education and government scrums, draft partnership terms, negotiate pilot dates and track LOI status daily.", deliverable: "Signed LOIs and negotiation log." },
      { week: "Week 3", focus: "Partner discovery, site information and pilot scope", objective: "Confirm partner needs and pilot requirements.", actions: "Collect meal volumes, delivery locations, dietary and procurement requirements, local contacts and timing. Confirm pilot-ready partners, shortlist sites and update the LOI tracker.", deliverable: "Partner needs summary, pilot-site shortlist, updated LOI tracker and initial pilot scope." },
      { week: "Week 4", focus: "Pilot readiness, costing and funding package", objective: "Turn confirmed interest into a practical pilot plan.", actions: "Verify site readiness, storage, delivery access, logistics, staffing and equipment needs. Build cost-per-meal and Phase 1 budget assumptions, then draft the funding package.", deliverable: "Pilot-readiness checklist, site notes, costing model, draft funding package and Phase 1 pilot budget." },
      { week: "Week 5", focus: "Proposal review, partner alignment and submission prep", objective: "Align partners before final approval and commitment.", actions: "Circulate the draft pilot plan, budget and funding package; gather feedback, refine the budget and timeline, confirm support letters/LOIs and prepare the final submission package.", deliverable: "Stakeholder feedback log, refined budget, updated support letters/LOIs and final Week 6 submission package." },
      { week: "Week 6", focus: "Commitment finalization and reporting", objective: "Secure funding commitments.", actions: "Review final responses, calculate projected revenue and grants, and finalize funding commitments for Phase 2 scaling.", deliverable: "Six-week outreach and funding final report." },
    ],
  },
  marketData: {
    importedAt: "August 15, 2026",
    produceSource: "sources/Shellys_Bistro_Canada_Produce_Data.xlsx",
    targetSource: "sources/Shellys_LOI_MOU_Target_List_Expanded.xlsx",
    menuSource: "sources/Shellys School Nutrition Menu.pdf",
    menuItemCount: 45,
    dailyUseModel: {
      mealsPerDay: 1000000,
      menuItems: 45,
      servingsPerItem: 22222.22,
      method: "One million meals per day divided equally across the 45 PDF menu items, multiplied by planning portions for each named produce ingredient.",
      sideChoice: "Where a meal offers mashed potatoes or carrot/celery sticks, demand is split 50/50; carrot and celery are split evenly inside the sticks option.",
      genericFruit: "Generic mixed fruit, fruit topping and compote demand is split equally across apples, bananas, grapes, strawberries and blueberries/cranberries.",
      exclusion: "Purchasing yield, trim, spoilage, cooking loss and menu popularity are not included. Zero means the produce is not named in the current PDF—not that it can never be used.",
    },
    produceInventoryCount: 52,
    producePriorities: [
      { produce: "Lettuce", category: "Vegetable/herb", dataYear: "2025", importValue: 682433000, unitValue: 2.7108, importDependence: "High", supplyRisk: "High", season: "MB Jun–Sep; imports dominate Oct–May", menuImportance: "Critical", menuUse: "9 menu items: Tuna Sandwich; Chicken Wrap; Chicken Caesar Wrap; Garden Salad; Caesar Salad; Sandwich; Chicken Burger; Taco Beef Bowl; Crispy Chicken Burger", menuEvidenceType: "Named ingredient", expectedDailyKg: 5777.78, estimateConfidence: "Medium", attentionScore: 17, action: "Dual-source Canadian greenhouse/field and Mexico/US; quote weekly and keep menu substitution rules." },
      { produce: "Tomatoes", category: "Vegetable/herb", dataYear: "2025", importValue: 198398000, unitValue: 1.7737, importDependence: "Medium", supplyRisk: "Medium", season: "MB field Aug–Sep; Canadian greenhouse broader season; imports peak winter", menuImportance: "Critical", menuUse: "13 menu items: Chicken Caesar Wrap; Garden Salad; Tomato Soup; Hamburger Soup; Chicken Noodle Soup; Tomato Alphabet Soup; Chicken Burger; Spaghetti Meat Sauce; Veggie Spaghetti; Taco Beef Bowl; Crispy Chicken Burger; Chicken Parmesan; Cheese Ravioli", menuEvidenceType: "Named ingredient", expectedDailyKg: 17000, estimateConfidence: "Medium", attentionScore: 15, action: "Dual-source Canadian greenhouse/field and Mexico/US; quote weekly and keep menu substitution rules." },
      { produce: "White potatoes", category: "Vegetable/herb", dataYear: "2024/25", importValue: 82103900, unitValue: 0.7169, importDependence: "Low/Medium", supplyRisk: "Low", season: "MB harvest Aug–Oct; storage supply most/all year", menuImportance: "Critical", menuUse: "Breakfast hash browns in 2 boxes; Fries; Hamburger Soup; Poutine; and 5 side-choice meals", menuEvidenceType: "Named ingredient", expectedDailyKg: 18888.89, estimateConfidence: "Medium", attentionScore: 13, action: "Prioritize Manitoba/Canadian potatoes or a domestic fry supplier; contract volume and quality specs." },
      { produce: "Celery", category: "Vegetable/herb", dataYear: "2025", importValue: 98407000, unitValue: 1.3581, importDependence: "High", supplyRisk: "High", season: "Limited local Jul–Sep; imports most of year", menuImportance: "Medium", menuUse: "Frittata; Veggie Soup; Hamburger Soup; Chicken Noodle Soup; Tomato Alphabet Soup; Veggie Spaghetti; Chicken Parmesan; and 5 side-choice meals", menuEvidenceType: "Named ingredient", expectedDailyKg: 6444.44, estimateConfidence: "Medium", attentionScore: 13, action: "Use at least two distributors/origins and avoid fixed menu reliance during supply spikes." },
      { produce: "Onions and shallots", category: "Vegetable/herb", dataYear: "2025", importValue: 292812000, unitValue: 1.1536, importDependence: "Low/Medium", supplyRisk: "Medium", season: "MB harvest Aug–Sep; storage into winter; imports bridge gaps", menuImportance: "High", menuUse: "Frittata; Veggie Soup; Hamburger Soup; Chicken Noodle Soup; Tomato Alphabet Soup; Veggie Spaghetti; Chicken Parmesan", menuEvidenceType: "Named ingredient", expectedDailyKg: 4000, estimateConfidence: "Medium", attentionScore: 12, action: "Buy Manitoba/Canadian in season and storage crop; set grade/yield specs and monitor shrink." },
      { produce: "Cabbage / kale", category: "Vegetable/herb", dataYear: "2025", importValue: 269920000, unitValue: 2.3365, importDependence: "Low/Medium", supplyRisk: "Medium", season: "MB Jul–Oct; storage cabbage into winter", menuImportance: "High", menuUse: "Garden Salad names cabbage; kale is not named", menuEvidenceType: "Named ingredient", expectedDailyKg: 444.44, estimateConfidence: "Medium", attentionScore: 12, action: "Buy Manitoba/Canadian in season and storage crop; set grade/yield specs and monitor shrink." },
      { produce: "Dill / mixed herbs", category: "Vegetable/herb", dataYear: "2024", currency: "USD", importValue: 215177377, unitValue: 1.7855, importDependence: "Medium", supplyRisk: "Medium", season: "MB Jun–Sep; greenhouse/imported or frozen/dried off-season", menuImportance: "High", menuUse: "Honey-dill sauce on Chicken Fingers; herbs in Tomato Soup, Veggie Soup, Hamburger Soup and Tomato Alphabet Soup", menuEvidenceType: "Named ingredient", expectedDailyKg: 111.11, estimateConfidence: "Medium", attentionScore: 12, action: "Standardize the honey-dill recipe; trial frozen/local dill and track sauce yield." },
      { produce: "Garlic", category: "Vegetable/herb", dataYear: "2025", importValue: 97200000, unitValue: 3.3610, importDependence: "High", supplyRisk: "Medium", season: "Canadian harvest Jul–Aug; stored; imports year-round", menuImportance: "Medium", menuUse: "Mac & Cheese with Garlic Toast; Spaghetti Meat Sauce with Garlic Toast; Veggie Spaghetti; Chicken Alfredo with Garlic Toast; Chicken Parmesan", menuEvidenceType: "Named ingredient", expectedDailyKg: 422.22, estimateConfidence: "Medium", attentionScore: 12, action: "Use at least two distributors/origins and avoid fixed menu reliance during supply spikes." },
      { produce: "Blueberries / cranberries", category: "Fruit", dataYear: "2024", currency: "USD", importValue: 401753762, unitValue: 4.9184, importDependence: "Low/Medium", supplyRisk: "Medium", season: "Canadian berries summer/fall; frozen Canadian year-round", menuImportance: "High", menuUse: "Not individually named; allocated an equal share of mixed fruit, fruit topping and fruit compote", menuEvidenceType: "Generic fruit allocation", expectedDailyKg: 1644.44, estimateConfidence: "Low", attentionScore: 11, action: "Use Canadian frozen berries for spreads/desserts; reserve fresh imports for garnish." },
      { produce: "Carrots and turnips", category: "Vegetable/herb", dataYear: "2025", importValue: 180020000, unitValue: 1.6334, importDependence: "Low/Medium", supplyRisk: "Low", season: "MB Jul–Oct; storage supply through winter", menuImportance: "High", menuUse: "Frittata; Garden Salad; Veggie Soup; Hamburger Soup; Chicken Noodle Soup; Carrot Soup; Tomato Alphabet Soup; Veggie Spaghetti; and 5 side-choice meals", menuEvidenceType: "Named ingredient", expectedDailyKg: 11555.56, estimateConfidence: "Medium", attentionScore: 11, action: "Buy Manitoba/Canadian in season and storage crop; set grade/yield specs and monitor shrink." },
      { produce: "Avocados", category: "Fruit", dataYear: "2024", importValue: 420684000, unitValue: 3.7250, importDependence: "High", supplyRisk: "High", season: "Imported year-round", menuImportance: "Low", menuUse: "Not named in the current PDF menu", menuEvidenceType: "Not named", expectedDailyKg: 0, estimateConfidence: "Menu evidence only", attentionScore: 11, action: "Use at least two distributors/origins and avoid fixed menu reliance during supply spikes." },
      { produce: "Peppers", category: "Vegetable/herb", dataYear: "2025", importValue: 225422000, unitValue: 2.6232, importDependence: "Medium", supplyRisk: "Medium", season: "MB Aug–Sep; Canadian greenhouse broader; imports winter", menuImportance: "Medium", menuUse: "Not named in the current PDF menu", menuEvidenceType: "Not named", expectedDailyKg: 0, estimateConfidence: "Menu evidence only", attentionScore: 11, action: "Dual-source Canadian greenhouse/field and Mexico/US; quote weekly and keep menu substitution rules." },
      { produce: "Cucumbers", category: "Vegetable/herb", dataYear: "2025", importValue: 34489000, unitValue: 2.1811, importDependence: "Medium", supplyRisk: "Medium", season: "MB Jul–Sep; Canadian greenhouse broader; imports winter", menuImportance: "Medium", menuUse: "Garden Salad", menuEvidenceType: "Named ingredient", expectedDailyKg: 444.44, estimateConfidence: "Medium", attentionScore: 11, action: "Dual-source Canadian greenhouse/field and Mexico/US; quote weekly and keep menu substitution rules." },
      { produce: "Strawberries", category: "Fruit", dataYear: "2024", importValue: 734907000, unitValue: 4.6794, importDependence: "High", supplyRisk: "Medium", season: "MB Jun–Jul; imports most of year", menuImportance: "Low", menuUse: "Not individually named; allocated an equal share of mixed fruit, fruit topping and fruit compote", menuEvidenceType: "Generic fruit allocation", expectedDailyKg: 1644.44, estimateConfidence: "Low", attentionScore: 10, action: "Use at least two distributors/origins and avoid fixed menu reliance during supply spikes." },
      { produce: "Lemons and limes", category: "Fruit", dataYear: "2024", importValue: 213235000, unitValue: 1.7866, importDependence: "High", supplyRisk: "Medium", season: "Imported year-round", menuImportance: "Medium", menuUse: "Not named in the current PDF menu", menuEvidenceType: "Not named", expectedDailyKg: 0, estimateConfidence: "Menu evidence only", attentionScore: 10, action: "Use at least two distributors/origins and avoid fixed menu reliance during supply spikes." },
      { produce: "Bananas", category: "Fruit", dataYear: "2024", importValue: 711938000, unitValue: 1.1287, importDependence: "High", supplyRisk: "Medium", season: "Imported year-round", menuImportance: "Low", menuUse: "Not individually named; allocated an equal share of mixed fruit, fruit topping and fruit compote", menuEvidenceType: "Generic fruit allocation", expectedDailyKg: 1644.44, estimateConfidence: "Low", attentionScore: 9, action: "Use at least two distributors/origins and avoid fixed menu reliance during supply spikes." },
      { produce: "Broccoli and cauliflower", category: "Vegetable/herb", dataYear: "2025", importValue: 311205000, unitValue: 2.1014, importDependence: "Medium", supplyRisk: "Medium", season: "MB/Canada Jul–Oct; imports mainly Nov–Jun", menuImportance: "Low", menuUse: "Not named in the current PDF menu", menuEvidenceType: "Not named", expectedDailyKg: 0, estimateConfidence: "Menu evidence only", attentionScore: 9, action: "Buy seasonally; track case price, usable yield and waste before changing suppliers." },
      { produce: "Peas", category: "Vegetable/herb", dataYear: "2025", importValue: 82179000, unitValue: 4.2238, importDependence: "Medium", supplyRisk: "Medium", season: "MB fresh Jun–Aug; frozen year-round", menuImportance: "Medium", menuUse: "Frittata", menuEvidenceType: "Named ingredient", expectedDailyKg: 333.33, estimateConfidence: "Medium", attentionScore: 9, action: "Buy seasonally; track case price, usable yield and waste before changing suppliers." },
      { produce: "Grapes", category: "Fruit", dataYear: "2024", importValue: 913605000, unitValue: 4.3118, importDependence: "High", supplyRisk: "Medium", season: "Imported year-round; Canadian late summer/fall", menuImportance: "Low", menuUse: "Not individually named; allocated an equal share of mixed fruit, fruit topping and fruit compote", menuEvidenceType: "Generic fruit allocation", expectedDailyKg: 1644.44, estimateConfidence: "Low", attentionScore: 8, action: "Use at least two distributors/origins and avoid fixed menu reliance during supply spikes." },
      { produce: "Apples", category: "Fruit", dataYear: "2024", importValue: 269485000, unitValue: 1.6347, importDependence: "Low/Medium", supplyRisk: "Low", season: "Canadian Aug–Nov; controlled storage year-round", menuImportance: "Low", menuUse: "Not individually named; allocated an equal share of mixed fruit, fruit topping and fruit compote", menuEvidenceType: "Generic fruit allocation", expectedDailyKg: 1644.44, estimateConfidence: "Low", attentionScore: 7, action: "Buy Manitoba/Canadian in season and storage crop; set grade/yield specs and monitor shrink." },
    ],
    loiTargets: [
      { tier: 1, organization: "Winnipeg School Division", sector: "School nutrition", offer: "Breakfast, lunch and snack", angle: "Largest division in Manitoba; delivers the nutrition program directly.", contactRole: "Superintendent / nutrition lead", indigFit: "Strong" },
      { tier: 1, organization: "Frontier School Division", sector: "School nutrition", offer: "RTE meals for remote schools", angle: "Remote and northern schools with limited kitchen capacity.", contactRole: "Superintendent / Secretary-Treasurer", indigFit: "Strong" },
      { tier: 1, organization: "River East Transcona School Division", sector: "School nutrition", offer: "Breakfast, lunch and snack", angle: "Large Winnipeg-metro division.", contactRole: "Nutrition coordinator", indigFit: "Strong" },
      { tier: 1, organization: "Pembina Trails School Division", sector: "School nutrition", offer: "Breakfast, lunch and snack", angle: "Already runs a Universal Nutrition Program.", contactRole: "Nutrition coordinator", indigFit: "Strong" },
      { tier: 1, organization: "Seven Oaks School Division", sector: "School nutrition", offer: "Breakfast, lunch and snack", angle: "Winnipeg-metro division with a strong equity focus.", contactRole: "Secretary-Treasurer", indigFit: "Strong" },
      { tier: 1, organization: "Louis Riel School Division", sector: "School nutrition", offer: "Breakfast, lunch and snack", angle: "Large southeast Winnipeg division.", contactRole: "Nutrition coordinator", indigFit: "Strong" },
      { tier: 1, organization: "St. James-Assiniboia School Division", sector: "School nutrition", offer: "Breakfast, lunch and snack", angle: "West Winnipeg division.", contactRole: "Secretary-Treasurer", indigFit: "Strong" },
      { tier: 1, organization: "Division scolaire franco-manitobaine", sector: "School nutrition", offer: "Breakfast, lunch and snack", angle: "Province-wide French division; French menus can differentiate.", contactRole: "Direction / nutrition", indigFit: "Strong" },
      { tier: 1, organization: "Sunrise / Lord Selkirk / Interlake school divisions", sector: "School nutrition", offer: "Breakfast, lunch and snack", angle: "Divisions surrounding Winnipeg and deliverable from day one.", contactRole: "Secretary-Treasurer for each", indigFit: "Strong" },
      { tier: 1, organization: "Hanover / Seine River / Red River Valley / Garden Valley school divisions", sector: "School nutrition", offer: "Breakfast, lunch and snack", angle: "Southern Manitoba divisions within delivery range.", contactRole: "Secretary-Treasurer for each", indigFit: "Strong" },
      { tier: 1, organization: "Brandon / Rolling River / Southwest Horizon school divisions", sector: "School nutrition", offer: "Breakfast, lunch and snack", angle: "Western Manitoba cluster supporting a Brandon distribution route.", contactRole: "Secretary-Treasurer for each", indigFit: "Medium" },
      { tier: 1, organization: "Kelsey / Flin Flon / Mystery Lake / Swan Valley school divisions", sector: "School nutrition", offer: "Northern RTE meals", angle: "Northern divisions with higher food costs and access gaps.", contactRole: "Superintendent for each", indigFit: "Strong" },
      { tier: 1, organization: "MFNERC / band-operated First Nations schools", sector: "School nutrition", offer: "RTE school meals", angle: "Direct Indigenous education and on-reserve school fit.", contactRole: "MFNERC nutrition / education", indigFit: "Strong" },
      { tier: 1, organization: "Child Nutrition Council of Manitoba", sector: "School nutrition", offer: "Program partnership", angle: "A province-wide MOU could strengthen credibility and channel access.", contactRole: "Executive Director", indigFit: "Strong" },
      { tier: 1, organization: "Manitoba Justice — Corrections", sector: "Correctional food", offer: "Daily facility meals", angle: "Year-round institutional volume; convert prior proposal into an LOI.", contactRole: "ADM Corrections / procurement", indigFit: "Strong" },
      { tier: 2, organization: "Shared Health Manitoba", sector: "Health", offer: "Patient and cafeteria meals", angle: "Provincial body coordinating hospital food services.", contactRole: "Provincial food services", indigFit: "Medium" },
      { tier: 2, organization: "Winnipeg Regional Health Authority", sector: "Health", offer: "Facility meals", angle: "Hospitals and health facilities across Winnipeg.", contactRole: "Support / food services", indigFit: "Medium" },
      { tier: 2, organization: "Prairie Mountain / Interlake-Eastern / Southern / Northern health regions", sector: "Regional health", offer: "Facility meals", angle: "Four regional health authorities outside Winnipeg.", contactRole: "Food services for each", indigFit: "Medium" },
      { tier: 2, organization: "HSC / St. Boniface / Grace / Concordia / Seven Oaks / Victoria hospitals", sector: "Hospitals", offer: "Patient and retail meals", angle: "Major Winnipeg hospitals with large daily volumes.", contactRole: "Food services director", indigFit: "Medium" },
      { tier: 2, organization: "Actionmarguerite / Misericordia / Riverview / Deer Lodge", sector: "Long-term care", offer: "Resident meals and diets", angle: "Diet-compliant daily meals; allergen and texture control fit RTE.", contactRole: "Food services / operations", indigFit: "Medium" },
      { tier: 2, organization: "Extendicare / Revera / Donwood / Holy Family / Bethania / Fred Douglas", sector: "Long-term care", offer: "Resident meals", angle: "Personal-care-home operators across Winnipeg.", contactRole: "Operations director", indigFit: "Medium" },
      { tier: 3, organization: "University of Manitoba", sector: "Post-secondary", offer: "Campus food service", angle: "Largest Manitoba campus food operation with reconciliation commitments.", contactRole: "Ancillary / food services", indigFit: "Medium" },
      { tier: 3, organization: "University of Winnipeg", sector: "Post-secondary", offer: "Campus food service", angle: "Downtown campus with a strong Indigenous-inclusion mandate.", contactRole: "Food services / procurement", indigFit: "Medium" },
      { tier: 3, organization: "Red River College Polytechnic", sector: "Post-secondary", offer: "Campus meals and training", angle: "Offtake plus culinary and food-processing training partnership.", contactRole: "Food services / Indigenous education", indigFit: "Strong" },
      { tier: 3, organization: "Assiniboine Community College", sector: "Post-secondary", offer: "Campus meals and training", angle: "Brandon campus with culinary and food programs.", contactRole: "Food services", indigFit: "Medium" },
      { tier: 3, organization: "University College of the North", sector: "Post-secondary", offer: "Northern campus meals", angle: "The Pas and Thompson campuses serving northern Indigenous students.", contactRole: "Food services / Indigenous office", indigFit: "Strong" },
      { tier: 3, organization: "Brandon U / CMU / Booth UC / MITT / Yellowquill UC", sector: "Post-secondary", offer: "Campus meals", angle: "Smaller campuses; Yellowquill is Indigenous-governed.", contactRole: "Food services / administration", indigFit: "Medium" },
      { tier: 4, organization: "Mathias Colomb Cree Nation", sector: "First Nation", offer: "Community and school meals", angle: "Vince’s home community and a strong ownership connection.", contactRole: "Chief and Council / EDO", indigFit: "Strong" },
      { tier: 4, organization: "Assembly of Manitoba Chiefs", sector: "Indigenous organization", offer: "Endorsement / framework", angle: "A network-level letter could strengthen multiple funding relationships.", contactRole: "Grand Chief’s office / ED", indigFit: "Strong" },
      { tier: 4, organization: "Manitoba Keewatinowi Okimakanak", sector: "Northern First Nations", offer: "Northern community food", angle: "Represents northern First Nations with major food-access gaps.", contactRole: "Grand Chief’s office / health", indigFit: "Strong" },
      { tier: 4, organization: "Southern Chiefs’ Organization", sector: "Southern First Nations", offer: "Community and program meals", angle: "Represents southern First Nations, programs and events.", contactRole: "Grand Chief’s office / programs", indigFit: "Strong" },
      { tier: 4, organization: "Manitoba Métis Federation", sector: "Métis government", offer: "Program and event meals", angle: "Province-wide community programming.", contactRole: "Health and wellness / procurement", indigFit: "Strong" },
      { tier: 4, organization: "Manitoba tribal councils", sector: "Tribal councils", offer: "Community and program meals", angle: "One MOU per council can cover several member nations.", contactRole: "ED / health director for each", indigFit: "Strong" },
      { tier: 4, organization: "First Nations Health & Social Secretariat of Manitoba", sector: "Indigenous health", offer: "Program and health meals", angle: "Coordinates First Nations health programming province-wide.", contactRole: "Executive Director", indigFit: "Strong" },
      { tier: 4, organization: "Ma Mawi / Ka Ni Kanichihk / Aboriginal Health & Wellness Centre", sector: "Urban Indigenous", offer: "Program and daily meals", angle: "High-volume Indigenous programming in Winnipeg.", contactRole: "Executive Director for each", indigFit: "Strong" },
      { tier: 4, organization: "Manitoba Association of Friendship Centres", sector: "Indigenous organization", offer: "Program and event meals", angle: "Urban Indigenous programming across Manitoba.", contactRole: "Executive Director", indigFit: "Strong" },
      { tier: 5, organization: "Manitoba Emergency Management Organization", sector: "Emergency", offer: "Evacuation and surge feeding", angle: "Potential standing supplier for wildfire and flood evacuations.", contactRole: "Manitoba EMO / MNR", indigFit: "Medium" },
      { tier: 5, organization: "Indigenous Services Canada — Emergency Management", sector: "Federal emergency", offer: "On-reserve evacuation feeding", angle: "Coordinates large on-reserve evacuation volumes.", contactRole: "Regional emergency management", indigFit: "Strong" },
      { tier: 5, organization: "Harvest Manitoba", sector: "Food security", offer: "Bulk prepared meals", angle: "Provincial food-bank network with rising prepared-food demand.", contactRole: "Executive / operations", indigFit: "Medium" },
      { tier: 5, organization: "Siloam Mission / Main Street Project / Agape Table", sector: "Shelters and meals", offer: "Daily prepared meals", angle: "High-volume daily meal programs with kitchen constraints.", contactRole: "Operations director for each", indigFit: "Medium" },
      { tier: 5, organization: "Salvation Army / Union Gospel / Lighthouse Mission", sector: "Shelters and meals", offer: "Daily prepared meals", angle: "Faith-based meal programs across Winnipeg.", contactRole: "Operations for each", indigFit: "Medium" },
      { tier: 5, organization: "Bear Clan Patrol", sector: "Community", offer: "Prepared meals / hampers", angle: "Indigenous-led community outreach with food distribution.", contactRole: "Coordinator", indigFit: "Strong" },
      { tier: 6, organization: "YMCA-YWCA of Winnipeg", sector: "Childcare", offer: "Child meals and snacks", angle: "Multi-site licensed childcare with limited kitchens.", contactRole: "Childcare operations", indigFit: "Medium" },
      { tier: 6, organization: "Manitoba Child Care Association member centres", sector: "Childcare", offer: "Child meals and snacks", angle: "Large network of licensed centres needing compliant meals.", contactRole: "Individual operators", indigFit: "Medium" },
      { tier: 6, organization: "City of Winnipeg", sector: "Municipal", offer: "Community-centre and seniors meals", angle: "Recreation, community-centre and seniors programming.", contactRole: "Community services / procurement", indigFit: "Medium" },
      { tier: 6, organization: "Brandon / Thompson / Steinbach / Portage la Prairie", sector: "Municipal", offer: "Program meals", angle: "Regional municipalities with recreation and seniors programs.", contactRole: "Community services for each", indigFit: "Weak" },
      { tier: 6, organization: "Manitoba Hydro / Canada Life / IG / NFI / Boeing / Magellan", sector: "Workplace", offer: "Cafeteria / catering", angle: "Large employers with steady weekday volume.", contactRole: "Facilities / HR for each", indigFit: "Weak" },
      { tier: 6, organization: "Vale / Hudbay", sector: "Mining camps", offer: "Camp catering", angle: "Remote work-camp feeding with high per-site volume.", contactRole: "Site services / procurement", indigFit: "Medium" },
      { tier: 6, organization: "South Beach / Aseneskak / Sand Hills casinos", sector: "Indigenous gaming", offer: "Venue food service", angle: "First Nations-owned venues with a natural supplier fit.", contactRole: "Food and beverage manager", indigFit: "Strong" },
      { tier: 6, organization: "True North / RBC Convention Centre / Assiniboine Park", sector: "Venues", offer: "Event and concession meals", angle: "High-volume venues with occasional large orders.", contactRole: "Food and beverage / catering", indigFit: "Weak" },
      { tier: 7, organization: "Red River Co-op / Federated Co-operatives", sector: "Retail", offer: "Packaged retail meals", angle: "Community-oriented grocery network with an Indigenous supplier story.", contactRole: "Category buyer", indigFit: "Medium" },
      { tier: 7, organization: "Loblaw / Sobeys / Save-On-Foods / Costco", sector: "Retail", offer: "Packaged retail meals", angle: "National grocers with Manitoba stores; Phase 2 after CFIA registration.", contactRole: "Category / procurement buyer", indigFit: "Weak" },
      { tier: 7, organization: "Sysco Canada / Gordon Food Service", sector: "Distribution", offer: "Wholesale distribution", angle: "A route to many institutional buyers at once.", contactRole: "Supplier onboarding", indigFit: "Weak" },
      { tier: 8, organization: "Maple Leaf Foods / HyLife", sector: "Protein", offer: "Ingredient supply / co-manufacturing", angle: "Manitoba processors for input supply or co-manufacturing MOUs.", contactRole: "Procurement / partnerships", indigFit: "Weak" },
      { tier: 8, organization: "Manitoba Harvest / Roquette / Simplot", sector: "Ingredients", offer: "Ingredient supply", angle: "Domestic hemp, pea-protein and potato supply story.", contactRole: "Sales / partnerships", indigFit: "Weak" },
      { tier: 8, organization: "Manitoba producers and agricultural co-ops", sector: "Agriculture", offer: "Contracted offtake supply", angle: "Canadian-content and Indigenous-grower supply agreements.", contactRole: "Co-op / producer group", indigFit: "Strong" },
    ],
  },
  outreachTracker: [
    { id: "out-min-education", organization: "Manitoba Education and Early Childhood Learning", type: "Provincial ministry", contact: "Minister Tracy Schmidt / Indigenous Excellence ADM", lastDate: "July 24, 2026", purpose: "Universal School Nutrition Program production capacity", status: "Response received — office aware", nextAction: "Reconnect with a concrete school-division pilot and request the relevant provincial program contact.", owner: "Vince & Cat", sourceUrl: "https://mail.google.com/mail/#all/19f9515afe3e0b09" },
    { id: "out-min-agriculture", organization: "Manitoba Agriculture", type: "Provincial ministry", contact: "Minister Ron Kostyshyn / Karen Walker-Tibble", lastDate: "August 13, 2026", purpose: "Value-added agri-food infrastructure and Food Development Centre support", status: "Meeting held — resources and tour offered", nextAction: "Ask Karen to arrange the Food Development Centre tour and define testing, scale-up and regulatory-support needs.", owner: "Vince & Cat", sourceUrl: "https://mail.google.com/mail/#all/19ffc9a11f1c6746" },
    { id: "out-min-bmtjc", organization: "Manitoba Business, Mining, Trade and Job Creation", type: "Provincial ministry", contact: "Minister Jamie Moses", lastDate: "July 3, 2026", purpose: "Employment, investment and Manitoba growth case", status: "Referred to Investment & Trade", nextAction: "Keep the Minister’s office updated with financing progress, confirmed LOIs and the equipment-only funding scope.", owner: "Vince & Cat", sourceUrl: "https://mail.google.com/mail/#all/19f2984c5790533c" },
    { id: "out-min-finance", organization: "Manitoba Finance", type: "Provincial ministry", contact: "Minister Adrien Sala / Deputy Minister", lastDate: "July 3, 2026", purpose: "Projected fiscal return and provincial investment request", status: "Sent — no response found", nextAction: "Send a concise follow-up tied to verified financial assumptions and the corrected CA$1M owner-equity structure.", owner: "Vince & Cat", sourceUrl: "https://mail.google.com/mail/#all/19f298ada014df4b" },
    { id: "out-min-health", organization: "Manitoba Health, Seniors and Long-Term Care", type: "Provincial ministry", contact: "Minister Uzoma Asagwara / Deputy Minister", lastDate: "July 3, 2026", purpose: "Institutional meal production for the health system", status: "Sent — no response found", nextAction: "Follow up with a health-specific capability sheet covering diet, allergen, texture, traceability and pilot volumes.", owner: "Vince & Cat", sourceUrl: "https://mail.google.com/mail/#all/19f2992518d531bc" },
    { id: "out-min-labour", organization: "Manitoba Labour and Immigration", type: "Provincial ministry", contact: "Minister Malaya Marcelino / Vicky Molina", lastDate: "July 14, 2026", purpose: "1,500+ jobs and food-manufacturing training pipeline", status: "Response received — no meeting booked", nextAction: "Reconnect when a phased hiring plan and BUMP-eligible training outcomes are ready.", owner: "Vince & Cat", sourceUrl: "https://mail.google.com/mail/#all/19f61958fcfc8080" },
    { id: "out-min-families", organization: "Manitoba Families", type: "Provincial ministry", contact: "Minister Nahanni Fontaine / Michel Trudel / Julie Kentner / Rachael Howgate", lastDate: "July 29, 2026", purpose: "Food-security infrastructure for Manitoba families", status: "Meeting held — materials with Minister’s office", nextAction: "Complete the NDA step and request the proposed site visit; provide only current, reconciled financial materials.", owner: "Vince & Cat", sourceUrl: "https://mail.google.com/mail/#all/19faf20dfd6823ae" },
    { id: "out-min-innovation", organization: "Manitoba Innovation and New Technology", type: "Provincial ministry", contact: "Minister Mike Moroz", lastDate: "August 10, 2026", purpose: "Technology-enabled food manufacturing", status: "Meeting held — thank-you sent", nextAction: "Send the agreed technical follow-up: automation, traceability, equipment plan and requested provincial introductions.", owner: "Vince & Cat", sourceUrl: "https://mail.google.com/mail/#all/19fec465be463d2c" },
    { id: "out-min-public-service", organization: "Manitoba Public Service Delivery", type: "Provincial ministry", contact: "Minister Mintu Sandhu / Sughra Wali / Procurement ADM", lastDate: "July 15, 2026", purpose: "Indigenous procurement for provincial food services", status: "Meeting arranged — outcome not captured", nextAction: "Record the meeting outcome and request the correct procurement onboarding path and category contact.", owner: "Vince & Cat", sourceUrl: "https://mail.google.com/mail/#all/19f66b708e7345f3" },
    { id: "out-min-nrif", organization: "Manitoba Northern Relations and Indigenous Futures", type: "Provincial ministry", contact: "Minister Ian Bushie / Deputy Minister", lastDate: "July 8, 2026", purpose: "Indigenous-led food-production hub and northern food access", status: "Sent — no response found", nextAction: "Follow up with the northern-community delivery case and one specific partnership request.", owner: "Vince & Cat", sourceUrl: "https://mail.google.com/mail/#all/19f437dc994a02e9" },
    { id: "out-min-housing", organization: "Manitoba Housing, Addictions and Homelessness", type: "Provincial ministry", contact: "Minister Bernadette Smith / Deputy Minister", lastDate: "July 8, 2026", purpose: "Food capacity for Your Way Home and employment pathways", status: "Sent — no response found", nextAction: "Follow up with a shelter/supportive-housing meal pilot and an employment-pathway proposal.", owner: "Vince & Cat", sourceUrl: "https://mail.google.com/mail/#all/19f43818fcb80356" },
    { id: "out-min-justice", organization: "Manitoba Justice", type: "Provincial ministry", contact: "Minister Matt Wiebe / Deputy Minister", lastDate: "July 27, 2026", purpose: "Corrections food supply and reintegration employment", status: "Sent — no response found", nextAction: "Follow up with procurement requirements, secure-delivery capability and a phased corrections pilot ask.", owner: "Vince & Cat", sourceUrl: "https://mail.google.com/mail/#all/19fa57ea0f122afa" },
    { id: "out-min-environment", organization: "Manitoba Environment and Climate Change", type: "Provincial ministry", contact: "Minister Mike Moyes / Deputy Minister", lastDate: "August 5, 2026", purpose: "Low-carbon Indigenous food-manufacturing partnership", status: "Sent — no response found", nextAction: "Follow up with a one-page 90-day partnership request and quantified energy, waste and local-sourcing outcomes.", owner: "Vince & Cat", sourceUrl: "https://mail.google.com/mail/#all/19fd2720167eb5ab" },
    { id: "out-dept-investment", organization: "Manitoba Investment & Trade Division", type: "Provincial department", contact: "Berenise Zavala / Jill Falloon", lastDate: "July 29, 2026", purpose: "Investment concierge, FCC and PrairiesCan navigation", status: "Active relationship — referrals made", nextAction: "Update Berenise after the FCC discovery call and request a PrairiesCan officer introduction for the equipment scope.", owner: "Vince", sourceUrl: "https://mail.google.com/mail/#all/19faee7080a79819" },
    { id: "out-program-tgif", organization: "Manitoba Trade Growth Investment Financing", type: "Provincial program", contact: "Adefolakemi Gbiri / Loans Program", lastDate: "July 22, 2026", purpose: "TGIF fit and eligibility discussion", status: "Screened out — not a fit", nextAction: "Close as screened out and preserve the rationale; do not count it as a live funding path.", owner: "Vince", sourceUrl: "https://mail.google.com/mail/#all/19f8b4fdece44ba0" },
    { id: "out-school-wsd", organization: "Winnipeg School Division", type: "School division", contact: "Matt Henderson / Clayton Bodkyn / Board", lastDate: "July 14, 2026", purpose: "Universal Nutrition Program meal-production partnership", status: "Response received — no current requirement", nextAction: "Keep on a low-frequency nurture list and reconnect only with a specific pilot, tender or capacity gap.", owner: "Vince", sourceUrl: "https://mail.google.com/mail/#all/19f61977f16ec152" },
    { id: "out-school-frontier", organization: "Frontier School Division", type: "School division", contact: "Tyson MacGillivray", lastDate: "August 6, 2026", purpose: "RTE meals for remote and northern schools", status: "Follow-up sent — outcome not found", nextAction: "Confirm whether the August 6 contact reached the right decision-maker and request a pilot-volume discovery call.", owner: "Vince", sourceUrl: "https://mail.google.com/mail/#all/19fd8042c9b49865" },
    { id: "out-school-retsd", organization: "River East Transcona School Division", type: "School division", contact: "Shelley Herbst / Edward Downey", lastDate: "July 3, 2026", purpose: "Universal Nutrition Program meal-production partnership", status: "Sent — no response found", nextAction: "Follow up with a concise pilot menu, price range and delivery model; verify the correct nutrition-program contact.", owner: "Vince", sourceUrl: "https://mail.google.com/mail/#all/19f292e6f07b5157" },
    { id: "out-school-pembina", organization: "Pembina Trails School Division", type: "School division", contact: "Leadership and nutrition-program team", lastDate: "August 13, 2026", purpose: "Universal Nutrition Program partnership", status: "Meeting request sent — no response found", nextAction: "Follow up when program leaders return in late August or early September and request a pilot discussion.", owner: "Vince", sourceUrl: "https://mail.google.com/mail/#all/19ffcf8e206a1e59" },
    { id: "out-school-seven-oaks", organization: "Seven Oaks School Division", type: "School division", contact: "Tony Kreml / Jennifer West / Information office", lastDate: "July 8, 2026", purpose: "Universal Nutrition Program meal-production partnership", status: "Sent — no response found", nextAction: "Verify the correct nutrition contact and send one targeted follow-up; do not reuse the misaddressed Pembina message.", owner: "Vince", sourceUrl: "https://mail.google.com/mail/#all/19f4316ecdab978b" },
    { id: "out-school-louis-riel", organization: "Louis Riel School Division", type: "School division", contact: "Christian Michalik / Jamie Rudnicki / Communications", lastDate: "July 3, 2026", purpose: "School meal-production capacity support", status: "Sent — no response found", nextAction: "Follow up with the nutrition lead using a short pilot proposal and current menu/pricing package.", owner: "Vince", sourceUrl: "https://mail.google.com/mail/#all/19f28e25fd19f98c" },
    { id: "out-school-sjasd", organization: "St. James-Assiniboia School Division", type: "School division", contact: "Yvonne Perry / Jenness Moffatt / Kim Kummen", lastDate: "August 11, 2026", purpose: "Universal Nutrition Program menu, pricing and partnership", status: "Meeting held — menu shared", nextAction: "Send the meeting recap, confirm requested pricing/volume assumptions and ask for the next decision point or pilot step.", owner: "Vince", sourceUrl: "https://mail.google.com/mail/#all/19ff14f555d98034" },
    { id: "out-education-mfnerc", organization: "Manitoba First Nations Education Resource Centre", type: "Education organization", contact: "Charles Cochrane", lastDate: "July 24, 2026", purpose: "Indigenous-led school meal production for First Nations schools", status: "Sent — no response found", nextAction: "Follow up with a specific First Nations school pilot ask, logistics coverage and an LOI template.", owner: "Vince", sourceUrl: "https://mail.google.com/mail/#all/19f953dcb3fe3376" },
  ],
  fundingOpportunities: [
    {
      id: "opp-srf",
      name: "Strategic Response Fund — Food Security Call",
      category: "Grant / contribution",
      pipeline: "Active application",
      availability: "Submitted application",
      fitLevel: "Strong project fit",
      status: "Under review — not approved",
      amount: "Application amount not independently verified",
      intake: "First intake closed August 4, 2026; a second intake is expected later in fall 2026",
      fit: "ISED confirmed the full Shelly’s Bistro application was received and entered into review. The call targets food-processing capacity, modernization and critical infrastructure.",
      nextAction: "Vince and Cat to complete an internal financial review and nominate one response contact. Await ISED requests without describing the application as awarded.",
      source: "ISED acknowledgement email · August 5, 2026",
      sourceUrl: "https://mail.google.com/mail/#all/19fd3622a45c6c45",
      programUrl: "https://ised-isde.canada.ca/site/ised/en/programs-and-initiatives/strategic-response-fund/key-investment-priorities/government-funding-food-processing-supply-chain-and-manufacturing-projects/detailed-application-criteria",
      verification: "Official email reviewed",
    },
    {
      id: "opp-bump",
      name: "Building Up Manitoba Program (BUMP)",
      category: "Cost-shared workforce grant",
      pipeline: "Eligibility screening",
      availability: "Available now",
      fitLevel: "Strong workforce fit",
      status: "Eligibility clarification sent — awaiting response",
      amount: "50% cost share · up to CA$10K per employee / CA$25K HR strategy · CA$100K total maximum",
      intake: "Continuous intake; activities must finish within the April 1–March 31 fiscal year",
      fit: "The program is a live 50% cost share for eligible Manitoba employers. A clarification was sent August 13 asking whether AIMA and Shelly’s may apply separately as distinct employers under common ownership.",
      nextAction: "Wait for Monique Leclerc’s eligibility answer. If eligible, Vince must contact the program directly as Shelly’s authorized representative and submit the employer’s own intake.",
      source: "Government of Manitoba email thread · updated August 13, 2026",
      sourceUrl: "https://mail.google.com/mail/#all/19ffbd3043721510",
      programUrl: "https://www.gov.mb.ca/jec/busdev/financial/bump/index.html",
      verification: "Official email and program page reviewed",
    },
    {
      id: "opp-fcc",
      name: "Farm Credit Canada Indigenous food financing",
      category: "Debt financing",
      pipeline: "Lender evaluation",
      availability: "Available now",
      fitLevel: "Strong financing fit",
      status: "Vince contact supplied — discovery scheduling pending",
      amount: "No amount committed; proposed debt layer is CA$8.75M",
      intake: "Relationship-led evaluation",
      fit: "FCC is evaluating the building/equipment request and may require a partner lender. Accountant-prepared statements and revenue-support documents are prerequisites for serious consideration.",
      nextAction: "Vince to provide accountant-prepared statements, then signed LOIs/MOUs and contract evidence. Follow up if FCC does not propose a discovery-call time.",
      source: "FCC email thread · updated August 13, 2026",
      sourceUrl: "https://mail.google.com/mail/#all/19ffbc15cd6d0585",
      programUrl: "https://www.fcc-fac.ca/en/financing/agriculture/indigenous",
      verification: "Official lender email reviewed",
    },
    {
      id: "opp-ic-canada",
      name: "FCC / IC Canada advisory cost share",
      category: "Subsidized advisory support",
      pipeline: "Discovery scheduling",
      availability: "Available through FCC",
      fitLevel: "Support fit",
      status: "Vince email supplied — awaiting call time",
      amount: "FCC states an 85% subsidy; typical participant cost about CA$2K, subject to confirmed scope and pricing",
      intake: "Discovery call awaiting confirmation",
      fit: "FCC proposed advisory support for financial management, strategic planning, operational efficiency and scaling food production.",
      nextAction: "Follow up with Nicholas Boucher if no call time arrives. Vince should confirm final scope, hours, subsidy and participant cost before enrolment.",
      source: "FCC email thread · updated August 13, 2026",
      sourceUrl: "https://mail.google.com/mail/#all/19ffbc15cd6d0585",
      programUrl: "https://www.fcc-fac.ca/en/knowledge/work-with-business-advisors",
      verification: "Official lender email reviewed",
    },
    {
      id: "opp-fpegf",
      name: "First Peoples Economic Growth Fund",
      category: "First Nations financing / contribution",
      pipeline: "Contact established",
      availability: "Available now",
      fitLevel: "Strong ownership fit",
      status: "Lunch proposed — awaiting Clayton confirmation",
      amount: "Program-dependent; individual-owner Business Contribution Fund maximum is CA$99,999",
      intake: "Contact-led screening",
      fit: "Clayton Burka spoke with Richard after the FCC introduction. The official Business Contribution Fund supports eligible First Nations business expansion but requires minimum equity, commercial financing and viability evidence.",
      nextAction: "Confirm the proposed August 18 lunch, decide the Vince/Cat attendee, and prepare a concise project, ownership, financing and document-readiness package.",
      source: "FCC/FPEGF thread · updated August 14, 2026",
      sourceUrl: "https://mail.google.com/mail/#all/1a002137493af5f1",
      programUrl: "https://firstpeoplesfund.ca/summary-of-programs/business-contribution-fund/",
      verification: "Introduction email and official program page reviewed",
    },
    {
      id: "opp-prairiescan-bsp",
      name: "PrairiesCan Business Scale-up and Productivity",
      category: "Interest-free repayable contribution",
      pipeline: "Live researched opportunity",
      availability: "Continuous intake",
      fitLevel: "Strong expansion fit",
      status: "Eligibility to validate — no application found",
      amount: "CA$200K–CA$5M, up to 50% of eligible project costs",
      intake: "Continuous two-stage intake",
      fit: "Food and beverage processing is eligible and preferred; manufacturing-capacity equipment can qualify. Land acquisition is not eligible, and at least 50% confirmed non-government funding is required.",
      nextAction: "Contact a PrairiesCan officer before an EOI. Test equipment-only scope and assemble two years of statements, interim statements and confirmed non-government funding evidence.",
      source: "Official Canada.ca page rechecked August 15, 2026; Manitoba email noted a PrairiesCan discussion",
      sourceUrl: "https://mail.google.com/mail/#all/19fa49e77d799116",
      programUrl: "https://www.canada.ca/en/prairies-economic-development/services/funding/business-scale-up-productivity/application-process.html",
      verification: "Official program page reviewed · mailbox has no application confirmation",
    },
    {
      id: "opp-mb-ag-fdc",
      name: "Manitoba Agriculture / Food Development Centre",
      category: "Technical commercialization support",
      pipeline: "Referral and tour offered",
      availability: "Available through referral",
      fitLevel: "Strong readiness fit",
      status: "Resources received — tour not booked",
      amount: "Fee-for-service technical and research support; no cash award is implied",
      intake: "Contact-led service access",
      fit: "The provincial Food Development Centre provides laboratory trials, scale-up, shelf-life, sensory, regulatory and commercialization support that fits an RTE food-processing project.",
      nextAction: "Ask Karen Walker-Tibble to arrange the FDC tour and identify the exact testing, scale-up and regulatory services needed for the RTE plan.",
      source: "Manitoba Agriculture email · August 12–13, 2026",
      sourceUrl: "https://mail.google.com/mail/#all/19ff7e2959dff65d",
      programUrl: "https://www.gov.mb.ca/agriculture/food-and-ag-processing/starting-a-food-business/food-development-centre/index.html",
      verification: "Official provincial email and service page reviewed",
    },
  ],
  fundingOutcomes: [
    {
      name: "Canada Infrastructure Bank",
      status: "Screened out — not a fit",
      detail: "A CIB Indigenous and Northern Infrastructure representative advised on July 17, 2026 that the project does not fit CIB’s structured project-finance mandate, then referred the relationship to FCC.",
      sourceUrl: "https://mail.google.com/mail/#all/19f709521769aaae",
    },
    {
      name: "Manitoba Trade Growth Investment Financing",
      status: "Screened out — not a fit",
      detail: "The Manitoba program analyst confirmed on July 23, 2026 that TGIF was not the right fit for the stated funding need. The official program also requires at least 25% project equity, while the corrected owner-equity layer is 4%.",
      sourceUrl: "https://mail.google.com/mail/#all/19f8fa400282e06d",
    },
  ],
  emailScan: {
    mailbox: "richardc@shellysbistro.com",
    scannedAt: "August 15, 2026",
    queryWindow: "March 19–August 11 baseline",
    refreshWindow: "August 12–15, 2026",
    incrementalMessages: 11,
    messages: 410,
    threads: 184,
    categories: [
      { label: "Leadership & project", count: 47 },
      { label: "Facility & contractors", count: 20 },
      { label: "Customers & government", count: 56 },
      { label: "Funding", count: 13 },
      { label: "Other project correspondence", count: 48 },
    ],
    note: "The baseline scan matched Shelly’s/Shelley Bistro, Paquin Road, SIB RTE and Ready To Eat terms. The August 15 refresh separately reviewed 11 clearly project-relevant messages from August 12–15; no new project email arrived on August 15. Follow-ups summarize actions without storing bulk private message bodies.",
  },
  followUps: [
    {
      id: "follow-fcc",
      priority: "Now",
      organization: "Farm Credit Canada / IC Canada",
      subject: "Financing documents and advisory discovery call",
      lastDate: "August 13, 2026",
      status: "Waiting on FCC scheduling",
      owner: "Vince",
      nextAction: "Follow up if Nicholas Boucher does not propose a call time. Provide accountant-prepared statements, then forward signed LOIs/MOUs or contract support as they become available.",
      evidence: "Richard supplied Vince’s email and confirmed interest on August 13. FCC still needs statements and revenue support before serious financing consideration.",
      sourceUrl: "https://mail.google.com/mail/#all/19ffbc15cd6d0585",
    },
    {
      id: "follow-bump",
      priority: "Now",
      organization: "Government of Manitoba — BUMP",
      subject: "Separate-employer eligibility clarification",
      lastDate: "August 13, 2026",
      status: "Awaiting Manitoba response",
      owner: "Vince",
      nextAction: "Wait for Monique Leclerc’s ruling on AIMA and Shelly’s as separate employers. If eligible, Vince should contact BUMP directly for Shelly’s and submit the employer’s own intake.",
      evidence: "Trisha Sinclair asked Manitoba on August 13 whether two separately registered employers under the same owner may each apply for their own employees. The program does not accept third-party applications.",
      sourceUrl: "https://mail.google.com/mail/#all/19ffbd3043721510",
    },
    {
      id: "follow-srf",
      priority: "Now",
      organization: "ISED — Strategic Response Fund",
      subject: "Application under review and internal financial check",
      lastDate: "August 8, 2026",
      status: "Internal decision required",
      owner: "Vince & Cat",
      nextAction: "Review the submitted financials together, document whether corrections or clarifications are needed, and agree on one authorized contact while the official review continues.",
      evidence: "ISED confirmed review on August 5. A later internal email raised material concern about the financial presentation; no official withdrawal was found.",
      sourceUrl: "https://mail.google.com/mail/#all/19fd00b5ba2a86a9",
    },
    {
      id: "follow-fpegf",
      priority: "This week",
      organization: "First Peoples Economic Growth Fund",
      subject: "Proposed August 18 lunch with Clayton Burka",
      lastDate: "August 14, 2026",
      status: "Awaiting meeting confirmation",
      owner: "Vince",
      nextAction: "Confirm whether Clayton accepts Tuesday, August 18 at noon, choose the Vince/Cat attendee and prepare the ownership, financing and document-readiness package.",
      evidence: "After a phone call with Clayton, Richard proposed lunch at Pho Kim Tuong. No confirmation was found by the August 15 refresh.",
      sourceUrl: "https://mail.google.com/mail/#all/1a002137493af5f1",
    },
    {
      id: "follow-manitoba-meeting",
      priority: "This week",
      organization: "Manitoba Agriculture / Agri-Food",
      subject: "Food Development Centre tour and technical support",
      lastDate: "August 13, 2026",
      status: "Referral offered — tour not booked",
      owner: "Vince",
      nextAction: "Ask Karen Walker-Tibble to arrange the Food Development Centre tour and identify priority testing, scale-up, shelf-life and regulatory-support needs.",
      evidence: "Karen sent CFIA, preventive-control and pricing resources and offered to arrange an FDC tour. Richard thanked her and shared the equipment list; no tour date is on the calendar.",
      sourceUrl: "https://mail.google.com/mail/#all/19ff7e2959dff65d",
    },
    {
      id: "follow-winnipeg-edt",
      priority: "This week",
      organization: "Economic Development Winnipeg",
      subject: "Winnipeg EDT connection",
      lastDate: "August 11, 2026",
      status: "Meeting confirmed — outcome not captured",
      owner: "Vince",
      nextAction: "Add the meeting outcome and follow up with Lindsay Goodine on specific site, financing, workforce or investment-navigation support.",
      evidence: "The latest message confirms the meeting; no post-meeting action record was found.",
      sourceUrl: "https://mail.google.com/mail/#all/19ff12d2c3e7fe3b",
    },
    {
      id: "follow-mcw",
      priority: "This week",
      organization: "MCW",
      subject: "Mechanical/electrical quote collection",
      lastDate: "August 8, 2026",
      status: "Quote decision pending",
      owner: "Cat",
      nextAction: "Confirm whether the quote package was finalized, register the received scope and fee, and compare it with the contractor tracker before a selection decision.",
      evidence: "Cat advised that quote collection should be finalized early the following week.",
      sourceUrl: "https://mail.google.com/mail/#all/19f614645e3a72f5",
    },
    {
      id: "follow-castle",
      priority: "This week",
      organization: "Castle Pest Control",
      subject: "Site-visit quote review status",
      lastDate: "August 10, 2026",
      status: "Inbound follow-up awaiting response",
      owner: "Cat",
      nextAction: "Acknowledge Jonathan Pedersen’s follow-up and state whether the quote is under review, declined or awaiting comparison; record the decision in the contractor tracker.",
      evidence: "The contractor asked whether its late-July site-visit quote had entered review or reached a decision.",
      sourceUrl: "https://mail.google.com/mail/#all/19fec6a85bbd38e2",
    },
    {
      id: "follow-sjasd",
      priority: "This week",
      organization: "St. James-Assiniboia School Division",
      subject: "August 10 nutrition-program meeting",
      lastDate: "July 31, 2026",
      status: "Meeting date passed — recap not found",
      owner: "Vince",
      nextAction: "Confirm whether the August 10 meeting occurred; send a recap and log requested menu, capacity, pricing or pilot information.",
      evidence: "Yvonne Perry confirmed the August 10 meeting and said electronic material could wait until the meeting; no later thread was found in the scan.",
      sourceUrl: "https://mail.google.com/mail/#all/19fb3d9045d9f1bd",
    },
    {
      id: "follow-pembina",
      priority: "Date-based",
      organization: "Pembina Trails School Division",
      subject: "Nutrition-program meeting request",
      lastDate: "August 13, 2026",
      status: "Outbound request — no response found",
      owner: "Vince",
      nextAction: "Track the meeting request and follow up when the division’s nutrition-program leaders return in late August or early September.",
      evidence: "A Shelly’s Pembina Trails brief and meeting request were sent August 13. No reply was found by the August 15 refresh.",
      sourceUrl: "https://mail.google.com/mail/#all/19ffcf8e206a1e59",
    },
    {
      id: "follow-low-carbon",
      priority: "Date-based",
      organization: "Manitoba Environment and Climate Change",
      subject: "Low-carbon Indigenous food manufacturing partnership",
      lastDate: "August 5, 2026",
      status: "Outbound request — no response found",
      owner: "Vince",
      nextAction: "Follow up after 7–10 business days with a one-page request focused on the 90-day low-carbon manufacturing partnership and the exact decision sought.",
      evidence: "An outbound ministerial meeting request was found; no response appeared in the scanned window.",
      sourceUrl: "https://mail.google.com/mail/#all/19fd261efdfcc730",
    },
    {
      id: "follow-prairiescan",
      priority: "This week",
      organization: "PrairiesCan",
      subject: "Business Scale-up and Productivity screening",
      lastDate: "July 29, 2026",
      status: "Referral noted — direct response not found",
      owner: "Vince",
      nextAction: "Contact the Manitoba regional office before filing an EOI and test an equipment/manufacturing-capacity scope against BSP requirements.",
      evidence: "A Manitoba contact said PrairiesCan had been approached; no direct PrairiesCan reply or application confirmation was found.",
      sourceUrl: "https://mail.google.com/mail/#all/19f6badfb96fc7e1",
    },
  ],
  calendarSnapshot: {
    account: "richardc@shellysbistro.com",
    importedAt: "August 15, 2026",
    savedCount: 0,
    proposedCount: 1,
    note: "The Shelly’s Bistro primary calendar is now connected. No saved upcoming events were found from August 15 through September 15, 2026. The email-derived FPEGF lunch below is only a proposal and has not been added to the calendar.",
    events: [
      { id: "email-fpegf-lunch", title: "Proposed lunch with Clayton Burka — FPEGF", schedule: "Tue, Aug 18 · 12:00 PM", cadence: "Email proposal", relevance: "Awaiting Clayton confirmation · not saved to Google Calendar", location: "Pho Kim Tuong · 856 Ellice Avenue, Winnipeg", url: "https://mail.google.com/mail/#all/1a002137493af5f1", actionLabel: "Open email" },
    ],
  },
  innovationData: {
    refreshedAt: "August 15, 2026",
    thesis: "Build a prevention-first circular food system and a community-led research talent pipeline around Shelly’s proposed RTE facility.",
    disclaimer: "These are research programs and partnership hypotheses. No waste baseline, digester design, scholarship fund, referral agreement, employment commitment, preservative claim or shelf-life extension is approved or operational.",
    programs: [
      {
        id: "circular-food",
        code: "01",
        theme: "Circular bioeconomy",
        title: "Zero food waste → biogas",
        stage: "Discovery",
        evidenceState: "Authoritative precedent",
        thesis: "A measured, prevention-first waste system can keep edible food at its highest use and direct only unavoidable, suitable organics to anaerobic digestion for biogas and beneficial digestate use.",
        goals: ["Measure every material stream by source, reason and destination", "Prevent or recover edible surplus before energy recovery", "Complete an anaerobic-digestion pre-feasibility case for unavoidable residuals"],
        questions: ["Which streams are avoidable, edible, upcyclable or unavoidable?", "What are the mass, moisture, contamination, volatile-solids and seasonality profiles?", "Is on-site digestion, co-digestion or a third-party offtake model safer and more economical?"],
        measures: ["kg waste / 1,000 meals", "% prevented or recovered", "% organics diverted", "estimated biogas and digestate yield", "CA$/tonne managed"],
        nextGate: "Run a four-week, shift-level waste characterization before selecting any technology.",
        sources: [
          { label: "ECCC food loss and waste hierarchy", url: "https://www.canada.ca/en/environment-climate-change/services/managing-reducing-waste/food-loss-waste.html" },
          { label: "NRCan anaerobic-digestion demonstration", url: "https://natural-resources.canada.ca/energy-sources/clean-fuels/urban-waste-electricity-demonstration" },
          { label: "Manitoba Waste Use Efficiency", url: "https://www.gov.mb.ca/scap/climatechange/sustainableagripro/waste-use-efficiency.html" },
        ],
      },
      {
        id: "scholarship-studio",
        code: "02",
        theme: "Research talent",
        title: "Scholarships & bursaries",
        stage: "Concept",
        evidenceState: "Program landscape identified",
        thesis: "A Shelly’s-linked award and paid applied-research placement can attract Indigenous and Manitoba learners into food science, nutrition, engineering, logistics and community food-systems research without duplicating existing aid.",
        goals: ["Map existing aid before creating a new fund", "Define transparent, community-led eligibility and selection", "Pair financial support with paid applied research and mentorship"],
        questions: ["Which learner groups and disciplines face the largest unmet costs?", "Should support be a bursary, scholarship, paid placement or stackable combination?", "Which institutions and Indigenous organizations should govern selection and research ownership?"],
        measures: ["applicants and awards", "unmet-cost reduction", "paid placements completed", "research outputs", "learner retention"],
        nextGate: "Interview prospective learners and partner institutions; publish a funding-gap and governance brief.",
        sources: [
          { label: "Canada Indigenous education, bursaries and jobs", url: "https://www.canada.ca/en/services/indigenous-peoples/education-training-jobs.html" },
          { label: "Indigenous Scholars Awards and Supplements", url: "https://sshrc-crsh.canada.ca/en/funding/opportunities/supplements/2026/indigenous-scholars-awards-and-supplements.aspx" },
          { label: "Manitoba Advancing Futures Bursary", url: "https://www.gov.mb.ca/wd/ites/youth/advancingfuturesbursary.html" },
        ],
      },
      {
        id: "inclusive-pathway",
        code: "03",
        theme: "Inclusive workforce",
        title: "Employment & training pathway",
        stage: "Partnership design",
        evidenceState: "Referral pathways identified",
        thesis: "A voluntary, paid, trauma-informed pathway with wrap-around supports can connect school-division parents, families affected by incarceration, people involved with CFS and EIA participants to durable food-sector careers.",
        goals: ["Co-design referrals with community partners and participants", "Provide paid learning, credentials and progressively responsible work", "Measure retention and advancement rather than intake volume alone"],
        questions: ["Which barriers—child care, transport, scheduling, ID, food-safety credentials or trust—must be funded?", "Which referrals can occur lawfully with informed consent and minimal data?", "Which roles can support staged entry, recognized credentials and advancement?"],
        measures: ["voluntary referrals", "paid training completion", "credential attainment", "90/180/365-day retention", "wage and role progression"],
        nextGate: "Form a participant advisory circle and draft consent, referral, wrap-around-support and paid-placement protocols.",
        sources: [
          { label: "Manitoba Training and Employment Services", url: "https://gov.mb.ca/wd/ites/index.html" },
          { label: "Manitoba EIA employment assistance", url: "https://www.gov.mb.ca/fs/eia/eia_general.html" },
          { label: "Indigenous Skills and Employment Training", url: "https://www.canada.ca/en/employment-social-development/programs/indigenous-skills-employment-training/service-delivery-organizations.html" },
          { label: "CORCAN employment partnership model", url: "https://www.canada.ca/en/correctional-service/programs/corcan/corcan-works-offenders.html" },
        ],
      },
      {
        id: "preservation-lab",
        code: "04",
        theme: "Food science",
        title: "Nutrition-forward preservation lab",
        stage: "Protocol design",
        evidenceState: "Regulatory framework identified",
        thesis: "Permitted ingredients and food-design hurdles may improve nutrition, oxidation control or microbial stability, but every formula requires product-specific safety, sensory, nutrient and shelf-life validation.",
        goals: ["Screen nutrition-forward ingredient systems against Canadian permissions", "Run product-specific challenge, shelf-life and sensory studies", "Advance only interventions that preserve safety and meal acceptability"],
        questions: ["Which menu families have the highest spoilage or oxidation risk?", "Can permitted acids, antioxidants, fermentation or plant-derived candidates add value without unacceptable flavour or allergen impacts?", "What pH, water activity, packaging and cold-chain hurdles are needed?"],
        measures: ["Listeria growth potential", "spoilage counts", "days of validated shelf life", "nutrient retention", "sensory acceptance", "cost / meal"],
        nextGate: "Select two priority foods and approve a regulator-reviewed design-of-experiments and laboratory plan.",
        sources: [
          { label: "Health Canada permitted preservatives", url: "https://www.canada.ca/en/health-canada/services/food-nutrition/food-safety/food-additives/lists-permitted/11-preservatives.html" },
          { label: "CFIA Listeria controls for RTE food", url: "https://inspection.canada.ca/en/food-safety-industry/preventive-control-plans/listeria-monocytogenes" },
          { label: "CFIA shelf-life studies", url: "https://inspection.canada.ca/en/preventive-controls/shelf-life-studies" },
        ],
      },
    ],
    wasteStreams: [
      { stream: "Edible overproduction", source: "Planning, cooking and packing", baseline: "Not measured", preferredRoute: "Prevent → safe redistribution or approved upcycling", biogasFit: "Residual only", dataNeeded: "kg by SKU/shift; reason; time/temperature; disposition", nextAction: "Add reason-coded weigh station and safe-surplus decision rule." },
      { stream: "Vegetable and fruit trim", source: "Preparation", baseline: "Not measured", preferredRoute: "Yield improvement → edible upcycling → animal feed/AD review", biogasFit: "Potentially suitable", dataNeeded: "kg/day; moisture; contamination; seasonality", nextAction: "Measure usable yield and separate clean plant material at source." },
      { stream: "Starch, grain and bakery residuals", source: "Preparation and returned product", baseline: "Not measured", preferredRoute: "Prevention/upcycling → AD review", biogasFit: "Potentially high energy", dataNeeded: "kg/day; total solids; COD; salt; packaging", nextAction: "Characterize by recipe family and keep packaging out of organics." },
      { stream: "Fats, oils and grease", source: "Cooking and wash-down", baseline: "Not measured", preferredRoute: "Reduce → approved oil recovery/biodiesel → controlled co-digestion", biogasFit: "High yield but process-sensitive", dataNeeded: "litres/day; free fatty acids; contamination; collection method", nextAction: "Separate used oil from grease-trap material and obtain licensed options." },
      { stream: "Animal-protein residuals", source: "Meat, dairy and egg handling", baseline: "Not measured", preferredRoute: "Prevent → regulated recovery/rendering → AD feasibility", biogasFit: "Requires biosecurity review", dataNeeded: "kg/day; pathogen risk; temperature; regulatory category", nextAction: "Have food-safety and waste specialists approve segregation and handling." },
      { stream: "High-COD liquids and wastewater solids", source: "Kettles, sauces and sanitation", baseline: "Not measured", preferredRoute: "Reduce at source → capture solids → treatment/co-digestion study", biogasFit: "Site-specific", dataNeeded: "m³/day; COD/BOD; pH; temperature; cleaning chemicals", nextAction: "Sample process wastewater separately from sanitary flows." },
      { stream: "Packaging-contaminated organics", source: "Packing rejects and returns", baseline: "Not measured", preferredRoute: "Prevent rejects → depackage → recover clean fraction", biogasFit: "Only after depackaging", dataNeeded: "kg/day; packaging type; contamination rate; depackage yield", nextAction: "Track root cause and test whether safe depackaging is economical." },
    ],
    pathway: [
      { step: "01", title: "Voluntary referral", detail: "School divisions, community organizations, CFS/EIA workers or justice-family supports share program information; no personal data moves without informed consent." },
      { step: "02", title: "Participant-led plan", detail: "Identify goals, strengths, schedule, child care, transport, ID, accessibility and cultural supports." },
      { step: "03", title: "Paid foundation", detail: "Workplace orientation, food safety, essential skills, digital basics and supported job sampling are paid." },
      { step: "04", title: "Credential pathway", detail: "Stack role-specific microcredentials, recognized training and apprenticeship hours where available." },
      { step: "05", title: "Supported placement", detail: "Use predictable schedules, coaching, supervisor check-ins and barrier-removal funds." },
      { step: "06", title: "Retention & advancement", detail: "Track 90/180/365-day retention, wage progression, promotion and participant-defined outcomes." },
    ],
    preservationExperiments: [
      { candidate: "Vinegar / permitted acetic-acid systems", intendedValue: "Acidification and antimicrobial hurdle", nutritionAngle: "Can reduce reliance on some conventional preservative systems; not inherently a nutrient claim", requiredTests: "pH, sensory, pathogen challenge, spoilage, packaging interaction", gate: "Permitted use and product-specific validation", state: "Research only" },
      { candidate: "Ascorbic-acid / vitamin-C systems", intendedValue: "Antioxidant and colour/quality protection where permitted", nutritionAngle: "Potential nutrient contribution must be analytically verified through shelf life", requiredTests: "assay, oxidation, sensory, microbiology, label review", gate: "Permitted food/category and validated label claim", state: "Research only" },
      { candidate: "Fermentation or protective cultures", intendedValue: "Biopreservation through validated competitive or antimicrobial effects", nutritionAngle: "Potential flavour and fermentation benefits; strain- and product-specific", requiredTests: "strain identity, pathogen challenge, pH, metabolites, sensory, allergen review", gate: "Regulatory status plus process and shelf-life validation", state: "Research only" },
      { candidate: "Herb, spice and berry polyphenol candidates", intendedValue: "Experimental antioxidant or antimicrobial support", nutritionAngle: "Potential phytonutrient contribution; bioavailability and stability unknown", requiredTests: "dose-response, interactions, sensory, nutrient stability, challenge study", gate: "No preservative or health claim without authorization and evidence", state: "Experimental" },
    ],
    promptlets: [
      { id: "R01", discipline: "Data engineering", title: "Factory material-mass balance", priority: "P0", prompt: "Design a lot-, SKU-, line- and shift-level waste event schema that records mass, reason, edibility, contamination, destination, cost and evidence without inventing baseline values.", deliverable: "Data dictionary, event model, validation rules and dashboard measures." },
      { id: "R02", discipline: "Process engineering", title: "Four-week waste characterization", priority: "P0", prompt: "Engineer a sampling plan that captures representative operating days, source segregation, scale calibration, moisture/solids and contamination while minimizing production disruption.", deliverable: "Sampling protocol, station layout, training sheet and QA checks." },
      { id: "R03", discipline: "Bioenergy engineering", title: "Anaerobic-digestion pre-feasibility", priority: "P0", prompt: "Compare prevention, third-party organics offtake, co-digestion and on-site digestion using measured feedstock, biogas yield ranges, digestate route, utility integration, permitting, safety and lifecycle economics.", deliverable: "Options matrix, mass/energy balance, risk register and stage-gate recommendation." },
      { id: "R04", discipline: "Program design", title: "Scholarship gap map", priority: "P0", prompt: "Map existing Indigenous and Manitoba scholarships, bursaries, student aid and paid research placements by eligibility, discipline, value, timing and unmet learner costs.", deliverable: "Deduplicated opportunity map and documented funding-gap thesis." },
      { id: "R05", discipline: "Governance", title: "Community-led award model", priority: "P1", prompt: "Design transparent selection, conflict-of-interest, privacy, Indigenous data governance, mentorship and reporting rules for a Shelly’s-linked award without inventing eligibility or funding.", deliverable: "Draft terms of reference, scoring rubric and decision log." },
      { id: "R06", discipline: "Research partnerships", title: "Paid applied-research placement", priority: "P1", prompt: "Specify a paid learner placement that produces useful food-science, engineering, nutrition or logistics research while protecting academic independence and ownership of community knowledge.", deliverable: "Placement brief, supervision model, IP/data clauses and output rubric." },
      { id: "R07", discipline: "Service design", title: "Consent-based referral pathway", priority: "P0", prompt: "Design a minimal-data, voluntary referral workflow for school-division parents, justice-affected families, CFS-connected people and EIA participants, with explicit consent, withdrawal and no adverse-benefit consequences.", deliverable: "Service blueprint, consent language, data map and escalation paths." },
      { id: "R08", discipline: "Workforce development", title: "Paid training architecture", priority: "P0", prompt: "Map entry roles to essential skills, food-safety credentials, microcredentials, apprenticeship possibilities, coaching and progressive wage/role milestones.", deliverable: "Competency matrix, curriculum sequence and advancement map." },
      { id: "R09", discipline: "Impact measurement", title: "Barrier and retention model", priority: "P1", prompt: "Cost the child care, transport, scheduling, equipment, ID, accessibility and coaching supports needed, then define participant-centred 90/180/365-day outcomes.", deliverable: "Unit-cost model, support policy and outcomes framework." },
      { id: "R10", discipline: "Food science", title: "Nutrition-forward preservation screen", priority: "P0", prompt: "Screen permitted acids, antioxidant nutrients, fermentation/protective cultures and plant candidates by menu family, regulatory status, mechanism, sensory risk and validation burden.", deliverable: "Candidate matrix with go/no-go evidence gates." },
      { id: "R11", discipline: "Microbiology", title: "Shelf-life design of experiments", priority: "P0", prompt: "Create a product-specific study covering control and treatment formulas, replicate lots, pH/water activity, relevant pathogens and spoilage organisms, sensory testing, cold-chain abuse and statistical decision rules.", deliverable: "Regulator-reviewable protocol and laboratory data plan." },
      { id: "R12", discipline: "Regulatory affairs", title: "Claim and commercialization gate", priority: "P0", prompt: "Define the evidence required before changing formulation, shelf life, nutrition language or preservative claims, including permitted-use checks, preventive-control updates and label review.", deliverable: "Compliance checklist, approval record and launch gate." },
    ],
  },
  budget: [
    { id: "budget-facility", activity: "Facility acquisition", amountThousands: 8700, status: "Conditional", detail: "Includes CA$1,000k deposit and CA$7,700k balance.", sourceId: "proposal", verification: "Pending source attachment" },
  ],
  conflicts: [
    {
      id: "conflict-contact-identity",
      title: "Current leadership differs from the original project brief",
      subject: "Leadership roster",
      state: "Open",
      detail: "The original build brief identifies Richard Chimebele as expansion project manager. The user corrected current leadership to Vince and Cat only on August 12, 2026. Richard remains associated only with the authenticated project mailbox and historical tracker notes, not the leadership roster.",
      nextAction: "Update or supersede the proposal/workplan leadership references while retaining their historical source provenance.",
    },
    {
      id: "conflict-budget-truncation",
      title: "Eleven proposal budget activities are absent from the supplied prompt",
      subject: "Budget completeness",
      state: "Open",
      detail: "The build prompt asks for twelve budget activities but ends after the Facility acquisition row. The other activities and values were not supplied.",
      nextAction: "Attach the approved proposal and extract the complete budget table into the review queue.",
    },
    {
      id: "conflict-owner-equity",
      title: "User corrections change the proposed financing stack",
      subject: "Financing plan",
      state: "Open",
      detail: "The original build brief stated CA$6.25M / 25% owner equity and CA$10.0M / 40% grants. The user corrected the current plan to CA$1.0M / 4% owner equity and CA$15.25M / 61% grants on August 12, 2026. The structured financing stack uses the correction and retains the superseded values here for provenance.",
      nextAction: "Reconcile the corrected allocation with the approved proposal and map the CA$15.25M grant/contribution layer to specific programs without implying awards.",
    },
    {
      id: "conflict-transcona",
      title: "Transcona invoice dispute resolution is internally inconsistent",
      subject: "Contractor invoice status",
      state: "Open",
      detail: "Contractor Tracker row 5 labels the status ‘Invoiced Dispute Resolved’, while the same row’s date says DISPUTED and its note says not to pay until the authorization dispute is resolved.",
      nextAction: "Attach the resolution or current invoice decision and approve one current state without altering the source workbook.",
    },
    {
      id: "conflict-jilmark-fee",
      title: "Jilmark fee status conflicts with the tracker note",
      subject: "Contractor pricing status",
      state: "Open",
      detail: "Contractor Tracker row 9 says ‘No Fee required’, but its note says no fee yet and directs the team to request the fee after confirming the site visit.",
      nextAction: "Confirm whether the no-fee status applies to a visit only or to the requested design-build/GC pricing engagement.",
    },
  ],
};

const ui = {
  view: new URLSearchParams(window.location.search).get("view") === "tasks" ? "tasks" : "overview",
  workplanFilter: "All",
  search: "",
  activeRecordId: null,
  pendingSourceId: null,
  taskTargetId: new URLSearchParams(window.location.search).get("task") || "",
};

const taskHub = {
  tasks: [],
  loading: true,
  error: "",
  currentUser: savedTaskUser(),
  pushPerson: savedPushPerson(),
  pushSubscribed: false,
  pushBusy: false,
  stream: null,
  serviceWorker: null,
};

let state = loadState();

const mainContent = document.querySelector("#mainContent");
const sidebar = document.querySelector("#sidebar");
const scrim = document.querySelector("#scrim");
const drawer = document.querySelector("#recordDrawer");
const drawerTitle = document.querySelector("#drawerTitle");
const drawerBody = document.querySelector("#drawerBody");
const viewTitle = document.querySelector("#viewTitle");
const viewEyebrow = document.querySelector("#viewEyebrow");
const recordDialog = document.querySelector("#recordDialog");
const approvalDialog = document.querySelector("#approvalDialog");

function cloneSeed() {
  return JSON.parse(JSON.stringify(seedState));
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return cloneSeed();
    const parsed = JSON.parse(saved);
    return parsed.version === seedState.version ? parsed : cloneSeed();
  } catch (_error) {
    return cloneSeed();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateNavCounts();
}

async function taskApi(path, options = {}) {
  const response = await fetch(path, {
    ...options,
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || "The shared task service could not complete the request.");
  return payload;
}

function sortSharedTasks() {
  const priority = { High: 0, Normal: 1, Low: 2 };
  taskHub.tasks.sort((left, right) => {
    const completionDifference = Number(left.status === "Completed") - Number(right.status === "Completed");
    if (completionDifference) return completionDifference;
    const priorityDifference = (priority[left.priority] ?? 1) - (priority[right.priority] ?? 1);
    if (priorityDifference) return priorityDifference;
    if (left.dueDate && right.dueDate && left.dueDate !== right.dueDate) return left.dueDate.localeCompare(right.dueDate);
    if (left.dueDate !== right.dueDate) return left.dueDate ? -1 : 1;
    return String(right.createdAt).localeCompare(String(left.createdAt));
  });
}

function upsertSharedTask(task) {
  const index = taskHub.tasks.findIndex((item) => item.id === task.id);
  if (index >= 0) taskHub.tasks[index] = task;
  else taskHub.tasks.push(task);
  sortSharedTasks();
}

async function loadSharedTasks() {
  try {
    const payload = await taskApi("/api/tasks");
    taskHub.tasks = Array.isArray(payload.tasks) ? payload.tasks : [];
    sortSharedTasks();
    taskHub.error = "";
  } catch (error) {
    taskHub.error = error.message;
  } finally {
    taskHub.loading = false;
    render();
  }
}

function connectTaskStream() {
  if (!("EventSource" in window) || taskHub.stream) return;
  taskHub.stream = new EventSource("/api/tasks/events");
  ["task-created", "task-updated"].forEach((eventName) => {
    taskHub.stream.addEventListener(eventName, (event) => {
      const task = JSON.parse(event.data);
      const isNewForThisUser = eventName === "task-created" && task.assignee === taskHub.currentUser;
      upsertSharedTask(task);
      render();
      if (isNewForThisUser) showToast(`New task from ${task.createdBy}: ${task.title}`);
    });
  });
}

function urlBase64ToUint8Array(value) {
  const padding = "=".repeat((4 - (value.length % 4)) % 4);
  const base64 = (value + padding).replaceAll("-", "+").replaceAll("_", "/");
  const raw = window.atob(base64);
  return Uint8Array.from([...raw].map((character) => character.charCodeAt(0)));
}

async function prepareTaskPush() {
  if (!("serviceWorker" in navigator) || !("PushManager" in window) || !("Notification" in window)) return;
  try {
    taskHub.serviceWorker = await navigator.serviceWorker.register("/service-worker.js");
    const subscription = await taskHub.serviceWorker.pushManager.getSubscription();
    taskHub.pushSubscribed = Boolean(subscription && taskHub.pushPerson === taskHub.currentUser);
  } catch (_error) {
    taskHub.pushSubscribed = false;
  }
  if (ui.view === "tasks") render();
}

async function enablePushForCurrentUser() {
  if (taskHub.pushBusy) return;
  if (!("serviceWorker" in navigator) || !("PushManager" in window) || !("Notification" in window)) {
    showToast("This browser does not support push notifications.");
    return;
  }
  if (!window.isSecureContext) {
    showToast("Push notifications require HTTPS or localhost.");
    return;
  }
  taskHub.pushBusy = true;
  render();
  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") throw new Error("Notifications were not enabled in this browser.");
    taskHub.serviceWorker ||= await navigator.serviceWorker.register("/service-worker.js");
    const { publicKey } = await taskApi("/api/push/config");
    let subscription = await taskHub.serviceWorker.pushManager.getSubscription();
    if (!subscription) {
      subscription = await taskHub.serviceWorker.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey),
      });
    }
    await taskApi("/api/push/subscribe", {
      method: "POST",
      body: JSON.stringify({ person: taskHub.currentUser, subscription: subscription.toJSON() }),
    });
    taskHub.pushPerson = taskHub.currentUser;
    taskHub.pushSubscribed = true;
    localStorage.setItem(TASK_PUSH_PERSON_KEY, taskHub.currentUser);
    showToast(`${taskHub.currentUser} will receive task notifications on this device.`);
  } catch (error) {
    showToast(error.message);
  } finally {
    taskHub.pushBusy = false;
    render();
  }
}

function setTaskUser(person) {
  if (!["Cat", "Richard"].includes(person)) return;
  taskHub.currentUser = person;
  taskHub.pushSubscribed = taskHub.pushPerson === person && "Notification" in window && Notification.permission === "granted";
  localStorage.setItem(TASK_USER_KEY, person);
  render();
}

function openTaskDialog() {
  ui.view = "tasks";
  render();
  const form = document.querySelector("#recordForm");
  form.elements.createdBy.value = taskHub.currentUser;
  form.elements.assignee.value = taskHub.currentUser === "Cat" ? "Richard" : "Cat";
  recordDialog.showModal();
  form.elements.title.focus();
}

async function updateSharedTaskStatus(taskId, status) {
  try {
    const payload = await taskApi(`/api/tasks/${encodeURIComponent(taskId)}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    });
    upsertSharedTask(payload.task);
    render();
    showToast(`Task marked ${status.toLowerCase()}.`);
  } catch (error) {
    showToast(error.message);
  }
}

async function initializeTaskCentre() {
  connectTaskStream();
  await Promise.all([loadSharedTasks(), prepareTaskPush()]);
}

function openSourceVault() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(SOURCE_DB, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains("originals")) request.result.createObjectStore("originals", { keyPath: "sourceId" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function storeSourceOriginal(sourceId, file, hash) {
  const db = await openSourceVault();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("originals", "readwrite");
    const store = transaction.objectStore("originals");
    const check = store.get(sourceId);
    check.onsuccess = () => {
      if (check.result) {
        transaction.abort();
        reject(new Error("An immutable original is already registered for this source."));
        return;
      }
      store.add({ sourceId, file, hash, storedAt: new Date().toISOString() });
    };
    check.onerror = () => reject(check.error);
    transaction.oncomplete = () => {
      db.close();
      resolve();
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error);
    };
    transaction.onabort = () => db.close();
  });
}

async function getSourceOriginal(sourceId) {
  const db = await openSourceVault();
  return new Promise((resolve, reject) => {
    const request = db.transaction("originals", "readonly").objectStore("originals").get(sourceId);
    request.onsuccess = () => {
      db.close();
      resolve(request.result || null);
    };
    request.onerror = () => {
      db.close();
      reject(request.error);
    };
  });
}

async function registerSourceOriginal(sourceId, file) {
  const source = state.sources.find((item) => item.id === sourceId);
  if (!source || !file) return;
  if (source.state === "Available" && source.immutableOriginal) {
    showToast("This source already has an immutable original. Add a new source/version instead of replacing it.");
    return;
  }
  try {
    const digest = await crypto.subtle.digest("SHA-256", await file.arrayBuffer());
    const hash = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
    await storeSourceOriginal(sourceId, file, hash);
    source.state = "Available";
    source.immutableOriginal = true;
    source.attachedName = file.name;
    source.fileSize = file.size;
    source.importedAt = new Date().toISOString();
    source.sha256 = hash;
    source.reference = `Immutable local original · SHA-256 ${hash}`;
    saveState();
    render();
    showToast("Original registered in the local evidence vault. Extracted claims still require review.");
  } catch (error) {
    showToast(error.message || "The source original could not be registered.");
  }
}

async function downloadSourceOriginal(sourceId) {
  try {
    const stored = await getSourceOriginal(sourceId);
    if (!stored) {
      showToast("The stored original is unavailable in this browser profile.");
      return;
    }
    const url = URL.createObjectURL(stored.file);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = stored.file.name;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  } catch (_error) {
    showToast("The stored original could not be opened.");
  }
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatMoney(value, compact = false) {
  return formatCurrency(value, "CAD", compact);
}

function formatCurrency(value, currency = "CAD", compact = false) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency,
    notation: compact ? "compact" : "standard",
    maximumFractionDigits: compact ? 2 : 0,
  }).format(value);
}

function formatQuoteRange(low, high) {
  if (low == null && high == null) return "Not supplied";
  if (low === high || high == null) return formatMoney(low);
  return `${formatMoney(low)}–${formatMoney(high)}`;
}

function formatDailyUse(value) {
  const kilograms = Number(value) || 0;
  if (!kilograms) return "0 kg/day";
  return `≈${new Intl.NumberFormat("en-CA", { maximumFractionDigits: 0 }).format(kilograms)} kg/day`;
}

function statusBadge(status) {
  return `<span class="status-badge" data-state="${escapeHtml(status)}">${escapeHtml(status)}</span>`;
}

function verificationBadge(verification) {
  const approved = verification === "Approved";
  return `<span class="verification-badge${approved ? " is-approved" : ""}">${escapeHtml(verification)}</span>`;
}

function typeBadge(type) {
  return `<span class="type-badge">${escapeHtml(type)}</span>`;
}

function pendingRecords() {
  return state.records.filter((record) => record.verification !== "Approved" && record.verification !== "Rejected");
}

function workplanRecords() {
  return state.records.filter((record) => ["Task", "Milestone"].includes(record.type));
}

function projectAssignments() {
  return state.workplanSnapshot.assignments.filter((item) => item.community.includes("SIB"));
}

function richardAssignments() {
  return projectAssignments().filter((item) => item.collaborators.split(",").map((name) => name.trim()).includes("Richard"));
}

function assignmentMatchesSearch(item) {
  return !ui.search || Object.values(item).join(" ").toLocaleLowerCase().includes(ui.search.toLocaleLowerCase());
}

function contractorRecords() {
  return state.records.filter((record) => record.type === "Contractor");
}

function updateNavCounts() {
  document.querySelector("#taskAssignmentCount").textContent = taskHub.tasks.filter((task) => task.assignee === "Richard" && task.status !== "Completed").length;
  document.querySelector("#workplanCount").textContent = projectAssignments().length;
  document.querySelector("#equipmentCount").textContent = state.equipmentData.categories;
  document.querySelector("#innovationCount").textContent = state.innovationData.programs.length;
  document.querySelector("#targetCount").textContent = state.marketData.loiTargets.length;
  document.querySelector("#fundingOpportunityCount").textContent = state.fundingOpportunities.filter((item) => item.availability !== "Submitted application").length;
  document.querySelector("#calendarCount").textContent = state.calendarSnapshot.events.length;
  document.querySelector("#followUpCount").textContent = state.followUps.filter((item) => ["Now", "This week"].includes(item.priority)).length;
}

function searchableText(record) {
  return [record.title, record.type, record.status, record.sourceStatus, record.scope, record.contact, record.contactDetail, record.owner, record.sourceName, record.notes, record.nextAction, record.verification]
    .join(" ")
    .toLocaleLowerCase();
}

function matchesSearch(record) {
  return !ui.search || searchableText(record).includes(ui.search.toLocaleLowerCase());
}

function render() {
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.view === ui.view));
  const views = {
    overview: { title: "Expansion overview", eyebrow: "Project controls", render: renderOverview },
    tasks: { title: "Task assignments", eyebrow: "Cat → Richard shared queue", render: renderTaskAssignments },
    workplan: { title: "Google Sheet workplan", eyebrow: "Connected delivery plan", render: renderWorkplan },
    equipment: { title: "Equipment & prices", eyebrow: "64-machine procurement plan", render: renderEquipment },
    production: { title: "Production breakdown", eyebrow: "One-million-meal flow", render: renderProduction },
    innovation: { title: "Research & innovation", eyebrow: "Mission-led research portfolio", render: renderInnovation },
    market: { title: "Market & LOI targets", eyebrow: "Supply intelligence and demand pipeline", render: renderMarket },
    funding: { title: "Funding & budget", eyebrow: "Financial readiness", render: renderFunding },
    opportunities: { title: "Live funding", eyebrow: "Available project-fit programs", render: renderFundingOpportunities },
    calendar: { title: "Meeting schedule", eyebrow: "Calendar snapshot", render: renderCalendar },
    stakeholders: { title: "People & outreach", eyebrow: "Relationship evidence", render: renderStakeholders },
    followups: { title: "Email follow-ups", eyebrow: "Mailbox action queue", render: renderFollowUps },
  };

  const view = views[ui.view] || views.overview;
  viewTitle.textContent = view.title;
  viewEyebrow.textContent = view.eyebrow;
  mainContent.innerHTML = view.render();
  mainContent.scrollTop = 0;
  updateNavCounts();
}

function truthBanner() {
  return `
    <section class="sync-banner" aria-label="Connected data status">
      <div>
        <strong>Connected operational snapshot</strong>
        <p>Google Sheet, Shelly’s calendar and project mailbox data refreshed August 15, 2026. Produce-market and LOI/MOU workbooks were imported the same day with sent-mail outreach evidence.</p>
      </div>
      <span class="sync-pill"><i></i> Synced</span>
    </section>`;
}

function renderOverview() {
  const tasks = projectAssignments();
  const counts = tasks.reduce((result, task) => {
    result[task.status] = (result[task.status] || 0) + 1;
    return result;
  }, {});
  const distribution = ["In progress", "Recurring", "Blocker", "Pending"];
  const liveFunding = state.fundingOpportunities.filter((item) => item.availability !== "Submitted application");
  const myTasks = richardAssignments();
  const totalTasks = tasks.length || 1;

  return `
    <div class="content-stack">
      ${truthBanner()}
      <section class="hero-grid">
        <article class="project-hero">
          <div class="hero-copy">
            <p class="eyebrow">Shelly’s Bistro · RTE expansion</p>
            <h3>Grow the food system. Keep every next move visible.</h3>
            <p>A connected view of the 41 Paquin Road expansion—workplan, available funding, meetings and follow-ups brought into one practical workspace.</p>
          </div>
          <img class="hero-logo" src="assets/shellys-bistro-logo.png" alt="" aria-hidden="true" />
          <div class="hero-meta">
            <span>CA$25.0M proposed cost</span>
            <span>40,000+ sq. ft. concept</span>
            <span>Vince + Cat leadership</span>
          </div>
        </article>
        <article class="pulse-panel">
          <div>
            <div class="panel-heading">
              <div>
                <h3>Workplan pulse</h3>
                <p>Current Shelly’s rows from the connected Google Sheet.</p>
              </div>
              <div class="pulse-number">${tasks.length}<small> tasks</small></div>
            </div>
            <div class="distribution">
              ${distribution.map((status, index) => {
                const count = counts[status] || 0;
                const className = ["bar-fill--green", "bar-fill--blue", "bar-fill--amber", "bar-fill--gray", ""][index];
                return `<div class="distribution-row"><span>${status}</span><progress class="status-progress ${className}" value="${count}" max="${totalTasks}">${count}</progress><strong>${count}</strong></div>`;
              }).join("")}
            </div>
          </div>
        </article>
      </section>

      <section class="metrics-grid" aria-label="Project metrics">
        ${metricCard("Project cost", "$25.0M", "Fully allocated across equity, debt and grants/contributions.", "Plan")}
        ${metricCard("Sheet assignments", String(tasks.length), "Shelly’s Bistro rows currently reflected from Google Sheets.", "Connected")}
        ${metricCard("Live funding fits", String(liveFunding.length), "Programs and financing paths available for action now.", "Live")}
        ${metricCard("Email actions", String(state.followUps.filter((item) => ["Now", "This week"].includes(item.priority)).length), "Priority follow-ups found in the connected project mailbox.", "Follow up", true)}
      </section>

      <section class="grid-two">
        <article class="panel">
          <div class="panel-heading">
            <div>
              <h3>Richard’s current assignments</h3>
              <p>Three Shelly’s Bistro rows assigned to Richard in the General sheet.</p>
            </div>
            <button class="plain-link" type="button" data-navigate="workplan">Open workplan →</button>
          </div>
          <div class="assignment-list">
            ${myTasks.map((item) => `
              <div class="assignment-row">
                <div><strong>${escapeHtml(item.assignment)}</strong><span>${escapeHtml(item.notes || "No note supplied")}</span></div>
                <div>${statusBadge(item.status)}<small>${escapeHtml(item.newDue || item.originalDue || "No due date")}</small></div>
              </div>`).join("")}
          </div>
        </article>

        <article class="panel">
          <div class="panel-heading">
            <div>
              <h3>Funding moves ready now</h3>
              <p>Best-fit paths with a concrete next action.</p>
            </div>
            <button class="plain-link" type="button" data-navigate="opportunities">View all →</button>
          </div>
          <div class="funding-next-list">
            ${liveFunding.slice(0, 3).map((item) => `
              <div class="funding-next-row">
                <span>${escapeHtml(item.fitLevel)}</span>
                <div><strong>${escapeHtml(item.name)}</strong><p>${escapeHtml(item.nextAction)}</p></div>
              </div>`).join("")}
          </div>
        </article>
      </section>

      <section class="grid-equal">
        <article class="panel">
          <div class="panel-heading">
            <div>
              <h3>Financing posture</h3>
              <p>Proposed stack; approval and security states preserved.</p>
            </div>
            <button class="plain-link" type="button" data-navigate="funding">Open budget →</button>
          </div>
          ${fundingBar()}
        </article>
        <article class="panel">
          <div class="panel-heading">
            <div>
              <h3>Next operational moves</h3>
              <p>Highest-value actions across the connected workspace.</p>
            </div>
          </div>
          <div class="milestone-list">
            ${milestoneRow("01", "Complete the FCC financial package", "Send accountant-prepared statements and revenue-support documents.")}
            ${milestoneRow("02", "Answer the BUMP information request", "Define trainees, curriculum, outcomes and the external provider.")}
            ${milestoneRow("03", "Publish meeting outcomes", "Record decisions and owners from the latest government and school-division meetings.")}
          </div>
        </article>
      </section>
    </div>`;
}

function metricCard(label, value, detail, tag, accent = false) {
  return `
    <article class="metric-card${accent ? " metric-card--accent" : ""}">
      <div class="metric-card__top"><span>${escapeHtml(label)}</span><span>${escapeHtml(tag)}</span></div>
      <div class="metric-card__value">${escapeHtml(value)}</div>
      <div class="metric-card__detail">${escapeHtml(detail)}</div>
    </article>`;
}

function evidenceRow(record) {
  return `
    <div class="evidence-row">
      <div>
        <button type="button" data-record-id="${escapeHtml(record.id)}">${escapeHtml(record.title)}</button>
        <div class="row-meta"><span>${escapeHtml(record.sourceName)}</span><span>${escapeHtml(record.owner)}</span></div>
      </div>
      <div>${statusBadge(record.status)}</div>
    </div>`;
}

function blockerRow(record, index, conflict = false) {
  return `
    <div class="blocker-row">
      <span class="severity-mark${index > 0 ? " severity-mark--medium" : ""}"></span>
      <div>
        <button class="table-link" type="button" ${conflict ? 'data-navigate="funding"' : `data-record-id="${escapeHtml(record.id)}"`}>${escapeHtml(record.title)}</button>
        <div class="row-meta"><span>${escapeHtml(record.nextAction || "Review required")}</span></div>
      </div>
      ${statusBadge(record.status)}
    </div>`;
}

function milestoneRow(index, title, detail) {
  return `
    <div class="milestone-row">
      <div>
        <p class="row-title">${escapeHtml(index)} · ${escapeHtml(title)}</p>
        <div class="row-meta"><span>${escapeHtml(detail)}</span></div>
      </div>
    </div>`;
}

function fundingBar() {
  return `
    <div class="funding-stack">
      <div class="funding-bar" role="img" aria-label="Corrected financing composition: 4 percent owner equity, 35 percent proposed debt and 61 percent proposed grant or contribution funding">
        ${state.funding.map((item) => `<div class="funding-segment funding-segment--${escapeHtml(item.id)}"><div><strong>${item.percent}% · ${escapeHtml(item.label)}</strong><span>${formatMoney(item.amount, true)}</span></div></div>`).join("")}
      </div>
      <div class="callout"><strong>Corrected financing allocation</strong>Owner equity totals CA$1.0M, proposed debt is CA$8.75M and the proposed grant/contribution layer is CA$15.25M. The stack reconciles to CA$25.0M; only the allocation is confirmed, not availability or approval.</div>
    </div>`;
}

function localIsoDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatTaskDate(value) {
  if (!value) return "No due date";
  return new Intl.DateTimeFormat("en-CA", { month: "short", day: "numeric", year: "numeric" }).format(new Date(`${value}T12:00:00`));
}

function sharedTaskMatchesSearch(task) {
  return !ui.search || Object.values(task).join(" ").toLocaleLowerCase().includes(ui.search.toLocaleLowerCase());
}

function taskNotificationSummary() {
  if (!("Notification" in window) || !("serviceWorker" in navigator) || !("PushManager" in window)) {
    return { state: "Unavailable", detail: "This browser does not support web push." };
  }
  if (Notification.permission === "denied") {
    return { state: "Blocked", detail: "Allow notifications in the browser’s site settings, then try again." };
  }
  if (taskHub.pushSubscribed) {
    return { state: "Enabled", detail: `${taskHub.currentUser} receives new-task alerts on this device.` };
  }
  return { state: "Not enabled", detail: `Enable alerts while this device is set to ${taskHub.currentUser}.` };
}

function renderSharedTaskCard(task) {
  const overdue = task.dueDate && task.dueDate < localIsoDate() && task.status !== "Completed";
  const isTarget = task.id === ui.taskTargetId;
  const nextAction = task.status === "Assigned"
    ? { label: "Start task", status: "In progress" }
    : task.status === "In progress"
      ? { label: "Mark complete", status: "Completed" }
      : { label: "Reopen", status: "Assigned" };

  return `
    <article class="shared-task-card${isTarget ? " is-target" : ""}${task.status === "Completed" ? " is-complete" : ""}">
      <div class="shared-task-card__top">
        <span class="task-priority" data-priority="${escapeHtml(task.priority)}">${escapeHtml(task.priority)} priority</span>
        ${statusBadge(task.status)}
      </div>
      <div>
        <h4>${escapeHtml(task.title)}</h4>
        <p>${escapeHtml(task.details || "No additional details supplied.")}</p>
      </div>
      <div class="shared-task-card__meta">
        <span><strong>Assigned to</strong>${escapeHtml(task.assignee)}</span>
        <span><strong>Assigned by</strong>${escapeHtml(task.createdBy)}</span>
        <span class="${overdue ? "is-overdue" : ""}"><strong>Due</strong>${escapeHtml(formatTaskDate(task.dueDate))}${overdue ? " · overdue" : ""}</span>
      </div>
      <div class="shared-task-card__actions">
        <small>Updated ${escapeHtml(new Intl.DateTimeFormat("en-CA", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }).format(new Date(task.updatedAt)))}</small>
        <button class="button button--ghost" type="button" data-task-id="${escapeHtml(task.id)}" data-task-status="${escapeHtml(nextAction.status)}">${escapeHtml(nextAction.label)}</button>
      </div>
    </article>`;
}

function renderTaskAssignments() {
  const tasks = taskHub.tasks.filter(sharedTaskMatchesSearch);
  const richardTasks = taskHub.tasks.filter((task) => task.assignee === "Richard");
  const openRichardTasks = richardTasks.filter((task) => task.status !== "Completed");
  const dueLimit = new Date();
  dueLimit.setDate(dueLimit.getDate() + 7);
  const dueLimitIso = localIsoDate(dueLimit);
  const dueSoon = openRichardTasks.filter((task) => task.dueDate && task.dueDate <= dueLimitIso).length;
  const highPriority = openRichardTasks.filter((task) => task.priority === "High").length;
  const completed = richardTasks.filter((task) => task.status === "Completed").length;
  const notification = taskNotificationSummary();

  return `
    <div class="content-stack task-centre-view">
      <section class="task-centre-hero">
        <div>
          <p class="eyebrow">Cat → Richard</p>
          <h3>Assign the next move. Keep Richard’s list current.</h3>
          <p>New tasks are saved to the shared task service, appear here in real time, and trigger a browser push after Richard enables notifications on his device.</p>
        </div>
        <button class="button button--primary" type="button" data-open-task-dialog>Assign a task</button>
      </section>

      <section class="metrics-grid" aria-label="Shared task metrics">
        ${metricCard("Richard open", String(openRichardTasks.length), "Assigned or in-progress tasks in the shared queue.", "Live")}
        ${metricCard("High priority", String(highPriority), "Open Richard tasks marked high priority.", "Attention")}
        ${metricCard("Due within 7 days", String(dueSoon), "Includes overdue tasks that remain open.", "Due")}
        ${metricCard("Completed", String(completed), "Richard assignments marked complete.", "Done", true)}
      </section>

      <section class="task-setup-grid">
        <article class="panel task-device-panel">
          <div class="panel-heading"><div><h3>Who is using this device?</h3><p>This controls whose alerts are registered here.</p></div></div>
          <div class="task-user-switch" role="group" aria-label="Current task user">
            ${["Cat", "Richard"].map((person) => `<button class="task-user-button${taskHub.currentUser === person ? " is-active" : ""}" type="button" data-task-user="${person}">${person}</button>`).join("")}
          </div>
          <p class="task-device-note">Current device: <strong>${escapeHtml(taskHub.currentUser)}</strong>. Cat can assign through <strong>Add record</strong>; Richard can update task status here.</p>
        </article>
        <article class="panel task-notification-panel">
          <div class="notification-state"><span class="notification-state__icon" aria-hidden="true">${taskHub.pushSubscribed ? "✓" : "!"}</span><div><strong>Push ${escapeHtml(notification.state.toLowerCase())}</strong><p>${escapeHtml(notification.detail)}</p></div></div>
          ${taskHub.currentUser === "Richard" && !taskHub.pushSubscribed ? `<button class="button button--primary" type="button" data-enable-push ${taskHub.pushBusy ? "disabled" : ""}>${taskHub.pushBusy ? "Enabling…" : "Enable Richard notifications"}</button>` : ""}
          ${taskHub.currentUser === "Cat" ? '<span class="task-notification-hint">Switch this device to Richard before enabling his alerts.</span>' : ""}
        </article>
      </section>

      <div class="section-title">
        <div><h3>Shared task list</h3><p>${tasks.length} shown · ${taskHub.tasks.length} total. Status changes sync to every connected app.</p></div>
        <button class="button button--primary" type="button" data-open-task-dialog>New task</button>
      </div>

      ${taskHub.loading ? '<section class="panel">Loading shared tasks…</section>' : ""}
      ${taskHub.error ? `<section class="callout callout--danger"><strong>Shared task service unavailable</strong>${escapeHtml(taskHub.error)}</section>` : ""}
      <section class="shared-task-grid" aria-label="Shared task list">
        ${tasks.map(renderSharedTaskCard).join("") || (!taskHub.loading ? emptyState("No shared tasks yet", "Use Add record or Assign a task to send Richard the first assignment.") : "")}
      </section>
    </div>`;
}

function renderPublishedTaskChart() {
  const states = ["In progress", "Recurring", "Blocker", "Pending"];
  const tasks = projectAssignments();
  const counts = Object.fromEntries(states.map((item) => [item, tasks.filter((task) => task.status === item).length]));
  const max = Math.max(1, ...Object.values(counts));
  return `
    <section class="panel published-chart" aria-label="Published task status chart">
      <div class="panel-heading"><div><h3>Published Google Sheet task chart</h3><p>${tasks.length} Shelly’s Bistro assignments from the General tab.</p></div><span class="status-badge" data-state="Verified current fact">Published</span></div>
      <div class="task-chart">
        ${states.map((item) => `
          <div class="task-chart__row">
            <span>${escapeHtml(item)}</span>
            <progress class="status-progress" max="${max}" value="${counts[item]}" aria-label="${escapeHtml(item)}: ${counts[item]}"></progress>
            <strong>${counts[item]}</strong>
          </div>`).join("")}
      </div>
      <p class="chart-note">Status is shown exactly as listed in the imported sheet; no synthetic completion percentage is added.</p>
    </section>`;
}

function renderSixWeekPlan() {
  return `
    <section class="panel plan-panel">
      <div class="panel-heading">
        <div><p class="eyebrow">Richard Workplan tab</p><h3>Published six-week workplan</h3><p>Focus, objective, actions and deliverable from the connected Google Sheet.</p></div>
        <a class="button button--ghost" href="${escapeHtml(state.workplanSnapshot.spreadsheetUrl.replace("gid=613747079", "gid=1493963392"))}" target="_blank" rel="noopener noreferrer">Open live sheet</a>
      </div>
      <div class="week-grid">
        ${state.workplanSnapshot.sixWeekPlan.map((item) => `
          <article class="week-card">
            <div class="week-card__top"><span>${escapeHtml(item.week)}</span><strong>${escapeHtml(item.focus)}</strong></div>
            <p class="week-objective">${escapeHtml(item.objective)}</p>
            <p>${escapeHtml(item.actions)}</p>
            <div class="week-deliverable"><span>Deliverable</span>${escapeHtml(item.deliverable)}</div>
          </article>`).join("")}
      </div>
    </section>`;
}

function renderWorkplan() {
  const filters = [
    { label: "All Shelly’s", value: "All" },
    { label: "Richard", value: "Richard" },
    { label: "In progress", value: "In progress" },
    { label: "Recurring", value: "Recurring" },
    { label: "Blocker", value: "Blocker" },
    { label: "Pending", value: "Pending" },
  ];
  const assignments = projectAssignments()
    .filter((item) => ui.workplanFilter === "All" || (ui.workplanFilter === "Richard" ? item.collaborators.split(",").map((name) => name.trim()).includes("Richard") : item.status === ui.workplanFilter))
    .filter(assignmentMatchesSearch);
  const blockers = projectAssignments().filter((item) => item.status === "Blocker").length;

  return `
    <div class="content-stack">
      ${truthBanner()}
      <section class="metrics-grid">
        ${metricCard("Shelly’s assignments", String(projectAssignments().length), "Current SIB rows from the General sheet.", "Google Sheets")}
        ${metricCard("Richard assigned", String(richardAssignments().length), "Rows where Richard is listed as a collaborator.", "My work")}
        ${metricCard("Blockers", String(blockers), "Items explicitly marked Blocker in the source sheet.", "Attention")}
        ${metricCard("Published plan", "6 weeks", "Richard’s complete Focus → Deliverable plan.", "Current", true)}
      </section>
      ${renderSixWeekPlan()}
      <div class="section-title">
        <div><h3>Current assignment register</h3><p>Filtered to Shelly’s Bistro rows. Dates and working notes are preserved from the General sheet.</p></div>
        <a class="button button--primary" href="${escapeHtml(state.workplanSnapshot.spreadsheetUrl)}" target="_blank" rel="noopener noreferrer">Open Google Sheet</a>
      </div>
      <div class="toolbar">
        <div class="filter-group">
          ${filters.map((filter) => `<button class="filter-button${ui.workplanFilter === filter.value ? " is-active" : ""}" type="button" data-filter="${escapeHtml(filter.value)}">${escapeHtml(filter.label)}</button>`).join("")}
        </div>
        <span class="record-count">${assignments.length} shown · ${projectAssignments().length} total</span>
      </div>
      ${renderPublishedTaskChart()}
      <section class="panel panel--flush">
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr><th>Assignment</th><th>Status</th><th>Collaborators</th><th>Due</th><th>Working note</th></tr></thead>
            <tbody>
              ${assignments.map((item) => `
                <tr>
                  <td><strong>${escapeHtml(item.assignment)}</strong><span class="cell-subtext">${escapeHtml(item.community)}</span></td>
                  <td>${statusBadge(item.status)}</td>
                  <td>${escapeHtml(item.collaborators)}</td>
                  <td><strong>${escapeHtml(item.newDue || item.originalDue || "Not set")}</strong>${item.newDue && item.originalDue ? `<span class="cell-subtext">Original: ${escapeHtml(item.originalDue)}</span>` : ""}</td>
                  <td>${escapeHtml(item.notes || "—")}</td>
                </tr>`).join("") || `<tr><td colspan="5">${emptyState("No matching assignments", "Change the filter or clear the search.")}</td></tr>`}
            </tbody>
          </table>
        </div>
      </section>
    </div>`;
}

function renderEquipment() {
  const equipment = state.equipmentData.items.filter((item) => !ui.search || Object.values(item).join(" ").toLocaleLowerCase().includes(ui.search.toLocaleLowerCase()));
  const waveCounts = ["Wave 1", "Wave 2", "Wave 3"].map((wave) => ({ wave, count: state.equipmentData.items.filter((item) => item.wave === wave).reduce((sum, item) => sum + item.qty, 0) }));
  return `
    <div class="content-stack">
      <section class="equipment-hero">
        <div>
          <p class="eyebrow">Equipment Report · Revision 2</p>
          <h3>Multi-line fleet sized for one million meals per day.</h3>
          <p>Prices below are planning figures from the attached report. USD FOB and CAD landed/project values stay in their source currencies; no exchange conversion has been invented.</p>
        </div>
        <a class="button button--primary" href="${escapeHtml(state.equipmentData.sourcePath)}" download>Download source report</a>
      </section>
      <section class="metrics-grid">
        ${metricCard("Equipment categories", String(state.equipmentData.categories), "Processing, cooking, filling, sealing and food-safety equipment.", "Register")}
        ${metricCard("Machine fleet", String(state.equipmentData.machineCount), "Multi-unit N+1 production design.", "Units")}
        ${metricCard("Equipment FOB", "~CA$930K", "Source also reports approximately US$689K.", "Planning")}
        ${metricCard("Equipment scope total", "$1.6–1.8M", "CAD including logistics, compliance, installation and contingency.", "CAD", true)}
      </section>
      <section class="panel panel--flush">
        <div class="panel-heading"><div><h3>Master equipment register</h3><p>${equipment.length} of ${state.equipmentData.categories} categories shown · all prices from attached July 2026 source.</p></div></div>
        <div class="table-wrap">
          <table class="data-table equipment-table">
            <thead><tr><th>Equipment</th><th>Supplier</th><th>Capacity / required</th><th>Qty</th><th>Unit FOB</th><th>Extended FOB</th><th>Wave</th></tr></thead>
            <tbody>${equipment.map((item) => `
              <tr>
                <td><strong>${escapeHtml(item.line)}</strong></td>
                <td>${escapeHtml(item.supplier)}</td>
                <td><strong>${escapeHtml(item.capacity)}</strong><span class="cell-subtext">Required: ${escapeHtml(item.required)}</span></td>
                <td class="equipment-qty">${item.qty}</td>
                <td class="money">${escapeHtml(item.unitFob)}</td>
                <td class="money">${escapeHtml(item.extendedFob)}</td>
                <td><span class="wave-chip">${escapeHtml(item.wave)}</span></td>
              </tr>`).join("") || `<tr><td colspan="7">${emptyState("No matching equipment", "Clear the search to show the complete register.")}</td></tr>`}</tbody>
          </table>
        </div>
      </section>
      <section class="grid-two">
        <article class="panel">
          <div class="panel-heading"><div><h3>Supplemental chilled-flow equipment</h3><p>Canadian landed-cost figures from the production logistics attachment.</p></div></div>
          <div class="supplemental-list">
            ${state.equipmentData.supplemental.map((item) => `
              <div class="supplemental-row"><div><strong>${escapeHtml(item.line)}</strong><p>${escapeHtml(item.specification)}</p></div><div><span>${item.qty} units</span><strong>${escapeHtml(item.unitCost)}</strong><small>${escapeHtml(item.total)} total</small></div></div>`).join("")}
          </div>
          <div class="callout callout--danger u-mt-12"><strong>Price reconciliation required</strong>The logistics report later states ~CA$6,500 for an additional blast chiller, versus ~CA$17,000 landed in its equipment specification. Use a current supplier RFQ before budgeting.</div>
        </article>
        <article class="panel">
          <div class="panel-heading"><div><h3>Procurement waves</h3><p>Machine quantities by ordering stage.</p></div></div>
          <div class="wave-summary">
            ${waveCounts.map((item) => `<div><span>${escapeHtml(item.wave)}</span><strong>${item.count}</strong><small>machines</small></div>`).join("")}
          </div>
          <div class="milestone-list u-mt-12">
            ${milestoneRow("01", "Bottleneck + long-lead", "MAP sealers, tunnel ovens, weighers and filling systems.")}
            ${milestoneRow("02", "Processing lines", "Cutting, cooking, cup filling and drying systems.")}
            ${milestoneRow("03", "Short-lead + balance", "Wash/peel, kettles and 14 CCP metal detectors.")}
          </div>
        </article>
      </section>
      <section class="panel panel--flush">
        <div class="panel-heading"><div><h3>Equipment-scope budget</h3><p>Planning estimates; building utilities, cold-chain warehousing and 450 t/day outbound logistics are outside this scope.</p></div></div>
        <div class="table-wrap"><table class="data-table"><thead><tr><th>Budget item</th><th>Estimate</th><th>Basis</th></tr></thead><tbody>${state.equipmentData.budget.map((item) => `<tr><td><strong>${escapeHtml(item.item)}</strong></td><td class="money">${escapeHtml(item.estimate)}</td><td>${escapeHtml(item.note)}</td></tr>`).join("")}</tbody></table></div>
      </section>
    </div>`;
}

function renderFlowStream(stream) {
  return `
    <article class="flow-stream flow-stream--${escapeHtml(stream.id)}">
      <div class="flow-stream__heading"><div><p class="eyebrow">Stream ${stream.id === "hot" ? "A" : "B"}</p><h3>${escapeHtml(stream.name)}</h3></div><strong>${escapeHtml(stream.share)}</strong></div>
      <div class="flow-steps">
        ${stream.steps.map((item, index) => `
          <div class="flow-step">
            <span>${escapeHtml(item.step)}</span>
            <div><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.detail)}</p></div>
            ${index < stream.steps.length - 1 ? '<i aria-hidden="true">→</i>' : ""}
          </div>`).join("")}
      </div>
    </article>`;
}

function renderProduction() {
  const data = state.productionData;
  return `
    <div class="content-stack">
      <section class="production-hero">
        <div><p class="eyebrow">Production Logistics & Capacity Analysis</p><h3>Two parallel flows protect the one-million-meal target.</h3><p>The attached analysis splits hot product through a defined chilling constraint while cold product moves directly from prep and assembly into packaging.</p></div>
        <div class="split-donut"><div><strong>${data.split.hot}%</strong><span>hot</span><strong>${data.split.cold}%</strong><span>cold</span></div></div>
      </section>
      <section class="metrics-grid">
        ${metricCard("Daily target", "1.0M", "Meals per day at a 450 g average meal weight.", "Meals")}
        ${metricCard("Daily product", "450 t", "450,000 kg of finished product per day.", "Mass")}
        ${metricCard("Instantaneous rate", "26,500", "kg/hr across 17 effective production hours.", "kg/hr")}
        ${metricCard("Packaging rate", "~980", "Sustained packs per minute across parallel lanes.", "packs/min", true)}
      </section>
      <section class="flow-grid">
        ${data.streams.map(renderFlowStream).join("")}
      </section>
      <section class="grid-two">
        <article class="panel chilling-panel">
          <div class="panel-heading"><div><p class="eyebrow">Primary constraint</p><h3>Blast chilling bottleneck</h3><p>Hot product capacity is limited by the 120-minute cooling cycle.</p></div><span class="status-badge" data-state="Blocker">Capacity gate</span></div>
          <div class="chilling-grid">
            <div><span>Fleet</span><strong>${escapeHtml(data.chilling.fleet)}</strong></div>
            <div><span>Cycle load</span><strong>${escapeHtml(data.chilling.load)}</strong></div>
            <div><span>Cycle</span><strong>${escapeHtml(data.chilling.cycle)}</strong></div>
            <div><span>Throughput</span><strong>${escapeHtml(data.chilling.throughput)}</strong></div>
          </div>
          <div class="capacity-band"><span>Hot-food ceiling</span><strong>${escapeHtml(data.hotCapacity)}</strong></div>
        </article>
        <article class="panel">
          <div class="panel-heading"><div><p class="eyebrow">Facility impact</p><h3>Dedicated logistics footprint</h3><p>Space required for chilling, circulation, bin storage and wash.</p></div></div>
          <div class="footprint-list">${data.footprint.map((item) => `<div><span>${escapeHtml(item.area)}</span><strong>${escapeHtml(item.metric)}</strong><small>${escapeHtml(item.imperial)}</small></div>`).join("")}</div>
        </article>
      </section>
      <section class="scaling-banner">
        <div><p class="eyebrow">Scaling rule</p><h3>${escapeHtml(data.scaling)}</h3><p>${escapeHtml(data.scalingCost)}</p></div>
        <div><span>Recommended operating mix</span><strong>40 / 60</strong><small>hot / cold</small></div>
      </section>
      <div class="source-actions"><span>Source: Production Logistics & Capacity Analysis · August 11, 2026</span><a class="button button--ghost" href="${escapeHtml(data.sourcePath)}" download>Download source breakdown</a></div>
    </div>`;
}

function renderInnovation() {
  const data = state.innovationData;
  const query = ui.search.toLowerCase();
  const matches = (item) => !query || Object.values(item).flat().join(" ").toLowerCase().includes(query);
  const programs = data.programs.filter(matches);
  const streams = data.wasteStreams.filter(matches);
  const experiments = data.preservationExperiments.filter(matches);
  const promptlets = data.promptlets.filter(matches);
  const p0Count = data.promptlets.filter((item) => item.priority === "P0").length;
  return `
    <div class="content-stack innovation-view">
      ${truthBanner()}
      <section class="metrics-grid">
        ${metricCard("Research programs", String(data.programs.length), "Circularity, learner support, inclusive careers and food science.", "Portfolio")}
        ${metricCard("Research Pipeline", String(data.promptlets.length), `${p0Count} are foundation-stage P0 investigations.`, "Backlog")}
        ${metricCard("Measured waste baseline", "0", "No factory waste volumes have been supplied; measurement comes first.", "Truth", true)}
        ${metricCard("Evidence gates", "4", "Technical, regulatory, ethics and community-governance approval.", "Controls")}
      </section>
      <section class="application-banner innovation-hero">
        <div><span>Research portfolio thesis</span><h3>${escapeHtml(data.thesis)}</h3><p>Four linked programs turn operational questions into measurable research, paid learning and stage-gated innovation.</p></div>
        <div><span>Truth boundary</span><p>${escapeHtml(data.disclaimer)}</p><p><strong>Research sequence:</strong> baseline → co-design → experiment → independent validation → approval → pilot → scale.</p></div>
      </section>
      <div class="section-title"><div><h3>Four mission-led research programs</h3><p>Each program has a thesis, measurable outcomes, unresolved questions and a next evidence gate.</p></div><span class="source-chip">Refreshed ${escapeHtml(data.refreshedAt)}</span></div>
      <section class="research-program-grid" aria-label="Innovation research programs">
        ${programs.map((program) => `
          <article class="research-card">
            <div class="research-card__top"><span class="research-index">${escapeHtml(program.code)}</span><div><p class="eyebrow">${escapeHtml(program.theme)}</p><h4>${escapeHtml(program.title)}</h4></div>${statusBadge(program.stage)}</div>
            <p class="research-thesis">${escapeHtml(program.thesis)}</p>
            <div class="research-card__split">
              <div><h5>Research goals</h5><ul>${program.goals.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>
              <div><h5>Questions to answer</h5><ul>${program.questions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>
            </div>
            <div class="research-measures"><span>Outcome measures</span>${program.measures.map((item) => `<strong>${escapeHtml(item)}</strong>`).join("")}</div>
            <div class="callout"><strong>Next evidence gate</strong>${escapeHtml(program.nextGate)}</div>
            <div class="research-card__footer"><span>${escapeHtml(program.evidenceState)}</span><div>${program.sources.map((source) => `<a class="plain-link" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)}</a>`).join("")}</div></div>
          </article>`).join("") || emptyState("No matching research programs", "Clear the search to restore the four-program portfolio.")}
      </section>
      <section class="panel panel--flush">
        <div class="panel-heading"><div><h3>Factory food-waste stream register</h3><p>Prevention and safe human-food recovery outrank energy recovery. Biogas applies only to unavoidable, segregated and technically suitable residuals.</p></div>${statusBadge("Baseline required")}</div>
        <div class="table-wrap">
          <table class="data-table research-table">
            <caption class="sr-only">Proposed factory food-waste streams and the measurements required before selecting a recovery route</caption>
            <thead><tr><th>Waste stream</th><th>Source point</th><th>Baseline</th><th>Preferred hierarchy route</th><th>Biogas fit</th><th>Data required</th><th>Next research action</th></tr></thead>
            <tbody>${streams.map((item) => `<tr><td><strong>${escapeHtml(item.stream)}</strong></td><td>${escapeHtml(item.source)}</td><td>${statusBadge(item.baseline)}</td><td>${escapeHtml(item.preferredRoute)}</td><td>${escapeHtml(item.biogasFit)}</td><td>${escapeHtml(item.dataNeeded)}</td><td>${escapeHtml(item.nextAction)}</td></tr>`).join("") || `<tr><td colspan="7">${emptyState("No matching waste streams", "Clear the search to restore the proposed register.")}</td></tr>`}</tbody>
          </table>
        </div>
      </section>
      <section class="panel">
        <div class="panel-heading"><div><h3>Inclusive employment pathway</h3><p>Voluntary and paid by design; sensitive referral data remains with the originating organization unless the participant explicitly consents.</p></div>${typeBadge("Service blueprint")}</div>
        <div class="pathway-map">${data.pathway.map((item) => `<article class="pathway-step"><span>${escapeHtml(item.step)}</span><h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.detail)}</p></article>`).join("")}</div>
        <div class="callout u-mt-12"><strong>Ethics gate</strong>Participation must never be a condition of a family’s school, CFS, EIA, corrections or community service. Use informed consent, minimal data, participant-defined goals and a clear withdrawal route.</div>
      </section>
      <section class="panel panel--flush">
        <div class="panel-heading"><div><h3>Nutrition-forward preservation experiment matrix</h3><p>Candidate ingredients are not approved formulations or shelf-life claims. Product-specific Canadian permissions and validation control every decision.</p></div>${statusBadge("Research only")}</div>
        <div class="table-wrap">
          <table class="data-table research-table preservation-table">
            <caption class="sr-only">Natural and nutrition-forward preservation candidates requiring regulatory and laboratory validation</caption>
            <thead><tr><th>Candidate family</th><th>Intended value</th><th>Nutrition angle</th><th>Required tests</th><th>Approval gate</th><th>State</th></tr></thead>
            <tbody>${experiments.map((item) => `<tr><td><strong>${escapeHtml(item.candidate)}</strong></td><td>${escapeHtml(item.intendedValue)}</td><td>${escapeHtml(item.nutritionAngle)}</td><td>${escapeHtml(item.requiredTests)}</td><td>${escapeHtml(item.gate)}</td><td>${statusBadge(item.state)}</td></tr>`).join("") || `<tr><td colspan="6">${emptyState("No matching experiments", "Clear the search to restore the experiment matrix.")}</td></tr>`}</tbody>
          </table>
        </div>
      </section>
      <div class="section-title"><div><h3>Research Pipeline</h3><p>Copy-ready research assignments with a defined discipline, priority and concrete deliverable.</p></div><span class="source-chip">${promptlets.length} shown</span></div>
      <section class="promptlet-grid" aria-label="Research Pipeline assignments">
        ${promptlets.map((item) => `<article class="promptlet-card"><div class="promptlet-card__top"><span>${escapeHtml(item.id)}</span>${statusBadge(item.priority)}</div><p class="eyebrow">${escapeHtml(item.discipline)}</p><h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.prompt)}</p><div><strong>Deliverable</strong><span>${escapeHtml(item.deliverable)}</span></div></article>`).join("") || emptyState("No matching research assignments", "Clear the search to restore the Research Pipeline.")}
      </section>
      <div class="callout callout--danger"><strong>Do not claim implementation</strong>This tab is an engineered research portfolio. It does not establish a zero-waste operation, biogas output, scholarship fund, referral partnership, employment placement, safe preservative system or validated shelf life.</div>
    </div>`;
}

function renderMarket() {
  const data = state.marketData;
  const query = ui.search.toLowerCase();
  const produce = data.producePriorities.filter((item) => !query || Object.values(item).join(" ").toLowerCase().includes(query));
  const targets = data.loiTargets.filter((item) => !query || Object.values(item).join(" ").toLowerCase().includes(query));
  const outreachByTarget = {
    "Winnipeg School Division": "out-school-wsd",
    "Frontier School Division": "out-school-frontier",
    "River East Transcona School Division": "out-school-retsd",
    "Pembina Trails School Division": "out-school-pembina",
    "Seven Oaks School Division": "out-school-seven-oaks",
    "Louis Riel School Division": "out-school-louis-riel",
    "St. James-Assiniboia School Division": "out-school-sjasd",
    "MFNERC / band-operated First Nations schools": "out-education-mfnerc",
    "Manitoba Justice — Corrections": "out-min-justice",
  };
  const tierNames = { 1: "Schools", 2: "Health & long-term care", 3: "Post-secondary", 4: "Indigenous organizations", 5: "Emergency & food security", 6: "Childcare, municipal & workplace", 7: "Retail & distribution", 8: "Supply chain & co-manufacturing" };
  const linkedOutreach = (target) => state.outreachTracker.find((item) => item.id === outreachByTarget[target.organization]);
  const highDependence = data.producePriorities.filter((item) => item.importDependence === "High").length;
  const strongTargets = data.loiTargets.filter((item) => item.indigFit === "Strong").length;
  const modeledDailyProduceKg = data.producePriorities.reduce((total, item) => total + (Number(item.expectedDailyKg) || 0), 0);
  return `
    <div class="content-stack">
      <section class="metrics-grid">
        ${metricCard("Shelly’s priorities", String(data.producePriorities.length), "Menu-linked produce priorities with sourcing actions.", "Supply")}
        ${metricCard("Menu items reviewed", String(data.menuItemCount), "Items across the four food sections of the attached PDF.", "Menu")}
        ${metricCard("Modeled produce / day", `${(modeledDailyProduceKg / 1000).toFixed(2)} t`, "Capacity-planning scenario; not a purchasing forecast.", "Estimate", true)}
        ${metricCard("LOI / MOU targets", String(data.loiTargets.length), `${strongTargets} have a Strong Indigenous-fit rating.`, "Pipeline")}
      </section>
      <section class="application-banner">
        <div><span>Daily consumption planning model</span><h3>One million meals across 45 menu items</h3><p><strong>≈${(modeledDailyProduceKg / 1000).toFixed(2)} tonnes of listed produce per day</strong>, or about ${(modeledDailyProduceKg * 1000 / data.dailyUseModel.mealsPerDay).toFixed(1)} g per meal across this modeled menu mix.</p></div>
        <div><span>Assumptions to verify before procurement</span><p>${escapeHtml(data.dailyUseModel.method)} ${escapeHtml(data.dailyUseModel.sideChoice)} ${escapeHtml(data.dailyUseModel.genericFruit)}</p><p>${escapeHtml(data.dailyUseModel.exclusion)}</p></div>
      </section>
      <section class="panel panel--flush">
        <div class="panel-heading"><div><h3>Shelly’s produce priorities</h3><p>Menu evidence comes from the attached school nutrition menu. Attention scores and sourcing actions remain from the August 13 produce workbook; daily use is a transparent planning estimate.</p></div><div class="action-row"><a class="plain-link" href="${escapeHtml(data.menuSource)}" download>Download menu PDF</a><a class="plain-link" href="${escapeHtml(data.produceSource)}" download>Download produce workbook</a></div></div>
        <div class="table-wrap">
          <table class="data-table market-table">
            <thead><tr><th>Produce</th><th>PDF menu evidence</th><th>Expected daily use</th><th>Import value</th><th>Unit value</th><th>Dependence / risk</th><th>Canadian / local season</th><th>Score</th><th>Recommended sourcing action</th></tr></thead>
            <tbody>${produce.map((item) => `<tr>
              <td><strong>${escapeHtml(item.produce)}</strong><span class="cell-subtext">${escapeHtml(item.category)} · ${escapeHtml(item.dataYear)}</span></td>
              <td><div class="badge-row">${statusBadge(item.menuImportance)}${typeBadge(item.menuEvidenceType)}</div><span class="cell-subtext">${escapeHtml(item.menuUse)}</span></td>
              <td class="money"><strong>${escapeHtml(formatDailyUse(item.expectedDailyKg))}</strong><span class="cell-subtext">${item.expectedDailyKg ? `${Math.round(item.expectedDailyKg * 1000 / data.dailyUseModel.servingsPerItem)} g per equal 45-item mix · ` : ""}${escapeHtml(item.estimateConfidence)}</span></td>
              <td class="money">${escapeHtml(formatCurrency(item.importValue, item.currency || "CAD", true))}</td>
              <td class="money">${escapeHtml(item.currency === "USD" ? "US$" : "CA$")}${item.unitValue.toFixed(2)}/kg</td>
              <td>${escapeHtml(item.importDependence)} dependence<span class="cell-subtext">${escapeHtml(item.supplyRisk)} supply risk</span></td>
              <td>${escapeHtml(item.season)}</td>
              <td><strong>${item.attentionScore}</strong><span class="cell-subtext">attention</span></td>
              <td>${escapeHtml(item.action)}</td>
            </tr>`).join("") || `<tr><td colspan="9">${emptyState("No matching produce rows", "Clear the search to restore the priority list.")}</td></tr>`}</tbody>
          </table>
        </div>
      </section>
      <section class="panel panel--flush">
        <div class="panel-heading"><div><h3>LOI / MOU target tracker</h3><p>All 56 workbook targets are included. Sent-mail evidence upgrades matched rows from “Not started”; no blank workbook status is treated as contact.</p></div><a class="plain-link" href="${escapeHtml(data.targetSource)}" download>Download target workbook</a></div>
        <div class="table-wrap">
          <table class="data-table target-table">
            <thead><tr><th>Tier</th><th>Organization</th><th>Sector / offer</th><th>Fit angle</th><th>Contact target</th><th>Indigenous fit</th><th>Current status</th><th>Last contact</th><th>Next action</th><th>Evidence</th></tr></thead>
            <tbody>${targets.map((item) => {
              const outreach = linkedOutreach(item);
              const nextAction = outreach ? outreach.nextAction : item.tier >= 7 ? "Hold for Phase 2 readiness, then identify the named buyer or partnership lead." : "Identify the named decision-maker, tailor the LOI ask and begin outreach.";
              return `<tr>
                <td><strong>${item.tier}</strong><span class="cell-subtext">${escapeHtml(tierNames[item.tier])}</span></td>
                <td><strong>${escapeHtml(item.organization)}</strong></td>
                <td>${escapeHtml(item.sector)}<span class="cell-subtext">${escapeHtml(item.offer)}</span></td>
                <td>${escapeHtml(item.angle)}</td>
                <td>${escapeHtml(item.contactRole)}</td>
                <td>${typeBadge(item.indigFit)}</td>
                <td>${statusBadge(outreach ? outreach.status : "Not started")}</td>
                <td>${escapeHtml(outreach ? outreach.lastDate : "No sent-mail evidence")}</td>
                <td>${escapeHtml(nextAction)}</td>
                <td>${outreach ? `<a class="plain-link" href="${escapeHtml(outreach.sourceUrl)}" target="_blank" rel="noopener noreferrer">Open email</a>` : "Workbook only"}</td>
              </tr>`;
            }).join("") || `<tr><td colspan="10">${emptyState("No matching targets", "Clear the search to restore the LOI / MOU pipeline.")}</td></tr>`}</tbody>
          </table>
        </div>
      </section>
      <div class="callout"><strong>Source controls</strong>The menu PDF supplies ingredient evidence but does not state recipe weights or actual item popularity, so daily-use values remain estimates until standardized recipes and a demand mix are approved. The produce workbook uses mixed CAD and USD source bases, and some HS categories cover more than one product. The target workbook is a planning list, not evidence of contact or commitment; Gmail evidence is linked only where a sent thread was found. ${highDependence} priorities are marked High import dependence.</div>
    </div>`;
}

function renderFunding() {
  const fundingRecords = state.records.filter((record) => record.type === "Funding").filter(matchesSearch);
  const fundingAmounts = { "fund-owner-equity": 1000000, "fund-debt": 8750000, "fund-grants": 15250000 };
  return `
    <div class="content-stack">
      ${truthBanner()}
      <section class="metrics-grid">
        ${metricCard("Total proposed cost", "$25.0M", "Formal project budget stated in the supplied brief.", "Proposal")}
        ${metricCard("Owner equity", "$1.0M", "4% of project cost; corrected and confirmed by the user.", "4%")}
        ${metricCard("Proposed debt", "$8.75M", "35% of project cost; FCC discussion is not approval.", "35%")}
        ${metricCard("Proposed grants", "$15.25M", "61% allocation; no award is implied.", "61%", true)}
      </section>
      <section class="panel">
        <div class="panel-heading">
          <div><h3>Proposed financing stack</h3><p>Amounts reconcile to CA$25.0M; availability and approval are separate questions.</p></div>
        </div>
        ${fundingBar()}
      </section>
      <section class="grid-two">
        <article class="panel panel--flush">
          <div class="panel-heading"><div><h3>Financing evidence</h3><p>Each layer preserves its exact commitment state.</p></div></div>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>Layer</th><th>Amount</th><th>Truth state</th><th>Verification</th></tr></thead>
              <tbody>${fundingRecords.map((record) => `<tr><td><button class="table-link" type="button" data-record-id="${escapeHtml(record.id)}">${escapeHtml(record.title)}</button></td><td class="money">${formatMoney(fundingAmounts[record.id] || 0, true)}</td><td>${statusBadge(record.status)}</td><td>${verificationBadge(record.verification)}</td></tr>`).join("")}</tbody>
            </table>
          </div>
        </article>
        <article class="panel">
          <div class="panel-heading"><div><h3>Readiness interpretation</h3><p>What the current evidence does—and does not—support.</p></div></div>
          <div class="callout"><strong>Owner equity corrected</strong>CA$1.0M is the full owner-equity contribution, not one component of a CA$6.25M contribution. The original brief value is preserved as an open conflict.</div>
          <div class="callout callout--danger u-mt-12"><strong>No debt approval documented</strong>Negotiation is not a term sheet, credit approval or committed funding.</div>
          <div class="callout callout--danger u-mt-12"><strong>Grant allocation is not an award</strong>The CA$5.25M previously shown as a gap is now included in the CA$15.25M grant/contribution layer at the user’s direction. Each program still needs its own verified application and approval state.</div>
        </article>
      </section>
      <section class="panel panel--flush">
        <div class="panel-heading"><div><h3>Proposal budget activities</h3><p>CA$000s · only values present in the supplied prompt are shown.</p></div></div>
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr><th>Activity</th><th>Amount (CA$000s)</th><th>State</th><th>Composition</th><th>Verification</th></tr></thead>
            <tbody>${state.budget.map((item) => `<tr><td>${escapeHtml(item.activity)}</td><td class="money">${new Intl.NumberFormat("en-CA").format(item.amountThousands)}</td><td>${statusBadge(item.status)}</td><td>${escapeHtml(item.detail)}</td><td>${verificationBadge(item.verification)}</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </section>
      <div class="callout callout--danger"><strong>Budget table incomplete</strong>The prompt ended after row 1 of 12. Eleven activities and their amounts were not fabricated. Attach the proposal to complete this register through controlled extraction and approval.</div>
    </div>`;
}

function renderFundingOpportunities() {
  const submitted = state.fundingOpportunities.find((item) => item.availability === "Submitted application");
  const live = state.fundingOpportunities.filter((item) => item.availability !== "Submitted application");
  const opportunities = live.filter((item) => !ui.search || Object.values(item).join(" ").toLowerCase().includes(ui.search.toLowerCase()));
  const contributionPaths = live.filter((item) => !item.category.toLowerCase().includes("debt")).length;
  return `
    <div class="content-stack">
      ${truthBanner()}
      <section class="metrics-grid">
        ${metricCard("Available fits", String(live.length), "Programs, financing and cost-shared support available for action.", "Live")}
        ${metricCard("Grant / support paths", String(contributionPaths), "Non-debt options in the current fit list.", "Mix")}
        ${metricCard("Submitted", submitted ? "1" : "0", "SRF Food Security application is under review.", "Applied")}
        ${metricCard("Grant allocation", "$15.25M", "Project target; program awards are not yet secured.", "Target", true)}
      </section>
      ${submitted ? `
        <section class="application-banner">
          <div><span>Current application</span><h3>${escapeHtml(submitted.name)}</h3><p>${escapeHtml(submitted.status)} · ${escapeHtml(submitted.intake)}</p></div>
          <div><strong>${escapeHtml(submitted.fitLevel)}</strong><p>${escapeHtml(submitted.nextAction)}</p><a class="plain-link" href="${escapeHtml(submitted.programUrl)}" target="_blank" rel="noopener noreferrer">Official program details →</a></div>
        </section>` : ""}
      <div class="section-title"><div><h3>Available and suited to the project</h3><p>Only open or continuously accessible paths are shown here. Fit was checked against the project’s ownership, food-processing, workforce and expansion needs.</p></div></div>
      <section class="opportunity-grid">
        ${opportunities.map((item) => `
          <article class="opportunity-card">
            <div class="opportunity-card__top">
              <div><p class="eyebrow">${escapeHtml(item.category)}</p><h4>${escapeHtml(item.name)}</h4></div>
              <span class="fit-chip">${escapeHtml(item.fitLevel)}</span>
            </div>
            <div class="opportunity-card__meta"><span>${escapeHtml(item.availability)}</span><span>${escapeHtml(item.pipeline)}</span></div>
            <p class="opportunity-amount">${escapeHtml(item.amount)}</p>
            <p><strong>Availability:</strong> ${escapeHtml(item.intake)}</p>
            <p><strong>Why it fits:</strong> ${escapeHtml(item.fit)}</p>
            <div class="callout"><strong>Next action</strong>${escapeHtml(item.nextAction)}</div>
            <div class="opportunity-card__footer">
              <span>${escapeHtml(item.verification)}</span>
              <div><a class="plain-link" href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noopener noreferrer">Email evidence</a><a class="plain-link" href="${escapeHtml(item.programUrl)}" target="_blank" rel="noopener noreferrer">Official program</a></div>
            </div>
          </article>`).join("") || emptyState("No matching funding opportunities", "Clear the search to restore the funding pipeline.")}
      </section>
    </div>`;
}

function renderCalendar() {
  const events = state.calendarSnapshot.events.filter((item) => !ui.search || Object.values(item).join(" ").toLowerCase().includes(ui.search.toLowerCase()));
  return `
    <div class="content-stack">
      <section class="metrics-grid">
        ${metricCard("Saved meetings", String(state.calendarSnapshot.savedCount), "Upcoming events found in the Shelly’s primary calendar.", "Calendar")}
        ${metricCard("Email proposals", String(state.calendarSnapshot.proposedCount), "Meeting signals that still require confirmation.", "Pending")}
        ${metricCard("Calendar account", "Shelly’s", state.calendarSnapshot.account, "Connected")}
        ${metricCard("Refreshed", "Aug 15", "Read-only snapshot; no calendar events were changed.", "2026", true)}
      </section>
      <div class="callout"><strong>Schedule check</strong>${escapeHtml(state.calendarSnapshot.note)}</div>
      <section class="panel panel--flush">
        <div class="panel-heading"><div><h3>Upcoming schedule signals</h3><p>America/Winnipeg · proposed meetings remain visibly separate from saved calendar events.</p></div></div>
        <div class="schedule-list">
          ${events.map((item) => `
            <article class="schedule-row">
              <div class="schedule-date"><strong>${escapeHtml(item.schedule.split("·")[0].trim())}</strong><span>${escapeHtml(item.schedule.includes("·") ? item.schedule.split("·").slice(1).join("·").trim() : item.schedule)}</span></div>
              <div><h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.relevance)}</p><div class="row-meta"><span>${escapeHtml(item.cadence)}</span><span>${escapeHtml(item.location)}</span></div></div>
              <a class="button button--ghost" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.actionLabel || "Open calendar")}</a>
            </article>`).join("") || emptyState("No matching schedule signals", "Clear the search to restore the refreshed schedule snapshot.")}
        </div>
      </section>
    </div>`;
}

function renderFollowUps() {
  const items = state.followUps.filter((item) => !ui.search || Object.values(item).join(" ").toLowerCase().includes(ui.search.toLowerCase()));
  const urgent = state.followUps.filter((item) => item.priority === "Now").length;
  const thisWeek = state.followUps.filter((item) => item.priority === "This week").length;
  return `
    <div class="content-stack">
      <section class="metrics-grid">
        ${metricCard("Baseline messages", String(state.emailScan.messages), `${state.emailScan.queryWindow} · connected project mailbox.`, "Email")}
        ${metricCard("Baseline threads", String(state.emailScan.threads), "Deduplicated project-related conversations.", "Threads")}
        ${metricCard("Refresh review", String(state.emailScan.incrementalMessages), `${state.emailScan.refreshWindow} · clearly project-relevant messages.`, "New scan")}
        ${metricCard("Act now", String(urgent), "Funding and governance responses requiring immediate handling.", "Now", true)}
        ${metricCard("This week", String(thisWeek), "Meetings, quotes and referrals needing follow-up.", "Queue")}
      </section>
      <div class="callout"><strong>Mailbox coverage</strong>${escapeHtml(state.emailScan.note)}</div>
      <section class="panel panel--flush">
        <div class="panel-heading"><div><h3>Baseline email coverage by subject</h3><p>The ${state.emailScan.threads} baseline threads were classified; the August 15 refresh is reflected in the action queue below.</p></div></div>
        <div class="email-coverage">
          ${state.emailScan.categories.map((item) => `<div><span>${escapeHtml(item.label)}</span><strong>${item.count}</strong></div>`).join("")}
        </div>
      </section>
      <section class="panel panel--flush">
        <div class="panel-heading"><div><h3>Follow-up queue</h3><p>Leadership owners are limited to Vince and Cat.</p></div><span class="record-count">${items.length} shown · ${state.followUps.length} total</span></div>
        <div class="followup-list">
          ${items.map((item) => `
            <article class="followup-row" data-priority="${escapeHtml(item.priority)}">
              <div class="followup-priority"><span>${escapeHtml(item.priority)}</span><small>${escapeHtml(item.lastDate)}</small></div>
              <div>
                <p class="eyebrow">${escapeHtml(item.organization)}</p>
                <h4>${escapeHtml(item.subject)}</h4>
                <p>${escapeHtml(item.evidence)}</p>
                <div class="callout"><strong>Next · ${escapeHtml(item.owner)}</strong>${escapeHtml(item.nextAction)}</div>
              </div>
              <div class="followup-actions">${statusBadge(item.status)}<a class="button button--ghost" href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noopener noreferrer">Open thread</a></div>
            </article>`).join("") || emptyState("No matching follow-ups", "Clear the search to restore the mailbox action queue.")}
        </div>
      </section>
    </div>`;
}

function renderStakeholders() {
  const manualOutreach = state.records.filter((record) => record.type === "Outreach").filter(matchesSearch);
  const trackedOutreach = state.outreachTracker.filter((item) => !ui.search || Object.values(item).join(" ").toLowerCase().includes(ui.search.toLowerCase()));
  const contractors = contractorRecords().filter(matchesSearch);
  const visiblePeople = state.people.filter((person) => !ui.search || Object.values(person).join(" ").toLowerCase().includes(ui.search.toLowerCase()));
  const ministryCount = state.outreachTracker.filter((item) => item.type === "Provincial ministry").length;
  const educationCount = state.outreachTracker.filter((item) => ["School division", "Education organization"].includes(item.type)).length;
  const responseCount = state.outreachTracker.filter((item) => !item.status.includes("no response found") && !item.status.includes("outcome not found")).length;
  return `
    <div class="content-stack">
      ${truthBanner()}
      <div class="section-title">
        <div><h3>People, organizations and contact evidence</h3><p>A person is never marked contacted without an approved email, meeting, call or letter record.</p></div>
        <button class="button button--primary" type="button" data-open-record-dialog>Add outreach record</button>
      </div>
      <section class="people-grid">
        ${visiblePeople.map((person) => `
          <article class="person-card">
            <div class="person-card__top"><div><p class="eyebrow">${escapeHtml(person.relationship)}</p><h4>${escapeHtml(person.name)}</h4></div>${statusBadge(person.outreachState)}</div>
            <p><strong>${escapeHtml(person.role)}</strong></p>
            <p>${escapeHtml(person.evidence)}</p>
            <div class="person-card__footer"><span>${escapeHtml(person.contact)}</span></div>
          </article>`).join("") || emptyState("No matching people", "Clear the search to see identified project leadership.")}
      </section>
      <section class="metrics-grid">
        ${metricCard("Ministerial portfolios", String(ministryCount), "Provincial ministries with direct sent-mail evidence.", "Government")}
        ${metricCard("Provincial programs", "2", "Investment & Trade and TGIF relationships tracked separately.", "Programs")}
        ${metricCard("Education organizations", String(educationCount), "Seven school divisions plus MFNERC found in sent mail.", "Schools")}
        ${metricCard("Responses / meetings", String(responseCount), "Rows with a response, meeting, referral or closed outcome.", "Evidence", true)}
      </section>
      <section class="panel panel--flush">
        <div class="panel-heading"><div><h3>Government and school outreach tracker</h3><p>Sent-mail evidence from richardc@shellysbistro.com, deduplicated by organization. Leadership accountability remains with Vince and Cat.</p></div><span class="record-count">${trackedOutreach.length} shown · ${state.outreachTracker.length} total</span></div>
        <div class="table-wrap">
          <table class="data-table outreach-table">
            <thead><tr><th>Organization</th><th>Type</th><th>Contact / recipient</th><th>Last sent</th><th>Purpose</th><th>Tracking status</th><th>Next action</th><th>Owner</th><th>Email</th></tr></thead>
            <tbody>${trackedOutreach.map((item) => `<tr>
              <td><strong>${escapeHtml(item.organization)}</strong></td>
              <td>${typeBadge(item.type)}</td>
              <td>${escapeHtml(item.contact)}</td>
              <td>${escapeHtml(item.lastDate)}</td>
              <td>${escapeHtml(item.purpose)}</td>
              <td>${statusBadge(item.status)}</td>
              <td>${escapeHtml(item.nextAction)}</td>
              <td><strong>${escapeHtml(item.owner)}</strong></td>
              <td><a class="plain-link" href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noopener noreferrer">Open sent thread</a></td>
            </tr>`).join("") || `<tr><td colspan="9">${emptyState("No matching outreach rows", "Clear the search to restore the sent-mail tracker.")}</td></tr>`}</tbody>
          </table>
        </div>
      </section>
      <section class="metrics-grid">
        ${metricCard("Contractor engagements", String(contractorRecords().length), "Unique contractor/scope records across both workbook sheets.", "Tracker")}
        ${metricCard("Priced records", "4", "Rows with a price, range, proposal or estimate in the detailed tracker.", "Quotes")}
        ${metricCard("Quote totals incl. GST", "$15.0K–$18.4K", "Workbook totals; not accepted contracts or approved spend.", "Range")}
        ${metricCard("Internal contradictions", "2", "Transcona resolution and Jilmark fee status require reconciliation.", "Review", true)}
      </section>
      <section class="panel panel--flush">
        <div class="panel-heading"><div><h3>41 Paquin contractor due diligence</h3><p>Report as of July 20, 2026. Source status is preserved exactly; every extraction remains pending approval.</p></div><a class="plain-link" href="sources/41_Paquin_Contractor_Tracker.xlsx" download>Download source workbook</a></div>
        <div class="table-wrap">
          <table class="data-table contractor-table">
            <thead><tr><th>Contractor & scope</th><th>Contact</th><th>Tracker status</th><th>Est. total incl. GST</th><th>Proposed / confirmed date</th><th>Verification</th></tr></thead>
            <tbody>
              ${contractors.map((record) => `<tr>
                <td><button class="table-link" type="button" data-record-id="${escapeHtml(record.id)}">${escapeHtml(record.title)}</button><span class="cell-subtext">${escapeHtml(record.scope)}</span></td>
                <td>${escapeHtml(record.contact)}<span class="cell-subtext">${escapeHtml(record.contactDetail)}</span></td>
                <td>${statusBadge(record.status)}<span class="cell-subtext">Source: ${escapeHtml(record.sourceStatus)}</span></td>
                <td class="money">${escapeHtml(formatQuoteRange(record.totalLow, record.totalHigh))}<span class="cell-subtext">Not an approved commitment</span></td>
                <td>${escapeHtml(record.proposedDate)}</td>
                <td>${verificationBadge(record.verification)}<span class="cell-subtext">${escapeHtml(record.locator)}</span></td>
              </tr>`).join("") || `<tr><td colspan="6">${emptyState("No matching contractors", "Clear the search to restore the tracker records.")}</td></tr>`}
            </tbody>
          </table>
        </div>
      </section>
      <section class="panel">
        <div class="panel-heading"><div><h3>Additional outreach evidence</h3><p>Approved communications are required before a party can be described as contacted outside the tracker’s dated record.</p></div></div>
        ${manualOutreach.length ? `<div class="evidence-list">${manualOutreach.map(evidenceRow).join("")}</div>` : emptyState("No separate manual outreach records", "Sent-mail relationships are tracked in the table above. Add call notes, letters or offline meetings separately so the evidence trail remains clear.")}
      </section>
      <section class="grid-equal">
        <article class="panel"><div class="panel-heading"><div><h3>Email evidence connection</h3><p>Secure mailbox source.</p></div></div><div class="callout"><strong>Gmail OAuth connected</strong>The authenticated profile confirms richardc@shellysbistro.com. The 23-row government and education tracker uses sent-message evidence; mailbox ownership does not create a leadership role.</div></article>
        <article class="panel"><div class="panel-heading"><div><h3>Customers & offtake</h3><p>Commercial commitments for the expansion.</p></div></div><div class="callout callout--danger"><strong>No signed offtake contracts documented</strong>Current institutional customers do not automatically become committed expansion customers.</div></article>
      </section>
    </div>`;
}

function renderSources() {
  const sources = state.sources.filter((source) => !ui.search || Object.values(source).join(" ").toLowerCase().includes(ui.search.toLowerCase()));
  return `
    <div class="content-stack">
      ${truthBanner()}
      <div class="section-title"><div><h3>Authoritative source register</h3><p>Originals remain immutable; corrections belong to structured records and retain provenance.</p></div></div>
      <section class="source-grid">
        ${sources.map((source) => {
          const stateClass = ["Available", "Connected"].includes(source.state) ? "source-state--connected" : source.state === "Not connected" ? "source-state--pending" : "";
          return `
            <article class="source-card">
              <div class="source-card__top"><div><p class="eyebrow">${escapeHtml(source.type)}</p><h4>${escapeHtml(source.name)}</h4></div><span class="source-state ${stateClass}" title="${escapeHtml(source.state)}"></span></div>
              <p>${escapeHtml(source.detail)}</p>
              <div class="source-card__footer"><span>${escapeHtml(source.declaredDate)}</span><strong>${escapeHtml(source.state)}</strong></div>
              <div class="source-card__actions">
                ${source.relativePath ? `<a class="plain-link" href="${escapeHtml(source.relativePath)}" download>Download immutable source copy</a>` : source.immutableOriginal ? `<button class="plain-link" type="button" data-download-source-id="${escapeHtml(source.id)}">Download registered original</button>` : ["proposal", "menu", "logistics", "equipment"].includes(source.id) ? `<button class="plain-link" type="button" data-register-source-id="${escapeHtml(source.id)}">Register immutable original</button>` : `<span>${escapeHtml(source.reference)}</span>`}
                ${source.sha256 ? `<span title="${escapeHtml(source.sha256)}">SHA-256 · ${escapeHtml(source.sha256.slice(0, 12))}…</span>` : ""}
              </div>
            </article>`;
        }).join("") || emptyState("No matching sources", "Clear the search to restore the source register.")}
      </section>
      <section class="panel">
        <div class="panel-heading"><div><h3>Open data-quality conflicts</h3><p>Conflicts are retained explicitly; the application does not silently choose a value.</p></div><span class="status-badge" data-state="Conflicting information">${state.conflicts.filter((item) => item.state === "Open").length} open</span></div>
        <div class="source-list">
          ${state.conflicts.map((conflict, index) => `
            <article class="conflict-card">
              <span class="conflict-index">${String(index + 1).padStart(2, "0")}</span>
              <div><h4>${escapeHtml(conflict.title)}</h4><p>${escapeHtml(conflict.detail)}</p><div class="row-meta u-mt-8"><span>Next: ${escapeHtml(conflict.nextAction)}</span></div></div>
              ${statusBadge(conflict.state === "Open" ? "Conflicting information" : conflict.state)}
            </article>`).join("")}
        </div>
      </section>
      <section class="panel">
        <div class="panel-heading"><div><h3>Precedence by subject</h3><p>Applied when evidence is imported and reconciled.</p></div></div>
        <div class="table-wrap"><table class="data-table"><thead><tr><th>Subject</th><th>First authority</th><th>Fallback / control</th></tr></thead><tbody>
          <tr><td>Task status & owners</td><td>Live Google Sheet</td><td>Approved manual updates</td></tr>
          <tr><td>Scope, financing, readiness & governance</td><td>Latest approved proposal</td><td>Create a conflict when another source differs</td></tr>
          <tr><td>Equipment & supplier research</td><td>Latest approved equipment report</td><td>Research is not contact, quote or purchase</td></tr>
          <tr><td>Flow, throughput & logistics</td><td>Latest approved logistics analysis</td><td>Preserve assumptions requiring validation</td></tr>
          <tr><td>Menu & declared icons</td><td>Menu source</td><td>Do not infer allergens beyond declared evidence</td></tr>
          <tr><td>Outreach & contact</td><td>Approved communication record</td><td>No evidence means not contacted</td></tr>
        </tbody></table></div>
      </section>
    </div>`;
}

function renderApprovals() {
  const pending = pendingRecords().filter(matchesSearch);
  const approved = state.records.filter((record) => record.verification === "Approved").filter(matchesSearch);
  return `
    <div class="content-stack">
      ${truthBanner()}
      <section class="metrics-grid">
        ${metricCard("Awaiting review", String(pending.length), "Seeded extractions and manual drafts.", "Queue")}
        ${metricCard("Approved records", String(approved.length), "Entered into the official local project record.", "Official")}
        ${metricCard("Source originals", "3 / 4", "Named authoritative documents attached in this workspace.", "Files")}
        ${metricCard("Open conflicts", String(state.conflicts.filter((item) => item.state === "Open").length), "Must be resolved with provenance, never overwritten.", "Quality", true)}
      </section>
      <section class="panel">
        <div class="panel-heading"><div><h3>Pending evidence review</h3><p>Approval requires a verified locator, reviewer note and attestation.</p></div></div>
        <div class="review-list">
          ${pending.length ? pending.map((record) => `
            <article class="approval-card">
              <div>
                <div class="badge-row">${typeBadge(record.type)}${statusBadge(record.status)}${verificationBadge(record.verification)}</div>
                <button class="table-link" type="button" data-record-id="${escapeHtml(record.id)}">${escapeHtml(record.title)}</button>
                <div class="row-meta u-mt-6"><span>${escapeHtml(record.sourceName)}</span><span>${escapeHtml(record.locator || "Source locator missing")}</span></div>
              </div>
              <div class="approval-actions"><button class="button button--ghost" type="button" data-record-id="${escapeHtml(record.id)}">Inspect</button><button class="button button--primary" type="button" data-approve-id="${escapeHtml(record.id)}">Review</button><button class="button button--danger" type="button" data-reject-id="${escapeHtml(record.id)}">Needs correction</button></div>
            </article>`).join("") : emptyState("Review queue is clear", "New extracted or manual records will appear here before entering the official record.")}
        </div>
      </section>
      <section class="panel">
        <div class="panel-heading"><div><h3>Approved official records</h3><p>Approval is local to this workspace and records its evidence locator and review note.</p></div></div>
        ${approved.length ? `<div class="evidence-list">${approved.map(evidenceRow).join("")}</div>` : emptyState("No records approved", "The supplied source originals are missing, so seeded claims should not be approved yet.")}
      </section>
    </div>`;
}

function emptyState(title, detail) {
  return `<div class="empty-state"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(detail)}</span></div>`;
}

function openRecord(recordId) {
  const record = state.records.find((item) => item.id === recordId);
  if (!record) return;
  ui.activeRecordId = recordId;
  drawerTitle.textContent = record.title;
  const source = state.sources.find((item) => item.id === record.sourceId);
  drawerBody.innerHTML = `
    <section class="drawer-section">
      <div class="badge-row badge-row--roomy">${typeBadge(record.type)}${statusBadge(record.status)}${verificationBadge(record.verification)}</div>
      <p>${escapeHtml(record.notes || "No notes supplied.")}</p>
    </section>
    <section class="drawer-section">
      <h3>Record controls</h3>
      <div class="detail-grid">
        <div class="detail-item"><span>Owner</span><strong>${escapeHtml(record.owner || "Unassigned")}</strong></div>
        <div class="detail-item"><span>Confidence</span><strong>${escapeHtml(record.confidence || "Not assessed")}</strong></div>
        <div class="detail-item"><span>Imported</span><strong>${escapeHtml(record.importedAt || "Unknown")}</strong></div>
        <div class="detail-item"><span>Official record</span><strong>${record.official ? "Yes" : "No"}</strong></div>
      </div>
    </section>
    <section class="drawer-section">
      <h3>Source provenance</h3>
      <p><strong>${escapeHtml(record.sourceName || "Source not supplied")}</strong><br>${escapeHtml(source?.type || "Source type not supplied")} · ${escapeHtml(record.sourceDate || "Date not supplied")}<br>${escapeHtml(record.locator || "Locator not supplied")}<br>${escapeHtml(source?.reference || "Source reference not supplied")}</p>
    </section>
    <section class="drawer-section">
      <h3>Next evidence control</h3>
      <p>${escapeHtml(record.nextAction || "Attach and verify an authoritative source.")}</p>
    </section>
    ${record.review ? `<section class="drawer-section"><h3>Approval history</h3><p>${escapeHtml(record.review.note)}<br><strong>Locator:</strong> ${escapeHtml(record.review.locator)}<br><strong>Reviewed:</strong> ${escapeHtml(record.review.date)}</p></section>` : ""}
    <section class="drawer-section">
      <div class="action-row">
        ${record.verification !== "Approved" ? `<button class="button button--primary" type="button" data-approve-id="${escapeHtml(record.id)}">Review for approval</button>` : ""}
        ${record.verification !== "Rejected" && record.verification !== "Approved" ? `<button class="button button--danger" type="button" data-reject-id="${escapeHtml(record.id)}">Needs correction</button>` : ""}
      </div>
    </section>`;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  scrim.hidden = false;
  document.querySelector("#closeDrawerBtn").focus();
}

function closeDrawer() {
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  ui.activeRecordId = null;
  if (!sidebar.classList.contains("is-open")) scrim.hidden = true;
}

function openApproval(recordId) {
  const record = state.records.find((item) => item.id === recordId);
  if (!record) return;
  const source = state.sources.find((item) => item.id === record.sourceId);
  if (source && ["Missing", "Not connected"].includes(source.state)) {
    closeDrawer();
    showToast("Register or connect the cited source before approving this record.");
    return;
  }
  closeDrawer();
  approvalDialog.querySelector('[name="recordId"]').value = record.id;
  approvalDialog.querySelector('[name="verifiedLocator"]').value = record.locator || "";
  approvalDialog.querySelector('[name="reviewNote"]').value = "";
  approvalDialog.querySelector('[name="attestation"]').checked = false;
  document.querySelector("#approvalSummary").innerHTML = `<strong>${escapeHtml(record.title)}</strong><span>${escapeHtml(record.status)} · ${escapeHtml(record.sourceName)}</span>`;
  approvalDialog.showModal();
}

function rejectRecord(recordId) {
  const record = state.records.find((item) => item.id === recordId);
  if (!record) return;
  record.verification = "Needs correction";
  record.official = false;
  record.review = { date: new Date().toISOString(), note: "Returned for correction before approval.", locator: record.locator || "Missing" };
  saveState();
  closeDrawer();
  render();
  showToast("Record returned for correction; it remains outside the official project record.");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

function navigate(view) {
  ui.view = view;
  closeDrawer();
  closeMobileMenu();
  render();
}

function closeMobileMenu() {
  sidebar.classList.remove("is-open");
  document.querySelector("#mobileMenuBtn").setAttribute("aria-expanded", "false");
  if (!drawer.classList.contains("is-open")) scrim.hidden = true;
}

function exportSnapshot() {
  const snapshot = {
    exportedAt: new Date().toISOString(),
    confidentiality: "Confidential internal project information",
    warning: "Verification states must be read with every record. Proposed, researched, applied or discussed items are not secured facts.",
    data: state,
    sharedTasks: taskHub.tasks,
  };
  const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `shellys-rte-project-snapshot-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  showToast("Confidential JSON snapshot exported with truth and verification states.");
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-view]");
  if (nav) navigate(nav.dataset.view);

  const navigateButton = event.target.closest("[data-navigate]");
  if (navigateButton) navigate(navigateButton.dataset.navigate);

  const recordButton = event.target.closest("[data-record-id]");
  if (recordButton) openRecord(recordButton.dataset.recordId);

  const approveButton = event.target.closest("[data-approve-id]");
  if (approveButton) openApproval(approveButton.dataset.approveId);

  const rejectButton = event.target.closest("[data-reject-id]");
  if (rejectButton) rejectRecord(rejectButton.dataset.rejectId);

  const registerSourceButton = event.target.closest("[data-register-source-id]");
  if (registerSourceButton) {
    ui.pendingSourceId = registerSourceButton.dataset.registerSourceId;
    document.querySelector("#sourceFileInput").click();
  }

  const downloadSourceButton = event.target.closest("[data-download-source-id]");
  if (downloadSourceButton) downloadSourceOriginal(downloadSourceButton.dataset.downloadSourceId);

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    ui.workplanFilter = filterButton.dataset.filter;
    render();
  }

  if (event.target.closest("[data-open-record-dialog], [data-open-task-dialog]")) openTaskDialog();

  const taskUserButton = event.target.closest("[data-task-user]");
  if (taskUserButton) setTaskUser(taskUserButton.dataset.taskUser);

  if (event.target.closest("[data-enable-push]")) enablePushForCurrentUser();

  const taskStatusButton = event.target.closest("[data-task-status]");
  if (taskStatusButton) updateSharedTaskStatus(taskStatusButton.dataset.taskId, taskStatusButton.dataset.taskStatus);

  const closeDialogButton = event.target.closest("[data-close-dialog]");
  if (closeDialogButton) document.querySelector(`#${closeDialogButton.dataset.closeDialog}`).close();
});

document.querySelector("#mobileMenuBtn").addEventListener("click", () => {
  const willOpen = !sidebar.classList.contains("is-open");
  sidebar.classList.toggle("is-open", willOpen);
  document.querySelector("#mobileMenuBtn").setAttribute("aria-expanded", String(willOpen));
  scrim.hidden = !willOpen;
});

scrim.addEventListener("click", () => {
  closeDrawer();
  closeMobileMenu();
});

document.querySelector("#closeDrawerBtn").addEventListener("click", closeDrawer);
document.querySelector("#addRecordBtn").addEventListener("click", openTaskDialog);
document.querySelector("#exportBtn").addEventListener("click", exportSnapshot);

document.querySelector("#globalSearch").addEventListener("input", (event) => {
  ui.search = event.target.value.trim();
  render();
});

document.querySelector("#sourceFileInput").addEventListener("change", (event) => {
  const [file] = event.target.files;
  const sourceId = ui.pendingSourceId;
  ui.pendingSourceId = null;
  event.target.value = "";
  if (sourceId && file) registerSourceOriginal(sourceId, file);
});

document.querySelector("#recordForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const title = String(data.get("title") || "").trim();
  if (!title) return;
  const submitButton = event.currentTarget.querySelector('[type="submit"]');
  submitButton.disabled = true;
  try {
    const payload = await taskApi("/api/tasks", {
      method: "POST",
      body: JSON.stringify({
        title,
        assignee: String(data.get("assignee") || "Richard"),
        createdBy: String(data.get("createdBy") || "Cat"),
        priority: String(data.get("priority") || "Normal"),
        dueDate: String(data.get("dueDate") || ""),
        details: String(data.get("details") || "").trim(),
      }),
    });
    upsertSharedTask(payload.task);
    event.currentTarget.reset();
    recordDialog.close();
    ui.view = "tasks";
    render();
    const delivery = payload.notification?.delivered || 0;
    showToast(delivery ? "Task assigned and push notification delivered." : "Task assigned. Richard’s list is updated; enable push on his device for alerts.");
  } catch (error) {
    showToast(error.message);
  } finally {
    submitButton.disabled = false;
  }
});

document.querySelector("#approvalForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const record = state.records.find((item) => item.id === data.get("recordId"));
  if (!record) return;
  record.verification = "Approved";
  record.official = true;
  record.locator = String(data.get("verifiedLocator") || "").trim();
  record.review = {
    date: new Date().toISOString(),
    locator: record.locator,
    note: String(data.get("reviewNote") || "").trim(),
  };
  saveState();
  approvalDialog.close();
  render();
  showToast("Record approved and entered into the official local project record.");
});

document.querySelector("#resetDataBtn").addEventListener("click", () => {
  if (!window.confirm("Restore the seeded workspace? This removes local draft and approval changes from this browser.")) return;
  const registeredSources = state.sources.filter((source) => source.immutableOriginal).map((source) => ({
    id: source.id,
    state: source.state,
    immutableOriginal: source.immutableOriginal,
    attachedName: source.attachedName,
    fileSize: source.fileSize,
    importedAt: source.importedAt,
    sha256: source.sha256,
    reference: source.reference,
  }));
  state = cloneSeed();
  registeredSources.forEach((registered) => {
    const source = state.sources.find((item) => item.id === registered.id);
    if (source) Object.assign(source, registered);
  });
  saveState();
  ui.view = "overview";
  ui.search = "";
  document.querySelector("#globalSearch").value = "";
  render();
  showToast("Seeded workspace restored.");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDrawer();
    closeMobileMenu();
  }
});

render();
initializeTaskCentre();
