// SECTION & NAV ACTIVE LINK HANDLING 
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('.header');

//MOBILE NAVBAR ELEMENTS
const menuIcon = document.getElementById('menu');
const navbar = document.querySelector('.navbar');

// MOBILE NAVBAR TOGGLE
if (menuIcon && navbar) {
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark'); // bars -> close icon
    navbar.classList.toggle('active');     // show/hide menu
  });
}

// SCROLL EVENTS
window.onscroll = () => {

  // Close mobile menu on scroll
  if (menuIcon && navbar) {
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
  }

  let top = window.scrollY;

  // Active section highlighting
  sections.forEach(sec => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));

      const activeLink = document.querySelector(
        `header nav a[href*="${id}"]`
      );

      if (activeLink) activeLink.classList.add('active');
    }
  });

  // Sticky header
  header.classList.toggle('sticky', top > 100);
};

// ALERT ICON
const icon = document.getElementById('alertIcon');
if (icon) {
  icon.addEventListener('click', () => {
    alert('Phone Number: +91 9863178567');
  });
}

// SCROLL REVEAL ANIMATIONS
if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.h-con, .heading', { origin: 'top' });
  ScrollReveal().reveal('.h-img, .ski-con, .port-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.h-con h1, .about-img', { origin: 'left' });
}
