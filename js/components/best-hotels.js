// Best Hotels Section Component for Find Flights page
function initBestHotels() {
  const section = document.getElementById('best-hotels');
  if (!section) return;

  // Use appData if provided later; for now default sample list
  const hotels = (window.appData && window.appData.bestHotels) ? window.appData.bestHotels : [
    { id: 1, name: 'Skyline Grand Hotel', location: 'Dubai, UAE', image: 'dubaitour.jpg', rating: 4.8, price: 140 },
    { id: 2, name: 'Marina Bay Suites', location: 'Singapore', image: 'singapore.jpg', rating: 4.7, price: 165 },
    { id: 3, name: 'Caspian View Resort', location: 'Baku, Azerbaijan', image: 'baku.webp', rating: 4.6, price: 120 },
    { id: 4, name: 'Paris Central Hotel', location: 'Paris, France', image: 'paristour.jpg', rating: 4.7, price: 175 },
    { id: 5, name: 'Shinjuku Comfort Inn', location: 'Tokyo, Japan', image: 'tokyo2.jpg', rating: 4.5, price: 155 },
    { id: 6, name: 'Bosphorus Boutique Stay', location: 'Istanbul, Turkey', image: 'istanbul.webp', rating: 4.6, price: 130 },
    { id: 7, name: 'Sydney Harbour Suites', location: 'Sydney, Australia', image: 'sydney.webp', rating: 4.8, price: 190 },
    { id: 8, name: 'Royal Kensington Hotel', location: 'London, UK', image: 'london.webp', rating: 4.6, price: 170 },
  ];

  // Show full list only on Book Hotel page or when explicitly requested via data-variant="full"
  const isFull = (section.dataset && section.dataset.variant === 'full') || /book-hotel\.html$/i.test(location.pathname || '');
  const list = isFull ? hotels : hotels.slice(0, 3);

  // Ensure global hotel dialog exists
  ensureHotelDialog();

  section.className = 'best-hotels';
  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Best Hotels To Stay</h2>
        <p class="section-subtitle">Top-rated stays near popular flight destinations</p>
      </div>
      <div class="hotels-grid">
        ${list.map(h => `
          <article class="hotel-card">
            <img class="hotel-image" src="assets/${h.image}" alt="${h.name}" />
            <div class="hotel-body">
              <h3 class="hotel-name">${h.name}</h3>
              <div class="hotel-location"><i class="fas fa-map-marker-alt"></i> ${h.location}</div>
              <div class="hotel-meta">
                <div class="hotel-rating"><i class="fas fa-star"></i> ${h.rating.toFixed(1)}</div>
                <div class="hotel-price">From $${h.price}/night</div>
              </div>
            </div>
            <div class="hotel-actions">
              <button class="btn btn-outline hotel-details" data-id="${h.id}">Details</button>
              <a href="hotel-booked.html" class="btn">Book</a>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `;

  // Wire up Details buttons -> open dialog
  section.querySelectorAll('.hotel-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = Number(e.currentTarget.getAttribute('data-id'));
      const hotel = hotels.find(h => h.id === id);
      if (hotel) openHotelDialog(hotel);
    });
  });
}

function ensureHotelDialog() {
  if (document.getElementById('hotel-dialog')) return;

  const dlg = document.createElement('dialog');
  dlg.id = 'hotel-dialog';
  dlg.className = 'tp-dialog';
  dlg.innerHTML = `
    <div class="tp-modal">
      <div class="tp-modal-header">
        <h3 class="tp-modal-title" id="hotel-modal-title">Hotel Details</h3>
        <form method="dialog">
          <button class="tp-modal-close btn btn-outline" value="close">Close</button>
        </form>
      </div>
      <div class="tp-modal-body"></div>
    </div>
  `;
  document.body.appendChild(dlg);

  // Click on dialog backdrop to close
  dlg.addEventListener('click', (e) => {
    const rect = dlg.getBoundingClientRect();
    const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
    if (!inside) dlg.close();
  });
  const closeBtn = dlg.querySelector('.tp-modal-close');
  if (closeBtn) closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof dlg.close === 'function') dlg.close();
    else dlg.removeAttribute('open');
  });
}

function openHotelDialog(hotel) {
  const dlg = document.getElementById('hotel-dialog');
  if (!dlg) return;
  const body = dlg.querySelector('.tp-modal-body');
  body.innerHTML = `
    <div class="tp-modal-grid">
      <img class="tp-modal-image" src="assets/${hotel.image}" alt="${hotel.name}">
      <div class="tp-modal-content">
        <h4>${hotel.name}</h4>
        <div class="tp-meta"><i class="fas fa-map-marker-alt"></i> ${hotel.location} • Rating ${hotel.rating?.toFixed ? hotel.rating.toFixed(1) : hotel.rating}</div>
        <div class="tp-meta">From $${hotel.price}/night</div>
        <p class="tp-desc">Enjoy a comfortable stay with top amenities and great location. Contact us to customize your stay.</p>
      </div>
    </div>
  `;
  if (typeof dlg.showModal === 'function') {
    dlg.showModal();
  } else {
    dlg.setAttribute('open', '');
  }
}
