
document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#package-detail");
  if (!root) return;

  const id = new URLSearchParams(location.search).get("id") || "ooty";
  const pkg = PACKAGES.find(item => item.id === id) || PACKAGES[0];

  document.title = `${pkg.name} | ${SITE_CONFIG.businessName}`;

  root.innerHTML = `
    <div class="detail-layout">
      <article class="detail-main card">
        <div class="detail-cover">
          <img src="${pkg.image}" alt="${pkg.name}">
        </div>

        <div class="detail-title-row">
          <div>
            <span class="eyebrow">Tour Package</span>
            <h1>${pkg.name}</h1>
            <p class="lead">${pkg.description}</p>
          </div>
          <div class="price-box">
            <small>PACKAGE PRICE</small>
            <strong>${pkg.price}</strong>
          </div>
        </div>

        <div class="info-grid">
          <div class="info-item"><span>Pickup</span><strong>${pkg.pickup}</strong></div>
          <div class="info-item"><span>Destination</span><strong>${pkg.destination}</strong></div>
          <div class="info-item"><span>Duration</span><strong>${pkg.duration}</strong></div>
        </div>

        <section class="detail-section">
          <h2>Itinerary</h2>
          <div class="timeline">
            ${pkg.itinerary.map(day => `
              <div class="timeline-item">
                <div class="day">${day[0]}</div>
                <div class="timeline-content">${day[1]}</div>
              </div>
            `).join("")}
          </div>
        </section>

        <section class="detail-section">
          <h2>Travel Details</h2>
          <div class="info-grid">
            <div class="info-item"><span>Pickup</span><strong>${pkg.pickup}</strong></div>
            <div class="info-item"><span>Destination</span><strong>${pkg.destination}</strong></div>
            <div class="info-item"><span>Vehicle</span><strong>${pkg.vehicle}</strong></div>
          </div>
        </section>

        <section class="detail-section">
          <div class="grid grid-2">
            <div>
              <h2>Inclusions</h2>
              <ul class="check-list">${pkg.inclusions.map(x => `<li>${x}</li>`).join("")}</ul>
            </div>
            <div>
              <h2>Exclusions</h2>
              <ul class="check-list">${pkg.exclusions.map(x => `<li>${x}</li>`).join("")}</ul>
            </div>
          </div>
        </section>

        <section class="detail-section">
          <h2>Important Information</h2>
          <ul class="side-list">${pkg.notes.map(x => `<li>${x}</li>`).join("")}</ul>
        </section>
      </article>

      <aside class="detail-side card">
        <span class="eyebrow">Ready to travel?</span>
        <h3 class="side-title">Ask about this package</h3>
        <p class="muted">Send the package name directly to our WhatsApp so we know exactly which trip you are interested in.</p>
        <button class="btn btn-whatsapp sticky-whatsapp" id="package-wa">WhatsApp About This Package</button>
        <a class="btn btn-outline sticky-whatsapp" href="packages.html">← Back to Packages</a>
      </aside>
    </div>
  `;

  document.querySelector("#package-wa").addEventListener("click", () => packageWhatsApp(pkg));
});
