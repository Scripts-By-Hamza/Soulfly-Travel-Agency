// Services Component
function initServices() {
    const servicesSection = document.getElementById('services');
    if (!servicesSection) return;
    
    servicesSection.className = 'services';
    servicesSection.innerHTML = `
        <div class="container">
            <h2 class="section-title">Our Services</h2>
            <p class="section-subtitle">We offer the best services for your travel needs</p>
            <div class="services-grid" id="services-grid">
                <!-- Services will be dynamically inserted here -->
            </div>
        </div>
    `;
    
    // Render services
    renderServices();
}

// Render services from data
function renderServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid || !window.appData || !window.appData.services) return;
    
    // Clear existing content
    servicesGrid.innerHTML = '';
    
    // Create service cards
    window.appData.services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';

        // Map service to destination link
        const link = (service.title === 'Flight Booking')
            ? 'find-flights.html'
            : (service.title === 'Hotel Reservation')
                ? 'book-hotel.html'
            : (service.title === 'Tour Packages')
                ? 'tour-packages.html'
                : '#';

        serviceCard.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <a href="${link}" class="btn btn-outline">Learn More</a>
        `;
        
        servicesGrid.appendChild(serviceCard);
    });
}
