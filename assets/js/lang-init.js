// Runs in <head> before first paint so the page never flashes the wrong language.
// Order: ?lang= in the URL > the visitor's saved choice (中/EN button) > system/browser language.
// A Chinese system language gives Chinese, any other gives English; Chinese if the browser reports none.
(function () {
  var lang = 'zh';
  var sys = (navigator.languages && navigator.languages[0]) || navigator.language || '';
  if (sys) lang = /^zh\b/i.test(sys) ? 'zh' : 'en';
  try {
    var saved = localStorage.getItem('ail-lang');
    if (saved === 'en' || saved === 'zh') lang = saved;
  } catch (e) {}
  var m = /[?&]lang=(en|zh)\b/.exec(location.search); // ?lang=en for sharing an English link
  if (m) lang = m[1];
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
})();
