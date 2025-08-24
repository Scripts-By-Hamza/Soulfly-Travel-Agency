// Find Flights Page Hero Component
function initFindFlightsHero() {
  const section = document.getElementById('find-flights-hero');
  if (!section) return;

  section.className = 'ff-hero';
  section.innerHTML = `
    <div class="container">
      <div class="ff-hero-content">
        <span class="ff-hero-subtitle">Smart • Fast • Affordable</span>
        <h1 class="ff-hero-title">Find Your Perfect Flight</h1>
        <p class="ff-hero-description">Compare routes, prices, and airlines in seconds. Start planning your next journey today.</p>
        <div class="ff-hero-actions">
          <a href="#find-flights" class="btn">Search Flights</a>
        </div>
      </div>
    </div>
  `;
}
