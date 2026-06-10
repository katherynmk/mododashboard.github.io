document.addEventListener('DOMContentLoaded', function () {

  const projects = [
    {
      title: "ACTUS",
      integrator: "MODO8",
      status: "active",
      state: "On-site CMES visit scheduled",
      shipDate: "Jul 1, 2026",
      contractValue: 487500,
      invoiced: 195000,
      nextInvoice: "75,000 — Teardown milestone",
      lastInvoice: "Apr 18, 2025",
      address: "4402 Industrial Pkwy\nChicago, IL 60607"
    },
    {
      title: "OCADO",
      integrator: "Temple Controls",
      status: "in-production",
      state: "Working On Phased Shipping and Installation",
      shipDate: "Jun 15, 2026",
      contractValue: 267000,
      invoiced: 240300,
      nextInvoice: "26,700 — Final retention",
      lastInvoice: "Jun 3, 2025",
      address: "3300 Distribution Blvd\nKankakee, IL 60901"
    },
    {
          title: "MALIN ADI",
      integrator: "Temple Controls",
      status: "in-production",
      state: "Working On Phased Shipping and Installation",
      shipDate: "Jun 15, 2026",
      contractValue: 267000,
      invoiced: 240300,
      nextInvoice: "26,700 — Final retention",
      lastInvoice: "Jun 3, 2025",
      address: "3300 Distribution Blvd\nKankakee, IL 60901"
    },
    {
      title: "EQUIPMENT DEPOT",
      integrator: "Temple Controls",
      status: "in-production",
      state: "Working On Phased Shipping and Installation",
      shipDate: "Jun 15, 2026",
      contractValue: 267000,
      invoiced: 240300,
      nextInvoice: "26,700 — Final retention",
      lastInvoice: "Jun 3, 2025",
      address: "3300 Distribution Blvd\nKankakee, IL 60901"
    },
    {
      title: "KPI FRONTIER DENTAL",
      integrator: "Temple Controls",
      status: "in-production",
      state: "Working On Phased Shipping and Installation",
      shipDate: "Jun 15, 2026",
      contractValue: 267000,
      invoiced: 240300,
      nextInvoice: "26,700 — Final retention",
      lastInvoice: "Jun 3, 2025",
      address: "3300 Distribution Blvd\nKankakee, IL 60901"
    },
    {
      title: "CONVEYOR ON CASTERS",
      integrator: "Temple Controls",
      status: "in-production",
      state: "Working On Phased Shipping and Installation",
      shipDate: "Jun 15, 2026",
      contractValue: 267000,
      invoiced: 240300,
      nextInvoice: "26,700 — Final retention",
      lastInvoice: "Jun 3, 2025",
      address: "3300 Distribution Blvd\nKankakee, IL 60901"
    },
    {
      title: "PITNEY BOS",
      integrator: "Temple Controls",
      status: "in-production",
      state: "Working On Phased Shipping and Installation",
      shipDate: "Jun 15, 2026",
      contractValue: 267000,
      invoiced: 240300,
      nextInvoice: "26,700 — Final retention",
      lastInvoice: "Jun 3, 2025",
      address: "3300 Distribution Blvd\nKankakee, IL 60901"
    },
    {
      title: "LOLOI RUGS",
      integrator: "Temple Controls",
      status: "in-production",
      state: "Working On Phased Shipping and Installation",
      shipDate: "Jun 15, 2026",
      contractValue: 267000,
      invoiced: 240300,
      nextInvoice: "26,700 — Final retention",
      lastInvoice: "Jun 3, 2025",
      address: "3300 Distribution Blvd\nKankakee, IL 60901"
    },
    {
      title: "NEW HORIZONS",
      integrator: "Temple Controls",
      status: "in-production",
      state: "Working On Phased Shipping and Installation",
      shipDate: "Jun 15, 2026",
      contractValue: 267000,
      invoiced: 240300,
      nextInvoice: "26,700 — Final retention",
      lastInvoice: "Jun 3, 2025",
      address: "3300 Distribution Blvd\nKankakee, IL 60901"
    },
    {
      title: "SPARTAN NASH",
      integrator: "Tompkins",
      status: "in-production",
      state: "Working On Phased Shipping and Installation",
      shipDate: "Jun 15, 2026",
      contractValue: 267000,
      invoiced: 240300,
      nextInvoice: "26,700 — Final retention",
      lastInvoice: "Jun 3, 2025",
      address: "3300 Distribution Blvd\nKankakee, IL 60901"
    },
    {
      title: "R2",
      integrator: "ADVANCED INTRALOGISTICS",
      status: "in-production",
      state: "Working On Phased Shipping and Installation",
      shipDate: "Jun 15, 2026",
      contractValue: 267000,
      invoiced: 240300,
      nextInvoice: "26,700 — Final retention",
      lastInvoice: "Jun 3, 2025",
      address: "3300 Distribution Blvd\nKankakee, IL 60901"
    },
    {
      title: "AMAZON CANADA",
      integrator: "SJF",
      status: "",
      state: "pre-procurement phase",
      shipDate: "August 28th, 2026",
      contractValue: 77310,
      invoiced: 38655,
      nextInvoice: "23193 when shipped",
      lastInvoice: "Jun 8, 2026",
      address: "RYDER 1530 GAMBLE PL WINNIPEG MB R3T 1N6 CANADA"
    }
  ];

  const fmt = n => '$' + n.toLocaleString();

  // ── Build project cards ──
  const grid = document.getElementById('project-grid');
  if (grid) {
    projects.forEach((p) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML =
        '<div class="card-status-bar ' + p.status + '"></div>' +
        '<div class="card-top">' +
          '<div class="card-title">' + p.title + '</div>' +
          '<span class="badge ' + p.status + '">' + p.status.replace('-', ' ') + '</span>' +
        '</div>' +
        '<hr class="card-divider">' +
        '<div class="card-rows">' +
          '<div class="card-row"><span class="label">Status</span><span class="value">' + p.state + '</span></div>' +
          '<div class="card-row"><span class="label">Ship Date</span><span class="value date">' + p.shipDate + '</span></div>' +
          '<div class="card-row"><span class="label">Contract</span><span class="value money">' + fmt(p.contractValue) + '</span></div>' +
          '<div class="card-row"><span class="label">Invoiced</span><span class="value money">' + fmt(p.invoiced) + '</span></div>' +
          '<div class="card-row"><span class="label">Last Invoice</span><span class="value date">' + p.lastInvoice + '</span></div>' +
          '<div class="card-row"><span class="label">Integrator</span><span class="value">' + p.integrator + '</span></div>' +
        '</div>' +
        '<div class="card-next">' +
          '<div class="footer-label">Next Invoice</div>' +
          '<div class="footer-val">' + p.nextInvoice + '</div>' +
        '</div>' +
        '<div class="card-footer">' +
          '<div class="footer-label">Ship-To Address</div>' +
          '<div class="footer-val">' + p.address.replace('\n', '<br>') + '</div>' +
        '</div>';
      grid.appendChild(card);
    });
  }

  // ── Hero stats ──
  var total = 0;
  var totalInv = 0;
  var activeCount = 0;
  for (var i = 0; i < projects.length; i++) {
    total += projects[i].contractValue;
    totalInv += projects[i].invoiced;
    if (projects[i].status === 'active') activeCount++;
  }

  var elTotal = document.getElementById('total-value');
  var elInv = document.getElementById('total-invoiced');
  var elActive = document.getElementById('active-count');
  var elCount = document.getElementById('grid-count');
  var elDate = document.getElementById('footer-date');

  if (elTotal) elTotal.textContent = fmt(total);
  if (elInv) elInv.textContent = fmt(totalInv);
  if (elActive) elActive.textContent = activeCount;
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
          '<div class="tv-card-title">' + p.title + '</div>' +
          '<div class="tv-card-integrator">Integrator: ' + p.integrator + '</div>' +
          '<div class="tv-card-grid">' +
            '<div class="tv-stat"><div class="tv-stat-label">Status</div><div class="tv-stat-val">' + p.state + '</div></div>' +
            '<div class="tv-stat"><div class="tv-stat-label">Ship Date</div><div class="tv-stat-val date">' + p.shipDate + '</div></div>' +
            '<div class="tv-stat"><div class="tv-stat-label">Contract Value</div><div class="tv-stat-val money">' + fmt(p.contractValue) + '</div></div>' +
            '<div class="tv-stat"><div class="tv-stat-label">Invoiced to Date</div><div class="tv-stat-val money">' + fmt(p.invoiced) + '</div></div>' +
            '<div class="tv-stat"><div class="tv-stat-label">Last Invoice</div><div class="tv-stat-val date">' + p.lastInvoice + '</div></div>' +
            '<div class="tv-stat"><div class="tv-stat-label">Next Invoice</div><div class="tv-stat-val">' + p.nextInvoice + '</div></div>' +
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
