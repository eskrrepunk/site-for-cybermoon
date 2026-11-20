// ========================================
// CYBER MOON — JavaScript
// ========================================

// ===== Mobile Menu Toggle =====
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = 80;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

// ===== Pricing Tabs =====
function switchTab(tabName) {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.pricing-tab');
    tabButtons.forEach(button => button.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    const selectedButton = document.querySelector(`[data-tab="${tabName}"]`);
    const selectedContent = document.querySelector(`[data-tab-content="${tabName}"]`);
    if (selectedButton) selectedButton.classList.add('active');
    if (selectedContent) selectedContent.classList.add('active');
}

// ===== Booking Modal =====
const bookingModal = document.getElementById('booking-modal');
const bookingForm = document.getElementById('booking-form');

function openBookingModal() {
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    bookingModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) closeBookingModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookingModal.classList.contains('active')) closeBookingModal();
});

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(bookingForm);
    const data = {
        zone: formData.get('zone'),
        hours: formData.get('hours'),
        name: formData.get('name'),
        contact: formData.get('contact')
    };
    alert(`✅ Заявка отправлена!\n\nИмя: ${data.name}\nЗона: ${data.zone === 'standard' ? 'Standard Zone' : 'VIP Bootcamp'}\nВремя: ${data.hours}\n\nМы свяжемся с вами в ближайшее время!`);
    bookingForm.reset();
    closeBookingModal();
    console.log('Booking data:', data);
});

// ===== Navbar Scroll Effect =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar-glass');
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    }
    lastScroll = currentScroll;
});

// ===== Intersection Observer for Animations =====
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.glass-card, .glass-card-hardware, .glass-card-hardware-vip, .pricing-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});

// ===== Parallax Effect for Hero =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    const heroOverlay = document.querySelector('.hero-overlay');
    if (heroBg) heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    if (heroOverlay && scrolled < window.innerHeight) {
        heroOverlay.style.opacity = 0.85 + (scrolled / window.innerHeight) * 0.15;
    }
});

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('%c🌙 CYBER MOON 🌙', 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #a855f7, #ec4899); -webkit-background-clip: text; color: transparent;');
console.log('%cДобро пожаловать в киберспортивный клуб!', 'font-size: 14px; color: #a855f7;');

