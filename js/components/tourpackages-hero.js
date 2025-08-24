// Tour Packages Page Hero Component
function initTourPackagesHero() {
  const section = document.getElementById('tour-packages-hero');
  if (!section) return;

  section.className = 'tp-hero';
  section.innerHTML = `
    <div class="container">
      <div class="tp-hero-content">
        <span class="tp-hero-subtitle">Curated • Inclusive • Flexible</span>
        <h1 class="tp-hero-title">Explore Our Tour Packages</h1>
        <p class="tp-hero-description">Handpicked itineraries including flights, hotels, and experiences. Book in a few clicks.</p>
        <div class="tp-hero-actions">
          <a href="#tour-packages" class="btn">Browse Packages</a>
        </div>
      </div>
    </div>
  `;
}
