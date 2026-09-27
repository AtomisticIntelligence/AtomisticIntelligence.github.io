// Runs in <head> before first paint so the page never flashes the wrong language.
// Default is Chinese; a visitor's choice (via the 中文/EN button) is remembered.
(function () {
  var lang = 'zh';
  try {
    var saved = localStorage.getItem('ail-lang');
    if (saved === 'en' || saved === 'zh') lang = saved;
  } catch (e) {}
  var m = /[?&]lang=(en|zh)\b/.exec(location.search); // ?lang=en for sharing an English link
  if (m) lang = m[1];
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
})();
