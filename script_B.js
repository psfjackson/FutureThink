// Sample card data
const cardData = {
    Arc: [
    "Collapsed", 
    "Discipline/Order", 
    "Growth",
    "Transformation"],
    Timeline: [
        "A few years", 
        "A decade",
        "Ageneration",
        "A two generations",
        "A century",
        "A millenium",
        ],
    Terrain: [
    "Agriculture",
    "The Brain", 
    "Childhood", 
    "Citizenship",
    "Class",
    "Climate", 
    "Cloning", 
    "Communications",
    "Court",
    "Disease",
    "Drones", 
    "The Economy",
    "Education",
    "Entertainment", 
    "Enviorment", 
    "Equality", 
    "Flight",
    "Forest", 
    "Genetics", 
    "Gender",
    "Governance",
    "Health", 
    "Hobbies", 
    "Home",
    "Identity",
    "Insects",
    "Intellectual Property", 
    "Journalism",
    "Justice",
    "Learning", 
    "Memory", 
    "Minimg",
    "The Moon",
    "Music", 
    "Oceans", 
    "Oil",
    "Old Age",
    "Pets", 
    "Power", 
    "Religion",
    "Robots",
    "Sex",
    "Shopping", 
    "Space",
    "Sports",
    "Theatre", 
    "Travel", 
    "War",
    "Women",
    "Work", 
    "The Zoo",
    ],
    Object: [
    "Adertisement",
    "Artwork",
    "Beverage",
    "Book",
    "Bottle",
    "Box",
    "Brochure",
    "Building",
    "Candy",
    "Clothing",
    "Corporation",
    "Device",
    "Document",
    "Event",
    "Festival",
    "Flag",
    "Game",
    "Gift",
    "Headline",
    "Implant",
    "Instrument",
    "Jewellery",
    "Kit",
    "Law",
    "Logo",
    "Lotion",
    "Machine",
    "Magazine Cover",
    "Map",
    "Monument",
    "Passport",
    "Pill",
    "Plant",
    "Postcard",
    "Poster",
    "Product",
    "Prosthetic",
    "Public Service Announcement",
    "Relic",
    "Ritual",
    "Show",
    "Slogan",
    "Snack",
    "Song",
    "Souvenir",
    "Statue",
    "Sticker",
    "Symbol",
    "T-shirt",
    "Tattoo",
    "Tool",
    "Vehicle",
    "Video",
    "Weapon",
],
    Mood: [
    "Admiration",
    "Alienation",
    "Amsuement",
    "Anger",
    "Anxiety",
    "Awkwardness",
    "Calm",
    "Charm",
    "Cheer",
    "Contentment",
    "Curiosity",
    "Decadence",
    "Delight",
    "Dignity",
    "Disgust",
    "Dread",
    "Embarrasment",
    "Excitment",
    "Exhiliaration",
    "Fascination",
    "Fervor",
    "Frustration",
    "Gratitude",
    "Happiness",
    "Hilarity",
    "Hope",
    "Longing",
    "Malaise",
    "Melancholy",
    "Melodrama",
    "Nostalgia",
    "Optimism",
    "Outrage",
    "Pathos",
    "Pleasure",
    "Pride",
    "Rationality",
    "Respect",
    "Sadness",
    "Satisfaction",
    "Shame",
    "Shock",
    "Sorrow",
    "Surprise",
    "Unease",
    "Warmth",
    "Weirdness",
    "Wellbeing",
    "Wonder",
    "Worry",
    "Zen",
]
};


// Function to select random cards
function selectRandomCards() {
    const selectedCards = {};
    for (const topic in cardData) {
        const cards = cardData[topic];
        const randomIndex = Math.floor(Math.random() * cards.length);
        selectedCards[topic] = cards[randomIndex];
    }
    displayCards(selectedCards);
}

// Function to display selected cards
function displayCards(cards) {
    const container = document.getElementById("cards-container");
    container.innerHTML = "";
    for (const topic in cards) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.id = `${topic}-card`; // Unique ID for each card

        // Create topic title element
        const title = document.createElement("div");
        title.classList.add("title");
        title.innerText = topic;
        card.appendChild(title);

        // Create topic detail element
        const detail = document.createElement("div");
        detail.classList.add("detail");
        detail.innerText = cards[topic];
        card.appendChild(detail);   

        container.appendChild(card);
    }
}

// Function to dynamically adjust font size to fit content within card width
function adjustFontSizeToFit() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const content = card.querySelector(".content");
        const cardWidth = card.offsetWidth;
        const contentWidth = content.offsetWidth;

        if (contentWidth > cardWidth) {
            let fontSize = 16; // Initial font size
            while (contentWidth > cardWidth && fontSize > 8) {
                fontSize--; // Reduce font size
                content.style.fontSize = `${fontSize}px`;
                contentWidth = content.offsetWidth; // Recalculate content width
            }
        }
    });
}

// Call adjustFontSizeToFit function on page load and resize
window.addEventListener("load", adjustFontSizeToFit);
window.addEventListener("resize", adjustFontSizeToFit);
