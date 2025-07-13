// Typed.js initialization for animated text
const typed = new Typed('.typing-text', {
    strings: [
        'Cloud Engineer',
        'Azure Specialist',
        'Mathematical Engineering Student'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Form submission handling with email validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message with animation
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        contactForm.appendChild(successMessage);
        
        // Remove success message after 3 seconds
        setTimeout(() => {
            successMessage.remove();
            this.reset();
        }, 3000);
    });
}

// Animate elements on scroll with Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .timeline-item, .skill-tag').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.5s ease';
    observer.observe(element);
});

// Fade-in on scroll for all main sections
const fadeSections = document.querySelectorAll('section, header');
const fadeIn = (el) => {
  el.classList.remove('opacity-0', 'translate-y-8');
  el.classList.add('opacity-100', 'translate-y-0');
};
const observerFade = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fadeIn(entry.target);
      observerFade.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
fadeSections.forEach(section => {
  observerFade.observe(section);
});
// Animate icons (e.g., floating effect)
document.querySelectorAll('.animated-svg, .fa-linkedin').forEach(icon => {
  icon.classList.add('animated-svg');
});
// Optionally, add floating particles or SVGs for background

// Dark mode toggle with local storage
const darkModeToggle = document.createElement('button');
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.innerHTML = '🌙';
darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');
document.body.appendChild(darkModeToggle);

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '☀️';
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    darkModeToggle.innerHTML = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Add dark mode styles
const style = document.createElement('style');
style.textContent = `
    .dark-mode {
        --text-color: #f3f4f6;
        --background-color: #1f2937;
        --card-background: #374151;
        --primary-color: #60a5fa;
    }
    
    .success-message {
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #10b981;
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        animation: slideIn 0.3s ease-out;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .animate {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .dark-mode-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px;
        border-radius: 50%;
        border: none;
        background-color: var(--card-background);
        color: var(--text-color);
        cursor: pointer;
        z-index: 1000;
        transition: transform 0.3s ease;
    }
    
    .dark-mode-toggle:hover {
        transform: scale(1.1);
    }
    
    .typing-text {
        display: inline-block;
        min-height: 1.5em;
    }
`;
document.head.appendChild(style);

// Initialize background animation
import('./background.js').catch(error => console.error('Error loading background animation:', error)); 