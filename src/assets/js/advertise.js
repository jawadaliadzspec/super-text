// Translation Data
const translations = {
    en: {
        buildRelationHeading:"Build realation with your audience",
        buildRelationParagraph:"Supertext offers a truly unique ad space in the market, where our partners can build long term relationships with their audiences in a welcome and highly relevant context. We have a strong profile within sports, lifestyle and outdoor segments. Owning our tech makes us very flexible and creative in what solutions we can offer our partners. Our goal is always to make a win-win-win situation. Our users get true value from content, our partner gets ROI in brand and sales and Supertext keeps users happy while getting funds for even more appreciated features.Today we have around 8% of the Swedish population chatting monthly on the Supertext plattform.",
        uniqueAdspaceHeading:"The unique ad space",
        uniqueAdspaceParagraph:""

    },
    ind: {
        buildRelationHeading:"",
        buildRelationParagraph:"Supertext menawarkan ruang iklan yang benar-benar unik di pasaran, tempat mitra kami dapat membangun hubungan jangka panjang dengan audiens mereka dalam konteks yang diterima dan sangat relevan. Kami memiliki profil yang kuat dalam segmen olahraga, gaya hidup, dan aktifitas luar ruangan.Memiliki teknologi kami sendiri membuat kami sangat fleksibel dan kreatif dalam solusi apa yang dapat kami tawarkan kepada mitra kami. Tujuan kami adalah selalu menciptakan situasi yang saling menguntungkan. Pengguna kami mendapatkan nilai sebenarnya dari konten, mitra kami mendapatkan ROI dalam merek dan penjualan, dan Supertext membuat pengguna senang sambil mendapatkan dana untuk fitur yang lebih dihargai.Saat ini, sekitar 8% populasi Swedia mengobrol setiap bulan di platform Supertext.",
        uniqueAdspaceHeading:"Tempat iklan yang unik",
        uniqueAdspaceParagraph
    },
    sw: {
        buildRelationHeading:"Build realation with your audience",
        buildRelationParagraph:"Supertext offers a truly unique ad space in the market, where our partners can build long term relationships with their audiences in a welcome and highly relevant context. We have a strong profile within sports, lifestyle and outdoor segments. Owning our tech makes us very flexible and creative in what solutions we can offer our partners. Our goal is always to make a win-win-win situation. Our users get true value from content, our partner gets ROI in brand and sales and Supertext keeps users happy while getting funds for even more appreciated features.Today we have around 8% of the Swedish population chatting monthly on the Supertext plattform. ",
        uniqueAdspaceHeading:"The unique ad space",
        uniqueAdspaceParagraph
    },
};

// Get elements
const languageSelector = document.getElementById("language-selector");
const heroSectionParagraph = document.getElementById("heroSectionParagraph");
const ourMissionHeading = document.getElementById("ourMissionHeading");
const ourMissionParagraph = document.getElementById("ourMissionParagraph");
const ourVissionHeading = document.getElementById("ourVissionHeading");
const ourVissionParagraph = document.getElementById("ourVissionParagraph");

// Function to change language
function changeLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang); // Save selection
    heroSectionParagraph.textContent = translations[lang].heroSectionParagraph;
    ourMissionParagraph.textContent = translations[lang].ourMissionParagraph;
    ourMissionHeading.textContent = translations[lang].ourMissionHeading;
    ourVissionHeading.textContent = translations[lang].ourVissionHeading;
    ourVissionParagraph.textContent = translations[lang].ourVissionParagraph;
}

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
    const langMap = { en: '🇬🇧 English', sw: '🇸🇪 Swedish', ind: '🇮🇩 Indonesian' };
  
    document.getElementById('selected-option').innerHTML = langMap[savedLanguage];
    changeLanguage(savedLanguage);
  });