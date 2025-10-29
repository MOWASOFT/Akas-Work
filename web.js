// Smooth scroll for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Contact form (demo)
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent successfully!');
  e.target.reset();
});

// Add bounce animation when icons are clicked
document.querySelectorAll('.social-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.style.transform = 'scale(0.9)';
    setTimeout(() => {
      icon.style.transform = 'scale(1.05)';
    }, 150);
  });
});

// ===== Rotating Background Images =====
const hero = document.getElementById('hero');
const heroImages = [
  'Images/Redcandle.jpg', // replace with your image paths
  'Images/Cowries.jpg',
  'Images/sun.webp'
];

let currentImage = 0;

// Apply initial image
hero.style.setProperty('--bg-image', `url(${heroImages[currentImage]})`);
hero.style.backgroundImage = `url(${heroImages[currentImage]})`;

// Function to change background image
function changeHeroImage() {
  currentImage = (currentImage + 1) % heroImages.length;
  hero.style.backgroundImage = `url(${heroImages[currentImage]})`;
}

// Rotate every 2 seconds
setInterval(changeHeroImage, 2000);
