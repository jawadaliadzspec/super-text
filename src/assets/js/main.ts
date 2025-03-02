import '../css/main.css';
import Swiper from 'swiper/bundle';

document.getElementById('menuBtn')!.addEventListener('click', function () {
  document.getElementById('mobileMenu')!.classList.toggle('hidden');
});

document.getElementById('langBtn')!.addEventListener('click', function () {
  document.getElementById('langDropdown')!.classList.toggle('hidden');
});

document.getElementById('mobileLangBtn')!.addEventListener('click', function () {
  document.getElementById('mobileLangDropdown')!.classList.toggle('hidden');
});

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader')!.classList.add('opacity-0');
    setTimeout(() => {
      document.getElementById('preloader')!.style.display = 'none';
      document.getElementById('content')!.classList.remove('opacity-0');
    }, 500);
  }, 5000);
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
    672: { slidesPerView: 2, spaceBetween: 10 },
    896: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 20 }
  }
});

//
const goTopBtn = document.getElementById('go_to_top');

// Show the button when scrolling down
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    goTopBtn!.classList.add('opacity-100', 'translate-y-0');
    goTopBtn!.classList.remove('opacity-0', 'translate-y-10');
  } else {
    goTopBtn!.classList.add('opacity-0', 'translate-y-10');
    goTopBtn!.classList.remove('opacity-100', 'translate-y-0');
  }
});

// Scroll to top when button is clicked
goTopBtn!.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
