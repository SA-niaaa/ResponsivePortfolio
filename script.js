
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};

const icon = document.getElementById('alertIcon');
  icon.addEventListener('click', () => {
    alert('Phone Number: +91 9863178567');
  });


ScrollReveal({
    reset: true, distance: '80px', duration: 2000, delay: 200
});


ScrollReveal().reveal('.h-con, .heading', { origin: 'top'});
ScrollReveal().reveal('.h-img,.ski-con, .port-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.h-con h1, .about-img', { origin: 'left'});
