// Main Application Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Helper to safely call initializers only if they exist
    const safeInit = (name) => {
        const fn = window[name];
        if (typeof fn === 'function') fn();
    };
    
    // Initialize components (safely, per-page)
    safeInit('initHeader');
    safeInit('initFindFlightsHero');
    safeInit('initHero');
    safeInit('initBooking');
    safeInit('initFindFlights');
    safeInit('initFlightsMap');
    safeInit('initBestHotels');
    safeInit('initTourPackagesHero');
    safeInit('initBookHotelHero');
    safeInit('initBookHotel');
    safeInit('initTourPackages');
    safeInit('initDestinations');
    safeInit('initServices');
    safeInit('initReviews');
    safeInit('initNewsletter');
    safeInit('initFooter');
    
    // Set active nav link based on current section
    window.addEventListener('scroll', setActiveNavLink);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    console.log('SoulFly Travel App Initialized');
});

// Set active navigation link based on scroll position
function setActiveNavLink() {
    const sections = ['hero', 'booking', 'find-flights', 'map', 'destinations', 'services', 'reviews', 'newsletter'];
    const scrollPosition = window.scrollY + 100; // Add offset for fixed header
    
    sections.forEach(section => {
        const element = document.getElementById(section);
        if (!element) return;
        
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${section}`);
            });
        }
    });
}

// Initialize mobile menu toggle
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }
}

// Close mobile menu when clicking outside
function closeMobileMenuOnClickOutside() {
    document.addEventListener('click', (e) => {
        const navLinks = document.querySelector('.nav-links');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (navLinks && navLinks.classList.contains('active') && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.mobile-menu-btn')) {
            navLinks.classList.remove('active');
            menuBtn.innerHTML = '☰';
        }
    });
}

// Helper function to create DOM elements
function createElement(tag, className, content = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.textContent = content;
    return element;
}
