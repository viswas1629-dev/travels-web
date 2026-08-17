
function packageCard(pkg) {
  return `
    <article class="package-card card reveal">
      <div class="package-image">
        <img src="${pkg.image}" alt="${pkg.name}" loading="lazy">
        <span class="package-badge">${pkg.duration}</span>
      </div>
      <div class="package-body">
        <h3>${pkg.name}</h3>
        <div class="package-meta">
          <span>📍 ${pkg.destination}</span>
          <strong>${pkg.price}</strong>
        </div>
        <p>${pkg.short}</p>
        <div class="card-actions">
          <a class="btn btn-primary btn-small" href="package-details.html?id=${pkg.id}">View Full Details</a>
          <button class="btn btn-whatsapp btn-small" onclick='packageWhatsApp(${JSON.stringify(pkg).replace(/'/g,"&#39;")})'>WhatsApp</button>
        </div>
      </div>
    </article>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const packageGrid = document.querySelector("#package-grid");
  const featuredGrid = document.querySelector("#featured-packages");

  if (packageGrid) {
    packageGrid.innerHTML = PACKAGES.map(packageCard).join("");
  }

  if (featuredGrid) {
    featuredGrid.innerHTML = PACKAGES.slice(0, 4).map(packageCard).join("");
  }

  if (packageGrid || featuredGrid) {
    setTimeout(() => {
      document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
    }, 50);
  }
});
