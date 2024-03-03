// Sample card data
const cardData = {
    Arc: ["Arc 1", "Arc 2", "Arc 3", "Arc 4"],
    Terrain: ["Terrain 1", "Terrain 2", "Terrain 3", "Terrain 4"],
    Object: ["Object 1", "Object 2", "Object 3", "Object 4"],
    Mood: ["Mood 1", "Mood 2", "Mood 3", "Mood 4"]
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
        card.innerText = `${topic}: ${cards[topic]}`;
        container.appendChild(card);
    }
}
