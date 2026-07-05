document.addEventListener('DOMContentLoaded', function () {

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

  // ── Build project cards ──
  const grid = document.getElementById('project-grid');
  if (grid) {
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

  // ── Hero: live status board (which projects are in each phase) ──
  const STATUS_BOARD_KEYS = ['engineering', 'purchasing', 'production'];

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

});
