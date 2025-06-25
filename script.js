// Sticky Header e Menu Mobile
$(function() {
    // Sticky Header
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('.main_h').addClass('sticky');
        } else {
            $('.main_h').removeClass('sticky');
        }
    });
// ...existing code...

const darkModeBtn = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');
function setDarkMode(active) {
  document.body.classList.toggle('dark-mode', active);
  // Ícone SVG animado
  darkModeIcon.innerHTML = active
    ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" fill="#ffe082"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#e6a32e" stroke-width="2" stroke-linecap="round"/></svg>`
    : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="#3d5c53"/></svg>`;
  localStorage.setItem('urbanamente-dark', active ? '1' : '0');
}
if (darkModeBtn) {
  setDarkMode(localStorage.getItem('urbanamente-dark') === '1');
  darkModeBtn.onclick = () => setDarkMode(!document.body.classList.contains('dark-mode'));
}
    // Mobile Navigation
    $('.mobile-toggle').click(function() {
        $('.main_h').toggleClass('open-nav');
    });

    $('.main_h nav ul li a').click(function() {
        if ($('.main_h').hasClass('open-nav')) {
            $('.main_h').removeClass('open-nav');
        }
    });

    // Navegação suave
    $('nav ul li a').click(function(event) {
        var id = $(this).attr("href");
        if (id.startsWith("#")) {
            var offset = 70;
            var target = $(id).offset().top - offset;
            $('html, body').animate({
                scrollTop: target
            }, 500);
            event.preventDefault();
        }
    });
});
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60, // ajuste para o header fixo
          behavior: 'smooth'
        });
      }
    }
  });
});