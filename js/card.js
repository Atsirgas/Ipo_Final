document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const seasonFilter = document.getElementById('seasonFilter');
    const zoneFilter = document.getElementById('zoneFilter');

    const cards = [
        { img: "https://via.placeholder.com/500", title: "Ciudad en Primavera", description: "Una ciudad floreciendo en primavera.", season: "primavera", zone: "ciudad" },
        { img: "https://via.placeholder.com/500", title: "Playa en Verano", description: "Sol brillante en la playa durante el verano.", season: "verano", zone: "playa" },
        { img: "https://via.placeholder.com/500", title: "Montaña en Otoño", description: "Hojas otoñales en la montaña.", season: "otoño", zone: "montaña" },
        { img: "https://via.placeholder.com/500", title: "Ciudad en Invierno", description: "Cubierta de nieve en la ciudad.", season: "invierno", zone: "ciudad" }

        // ...
    ];

    function filterCards() {
        const season = seasonFilter.value;
        const zone = zoneFilter.value;

        const filteredCards = cards.filter(card => 
            (card.season === season || season === "") &&
            (card.zone === zone || zone === "")
        );

        displayCards(filteredCards);
    }

    function displayCards(cards) {
        gallery.innerHTML = ''; // Clear gallery first
        cards.forEach(card => {
            const cardElement = `
                <div class="card">
                    <img src="${card.img}" alt="${card.title}">
                    <div class="card-body">
                        <h3 class="card-title">${card.title}</h3>
                        <p class="card-description">${card.description}</p>
                    </div>
                </div>
            `;
            gallery.innerHTML += cardElement;
        });
    }

    // Event listeners for filters
    seasonFilter.addEventListener('change', filterCards);
    zoneFilter.addEventListener('change', filterCards);

    // Initial display
    displayCards(cards);
});
