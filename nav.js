// Shared nav and footer injected by each page
// Usage: <script src="../nav.js"></script> or <script src="nav.js"></script>

(function() {
  const path = window.location.pathname;
  const inSub = path.includes('/research/');
  const root = inSub ? '../' : '';

  const navHTML = `
  <nav>
    <a class="nav-logo" href="${root}index.html">Leo <span>Bouchon</span></a>
    <ul class="nav-links">
      <li><a href="${root}about.html">About</a></li>
      <li><a href="${root}research.html">Research</a></li>
      <li><a href="${root}club.html">AI Club</a></li>
      <li><a href="${root}blog.html">Blog</a></li>
      <li><a href="${root}resources.html">Resources</a></li>
      <li><a href="${root}contact.html" class="nav-cta">Contact</a></li>
    </ul>
  </nav>`;

  const footerHTML = `
  <footer>
    <div class="footer-links">
      <a href="${root}about.html">About</a>
      <a href="${root}research.html">Research</a>
      <a href="${root}club.html">AI Club</a>
      <a href="${root}resources.html">Resources</a>
      <a href="${root}contact.html">Contact</a>
      <a href="https://www.linkedin.com/in/lbouchon/" target="_blank">LinkedIn ↗</a>
      <a href="https://github.com/leobouchon" target="_blank">GitHub ↗</a>
    </div>
    <p>© 2026 Leo Bouchon · Monta Vista High School · Stanford AIMI Intern</p>
  </footer>`;

  // Inject nav immediately (script is at top of body, so this lands first)
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Highlight active nav link
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.href === window.location.href ||
        (a.href.includes(window.location.pathname) && window.location.pathname !== '/')) {
      a.classList.add('active');
    }
  });

  // Defer footer until full DOM is parsed so it lands at the true end
  document.addEventListener('DOMContentLoaded', function() {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  });
})();
