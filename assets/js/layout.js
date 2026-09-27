// Shared header + footer for every page. Include right after <body data-page="...">.
(function () {
  var page = document.body.getAttribute('data-page') || 'home';

  var NAV = [
    { id: 'home',         href: 'index.html',        en: 'Home',         zh: '首页' },
    { id: 'research',     href: 'research.html',     en: 'Research',     zh: '研究方向' },
    { id: 'publications', href: 'publications.html', en: 'Publications', zh: '论文成果' },
    { id: 'people',       href: 'people.html',       en: 'People',       zh: '团队成员' },
    { id: 'news',         href: 'news.html',         en: 'News',         zh: '新闻动态' },
    { id: 'join',         href: 'join.html',         en: 'Join Us',      zh: '加入我们', cta: true }
  ];

  function t(en, zh) { return '<span class="l-en">' + en + '</span><span class="l-zh">' + zh + '</span>'; }

  var links = NAV.map(function (n) {
    var cls = [n.cta ? 'nav__cta' : '', n.id === page ? 'is-active' : ''].join(' ').trim();
    return '<a href="' + n.href + '"' + (cls ? ' class="' + cls + '"' : '') +
      (n.id === page ? ' aria-current="page"' : '') + '>' + t(n.en, n.zh) + '</a>';
  }).join('');

  var header =
    '<header class="nav" id="top">' +
      '<div class="nav__inner">' +
        '<a class="brand" href="index.html" aria-label="原子智能实验室 Atomistic Intelligence Lab">' +
          '<img class="brand__logo" src="assets/img/logo/AtomisticIntelligenceLab_horizontal_whitepurple.svg" alt="Atomistic Intelligence Lab">' +
          '<span class="brand__cn l-zh">原子智能实验室</span>' +
        '</a>' +
        '<nav class="nav__links" id="nav-links" aria-label="Main">' + links + '</nav>' +
        '<div class="nav__tools">' +
          '<button class="lang-toggle" id="lang-toggle" type="button" aria-label="切换语言 / Switch language">' +
            '<span class="lang-toggle__opt lang-toggle__opt--zh">中</span>' +
            '<span class="lang-toggle__opt lang-toggle__opt--en">EN</span>' +
          '</button>' +
          '<button class="nav__burger" id="nav-burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="nav-links">' +
            '<span></span><span></span><span></span>' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</header>';

  var footer =
    '<footer class="footer">' +
      '<div class="wrap footer__inner">' +
        '<div>' +
          '<div class="footer__brand">' +
            '<img class="footer__logo" src="assets/img/logo/AtomisticIntelligenceLab_horizontal_white.svg" alt="Atomistic Intelligence Lab">' +
            '<span class="footer__cn l-zh">原子智能实验室</span>' +
          '</div>' +
          '<div>' + t('Institute of AI Innovation and Industry (AI³), Fudan University', '复旦大学人工智能创新与产业研究院（AI³）') + '</div>' +
        '</div>' +
        '<div class="footer__links">' +
          '<a href="https://github.com/AtomisticIntelligence" target="_blank" rel="noopener">GitHub</a>' +
          '<a href="https://scholar.google.com/citations?user=PRPXA0QAAAAJ&amp;hl=en" target="_blank" rel="noopener">Google Scholar</a>' +
          '<a href="https://ai3.fudan.edu.cn/" target="_blank" rel="noopener">Fudan AI³</a>' +
        '</div>' +
      '</div>' +
      '<div class="wrap footer__copy">© ' + Math.max(2026, new Date().getFullYear()) + ' ' +
        t('Atomistic Intelligence Lab, Fudan University', '复旦大学 原子智能实验室') + '</div>' +
    '</footer>';

  document.body.insertAdjacentHTML('afterbegin', header);
  document.addEventListener('DOMContentLoaded', function () {
    document.body.insertAdjacentHTML('beforeend', footer);
  });
})();
