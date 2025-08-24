// Book Hotel Page Hero Component
function initBookHotelHero() {
  const section = document.getElementById('book-hotel-hero');
  if (!section) return;

  section.className = 'bh-hero';
  section.innerHTML = `
    <div class="container">
      <div class="bh-hero-content">
        <span class="bh-hero-subtitle">Comfort • Convenience • Value</span>
        <h1 class="bh-hero-title">Find The Perfect Stay</h1>
        <p class="bh-hero-description">Search hotels by city, date, and preferences. Compare options and book in minutes.</p>
        <div class="bh-hero-actions">
          <a href="#book-hotel" class="btn">Search Hotels</a>
        </div>
      </div>
    </div>
  `;
}
