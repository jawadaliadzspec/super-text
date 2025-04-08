// import '../css/main.css';
// import Swiper from 'swiper/bundle';

window.onload = function () {
  // toggle menus
  function toggleMenu(menuId, type) {
    const menu = document.getElementById(menuId);
    if (!menu) return;
  
    const hideMenus = (selector, excludeId) => {
      document.querySelectorAll(selector).forEach((el) => {
        if (el.id !== excludeId) el.classList.add('hidden');
      });
    };
  
    if (type === 'menu' || type === 'mobile') {
      hideMenus('.dropdown-menu,.dropdown-mobile', menuId);
    } else if (type === 'language') {
      hideMenus('.dropdown-menu', menuId);
      document.getElementById('mobile_dropdown')?.classList.add('hidden');
    } else {
      hideMenus('.dropdown-menu', menuId);
    }
  
    menu.classList.toggle('hidden');
  
    // Remove any existing outside click listener first
    document.removeEventListener('click', handleOutsideClick);
    
    if (!menu.classList.contains('hidden')) {
      setTimeout(() => {
        document.addEventListener('click', handleOutsideClick);
      }, 0);
    }
  
    function handleOutsideClick(e) {
      if (!menu.contains(e.target)) {
        menu.classList.add('hidden');
        document.removeEventListener('click', handleOutsideClick);
      }
    }
  }
  
  // toggle faqs
  function toggleFAQ(id) {
    const content = document.getElementById(`faq-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    const allContents = document.querySelectorAll('.faq_content');
    const allIcons = document.querySelectorAll('.faq_icon');
  
    if (!content || !icon) return;
  
    const isAlreadyOpen = !content.classList.contains('hidden');
  
    // Close all FAQs and reset their icons
    allContents.forEach((el) => el.classList.add('hidden'));
    allIcons.forEach((el) => {
      el.setAttribute('data-icon', 'iconamoon:sign-plus');
      el.classList.remove('bg-red-500', 'text-white');
      el.classList.add('border', 'border-gray-400', 'text-black');
    });
  
    // If the clicked FAQ was NOT already open, open it
    if (!isAlreadyOpen) {
      content.classList.remove('hidden');
      icon.setAttribute('data-icon', 'iconamoon:sign-minus');
      icon.classList.add('bg-red-500', 'text-white');
      icon.classList.remove('border', 'border-gray-400', 'text-black');
    }
  }
  

  window.toggleMenu = toggleMenu;
  window.toggleFAQ = toggleFAQ;
};

// preloader
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('opacity-0');
    setTimeout(() => {
      document.getElementById('preloader').style.display = 'none';
      document.getElementById('content').classList.remove('opacity-0');
    }, 100);
  }, 1000);
});

//  feature slider
new Swiper('#feature_slider', {
  loop: true,
  pagination: {
    el: '.feature_slider_pagination',
    clickable: true,
    renderBullet: function (_index, className) {
      return `<span class="${className} custom-bullet"></span>`;
    }
  },
  navigation: {
    nextEl: '#fs_btn_next',
    prevEl: '#fs_btn_prev'
  },
  breakpoints: {
    280: { pagination: { enabled: false } },
    320: { slidesPerView: 2, spaceBetween: 10, pagination: { enabled: false } },
    480: { slidesPerView: 2, spaceBetween: 10, pagination: { enabled: false } },
    672: { slidesPerView: 2, spaceBetween: 10 },
    896: { slidesPerView: 3, spaceBetween: 20 }
  }
});

//  testimonials slider
new Swiper('#testimonial_slider', {
  loop: true,
  navigation: {
    nextEl: '#testimonial_btn_next',
    prevEl: '#testimonial_btn_prev'
  },
  breakpoints: {
    672: { slidesPerView: 2, spaceBetween: 10 },
    896: { slidesPerView: 2, spaceBetween: 20 }
  }
});

//  supertext slider
new Swiper('#supertext_slider', {
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '#supertext_btn_next',
    prevEl: '#supertext_btn_prev'
  },
  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 10 },
    672: { slidesPerView: 2, spaceBetween: 10 },
    896: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 20 }
  }
});

//
// const goTopBtn = document.getElementById('go_to_top');

// Show the button when scrolling down
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 300) {
//     goTopBtn.classList.add('opacity-100', 'translate-y-0');
//     goTopBtn.classList.remove('opacity-0', 'translate-y-10');
//   } else {
//     goTopBtn.classList.add('opacity-0', 'translate-y-10');
//     goTopBtn.classList.remove('opacity-100', 'translate-y-0');
//   }
// });

// Scroll to top when button is clicked
// goTopBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });

function toggleDropdown() {
  document.getElementById('custom-dropdown').classList.toggle('hidden');
}

function selectOption(lang, text) {
  document.getElementById('selected-option').innerHTML = text;
  document.getElementById('custom-dropdown').classList.add('hidden');

  localStorage.setItem('selectedLanguage', lang);
  changeLanguage(lang);
}

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
  const dropdown = document.getElementById('custom-dropdown');
  const button = document.getElementById('custom-select');
  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add('hidden');
  }
});

// Load saved language from localStorage
document.addEventListener('DOMContentLoaded', function () {
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  const langMap = {
    en: `<span class="iconify size-8" data-icon="twemoji:flag-united-kingdom" data-inline="false"></span> <span class="hidden xl:flex"> English </span>`,
    sw: `<span class="iconify size-8" data-icon="twemoji:flag-sweden" data-inline="false"></span> <span class="hidden xl:flex"> Swedish </span>`,
    ind: `<span class="iconify size-8" data-icon="twemoji:flag-indonesia" data-inline="false"></span> <span class="hidden xl:flex"> Indonesian </span>`
  };
  // <span class="iconify size-6" data-icon="tabler:chevron-down" data-inline="false"></span>;
  document.getElementById('selected-option').innerHTML = langMap[savedLanguage];
  changeLanguage(savedLanguage);
});
