// Translation Data
const translations = {
    en: {
        buildRelationHeading:"Build realation with your audience",
        buildRelationParagraph:"Supertext offers a truly unique ad space in the market, where our partners can build long term relationships with their audiences in a welcome and highly relevant context. We have a strong profile within sports, lifestyle and outdoor segments. Owning our tech makes us very flexible and creative in what solutions we can offer our partners. Our goal is always to make a win-win-win situation. Our users get true value from content, our partner gets ROI in brand and sales and Supertext keeps users happy while getting funds for even more appreciated features.Today we have around 8% of the Swedish population chatting monthly on the Supertext plattform.",
        uniqueAdspaceHeading:"The unique ad space",
        uniqueAdspaceParagraph:"",
        observationRateHeading:"97% observation rate ",
        observationRateParagraph:"No other media offers this high observation rate.We can provide these high numbers since your ad is embedded within the flow of the group’s messages.",
        highEngagementHeading:"High engagement ",
        highEngagementParagraph:"Track records show CTRs up to 10%. Well over benchmark!This is a result of our platform’s capacity to deliver relevant adverts to the right target audience in an active and positive environment.",
        ourClientsHeading:"Some of our clients ",
        ourClientsParagraph:"",
        advertisingHeading:"Advertising options ",
        advertisingParagraph:"",
        whyAdvertiseHeading:"Why advertise with Supertext?",
    },
    ind: {
        buildRelationHeading:"",
        buildRelationParagraph:"Supertext menawarkan ruang iklan yang benar-benar unik di pasaran, tempat mitra kami dapat membangun hubungan jangka panjang dengan audiens mereka dalam konteks yang diterima dan sangat relevan. Kami memiliki profil yang kuat dalam segmen olahraga, gaya hidup, dan aktifitas luar ruangan.Memiliki teknologi kami sendiri membuat kami sangat fleksibel dan kreatif dalam solusi apa yang dapat kami tawarkan kepada mitra kami. Tujuan kami adalah selalu menciptakan situasi yang saling menguntungkan. Pengguna kami mendapatkan nilai sebenarnya dari konten, mitra kami mendapatkan ROI dalam merek dan penjualan, dan Supertext membuat pengguna senang sambil mendapatkan dana untuk fitur yang lebih dihargai.Saat ini, sekitar 8% populasi Swedia mengobrol setiap bulan di platform Supertext.",
        uniqueAdspaceHeading:"Tempat iklan yang unik",
        uniqueAdspaceParagraph:"",
        observationRateHeading:"",
        observationRateParagraph:"",
        highEngagementHeading:"Keterikatan yang tinggi",
        highEngagementParagraph:"Catatan jejak menunjukkan CTR hingga 10%. Jauh di atas tolok ukur!Ini adalah hasil dari kapasitas platform kami untuk menyampaikan iklan yang relevan kepada audiens target yang tepat dalam lingkungan yang aktif dan positif.",
        ourClientsHeading:"Beberapa klien kami",
        ourClientsParagraph:"",
        advertisingHeading:"Pilihan periklanan",
        advertisingParagraph:"",
        whyAdvertiseHeading:"Why advertise with Supertext?",
      },
    sw: {
        buildRelationHeading:"Build realation with your audience",
        buildRelationParagraph:"Supertext offers a truly unique ad space in the market, where our partners can build long term relationships with their audiences in a welcome and highly relevant context. We have a strong profile within sports, lifestyle and outdoor segments. Owning our tech makes us very flexible and creative in what solutions we can offer our partners. Our goal is always to make a win-win-win situation. Our users get true value from content, our partner gets ROI in brand and sales and Supertext keeps users happy while getting funds for even more appreciated features.Today we have around 8% of the Swedish population chatting monthly on the Supertext plattform. ",
        uniqueAdspaceHeading:"The unique ad space",
        uniqueAdspaceParagraph:"",
        observationRateHeading:"97% observation rate ",
        observationRateParagraph:"No other media offers this high observation rate.We can provide these high numbers since your ad is embedded within the flow of the group’s messages.",
        highEngagementHeading:"High engagement ",
        highEngagementParagraph:"Track records show CTRs up to 10%. Well over benchmark!This is a result of our platform’s capacity to deliver relevant adverts to the right target audience in an active and positive environment.",
        ourClientsHeading:"Some of our clients ",
        ourClientsParagraph:"",
        advertisingHeading:"Advertising options ",
        advertisingParagraph:"",
        whyAdvertiseHeading:"Why advertise with Supertext?",
      },
};

// Get elements
const languageSelector = document.getElementById("language-selector");
const buildRelationHeading = document.getElementById("buildRelationHeading");
const buildRelationParagraph = document.getElementById("buildRelationParagraph");
const uniqueAdspaceHeading = document.getElementById("uniqueAdspaceHeading");
const uniqueAdspaceParagraph = document.getElementById("uniqueAdspaceParagraph");
const observationRateHeading = document.getElementById("observationRateHeading");
const observationRateParagraph = document.getElementById("observationRateParagraph");
const highEngagementHeading = document.getElementById("highEngagementHeading");
const highEngagementParagraph = document.getElementById("highEngagementParagraph");
const ourClientsHeading = document.getElementById("ourClientsHeading");
const ourClientsParagraph = document.getElementById("ourClientsParagraph");
const advertisingHeading = document.getElementById("advertisingHeading");
const advertisingParagraph = document.getElementById("advertisingParagraph");
const whyAdvertiseHeading = document.getElementById("whyAdvertiseHeading");

// Function to change language
function changeLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang); // Save selection
    buildRelationHeading.textContent = translations[lang].buildRelationHeading;
    buildRelationParagraph.textContent = translations[lang].buildRelationParagraph;
    uniqueAdspaceHeading.textContent = translations[lang].uniqueAdspaceHeading;
    uniqueAdspaceParagraph.textContent = translations[lang].uniqueAdspaceParagraph;
    observationRateHeading.textContent = translations[lang].observationRateHeading;
    observationRateParagraph.textContent = translations[lang].observationRateParagraph;
    highEngagementHeading.textContent = translations[lang].highEngagementHeading;
    highEngagementParagraph.textContent = translations[lang].highEngagementParagraph;
    ourClientsHeading.textContent = translations[lang].ourClientsHeading;
    ourClientsParagraph.textContent = translations[lang].ourClientsParagraph;
    advertisingHeading.textContent = translations[lang].advertisingHeading;
    advertisingParagraph.textContent = translations[lang].advertisingParagraph;
    whyAdvertiseHeading.textContent = translations[lang].whyAdvertiseHeading;
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