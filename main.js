// ══════════════════════════════════════════════════════════
// SINGLE SOURCE OF TRUTH — used by index.html, tasks.html, calendar.html
// Dates drive both the calendar spans/milestones and (soon) task due dates.
// Edit via the floating "Edit Dashboard" button (bottom-right) on any page.
// ══════════════════════════════════════════════════════════

// ===PROJECTS_START===
const projects = [
  {
    "title": "ACTUS",
    "integrator": "MODO8",
    "status": "production",
    "state": "On-site CMES visit scheduled",
    "address": "Wautoma Plant Milk Specialties Global E. Chicago Road | Wautoma, WI 54982 | (612) 439-5212",
    "notes": "complete",
    "install": false,
    "dates": {
      "engineeringDue": null,
      "partsOrderDate": null,
      "downpaymentDate": null,
      "leadTimeWeeks": null,
      "buildLabel": "Production",
      "buildStart": "2026-06-10",
      "buildEnd": "2026-07-01",
      "shipDate": "2026-07-01"
    },
    "tasks": [
      {
        "id": "actus-1",
        "title": "Engineering complete — drawings done",
        "tags": [
          "engineering"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "actus-2",
        "title": "Parts ordered (4-wk lead time)",
        "tags": [
          "ops"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "actus-3",
        "title": "Change order invoice issued ($23,076)",
        "tags": [
          "invoice"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "actus-4",
        "title": "Complete teardown window and document findings",
        "tags": [
          "engineering"
        ],
        "due": "Jun 25",
        "checked": true
      },
      {
        "id": "actus-5",
        "title": "Confirm CMES on-site visit logistics",
        "tags": [
          "ops"
        ],
        "due": "Jun 25",
        "checked": false
      },
      {
        "id": "actus-6",
        "title": "Coordinate freight — confirm carrier for Jul 1 ship",
        "tags": [
          "logistics"
        ],
        "due": "Jun 27",
        "checked": true
      },
      {
        "id": "actus-7",
        "title": "Send SAT invoice ($23,013) on ship date",
        "tags": [
          "invoice"
        ],
        "due": "Jul 1",
        "checked": false
      },
      {
        "id": "actus-8",
        "title": "Confirm Jul 13 site support schedule with CMES",
        "tags": [
          "ops"
        ],
        "due": "Jul 5",
        "checked": false
      }
    ]
  },
  {
    "title": "OCADO",
    "integrator": "Temple Controls",
    "status": "production",
    "state": "Working On Phased Shipping and Installation",
    "address": "9091 88th Ave, Pleasant Prairie, WI",
    "notes": "",
    "install": false,
    "dates": {
      "engineeringDue": null,
      "partsOrderDate": null,
      "downpaymentDate": null,
      "leadTimeWeeks": null,
      "buildLabel": "Production",
      "buildStart": "2026-06-01",
      "buildEnd": "2026-07-01",
      "shipDate": "2026-07-01"
    },
    "tasks": [
      {
        "id": "ocado-1",
        "title": "Engineering complete",
        "tags": [
          "engineering"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "ocado-2",
        "title": "Parts ordered and received",
        "tags": [
          "ops"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "ocado-3",
        "title": "Base PO (30%) and Engineering (30%) invoiced",
        "tags": [
          "invoice"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "ocado-4",
        "title": "Change order down payment ($53,853) — pending receipt",
        "tags": [
          "invoice",
          "urgent"
        ],
        "due": "Jun 17",
        "checked": false
      },
      {
        "id": "ocado-5",
        "title": "Install pre-ship invoice ($35,400) — pending receipt",
        "tags": [
          "invoice",
          "urgent"
        ],
        "due": "Jun 17",
        "checked": false
      },
      {
        "id": "ocado-6",
        "title": "Finalize phased shipping & installation plan with Temple Controls",
        "tags": [
          "ops",
          "urgent"
        ],
        "due": "Jun 20",
        "checked": false
      },
      {
        "id": "ocado-7",
        "title": "Confirm Pleasant Prairie site readiness",
        "tags": [
          "logistics"
        ],
        "due": "Jun 25",
        "checked": false
      },
      {
        "id": "ocado-8",
        "title": "Ship — send initial shipment invoice ($109,293)",
        "tags": [
          "invoice",
          "logistics"
        ],
        "due": "Jul 1",
        "checked": false
      },
      {
        "id": "ocado-9",
        "title": "Coordinate install labor release invoice ($30,975)",
        "tags": [
          "invoice"
        ],
        "due": "Jul 1",
        "checked": false
      },
      {
        "id": "ocado-10",
        "title": "Send change order final invoice ($53,853) upon install complete",
        "tags": [
          "invoice"
        ],
        "due": "Jul 15",
        "checked": false
      },
      {
        "id": "ocado-11",
        "title": "Send install complete invoice ($22,125) and base system arrival ($36,431)",
        "tags": [
          "invoice"
        ],
        "due": "Aug 1",
        "checked": false
      }
    ]
  },
  {
    "title": "ADI / MALIN",
    "integrator": "MALIN",
    "status": "production",
    "state": "Working On Phased Shipping",
    "address": "3200 Richmond Rd, Easton, PA 18040",
    "notes": "",
    "install": false,
    "dates": {
      "engineeringDue": null,
      "partsOrderDate": null,
      "downpaymentDate": null,
      "leadTimeWeeks": null,
      "buildLabel": "Production",
      "buildStart": "2026-06-08",
      "buildEnd": "2026-06-22",
      "shipDate": "2026-06-22"
    },
    "tasks": [
      {
        "id": "adi-1",
        "title": "Engineering complete",
        "tags": [
          "engineering"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "adi-2",
        "title": "Parts ordered and received",
        "tags": [
          "ops"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "adi-3",
        "title": "Downpayment (40%) received",
        "tags": [
          "invoice"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "adi-4",
        "title": "Engineering completion invoiced ($83,550)",
        "tags": [
          "invoice"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "adi-5",
        "title": "Coordinate phased shipping to Easton, PA",
        "tags": [
          "logistics"
        ],
        "due": "Jun 20",
        "checked": false
      },
      {
        "id": "adi-6",
        "title": "Ship — send initial shipment invoice ($55,700)",
        "tags": [
          "invoice",
          "logistics"
        ],
        "due": "Jun 22",
        "checked": false
      },
      {
        "id": "adi-7",
        "title": "Send final shipment invoice ($27,850) upon completion",
        "tags": [
          "invoice"
        ],
        "due": "Jun 26",
        "checked": false
      }
    ]
  },
  {
    "title": "ARHAUS",
    "integrator": "Equipment Depot",
    "status": "pulling",
    "state": "Pulling job",
    "address": "51 East Hines Hill Rd, Boston Heights, OH 44236 | James Coddington 216-276-3956",
    "notes": "",
    "install": false,
    "dates": {
      "engineeringDue": null,
      "partsOrderDate": null,
      "downpaymentDate": null,
      "leadTimeWeeks": null,
      "buildLabel": "Pulling",
      "buildStart": "2026-06-11",
      "buildEnd": "2026-07-02",
      "shipDate": "2026-07-02"
    },
    "tasks": [
      {
        "id": "arhaus-1",
        "title": "Downpayment (40%) received",
        "tags": [
          "invoice"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "arhaus-2",
        "title": "Engineering complete — invoiced ($14,596.50)",
        "tags": [
          "engineering",
          "invoice"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "arhaus-3",
        "title": "Parts ordered and received",
        "tags": [
          "ops"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "arhaus-4",
        "title": "Pull all components — confirm everything staged",
        "tags": [
          "ops",
          "urgent"
        ],
        "due": "Jun 25",
        "checked": false
      },
      {
        "id": "arhaus-5",
        "title": "Confirm contact: James Coddington 216-276-3956",
        "tags": [
          "ops"
        ],
        "due": "Jun 25",
        "checked": false
      },
      {
        "id": "arhaus-6",
        "title": "Book freight to Boston Heights, OH",
        "tags": [
          "logistics"
        ],
        "due": "Jun 27",
        "checked": false
      },
      {
        "id": "arhaus-7",
        "title": "Ship — send initial shipment invoice ($9,731)",
        "tags": [
          "invoice",
          "logistics"
        ],
        "due": "Jul 2",
        "checked": false
      },
      {
        "id": "arhaus-8",
        "title": "Send final shipment invoice ($4,865.50)",
        "tags": [
          "invoice"
        ],
        "due": "Aug 1",
        "checked": false
      }
    ]
  },
  {
    "title": "FRONTIER DENTAL",
    "integrator": "KPI",
    "status": "purchasing",
    "state": "Purchased — CHANGE ORDER?",
    "address": "2500 W. Carey Ave, Bldg F, North Las Vegas, NV 89032",
    "notes": "",
    "install": false,
    "dates": {
      "engineeringDue": null,
      "partsOrderDate": null,
      "downpaymentDate": null,
      "leadTimeWeeks": null,
      "buildLabel": "Production",
      "buildStart": "2026-06-30",
      "buildEnd": "2026-07-21",
      "shipDate": "2026-07-21"
    },
    "tasks": [
      {
        "id": "fd-1",
        "title": "PO placement (30%) received — $105,000",
        "tags": [
          "invoice"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "fd-2",
        "title": "Engineering complete — info sent to purchasing",
        "tags": [
          "engineering"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "fd-3",
        "title": "Clarify change order status — confirm scope with KPI",
        "tags": [
          "ops",
          "urgent"
        ],
        "due": "Jun 19",
        "checked": false
      },
      {
        "id": "fd-4",
        "title": "Invoice start of manufacturing ($70,000) — Net 30",
        "tags": [
          "invoice",
          "urgent"
        ],
        "due": "Jun 19",
        "checked": false
      },
      {
        "id": "fd-5",
        "title": "Confirm parts arrival — begin production (target Jun 30)",
        "tags": [
          "ops"
        ],
        "due": "Jun 30",
        "checked": false
      },
      {
        "id": "fd-6",
        "title": "Invoice manufacturing complete ($70,000) — Net 30",
        "tags": [
          "invoice"
        ],
        "due": "Jun 30",
        "checked": false
      },
      {
        "id": "fd-7",
        "title": "QA and stage for North Las Vegas, NV shipment",
        "tags": [
          "logistics"
        ],
        "due": "Jul 19",
        "checked": false
      },
      {
        "id": "fd-8",
        "title": "Ship — send start of shipping invoice ($52,500)",
        "tags": [
          "invoice",
          "logistics"
        ],
        "due": "Jul 21",
        "checked": false
      },
      {
        "id": "fd-9",
        "title": "Confirm delivery (2 days) — send delivery invoice ($52,500)",
        "tags": [
          "invoice"
        ],
        "due": "Jul 23",
        "checked": false
      }
    ]
  },
  {
    "title": "CONVEYOR ON CASTERS",
    "integrator": "Formic",
    "status": "purchasing",
    "state": "Paid in full — freight to be invoiced at ship",
    "address": "979 Corporate Blvd, Linthicum Heights, MD 21090",
    "notes": "",
    "install": false,
    "dates": {
      "engineeringDue": "2026-06-19",
      "partsOrderDate": "2026-06-22",
      "downpaymentDate": null,
      "leadTimeWeeks": null,
      "buildLabel": "Production",
      "buildStart": "2026-07-20",
      "buildEnd": "2026-08-03",
      "shipDate": "2026-08-03"
    },
    "tasks": [
      {
        "id": "coc-1",
        "title": "Paid in full upfront ($4,938) — PO 101087",
        "tags": [
          "invoice"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "coc-2",
        "title": "Send engineering info to purchasing",
        "tags": [
          "engineering"
        ],
        "due": "Jun 19",
        "checked": false
      },
      {
        "id": "coc-3",
        "title": "Place parts order by Jun 22 (4-wk lead → parts arrive Jul 20)",
        "tags": [
          "ops"
        ],
        "due": "Jun 22",
        "checked": false
      },
      {
        "id": "coc-4",
        "title": "Confirm parts arrival — begin production (target Jul 20)",
        "tags": [
          "ops"
        ],
        "due": "Jul 20",
        "checked": false
      },
      {
        "id": "coc-5",
        "title": "Stage and prep for Linthicum Heights, MD shipment",
        "tags": [
          "logistics"
        ],
        "due": "Aug 1",
        "checked": false
      },
      {
        "id": "coc-6",
        "title": "Ship — generate and send freight invoice",
        "tags": [
          "invoice",
          "logistics"
        ],
        "due": "Aug 3",
        "checked": false
      },
      {
        "id": "coc-7",
        "title": "Confirm delivery receipt with Formic",
        "tags": [
          "ops"
        ],
        "due": "Aug 7",
        "checked": false
      }
    ]
  },
  {
    "title": "PITNEY BOS",
    "integrator": "Temple Controls",
    "status": "engineering",
    "state": "Working On CET Drawing",
    "address": "Pitney Bowes, 5071 W 74th St, Indianapolis, IN 46268",
    "notes": "",
    "install": false,
    "dates": {
      "engineeringDue": "2026-06-19",
      "partsOrderDate": "2026-06-26",
      "downpaymentDate": null,
      "leadTimeWeeks": null,
      "buildLabel": "Production",
      "buildStart": "2026-07-24",
      "buildEnd": "2026-07-27",
      "shipDate": "2026-07-27"
    },
    "tasks": [
      {
        "id": "pb-1",
        "title": "Downpayment received ($90,728) — MODO826048",
        "tags": [
          "invoice"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "pb-2",
        "title": "Complete CET drawing — engineering due THIS FRIDAY Jun 19",
        "tags": [
          "engineering",
          "urgent"
        ],
        "due": "Jun 19",
        "checked": false
      },
      {
        "id": "pb-3",
        "title": "Issue engineering completion invoice ($68,046) — Net 30",
        "tags": [
          "invoice",
          "urgent"
        ],
        "due": "Jun 19",
        "checked": false
      },
      {
        "id": "pb-4",
        "title": "Send engineering info to purchasing Jun 19",
        "tags": [
          "engineering"
        ],
        "due": "Jun 19",
        "checked": false
      },
      {
        "id": "pb-5",
        "title": "Place parts order by Jun 26 (4-wk lead → parts arrive Jul 24)",
        "tags": [
          "ops"
        ],
        "due": "Jun 26",
        "checked": false
      },
      {
        "id": "pb-6",
        "title": "Confirm parts arrival — begin production (target Jul 24)",
        "tags": [
          "ops"
        ],
        "due": "Jul 24",
        "checked": false
      },
      {
        "id": "pb-7",
        "title": "Ship to Indianapolis, IN — confirm carrier",
        "tags": [
          "logistics"
        ],
        "due": "Jul 25",
        "checked": false
      },
      {
        "id": "pb-8",
        "title": "Ship date Jul 27 — send initial shipment invoice ($68,046)",
        "tags": [
          "invoice",
          "logistics"
        ],
        "due": "Jul 27",
        "checked": false
      }
    ]
  },
  {
    "title": "LOLOI RUGS",
    "integrator": "AI",
    "status": "production",
    "state": "Justin Needs to Program",
    "address": "4550 Spring Valley Rd, Farmers Branch, TX 75244",
    "notes": "",
    "install": false,
    "dates": {
      "engineeringDue": null,
      "partsOrderDate": null,
      "downpaymentDate": null,
      "leadTimeWeeks": null,
      "buildLabel": "Production",
      "buildStart": "2026-07-09",
      "buildEnd": "2026-07-27",
      "shipDate": "2026-07-27"
    },
    "tasks": [
      {
        "id": "lr-1",
        "title": "Downpayment (50%) received ($93,563)",
        "tags": [
          "invoice"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "lr-2",
        "title": "Engineering complete",
        "tags": [
          "engineering"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "lr-3",
        "title": "Parts ordered (4-wk lead → arrive Jul 9)",
        "tags": [
          "ops"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "lr-4",
        "title": "Justin — complete robot programming before production start",
        "tags": [
          "engineering",
          "urgent"
        ],
        "due": "Jul 9",
        "checked": false
      },
      {
        "id": "lr-5",
        "title": "Confirm parts arrival — begin production (target Jul 9)",
        "tags": [
          "ops"
        ],
        "due": "Jul 9",
        "checked": false
      },
      {
        "id": "lr-6",
        "title": "QA test conveyor system",
        "tags": [
          "engineering"
        ],
        "due": "Jul 22",
        "checked": false
      },
      {
        "id": "lr-7",
        "title": "Book freight to Farmers Branch, TX",
        "tags": [
          "logistics"
        ],
        "due": "Jul 24",
        "checked": false
      },
      {
        "id": "lr-8",
        "title": "Ship — send final shipment invoice ($93,563 — Net 15)",
        "tags": [
          "invoice",
          "logistics"
        ],
        "due": "Jul 27",
        "checked": false
      }
    ]
  },
  {
    "title": "NEW HORIZONS",
    "integrator": "Formic",
    "status": "pre-procurement",
    "state": "Pre-procurement — FAT terms",
    "address": "211 Woodlawn Avenue, Norwalk, OH 44857",
    "notes": "",
    "install": false,
    "dates": {
      "engineeringDue": "2026-06-26",
      "partsOrderDate": "2026-07-03",
      "downpaymentDate": null,
      "leadTimeWeeks": null,
      "buildLabel": "Production",
      "buildStart": "2026-07-17",
      "buildEnd": "2026-07-31",
      "shipDate": "2026-07-31"
    },
    "tasks": [
      {
        "id": "nh-1",
        "title": "Order (30%) received ($60,799) — PO 101076",
        "tags": [
          "invoice"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "nh-2",
        "title": "Get design acceptance from Formic — invoice ($60,799)",
        "tags": [
          "invoice",
          "urgent"
        ],
        "due": "Jun 19",
        "checked": false
      },
      {
        "id": "nh-3",
        "title": "Complete engineering drawings",
        "tags": [
          "engineering",
          "urgent"
        ],
        "due": "Jun 26",
        "checked": false
      },
      {
        "id": "nh-4",
        "title": "Send engineering info to purchasing by Jun 26",
        "tags": [
          "engineering"
        ],
        "due": "Jun 26",
        "checked": false
      },
      {
        "id": "nh-5",
        "title": "Place parts order by Jul 3 (4-wk lead → arrive Jul 31)",
        "tags": [
          "ops"
        ],
        "due": "Jul 3",
        "checked": false
      },
      {
        "id": "nh-6",
        "title": "Confirm parts arrival — begin production (target Jul 31)",
        "tags": [
          "ops"
        ],
        "due": "Jul 31",
        "checked": false
      },
      {
        "id": "nh-7",
        "title": "Ship to Norwalk, OH — book freight",
        "tags": [
          "logistics"
        ],
        "due": "Jul 29",
        "checked": false
      },
      {
        "id": "nh-8",
        "title": "Ship Jul 31 — send FAT shipment invoice ($60,799)",
        "tags": [
          "invoice",
          "logistics"
        ],
        "due": "Jul 31",
        "checked": false
      },
      {
        "id": "nh-9",
        "title": "Confirm delivery & acceptance — send final invoice ($20,266 — Net 30)",
        "tags": [
          "invoice"
        ],
        "due": "Aug 30",
        "checked": false
      }
    ]
  },
  {
    "title": "SPARTAN NASH",
    "integrator": "Tompkins",
    "status": "engineering",
    "state": "Engineering — downpayment received",
    "address": "1300 West Elkhorn Avenue, Sioux Falls, SD 57101",
    "notes": "",
    "install": false,
    "dates": {
      "engineeringDue": "2026-06-26",
      "partsOrderDate": "2026-07-03",
      "downpaymentDate": null,
      "leadTimeWeeks": null,
      "buildLabel": "Production",
      "buildStart": "2026-07-31",
      "buildEnd": "2026-08-07",
      "shipDate": "2026-08-07"
    },
    "tasks": [
      {
        "id": "sn-1",
        "title": "Downpayment (50%) received ($49,318)",
        "tags": [
          "invoice"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "sn-2",
        "title": "Complete engineering drawings (deadline Jun 26)",
        "tags": [
          "engineering",
          "urgent"
        ],
        "due": "Jun 26",
        "checked": false
      },
      {
        "id": "sn-3",
        "title": "Issue engineering completion invoice ($29,591 — Net 15)",
        "tags": [
          "invoice"
        ],
        "due": "Jun 26",
        "checked": false
      },
      {
        "id": "sn-4",
        "title": "Send engineering info to purchasing by Jun 26",
        "tags": [
          "engineering"
        ],
        "due": "Jun 26",
        "checked": false
      },
      {
        "id": "sn-5",
        "title": "Place parts order by Jul 3 (4-wk lead → arrive Jul 31)",
        "tags": [
          "ops"
        ],
        "due": "Jul 3",
        "checked": false
      },
      {
        "id": "sn-6",
        "title": "Confirm parts arrival — begin production (target Jul 31)",
        "tags": [
          "ops"
        ],
        "due": "Jul 31",
        "checked": false
      },
      {
        "id": "sn-7",
        "title": "Ship to Sioux Falls, SD — book freight",
        "tags": [
          "logistics"
        ],
        "due": "Aug 5",
        "checked": false
      },
      {
        "id": "sn-8",
        "title": "Ship date Aug 7 — send shipment invoice ($19,727 — Net 30)",
        "tags": [
          "invoice",
          "logistics"
        ],
        "due": "Aug 7",
        "checked": false
      }
    ]
  },
  {
    "title": "R2",
    "integrator": "Automation Intelligence",
    "status": "engineering",
    "state": "Engineering — downpayment received",
    "address": "Automation Intelligence LLC, 6181 Taylor Dr, Flint, MI 48507",
    "notes": "",
    "install": false,
    "dates": {
      "engineeringDue": "2026-07-03",
      "partsOrderDate": "2026-07-10",
      "downpaymentDate": null,
      "leadTimeWeeks": null,
      "buildLabel": "Production",
      "buildStart": "2026-08-07",
      "buildEnd": "2026-08-17",
      "shipDate": "2026-08-17"
    },
    "tasks": [
      {
        "id": "r2-1",
        "title": "Downpayment (50%) received ($38,655) — MODO826014-R2",
        "tags": [
          "invoice"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "r2-2",
        "title": "Complete engineering drawings",
        "tags": [
          "engineering",
          "urgent"
        ],
        "due": "Jul 3",
        "checked": false
      },
      {
        "id": "r2-3",
        "title": "Verify ship-to address — Automation Intelligence, Flint, MI 48507",
        "tags": [
          "ops"
        ],
        "due": "Jun 19",
        "checked": false
      },
      {
        "id": "r2-4",
        "title": "Send engineering info to purchasing by Jul 3",
        "tags": [
          "engineering"
        ],
        "due": "Jul 3",
        "checked": false
      },
      {
        "id": "r2-5",
        "title": "Place parts order by Jul 10 (4-wk lead → arrive Aug 7)",
        "tags": [
          "ops"
        ],
        "due": "Jul 10",
        "checked": false
      },
      {
        "id": "r2-6",
        "title": "Confirm parts arrival — begin production (target Aug 7)",
        "tags": [
          "ops"
        ],
        "due": "Aug 7",
        "checked": false
      },
      {
        "id": "r2-7",
        "title": "Ship date Aug 17 — send ship notification invoice ($23,193 — Net 30)",
        "tags": [
          "invoice",
          "logistics"
        ],
        "due": "Aug 17",
        "checked": false
      },
      {
        "id": "r2-8",
        "title": "Confirm delivery — send delivery confirmation invoice ($15,462 — Net 30)",
        "tags": [
          "invoice"
        ],
        "due": "Sep 17",
        "checked": false
      }
    ]
  },
  {
    "title": "AMAZON CANADA",
    "integrator": "SJF",
    "status": "engineering",
    "state": "Engineering — downpayment received",
    "address": "Ryder, 1530 Gamble Pl, Winnipeg, MB R3T 1N6, Canada",
    "notes": "",
    "install": false,
    "dates": {
      "engineeringDue": "2026-06-26",
      "partsOrderDate": "2026-07-03",
      "downpaymentDate": null,
      "leadTimeWeeks": null,
      "buildLabel": "Production",
      "buildStart": "2026-07-31",
      "buildEnd": "2026-08-28",
      "shipDate": "2026-08-28"
    },
    "tasks": [
      {
        "id": "ac-1",
        "title": "Downpayment (40%) received ($71,142) — engineering started",
        "tags": [
          "invoice"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "ac-2",
        "title": "Complete engineering drawings (deadline Jun 26)",
        "tags": [
          "engineering",
          "urgent"
        ],
        "due": "Jun 26",
        "checked": false
      },
      {
        "id": "ac-3",
        "title": "Send engineering info to purchasing by Jun 26",
        "tags": [
          "engineering"
        ],
        "due": "Jun 26",
        "checked": false
      },
      {
        "id": "ac-4",
        "title": "Issue engineering completion invoice ($53,356 — Net 30)",
        "tags": [
          "invoice"
        ],
        "due": "Jun 26",
        "checked": false
      },
      {
        "id": "ac-5",
        "title": "Place parts order by Jul 3 (4-wk lead → arrive Jul 31)",
        "tags": [
          "ops"
        ],
        "due": "Jul 3",
        "checked": false
      },
      {
        "id": "ac-6",
        "title": "Confirm Canadian customs broker / freight forwarder for Winnipeg",
        "tags": [
          "logistics"
        ],
        "due": "Jul 15",
        "checked": false
      },
      {
        "id": "ac-7",
        "title": "Confirm parts arrival — begin production (target Jul 31)",
        "tags": [
          "ops"
        ],
        "due": "Jul 31",
        "checked": false
      },
      {
        "id": "ac-8",
        "title": "Coordinate Ryder receiving at 1530 Gamble Pl, Winnipeg MB",
        "tags": [
          "logistics"
        ],
        "due": "Aug 20",
        "checked": false
      },
      {
        "id": "ac-9",
        "title": "Ship date Aug 28 — send initial shipment invoice ($53,356 — Net 30)",
        "tags": [
          "invoice",
          "logistics"
        ],
        "due": "Aug 28",
        "checked": false
      }
    ]
  },
  {
    "title": "FORSYTH",
    "integrator": "CRG / Storage Solutions",
    "status": "pre-procurement",
    "state": "Pre-procurement — awaiting downpayment",
    "address": "Storage Solutions, 910 E. 169th Street, Westfield, IN 46074",
    "notes": "",
    "install": false,
    "dates": {
      "engineeringDue": "2026-07-03",
      "partsOrderDate": "2026-07-10",
      "downpaymentDate": null,
      "leadTimeWeeks": null,
      "buildLabel": "Production",
      "buildStart": "2026-08-07",
      "buildEnd": "2026-08-10",
      "shipDate": "2026-08-10"
    },
    "tasks": [
      {
        "id": "fy-1",
        "title": "Awaiting downpayment (50% — $20,570) — do not start engineering until received",
        "tags": [
          "invoice",
          "urgent"
        ],
        "due": "Jun 19",
        "checked": false
      },
      {
        "id": "fy-2",
        "title": "Confirm PO and payment terms with Storage Solutions",
        "tags": [
          "ops",
          "urgent"
        ],
        "due": "Jun 19",
        "checked": false
      },
      {
        "id": "fy-3",
        "title": "Complete engineering drawings once DP received",
        "tags": [
          "engineering"
        ],
        "due": "Jul 3",
        "checked": false
      },
      {
        "id": "fy-4",
        "title": "Send engineering info to purchasing by Jul 3",
        "tags": [
          "engineering"
        ],
        "due": "Jul 3",
        "checked": false
      },
      {
        "id": "fy-5",
        "title": "Place parts order by Jul 10 (4-wk lead → arrive Aug 7)",
        "tags": [
          "ops"
        ],
        "due": "Jul 10",
        "checked": false
      },
      {
        "id": "fy-6",
        "title": "Confirm parts arrival — begin production (target Aug 7)",
        "tags": [
          "ops"
        ],
        "due": "Aug 7",
        "checked": false
      },
      {
        "id": "fy-7",
        "title": "Ship to Westfield, IN — book freight",
        "tags": [
          "logistics"
        ],
        "due": "Aug 8",
        "checked": false
      },
      {
        "id": "fy-8",
        "title": "Ship date Aug 10 — send final shipment invoice ($20,570 — Net 15)",
        "tags": [
          "invoice",
          "logistics"
        ],
        "due": "Aug 10",
        "checked": false
      }
    ]
  },
  {
    "title": "NUMINA BOXOUT JAX",
    "integrator": "Numina Group",
    "status": "engineering",
    "state": "PO Received — Down Payment Invoiced",
    "address": "Boxout | 3750 Cisco Drive W, Unit 1 | Jacksonville, FL 32219",
    "notes": "",
    "install": false,
    "dates": {
      "engineeringDue": "2026-07-10",
      "partsOrderDate": "2026-07-17",
      "downpaymentDate": null,
      "leadTimeWeeks": null,
      "buildLabel": "Production",
      "buildStart": "2026-08-14",
      "buildEnd": "2026-09-14",
      "shipDate": "2026-09-14"
    },
    "tasks": [
      {
        "id": "nbj-1",
        "title": "PO received — down payment invoiced ($55,704) Invoice #843",
        "tags": [
          "invoice"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "nbj-2",
        "title": "Collect down payment ($55,704 — Net 0)",
        "tags": [
          "invoice",
          "urgent"
        ],
        "due": "Jul 25",
        "checked": false
      },
      {
        "id": "nbj-3",
        "title": "Complete engineering drawings",
        "tags": [
          "engineering"
        ],
        "due": "Jul 10",
        "checked": false
      },
      {
        "id": "nbj-4",
        "title": "Send engineering info to purchasing",
        "tags": [
          "engineering"
        ],
        "due": "Jul 10",
        "checked": false
      },
      {
        "id": "nbj-5",
        "title": "Issue 2nd payment invoice ($83,557) upon receipt of first payment — Net 30",
        "tags": [
          "invoice"
        ],
        "due": "Jul 10",
        "checked": false
      },
      {
        "id": "nbj-6",
        "title": "Place parts order by Jul 17 (4-wk lead → arrive Aug 14)",
        "tags": [
          "ops"
        ],
        "due": "Jul 17",
        "checked": false
      },
      {
        "id": "nbj-7",
        "title": "Confirm parts arrival — begin production (target Aug 14)",
        "tags": [
          "ops"
        ],
        "due": "Aug 14",
        "checked": false
      },
      {
        "id": "nbj-8",
        "title": "Ship to Jacksonville, FL — book freight",
        "tags": [
          "logistics"
        ],
        "due": "Sep 12",
        "checked": false
      },
      {
        "id": "nbj-9",
        "title": "Ship date Sep 14 — send initial shipment invoice ($83,557 — Net 30)",
        "tags": [
          "invoice",
          "logistics"
        ],
        "due": "Sep 14",
        "checked": false
      },
      {
        "id": "nbj-10",
        "title": "Confirm system arrival — send final invoice ($55,704 — Net 30)",
        "tags": [
          "invoice"
        ],
        "due": "Oct 14",
        "checked": false
      }
    ]
  },
  {
    "title": "NUMINA BOXOUT FTW",
    "integrator": "Numina Group",
    "status": "engineering",
    "state": "PO Received — Down Payment Invoiced",
    "address": "Ft Worth, TX",
    "notes": "",
    "install": false,
    "dates": {
      "engineeringDue": "2026-07-10",
      "partsOrderDate": "2026-07-17",
      "downpaymentDate": null,
      "leadTimeWeeks": null,
      "buildLabel": "Production",
      "buildStart": "2026-08-14",
      "buildEnd": "2026-09-14",
      "shipDate": "2026-09-14"
    },
    "tasks": [
      {
        "id": "nfw-1",
        "title": "PO received — down payment invoiced ($58,901) Invoice #844",
        "tags": [
          "invoice"
        ],
        "due": null,
        "checked": true
      },
      {
        "id": "nfw-2",
        "title": "Collect down payment ($58,900.80 — Net 0)",
        "tags": [
          "invoice",
          "urgent"
        ],
        "due": "Jul 25",
        "checked": false
      },
      {
        "id": "nfw-3",
        "title": "Complete engineering drawings",
        "tags": [
          "engineering"
        ],
        "due": "Jul 10",
        "checked": false
      },
      {
        "id": "nfw-4",
        "title": "Send engineering info to purchasing",
        "tags": [
          "engineering"
        ],
        "due": "Jul 10",
        "checked": false
      },
      {
        "id": "nfw-5",
        "title": "Issue 2nd payment invoice ($88,351) upon receipt of first payment — Net 30",
        "tags": [
          "invoice"
        ],
        "due": "Jul 10",
        "checked": false
      },
      {
        "id": "nfw-6",
        "title": "Place parts order by Jul 17 (4-wk lead → arrive Aug 14)",
        "tags": [
          "ops"
        ],
        "due": "Jul 17",
        "checked": false
      },
      {
        "id": "nfw-7",
        "title": "Confirm site contact: Matt Schaber — Ft Worth, TX",
        "tags": [
          "ops"
        ],
        "due": "Jul 17",
        "checked": false
      },
      {
        "id": "nfw-8",
        "title": "Confirm parts arrival — begin production (target Aug 14)",
        "tags": [
          "ops"
        ],
        "due": "Aug 14",
        "checked": false
      },
      {
        "id": "nfw-9",
        "title": "Ship to Fort Worth, TX — book freight",
        "tags": [
          "logistics"
        ],
        "due": "Sep 12",
        "checked": false
      },
      {
        "id": "nfw-10",
        "title": "Ship date Sep 14 — send initial shipment invoice ($88,351 — Net 30)",
        "tags": [
          "invoice",
          "logistics"
        ],
        "due": "Sep 14",
        "checked": false
      },
      {
        "id": "nfw-11",
        "title": "Confirm system arrival — send final invoice ($58,901 — Net 30)",
        "tags": [
          "invoice"
        ],
        "due": "Oct 14",
        "checked": false
      }
    ]
  }
];
// ===PROJECTS_END===

// ══════════════════════════════════════════════════════════
// GitHub save config
// ══════════════════════════════════════════════════════════
const GH_OWNER = 'katherynmk';
const GH_REPO = 'mododashboard.github.io';
const GH_BRANCH = 'main';
const GH_PATH = 'main.js';
let editToken = null; // kept in memory only, never persisted or committed

const STATUS_BOARD_KEYS = ['engineering', 'purchasing', 'production'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

// ── Date helpers ──
function parseISO(str) {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}
function isWeekday(d) {
  const dow = d.getDay();
  return dow >= 1 && dow <= 5;
}
function toDateStr(d) {
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function formatDisplayDate(iso) {
  if (!iso) return '—';
  const d = parseISO(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// ── Derived calendar data from projects[].dates ──
function getSpans() {
  return projects
    .filter(p => p.dates && p.dates.buildStart && p.dates.buildEnd)
    .map(p => ({ project: p.title, label: p.dates.buildLabel || 'Production', start: p.dates.buildStart, end: p.dates.buildEnd, status: p.status }));
}
function getMilestones() {
  const out = [];
  projects.forEach(p => {
    if (!p.dates) return;
    if (p.dates.engineeringDue) out.push({ date: p.dates.engineeringDue, project: p.title, label: 'Engineering Due', status: p.status });
    if (p.dates.partsOrderDate) out.push({ date: p.dates.partsOrderDate, project: p.title, label: 'Parts Order Placed', status: p.status });
    if (p.dates.downpaymentDate) out.push({ date: p.dates.downpaymentDate, project: p.title, label: 'Downpayment Received', status: p.status });
    if (p.dates.shipDate) out.push({ date: p.dates.shipDate, project: p.title, label: 'Ship Date', status: p.status });
  });
  return out;
}

// ══════════════════════════════════════════════════════════
// INDEX PAGE — cards, status board, carousel
// ══════════════════════════════════════════════════════════
function renderCards() {
  const grid = document.getElementById('project-grid');
  if (!grid) return;
  grid.innerHTML = '';
  projects.forEach((p) => {
    const isComplete = p.status === 'complete';
    const card = document.createElement('div');
    card.className = 'card' + (isComplete ? ' card-complete' : '');
    if (isComplete) {
      card.style.opacity = '0.55';
      card.style.filter = 'grayscale(1)';
    }
    card.innerHTML =
      '<div class="card-status-bar ' + p.status + '"' + (isComplete ? ' style="background:#9ca3af;"' : '') + '></div>' +
      '<div class="card-top">' +
        '<div class="card-title">' + p.title + (p.install ? ' <span class="install-flag" title="Install scope">🔧</span>' : '') + '</div>' +
        '<span class="badge ' + p.status + '"' + (isComplete ? ' style="background:#9ca3af;color:#fff;"' : '') + '>' + p.status.replace('-', ' ') + '</span>' +
      '</div>' +
      '<hr class="card-divider">' +
      '<div class="card-rows">' +
        '<div class="card-row"><span class="label">Status</span><span class="value">' + p.state + '</span></div>' +
        '<div class="card-row"><span class="label">Downpayment</span><span class="value date">' + formatDisplayDate(p.dates.downpaymentDate) + '</span></div>' +
        '<div class="card-row"><span class="label">Lead Time</span><span class="value">' + (p.dates.leadTimeWeeks ? p.dates.leadTimeWeeks + ' wks' : '—') + '</span></div>' +
        '<div class="card-row"><span class="label">Ship Date</span><span class="value date">' + formatDisplayDate(p.dates.shipDate) + '</span></div>' +
        '<div class="card-row"><span class="label">Integrator</span><span class="value">' + p.integrator + '</span></div>' +
      '</div>' +
      '<div class="card-notes">' +
        '<div class="footer-label">Notes</div>' +
        '<div class="footer-val notes-text">' + (p.notes ? p.notes : '<em>No notes yet</em>') + '</div>' +
      '</div>' +
      '<div class="card-footer">' +
        '<div class="footer-label">Ship-To Address</div>' +
        '<div class="footer-val">' + p.address.replace('\n', '<br>') + '</div>' +
      '</div>';
    grid.appendChild(card);
  });
}

function buildStatusBoard() {
  const board = document.getElementById('status-board');
  if (!board) return;
  board.innerHTML = '';
  STATUS_BOARD_KEYS.forEach(function (key) {
    const matches = projects.filter(function (p) { return p.status === key; });
    const next = matches.length
      ? matches.slice().sort(function (a, b) {
          return (a.dates.shipDate || '9999-99-99').localeCompare(b.dates.shipDate || '9999-99-99');
        })[0]
      : null;

    const col = document.createElement('div');
    col.className = 'status-col status-col-' + key;

    if (next) {
      col.innerHTML =
        '<div class="status-col-header">' + key.charAt(0).toUpperCase() + key.slice(1) + ' <span class="status-count">(' + matches.length + ' total)</span></div>' +
        '<div class="status-next-card">' +
          '<div class="status-next-title">' + next.title + '</div>' +
          '<div class="status-next-meta">' + next.state + '</div>' +
          '<div class="status-next-ship">Ship ' + formatDisplayDate(next.dates.shipDate) + '</div>' +
        '</div>';
    } else {
      col.innerHTML =
        '<div class="status-col-header">' + key.charAt(0).toUpperCase() + key.slice(1) + '</div>' +
        '<div class="status-next-card status-next-empty">None right now</div>';
    }
    board.appendChild(col);
  });
}

function buildCarousel() {
  const track = document.getElementById('carousel-track');
  const dotsEl = document.getElementById('carousel-dots');
  if (!track || !dotsEl) return;

  track.innerHTML = '';
  dotsEl.innerHTML = '';

  for (let j = 0; j < projects.length; j++) {
    const p = projects[j];
    const isComplete = p.status === 'complete';
    const slide = document.createElement('div');
    slide.className = 'carousel-slide' + (j === 0 ? ' active' : '');
    slide.innerHTML =
      '<div class="tv-card' + (isComplete ? ' tv-card-complete' : '') + '"' + (isComplete ? ' style="opacity:0.55;filter:grayscale(1);"' : '') + '>' +
        '<div class="tv-card-eyebrow">Project 0' + (j + 1) + ' of ' + projects.length + '</div>' +
        '<div class="tv-card-title">' + p.title + (p.install ? ' <span class="install-flag" title="Install scope">🔧</span>' : '') + '</div>' +
        '<div class="tv-card-integrator">Integrator: ' + p.integrator + '</div>' +
        '<div class="tv-card-grid">' +
          '<div class="tv-stat"><div class="tv-stat-label">Status</div><div class="tv-stat-val">' + p.state + '</div></div>' +
          '<div class="tv-stat"><div class="tv-stat-label">Downpayment</div><div class="tv-stat-val date">' + formatDisplayDate(p.dates.downpaymentDate) + '</div></div>' +
          '<div class="tv-stat"><div class="tv-stat-label">Lead Time</div><div class="tv-stat-val">' + (p.dates.leadTimeWeeks ? p.dates.leadTimeWeeks + ' wks' : '—') + '</div></div>' +
          '<div class="tv-stat"><div class="tv-stat-label">Ship Date</div><div class="tv-stat-val date">' + formatDisplayDate(p.dates.shipDate) + '</div></div>' +
          '<div class="tv-stat tv-stat-notes"><div class="tv-stat-label">Notes</div><div class="tv-stat-val">' + (p.notes ? p.notes : '<em>No notes yet</em>') + '</div></div>' +
        '</div>' +
        '<hr class="tv-divider">' +
        '<div class="tv-address-row">' +
          '<div class="tv-address"><div class="tv-stat-label">Ship-To Address</div><div class="tv-stat-val">' + p.address.replace('\n', '<br>') + '</div></div>' +
          '<span class="tv-badge-status ' + p.status + '"' + (isComplete ? ' style="background:#9ca3af;color:#fff;"' : '') + '>' + p.status.replace('-', ' ') + '</span>' +
        '</div>' +
      '</div>';
    track.appendChild(slide);

    const dot = document.createElement('span');
    dot.className = 'dot' + (j === 0 ? ' active' : '');
    (function (idx) { dot.addEventListener('click', function () { goToSlide(idx); }); })(j);
    dotsEl.appendChild(dot);
  }

  goToSlide(0);
}

let carouselCurrent = 0;
let carouselTimer = null;
const CAROUSEL_INTERVAL = 7000;

function goToSlide(n) {
  const track = document.getElementById('carousel-track');
  const dotsEl = document.getElementById('carousel-dots');
  if (!track || !dotsEl) return;
  const allSlides = track.querySelectorAll('.carousel-slide');
  const allDots = dotsEl.querySelectorAll('.dot');
  allSlides.forEach(function (s, i) { s.classList.toggle('active', i === n); });
  allDots.forEach(function (d, i) { d.classList.toggle('active', i === n); });
  carouselCurrent = n;
  const progress = document.getElementById('carousel-progress');
  if (progress) progress.textContent = (n + 1) + ' / ' + projects.length;
  startCarouselFill();
}
function nextSlide() { goToSlide((carouselCurrent + 1) % projects.length); }
function prevSlide() { goToSlide((carouselCurrent - 1 + projects.length) % projects.length); }
function startCarouselFill() {
  const fill = document.getElementById('autoplay-fill');
  if (!fill) return;
  fill.style.transition = 'none';
  fill.style.width = '0%';
  clearTimeout(carouselTimer);
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      fill.style.transition = 'width ' + CAROUSEL_INTERVAL + 'ms linear';
      fill.style.width = '100%';
    });
  });
  carouselTimer = setTimeout(nextSlide, CAROUSEL_INTERVAL);
}

// ══════════════════════════════════════════════════════════
// TASKS PAGE
// ══════════════════════════════════════════════════════════
const STATUS_COLORS = {
  'no-downpayment':  '#ef4444',
  'pre-procurement': '#3b82f6',
  'engineering':     '#f59e0b',
  'production':      '#22c55e',
  'purchasing':      '#6b7280',
  'pulling':         '#ec4899',
  'complete':        '#9ca3af'
};

let activeTaskFilter = 'all';

function countTasks() {
  let open = 0, done = 0;
  projects.forEach(p => p.tasks.forEach(t => { t.checked ? done++ : open++; }));
  return { open, done };
}
function projectProgress(p) {
  const total = p.tasks.length;
  const done = p.tasks.filter(t => t.checked).length;
  return { total, done };
}

function renderTasks() {
  const container = document.getElementById('tasks-container');
  if (!container) return;
  container.innerHTML = '';

  const filtered = activeTaskFilter === 'all'
    ? projects
    : projects.filter(p => p.status === activeTaskFilter);

  if (filtered.length === 0) {
    container.innerHTML = '<div class="tasks-empty">No projects match this filter.</div>';
    updateTaskStats();
    return;
  }

  filtered.forEach((proj) => {
    const projIdx = projects.indexOf(proj);
    const { total, done } = projectProgress(proj);
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const color = STATUS_COLORS[proj.status] || '#999';
    const isComplete = proj.status === 'complete';

    const block = document.createElement('div');
    block.className = 'project-task-block' + (isComplete ? ' project-task-complete' : '');
    block.dataset.status = proj.status;
    if (isComplete) {
      block.style.opacity = '0.55';
      block.style.filter = 'grayscale(1)';
    }

    const header = document.createElement('div');
    header.className = 'ptb-header';
    header.innerHTML =
      '<div class="ptb-header-left">' +
        '<div class="ptb-status-dot" style="background:' + color + ';box-shadow:0 0 5px ' + color + ';"></div>' +
        '<div>' +
          '<div class="ptb-title">' + proj.title + '</div>' +
          '<div class="ptb-integrator">via ' + proj.integrator + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="ptb-header-right">' +
        '<div class="ptb-progress">' +
          '<div class="ptb-progress-bar"><div class="ptb-progress-fill" style="width:' + pct + '%;background:' + color + ';"></div></div>' +
          '<span class="ptb-progress-text">' + done + ' / ' + total + '</span>' +
        '</div>' +
        '<span class="ptb-toggle open">▲</span>' +
      '</div>';
    block.appendChild(header);

    const taskList = document.createElement('div');
    taskList.className = 'ptb-tasks';

    proj.tasks.forEach((task, taskIdx) => {
      const row = document.createElement('div');
      row.className = 'task-row';

      const check = document.createElement('div');
      check.className = 'task-check' + (task.checked ? ' checked' : '');
      check.addEventListener('click', () => {
        projects[projIdx].tasks[taskIdx].checked = !projects[projIdx].tasks[taskIdx].checked;
        renderTasks();
      });

      const body = document.createElement('div');
      body.className = 'task-body';

      let metaHTML = '';
      if (task.tags) task.tags.forEach(tag => { metaHTML += '<span class="task-tag ' + tag + '">' + tag + '</span>'; });
      if (task.due) metaHTML += '<span class="task-due">Due ' + task.due + '</span>';

      body.innerHTML =
        '<div class="task-title' + (task.checked ? ' done' : '') + '">' + task.title + '</div>' +
        (metaHTML ? '<div class="task-meta">' + metaHTML + '</div>' : '');

      row.appendChild(check);
      row.appendChild(body);
      taskList.appendChild(row);
    });

    block.appendChild(taskList);

    header.addEventListener('click', () => {
      const tgl = header.querySelector('.ptb-toggle');
      taskList.classList.toggle('collapsed');
      tgl.classList.toggle('open');
    });

    container.appendChild(block);
  });

  updateTaskStats();
}

function updateTaskStats() {
  const { open, done } = countTasks();
  const elOpen = document.getElementById('stat-open');
  const elDone = document.getElementById('stat-done');
  const elProjects = document.getElementById('stat-projects');
  if (elOpen) elOpen.textContent = open;
  if (elDone) elDone.textContent = done;
  if (elProjects) elProjects.textContent = projects.length;
}

function wireTaskFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTaskFilter = btn.dataset.filter;
      renderTasks();
    });
  });
}

// ══════════════════════════════════════════════════════════
// CALENDAR PAGE
// ══════════════════════════════════════════════════════════
let calViewYear, calViewMonth;

function buildSpanMap() {
  const map = {};
  getSpans().forEach(sp => {
    const s = parseISO(sp.start);
    const e = parseISO(sp.end);
    const cur = new Date(s);
    while (cur <= e) {
      if (isWeekday(cur)) {
        const key = toDateStr(cur);
        if (!map[key]) map[key] = [];
        map[key].push({ project: sp.project, label: sp.label, status: sp.status });
      }
      cur.setDate(cur.getDate() + 1);
    }
  });
  return map;
}

function renderCalendar() {
  const section = document.getElementById('cal-section');
  if (!section) return;

  const label = document.getElementById('cal-month-label');
  if (label) label.innerHTML = MONTHS[calViewMonth] + ' <em>' + calViewYear + '</em>';

  section.innerHTML = '';

  const wkRow = document.createElement('div');
  wkRow.className = 'cal-weekdays';
  ['Mon','Tue','Wed','Thu','Fri'].forEach(d => {
    const cell = document.createElement('div');
    cell.className = 'cal-weekday';
    cell.textContent = d;
    wkRow.appendChild(cell);
  });
  section.appendChild(wkRow);

  const grid = document.createElement('div');
  grid.className = 'cal-grid';

  const spanMap = buildSpanMap();
  const milestones = getMilestones();
  const today = new Date();

  const firstOfMonth = new Date(calViewYear, calViewMonth, 1);
  const daysInMonth = new Date(calViewYear, calViewMonth + 1, 0).getDate();
  let firstDayDow = firstOfMonth.getDay();
  let padCols = (firstDayDow === 0 || firstDayDow === 6) ? 0 : firstDayDow - 1;

  for (let i = 0; i < padCols; i++) {
    const blank = document.createElement('div');
    blank.className = 'cal-cell other-month';
    grid.appendChild(blank);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(calViewYear, calViewMonth, d);
    if (!isWeekday(date)) continue;

    const dateStr = toDateStr(date);
    const isToday = (d === today.getDate() && calViewMonth === today.getMonth() && calViewYear === today.getFullYear());
    const dayMilestones = milestones.filter(e => e.date === dateStr);
    const daySpans = spanMap[dateStr] || [];

    grid.appendChild(buildCalCell(d, isToday, dayMilestones, daySpans));
  }

  const totalRendered = padCols + [...Array(daysInMonth)].filter((_, i) => isWeekday(new Date(calViewYear, calViewMonth, i + 1))).length;
  const remainder = totalRendered % 5 === 0 ? 0 : 5 - (totalRendered % 5);
  for (let i = 0; i < remainder; i++) {
    const blank = document.createElement('div');
    blank.className = 'cal-cell other-month';
    grid.appendChild(blank);
  }

  section.appendChild(grid);
  renderUpcoming(milestones);
}

function buildCalCell(dayNum, isToday, dayMilestones, daySpans) {
  const cell = document.createElement('div');
  cell.className = 'cal-cell' + (isToday ? ' today' : '');

  const num = document.createElement('div');
  num.className = 'cal-day-num';
  num.textContent = dayNum;
  cell.appendChild(num);

  const evtWrap = document.createElement('div');
  evtWrap.className = 'cal-events';

  daySpans.forEach(sp => {
    const e = document.createElement('div');
    e.className = 'cal-event cal-span ' + sp.status;
    e.title = sp.project + ': ' + sp.label;
    e.textContent = sp.project + ' · ' + sp.label;
    evtWrap.appendChild(e);
  });

  dayMilestones.forEach(ev => {
    const e = document.createElement('div');
    e.className = 'cal-event cal-milestone ' + ev.status;
    e.title = ev.project + ': ' + ev.label;
    e.textContent = ev.project + ' — ' + ev.label;
    evtWrap.appendChild(e);
  });

  if (evtWrap.children.length > 0) cell.appendChild(evtWrap);
  return cell;
}

function renderUpcoming(milestones) {
  const header = document.getElementById('upcoming-header');
  const list = document.getElementById('upcoming-list');
  if (!header || !list) return;
  list.innerHTML = '';

  const monthEvents = milestones
    .filter(e => {
      const d = parseISO(e.date);
      return d.getFullYear() === calViewYear && d.getMonth() === calViewMonth;
    })
    .sort((a, b) => a.date.localeCompare(b.date));

  if (monthEvents.length === 0) {
    header.textContent = 'No milestones this month';
    return;
  }

  header.textContent = MONTHS[calViewMonth] + ' ' + calViewYear + ' — Milestones';

  monthEvents.forEach(ev => {
    const d = parseISO(ev.date);
    const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const item = document.createElement('div');
    item.className = 'upcoming-item';
    item.innerHTML =
      '<span class="upcoming-date">' + dateStr + '</span>' +
      '<span class="upcoming-project">' + ev.project + '</span>' +
      '<span class="upcoming-desc">' + ev.label + '</span>' +
      '<span class="upcoming-badge ' + ev.status + '">' + ev.status.replace('-', ' ') + '</span>';
    list.appendChild(item);
  });
}

function wireCalendarNav() {
  const prevBtn = document.getElementById('prev-month');
  const nextBtn = document.getElementById('next-month');
  const todayBtn = document.getElementById('today-btn');
  if (!prevBtn) return;

  prevBtn.addEventListener('click', () => {
    calViewMonth--;
    if (calViewMonth < 0) { calViewMonth = 11; calViewYear--; }
    renderCalendar();
  });
  nextBtn.addEventListener('click', () => {
    calViewMonth++;
    if (calViewMonth > 11) { calViewMonth = 0; calViewYear++; }
    renderCalendar();
  });
  if (todayBtn) {
    todayBtn.addEventListener('click', () => {
      const today = new Date();
      calViewYear = today.getFullYear();
      calViewMonth = today.getMonth();
      renderCalendar();
    });
  }
}

// ══════════════════════════════════════════════════════════
// FLOATING EDITOR — injected on every page, no HTML edits required
// ══════════════════════════════════════════════════════════
function ensureToken() {
  if (editToken) return editToken;
  const t = window.prompt(
    'Enter your GitHub fine-grained token (scoped to this repo only, Contents: read & write). ' +
    'This stays in this browser tab\'s memory only — it is never saved to the page or the repo.'
  );
  if (t) editToken = t.trim();
  return editToken;
}

function setSaveStatus(msg, isError) {
  const el = document.getElementById('editor-save-status');
  if (!el) return;
  el.textContent = msg;
  el.style.color = isError ? '#dc2626' : '#15803d';
}

const PROJECT_FIELDS = [
  { key: 'title', label: 'Title' },
  { key: 'integrator', label: 'Integrator' },
  { key: 'status', label: 'Status (production / pulling / purchasing / engineering / pre-procurement / complete)' },
  { key: 'state', label: 'Status detail text' },
  { key: 'address', label: 'Ship-To Address' },
  { key: 'notes', label: 'Notes' }
];
const DATE_FIELDS = [
  { key: 'engineeringDue', label: 'Engineering Due (YYYY-MM-DD, blank if N/A)' },
  { key: 'partsOrderDate', label: 'Parts Order Placed (YYYY-MM-DD, blank if N/A)' },
  { key: 'downpaymentDate', label: 'Downpayment Received (YYYY-MM-DD, blank if N/A)' },
  { key: 'leadTimeWeeks', label: 'Parts Lead Time (weeks, blank if N/A)' },
  { key: 'buildLabel', label: 'Build phase label (Production / Pulling)' },
  { key: 'buildStart', label: 'Build Start (YYYY-MM-DD)' },
  { key: 'buildEnd', label: 'Build End (YYYY-MM-DD)' },
  { key: 'shipDate', label: 'Ship Date (YYYY-MM-DD)' }
];

let editorTab = 'projects'; // 'projects' | 'tasks'

function injectEditorUI() {
  const bar = document.createElement('div');
  bar.id = 'editor-toggle-bar';
  bar.innerHTML = '<button id="editor-toggle-btn" type="button">✏️ Edit Dashboard</button>';
  document.body.appendChild(bar);

  const panel = document.createElement('div');
  panel.id = 'editor-panel-overlay';
  panel.style.display = 'none';
  panel.innerHTML =
    '<div id="editor-panel-inner">' +
      '<div id="editor-panel-header">' +
        '<div id="editor-tabs">' +
          '<button type="button" class="editor-tab-btn active" data-tab="projects">Projects &amp; Dates</button>' +
          '<button type="button" class="editor-tab-btn" data-tab="tasks">Tasks</button>' +
        '</div>' +
        '<button type="button" id="editor-close-btn">✕</button>' +
      '</div>' +
      '<div id="editor-panel-body"></div>' +
      '<div id="editor-panel-footer">' +
        '<button type="button" id="add-project-btn">+ Add Project</button>' +
        '<button type="button" id="save-github-btn">Save to GitHub</button>' +
        '<span id="editor-save-status"></span>' +
      '</div>' +
    '</div>';
  document.body.appendChild(panel);

  document.getElementById('editor-toggle-btn').addEventListener('click', () => {
    panel.style.display = 'flex';
    renderEditorBody();
  });
  document.getElementById('editor-close-btn').addEventListener('click', () => {
    panel.style.display = 'none';
  });
  panel.querySelectorAll('.editor-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      panel.querySelectorAll('.editor-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      editorTab = btn.dataset.tab;
      renderEditorBody();
    });
  });
  document.getElementById('add-project-btn').addEventListener('click', addNewProject);
  document.getElementById('save-github-btn').addEventListener('click', saveToGitHub);
}

function renderEditorBody() {
  const body = document.getElementById('editor-panel-body');
  if (!body) return;
  body.innerHTML = '';

  if (editorTab === 'projects') {
    projects.forEach((p, idx) => {
      const row = document.createElement('div');
      row.className = 'editor-row';

      let fieldsHtml = PROJECT_FIELDS.map(f => {
        const val = (p[f.key] || '').toString().replace(/"/g, '&quot;');
        return '<label class="editor-field">' + f.label + '<input type="text" data-idx="' + idx + '" data-group="base" data-key="' + f.key + '" value="' + val + '"></label>';
      }).join('');

      let dateFieldsHtml = DATE_FIELDS.map(f => {
        const val = (p.dates && p.dates[f.key] || '').toString().replace(/"/g, '&quot;');
        return '<label class="editor-field">' + f.label + '<input type="text" data-idx="' + idx + '" data-group="dates" data-key="' + f.key + '" value="' + val + '"></label>';
      }).join('');

      row.innerHTML =
        '<div class="editor-row-header">' +
          '<strong>' + (p.title || 'New Project') + '</strong>' +
          '<label class="editor-install"><input type="checkbox" data-idx="' + idx + '" data-group="base" data-key="install" ' + (p.install ? 'checked' : '') + '> Install</label>' +
          '<button type="button" class="editor-delete-btn" data-idx="' + idx + '">Delete Project</button>' +
        '</div>' +
        '<div class="editor-fields">' + fieldsHtml + '</div>' +
        '<div class="editor-fields editor-dates-fields">' + dateFieldsHtml + '</div>';

      body.appendChild(row);
    });

    body.querySelectorAll('input[type="text"]').forEach(input => {
      input.addEventListener('input', e => {
        const idx = parseInt(e.target.getAttribute('data-idx'), 10);
        const group = e.target.getAttribute('data-group');
        const key = e.target.getAttribute('data-key');
        if (group === 'dates') {
          projects[idx].dates[key] = e.target.value || null;
        } else {
          projects[idx][key] = e.target.value;
        }
        refreshAllRenders();
      });
    });
    body.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', e => {
        const idx = parseInt(e.target.getAttribute('data-idx'), 10);
        projects[idx].install = e.target.checked;
        refreshAllRenders();
      });
    });
    body.querySelectorAll('.editor-delete-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        const idx = parseInt(e.target.getAttribute('data-idx'), 10);
        if (!window.confirm('Delete "' + projects[idx].title + '" and all its tasks? Staged locally until you Save.')) return;
        projects.splice(idx, 1);
        renderEditorBody();
        refreshAllRenders();
      });
    });

  } else {
    // Tasks tab
    projects.forEach((p, pIdx) => {
      const block = document.createElement('div');
      block.className = 'editor-row editor-task-block';
      let taskRows = p.tasks.map((t, tIdx) => {
        return (
          '<div class="editor-task-row">' +
            '<input type="checkbox" data-pidx="' + pIdx + '" data-tidx="' + tIdx + '" data-key="checked" ' + (t.checked ? 'checked' : '') + '>' +
            '<input type="text" class="editor-task-title" data-pidx="' + pIdx + '" data-tidx="' + tIdx + '" data-key="title" value="' + t.title.replace(/"/g, '&quot;') + '">' +
            '<input type="text" class="editor-task-due" placeholder="Due" data-pidx="' + pIdx + '" data-tidx="' + tIdx + '" data-key="due" value="' + (t.due || '') + '">' +
            '<button type="button" class="editor-task-delete" data-pidx="' + pIdx + '" data-tidx="' + tIdx + '">✕</button>' +
          '</div>'
        );
      }).join('');

      block.innerHTML =
        '<div class="editor-row-header"><strong>' + p.title + '</strong>' +
          '<button type="button" class="editor-add-task-btn" data-pidx="' + pIdx + '">+ Add Task</button>' +
        '</div>' +
        '<div class="editor-task-list">' + taskRows + '</div>';
      body.appendChild(block);
    });

    body.querySelectorAll('.editor-task-row input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', e => {
        const pIdx = parseInt(e.target.getAttribute('data-pidx'), 10);
        const tIdx = parseInt(e.target.getAttribute('data-tidx'), 10);
        projects[pIdx].tasks[tIdx].checked = e.target.checked;
        refreshAllRenders();
      });
    });
    body.querySelectorAll('.editor-task-title, .editor-task-due').forEach(input => {
      input.addEventListener('input', e => {
        const pIdx = parseInt(e.target.getAttribute('data-pidx'), 10);
        const tIdx = parseInt(e.target.getAttribute('data-tidx'), 10);
        const key = e.target.getAttribute('data-key');
        projects[pIdx].tasks[tIdx][key] = e.target.value || null;
        refreshAllRenders();
      });
    });
    body.querySelectorAll('.editor-task-delete').forEach(btn => {
      btn.addEventListener('click', e => {
        const pIdx = parseInt(e.target.getAttribute('data-pidx'), 10);
        const tIdx = parseInt(e.target.getAttribute('data-tidx'), 10);
        projects[pIdx].tasks.splice(tIdx, 1);
        renderEditorBody();
        refreshAllRenders();
      });
    });
    body.querySelectorAll('.editor-add-task-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        const pIdx = parseInt(e.target.getAttribute('data-pidx'), 10);
        projects[pIdx].tasks.push({ id: 'new-' + Date.now(), title: 'New task', tags: [], due: null, checked: false });
        renderEditorBody();
        refreshAllRenders();
      });
    });
  }
}

function addNewProject() {
  projects.push({
    title: 'NEW PROJECT',
    integrator: '',
    status: 'pre-procurement',
    state: '',
    address: '',
    notes: '',
    install: false,
    dates: { engineeringDue: null, partsOrderDate: null, downpaymentDate: null, leadTimeWeeks: null, buildLabel: 'Production', buildStart: null, buildEnd: null, shipDate: null },
    tasks: []
  });
  renderEditorBody();
  refreshAllRenders();
}

// Re-render whichever page sections exist
function refreshAllRenders() {
  renderCards();
  buildStatusBoard();
  renderTasks();
  if (document.getElementById('cal-section')) renderCalendar();
}

async function saveToGitHub() {
  const token = ensureToken();
  if (!token) {
    setSaveStatus('Save cancelled — no token entered.', true);
    return;
  }
  try {
    setSaveStatus('Fetching current file from GitHub...');
    const getRes = await fetch(
      'https://api.github.com/repos/' + GH_OWNER + '/' + GH_REPO + '/contents/' + GH_PATH + '?ref=' + GH_BRANCH,
      { headers: { Authorization: 'Bearer ' + token, Accept: 'application/vnd.github+json' } }
    );
    if (!getRes.ok) throw new Error('Could not fetch main.js (HTTP ' + getRes.status + '). Check token scope and repo name.');

    const fileData = await getRes.json();
    const currentContent = decodeURIComponent(escape(atob(fileData.content.replace(/\n/g, ''))));

    const markerRegex = /\/\/ ===PROJECTS_START===[\s\S]*?\/\/ ===PROJECTS_END===/;
    if (!markerRegex.test(currentContent)) {
      throw new Error('Could not find the ===PROJECTS_START===/===PROJECTS_END=== markers in main.js — aborted to avoid corrupting the file.');
    }

    const newBlock = '// ===PROJECTS_START===\nconst projects = ' + JSON.stringify(projects, null, 2) + ';\n// ===PROJECTS_END===';
    const newContent = currentContent.replace(markerRegex, newBlock);
    const newContentBase64 = btoa(unescape(encodeURIComponent(newContent)));

    setSaveStatus('Committing to GitHub...');
    const putRes = await fetch(
      'https://api.github.com/repos/' + GH_OWNER + '/' + GH_REPO + '/contents/' + GH_PATH,
      {
        method: 'PUT',
        headers: { Authorization: 'Bearer ' + token, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: 'Dashboard edit via on-site editor — ' + new Date().toISOString(),
          content: newContentBase64,
          sha: fileData.sha,
          branch: GH_BRANCH
        })
      }
    );

    if (!putRes.ok) {
      const errBody = await putRes.json().catch(() => ({}));
      throw new Error('GitHub rejected the commit (HTTP ' + putRes.status + '): ' + (errBody.message || 'unknown error'));
    }

    setSaveStatus('✔ Saved — commit pushed. GitHub Pages will update in ~30–60s.');
  } catch (err) {
    console.error(err);
    setSaveStatus('✖ ' + err.message, true);
  }
}

// ══════════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function () {
  // Index page
  renderCards();
  buildStatusBoard();
  buildCarousel();

  const elCount = document.getElementById('grid-count');
  const elDate = document.getElementById('footer-date');
  if (elCount) elCount.textContent = projects.length + ' projects';
  if (elDate) elDate.textContent = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const btnNext = document.getElementById('next-btn');
  const btnPrev = document.getElementById('prev-btn');
  if (btnNext) btnNext.addEventListener('click', nextSlide);
  if (btnPrev) btnPrev.addEventListener('click', prevSlide);

  // Tasks page
  if (document.getElementById('tasks-container')) {
    renderTasks();
    wireTaskFilters();
  }

  // Calendar page
  if (document.getElementById('cal-section')) {
    const today = new Date();
    calViewYear = today.getFullYear();
    calViewMonth = today.getMonth();
    wireCalendarNav();
    renderCalendar();
  }

  // Editor (all pages)
  injectEditorUI();
});
