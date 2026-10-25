import { siteContent } from "./siteContent.js";

export const slugify = (text) => {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// Comprehensive knowledge base for specific works and problems solved
const workKnowledgeBase = {
  // 1. Reduce Manual Work
  "repetitive-data-entry": {
    shortTitle: "Repetitive Data Entry",
    tagline: "Automate and eliminate manual data transcription across forms, spreadsheets, and business systems.",
    problemSummary:
      "Employees frequently spend hours re-entering order manifests, paper invoices, vendor specs, or customer details into CRM, ERP, and accounting systems. This manual copying creates data bottlenecks, introduces typographical errors, and ties up valuable staff on low-value repetitive tasks.",
    painPoints: [
      "Costly manual transcription errors leading to incorrect shipments or billing disputes",
      "Hours lost every day to mechanical data copying rather than core business operations",
      "Backlogs and delays during high-volume periods or month-end processing",
      "Employee frustration and high turnover in data-entry intensive administrative roles"
    ],
    whatPragmattoDoes: [
      "Analyze your source data formats (PDFs, paper scans, spreadsheets, emails, partner portals)",
      "Build custom automated intake scripts and validation pipelines to parse and sanitize data",
      "Connect intake logic directly into your target database, ERP, or business application",
      "Implement automatic validation checks to catch discrepancies before data is committed"
    ],
    deliverables: [
      "Automated data ingestion pipeline",
      "Real-time validation and format-standardization rules",
      "Exception logging dashboard for any unverified entries",
      "Documentation and training for your operational team"
    ],
    outcomes: [
      "Eliminate up to 90% of manual transcription effort",
      "Zero typographical errors in production databases",
      "Same-day record processing without staffing increases"
    ]
  },

  "automation-of-routine-activities": {
    shortTitle: "Automation of Routine Activities",
    tagline: "Turn recurring daily and weekly computer tasks into reliable, push-button automated routines.",
    problemSummary:
      "Operational teams lose hours every morning performing mechanical tasks—downloading vendor PDFs, moving files between network folders, updating status spreadsheets, or sending manual confirmation emails. These tasks don't require human creativity, yet consume hours of focus.",
    painPoints: [
      "Daily operational bandwidth consumed by predictable, rule-based computer chores",
      "Critical steps occasionally forgotten or delayed when key staff take time off",
      "Inconsistent file naming and disorganized folder structures across shared drives",
      "Delays in downstream manufacturing or fulfillment waiting for files to be processed"
    ],
    whatPragmattoDoes: [
      "Map out the exact step-by-step logic of your recurring operational procedures",
      "Build lightweight background automation scripts or cloud jobs tailored to your rules",
      "Integrate file system operations, notifications, and status updates seamlessly",
      "Include error handling and alerts so you are notified immediately if an exception occurs"
    ],
    deliverables: [
      "Scheduled background automation jobs",
      "Automated file management and sorting utilities",
      "Notification triggers (email, Slack, or webhook alerts)",
      "Runbooks and monitoring logs for complete visibility"
    ],
    outcomes: [
      "Hours of staff time recovered every single week",
      "Guaranteed execution consistency regardless of staff attendance",
      "Faster end-to-end turnaround for daily operational tasks"
    ]
  },

  "routine-reporting": {
    shortTitle: "Routine Reporting",
    tagline: "Automated generation and distribution of operational, financial, and inventory summaries.",
    problemSummary:
      "Management and operational teams need timely figures to make decisions, but producing routine reports often requires pulling CSV exports from several systems, pasting formulas into spreadsheets, and manually assembling charts before emailing stakeholders.",
    painPoints: [
      "Hours wasted every week compiling routine operational summaries",
      "Broken spreadsheet formulas and outdated cell references producing conflicting numbers",
      "Reports delivered days after the fact, reducing their usefulness for operational decisions",
      "Reliance on a single team member who holds the formula knowledge in their head"
    ],
    whatPragmattoDoes: [
      "Connect directly to your underlying databases, ERP, and operational spreadsheets",
      "Standardize calculation rules and aggregation metrics approved by leadership",
      "Automate data extraction, formatting, and distribution on your preferred schedule",
      "Output clean, professional Excel spreadsheets, interactive dashboards, or PDF summaries"
    ],
    deliverables: [
      "Automated scheduled data extraction and aggregation jobs",
      "Standardized report templates with zero manual formula manipulation required",
      "Automated distribution system sending reports directly to stakeholders",
      "Self-service on-demand report generator for ad-hoc dates"
    ],
    outcomes: [
      "Reports generated in seconds instead of hours",
      "Guaranteed mathematical consistency and accurate metrics",
      "Timely visibility for leadership to act on fresh operational data"
    ]
  },

  "data-movement-between-systems": {
    shortTitle: "Data Movement Between Systems",
    tagline: "Reliable automated data synchronization between your ERP, CRM, portal, and legacy databases.",
    problemSummary:
      "When business software applications don't talk to each other, employees become human bridges—exporting a CSV from your CRM, reformatting headers, and importing it into the ERP or warehouse software. When files get missed or formatting breaks, inventory and customer records diverge.",
    painPoints: [
      "Discrepancies between what the sales CRM shows and what the ERP has in inventory",
      "Double-handling data with high risk of missing records or partial uploads",
      "Delayed synchronization causing orders to wait hours before reaching the warehouse floor",
      "Lack of error tracking when manual CSV uploads fail midway through"
    ],
    whatPragmattoDoes: [
      "Audit the endpoints, APIs, database tables, or CSV structures of both systems",
      "Build resilient connector pipelines that validate, transform, and transfer records automatically",
      "Implement automatic retry policies and transaction isolation to prevent duplicate records",
      "Provide clean logging and alert notifications if an endpoint becomes unreachable"
    ],
    deliverables: [
      "Automated bi-directional or uni-directional sync connector",
      "Transformation engine handling field mappings, dates, and currency conversions",
      "Audit trail logging every transferred batch with success/failure status",
      "Simple admin control to run manual triggers or pause sync when needed"
    ],
    outcomes: [
      "Single source of truth across all business applications",
      "Real-time data availability without manual export/import gymnastics",
      "Complete visibility into system health and synchronization logs"
    ]
  },

  "repetitive-administrative-tasks": {
    shortTitle: "Repetitive Administrative Tasks",
    tagline: "Streamline and automate recurring administrative handoffs and checklist verifications.",
    problemSummary:
      "Front-office and operations staff spend significant portions of their week on administrative verification—cross-checking shipping confirmations, sending customer document packages, updating status checklists, and logging paperwork. These steps are critical but consume undue manual attention.",
    painPoints: [
      "Back-office delays creating customer service bottlenecks",
      "Human oversight resulting in missed compliance steps or late customer communications",
      "Repetitive copy-pasting of identical email messages and attachment handling",
      "Difficulty tracking whether an administrative item was actually completed"
    ],
    whatPragmattoDoes: [
      "Identify high-frequency administrative tasks suitable for rules-based automation",
      "Create streamlined web tools or background scripts to trigger document packages and confirmations",
      "Standardize tracking checklists with automated timestamping and status updates",
      "Eliminate redundant logging across multiple administrative records"
    ],
    deliverables: [
      "Automated administrative task execution rules",
      "Digital dispatch workflows for customer documents and confirmations",
      "Centralized task verification checklist with audit history",
      "Standard operating procedure documentation"
    ],
    outcomes: [
      "Faster administrative turnaround times and improved client response rates",
      "Guaranteed compliance with zero missed steps or forgotten attachments",
      "Staff freed up for higher-value relationship management and problem solving"
    ]
  },

  "bussiness-flow-automation": {
    shortTitle: "Business Flow Automation",
    tagline: "Connect disjointed operational steps into seamless, error-free automated workflows.",
    problemSummary:
      "Work often stalls when transitioning between departments—order intake to procurement, shop floor to inventory, or invoice to fulfillment. Manual email chains, paper sign-offs, and disjointed software handoffs create friction and leave customers waiting.",
    painPoints: [
      "Bottlenecks when orders or change requests sit in someone's inbox waiting for approval",
      "Lack of visibility into where a job or order is currently delayed",
      "Inconsistent handoffs between sales, production, and accounting teams",
      "Customer frustration caused by avoidable operational turnaround delays"
    ],
    whatPragmattoDoes: [
      "Map your current cross-departmental workflow and isolate communication gaps",
      "Design clear trigger conditions, digital approval thresholds, and automated handoffs",
      "Connect stages programmatically so completion of one step immediately launches the next",
      "Create visual progress tracking so everyone knows where an order or task stands"
    ],
    deliverables: [
      "End-to-end operational workflow automation",
      "Digital approval routing and automated stage advancement",
      "Status dashboard reflecting real-time progress of active jobs",
      "Custom exception notifications for stalled or delayed orders"
    ],
    outcomes: [
      "Significantly shorter cycle times from initial order to final delivery",
      "Clear accountability and transparency across all operational stages",
      "Elimination of manual follow-up emails and status check-in meetings"
    ]
  },

  // 2. Clean Up Business Data
  "data-verification-and-validation": {
    shortTitle: "Data Verification & Validation",
    tagline: "Validate master data against business rules and external sources before errors propagate.",
    problemSummary:
      "Enterprise systems are only as reliable as the data entered into them. Inaccurate part numbers, invalid tax codes, unformatted phone numbers, and inconsistent addresses corrupt downstream reporting and cause order fulfillment failures.",
    painPoints: [
      "Incorrect customer or vendor records causing failed shipments and invoice bouncebacks",
      "Inconsistent format standards making database queries slow and inaccurate",
      "Garbage data creeping into CRM and ERP systems unnoticed until customer complaints arise",
      "Lack of programmatic guards to reject invalid data entries at the gate"
    ],
    whatPragmattoDoes: [
      "Establish strict validation schemas tailored to your business rules and data models",
      "Audit existing databases to flag, verify, and rectify non-conforming entries",
      "Implement automated validation hooks that verify addresses, tax IDs, and SKU syntax",
      "Create exception logs that alert your team when incoming data fails required thresholds"
    ],
    deliverables: [
      "Data validation rule set and schema verification engine",
      "Full database audit report highlighting non-compliant records",
      "Automated pre-save validation rules for your applications",
      "Data quality dashboard showing accuracy metrics over time"
    ],
    outcomes: [
      "Near-100% verified master data integrity across all core tables",
      "Elimination of fulfillment delays caused by invalid customer records",
      "Dependable reporting that management can trust without second-guessing"
    ]
  },

  "data-cleanup-and-quality-checks": {
    shortTitle: "Data Cleanup & Quality Checks",
    tagline: "Systematic data hygiene, deduplication, and standardization across critical business tables.",
    problemSummary:
      "Years of organic growth and ad-hoc entry leave databases littered with duplicate accounts, misspelled company names, obsolete products, and orphaned rows. This clutter degrades search speeds, confuses sales teams, and leads to embarrassing customer duplicate communications.",
    painPoints: [
      "Multiple duplicate accounts for the same customer with contradictory contact details",
      "Misspelled or variant vendor names preventing accurate spend analysis",
      "Orphaned line items and broken foreign keys bloating databases",
      "Reluctance of staff to use the CRM or ERP because 'the data is too messy'"
    ],
    whatPragmattoDoes: [
      "Run programmatic deduplication algorithms combining exact and fuzzy matching techniques",
      "Standardize casing, address structures, phone numbers, and categorical naming conventions",
      "Safely merge duplicate accounts while preserving historical orders and interaction notes",
      "Provide clean before-and-after reports with rollback capabilities for total safety"
    ],
    deliverables: [
      "Cleaned, deduplicated master data tables",
      "Fuzzy-matching deduplication scripts that can be re-run on demand",
      "Standardization dictionaries for company and item naming conventions",
      "Audit trail documenting all merged or updated records"
    ],
    outcomes: [
      "Pristine customer, vendor, and item catalogs",
      "Accurate spend and revenue analytics by eliminating duplicate entities",
      "Renewed employee trust and speed when searching the corporate database"
    ]
  },

  "data-migration-validation": {
    shortTitle: "Data Migration Validation",
    tagline: "Ensure complete, byte-for-byte fidelity and zero data loss during platform and database migrations.",
    problemSummary:
      "Moving data from an aging legacy software to a modern ERP or cloud database is one of the highest-risk projects a business undertakes. Truncated text fields, dropped relational links, or misaligned currency values can corrupt decades of historical business intelligence.",
    painPoints: [
      "Fear of losing historical customer order records during ERP or database upgrades",
      "Silent data corruption where numbers shift slightly without immediate error alerts",
      "Go-live delays caused by unexpected schema incompatibilities discovered late",
      "High cost of manual record-by-record spot checks that still miss edge cases"
    ],
    whatPragmattoDoes: [
      "Perform exhaustive pre-migration audits of legacy schemas and character encodings",
      "Build automated row-by-row, column-by-column comparison scripts for source vs target",
      "Verify foreign key relationships, balance totals, and calculation integrity",
      "Conduct simulated cutover runs with automated variance reports prior to live migration"
    ],
    deliverables: [
      "Pre-migration data readiness and gap analysis report",
      "Automated verification test suites comparing source and target data sets",
      "Reconciliation ledger confirming 100% row counts and checksum fidelity",
      "Post-migration sign-off audit for leadership and compliance"
    ],
    outcomes: [
      "Zero lost or corrupted records during system cutover",
      "Peace of mind with programmatic proof of data completeness",
      "Predictable, on-schedule go-live without last-minute data panic"
    ]
  },

  "data-mapping-validation": {
    shortTitle: "Data Mapping Validation",
    tagline: "Verify schema translations, data types, and transformation logic between source and target systems.",
    problemSummary:
      "When integrating systems or converting records, data mapping defines how fields translate. A misunderstanding of how a source field maps into the target system—such as units of measure, tax inclusion, or status flags—can quietly break downstream operations.",
    painPoints: [
      "Subtle transformation bugs producing incorrect pricing, units, or status flags",
      "Truncated descriptions when target field length is shorter than source data",
      "Incompatible date and timestamp formats causing sync crashes",
      "Unclear documentation of who decided which field maps where"
    ],
    whatPragmattoDoes: [
      "Document clear source-to-target mapping specifications with explicit type and length constraints",
      "Write automated transformation tests to validate edge-case values and null conditions",
      "Validate lookup dictionaries, categorical translations, and fallback default values",
      "Run sandbox batch transformations to verify target system acceptance before production"
    ],
    deliverables: [
      "Formal Data Mapping Matrix with validation rules",
      "Automated mapping test scripts testing every field transformation",
      "Sample transformed data payloads for target system verification",
      "Clear documentation of business logic for edge cases and exceptions"
    ],
    outcomes: [
      "Flawless field translation across integrated applications",
      "Elimination of unexpected sync exceptions and truncated values",
      "Clear technical reference for future system enhancements"
    ]
  },

  "data-reconciliation": {
    shortTitle: "Data Reconciliation",
    tagline: "Balance operational records, inventory tallies, and financial data with automated reconciliation.",
    problemSummary:
      "When warehouse stock counts diverge from ERP inventory balances, or when payment gateway settlements conflict with general ledger accounts, businesses lose hours manually cross-checking transaction by transaction to figure out which record is correct.",
    painPoints: [
      "Unexplained variances between bank statements, payment processors, and accounting ledgers",
      "Inventory record mismatches causing production downtime or unexpected stockouts",
      "Days spent by finance teams at month-end manually investigating reconciling items",
      "Audit vulnerability due to lack of a clear, automated reconciliation paper trail"
    ],
    whatPragmattoDoes: [
      "Build programmatic reconciliation scripts connecting disparate source registers",
      "Automate matching logic based on reference IDs, dates, amounts, and tolerance rules",
      "Isolate exceptions and generate categorized exception summaries for rapid review",
      "Establish automated daily reconciliation jobs to prevent variance accumulation"
    ],
    deliverables: [
      "Automated reconciliation engine tailored to your transaction volumes",
      "Daily/weekly variance reporting dashboard highlighting un-matched items",
      "Detailed audit logs showing matched pairs and reconciliation history",
      "Root-cause diagnostic guide for recurring discrepancy types"
    ],
    outcomes: [
      "Month-end close time reduced from days to a couple of hours",
      "Immediate detection of payment gateway discrepancies or warehouse leaks",
      "Audit-proof reconciliation records with complete traceability"
    ]
  },

  "data-discrepancy-investigation": {
    shortTitle: "Data Discrepancy Investigation",
    tagline: "Track down the root causes of data mismatches and eliminate reporting variance.",
    problemSummary:
      "When two reports from the same business show different revenue, profit, or inventory numbers, leadership doesn't know which figure to trust. Identifying whether the issue is an extraction bug, a missing filter, or a faulty calculation requires deep technical forensic analysis.",
    painPoints: [
      "Leadership losing confidence in executive dashboards due to conflicting reports",
      "Time wasted in management meetings debating whose numbers are correct",
      "Undetected logic bugs that skew historical trends and forecasting",
      "Internal staff lacking the technical bandwidth to trace deep SQL queries and stored procedures"
    ],
    whatPragmattoDoes: [
      "Trace complete data lineage from initial entry through ETL pipelines to final reports",
      "Deconstruct competing SQL queries, stored procedures, and report formula definitions",
      "Identify the exact filter condition, calculation flaw, or sync timing issue causing the drift",
      "Deliver a concrete fix and documentation explaining why the variance occurred"
    ],
    deliverables: [
      "Root-cause forensic analysis report with visual lineage diagram",
      "Corrected SQL queries, formulas, or integration pipeline code",
      "Validation test suite proving that both reporting views now align",
      "Preventative guidance to avoid future logic drift"
    ],
    outcomes: [
      "Unified, trustworthy numbers across all business reporting tools",
      "Restored executive confidence in operational dashboards and KPIs",
      "Permanent resolution of long-standing data discrepancies"
    ]
  },

  "data-entry-and-maintenance": {
    shortTitle: "Data Entry & Maintenance",
    tagline: "Structured data hygiene protocols and rapid cleansing campaigns for backlog records.",
    problemSummary:
      "Over time, backlog files, catalog changes, and customer updates pile up faster than staff can handle. Without a disciplined approach and programmatic assistance, outdated entries persist and degrade operational agility.",
    painPoints: [
      "Piles of un-updated inventory items, vendor catalogs, or customer contact files",
      "Staff forced to work with outdated information because updates haven't been applied",
      "Inconsistent entry formats when multiple staff members update records without guidance",
      "Overwhelming backlog that feels too large for existing staff to tackle"
    ],
    whatPragmattoDoes: [
      "Design structured data cleansing campaigns combining custom scripts with guided workflows",
      "Standardize categorical taxonomies, abbreviations, and required field rules",
      "Batch-process catalog updates, vendor price list refreshes, and mass property updates",
      "Implement simple validation rules to ensure ongoing entries remain standardized"
    ],
    deliverables: [
      "Cleaned and refreshed backlog database tables",
      "Batch update utility for future vendor catalog refreshes",
      "Standardized data entry guidelines and validation constraints",
      "Before-and-after audit logs verifying update accuracy"
    ],
    outcomes: [
      "Backlogs cleared rapidly without hiring temporary administrative staffing",
      "Current, reliable product and vendor data across all departments",
      "Clear ongoing entry standards preventing future backlog accumulation"
    ]
  },

  "erp-data-preparation-and-cleanup": {
    shortTitle: "ERP Data Preparation & Cleanup",
    tagline: "Prepare, scrub, and structure master records for seamless ERP implementation and upgrades.",
    problemSummary:
      "The primary reason ERP implementations run over budget or fail is dirty legacy data. Loading duplicate vendors, obsolete part numbers, unverified BOMs (Bills of Materials), and fragmented customer records into a new ERP guarantees immediate post-launch confusion.",
    painPoints: [
      "ERP implementation consultants billing exorbitant rates while waiting for clean data",
      "Decades of obsolete parts, inactive customers, and duplicate vendors clogging legacy databases",
      "Inconsistent Bills of Materials (BOMs) causing manufacturing planning errors",
      "Risk of failed user adoption if the new ERP launches with unreliable data"
    ],
    whatPragmattoDoes: [
      "Extract and categorize legacy items, customers, vendors, and BOMs for systematic review",
      "Identify and purge obsolete, inactive, and duplicate records based on business criteria",
      "Standardize descriptions, units of measure, and commodity codes into the new ERP schema",
      "Validate cleaned data sets in trial migration loads to verify full ERP acceptance"
    ],
    deliverables: [
      "Scrubbed, standardized master data ready for direct ERP ingestion",
      "BOM validation report ensuring all component references and quantities align",
      "Legacy-to-ERP cross-reference mapping tables for historical lookup",
      "Formal sign-off report certifying data readiness for production load"
    ],
    outcomes: [
      "Smooth, predictable ERP launch without data-related cutover surprises",
      "Significant cost savings by avoiding expensive ERP vendor data cleanup fees",
      "A pristine, modern ERP foundation ready to power business growth"
    ]
  },

  // 3. QA Testing
  "system-testing": {
    shortTitle: "System Testing",
    tagline: "Comprehensive end-to-end verification of entire software suites under real business conditions.",
    problemSummary:
      "Individual software components often appear functional during developer testing, but when assembled into a complete environment—spanning databases, network links, third-party integrations, and operating systems—unexpected conflicts and crashes emerge.",
    painPoints: [
      "Software working in development environments but failing upon production deployment",
      "Unanticipated database locks, resource leaks, or timeout issues under business workloads",
      "Complex integration points failing under real-world data volumes",
      "Customer-facing downtime during critical operational hours"
    ],
    whatPragmattoDoes: [
      "Construct realistic system testing environments mirroring your exact production architecture",
      "Design comprehensive test scenarios testing full workflows across all connected modules",
      "Verify system behavior under peak transaction volumes, network latency, and failover scenarios",
      "Deliver detailed diagnostic bug reports with exact reproduction steps for rapid fixing"
    ],
    deliverables: [
      "Comprehensive System Test Plan and execution matrix",
      "Prioritized defect logs with reproduction videos and stack traces",
      "System performance and throughput benchmark report",
      "Release readiness certificate and risk assessment"
    ],
    outcomes: [
      "Confidence that your entire software ecosystem functions dependably together",
      "Zero high-severity surprises on deployment day",
      "Documented performance benchmarks for future capacity planning"
    ]
  },

  "functional-testing": {
    shortTitle: "Functional Testing",
    tagline: "Verify that every feature, button, rule, and calculation works exactly as your business requires.",
    problemSummary:
      "Subtle functional defects—such as a miscalculated tax rate, a disabled submit button under specific browser versions, or a broken discount condition—slip past casual testing and directly damage customer trust and revenue.",
    painPoints: [
      "Customers encountering broken workflows, broken buttons, or checkout errors",
      "Pricing or calculation discrepancies resulting in financial losses",
      "Developers lacking the business context to test non-obvious edge cases",
      "Constant user complaints about basic features not working as intended"
    ],
    whatPragmattoDoes: [
      "Deconstruct functional specifications into clear, testable business logic scenarios",
      "Execute rigorous positive, negative, and boundary test cases across all inputs",
      "Verify complex pricing, discount, and access permission rules",
      "Provide precise defect reporting so developers fix bugs in hours rather than days"
    ],
    deliverables: [
      "Detailed Functional Test Matrix covering all business requirements",
      "Defect tracking reports categorized by severity and impact",
      "Pass/fail validation summary for each release sprint",
      "Reusable functional regression checklists for future releases"
    ],
    outcomes: [
      "Software features that work predictably and accurately on the first attempt",
      "Elimination of embarrassing customer-facing logic defects",
      "Faster development velocity with clear, actionable bug feedback"
    ]
  },

  "integration-testing": {
    shortTitle: "Integration Testing",
    tagline: "Validate API connectors, third-party webhooks, and multi-system data handoffs.",
    problemSummary:
      "Modern applications rely on external APIs—payment processors, shipping carriers, CRM syncs, ERP feeds, and SMS gateways. When third-party vendors update their endpoints or when network timeouts occur, unhandled integration failures can halt operations.",
    painPoints: [
      "Orders stalling because an API payload failed validation quietly",
      "Third-party vendor API updates breaking internal workflows without warning",
      "Double-charging or duplicate record creation caused by unhandled retry loops",
      "Lack of visibility into where in the integration chain a message was lost"
    ],
    whatPragmattoDoes: [
      "Inspect API contracts, schemas, headers, authentication tokens, and payload structures",
      "Test edge cases including timeout recovery, malformed payloads, rate limiting, and network dropouts",
      "Verify idempotent transaction handling to guarantee duplicate messages are handled safely",
      "Automate integration test suites to continuously verify external partner API health"
    ],
    deliverables: [
      "API and Integration Test Suite with automated test scripts",
      "Payload validation schemas and error-handling specification",
      "Integration failure analysis log and resilience recommendations",
      "Partner endpoint monitoring setup for proactive outage alerting"
    ],
    outcomes: [
      "Unshakable reliability across all third-party and internal API connections",
      "Resilient error recovery that protects data integrity during network hiccups",
      "Rapid isolation of external vendor outages versus internal software bugs"
    ]
  },

  "end-to-end-testing": {
    shortTitle: "End-to-End Testing",
    tagline: "Simulate complete user journeys from initial inquiry to final delivery and invoicing.",
    problemSummary:
      "Testing screens in isolation doesn't guarantee a customer can actually complete a full transaction. End-to-end testing verifies the entire real-world lifecycle—from customer cart checkout, payment receipt, and ERP order creation, to warehouse pick-ticket generation and shipping tracking.",
    painPoints: [
      "Individual screens passing tests while full business workflows fail halfway through",
      "Data dropping or state getting lost between different application stages",
      "Manual end-to-end testing being too slow and inconsistent for frequent releases",
      "Customers abandoning transactions midway due to jarring workflow glitches"
    ],
    whatPragmattoDoes: [
      "Map out complete end-to-end user journeys mirroring authentic business workflows",
      "Execute multi-role, multi-system test scenarios verifying state persistence across stages",
      "Test cross-device and cross-browser journeys to ensure seamless responsiveness",
      "Verify back-office notifications, invoices, and ledger entries triggered by completed workflows"
    ],
    deliverables: [
      "End-to-End User Journey Test Maps",
      "Comprehensive journey validation reports across mobile and desktop platforms",
      "Defect logs targeting workflow friction, state loss, or broken transitions",
      "Actionable recommendations to streamline user experience and conversion"
    ],
    outcomes: [
      "Flawless real-world user journeys that convert visitors into satisfied customers",
      "Certainty that every business step triggers the proper downstream actions",
      "Reduced cart abandonment and customer service inquiries"
    ]
  },

  "user-acceptance-testing": {
    shortTitle: "User Acceptance Testing (UAT)",
    tagline: "Structured UAT coordination and verification ensuring software is ready for daily business use.",
    problemSummary:
      "Engineers may build software according to a technical specification, but if it doesn't align with how real business staff work on the ground, adoption falters. Structured UAT ensures the software solves the actual operational problem before leadership signs off.",
    painPoints: [
      "Software delivered that technically 'meets specs' but is impractical for staff to use",
      "Business stakeholders feeling overwhelmed by unstructured testing requests",
      "Critical operational workflow issues discovered only after company-wide launch",
      "Contentious disagreements between developers and operational managers at delivery"
    ],
    whatPragmattoDoes: [
      "Translate business operational procedures into guided, step-by-step UAT test scenarios",
      "Facilitate and coordinate testing sessions with your operational department champions",
      "Capture, categorize, and clarify user feedback and usability concerns",
      "Work with technical teams to implement high-priority adjustments before deployment"
    ],
    deliverables: [
      "Business-friendly UAT Test Scenarios and test participant guides",
      "Structured UAT feedback matrix prioritizing blockers vs cosmetic tweaks",
      "Defect resolution tracking and re-test verification log",
      "Formal User Acceptance Sign-Off dossier for executive leadership"
    ],
    outcomes: [
      "Enthusiastic user adoption because the tool truly fits daily workflows",
      "Zero post-launch operational paralysis from unexpected workflow disconnects",
      "Clear, constructive alignment between business leaders and technical teams"
    ]
  },

  "regression-testing": {
    shortTitle: "Regression Testing",
    tagline: "Protect existing stable features whenever updates, patches, or new features are deployed.",
    problemSummary:
      "Nothing frustrates users more than a software update that introduces an exciting new feature but silently breaks a core function they have relied on for years. Thorough regression testing guarantees that existing capabilities remain rock-solid.",
    painPoints: [
      "New feature releases breaking existing features and creating customer churn",
      "Teams afraid to update software because 'something always breaks'",
      "Hours spent after every release firefighting unexpected production regressions",
      "Lack of a standardized regression test suite to run before deployment"
    ],
    whatPragmattoDoes: [
      "Curate a targeted, high-impact regression test suite focusing on mission-critical features",
      "Execute regression suites before every release, configuration change, or server upgrade",
      "Automate repetitive regression checks to deliver rapid pass/fail feedback to developers",
      "Continuously update regression tests as new features become part of the baseline"
    ],
    deliverables: [
      "Core Business Regression Test Suite (Automated & Manual)",
      "Pre-release Regression Sign-Off Report with zero unresolved high-severity regressions",
      "Change-impact risk analysis for planned software updates",
      "Continuous test maintenance keeping regression cases aligned with new features"
    ],
    outcomes: [
      "Unwavering production stability release after release",
      "Safe, confident deployment of new features without fear of breakage",
      "High customer satisfaction and brand trust in software reliability"
    ]
  },

  "go-live-and-production-validation": {
    shortTitle: "Go-Live & Production Validation",
    tagline: "Rigorous smoke testing and live validation during critical system launch windows.",
    problemSummary:
      "Go-live moments—cutover weekends, midnight database migrations, and major version releases—are high-stakes events. Missing an environment variable, an SSL certificate, or a database permission can turn a planned launch into an operational emergency.",
    painPoints: [
      "High stress and chaos during deployment windows without structured verification",
      "Unnoticed configuration errors affecting customers when business opens Monday morning",
      "Lack of a clear rollback threshold or emergency response protocol",
      "Leadership left wondering whether the live system is actually functioning properly"
    ],
    whatPragmattoDoes: [
      "Construct a detailed Go-Live Smoke Test Checklist covering all critical functions",
      "Stand by in real-time during cutover windows to execute live system sanity tests",
      "Verify production database connections, payment gateways, emails, and permissions",
      "Provide immediate go/no-go status recommendations based on empirical test results"
    ],
    deliverables: [
      "Go-Live Verification Protocol and Runbook",
      "Real-time cutover smoke test execution log",
      "Production certification report confirming all health checks passed",
      "Post-launch monitoring checklist for the initial 48 hours of operation"
    ],
    outcomes: [
      "Smooth, calm system go-lives with zero unverified configuration gaps",
      "Confidence that real customers will experience a flawless application on day one",
      "Clear documentation and accountability for all deployment verification steps"
    ]
  },

  "payment-and-pos-testing": {
    shortTitle: "Payment & POS Testing",
    tagline: "Flawless validation of credit card processing, POS terminal integrations, taxes, and refunds.",
    problemSummary:
      "Payment systems cannot afford a single defect. Miscalculated state sales taxes, gateway timeout disconnects, credit card tokenization errors, or POS terminal communication drops result in lost sales, compliance penalties, and customer outrage.",
    painPoints: [
      "Payment gateway dropouts during peak transaction hours leading to abandoned carts",
      "Inaccurate jurisdictional tax calculations creating accounting liability",
      "Refund or partial payment failures creating customer service escalations",
      "POS terminal hardware disconnects causing checkout register lines to stall"
    ],
    whatPragmattoDoes: [
      "Test end-to-end payment processing across sandbox and live accounts (Visa, MC, Amex, ACH, Apple Pay)",
      "Verify complex multi-jurisdiction tax calculation rules, discount codes, and tip adjustments",
      "Test edge cases: expired cards, insufficient funds, network timeouts, refunds, and chargebacks",
      "Validate physical POS terminal communication, receipt printing, and daily register batch reconciliations"
    ],
    deliverables: [
      "Payment & POS Validation Test Suite covering all payment scenarios",
      "Tax calculation and reconciliation audit report",
      "Gateway error-handling verification matrix (timeouts, declines, retries)",
      "PCI-DSS compliant testing protocols ensuring zero cardholder data exposure"
    ],
    outcomes: [
      "100% dependable transaction processing without dropped sales",
      "Accurate tax collection aligned with jurisdictional regulations",
      "Frictionless checkout experience in-store and online"
    ]
  },

  // 4. Improve Existing Software
  "erp-support-and-improvements": {
    shortTitle: "ERP Support & Improvements",
    tagline: "Practical enhancements, reporting tweaks, and workflow support for your existing ERP platform.",
    problemSummary:
      "Enterprise Resource Planning systems like SAP, NetSuite, Epicor, Dynamics, or custom ERPs power your daily operations. However, getting your original implementation vendor to make simple workflow adjustments often takes months and costs thousands of dollars.",
    painPoints: [
      "Exorbitant vendor consulting rates for minor screen tweaks and workflow changes",
      "Staff forced into manual spreadsheet workarounds because the ERP doesn't match current processes",
      "Slow ERP response times and unoptimized database queries frustrating staff",
      "Long backlogs of internal change requests that never get prioritized by software vendors"
    ],
    whatPragmattoDoes: [
      "Review your existing ERP configuration, custom scripts, and integration endpoints",
      "Implement surgical workflow improvements, custom fields, and automated alerts directly",
      "Optimize slow queries and streamline cluttered user forms for daily users",
      "Build custom reporting views and automated exports connecting to your existing ERP data"
    ],
    deliverables: [
      "Direct ERP workflow and form enhancements",
      "Custom query and reporting modules tailored to your operations",
      "Integration connectors syncing ERP data with other tools",
      "Thorough testing and documentation for every configuration change"
    ],
    outcomes: [
      "Maximize the value of your existing ERP investment without replacing it",
      "Rapid turnaround for changes that save your team hours every week",
      "Significant reduction in ongoing ERP vendor consulting expenses"
    ]
  },

  "salesforce-enhancements-and-support": {
    shortTitle: "Salesforce Enhancements & Support",
    tagline: "Maximize Salesforce efficiency with custom flows, clean layouts, and targeted automation.",
    problemSummary:
      "Over years of use, Salesforce instances become weighed down by hundreds of unused fields, deprecated Process Builders, cluttered page layouts, and broken validation rules. Sales and service teams get frustrated, data quality drops, and CRM adoption declines.",
    painPoints: [
      "Cluttered page layouts slowing down sales reps when logging calls and deals",
      "Broken automation rules causing notifications to fail or loops to trigger",
      "High costs of full-time Salesforce administrators for small and medium businesses",
      "Inconsistent pipeline data making sales forecasting unreliable"
    ],
    whatPragmattoDoes: [
      "Clean up cluttered page layouts and consolidate redundant custom fields",
      "Migrate legacy Workflow Rules and Process Builders to modern, fast Salesforce Flows",
      "Implement validation rules and automated field updates that maintain data cleanliness",
      "Build tailored reporting dashboards and pipeline views for sales managers"
    ],
    deliverables: [
      "Streamlined Lightning page layouts optimized for user speed",
      "Modernized Salesforce Flows replacing brittle legacy automation",
      "Custom reports and executive dashboards for real-time pipeline visibility",
      "Data hygiene audit and duplicate management rules"
    ],
    outcomes: [
      "Significantly faster deal logging and higher CRM adoption by sales reps",
      "Accurate pipeline visibility and reliable revenue forecasting",
      "Clean, scalable Salesforce architecture ready for business expansion"
    ]
  },

  "application-maintenance": {
    shortTitle: "Application Maintenance",
    tagline: "Ongoing maintenance, security patching, and bug fixing to keep custom business applications healthy.",
    problemSummary:
      "Custom internal applications and web tools run critical business operations, but over time, underlying libraries become obsolete, security vulnerabilities emerge, and changing browser standards introduce glitches. Without routine maintenance, systems steadily degrade.",
    painPoints: [
      "Internal applications crashing unexpectedly with nobody knowing who built them",
      "Unpatched security vulnerabilities exposing company and customer data to risk",
      "Outdated software libraries that can no longer run on modern servers or cloud environments",
      "Lack of documented architecture, making fixes slow and risky"
    ],
    whatPragmattoDoes: [
      "Conduct a comprehensive codebase and dependency security audit",
      "Upgrade outdated frameworks, libraries, and runtime environments safely",
      "Fix lingering performance bottlenecks, memory leaks, and recurring crashes",
      "Establish routine automated backups, monitoring, and error alerts"
    ],
    deliverables: [
      "Upgraded and secured application codebase",
      "Dependency audit and vulnerability remediation report",
      "Automated server monitoring and crash reporting setup",
      "Updated technical documentation and deployment runbooks"
    ],
    outcomes: [
      "Guaranteed uptime and stability for mission-critical internal tools",
      "Protected company data with modern security standards",
      "Extended lifespan for existing software investments without costly rebuilds"
    ]
  },

  "website-updates": {
    shortTitle: "Website Updates",
    tagline: "Rapid updates, feature additions, and speed optimization for your corporate web properties.",
    problemSummary:
      "Your corporate website is your digital storefront, but making updates often becomes an ordeal—web design agencies take weeks to reply, simple text or product changes sit in queues, and slow page load speeds hurt mobile visitor engagement and Google rankings.",
    painPoints: [
      "Waiting weeks for external agencies to implement simple layout or text updates",
      "Broken forms or contact buttons causing lost customer inquiries",
      "Slow loading times and poor mobile responsiveness driving away visitors",
      "Outdated product specs, team pages, or compliance notices lingering on the site"
    ],
    whatPragmattoDoes: [
      "Execute fast, precision content and layout updates across your web properties",
      "Optimize image assets, scripts, and server caching to dramatically improve load speeds",
      "Test and verify all contact forms, quote request calculators, and mobile layouts",
      "Implement clean, modern design tweaks that reflect your brand credibility"
    ],
    deliverables: [
      "Updated, fully responsive web pages tested across all screen sizes",
      "Performance optimization report showing improved Core Web Vitals",
      "Functional testing of all contact forms with verified email deliverability",
      "Clean, maintainable code updates without bloated plugins"
    ],
    outcomes: [
      "Rapid turnaround for marketing and product changes within days, not weeks",
      "Higher visitor engagement and conversion with fast, responsive pages",
      "Zero lost leads due to broken contact or inquiry forms"
    ]
  },

  "feature-improvements": {
    shortTitle: "Feature Improvements",
    tagline: "Add the specific buttons, filters, and workflow tweaks your staff have been asking for.",
    problemSummary:
      "Existing software might handle 80% of what your business needs, but that missing 20% forces employees into frustrating manual workarounds in Excel. Often, all that is needed is an additional filter, an automated export button, or a custom calculation.",
    painPoints: [
      "Staff forced into tedious external workarounds because software lacks one specific button or filter",
      "Commercial software vendors refusing to build the feature your team needs",
      "Frustration and lost hours copying data out of the system just to calculate a simple metric",
      "Hesitation to replace the entire software just for a few missing features"
    ],
    whatPragmattoDoes: [
      "Analyze the exact missing capability and how it connects to your existing software",
      "Design and code surgical feature additions that blend seamlessly into the existing UI",
      "Verify that the new feature interacts safely with existing databases and APIs",
      "Deploy with complete testing and zero disruption to ongoing operations"
    ],
    deliverables: [
      "Fully integrated custom feature addition",
      "Updated UI elements matching existing design conventions",
      "Verification test results proving zero adverse impact on existing features",
      "User guide explaining how to use the new capability"
    ],
    outcomes: [
      "Eliminate clunky manual workarounds and close functional gaps",
      "Empower employees with the exact tools they need to do their jobs faster",
      "Extend software utility without paying for expensive enterprise upgrades"
    ]
  },

  "bug-fixes-and-system-integrations": {
    shortTitle: "Bug Fixes & System Integrations",
    tagline: "Direct diagnostic troubleshooting and stable integration connectors for existing systems.",
    problemSummary:
      "Intermittent bugs that appear randomly under specific conditions can baffle internal teams. Similarly, connecting a legacy software system to a new cloud service often fails due to complex data formats, lack of documentation, or incompatible network protocols.",
    painPoints: [
      "Elusive bugs that occur intermittently and disrupt daily business operations",
      "Internal IT or vendors pointing fingers at each other when two systems fail to communicate",
      "Data getting dropped between legacy on-premises databases and modern cloud portals",
      "Band-aid fixes that break again every time the software restarts"
    ],
    whatPragmattoDoes: [
      "Conduct in-depth diagnostic log analysis and recreate elusive bugs in sandbox environments",
      "Identify the true root cause—race conditions, memory limits, character encodings, or logic flaws",
      "Apply permanent code and architecture fixes rather than temporary superficial patches",
      "Engineer robust, documented integration connectors that bridge incompatible platforms"
    ],
    deliverables: [
      "Root-cause diagnostic summary and permanent code fix",
      "Integration connector service with automated error handling and logging",
      "Automated health-check monitor verifying ongoing integration uptime",
      "Post-fix verification testing confirming the bug is permanently eliminated"
    ],
    outcomes: [
      "Permanent resolution of nagging software glitches that wasted employee time",
      "Stable, seamless data flow between old and new systems",
      "Restored stability and reliability across your operational software ecosystem"
    ]
  },

  // 5. Build Small Internal Tools
  "internal-dashboards": {
    shortTitle: "Internal Dashboards",
    tagline: "Custom real-time operational and KPI dashboards built exactly for your decision makers.",
    problemSummary:
      "Commercial Business Intelligence (BI) platforms are often bloated, expensive per user seat, and require specialized consultants to maintain. Operations managers often just need a fast, simple screen that displays today's production output, order backlog, and delivery status in real time.",
    painPoints: [
      "Managers flying blind on daily operations because reports take days to compile",
      "Expensive per-seat licensing fees for complex corporate BI tools that staff find confusing",
      "Inability to display simple, real-time KPI screens on manufacturing or warehouse shop floors",
      "Scattered data across multiple databases preventing a unified operational overview"
    ],
    whatPragmattoDoes: [
      "Identify the top 5 to 10 operational metrics that actually drive your business decisions",
      "Build a lightweight, lightning-fast web dashboard connecting directly to your live data",
      "Optimize visual layouts for desktop monitors, tablets, or wall-mounted shop floor screens",
      "Include auto-refresh and simple date filtering with zero complicated configuration needed"
    ],
    deliverables: [
      "Custom responsive web dashboard application",
      "Optimized real-time database queries ensuring sub-second load times",
      "Wall-display and mobile-responsive layouts",
      "Self-hosted or cloud deployment with complete source code ownership"
    ],
    outcomes: [
      "Real-time operational visibility for immediate decision making",
      "Shop-floor alignment with clear visual goals and progress tracking",
      "Zero recurring per-user software subscription fees"
    ]
  },

  "workflow-tools": {
    shortTitle: "Workflow Tools",
    tagline: "Focused lightweight applications that guide internal teams through multi-step company procedures.",
    problemSummary:
      "Managing complex internal handoffs—such as machine inspection checklists, engineering change approvals, or return merchandise authorizations (RMA)—via email threads and spreadsheets creates confusion, lost documents, and lack of accountability.",
    painPoints: [
      "Critical procedures falling through the cracks because requests get buried in email inboxes",
      "No clear audit trail showing who approved what step or when an inspection occurred",
      "Spreadsheets accidentally overwritten or corrupted during multi-user editing",
      "Frustration among staff when handoffs between departments are delayed"
    ],
    whatPragmattoDoes: [
      "Map out the exact sequential stages, required fields, and approval gates of your procedure",
      "Build a focused, browser-based internal workflow tool tailored directly to your process",
      "Implement role-based permissions, automated handoff alerts, and electronic sign-offs",
      "Provide complete historical audit trails with timestamped action logs"
    ],
    deliverables: [
      "Custom internal workflow web application",
      "Role-based access control and approval hierarchy",
      "Automated email and webhook notifications for pending tasks",
      "Searchable history archive for compliance and quality audits"
    ],
    outcomes: [
      "100% accountability with clear status tracking for every active workflow",
      "Faster turnaround times across cross-departmental handoffs",
      "Effortless audit readiness with complete digital records"
    ]
  },

  "data-entry-tools": {
    shortTitle: "Data Entry Tools",
    tagline: "Custom data collection forms with real-time validation to eliminate bad data at the point of entry.",
    problemSummary:
      "When employees enter complex data into clunky ERP screens or generic spreadsheets, mistakes are inevitable. A custom-built, streamlined data-entry interface with keyboard shortcuts, auto-complete dropdowns, and instant validation checks speeds up entry tenfold while preventing errors.",
    painPoints: [
      "Staff taking minutes to enter records that should take seconds due to confusing software UI",
      "Frequent data-entry typos and missing required fields discovered only after submission",
      "High training time required before new hires can navigate complex legacy entry screens",
      "Eye strain and fatigue from cluttered, decades-old enterprise software interfaces"
    ],
    whatPragmattoDoes: [
      "Design clean, distraction-free entry forms prioritizing keyboard navigation and high speed",
      "Incorporate instant client-side validation, auto-lookup against master databases, and smart defaults",
      "Implement batch entry tables with instant error highlighting before submission",
      "Connect submissions directly to your backend database or ERP with atomic transactions"
    ],
    deliverables: [
      "High-speed, custom data-entry web interface",
      "Real-time validation engine catching errors before database commit",
      "Keyboard shortcut and barcode-scanner friendly input architecture",
      "Direct API/database connector with rollback safety"
    ],
    outcomes: [
      "Up to 5x faster data entry speeds for high-volume administrative staff",
      "Zero dirty or invalid data entering your core business databases",
      "Dramatically reduced onboarding and training time for new team members"
    ]
  },

  "tracking-systems": {
    shortTitle: "Tracking Systems",
    tagline: "Purpose-built inventory, equipment, RMA, and job-order tracking systems.",
    problemSummary:
      "Commercial inventory and tracking platforms are often rigid, forcing your shop floor to change physical habits to match arbitrary software requirements. A purpose-built tracking tool aligns directly with your physical bins, serial numbering schemes, and shop floor staging areas.",
    painPoints: [
      "Lost inventory or misplaced equipment causing production line delays",
      "Commercial tracking software demanding complex steps that staff bypass or ignore",
      "Spreadsheet-based tracking files getting out of date the moment someone forgets to update a cell",
      "Lack of real-time visibility into which workstation a job order is currently stationed at"
    ],
    whatPragmattoDoes: [
      "Map out the exact physical flow of items, tools, returns, or job tickets through your facility",
      "Build a clean tracking web application compatible with barcode scanners and mobile tablets",
      "Implement simple scan-to-move, scan-to-inspect, and scan-to-ship workflows",
      "Provide real-time location and status overviews accessible by anyone on the network"
    ],
    deliverables: [
      "Custom tracking application tailored to your facility's physical layout",
      "Barcode/QR code scanning integration and label printing utilities",
      "Real-time location, stage, and aging status dashboard",
      "Historical movement log tracking every item transition with timestamps"
    ],
    outcomes: [
      "Complete, real-time visibility into all active jobs, inventory, and equipment",
      "Elimination of lost inventory and wasted time searching physical floors",
      "High adoption by shop-floor staff because the tool is fast and intuitive"
    ]
  },

  "reporting-tools": {
    shortTitle: "Reporting Tools",
    tagline: "On-demand data extraction, query generators, and export utilities for business teams.",
    problemSummary:
      "Business managers frequently need custom slices of data—such as orders shipped to a specific region last month or scrap rates by machine—but must wait days for an overworked IT person to write a custom database query. A custom reporting tool puts instant data extraction in managers' hands.",
    painPoints: [
      "Managers waiting days for basic operational reports needed for immediate client or vendor meetings",
      "Overburdened IT staff spending valuable engineering hours running manual SQL queries",
      "Risk of ad-hoc queries locking production databases when written without proper indexes",
      "Difficulty exporting data in clean, pre-formatted Excel files ready for presentation"
    ],
    whatPragmattoDoes: [
      "Build a secure self-service web tool where managers select filters, date ranges, and parameters",
      "Write optimized, read-only database queries that execute instantly without locking live tables",
      "Provide instant exports to beautifully formatted Excel, CSV, or PDF files with one click",
      "Implement role-based permissions to ensure sensitive financial data remains protected"
    ],
    deliverables: [
      "Self-service custom reporting web interface",
      "Optimized query library tailored to your most frequent operational inquiries",
      "One-click Excel/CSV/PDF export engine with pre-applied headers and calculations",
      "Role-based security ensuring managers access only authorized metrics"
    ],
    outcomes: [
      "Instant answers for managers in seconds rather than waiting days for IT support",
      "Hours of valuable engineering time saved from manual report generation",
      "Safe, read-optimized database access preventing operational slowdowns"
    ]
  },

  "custom-business-utilities": {
    shortTitle: "Custom Business Utilities",
    tagline: "Fast, focused micro-tools engineered to solve specific operational friction points.",
    problemSummary:
      "Every manufacturing and SMB operation has unique requirements—custom unit-of-measure conversions, proprietary pricing formulas, specialized file-format converters, or automated shipping label generators—that commercial software never supports out of the box.",
    painPoints: [
      "Employees performing complex multi-step math on physical calculators or risky spreadsheets",
      "Proprietary file formats requiring awkward, manual translation steps between machines",
      "High cost of commercial software that only solves a fraction of your unique calculation needs",
      "Human calculation errors leading to costly manufacturing scrap or misquoted customer bids"
    ],
    whatPragmattoDoes: [
      "Isolate the exact mathematical formula, file transformation, or logic rule causing friction",
      "Engineer a focused, lightweight web or desktop utility that executes the exact task instantly",
      "Embed safety checks, tolerance ranges, and instant validation to prevent calculation errors",
      "Provide a clean, responsive interface that operates reliably on any company computer"
    ],
    deliverables: [
      "Dedicated custom business utility application",
      "Precision calculation or file transformation engine verified against test data",
      "Instant copy/export functionality connecting output directly to downstream workflows",
      "Comprehensive documentation and source code delivery"
    ],
    outcomes: [
      "100% mathematical precision and consistency across all team members",
      "Hours of repetitive manual calculation and conversion work eliminated",
      "A tailored software tool built around your business, not someone else's template"
    ]
  }
};

// Fallback generator for any work item not explicitly in knowledge base
const generateFallbackWork = (service, rawWorkTitle) => {
  const title = rawWorkTitle || "Technical Task";
  const serviceTitle = service ? service.title : "Technology Services";
  const serviceCategory = service ? service.category : "Technical Solutions";

  return {
    shortTitle: title,
    tagline: `Focused, practical technical delivery to solve and improve ${title.toLowerCase()} for your business.`,
    problemSummary: `Businesses frequently encounter friction when managing ${title.toLowerCase()}. Without dedicated technical capability, these challenges cause operational delays, data inconsistencies, and unnecessary manual workarounds across your team.`,
    painPoints: [
      `Friction and delays in daily operations related to ${title.toLowerCase()}`,
      "Lack of specialized technical capability to address the root problem directly",
      "Inefficient manual workarounds that consume staff hours and introduce risk",
      "Traditional consulting engagements turning a focused task into a multi-month project"
    ],
    whatPragmattoDoes: [
      `Carefully evaluate your existing workflow, data structures, and rules for ${title.toLowerCase()}`,
      "Define the simplest, most practical technical solution to resolve the exact friction point",
      "Build, test, and implement the necessary code, script, or configuration changes",
      "Verify outcomes thoroughly in your operational environment before signing off"
    ],
    deliverables: [
      `Custom technical solution tailored to ${title.toLowerCase()}`,
      "Quality validation and edge-case testing verification report",
      "Clear documentation and operational runbook for your internal team",
      "Direct technical support during rollout and operational verification"
    ],
    outcomes: [
      "Immediate elimination of operational friction and manual bottlenecks",
      "Reliable, predictable results delivered without unnecessary consulting overhead",
      "Clear accountability with direct technical execution from start to finish"
    ]
  };
};

/**
 * Retrieve comprehensive work detail data by serviceId and workSlug.
 */
export function getWorkDetail(serviceId, workSlug) {
  const { services } = siteContent;
  const service = services.find((s) => s.id === serviceId) || services[0];

  // Match feature in service
  const matchedFeature =
    service.features.find((feat) => slugify(feat) === workSlug) ||
    service.features.find((feat) => feat.toLowerCase() === (workSlug || "").replace(/-/g, " ").toLowerCase()) ||
    service.features[0];

  const canonicalSlug = slugify(matchedFeature);
  const detailData =
    workKnowledgeBase[canonicalSlug] ||
    generateFallbackWork(service, matchedFeature);

  // Other sibling works in the same service (for cross-navigation)
  const siblingWorks = service.features
    .filter((f) => f !== matchedFeature)
    .map((f) => ({
      title: f,
      slug: slugify(f),
      tagline:
        (workKnowledgeBase[slugify(f)] && workKnowledgeBase[slugify(f)].tagline) ||
        `Practical technical capability for ${f.toLowerCase()}.`
    }));

  return {
    id: canonicalSlug,
    title: matchedFeature,
    serviceId: service.id,
    serviceTitle: service.title,
    serviceCategory: service.category,
    serviceIcon: service.icon,
    ...detailData,
    siblingWorks
  };
}
