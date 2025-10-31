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
  'Images/sun.webp',
  'Images/new.jpg',
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



//Email Form

// script.js

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

   // Load-in animations for sections on scroll
   const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });
  
  document.querySelectorAll("section").forEach(section => {
    section.classList.add("fade-section");
    observer.observe(section);
  });
  
  // Form submission alert (mock) 
  const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  sendEmail(); // ✅ Send the email on form submit
});

function sendEmail() {
  const templateParams = {
    name: document.querySelector("#name").value,
    subject: document.querySelector("#subject").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  // user_title: "Contact Form Request",
  };

  emailjs
    .send("service_7rim93z", "template_efjwl4i", templateParams)
    .then(() => {
      form.style.display = 'none';
      successMessage.classList.remove('hidden');
    })
    .catch(() => alert("Email not sent"));
}

function resetForm() {
  form.reset();
  form.style.display = 'block';
  successMessage.classList.add('hidden');
}
