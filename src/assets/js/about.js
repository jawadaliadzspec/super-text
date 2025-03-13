// Translation Data
const translations = {
    en: {
        heroSectionParagraph:"Imagine a world where group communication isn't hindered by internet availability. That's the world we're creating!Our cross platform solution bridges communication between online chats and SMS. Whether through the app or SMS your group conversations are always reachable and connected. Supertext is a Swedish tech company committed to breaking down barriers to group-communication globally. With over a third of the world's population lacking internet access, we are driven by the impactful mission to ensure connectivity for all.Our solution has already connected millions across Scandinavia and Asia, thanks to our partnerships with leading Telecom operators.",
        ourMissionHeading:"Mission",
        ourMissionParagraph:"Our mission is to simplify how people connect. We create easy-to-use messaging tools that let everyone stay in touch, no matter their internet access or the devices they use.We aim to bring reliable communication to individuals and communities everywhere.",
        ourVissionHeading:"Vision",
        ourVissionParagraph:"To be the most loved and used global cross platform messaging choice making a positive impact on connections and relationships. Inspired by and for everyone, powered by leading-edge technology.",
    },
    ind: {
        heroSectionParagraph:"Bayangkan dunia di mana komunikasi kelompok tidak terhalang oleh ketersediaan internet. Itulah dunia yang kami ciptakan!Solusi lintas platform kami menjembatani komunikasi antara obrolan daring dan SMS. Baik melalui aplikasi atau SMS, percakapan kelompok kalian selalu dapat dijangkau dan terhubung. Supertext adalah perusahaan teknologi Swedia yang berkomitmen untuk mendobrak hambatan komunikasi kelompok secara global. Dengan lebih dari sepertiga populasi dunia tidak memiliki akses internet, kami didorong oleh misi yang berdampak untuk memastikan konektivitas bagi semua orang.Solusi kami telah menghubungkan jutaan orang di seluruh Skandinavia dan Asia, berkat kemitraan kami dengan operator Telekomunikasi terkemuka.",
        ourMissionHeading:"Misi",
        ourMissionParagraph:"Misi kami adalah menyederhanakan cara orang terhubung. Kami menciptakan alat pengiriman pesan yang mudah digunakan yang memungkinkan semua orang tetap terhubung, tanpa khawatir dengan akses internet atau perangkat yang mereka gunakan. Kami bertujuan untuk menghadirkan komunikasi yang handal bagi individu dan komunitas di mana pun.",
        ourVissionHeading:"Visi",
        ourVissionParagraph:"Menjadi pilihan pengiriman pesan lintas platform global yang paling disukai dan digunakan, yang memberikan dampak positif pada koneksi dan hubungan. Terinspirasi oleh dan untuk semua orang, didukung oleh teknologi terdepan.", 
    },
    sw: {
        heroSectionParagraph:"Imagine a world where group communication isn't hindered by internet availability. That's the world we're creating!Our cross platform solution bridges communication between online chats and SMS. Whether through the app or SMS your group conversations are always reachable and connected. Supertext is a Swedish tech company committed to breaking down barriers to group-communication globally. With over a third of the world's population lacking internet access, we are driven by the impactful mission to ensure connectivity for all.Our solution has already connected millions across Scandinavia and Asia, thanks to our partnerships with leading Telecom operators.",
        ourMissionHeading:"Mission",
        ourMissionParagraph:"Our mission is to simplify how people connect. We create easy-to-use messaging tools that let everyone stay in touch, no matter their internet access or the devices they use. We aim to bring reliable communication to individuals and communities everywhere.",
        ourVissionHeading:"Vision",
        ourVissionParagraph:"To be the most loved and used global cross platform messaging choice making a positive impact on connections and relationships. Inspired by and for everyone, powered by leading-edge technology.",
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