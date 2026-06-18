document.addEventListener('DOMContentLoaded', function () {

  const projects = [
    {
      title: "ACTUS",
      integrator: "MODO8",
      status: "production",
      state: "On-site CMES visit scheduled",
      shipDate: "Jul 1, 2026",
      contractValue: 253208.38,
      invoiced: 195000,
      nextInvoice: "$23,013 — SAT (10%)",
      lastInvoice: "$23,076 — Change Order",
      address: "Wautoma Plant Milk Specialties Global E. Chicago Road | Wautoma, WI 54982 | (612) 439-5212"
    },
    {
      title: "OCADO",
      integrator: "Temple Controls",
      status: "production",
      state: "Working On Phased Shipping and Installation",
      shipDate: "Jul 1, 2026",
      contractValue: 560517.34,
      invoiced: 218586.14,
      nextInvoice: "$109,293 — Initial Shipment",
      lastInvoice: "$109,293 — Engineering Complete",
      address: "9091 88th Ave, Pleasant Prairie, WI"
    },
    {
      title: "ADI / MALIN",
      integrator: "MALIN",
      status: "production",
      state: "Working On Phased Shipping",
      shipDate: "Jun 22, 2026",
      contractValue: 278500,
      invoiced: 194950,
      nextInvoice: "$55,700 — Initial Shipment",
      lastInvoice: "$83,550 — Engineering Complete",
      address: "3200 Richmond Rd, Easton, PA 18040"
    },
    {
      title: "ARHAUS",
      integrator: "Equipment Depot",
      status: "pulling",
      state: "Pulling job",
      shipDate: "Jul 2, 2026",
      contractValue: 48655,
      invoiced: 34058.50,
      nextInvoice: "$9,731 — Initial Shipment",
      lastInvoice: "$14,596.50 — Engineering Complete",
      address: "51 East Hines Hill Rd, Boston Heights, OH 44236 | James Coddington 216-276-3956"
    },
    {
      title: "FRONTIER DENTAL",
      integrator: "KPI",
      status: "purchasing",
      state: "Purchased — CHANGE ORDER?",
      shipDate: "Jul 21, 2026",
      contractValue: 350000,
      invoiced: 105000,
      nextInvoice: "$70,000 — Start of Manufacturing",
      lastInvoice: "$105,000 — PO Placement (30%)",
      address: "2500 W. Carey Ave, Bldg F, North Las Vegas, NV 89032"
    },
    {
      title: "CONVEYOR ON CASTERS",
      integrator: "Formic",
      status: "purchasing",
      state: "Paid in full — freight to be invoiced at ship",
      shipDate: "Aug 3, 2026",
      contractValue: 4938,
      invoiced: 4938,
      nextInvoice: "Freight — TBD at shipment",
      lastInvoice: "Paid in Full — PO 101087",
      address: "979 Corporate Blvd, Linthicum Heights, MD 21090"
    },
    {
      title: "PITNEY BOS",
      integrator: "Temple Controls",
      status: "engineering",
      state: "Working On CET Drawing",
      shipDate: "Jul 27, 2026",
      contractValue: 226822.25,
      invoiced: 90728.90,
      nextInvoice: "$68,046 — Engineering Complete (Jun 19)",
      lastInvoice: "$90,728 — Downpayment",
      address: "Pitney Bowes, 5071 W 74th St, Indianapolis, IN 46268"
    },
    {
      title: "LOLOI RUGS",
      integrator: "AI",
      status: "production",
      state: "Justin Needs to Program",
      shipDate: "Jul 27, 2026",
      contractValue: 187126,
      invoiced: 93563,
      nextInvoice: "$93,563 — Final Shipment (Net 15)",
      lastInvoice: "$93,563 — 50% Downpayment",
      address: "4550 Spring Valley Rd, Farmers Branch, TX 75244"
    },
    {
      title: "NEW HORIZONS",
      integrator: "Formic",
      status: "pre-procurement",
      state: "Pre-procurement — FAT terms",
      shipDate: "Jul 31, 2026",
      contractValue: 202665,
      invoiced: 60799.50,
      nextInvoice: "$60,799 — Design Acceptance (30%)",
      lastInvoice: "$60,799 — Order (30%) — PO 101076",
      address: "211 Woodlawn Avenue, Norwalk, OH 44857"
    },
    {
      title: "SPARTAN NASH",
      integrator: "Tompkins",
      status: "engineering",
      state: "Engineering — downpayment received",
      shipDate: "Aug 7, 2026",
      contractValue: 98637,
      invoiced: 49318.50,
      nextInvoice: "$29,591 — Engineering Complete (Jun 26, Net 15)",
      lastInvoice: "$49,318 — 50% Downpayment",
      address: "1300 West Elkhorn Avenue, Sioux Falls, SD 57101"
    },
    {
      title: "R2",
      integrator: "Automation Intelligence",
      status: "engineering",
      state: "Engineering — downpayment received",
      shipDate: "Aug 17, 2026",
      contractValue: 77310,
      invoiced: 38655,
      nextInvoice: "$23,193 — Ship Notification (30%, Net 30)",
      lastInvoice: "$38,655 — 50% Downpayment — MODO826014-R2",
      address: "Automation Intelligence LLC, 6181 Taylor Dr, Flint, MI 48507"
    },
    {
      title: "AMAZON CANADA",
      integrator: "SJF",
      status: "engineering",
      state: "Engineering — downpayment received",
      shipDate: "Aug 28, 2026",
      contractValue: 177856,
      invoiced: 71142.40,
      nextInvoice: "$53,356 — Engineering Complete (Jun 26, Net 30)",
      lastInvoice: "$71,142 — 40% Downpayment",
      address: "Ryder, 1530 Gamble Pl, Winnipeg, MB R3T 1N6, Canada"
    },
    {
      title: "FORSYTH",
      integrator: "CRG / Storage Solutions",
      status: "pre-procurement",
      state: "Pre-procurement — awaiting downpayment",
      shipDate: "Aug 10, 2026",
      contractValue: 41140,
      invoiced: 0,
      nextInvoice: "$20,570 — 50% Downpayment at PO",
      lastInvoice: "None yet",
      address: "Storage Solutions, 910 E. 169th Street, Westfield, IN 46074"
    },
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
    if (projects[i].status === 'production') activeCount++;
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
