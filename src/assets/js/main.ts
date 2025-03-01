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

//  Telco partners slider
new Swiper('#telco_partner', {
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.telco_partner_button_next',
    prevEl: '.telco_partner_button_prev'
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    480: { slidesPerView: 2 },
    640: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 }
  }
});
