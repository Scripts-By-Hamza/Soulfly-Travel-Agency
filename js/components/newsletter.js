// Newsletter Component
function initNewsletter() {
    const newsletterSection = document.getElementById('newsletter');
    if (!newsletterSection) return;
    
    newsletterSection.className = 'newsletter';
    newsletterSection.innerHTML = `
        <div class="container">
            <div class="newsletter-content">
                <span class="newsletter-subtitle">Stay Updated</span>
                <h2 class="newsletter-title">Subscribe to Our Newsletter</h2>
                <p class="newsletter-description">Get the latest travel deals, tips, and news delivered straight to your inbox.</p>
                <form class="newsletter-form" id="newsletter-form">
                    <div class="form-group">
                        <input class="newsletter-input" type="email" placeholder="Your email address" required>
                        <button type="submit" class="newsletter-btn">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    // Initialize newsletter form submission
    initNewsletterForm();
}

// Initialize newsletter form submission
function initNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (email && validateEmail(email)) {
            // Here you would typically send this to your server
            console.log('Subscribing email:', email);
            
            // Show success message
            const successMessage = document.createElement('p');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Thank you for subscribing!';
            successMessage.style.color = '#4CAF50';
            successMessage.style.marginTop = '15px';
            
            // Remove any existing messages
            const existingMessage = form.querySelector('.success-message, .error-message');
            if (existingMessage) {
                existingMessage.remove();
            }
            
            form.appendChild(successMessage);
            emailInput.value = ''; // Clear the input
            
            // Remove message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        } else {
            // Show error message
            const errorMessage = document.createElement('p');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'Please enter a valid email address.';
            errorMessage.style.color = '#f44336';
            errorMessage.style.marginTop = '15px';
            
            // Remove any existing messages
            const existingMessage = form.querySelector('.success-message, .error-message');
            if (existingMessage) {
                existingMessage.remove();
            }
            
            form.appendChild(errorMessage);
        }
    });
}

// Simple email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
