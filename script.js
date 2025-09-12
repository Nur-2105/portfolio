// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// Back to top button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

// CV download button
document.getElementById('download-cv').addEventListener('click', function(e) {
  e.preventDefault();
  alert('Fitur unduh CV akan segera tersedia. Terima kasih!');
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Pesan Anda telah berhasil dikirim. Terima kasih telah menghubungi saya!');
  this.reset();
});