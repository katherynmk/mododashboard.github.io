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
      '<div class="status-col-header">' + key.charAt(0).toUpperCase() + key.slice(1) + ' <span class="status-count">(' + matches.length + ')</span></div>' +
      '<div class="status-col-list">' +
        (matches.length
          ? matches.map(function (p) { return '<div class="status-chip">' + p.title + '</div>'; }).join('')
          : '<div class="status-chip status-chip-empty">None</div>') +
      '</div>';
    board.appendChild(col);
  });
}

// ── Editor ──

function ensureToken() {
  if (editToken) return editToken;
  const t = window.prompt(
    'Enter your GitHub fine-grained token (scoped to this repo only, ' +
    'Contents: read & write). This stays in this browser tab\'s memory only — ' +
    'it is never saved to the page or the repo.'
  );
  if (t) editToken = t.trim();
  return editToken;
}

function setSaveStatus(msg, isError) {
  const el = document.getElementById('save-status');
  if (!el) return;
  el.textContent = msg;
  el.className = isError ? 'save-status error' : 'save-status';
}

const EDITABLE_FIELDS = [
  { key: 'title', label: 'Title' },
  { key: 'integrator', label: 'Integrator' },
  { key: 'status', label: 'Status (production / pulling / purchasing / engineering / pre-procurement)' },
  { key: 'state', label: 'Status detail text' },
  { key: 'shipDate', label: 'Ship Date' },
  { key: 'address', label: 'Ship-To Address' },
  { key: 'notes', label: 'Notes' },
];

function renderEditorPanel() {
  const panel = document.getElementById('editor-panel');
  if (!panel) return;
  panel.innerHTML = '';

  projects.forEach((p, idx) => {
    const row = document.createElement('div');
    row.className = 'editor-row';

    let fieldsHtml = EDITABLE_FIELDS.map(function (f) {
      const val = (p[f.key] || '').toString().replace(/"/g, '&quot;');
      return (
        '<label class="editor-field">' + f.label +
          '<input type="text" data-idx="' + idx + '" data-key="' + f.key + '" value="' + val + '">' +
        '</label>'
      );
    }).join('');

    row.innerHTML =
      '<div class="editor-row-header">' +
        '<strong>' + (p.title || 'New Project') + '</strong>' +
        '<label class="editor-install"><input type="checkbox" data-idx="' + idx + '" data-key="install" ' + (p.install ? 'checked' : '') + '> Install</label>' +
        '<button type="button" class="editor-delete-btn" data-idx="' + idx + '">Delete</button>' +
      '</div>' +
      '<div class="editor-fields">' + fieldsHtml + '</div>';

    panel.appendChild(row);
  });

  panel.querySelectorAll('input[type="text"]').forEach(function (input) {
    input.addEventListener('input', function (e) {
      const idx = parseInt(e.target.getAttribute('data-idx'), 10);
      const key = e.target.getAttribute('data-key');
      projects[idx][key] = e.target.value;
      renderCards();
      buildStatusBoard();
    });
  });

  panel.querySelectorAll('input[type="checkbox"]').forEach(function (cb) {
    cb.addEventListener('change', function (e) {
      const idx = parseInt(e.target.getAttribute('data-idx'), 10);
      projects[idx].install = e.target.checked;
      renderCards();
    });
  });

  panel.querySelectorAll('.editor-delete-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const idx = parseInt(e.target.getAttribute('data-idx'), 10);
      if (!window.confirm('Delete "' + projects[idx].title + '" from the dashboard? This is only staged locally until you click Save.')) return;
      projects.splice(idx, 1);
      renderEditorPanel();
      renderCards();
      buildStatusBoard();
    });
  });
}

function addNewProject() {
  projects.push({
    title: 'NEW PROJECT',
    integrator: '',
    status: 'pre-procurement',
    state: '',
    shipDate: '',
    address: '',
    notes: '',
    install: false
  });
  renderEditorPanel();
  renderCards();
  buildStatusBoard();
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
    if (!getRes.ok) {
      throw new Error('Could not fetch main.js (HTTP ' + getRes.status + '). Check your token scope and repo name.');
    }
    const fileData = await getRes.json();
    const currentContent = decodeURIComponent(escape(atob(fileData.content.replace(/\n/g, ''))));

    // Marker-based replace — robust to formatting changes, unlike matching on indentation
    const markerRegex = /\/\/ ===PROJECTS_START===[\s\S]*?\/\/ ===PROJECTS_END===/;
    if (!markerRegex.test(currentContent)) {
      throw new Error('Could not find the ===PROJECTS_START===/===PROJECTS_END=== markers in main.js — aborted to avoid corrupting the file.');
    }

    const newBlock =
      '// ===PROJECTS_START===\nconst projects = ' + JSON.stringify(projects, null, 2) + ';\n// ===PROJECTS_END===';
    const newContent = currentContent.replace(markerRegex, newBlock);
    const newContentBase64 = btoa(unescape(encodeURIComponent(newContent)));

    setSaveStatus('Committing to GitHub...');
    const putRes = await fetch(
      'https://api.github.com/repos/' + GH_OWNER + '/' + GH_REPO + '/contents/' + GH_PATH,
      {
        method: 'PUT',
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: 'Dashboard edit via on-site editor — ' + new Date().toISOString(),
          content: newContentBase64,
          sha: fileData.sha,
          branch: GH_BRANCH
        })
      }
    );

    if (!putRes.ok) {
      const errBody = await putRes.json().catch(function () { return {}; });
      throw new Error('GitHub rejected the commit (HTTP ' + putRes.status + '): ' + (errBody.message || 'unknown error'));
    }

    setSaveStatus('✔ Saved — commit pushed to ' + GH_BRANCH + '. GitHub Pages will update in ~30–60s.');
  } catch (err) {
    console.error(err);
    setSaveStatus('✖ ' + err.message, true);
  }
}

// ══════════════════════════════════════════════════════════
// Initial page load — cards, status board, carousel, buttons
// ══════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function () {

  renderCards();
  buildStatusBoard();

  var elCount = document.getElementById('grid-count');
  var elDate = document.getElementById('footer-date');
  if (elCount) elCount.textContent = projects.length + ' projects';
  if (elDate) elDate.textContent = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  // ── Build carousel slides ──
  var track = document.getElementById('carousel-track');
  var dotsEl = document.getElementById('carousel-dots');

  if (track && dotsEl) {
    for (var j = 0; j < projects.length; j++) {
      var p = projects[j];
      var slide = document.createElement('div');
      slide.className = 'carousel-slide' + (j === 0 ? ' active' : '');
      slide.innerHTML =
        '<div class="tv-card">' +
          '<div class="tv-card-eyebrow">Project 0' + (j + 1) + ' of ' + projects.length + '</div>' +
          '<div class="tv-card-title">' + p.title + (p.install ? ' <span class="install-flag" title="Install scope">🔧</span>' : '') + '</div>' +
          '<div class="tv-card-integrator">Integrator: ' + p.integrator + '</div>' +
          '<div class="tv-card-grid">' +
            '<div class="tv-stat"><div class="tv-stat-label">Status</div><div class="tv-stat-val">' + p.state + '</div></div>' +
            '<div class="tv-stat"><div class="tv-stat-label">Ship Date</div><div class="tv-stat-val date">' + p.shipDate + '</div></div>' +
            '<div class="tv-stat tv-stat-notes"><div class="tv-stat-label">Notes</div><div class="tv-stat-val">' + (p.notes ? p.notes : '<em>No notes yet</em>') + '</div></div>' +
          '</div>' +
          '<hr class="tv-divider">' +
          '<div class="tv-address-row">' +
            '<div class="tv-address"><div class="tv-stat-label">Ship-To Address</div><div class="tv-stat-val">' + p.address.replace('\n', '<br>') + '</div></div>' +
            '<span class="tv-badge-status ' + p.status + '">' + p.status.replace('-', ' ') + '</span>' +
          '</div>' +
        '</div>';
      track.appendChild(slide);

      var dot = document.createElement('span');
      dot.className = 'dot' + (j === 0 ? ' active' : '');
      (function(idx) {
        dot.addEventListener('click', function() { goTo(idx); });
      })(j);
      dotsEl.appendChild(dot);
    }
  }

  // ── Carousel logic ──
  var current = 0;
  var INTERVAL = 7000;
  var timer = null;
  var fill = document.getElementById('autoplay-fill');
  var progress = document.getElementById('carousel-progress');

  function goTo(n) {
    var allSlides = track.querySelectorAll('.carousel-slide');
    var allDots = dotsEl.querySelectorAll('.dot');
    allSlides.forEach(function(s, i) { s.classList.toggle('active', i === n); });
    allDots.forEach(function(d, i) { d.classList.toggle('active', i === n); });
    current = n;
    if (progress) progress.textContent = (n + 1) + ' / ' + projects.length;
    startFill();
  }

  function next() { goTo((current + 1) % projects.length); }
  function prev() { goTo((current - 1 + projects.length) % projects.length); }

  function startFill() {
    if (!fill) return;
    fill.style.transition = 'none';
    fill.style.width = '0%';
    clearTimeout(timer);
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        fill.style.transition = 'width ' + INTERVAL + 'ms linear';
        fill.style.width = '100%';
      });
    });
    timer = setTimeout(next, INTERVAL);
  }

  var btnNext = document.getElementById('next-btn');
  var btnPrev = document.getElementById('prev-btn');
  if (btnNext) btnNext.addEventListener('click', next);
  if (btnPrev) btnPrev.addEventListener('click', prev);

  goTo(0);

  // ── Editor button wiring ──
  const toggleBtn = document.getElementById('edit-toggle-btn');
  const panel = document.getElementById('editor-panel');
  const addBtn = document.getElementById('add-project-btn');
  const saveBtn = document.getElementById('save-github-btn');

  if (toggleBtn && panel) {
    toggleBtn.addEventListener('click', function () {
      const showing = panel.style.display !== 'none';
      panel.style.display = showing ? 'none' : 'block';
      if (!showing) renderEditorPanel();
    });
  }
  if (addBtn) addBtn.addEventListener('click', addNewProject);
  if (saveBtn) saveBtn.addEventListener('click', saveToGitHub);

});
