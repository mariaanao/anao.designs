// Tooltip
const cursor = document.querySelector('.cursor');
const hoverMessage = document.querySelector('.hover-message');
const navbar = document.querySelector('.navbar');
const heroSection = document.querySelector('.hero');

// Tooltip Position
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;

    // Tooltip Hero
    if (e.target.closest('.hero') && !e.target.closest('.navbar')) {
        hoverMessage.style.left = `${e.pageX + 10}px`;
        hoverMessage.style.top = `${e.pageY + 10}px`;
        hoverMessage.style.opacity = '1';
    } else {
        hoverMessage.style.opacity = '0';
    }
});

// Tooltip Title
heroTitle.addEventListener('mouseover', () => {
    hoverMessage.classList.add('visible');
});

// Tooltip Visible
hoverMessage.classList.add('visible');

// Tooltip Invisible
heroTitle.addEventListener('mouseout', () => {
    hoverMessage.classList.remove('visible');
});

// Tooltip Navbar
navbar.addEventListener('mouseenter', () => {
    hoverMessage.style.opacity = '0'; 
});

navbar.addEventListener('mouseleave', () => {
    hoverMessage.style.opacity = '1';
});

// Smooth Scroll
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Logo
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Horizontal Scroll
const parallaxSection = document.querySelector('.parallax');

// Mouse Scroll
parallaxSection.addEventListener('wheel', (e) => {
    e.preventDefault();
    parallaxSection.scrollLeft += e.deltaY;
});