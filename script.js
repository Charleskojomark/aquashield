// Filter Products by Category
function filterProducts(category) {
    const heading = document.getElementById("product-heading");
    const filterSelect = document.querySelector(".filter-select");
  
    heading.textContent = filterSelect.options[filterSelect.selectedIndex].text;
  
    const products = document.querySelectorAll(".product-card");
    products.forEach((product) => {
      if (category === "all" || product.getAttribute("data-category") === category) {
        product.classList.remove("hidden");
      } else {
        product.classList.add("hidden");
      }
    });
  }
  
  // Mobile Menu Toggle
  function initMobileMenu() {
    const menuBtn = document.querySelector(".mobile-menu-btn");
    const closeBtn = document.querySelector(".close-menu");
    const mobileMenu = document.querySelector(".mobile-menu");
    const overlay = document.querySelector(".overlay");
    const navLinks = document.querySelectorAll(".mobile-nav a"); // Select all mobile nav links
  
    // Open menu
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.add("active");
      overlay.classList.add("active");
    });
  
    // Close menu via close button
    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      overlay.classList.remove("active");
    });
  
    // Close menu via overlay click
    overlay.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      overlay.classList.remove("active");
    });
  
    // Close menu and scroll when clicking a nav link
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        // Prevent default briefly to ensure menu closes first (optional)
        // e.preventDefault(); // Uncomment if scrolling breaks
  
        // Close the menu
        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");
  
        // Scroll to section (handled by browser due to scroll-behavior: smooth)
        // If needed, manually scroll:
        /* const targetId = link.getAttribute("href").substring(1); // Remove #
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        } */
      });
    });
  }
  
  // Regional Pricing Logic
  function initRegionSelector() {
    const regionSelector = document.querySelector(".region-selector");
    const currencyDisplay = document.querySelector(".currency-display");
    const pricingCards = document.querySelectorAll(".pricing-card");
  
    const currencies = {
      NG: { symbol: "₦", name: "Nigerian Naira" },
      KE: { symbol: "KES", name: "Kenyan Shilling" },
      ZA: { symbol: "R", name: "South African Rand" },
      GH: { symbol: "GHS", name: "Ghanaian Cedi" },
      ET: { symbol: "ETB", name: "Ethiopian Birr" },
    };
  
    const pricingData = {
      NG: { basic: "250,000", plus: "500,000", premium: "1,000,000" },
      KE: { basic: "750,000", plus: "1,500,000", premium: "3,000,000" },
      ZA: { basic: "100,000", plus: "200,000", premium: "400,000" },
      GH: { basic: "175,000", plus: "350,000", premium: "700,000" },
      ET: { basic: "900,000", plus: "1,800,000", premium: "3,600,000" },
    };
  
    regionSelector.addEventListener("change", () => {
      const selectedRegion = regionSelector.value;
      const currency = currencies[selectedRegion];
  
      currencyDisplay.textContent = `Showing prices in ${currency.name} (${currency.symbol})`;
      pricingCards[0].querySelector(".price").textContent = `${currency.symbol}${pricingData[selectedRegion].basic}`;
      pricingCards[1].querySelector(".price").textContent = `${currency.symbol}${pricingData[selectedRegion].plus}`;
      pricingCards[2].querySelector(".price").textContent = `${currency.symbol}${pricingData[selectedRegion].premium}`;
    });
  }
  function initLanguageSelector() {
    const langSelects = document.querySelectorAll(".lang-select");
  
    langSelects.forEach((select) => {
      select.addEventListener("change", (e) => {
        const selectedLang = e.target.value;
        console.log(`Language changed to: ${selectedLang}`); // Placeholder for actual logic
        // Future implementation: Update page content based on selectedLang
      });
    });
  }
  // Init all on DOM ready
  document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initRegionSelector();
    initLanguageSelector();
  });
  