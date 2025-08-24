// Book Hotel Section Component
function initBookHotel() {
  const section = document.getElementById('book-hotel');
  if (!section) return;

  section.className = 'book-hotel';
  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Book Hotel</h2>
        <p class="section-subtitle">Search and compare the best hotel deals</p>
      </div>
      
      <form id="book-hotel-form" class="hotel-form">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="city">City</label>
            <input class="form-input" type="text" id="city" name="city" placeholder="Enter city" required />
          </div>
          
          <div class="form-group">
            <label class="form-label" for="checkin">Check-in</label>
            <input class="form-date" type="date" id="checkin" name="checkin" required />
          </div>
          
          <div class="form-group">
            <label class="form-label" for="checkout">Check-out</label>
            <input class="form-date" type="date" id="checkout" name="checkout" required />
          </div>
          
          <div class="form-group">
            <label class="form-label" for="guests">Guests</label>
            <select class="form-select" id="guests" name="guests">
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="rooms">Rooms</label>
            <select class="form-select" id="rooms" name="rooms">
              <option value="1">1 Room</option>
              <option value="2">2 Rooms</option>
              <option value="3">3 Rooms</option>
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="rating">Min Rating</label>
            <select class="form-select" id="rating" name="rating">
              <option value="any">Any</option>
              <option value="3">3+ Stars</option>
              <option value="4">4+ Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>
        </div>
        
        <div class="form-actions">
          <button type="submit" class="btn">Find Hotels</button>
        </div>
      </form>
    </div>
  `;

  initBookHotelForm();
}

function initBookHotelForm() {
  const form = document.getElementById('book-hotel-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    console.log('Searching hotels with:', data);

    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Searching...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      // Redirect to confirmation page
      window.location.href = 'hotel-booked.html';
    }, 1200);
  });
}
