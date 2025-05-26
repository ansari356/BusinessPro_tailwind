// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
        mobileMenu.classList.add('hidden');
    }
});

// Close mobile menu when clicking links
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('scroll', () => {
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

let current = '';
sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
    }
});

navLinks.forEach(link => {
    link.classList.remove('text-indigo-600');
    if (link.getAttribute('href').includes(current)) {
        link.classList.add('text-indigo-600');
    }
});
});

// Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100');
                entry.target.classList.remove('opacity-0');
            }
        });
    });

    // Observe all elements with 'animate-on-scroll' class
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
    });

      // Close mobile menu when clicking links
      document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Form submission
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form submission logic here
        alert('Thank you for your message! We will respond shortly.');
    });


     // Pricing Toggle
const pricingToggle = document.getElementById('pricing-toggle');
const toggleSwitch = document.getElementById('toggle-switch');
let isAnnual = false;

    
pricingToggle.addEventListener('click', () => {
    isAnnual = !isAnnual;
    const translateValue = isAnnual ? 'translateX(24px) translateY(-1px)' : 'translateX(0px) translateY(-1px)';
    toggleSwitch.style.transform = translateValue;

    document.querySelectorAll('.monthly-price').forEach(el => {
        el.classList.toggle('hidden', isAnnual);
    });
    
    document.querySelectorAll('.annual-price').forEach(el => {
        el.classList.toggle('hidden', !isAnnual);
    });
});


  // Form Submission
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const submitBtn = this.querySelector('button[type="submit"]');
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';

    // Simulate API call
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Message Sent!';
        
        // Reset form after 2 seconds
        setTimeout(() => {
            this.reset();
            submitBtn.innerHTML = 'Send Message';
        }, 2000);
    }, 1500);
});