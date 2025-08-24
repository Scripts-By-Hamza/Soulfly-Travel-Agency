// Reviews Component
function initReviews() {
    const reviewsSection = document.getElementById('reviews');
    if (!reviewsSection) return;
    
    reviewsSection.className = 'reviews';
    reviewsSection.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2>What Our Travelers Say</h2>
                <p>Hear from our happy customers</p>
                <button class="see-all-btn" type="button">See all</button>
            </div>
            <div class="reviews-grid" id="reviews-grid">
                <!-- Reviews will be dynamically inserted here -->
            </div>
        </div>
    `;
    
    // Render reviews
    renderReviews();
}

// Render reviews from data
function renderReviews() {
    const reviewsGrid = document.getElementById('reviews-grid');
    if (!reviewsGrid || !window.appData || !window.appData.reviews) return;
    
    // Clear existing content
    reviewsGrid.innerHTML = '';
    
    // Create review cards (structure matches Reviews.css)
    window.appData.reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.innerHTML = `
            <div class="review-rating">
                <span class="star" style="color:#FFD166">★</span>
                <span class="star" style="color:#FFD166">★</span>
                <span class="star" style="color:#FFD166">★</span>
                <span class="star" style="color:#FFD166">★</span>
                <span class="star" style="color:#FFD166">★</span>
            </div>
            <h3>${review.name.split(' ')[0]}’s experience</h3>
            <p class="review-content">“${review.text}”</p>
            <button class="view-more-btn" type="button">View more</button>
            <div class="review-author">
                <div class="author-avatar">
                    <img src="assets/${review.image}" alt="${review.name}">
                </div>
                <div class="author-info">
                    <h4>${review.name}</h4>
                    <p>${review.location}</p>
                </div>
            </div>
        `;
        
        reviewsGrid.appendChild(reviewCard);
    });
}

// Slider removed; CSS grid layout used per Reviews.css
