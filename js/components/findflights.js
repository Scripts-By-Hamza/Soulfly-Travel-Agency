// Find Flights Component
function initFindFlights() {
  const section = document.getElementById('find-flights');
  if (!section) return;

  section.className = 'find-flights';
  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Find Flights</h2>
        <p class="section-subtitle">Search and compare flights to your favorite destinations</p>
      </div>

      <form id="find-flights-form" class="find-form">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="from">From</label>
            <input class="form-input" type="text" id="from" name="from" placeholder="City or Airport" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="to">To</label>
            <input class="form-input" type="text" id="to" name="to" placeholder="City or Airport" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="trip">Trip</label>
            <select class="form-select" id="trip" name="trip">
              <option value="round">Round Trip</option>
              <option value="oneway">One Way</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="depart">Depart</label>
            <input class="form-date" type="date" id="depart" name="depart" required />
          </div>

          <div class="form-group" id="return-group">
            <label class="form-label" for="return">Return</label>
            <input class="form-date" type="date" id="return" name="return" />
          </div>

          <div class="form-group">
            <label class="form-label" for="passengers">Passengers</label>
            <select class="form-select" id="passengers" name="passengers">
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="class">Class</label>
            <select class="form-select" id="class" name="class">
              <option value="economy">Economy</option>
              <option value="premium">Premium Economy</option>
              <option value="business">Business</option>
              <option value="first">First</option>
            </select>
          </div>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn">Find Flights</button>
        </div>
      </form>
    </div>
  `;

  initFindFlightsForm();
}

function initFindFlightsForm() {
  const form = document.getElementById('find-flights-form');
  if (!form) return;

  const trip = form.querySelector('#trip');
  const returnGroup = form.querySelector('#return-group');
  const returnInput = form.querySelector('#return');

  // Toggle return date visibility for one-way trips
  const toggleReturnVisibility = () => {
    const isRound = trip.value === 'round';
    returnGroup.style.display = isRound ? 'flex' : 'none';
    returnInput.required = isRound;
  };
  toggleReturnVisibility();
  trip.addEventListener('change', toggleReturnVisibility);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    console.log('Searching flights with:', data);

    // Placeholder success feedback
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Searching...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      // Redirect to confirmation page
      window.location.href = 'flight-booked.html';
    }, 1200);
  });
}
