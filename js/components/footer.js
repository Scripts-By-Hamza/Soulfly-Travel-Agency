// Footer Component
function initFooter() {
    const footer = document.getElementById('footer');
    if (!footer) return;
    
    const currentYear = new Date().getFullYear();
    // Ensure the footer has the correct root class for styling
    footer.classList.add('footer');

    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-about">
                    <div class="footer-brand"><img src="assets/logo.png" alt="Logo" />SoulFly</div>
                    <p class="footer-description">Your trusted travel partner for unforgettable experiences. We provide the best travel services to make your journey comfortable and memorable.</p>
                    <div class="social-links">
                        <a href="https://www.instagram.com/scriptsbyhamza/" target="_blank" rel="noopener" class="social-link" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/muhammad-hamza-24d03/" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/Scripts-By-Hamza" target="_blank" rel="noopener" class="social-link" aria-label="GitHub"><i class="fab fa-github"></i></a>
                    </div>
                </div>

                <div class="footer-column">
                    <h3 class="footer-title">Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#destinations">Destinations</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#reviews">Testimonials</a></li>
                        <li><a href="#newsletter">Contact</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h3 class="footer-title">Support</h3>
                    <ul class="footer-links">
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Booking Policy</a></li>
                        <li><a href="#">Cancellation Policy</a></li>
                        <li><a href="#">Help Center</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h3 class="footer-title">Contact Us</h3>
                    <ul class="footer-links">
                        <li>
                            <a href="#"><i class="fas fa-map-marker-alt"></i> Lahore, Pakistan</a>
                        </li>
                        <li>
                            <a href="tel:+923001234567"><i class="fas fa-phone-alt"></i> +92 300 1234567</a>
                        </li>
                        <li>
                            <a href="mailto:ranahamza241203@gmail.com"><i class="fas fa-envelope"></i> info@soulfly.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <p>&copy; ${currentYear} SoulFly Travel. All Rights Reserved. <a href="https://github.com/Scripts-By-Hamza">Scripts By Hamza</a></p>
                    <div class="footer-bottom-links">
                        <a href="#">Terms</a>
                        <a href="#">Privacy</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

