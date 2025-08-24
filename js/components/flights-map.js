// Find Flights - Map Component (Leaflet)
function initFlightsMap() {
  const section = document.getElementById('map');
  if (!section) return;

  // Render section content
  section.classList.add('flights-map');
  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Explore Routes on Map</h2>
        <p class="section-subtitle">Browse flight routes across Asia and nearby regions</p>
      </div>
      <div id="map-view" aria-label="World map centered on Asia" role="region"></div>
    </div>
  `;

  // Initialize Leaflet map
  if (typeof L === 'undefined') {
    console.warn('Leaflet not loaded');
    return;
  }

  const map = L.map('map-view', {
    zoomControl: true,
    scrollWheelZoom: false,
    worldCopyJump: true,
  });

  // Center on Asia region (approx)
  map.setView([23, 80], 3); // lat, lng, zoom

  // Base layers (multiple map types with English labels)
  const cartoLight = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  });
  const cartoDark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  });
  const esriSat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri — Sources: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    maxZoom: 19
  });
  const openTopo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap (CC-BY-SA)',
    subdomains: 'abc',
    maxZoom: 17
  });

  // Set default baselayer
  cartoLight.addTo(map);

  // Layer control
  const baseLayers = {
    'Light (Carto)': cartoLight,
    'Dark (Carto)': cartoDark,
    'Satellite (Esri)': esriSat,
    'Terrain (OpenTopoMap)': openTopo
  };
  L.control.layers(baseLayers, null, { position: 'topright', collapsed: true }).addTo(map);

  // Slight bounds to keep user roughly around Asia (optional)
  const southWest = L.latLng(-12, 22);   // Africa/Indian Ocean edge
  const northEast = L.latLng(60, 150);   // Far East Russia / Pacific edge
  const bounds = L.latLngBounds(southWest, northEast);
  map.setMaxBounds(bounds);
  map.on('drag', () => {
    map.panInsideBounds(bounds, { animate: true });
  });

  // Plot airports from data.js if available
  const airports = window.appData && Array.isArray(window.appData.airports)
    ? window.appData.airports
    : [];

  airports.forEach(ap => {
    if (!ap || typeof ap.lat !== 'number' || typeof ap.lng !== 'number') return;
    const label = `${ap.code ? ap.code + ' — ' : ''}${ap.name || 'Airport'}${ap.city ? `, ${ap.city}` : ''}`;
    L.marker([ap.lat, ap.lng]).addTo(map).bindPopup(label);
  });
}
