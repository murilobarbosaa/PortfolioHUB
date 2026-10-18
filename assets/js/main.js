(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');

  function isDark() {
    var forced = root.dataset.theme;
    if (forced) return forced === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function syncToggle() {
    toggle.setAttribute('aria-pressed', String(isDark()));
  }

  toggle.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    syncToggle();
  });
  syncToggle();

  // Filtro dos cards de projetos
  var chips = document.querySelectorAll('.chip');
  var cards = document.querySelectorAll('.card');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var filter = chip.dataset.filter;
      chips.forEach(function (c) {
        var active = c === chip;
        c.classList.toggle('is-active', active);
        c.setAttribute('aria-pressed', String(active));
      });
      cards.forEach(function (card) {
        card.hidden = filter !== 'todos' && card.dataset.cat !== filter;
      });
    });
  });
})();
