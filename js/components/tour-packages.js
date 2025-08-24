// Shared Tour Packages Component (uses native <dialog> for reliability)
function initTourPackages() {
  const section = document.getElementById('tour-packages');
  if (!section) return;

  const data = (window.appData && window.appData.packages) ? window.appData.packages : [];
  const isFull = (section.dataset && section.dataset.variant === 'full') || /tour-packages\.html$/i.test(location.pathname || '');
  const list = isFull ? data : data.slice(0, 3);

  // Ensure global dialog exists
  ensureTPDialog();

  section.className = 'tour-packages';
  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Tour Packages</h2>
        <p class="section-subtitle">Curated trips with flights, hotels, and experiences included</p>
      </div>
      <div class="packages-grid">
        ${list.map(pkg => `
          <article class="package-card">
            <img class="package-image" src="assets/${pkg.image}" alt="${pkg.title}" />
            <div class="package-body">
              <h3 class="package-title">${pkg.title}</h3>
              <div class="package-meta">${pkg.days}</div>
              <div class="package-price">From $${pkg.price}</div>
            </div>
            <div class="package-actions">
              <button class="btn btn-outline pkg-details" data-id="${pkg.id}">Details</button>
              <a class="btn" href="tour-booked.html">Book Now</a>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `;

  // Wire up Details buttons -> open dialog
  section.querySelectorAll('.pkg-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = Number(e.currentTarget.getAttribute('data-id'));
      const pkg = data.find(p => p.id === id);
      if (pkg) openTPDialog(pkg);
    });
  });
}

function ensureTPDialog() {
  if (document.getElementById('tp-dialog')) return; // already exists

  const dlg = document.createElement('dialog');
  dlg.id = 'tp-dialog';
  dlg.className = 'tp-dialog';
  dlg.innerHTML = `
    <div class="tp-modal">
      <div class="tp-modal-header">
        <h3 class="tp-modal-title" id="tp-modal-title">Package Details</h3>
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
    const dialogRect = dlg.getBoundingClientRect();
    const clickedInDialog = (
      e.clientX >= dialogRect.left && e.clientX <= dialogRect.right &&
      e.clientY >= dialogRect.top && e.clientY <= dialogRect.bottom
    );
    if (!clickedInDialog) dlg.close();
  });
  // Ensure the Close button works even without native dialog support
  const closeBtn = dlg.querySelector('.tp-modal-close');
  if (closeBtn) closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof dlg.close === 'function') dlg.close();
    else dlg.removeAttribute('open');
  });
}

function openTPDialog(pkg) {
  const dlg = document.getElementById('tp-dialog');
  if (!dlg) return;
  const body = dlg.querySelector('.tp-modal-body');
  body.innerHTML = `
    <div class="tp-modal-grid">
      <img class="tp-modal-image" src="assets/${pkg.image}" alt="${pkg.title}">
      <div class="tp-modal-content">
        <h4>${pkg.title}</h4>
        <div class="tp-meta">${pkg.days} • From $${pkg.price} ${pkg.currency || ''}</div>
        <p class="tp-desc">${pkg.description || ''}</p>
        <div class="tp-lists">
          <div>
            <h5>Inclusions</h5>
            <ul>${(pkg.inclusions || []).map(i => `<li>${i}</li>`).join('')}</ul>
          </div>
          <div>
            <h5>Highlights</h5>
            <ul>${(pkg.highlights || []).map(h => `<li>${h}</li>`).join('')}</ul>
          </div>
        </div>
      </div>
    </div>
  `;
  if (typeof dlg.showModal === 'function') {
    dlg.showModal();
  } else {
    // Fallback: open as block element
    dlg.setAttribute('open', '');
  }
}
