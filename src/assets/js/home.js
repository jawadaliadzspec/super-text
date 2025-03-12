// Translation Data
const translations = {
    en: {
        heroHeading: "With you, it’s more exciting",
        heroParaghrap: "Supertext makes online chats and offline SMS seamlessly unite, enabling group conversations with family, friends and colleagues, regardless of internet availability or phone model.",
        sectionNoDataHeading: "No data? No internet?  No problem!",
        sectionNoDataParaghrap: "Picture this: you're chatting with your family, colleagues or friends and some are online using our app, while others are offline, sticking to good old SMS. The twist? Our platform merges all messages into one thread, making group chats possible even when people are offline."
    },
    ind: {
        heroHeading: "Dengan kalian, lebih menarik",
        heroParaghrap: "Supertext membuat percakapan online dan SMS offline menjadi satu, memungkinkan percakapan kelompok dengan keluarga, teman, ataupun teman kerja, tanpa perduli akses internet ataupun model ponsel.",
        sectionNoDataHeading:"",
        sectionNoDataParaghrap: "Bayangkan ini: kalian sedang berbicara dengan keluarga, kolega atau teman dan beberapa orang online menggunakan aplikasi kita, sementara lainnya offline, hanya mengandalkan SMS. Yang mengagumkan? Platform kita menggabungkan semua pesan menjadi satu, membuat percakapan grup bahkan ketika orang-orang sedang offline."
    },
    sw: {
        heroHeading: "With you, it’s more exciting",
        heroParaghrap: "Supertext makes online chats and offline SMS seamlessly unite, enabling group conversations with family, friends and colleagues, regardless of internet availability or phone model.",
        sectionNoDataHeading: "No data? No internet?  No problem!",
        sectionNoDataParaghrap: "Picture this: you're chatting with your family, colleagues or friends and some are online using our app, while others are offline, sticking to good old SMS. The twist? Our platform merges all messages into one thread, making group chats possible even when people are offline."

    },
};

// Get elements
const languageSelector = document.getElementById("language-selector");
const welcomeText = document.getElementById("welcome-text");
const descriptionText = document.getElementById("description");

// Function to change language
function changeLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang); // Save selection
    welcomeText.textContent = translations[lang].welcome;
    descriptionText.textContent = translations[lang].description;
}

// Load saved language from localStorage
const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
languageSelector.value = savedLanguage;
changeLanguage(savedLanguage);

// Event listener for language selection
languageSelector.addEventListener("change", (event) => {
    changeLanguage(event.target.value);
});
