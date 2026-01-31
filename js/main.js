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

// Plate builder is now on its own dedicated page (plate-builder.html)

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
  handleScroll();
  
  // Initialize inline plate builder if present on this page
  if (document.getElementById('pbMainsGrid')) {
    pbInit();
  }
});

// Make orderPlate available globally
window.orderPlate = orderPlate;

// ==========================================================================
// INLINE PLATE BUILDER (v3)
// ==========================================================================
const pbDishIcons = {
  'kalua-pig': `<svg viewBox="0 0 80 80"><ellipse cx="40" cy="55" rx="32" ry="15" fill="#8B6914"/><ellipse cx="40" cy="50" rx="30" ry="18" fill="#C4956A"/><path d="M15 48 Q20 42 28 48 Q35 40 42 48 Q50 42 58 48 Q65 42 68 48" stroke="#A67B5B" stroke-width="3" fill="none"/><path d="M18 54 Q25 48 32 54 Q40 46 48 54 Q55 48 62 54" stroke="#A67B5B" stroke-width="2.5" fill="none"/><path d="M22 44 Q30 38 38 44 Q46 38 54 44" stroke="#D4A574" stroke-width="2" fill="none"/><ellipse cx="30" cy="46" rx="4" ry="2" fill="#E8C9A0" opacity="0.6"/><ellipse cx="50" cy="50" rx="3" ry="1.5" fill="#E8C9A0" opacity="0.5"/></svg>`,
  'chicken-long-rice': `<svg viewBox="0 0 80 80"><ellipse cx="40" cy="58" rx="32" ry="12" fill="#D4A574"/><ellipse cx="40" cy="55" rx="30" ry="18" fill="#F5E6D3"/><ellipse cx="40" cy="50" rx="26" ry="14" fill="#E8D4A8"/><path d="M20 48 Q30 42 35 50 Q42 44 50 52 Q58 46 62 50" stroke="rgba(255,255,255,0.8)" stroke-width="3" fill="none"/><path d="M22 54 Q32 48 40 54 Q48 48 58 52" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" fill="none"/><ellipse cx="30" cy="48" rx="6" ry="4" fill="#E8C9A0"/><ellipse cx="50" cy="50" rx="5" ry="3.5" fill="#DEB887"/><ellipse cx="40" cy="44" rx="3" ry="1" fill="#4A7D28"/><ellipse cx="46" cy="46" rx="2" ry="1" fill="#5A8D38"/></svg>`,
  'squid-luau': `<svg viewBox="0 0 80 80"><ellipse cx="40" cy="52" rx="30" ry="18" fill="#4A6741"/><ellipse cx="40" cy="50" rx="28" ry="16" fill="#5A7D51"/><path d="M22 48 Q30 44 38 50 Q46 44 55 48" stroke="#C9D4A4" stroke-width="3" fill="none" opacity="0.7"/><path d="M25 54 Q35 50 45 54 Q52 50 58 54" stroke="#D4DFB4" stroke-width="2" fill="none" opacity="0.6"/><ellipse cx="32" cy="48" rx="7" ry="5" fill="#F0E6DC"/><ellipse cx="48" cy="50" rx="6" ry="4" fill="#EDE3D9"/><ellipse cx="40" cy="54" rx="5" ry="3.5" fill="#F5EBE1"/><circle cx="32" cy="48" r="3" fill="none" stroke="#DDD4CA" stroke-width="1"/><circle cx="48" cy="50" r="2.5" fill="none" stroke="#DDD4CA" stroke-width="1"/></svg>`,
  'lomi-salmon': `<svg viewBox="0 0 80 80"><ellipse cx="40" cy="56" rx="28" ry="12" fill="#E8E8E8"/><ellipse cx="40" cy="50" rx="26" ry="15" fill="#E85D5D"/><rect x="25" y="42" width="10" height="8" rx="2" fill="#FA8072" transform="rotate(-5 30 46)"/><rect x="38" y="44" width="9" height="7" rx="2" fill="#F77066"/><rect x="50" y="42" width="8" height="8" rx="2" fill="#FA8072" transform="rotate(8 54 46)"/><rect x="30" y="52" width="8" height="6" rx="2" fill="#E86A6A"/><rect x="44" y="50" width="9" height="7" rx="2" fill="#FA8072" transform="rotate(-3 48 53)"/><circle cx="28" cy="54" r="4" fill="#DC3545"/><circle cx="52" cy="52" r="3.5" fill="#C82333"/><ellipse cx="36" cy="48" rx="3" ry="2" fill="#F8F8F8"/><ellipse cx="48" cy="56" rx="2.5" ry="1.5" fill="#FFF"/><ellipse cx="42" cy="44" rx="2" ry="1" fill="#4A7D28"/></svg>`,
  'rice': `<svg viewBox="0 0 80 80"><ellipse cx="40" cy="58" rx="28" ry="12" fill="#E8E8E8"/><ellipse cx="40" cy="45" rx="24" ry="22" fill="#FEFEFE"/><ellipse cx="40" cy="42" rx="22" ry="20" fill="#FFF"/><ellipse cx="30" cy="38" rx="3" ry="1.5" fill="#F5F5F5" transform="rotate(-20 30 38)"/><ellipse cx="40" cy="35" rx="3" ry="1.5" fill="#F0F0F0" transform="rotate(10 40 35)"/><ellipse cx="50" cy="40" rx="3" ry="1.5" fill="#F5F5F5" transform="rotate(-15 50 40)"/><ellipse cx="35" cy="48" rx="2.5" ry="1.2" fill="#F0F0F0" transform="rotate(5 35 48)"/><ellipse cx="46" cy="50" rx="2.5" ry="1.2" fill="#F5F5F5" transform="rotate(-8 46 50)"/></svg>`,
  'macaroni-salad': `<svg viewBox="0 0 80 80"><ellipse cx="40" cy="55" rx="28" ry="14" fill="#F5E6D3"/><ellipse cx="40" cy="50" rx="26" ry="16" fill="#FFF8DC"/><ellipse cx="40" cy="48" rx="24" ry="14" fill="#FFFACD"/><path d="M24 44 Q28 38 32 44" stroke="#F4E4BC" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M34 48 Q38 42 42 48" stroke="#EFE0B0" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M44 44 Q48 38 52 44" stroke="#F4E4BC" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M28 52 Q32 46 36 52" stroke="#EFE0B0" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M46 52 Q50 46 54 52" stroke="#F4E4BC" stroke-width="4.5" fill="none" stroke-linecap="round"/><circle cx="30" cy="50" r="1.5" fill="#FFA500"/><circle cx="50" cy="48" r="1.5" fill="#90EE90"/><circle cx="42" cy="54" r="1" fill="#FFA500"/></svg>`,
  'haupia': `<svg viewBox="0 0 80 80"><rect x="18" y="38" width="18" height="18" rx="3" fill="#FFF" stroke="#E8E8E8" stroke-width="1"/><rect x="40" y="38" width="18" height="18" rx="3" fill="#FEFEFE" stroke="#E8E8E8" stroke-width="1"/><rect x="29" y="50" width="18" height="18" rx="3" fill="#FFF" stroke="#E8E8E8" stroke-width="1"/><rect x="20" y="40" width="6" height="3" rx="1" fill="#F8F8F8" opacity="0.8"/><rect x="42" y="40" width="6" height="3" rx="1" fill="#F8F8F8" opacity="0.8"/></svg>`,
  'lau-lau': `<svg viewBox="0 0 80 80"><ellipse cx="40" cy="50" rx="28" ry="22" fill="#2D5016"/><ellipse cx="40" cy="48" rx="26" ry="20" fill="#3D6B1E"/><path d="M40 30 L40 65" stroke="#2D5016" stroke-width="2"/><path d="M25 40 Q40 45 55 40" stroke="#2D5016" stroke-width="1.5" fill="none"/><path d="M22 50 Q40 55 58 50" stroke="#2D5016" stroke-width="1.5" fill="none"/><path d="M25 58 Q40 62 55 58" stroke="#2D5016" stroke-width="1.5" fill="none"/><ellipse cx="40" cy="32" rx="8" ry="5" fill="#4A7D28"/><path d="M35 28 Q40 22 45 28" stroke="#3D6B1E" stroke-width="3" fill="none"/></svg>`,
  'poke': `<svg viewBox="0 0 80 80"><ellipse cx="40" cy="58" rx="30" ry="12" fill="#2C1810"/><ellipse cx="40" cy="55" rx="28" ry="16" fill="#3D2817"/><ellipse cx="40" cy="52" rx="24" ry="12" fill="#FFF"/><rect x="22" y="42" width="11" height="10" rx="2" fill="#CD5C5C"/><rect x="35" y="40" width="10" height="11" rx="2" fill="#DC143C"/><rect x="47" y="43" width="10" height="9" rx="2" fill="#B84444"/><rect x="28" y="52" width="9" height="8" rx="2" fill="#C84B4B"/><rect x="40" y="50" width="11" height="9" rx="2" fill="#CD5C5C"/><ellipse cx="30" cy="46" rx="1.5" ry="1" fill="#F5DEB3"/><ellipse cx="42" cy="44" rx="1.5" ry="1" fill="#FFF8DC"/><ellipse cx="38" cy="42" rx="2" ry="1" fill="#4A7D28"/><rect x="44" y="45" width="8" height="3" rx="1" fill="#1A1A1A"/></svg>`
};

const pbMenuItems = {
  mains: [
    { id: 'kalua-pig', name: 'Kalua Pig', hawaiian: "Puaʻa Kalua", desc: 'Slow-roasted smoky pulled pork' },
    { id: 'chicken-long-rice', name: 'Chicken Long Rice', hawaiian: 'Moa me ke Long Rice', desc: 'Ginger broth with glass noodles' },
    { id: 'squid-luau', name: 'Squid Luau', hawaiian: "Heʻe Lūʻau", desc: 'Squid in coconut taro leaf stew' },
  ],
  sides: [
    { id: 'lomi-salmon', name: 'Lomi Salmon', hawaiian: 'Lomi Lomi', desc: 'Fresh salmon, tomatoes & onions' },
    { id: 'rice', name: 'Sticky Rice', hawaiian: 'Laiki', desc: 'Fluffy white rice, perfectly steamed' },
    { id: 'macaroni-salad', name: 'Mac Salad', hawaiian: 'Macaroni Salad', desc: 'Creamy local-style macaroni' },
    { id: 'haupia', name: 'Haupia', hawaiian: 'Coconut Pudding', desc: 'Sweet coconut dessert squares' },
  ],
  addons: [
    { id: 'lau-lau', name: 'Lau Lau', hawaiian: 'Ti Leaf Bundle', desc: 'Pork & fish wrapped in taro leaves', price: 3 },
    { id: 'poke', name: 'Ahi Poke', hawaiian: 'Poke', desc: 'Fresh cubed tuna with seasonings', price: 7 },
  ]
};

const PB_PACKAGES = {
  classic: { mains: 2, sides: 2, price: 19, label: 'Classic Plate' },
  deluxe:  { mains: 3, sides: 3, price: 23, label: 'Deluxe Plate' }
};

const pbState = {
  package: 'classic',
  selectedMains: [],
  selectedSides: [],
  selectedAddons: [],
  guestCount: 25
};

function pbInit() {
  pbSelectPackage('classic');
  
  document.getElementById('pbGuestMinus').addEventListener('click', () => {
    if (pbState.guestCount > 20) { pbState.guestCount -= 5; document.getElementById('pbGuestCount').textContent = pbState.guestCount; pbUpdateSummary(); }
  });
  document.getElementById('pbGuestPlus').addEventListener('click', () => {
    if (pbState.guestCount < 300) { pbState.guestCount += 5; document.getElementById('pbGuestCount').textContent = pbState.guestCount; pbUpdateSummary(); }
  });
  document.getElementById('pbCtaButton').addEventListener('click', pbOpenModal);
}

function pbSelectPackage(pkg) {
  pbState.package = pkg;
  const p = PB_PACKAGES[pkg];
  if (pbState.selectedMains.length > p.mains) pbState.selectedMains = pbState.selectedMains.slice(0, p.mains);
  if (pbState.selectedSides.length > p.sides) pbState.selectedSides = pbState.selectedSides.slice(0, p.sides);
  document.querySelectorAll('.pb-package-card').forEach(c => c.classList.remove('selected'));
  document.querySelector(`.pb-package-card[data-package="${pkg}"]`).classList.add('selected');
  document.getElementById('pbMainsInstruction').textContent = `Choose ${p.mains} proteins for your plate`;
  document.getElementById('pbSidesInstruction').textContent = `Pick ${p.sides} sides to complete your plate`;
  pbRenderAll();
}

function pbToggleItem(id, type) {
  const p = PB_PACKAGES[pbState.package];
  let arr, max;
  if (type === 'mains') { arr = pbState.selectedMains; max = p.mains; }
  else if (type === 'sides') { arr = pbState.selectedSides; max = p.sides; }
  else { arr = pbState.selectedAddons; max = 99; }
  const idx = arr.indexOf(id);
  if (idx > -1) arr.splice(idx, 1);
  else if (arr.length < max) arr.push(id);
  pbRenderAll();
}

function pbRenderAll() {
  pbRenderGrid('pbMainsGrid', pbMenuItems.mains, 'mains', pbState.selectedMains, PB_PACKAGES[pbState.package].mains);
  pbRenderGrid('pbSidesGrid', pbMenuItems.sides, 'sides', pbState.selectedSides, PB_PACKAGES[pbState.package].sides);
  pbRenderGrid('pbAddonsGrid', pbMenuItems.addons, 'addons', pbState.selectedAddons, 99);
  pbUpdateCounters();
  pbUpdatePlate();
  pbUpdateSummary();
}

function pbRenderGrid(gridId, items, type, selected, max) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = items.map(item => {
    const isSel = selected.includes(item.id);
    const isFull = selected.length >= max && !isSel;
    return `<div class="pb-dish-card ${isSel ? 'pb-selected' : ''} ${isFull ? 'pb-disabled' : ''}"
      onclick="${isFull ? '' : `pbToggleItem('${item.id}','${type}')`}">
      <div class="pb-dish-icon">${pbDishIcons[item.id] || ''}</div>
      <h4>${item.name}</h4>
      <div class="pb-dish-hawaiian">${item.hawaiian}</div>
      <p class="pb-dish-desc">${item.desc}</p>
      ${item.price ? `<div class="pb-addon-price-tag">+$${item.price}/person</div>` : ''}
    </div>`;
  }).join('');
}

function pbUpdateCounters() {
  const p = PB_PACKAGES[pbState.package];
  const mc = document.getElementById('pbMainsCounter');
  mc.textContent = `${pbState.selectedMains.length} / ${p.mains}`;
  mc.classList.toggle('complete', pbState.selectedMains.length >= p.mains);
  const sc = document.getElementById('pbSidesCounter');
  sc.textContent = `${pbState.selectedSides.length} / ${p.sides}`;
  sc.classList.toggle('complete', pbState.selectedSides.length >= p.sides);
}

function pbUpdatePlate() {
  const hasItems = pbState.selectedMains.length > 0 || pbState.selectedSides.length > 0 || pbState.selectedAddons.length > 0;
  document.getElementById('pbEmptyPlateMsg').style.display = hasItems ? 'none' : 'flex';
  const mz = document.getElementById('pbMainsZone');
  const mzi = document.getElementById('pbMainsZoneItems');
  mzi.innerHTML = pbState.selectedMains.map(id => `<div class="pb-plate-food-item">${pbDishIcons[id]}</div>`).join('');
  mz.classList.toggle('pb-filled', pbState.selectedMains.length > 0);
  const p = PB_PACKAGES[pbState.package];
  const sz1 = document.getElementById('pbSidesZoneItems1');
  const sz2 = document.getElementById('pbSidesZoneItems2');
  const sa1 = document.getElementById('pbSidesZone1');
  const sa2 = document.getElementById('pbSidesZone2');
  sz1.innerHTML = pbState.selectedSides[0] ? `<div class="pb-plate-food-item">${pbDishIcons[pbState.selectedSides[0]]}</div>` : '';
  sa1.classList.toggle('pb-filled', !!pbState.selectedSides[0]);
  if (p.sides === 3) {
    const remaining = pbState.selectedSides.slice(1);
    sz2.innerHTML = remaining.map(id => `<div class="pb-plate-food-item">${pbDishIcons[id]}</div>`).join('');
    sa2.classList.toggle('pb-filled', remaining.length > 0);
  } else {
    sz2.innerHTML = pbState.selectedSides[1] ? `<div class="pb-plate-food-item">${pbDishIcons[pbState.selectedSides[1]]}</div>` : '';
    sa2.classList.toggle('pb-filled', !!pbState.selectedSides[1]);
  }
  const az = document.getElementById('pbAddonsZone');
  const azi = document.getElementById('pbAddonsZoneItems');
  if (pbState.selectedAddons.length > 0) {
    az.style.display = '';
    azi.innerHTML = pbState.selectedAddons.map(id => `<div class="pb-plate-food-item">${pbDishIcons[id]}</div>`).join('');
    az.classList.add('pb-filled');
  } else { az.style.display = 'none'; }
  document.getElementById('pbTierIndicator').textContent = `${PB_PACKAGES[pbState.package].label} — $${PB_PACKAGES[pbState.package].price}/person`;
}

function pbUpdateSummary() {
  const p = PB_PACKAGES[pbState.package];
  const g = pbState.guestCount;
  const summaryEl = document.getElementById('pbSummarySelections');
  let html = '';
  if (pbState.selectedMains.length > 0) {
    const names = pbState.selectedMains.map(id => pbMenuItems.mains.find(m => m.id === id)?.name).join(', ');
    html += `<div class="pb-summary-group"><div class="pb-summary-group-title">Mains</div><div class="pb-summary-group-items">${names}</div></div>`;
  }
  if (pbState.selectedSides.length > 0) {
    const names = pbState.selectedSides.map(id => pbMenuItems.sides.find(s => s.id === id)?.name).join(', ');
    html += `<div class="pb-summary-group"><div class="pb-summary-group-title">Sides</div><div class="pb-summary-group-items">${names}</div></div>`;
  }
  summaryEl.innerHTML = html;
  const baseCost = p.price * g;
  document.getElementById('pbPackageLabel').textContent = `${p.label} × ${g}`;
  document.getElementById('pbBaseTotal').textContent = `$${baseCost.toLocaleString()}`;
  let addonsCost = 0;
  let addonsHtml = '';
  pbState.selectedAddons.forEach(id => {
    const addon = pbMenuItems.addons.find(a => a.id === id);
    if (addon) { const cost = addon.price * g; addonsCost += cost; addonsHtml += `<div class="pb-summary-row"><span>+ ${addon.name} (${g} × $${addon.price})</span><span>$${cost.toLocaleString()}</span></div>`; }
  });
  document.getElementById('pbAddonsBreakdown').innerHTML = addonsHtml;
  document.getElementById('pbGrandTotal').textContent = `$${(baseCost + addonsCost).toLocaleString()}`;
  const isComplete = pbState.selectedMains.length >= p.mains && pbState.selectedSides.length >= p.sides;
  document.getElementById('pbCtaButton').disabled = !isComplete;
  document.getElementById('pbIncompleteMsg').style.display = isComplete ? 'none' : 'block';
}

function pbOpenModal() {
  const p = PB_PACKAGES[pbState.package];
  const mainNames = pbState.selectedMains.map(id => pbMenuItems.mains.find(m => m.id === id)?.name).join(', ');
  const sideNames = pbState.selectedSides.map(id => pbMenuItems.sides.find(s => s.id === id)?.name).join(', ');
  const addonNames = pbState.selectedAddons.map(id => pbMenuItems.addons.find(a => a.id === id)?.name).join(', ');
  const total = document.getElementById('pbGrandTotal').textContent;
  let s = `<strong>${p.label} for ${pbState.guestCount} Guests — ${total} est.</strong>`;
  s += `<div style="margin-top:0.5rem">Mains: ${mainNames}</div><div>Sides: ${sideNames}</div>`;
  if (addonNames) s += `<div>Add-ons: ${addonNames}</div>`;
  document.getElementById('pbModalSummary').innerHTML = s;
  document.getElementById('pbFormState').style.display = '';
  document.getElementById('pbSuccessState').style.display = 'none';
  document.getElementById('pbModalOverlay').classList.add('pb-active');
  document.body.style.overflow = 'hidden';
}

function pbCloseModal() {
  document.getElementById('pbModalOverlay').classList.remove('pb-active');
  document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
  if (e.target.id === 'pbModalOverlay') pbCloseModal();
});

function pbSubmitForm() {
  const name = document.getElementById('pbFormName').value.trim();
  const email = document.getElementById('pbFormEmail').value.trim();
  if (!name || !email) { alert('Please fill in your name and email so we can reach you!'); return; }
  const p = PB_PACKAGES[pbState.package];
  const formData = {
    name, email,
    phone: document.getElementById('pbFormPhone').value.trim(),
    eventDate: document.getElementById('pbFormDate').value,
    eventType: document.getElementById('pbFormEventType').value,
    notes: document.getElementById('pbFormNotes').value,
    package: pbState.package, packageLabel: p.label,
    pricePerPerson: p.price, guestCount: pbState.guestCount,
    mains: pbState.selectedMains.map(id => pbMenuItems.mains.find(m => m.id === id)?.name),
    sides: pbState.selectedSides.map(id => pbMenuItems.sides.find(s => s.id === id)?.name),
    addons: pbState.selectedAddons.map(id => { const a = pbMenuItems.addons.find(a => a.id === id); return a ? { name: a.name, price: a.price } : null; }).filter(Boolean),
    estimatedTotal: document.getElementById('pbGrandTotal').textContent
  };
  console.log('📧 LEAD CAPTURED:', formData);
  document.getElementById('pbFormState').style.display = 'none';
  document.getElementById('pbSuccessState').style.display = '';
}

// Make plate builder functions global
window.pbSelectPackage = pbSelectPackage;
window.pbToggleItem = pbToggleItem;
window.pbCloseModal = pbCloseModal;
window.pbSubmitForm = pbSubmitForm;
