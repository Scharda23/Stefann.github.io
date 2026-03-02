//obj za nav bar
const navBarItems = [
  { name: "Services",
    path: "index.html#services" 
  },
  { name: "Products",
    path: "index.html#products" 
  },
  { name: "Reviews",
    path: "index.html#reviews" 
  },
  { name: "Contact",
    path: "index.html#forma" 
  },
  { name: "Author",
    path: "author.html" 
  },
  { name: "Dokumentacija",
    path: "dokumentacija.pdf" 
  }, 
  { name: "Zip file",
    path: "webProgramiranje1Sajt.zip" 
  }
];
//obj za usluge
const serviceItems = [
  { 
    name: "Opened every day", 
    icon: "bi-clock",
    description: "We are available 7 days a week, including weekends and holidays."
  },
  { 
    name: "Computer diagnosis and repair", 
    icon: "bi-gear",
    description: "Professional diagnostics, hardware and software repair for PCs and laptops."
  },
  { 
    name: "PC parts at best price", 
    icon: "bi-laptop",
    description: "High-quality PC components at competitive prices with warranty."
  }
];
//obj proizvodi
const products = [
  {
    name: "AstroPC Galaxy",
    image: "assets/pictures/PC1.jpg",
    type: "PC",
    description: "High-performance gaming PC with latest components.",
    price: "2000e"
  },
  {
    name: "AstroPC Supernova",
    image: "assets/pictures/PC2.jpg",
    type: "PC",
    description: "Mid-range PC with balanced performance and value.",
    price: "1500e"
  },
  {
    name: "AstroPC BlackHole",
    image: "assets/pictures/PC3.jpg",
    type: "PC",
    description: "Budget-friendly PC with essential performance.",
    price: "1000e"
  },
  {
    name: "Nvidia RTX 4090",
    image: "assets/pictures/RXT4090.jpg",
    type: "component",
    description: "High-end  Nvidia graphics card with ray tracing and AI acceleration.",
    price: "1500e"
  },
    {
    name: "Rx 7900 XTX",
    image: "assets/pictures/RX7900.jpg",
    type: "component",
    description: "High-performance AMD graphics card with ray tracing support.",
    price: "1200e"
  },
  {
    name: "Ryzen 9 7950X",
    image: "assets/pictures/ryzen.jpg",
    type: "component",
    description: "High-performance AMD CPU with 16 cores and 32 threads.",
    price: "500e"
  },
  {
    name: "Intel Core i9-13900K",
    image: "assets/pictures/intel.webp",
    type: "component",
    description: "High-performance Intel CPU with 24 cores and 32 threads.",
    price: "400e"
  },
  {
    name: "LOGITECH G502 HERO",
    image: "assets/pictures/logitech.jpg",
    type: "peripherals",
    description: "High-performance gaming mouse with customizable RGB lighting.",
    price: "100e"
  },
  {
    name: "RAZER BLACKWIDOW V4 PRO",
    image: "assets/pictures/razer.jpg",
    type: "peripherals",
    description: "High-performance mechanical gaming keyboard with RGB lighting.",
    price: "200e"
  },
];
//obj recenzije
const reviews = [
  {
    name: "John Smith",
    rating: 5,
    comment: "Excellent service and quality products. Highly recommended!"
  },
  {
    name: "Emily Johnson",
    rating: 4,
    comment: "Great experience overall. The staff was very helpful."
  },
  {
    name: "Michael Brown",
    rating: 5,
    comment: "Fast delivery and high-quality components. Will definitely shop here again."
  }
];
//obj za ispisivanje text polja forme
const formFields = [
  { label: "Name",
    type: "text",
    id: "firstName"
  },
  { label: "Surname",
    type: "text",
    id: "lastName"
  },
  { label: "Email",
    type: "email",
    id: "email"
  },
  {
    label: "Phone number",
    type: "tel",
    id: "phone"
  },    
];
//obj za ispisivanje dropdown-a
const formDropdown = [
  {
    id: 1,
    name: "diagnosis"
  },
  {
    id: 2,
    name: "repair"
  },
  {
    id: 3,
    name: "shopping"
  }
];
//footer linkovi
const footerItems = [
  { name: "Home",
    path: "index.html#hero" 
  },
  { name: "Services",
    path: "index.html#services" 
  },
  { name: "Products",
    path: "index.html#products" 
  },
  { name: "Reviews",
    path: "index.html#reviews" 
  },
  { name: "Contact",
    path: "index.html#forma" 
  },
  { name: "Author",
    path: "author.html" 
  },
  { name: "Site map",
    path: "sitemap.xml" 
  }
];


const navMenu = document.getElementById("navMenu");

navBarItems.forEach(item => {
  navMenu.innerHTML += `
    <li class="nav-item">
      <a href="${item.path}" class="nav-link">${item.name}</a>
    </li>
  `;
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar.classList.contains("show")) {
      new bootstrap.Collapse(navbar).hide();
    }
  });
});

const servicesRow = document.getElementById("servicesList");

serviceItems.forEach((service, index) => {
  servicesRow.insertAdjacentHTML("beforeend", `
    <div class="col-lg-4 col-12 text-center mb-4">
      <div class="box p-4">
        <div class="feature-icon mb-3">
          <i class="bi ${service.icon} fs-1"></i>
        </div>
        <h3>${service.name}</h3>
        <p class="service-description" id="desc-${index}">
          ${service.description}
        </p>
        <a href="#" class="show-more d-inline-flex align-items-center gap-1" data-id="${index}">
          <span class="toggle-text">Show more</span>
          <i class="bi bi-arrow-bar-down"></i>
        </a>
      </div>
    </div>
  `);
});

$('[id^="desc-"]').hide();

$(document).on("click", ".show-more", function (e) {
  e.preventDefault();

  const $btn = $(this);
  const id = $btn.data("id");
  const $desc = $("#desc-" + id);
  const $icon = $btn.find("i");
  const $text = $btn.find(".toggle-text");

  $desc.toggle(200, function () {
    const isVisible = $desc.is(":visible");

    $text.text(isVisible ? "Show less" : "Show more");
    $icon
      .toggleClass("bi-arrow-bar-down", !isVisible)
      .toggleClass("bi-arrow-bar-up", isVisible);
  });
});

$(document).ready(function() {
  const $productsRow = $("#productsList");
  const $filter = $("#productFilter");

  const typesSet = new Set(products.map(p => p.type));
  const types = ["all", ...typesSet]; 
  
  types.forEach(type => {
    const label = type === "all" ? "All Products" : type.charAt(0).toUpperCase() + type.slice(1);
    $filter.append(`<option value="${type}">${label}</option>`);
  });

  function renderProducts(filterType = "all") {
    $productsRow.empty(); 

    products.forEach((product) => {
      if (filterType === "all" || product.type === filterType) {
        $productsRow.append(`
          <div class="col-lg-4 col-md-6 col-12 mb-4 product-card" data-type="${product.type}">
            <div class="card h-100 text-center p-8">
              <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: contain;">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p class="fw-bold">${product.price}</p>
              </div>
            </div>
          </div>
        `);
      }
    });
  }

  renderProducts();

  $filter.on("change", function() {
    renderProducts($(this).val());
  });
});

$(document).ready(function () {
  const $box = $("#reviewBox");
  let currentIndex = 0;

  function renderReview(index) {
    const review = reviews[index];

    let stars = "";
    for (let i = 0; i < 5; i++) {
      stars += i < review.rating
        ? `<i class="bi bi-star-fill text-warning"></i>`
        : `<i class="bi bi-star text-warning"></i>`;
    }

    const html = `
      <div class="card review-card p-4 text-center">
        <h5 class="mb-1">${review.name}</h5>
        <div class="mb-2">${stars}</div>
        <p class="fst-italic">"${review.comment}"</p>
      </div>
    `;

    $box.fadeOut(300, function () {
      $box.html(html).fadeIn(300);
    });
  }

  renderReview(currentIndex);

  setInterval(() => {
    currentIndex = (currentIndex + 1) % reviews.length;
    renderReview(currentIndex);
  }, 4000);
});

document.addEventListener("DOMContentLoaded", function() {

  const rulesForm = [
    { id: "firstName", regex: /^[A-ZŠĐČĆŽ][a-zšđžčć]{2,19}(?:\s[A-ZŠĐČĆŽ][a-zšđžčć]{2,19})?$/, errorMsg: "invalid first name, first letter must be uppercase!" },
    { id: "lastName", regex: /^[A-ZŠĐČĆŽ][a-zšđžčć]{2,19}(?:\s[A-ZŠĐČĆŽ][a-zšđžčć]{2,19})?$/, errorMsg: "invalid last name, first letter must be uppercase!" },
    { id: "phone", regex: /^(\+?\d{1,3}[- ]?)?\d{2,3}[- ]?\d{3}[- ]?\d{3,4}$/, errorMsg: "invalid phone number (example +381 65 123 456)." },
    { id: "email", regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, errorMsg: "invalid email (example@gmail.com)." }
  ];

  const formContainer = document.getElementById("contactFormContainer");

  formContainer.innerHTML = `
    <form id="contactForm" class="p-4 border rounded shadow bg-white">
      ${formFields.map(field => `
        <div class="mb-3">
          <label for="${field.id}" class="form-label">${field.label}</label>
          <input type="${field.type}" class="form-control" id="${field.id}">
          <div class="errorMsg text-danger mt-1"></div>
        </div>
      `).join("")}

      <div class="mb-3">
        <label for="serviceSelect" class="form-label">Select Service</label>
        <select class="form-select" id="serviceSelect">
          <option value="0">Select service</option>
          ${formDropdown.map(s => `<option value="${s.id}">${s.name}</option>`).join("")}
        </select>
        <div class="errorMsg text-danger mt-1"></div>
      </div>

      <div class="mb-3">
        <label for="messageBox" class="form-label">Message</label>
        <textarea class="form-control" id="messageBox" rows="5"></textarea>
        <div class="errorMsg text-danger mt-1"></div>
      </div>

      <div class="text-center">
        <button type="submit" class="btn btn-primary px-4">Submit</button>
      </div>

      <div id="formResult" class="mt-3"></div>
    </form>
  `;

  const contactForm = document.getElementById("contactForm");
  const serviceSelect = document.getElementById("serviceSelect");
  const formResult = document.getElementById("formResult");

  function validateField(fieldId) {
    const rule = rulesForm.find(r => r.id === fieldId);
    const input = document.getElementById(fieldId);
    const errorDiv = input.parentElement.querySelector(".errorMsg");

    if (!input.value.trim()) {
      errorDiv.textContent = "you must fill out this field.";
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      return false;
    } else if (!rule.regex.test(input.value.trim())) {
      errorDiv.textContent = rule.errorMsg;
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      return false;
    } else {
      errorDiv.textContent = "";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      return true;
    }
  }

  function validateSelect() {
    const errorDiv = serviceSelect.parentElement.querySelector(".errorMsg");
    if (!serviceSelect.value || serviceSelect.value === "0") {
      errorDiv.textContent = "Please select a service.";
      serviceSelect.classList.add("is-invalid");
      serviceSelect.classList.remove("is-valid");
      return false;
    } else {
      errorDiv.textContent = "";
      serviceSelect.classList.remove("is-invalid");
      serviceSelect.classList.add("is-valid");
      return true;
    }
  }

  rulesForm.forEach(rule => {
    const input = document.getElementById(rule.id);
    if(input) input.addEventListener("blur", () => validateField(rule.id));
  });

  if(serviceSelect) serviceSelect.addEventListener("blur", validateSelect);

  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let isValid = true;

    rulesForm.forEach(rule => {
      const input = document.getElementById(rule.id);
      if(input && !validateField(rule.id)) isValid = false;
    });
      if(serviceSelect && !validateSelect()) isValid = false;

    if (isValid) {
      formResult.innerHTML = `<div class="alert alert-success">you have successfully submitted the form!</div>`;
    } else {
      formResult.innerHTML = `<div class="alert alert-danger">Form contains errors. Please correct the marked fields.</div>`;
    }
  });
});

const footerLinksContainer = document.getElementById("footerLinksContainer");

footerItems.forEach(item => {
    const link = document.createElement("a");
    link.href = item.path;
    link.textContent = item.name;
    link.className = "d-block text-light mb-1";
    footerLinksContainer.appendChild(link);
});