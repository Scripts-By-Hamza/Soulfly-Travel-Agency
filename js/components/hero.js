// Hero Section Component
function initHero() {
    const hero = document.getElementById('hero');
    if (!hero) return;
    
    hero.className = 'hero';
    hero.innerHTML = `
        <div class="hero-content">
            <span class="hero-subtitle">Plan Your Journey</span>
            <h1 class="hero-title">Discover Your Next Adventure</h1>
            <p class="hero-description">Explore the world's most beautiful destinations with our exclusive travel packages and create memories that last a lifetime.</p>
            <div class="hero-buttons">
                <a href="#destinations" class="btn">Explore Destinations</a>
                <a href="#booking" class="btn btn-outline">Book Now</a>
            </div>
        </div>
    `;
}
