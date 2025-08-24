// Booking Section Component
function initBooking() {
    const booking = document.getElementById('booking');
    if (!booking) return;
    
    booking.className = 'booking';
    booking.innerHTML = `
        <div class="container">
            <h2 class="section-title">Book Your Trip</h2>
            <div class="booking-card">
                <div class="booking-tabs">
                    <button class="booking-tab active" data-tab="flights"><span class="tab-icon"><i class="fas fa-plane"></i></span>Flights</button>
                    <button class="booking-tab" data-tab="hotels"><span class="tab-icon"><i class="fas fa-hotel"></i></span>Hotels</button>
                    <button class="booking-tab" data-tab="tours"><span class="tab-icon"><i class="fas fa-route"></i></span>Tours</button>
                </div>
                
                <!-- Flights Tab Content -->
                <div id="flights-tab" class="tab-content active">
                    <form class="booking-form">
                        <div class="form-group">
                            <label for="from">From</label>
                            <input type="text" id="from" placeholder="City or Airport">
                        </div>
                        <div class="form-group">
                            <label for="to">To</label>
                            <input type="text" id="to" placeholder="City or Airport">
                        </div>
                        <div class="form-group">
                            <label for="departure">Departure</label>
                            <input type="date" id="departure">
                        </div>
                        <div class="form-group">
                            <label for="return">Return</label>
                            <input type="date" id="return">
                        </div>
                        <div class="form-group">
                            <label for="passengers">Passengers</label>
                            <select id="passengers">
                                <option value="1">1 Passenger</option>
                                <option value="2">2 Passengers</option>
                                <option value="3">3 Passengers</option>
                                <option value="4">4 Passengers</option>
                                <option value="5">5+ Passengers</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="class">Class</label>
                            <select id="class">
                                <option value="economy">Economy</option>
                                <option value="premium">Premium Economy</option>
                                <option value="business">Business</option>
                                <option value="first">First Class</option>
                            </select>
                        </div>
                    </form>
                    <div class="booking-actions">
                        <button class="btn">Search Flights</button>
                    </div>
                </div>
                
                <!-- Hotels Tab Content -->
                <div id="hotels-tab" class="tab-content">
                    <form class="booking-form">
                        <div class="form-group">
                            <label for="destination">Destination</label>
                            <input type="text" id="destination" placeholder="City, Hotel, or Area">
                        </div>
                        <div class="form-group">
                            <label for="check-in">Check-in</label>
                            <input type="date" id="check-in">
                        </div>
                        <div class="form-group">
                            <label for="check-out">Check-out</label>
                            <input type="date" id="check-out">
                        </div>
                        <div class="form-group">
                            <label for="guests">Guests</label>
                            <select id="guests">
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guests</option>
                                <option value="3">3 Guests</option>
                                <option value="4">4 Guests</option>
                                <option value="5">5+ Guests</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="rooms">Rooms</label>
                            <select id="rooms">
                                <option value="1">1 Room</option>
                                <option value="2">2 Rooms</option>
                                <option value="3">3 Rooms</option>
                                <option value="4">4+ Rooms</option>
                            </select>
                        </div>
                    </form>
                    <div class="booking-actions">
                        <button class="btn">Search Hotels</button>
                    </div>
                </div>
                
                <!-- Tours Tab Content -->
                <div id="tours-tab" class="tab-content">
                    <form class="booking-form">
                        <div class="form-group">
                            <label for="tour-destination">Destination</label>
                            <input type="text" id="tour-destination" placeholder="Where to?">
                        </div>
                        <div class="form-group">
                            <label for="tour-date">Date</label>
                            <input type="date" id="tour-date">
                        </div>
                        <div class="form-group">
                            <label for="tour-type">Tour Type</label>
                            <select id="tour-type">
                                <option value="all">All Tours</option>
                                <option value="adventure">Adventure</option>
                                <option value="cultural">Cultural</option>
                                <option value="beach">Beach</option>
                                <option value="mountain">Mountain</option>
                                <option value="city">City Tour</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="tour-duration">Duration</label>
                            <select id="tour-duration">
                                <option value="any">Any Duration</option>
                                <option value="1-3">1-3 Days</option>
                                <option value="4-7">4-7 Days</option>
                                <option value="8-14">8-14 Days</option>
                                <option value="15+">15+ Days</option>
                            </select>
                        </div>
                    </form>
                    <div class="booking-actions">
                        <button class="btn">Find Tours</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Initialize tab switching
    initBookingTabs();
}

// Initialize booking tabs functionality
function initBookingTabs() {
    const tabButtons = document.querySelectorAll('.booking-tabs .booking-tab');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and content
            document.querySelectorAll('.booking-tabs .booking-tab').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding tab content
            const tabId = button.getAttribute('data-tab') + '-tab';
            document.getElementById(tabId).classList.add('active');
        });
    });
}
