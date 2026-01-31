/* ==========================================================================
   KIMO & MELIA'S HAWAIIAN GRINDZ
   Main JavaScript
   ========================================================================== */

// ==========================================================================
// DATA
// ==========================================================================

const menuItems = [
  {
    id: 'kalua-pig',
    name: 'Kālua Pig',
    description: 'Traditional slow-cooked pork with smoky, savory flavor. Tender and juicy.',
    price: 14,
    category: 'proteins',
    badge: null,
    icon: 'pig'
  },
  {
    id: 'lau-lau',
    name: 'Lau Lau',
    description: 'Pork wrapped in taro leaves, steamed to perfection. A true Hawaiian classic.',
    price: 16,
    category: 'signatures',
    badge: 'Traditional',
    icon: 'laulau'
  },
  {
    id: 'squid-luau',
    name: 'Squid Lūʻau',
    description: 'Our signature dish - tender squid in creamy coconut taro leaf gravy.',
    price: 18,
    category: 'signatures',
    badge: 'Signature',
    icon: 'squid'
  },
  {
    id: 'chicken-long-rice',
    name: 'Chicken Long Rice',
    description: 'Comforting ginger-infused chicken soup with glass noodles.',
    price: 12,
    category: 'proteins',
    badge: null,
    icon: 'chicken'
  },
  {
    id: 'poi',
    name: 'Poi',
    description: 'Fresh pounded taro. The heart of Hawaiian cuisine.',
    price: 6,
    category: 'sides',
    badge: null,
    icon: 'poi'
  },
  {
    id: 'rice',
    name: 'White Rice',
    description: 'Perfectly steamed white rice.',
    price: 3,
    category: 'sides',
    badge: null,
    icon: 'rice'
  },
  {
    id: 'lomi-salmon',
    name: 'Lomi Salmon',
    description: 'Fresh salmon with tomatoes, onions, and green onions.',
    price: 8,
    category: 'sides',
    badge: null,
    icon: 'lomi'
  },
  {
    id: 'mac-salad',
    name: 'Mac Salad',
    description: 'Creamy Hawaiian-style macaroni salad.',
    price: 5,
    category: 'sides',
    badge: null,
    icon: 'mac'
  },
  {
    id: 'haupia',
    name: 'Haupia',
    description: 'Traditional coconut pudding dessert.',
    price: 5,
    category: 'sides',
    badge: null,
    icon: 'haupia'
  },
  {
    id: 'mixed-plate',
    name: 'Mixed Plate',
    description: 'Kālua pig, lau lau, rice, and choice of side. The complete experience.',
    price: 22,
    category: 'plates',
    badge: 'Popular',
    icon: 'plate'
  },
  {
    id: 'squid-plate',
    name: 'Squid Lūʻau Plate',
    description: 'Squid lūʻau with rice, mac salad, and lomi salmon.',
    price: 24,
    category: 'plates',
    badge: 'Best Seller',
    icon: 'plate'
  }
];

const builderItems = [
  { id: 'kalua-pig', name: 'Kālua Pig', price: 14, category: 'proteins', icon: 'pig' },
  { id: 'lau-lau', name: 'Lau Lau', price: 16, category: 'proteins', icon: 'laulau' },
  { id: 'squid-luau', name: 'Squid Lūʻau', price: 18, category: 'proteins', icon: 'squid' },
  { id: 'chicken-long-rice', name: 'Chicken Long Rice', price: 12, category: 'proteins', icon: 'chicken' },
  { id: 'poi', name: 'Poi', price: 6, category: 'sides', icon: 'poi' },
  { id: 'rice', name: 'Rice', price: 3, category: 'sides', icon: 'rice' },
  { id: 'lomi-salmon', name: 'Lomi Salmon', price: 8, category: 'sides', icon: 'lomi' },
  { id: 'mac-salad', name: 'Mac Salad', price: 5, category: 'sides', icon: 'mac' },
  { id: 'pickled-onion', name: 'Pickled Onion', price: 3, category: 'extras', icon: 'onion' },
  { id: 'haupia', name: 'Haupia', price: 5, category: 'extras', icon: 'haupia' }
];

const locations = [
  { day: 'Wednesday', name: 'Hilo Farmers Market', address: 'Mamo St & Kamehameha Ave, Hilo', time: '6 AM - 2 PM' },
  { day: 'Thursday', name: 'Pāhoa Village', address: '15-2670 Pāhoa Village Rd', time: '11 AM - 6 PM' },
  { day: 'Saturday', name: 'Maku\'u Market', address: 'Maku\'u Dr, Pāhoa', time: '7 AM - 12 PM' },
  { day: 'Sunday', name: 'Waimea Town Market', address: 'Parker School, Waimea', time: '7:30 AM - 1 PM' }
];

const testimonials = [
  {
    text: "Best squid lūʻau I've had since my grandma's! Took me right back to family gatherings in Waipiʻo.",
    author: 'Keoni M.',
    location: 'Hilo',
    initials: 'KM'
  },
  {
    text: "They catered our wedding with 150 guests. Everyone raved about the food - it was the highlight of the night!",
    author: 'Sarah & Mike T.',
    location: 'Kona',
    initials: 'ST'
  },
  {
    text: "Finally, authentic Hawaiian food on this side of the island. The lau lau is perfect every time.",
    author: 'Aunty Lei',
    location: 'Pāhoa',
    initials: 'AL'
  }
];

// SVG Icons for dishes
const dishIcons = {
  pig: `<svg viewBox="0 0 64 64" fill="currentColor"><path d="M32 8c-8 0-20 4-24 16-2 6 0 12 4 16 2 2 4 6 4 10v6h8v-6c0-2 2-4 4-4h8c2 0 4 2 4 4v6h8v-6c0-4 2-8 4-10 4-4 6-10 4-16C52 12 40 8 32 8zm-8 20a4 4 0 110-8 4 4 0 010 8zm16 0a4 4 0 110-8 4 4 0 010 8z"/></svg>`,
  laulau: `<svg viewBox="0 0 64 64" fill="currentColor"><path d="M32 4C18 4 8 14 8 28c0 8 4 16 12 20l-2 8c0 2 2 4 4 4h20c2 0 4-2 4-4l-2-8c8-4 12-12 12-20C56 14 46 4 32 4zm0 8c6 0 12 4 14 10H18c2-6 8-10 14-10zm-12 20h24c-2 6-6 10-12 10s-10-4-12-10z"/></svg>`,
  squid: `<svg viewBox="0 0 64 64" fill="currentColor"><path d="M32 4c-10 0-18 8-18 18v12c0 4 2 8 6 10v12c0 2 2 4 4 4s4-2 4-4v-8h8v8c0 2 2 4 4 4s4-2 4-4V44c4-2 6-6 6-10V22c0-10-8-18-18-18zm-6 24a3 3 0 110-6 3 3 0 010 6zm12 0a3 3 0 110-6 3 3 0 010 6z"/><path d="M12 56c0 2 2 4 4 4 1 0 2-1 3-2l3-6c-4-2-7-6-8-10l-4 10c-1 2 0 4 2 4zm40 0c2 0 3-2 2-4l-4-10c-1 4-4 8-8 10l3 6c1 1 2 2 3 2 2 0 4-2 4-4z"/></svg>`,
  chicken: `<svg viewBox="0 0 64 64" fill="currentColor"><path d="M48 16c-2-4-6-8-12-8-8 0-14 6-14 14v4H12c-2 0-4 2-4 4v20c0 2 2 4 4 4h40c2 0 4-2 4-4V30c0-2-2-4-4-4h-6v-4c0-2-1-4-2-6h4zm-12 4c2 0 4 2 4 4H22c0-2 2-4 4-4h10z"/></svg>`,
  poi: `<svg viewBox="0 0 64 64" fill="currentColor"><path d="M32 8c-12 0-22 10-22 22 0 4 2 8 4 12l-4 10c-1 2 1 4 3 4h38c2 0 4-2 3-4l-4-10c2-4 4-8 4-12 0-12-10-22-22-22zm0 8c8 0 14 6 14 14s-6 14-14 14-14-6-14-14 6-14 14-14z"/><ellipse cx="32" cy="30" rx="10" ry="6"/></svg>`,
  rice: `<svg viewBox="0 0 64 64" fill="currentColor"><path d="M52 24H12c-2 0-4 2-4 4v4c0 14 10 24 24 24s24-10 24-24v-4c0-2-2-4-4-4z"/><ellipse cx="32" cy="24" rx="22" ry="8" fill="currentColor"/><path d="M32 8c-8 0-14 4-14 8h28c0-4-6-8-14-8z" opacity="0.6"/></svg>`,
  lomi: `<svg viewBox="0 0 64 64" fill="currentColor"><path d="M52 20H12c-2 0-4 2-4 4v24c0 4 4 8 8 8h32c4 0 8-4 8-8V24c0-2-2-4-4-4z"/><circle cx="24" cy="36" r="6"/><circle cx="40" cy="32" r="5"/><circle cx="32" cy="42" r="4"/><path d="M20 20c0-6 6-12 12-12s12 6 12 12" fill="none" stroke="currentColor" stroke-width="3"/></svg>`,
  mac: `<svg viewBox="0 0 64 64" fill="currentColor"><path d="M52 24H12c-2 0-4 2-4 4v20c0 4 4 8 8 8h32c4 0 8-4 8-8V28c0-2-2-4-4-4z"/><path d="M18 32c4 0 6 2 6 6s-2 6-6 6M28 32c4 0 6 2 6 6s-2 6-6 6M38 32c4 0 6 2 6 6s-2 6-6 6M48 32c2 0 4 2 4 4" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
  haupia: `<svg viewBox="0 0 64 64" fill="currentColor"><rect x="12" y="20" width="40" height="32" rx="4"/><path d="M16 20v-4c0-4 4-8 8-8h16c4 0 8 4 8 8v4" fill="none" stroke="currentColor" stroke-width="3"/><path d="M20 32h24M20 40h24" stroke="white" stroke-width="2" opacity="0.5"/></svg>`,
  onion: `<svg viewBox="0 0 64 64" fill="currentColor"><ellipse cx="32" cy="40" rx="18" ry="14"/><path d="M32 12c-4 0-8 2-10 6-2-2-1-6 2-8 2-2 6-2 8 0s6-2 8 0c3 2 4 6 2 8-2-4-6-6-10-6z"/><path d="M26 26c2-4 4-8 6-8s4 4 6 8" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
  plate: `<svg viewBox="0 0 64 64" fill="currentColor"><ellipse cx="32" cy="48" rx="28" ry="8"/><path d="M4 48c0-20 12-36 28-36s28 16 28 36" fill="none" stroke="currentColor" stroke-width="4"/></svg>`
};

// ==========================================================================
// DOM ELEMENTS
// ==========================================================================

const header = document.querySelector('.header');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const floatingCta = document.querySelector('.floating-cta');
const menuGrid = document.querySelector('.menu-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const locationsGrid = document.querySelector('.locations-grid');
const testimonialsGrid = document.querySelector('.testimonials-grid');
const builderOptions = document.querySelector('.builder-options');
const plateVisual = document.querySelector('.plate-items');
const plateList = document.querySelector('.plate-list');
const plateTotalEl = document.querySelector('.plate-total span:last-child');
const cateringForm = document.getElementById('catering-form');

// ==========================================================================
// STATE
// ==========================================================================

let selectedItems = [];

// ==========================================================================
// FUNCTIONS
// ==========================================================================

// Header scroll effect
function handleScroll() {
  if (window.scrollY > 100) {
    header?.classList.add('scrolled');
    floatingCta?.classList.add('visible');
  } else {
    header?.classList.remove('scrolled');
    floatingCta?.classList.remove('visible');
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  navMenu?.classList.toggle('active');
  navToggle?.classList.toggle('active');
}

// Close mobile menu when clicking a link
function closeMobileMenu() {
  navMenu?.classList.remove('active');
  navToggle?.classList.remove('active');
}

// Render menu items
function renderMenuItems(filter = 'all') {
  if (!menuGrid) return;
  
  const filtered = filter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === filter);
  
  menuGrid.innerHTML = filtered.map(item => `
    <article class="menu-item" data-category="${item.category}">
      <div class="menu-item-image">
        ${dishIcons[item.icon] || dishIcons.plate}
        ${item.badge ? `<span class="menu-item-badge">${item.badge}</span>` : ''}
      </div>
      <div class="menu-item-content">
        <div class="menu-item-header">
          <h3 class="menu-item-name">${item.name}</h3>
          <span class="menu-item-price">$${item.price}</span>
        </div>
        <p class="menu-item-description">${item.description}</p>
      </div>
    </article>
  `).join('');
}

// Filter menu items
function filterMenu(e) {
  const filter = e.target.dataset.filter;
  
  filterBtns.forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');
  
  renderMenuItems(filter);
}

// Render locations
function renderLocations() {
  if (!locationsGrid) return;
  
  locationsGrid.innerHTML = locations.map(loc => `
    <div class="location-card">
      <div class="location-day">${loc.day}</div>
      <div class="location-name">${loc.name}</div>
      <div class="location-address">${loc.address}</div>
      <div class="location-time">🕐 ${loc.time}</div>
    </div>
  `).join('');
}

// Render testimonials
function renderTestimonials() {
  if (!testimonialsGrid) return;
  
  testimonialsGrid.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-stars">★★★★★</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.initials}</div>
        <div class="testimonial-info">
          <span class="testimonial-name">${t.author}</span>
          <span class="testimonial-location">${t.location}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Render plate builder options
function renderBuilderOptions() {
  if (!builderOptions) return;
  
  const categories = {
    proteins: 'Proteins',
    sides: 'Sides',
    extras: 'Extras'
  };
  
  let html = '<h3>Build Your Plate</h3>';
  
  Object.entries(categories).forEach(([key, label]) => {
    const items = builderItems.filter(item => item.category === key);
    html += `
      <div class="builder-category">
        <div class="builder-category-title">${label}</div>
        <div class="builder-items">
          ${items.map(item => `
            <button class="builder-item" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" data-icon="${item.icon}">
              <div class="builder-item-icon">${dishIcons[item.icon] || dishIcons.plate}</div>
              <div class="builder-item-name">${item.name}</div>
              <div class="builder-item-price">+$${item.price}</div>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  });
  
  builderOptions.innerHTML = html;
  
  // Add click handlers
  builderOptions.querySelectorAll('.builder-item').forEach(btn => {
    btn.addEventListener('click', handleBuilderItemClick);
  });
}

// Handle builder item click
function handleBuilderItemClick(e) {
  const btn = e.currentTarget;
  const id = btn.dataset.id;
  const name = btn.dataset.name;
  const price = parseInt(btn.dataset.price);
  const icon = btn.dataset.icon;
  
  const existingIndex = selectedItems.findIndex(item => item.id === id);
  
  if (existingIndex > -1) {
    selectedItems.splice(existingIndex, 1);
    btn.classList.remove('selected');
  } else {
    selectedItems.push({ id, name, price, icon });
    btn.classList.add('selected');
  }
  
  updatePlateVisual();
}

// Update plate visual
function updatePlateVisual() {
  if (!plateVisual || !plateList || !plateTotalEl) return;
  
  if (selectedItems.length === 0) {
    plateVisual.innerHTML = `
      <div class="plate-empty">
        <div class="plate-empty-icon">🍽️</div>
        <p>Select items to build your plate</p>
      </div>
    `;
    plateList.innerHTML = '<p style="color: var(--color-taro); text-align: center;">No items selected</p>';
    plateTotalEl.textContent = '$0';
    return;
  }
  
  // Update visual
  plateVisual.innerHTML = selectedItems.map(item => `
    <div class="plate-item">
      ${dishIcons[item.icon] || dishIcons.plate}
      <span>${item.name}</span>
    </div>
  `).join('');
  
  // Update list
  plateList.innerHTML = selectedItems.map(item => `
    <div class="plate-list-item">
      <span>${item.name}</span>
      <span>$${item.price}</span>
    </div>
  `).join('');
  
  // Update total
  const total = selectedItems.reduce((sum, item) => sum + item.price, 0);
  plateTotalEl.textContent = `$${total}`;
}

// Handle catering form submission
function handleCateringSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  // Add selected plate items if any
  if (selectedItems.length > 0) {
    data.selectedItems = selectedItems.map(item => item.name).join(', ');
  }
  
  console.log('Catering inquiry:', data);
  
  // Show success message
  alert('Mahalo for your inquiry! We\'ll be in touch within 24 hours to discuss your event.');
  
  e.target.reset();
}

// Smooth scroll for anchor links
function handleAnchorClick(e) {
  const href = e.currentTarget.getAttribute('href');
  if (href?.startsWith('#')) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    }
  }
}

// Pre-fill catering form with plate builder selections
function orderPlate() {
  if (selectedItems.length === 0) {
    alert('Please select items for your plate first!');
    return;
  }
  
  const cateringSection = document.getElementById('catering');
  if (cateringSection) {
    cateringSection.scrollIntoView({ behavior: 'smooth' });
    
    // Pre-fill the message with selected items
    const messageField = document.getElementById('message');
    if (messageField) {
      const itemList = selectedItems.map(item => `${item.name} ($${item.price})`).join(', ');
      const total = selectedItems.reduce((sum, item) => sum + item.price, 0);
      messageField.value = `I'd like to order a custom plate with: ${itemList}\nTotal: $${total}\n\nPlease let me know about pickup/delivery options.`;
    }
  }
}

// ==========================================================================
// EVENT LISTENERS
// ==========================================================================

// Scroll events
window.addEventListener('scroll', handleScroll);

// Mobile menu
navToggle?.addEventListener('click', toggleMobileMenu);

// Navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', handleAnchorClick);
});

// Menu filters
filterBtns.forEach(btn => {
  btn.addEventListener('click', filterMenu);
});

// Catering form
cateringForm?.addEventListener('submit', handleCateringSubmit);

// Order plate button
document.querySelector('.plate-actions .btn-primary')?.addEventListener('click', orderPlate);

// Clear plate button
document.querySelector('.plate-actions .btn-secondary')?.addEventListener('click', () => {
  selectedItems = [];
  document.querySelectorAll('.builder-item.selected').forEach(btn => {
    btn.classList.remove('selected');
  });
  updatePlateVisual();
});

// ==========================================================================
// INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  renderMenuItems();
  renderLocations();
  renderTestimonials();
  renderBuilderOptions();
  updatePlateVisual();
  handleScroll(); // Check initial scroll position
});

// Make orderPlate available globally
window.orderPlate = orderPlate;
