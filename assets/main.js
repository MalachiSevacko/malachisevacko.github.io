// Auto-mark the current page in the navbar
(function () {
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const target = a.getAttribute('href');
    if ((here === '' && target === 'index.html') || here === target) {
      a.setAttribute('aria-current', 'page');
    }
  });
})();
