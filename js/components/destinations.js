// Destinations Component
function initDestinations() {
    const destinationsSection = document.getElementById('destinations');
    if (!destinationsSection) return;
    
    destinationsSection.className = 'destinations';
    destinationsSection.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2>Popular Destinations</h2>
                <p>Explore our most popular travel destinations</p>
            </div>
            <div class="destinations-grid" id="destinations-grid">
                <!-- Destinations will be dynamically inserted here -->
            </div>
        </div>
    `;
    
    // Render destinations
    renderDestinations();
}

// Render destinations from data
function renderDestinations() {
    const destinationsGrid = document.getElementById('destinations-grid');
    if (!destinationsGrid || !window.appData || !window.appData.destinations) return;
    
    // Clear existing content
    destinationsGrid.innerHTML = '';
    
    // Create destination cards
    window.appData.destinations.forEach(destination => {
        const destinationCard = document.createElement('div');
        destinationCard.className = 'destination-card';
        destinationCard.innerHTML = `
            <div class="destination-img">
                <img src="assets/${destination.image}" alt="${destination.name}">
                <div class="destination-overlay">
                    <a href="tour-packages.html" class="btn">Book Now</a>
                </div>
            </div>
            <div class="destination-info">
                <h3>${destination.name}</h3>
                <div class="destination-meta">
                    <span><i class="far fa-clock"></i> ${destination.duration}</span>
                    <span><i class="fas fa-star"></i> ${destination.rating} (${destination.reviews})</span>
                </div>
                <div class="destination-price">
                    From $${destination.price} <span>/ person</span>
                </div>
            </div>
        `;
        
        destinationsGrid.appendChild(destinationCard);
    });
}
