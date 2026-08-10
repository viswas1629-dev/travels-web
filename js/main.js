
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  const setHeader = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 20);
  };
  setHeader();
  window.addEventListener("scroll", setHeader);

  // Client banner entrance animation initialization
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    requestAnimationFrame(() => {
      heroSection.classList.add("hero-animated");
    });

    // Support page restores (bfcache / back-forward navigation)
    window.addEventListener("pageshow", (event) => {
      if (event.persisted) {
        heroSection.classList.remove("hero-animated");
        void heroSection.offsetWidth; // Force reflow
        requestAnimationFrame(() => {
          heroSection.classList.add("hero-animated");
        });
      }
    });
  }



  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.textContent = open ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll("[data-business-name]").forEach(el => {
    el.textContent = SITE_CONFIG.businessName;
  });

  document.querySelectorAll("[data-phone]").forEach(el => {
    el.textContent = SITE_CONFIG.phone;
  });

  document.querySelectorAll("[data-email]").forEach(el => {
    el.textContent = SITE_CONFIG.email;
  });

  document.querySelectorAll("[data-location]").forEach(el => {
    el.textContent = SITE_CONFIG.location;
  });

  document.querySelectorAll("[data-general-whatsapp]").forEach(btn => {
    btn.addEventListener("click", () => openWhatsApp(
      `Hello, I would like to know more about ${SITE_CONFIG.businessName}'s travel services.`
    ));
  });

  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === current) link.classList.add("active");
    if (current === "package-details.html" && href === "packages.html") link.classList.add("active");
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});

function openWhatsApp(message) {
  const number = String(SITE_CONFIG.whatsappNumber).replace(/\D/g, "");
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function packageWhatsApp(pkg) {
  openWhatsApp(
`Hello, I am interested in the ${pkg.name}.

Package: ${pkg.name}
Duration: ${pkg.duration}

I would like to know more about the package, availability and current pricing.

Thank you.`
  );
}

function hotelWhatsApp(hotel) {
  openWhatsApp(
`Hello, I am interested in booking a room at ${hotel.name} in Madurai.

Hotel: ${hotel.name}
Location: ${hotel.location}
Room: ${hotel.room}

I would like to know about room availability, pricing and booking details.

Thank you.`
  );
}

function taxiWhatsApp() {
  openWhatsApp(
`Hello, I am interested in your taxi service.

Please share the available vehicle options, pricing and availability.

Thank you.`
  );
}

function contactFormWhatsApp(form) {
  const data = new FormData(form);
  const message =
`Hello, I would like to make a travel enquiry.

Name: ${data.get("name")}
Phone: ${data.get("phone")}
Destination: ${data.get("destination")}
Travel Date: ${data.get("date")}
Number of People: ${data.get("people")}
Message: ${data.get("message") || "No additional message."}

Please share the available options and pricing.

Thank you.`;

  openWhatsApp(message);
}
