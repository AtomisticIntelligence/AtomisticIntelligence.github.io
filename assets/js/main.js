// ---------------------------------------------------------------------------
// Site config — edit here.
// ---------------------------------------------------------------------------
var CONTACT_EMAIL = ''; // TODO: e.g. your Fudan address. Leave empty to show a highlighted placeholder.

(function () {
  var root = document.documentElement;
  var PAPER_IMG_DIR = 'assets/img/papers/';

  function t(en, zh) { return '<span class="l-en">' + en + '</span><span class="l-zh">' + zh + '</span>'; }
  function $(sel) { return document.querySelector(sel); }

  // ----- Language toggle -----
  var toggle = $('#lang-toggle');
  if (toggle) toggle.addEventListener('click', function () {
    var lang = root.getAttribute('data-lang') === 'zh' ? 'en' : 'zh';
    root.setAttribute('data-lang', lang);
    root.lang = lang === 'zh' ? 'zh-CN' : 'en';
    try { localStorage.setItem('ail-lang', lang); } catch (e) {}
  });

  // ----- Mobile menu -----
  var burger = $('#nav-burger'), links = $('#nav-links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
    });
  }

  // ----- Email -----
  document.querySelectorAll('.js-email').forEach(function (a) {
    if (CONTACT_EMAIL) {
      a.href = 'mailto:' + CONTACT_EMAIL;
      a.textContent = CONTACT_EMAIL;
    } else {
      a.removeAttribute('href');
      a.textContent = '[email to be added]';
      a.classList.add('email-missing');
    }
  });

  // ----- Publications -----
  function pubCard(p) {
    var authors = p.authors.replace(/B\. Deng(\*|‡)?/g, '<b>B. Deng$1</b>');
    var fig = p.img
      ? '<img src="' + PAPER_IMG_DIR + p.img + '" alt="" loading="lazy">'
      : '<div class="pub-card__ph" aria-hidden="true"><img src="assets/img/logo/mark.svg" alt=""></div>';
    var badge = p.badge ? '<span class="pub-card__badge">' + p.badge + '</span>' : '';
    return '<article class="pub-card">' +
      '<a class="pub-card__fig" href="' + p.url + '" target="_blank" rel="noopener" tabindex="-1">' + fig + '</a>' +
      '<div class="pub-card__body">' +
        '<h3 class="pub-card__title"><a href="' + p.url + '" target="_blank" rel="noopener">' + p.title + '</a></h3>' +
        '<p class="pub-card__authors">' + authors + '</p>' +
        '<p class="pub-card__venue">' + p.venue + ' (' + p.year + ')' + badge + '</p>' +
      '</div></article>';
  }

  var pubs = window.PUBLICATIONS || [];

  // Home: selected papers
  var sel = $('#selected-pubs');
  if (sel) {
    var n = parseInt(sel.getAttribute('data-limit') || '6', 10);
    sel.innerHTML = pubs.filter(function (p) { return p.selected; }).slice(0, n).map(pubCard).join('');
  }

  // Research page: papers per topic
  document.querySelectorAll('[data-topic-pubs]').forEach(function (el) {
    var topic = el.getAttribute('data-topic-pubs');
    var n = parseInt(el.getAttribute('data-limit') || '3', 10);
    el.innerHTML = pubs.filter(function (p) { return p.topics.indexOf(topic) >= 0; }).slice(0, n).map(pubCard).join('');
  });

  // Publications page: full list, grouped by year, with filters + search
  var all = $('#all-pubs');
  if (all) {
    var filters = $('#pub-filters'), search = $('#pub-search'), count = $('#pub-count');
    var active = 'all';
    var chips = [{ id: 'all', en: 'All', zh: '全部' }, { id: 'selected', en: 'Selected', zh: '代表作' }];
    Object.keys(window.TOPICS || {}).forEach(function (k) {
      chips.push({ id: k, en: window.TOPICS[k].en, zh: window.TOPICS[k].zh });
    });
    filters.innerHTML = chips.map(function (c) {
      return '<button type="button" class="chip' + (c.id === active ? ' is-active' : '') + '" data-filter="' + c.id + '">' + t(c.en, c.zh) + '</button>';
    }).join('');
    filters.addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return;
      active = b.getAttribute('data-filter');
      filters.querySelectorAll('.chip').forEach(function (c) { c.classList.toggle('is-active', c === b); });
      render();
    });
    search.addEventListener('input', render);

    function render() {
      var q = search.value.trim().toLowerCase();
      var list = pubs.filter(function (p) {
        if (active === 'selected' && !p.selected) return false;
        if (active !== 'all' && active !== 'selected' && p.topics.indexOf(active) < 0) return false;
        if (q && (p.title + ' ' + p.authors + ' ' + p.venue).toLowerCase().indexOf(q) < 0) return false;
        return true;
      });
      count.innerHTML = t(list.length + ' papers', '共 ' + list.length + ' 篇');
      var years = [];
      list.forEach(function (p) { if (years.indexOf(p.year) < 0) years.push(p.year); });
      all.innerHTML = years.length ? years.map(function (y) {
        return '<section class="pub-year"><h2 class="pub-year__title">' + y + '</h2><div class="pub-grid">' +
          list.filter(function (p) { return p.year === y; }).map(pubCard).join('') + '</div></section>';
      }).join('') : '<p class="muted">' + t('No matching papers.', '没有匹配的论文。') + '</p>';
    }
    render();
  }

  // ----- News -----
  var news = window.NEWS || [];
  document.querySelectorAll('[data-news]').forEach(function (el) {
    var n = parseInt(el.getAttribute('data-news'), 10) || news.length;
    el.innerHTML = news.slice(0, n).map(function (item) {
      return '<li><time>' + item.date + '</time><p>' + t(item.en, item.zh) + '</p></li>';
    }).join('');
  });

  // ----- Hero: soft-sphere "atoms" -----
  // Pairwise repulsion F = A (1/r - 1/r_c) for r < r_c (zero beyond, and smooth at the cutoff),
  // plus a gentle thermostat that holds the average speed so the motion never freezes or blows up.
  var canvas = $('#hero-canvas');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var atoms = [], w = 0, h = 0, raf = null;
  var COLOR_POS = '#a594ff', COLOR_NEG = '#c4b8ff';
  var BOND = 120;        // draw a faint line between atoms closer than this (px)
  var A = 0.3;           // repulsion strength
  var RC = 60;           // cutoff radius (px)
  var RMIN = 6;          // caps the force at very small r
  var TARGET_V = 0.32, THERMO = 0.02, VMAX = 1.2;

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var n = Math.round(Math.min(90, (w * h) / 14000));
    atoms = [];
    for (var i = 0; i < n; i++) {
      var q = i % 2 ? 1 : -1, ang = Math.random() * Math.PI * 2; // q only picks the look (two "species")
      atoms.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: Math.cos(ang) * TARGET_V, vy: Math.sin(ang) * TARGET_V,
        q: q, r: q > 0 ? 2.6 + Math.random() * 1.2 : 1.5 + Math.random() * .8
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 1;
    for (var i = 0; i < atoms.length; i++) {
      var a = atoms[i];
      for (var j = i + 1; j < atoms.length; j++) {
        var b = atoms[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < BOND) {
          var alpha = (1 - d / BOND) * .32;
          ctx.strokeStyle = 'rgba(165, 148, 255,' + alpha + ')';
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    for (var k = 0; k < atoms.length; k++) {
      var p = atoms[k];
      ctx.fillStyle = p.q > 0 ? COLOR_POS : COLOR_NEG;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    }
  }

  function forces() {
    for (var i = 0; i < atoms.length; i++) {
      var a = atoms[i];
      for (var j = i + 1; j < atoms.length; j++) {
        var b = atoms[j], dx = a.x - b.x, dy = a.y - b.y, r2 = dx * dx + dy * dy;
        if (r2 >= RC * RC) continue;
        var r = Math.max(Math.sqrt(r2), RMIN);
        var f = A * (1 / r - 1 / RC);   // > 0: pushes a and b apart
        var fx = f * dx / r, fy = f * dy / r;
        a.vx += fx; a.vy += fy;
        b.vx -= fx; b.vy -= fy;
      }
    }
  }

  function step() {
    forces();
    for (var i = 0; i < atoms.length; i++) {
      var a = atoms[i];
      // gentle velocity-rescaling thermostat + tiny noise
      var v = Math.sqrt(a.vx * a.vx + a.vy * a.vy) || 1e-3;
      var scale = 1 + THERMO * (TARGET_V / v - 1);
      if (v * scale > VMAX) scale = VMAX / v;
      a.vx = a.vx * scale + (Math.random() - .5) * .01;
      a.vy = a.vy * scale + (Math.random() - .5) * .01;
      a.x += a.vx; a.y += a.vy;
      if (a.x < 0) { a.x = 0; a.vx = Math.abs(a.vx); }
      if (a.x > w) { a.x = w; a.vx = -Math.abs(a.vx); }
      if (a.y < 0) { a.y = 0; a.vy = Math.abs(a.vy); }
      if (a.y > h) { a.y = h; a.vy = -Math.abs(a.vy); }
    }
    draw();
    raf = requestAnimationFrame(step);
  }

  resize();
  if (reduce) draw(); else step();

  var timer;
  window.addEventListener('resize', function () {
    clearTimeout(timer);
    timer = setTimeout(function () { resize(); if (reduce) draw(); }, 150);
  });
  // Pause animation when the hero is off-screen.
  if ('IntersectionObserver' in window && !reduce) {
    new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { if (!raf) step(); }
      else { cancelAnimationFrame(raf); raf = null; }
    }).observe(canvas);
  }
})();
