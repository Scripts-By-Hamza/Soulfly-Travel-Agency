// Header Component
function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;
    
    const headerHTML = `
        <div class="header-container">
            <a href="index.html" class="logo">
                <img src="assets/logo.png" alt="Logo" class="logo-img" />
                <span>SoulFly</span>
            </a>
            
            <nav class="nav-links" id="primary-navigation" aria-label="Primary">
                <a href="index.html" class="active">Home</a>
                <a href="find-flights.html">Find Flights</a>
                <a href="book-hotel.html">Book Hotel</a>
                <a href="tour-packages.html">Tour Packages</a>
                <a href="index.html#services">Services</a>
                <a href="index.html#reviews">Reviews</a>
                <!-- <a href="index.html#newsletter">Contact</a> -->
            </nav>
            
            <button class="mobile-menu-btn" aria-label="Open menu" aria-expanded="false" aria-controls="primary-navigation">☰</button>
        </div>
    `;
    
    header.innerHTML = headerHTML;
    initMobileMenu();
    closeMobileMenuOnClickOutside();
}

// Initialize mobile menu functionality
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navLinks.classList.toggle('active');
            menuBtn.innerHTML = isOpen ? '✕' : '☰';
            menuBtn.setAttribute('aria-expanded', String(isOpen));
            menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        });

        // Close on link click (better UX on mobile)
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuBtn.innerHTML = '☰';
                    menuBtn.setAttribute('aria-expanded', 'false');
                    menuBtn.setAttribute('aria-label', 'Open menu');
                }
            });
        });

        // Close on Escape key
        document.addEventListener('keydown', (evt) => {
            if (evt.key === 'Escape' && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuBtn.innerHTML = '☰';
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.setAttribute('aria-label', 'Open menu');
            }
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
            menuBtn.setAttribute('aria-expanded', 'false');
            menuBtn.setAttribute('aria-label', 'Open menu');
        }
    });
}
