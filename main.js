// ===PROJECTS_START===
const projects = [
  {
    title: "ACTUS",
    integrator: "MODO8",
    status: "production",
    state: "On-site CMES visit scheduled",
    shipDate: "Jul 1, 2026",
    address: "Wautoma Plant Milk Specialties Global E. Chicago Road | Wautoma, WI 54982 | (612) 439-5212",
    notes: "",
    install: false
  },
  {
    title: "OCADO",
    integrator: "Temple Controls",
    status: "production",
    state: "Working On Phased Shipping and Installation",
    shipDate: "Jul 1, 2026",
    address: "9091 88th Ave, Pleasant Prairie, WI",
    notes: "",
    install: false
  },
  {
    title: "ADI / MALIN",
    integrator: "MALIN",
    status: "production",
    state: "Working On Phased Shipping",
    shipDate: "Jun 22, 2026",
    address: "3200 Richmond Rd, Easton, PA 18040",
    notes: "",
    install: false
  },
  {
    title: "ARHAUS",
    integrator: "Equipment Depot",
    status: "pulling",
    state: "Pulling job",
    shipDate: "Jul 2, 2026",
    address: "51 East Hines Hill Rd, Boston Heights, OH 44236 | James Coddington 216-276-3956",
    notes: "",
    install: false
  },
  {
    title: "FRONTIER DENTAL",
    integrator: "KPI",
    status: "purchasing",
    state: "Purchased — CHANGE ORDER?",
    shipDate: "Jul 21, 2026",
    address: "2500 W. Carey Ave, Bldg F, North Las Vegas, NV 89032",
    notes: "",
    install: false
  },
  {
    title: "CONVEYOR ON CASTERS",
    integrator: "Formic",
    status: "purchasing",
    state: "Paid in full — freight to be invoiced at ship",
    shipDate: "Aug 3, 2026",
    address: "979 Corporate Blvd, Linthicum Heights, MD 21090",
    notes: "",
    install: false
  },
  {
    title: "PITNEY BOS",
    integrator: "Temple Controls",
    status: "engineering",
    state: "Working On CET Drawing",
    shipDate: "Jul 27, 2026",
    address: "Pitney Bowes, 5071 W 74th St, Indianapolis, IN 46268",
    notes: "",
    install: false
  },
  {
    title: "LOLOI RUGS",
    integrator: "AI",
    status: "production",
    state: "Justin Needs to Program",
    shipDate: "Jul 27, 2026",
    address: "4550 Spring Valley Rd, Farmers Branch, TX 75244",
    notes: "",
    install: false
  },
  {
    title: "NEW HORIZONS",
    integrator: "Formic",
    status: "pre-procurement",
    state: "Pre-procurement — FAT terms",
    shipDate: "Jul 31, 2026",
    address: "211 Woodlawn Avenue, Norwalk, OH 44857",
    notes: "",
    install: false
  },
  {
    title: "SPARTAN NASH",
    integrator: "Tompkins",
    status: "engineering",
    state: "Engineering — downpayment received",
    shipDate: "Aug 7, 2026",
    address: "1300 West Elkhorn Avenue, Sioux Falls, SD 57101",
    notes: "",
    install: false
  },
  {
    title: "R2",
    integrator: "Automation Intelligence",
    status: "engineering",
    state: "Engineering — downpayment received",
    shipDate: "Aug 17, 2026",
    address: "Automation Intelligence LLC, 6181 Taylor Dr, Flint, MI 48507",
    notes: "",
    install: false
  },
  {
    title: "AMAZON CANADA",
    integrator: "SJF",
    status: "engineering",
    state: "Engineering — downpayment received",
    shipDate: "Aug 28, 2026",
    address: "Ryder, 1530 Gamble Pl, Winnipeg, MB R3T 1N6, Canada",
    notes: "",
    install: false
  },
  {
    title: "FORSYTH",
    integrator: "CRG / Storage Solutions",
    status: "pre-procurement",
    state: "Pre-procurement — awaiting downpayment",
    shipDate: "Aug 10, 2026",
    address: "Storage Solutions, 910 E. 169th Street, Westfield, IN 46074",
    notes: "",
    install: false
  },
  {
    title: "NUMINA BOXOUT JAX",
    integrator: "MODO8",
    status: "engineering",
    state: "PO Received — Down Payment Invoiced",
    shipDate: "Sep 14, 2026",
    address: "Boxout | 3750 Cisco Drive W, Unit 1 | Jacksonville, FL 32219",
    notes: "",
    install: false
  },
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

// ── Shared render functions (used on load AND after edits) ──

function renderCards() {
  const grid = document.getElementById('project-grid');
  if (!grid) return;
  grid.innerHTML = '';
  projects.forEach((p) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML =
      '<div class="card-status-bar ' + p.status + '"></div>' +
      '<div class="card-top">' +
        '<div class="card-title">' + p.title + (p.install ? ' <span class="install-flag" title="Install scope">🔧</span>' : '') + '</div>' +
        '<span class="badge ' + p.status + '">' + p.status.replace('-', ' ') + '</span>' +
      '</div>' +
      '<hr class="card-divider">' +
      '<div class="card-rows">' +
        '<div class="card-row"><span class="label">Status</span><span class="value">' + p.state + '</span></div>' +
        '<div class="card-row"><span class="label">Ship Date</span><span class="value date">' + p.shipDate + '</span></div>' +
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
    const col = document.createElement('div');
    col.className = 'status-col status-col-' + key;
    col.innerHTML =
      '<div class="status-col-header">' + key.charAt(0).toUpperCase() + key.slice(1) + ' <span class="status-count">(' +
