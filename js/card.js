document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const seasonFilterFromUrl = urlParams.get('season');

    const seasonFilter = document.getElementById('seasonFilter');
    const zoneFilter = document.getElementById('zoneFilter');
    const gallery = document.getElementById('gallery');

    const cards = [
        { img: "./fotos/veranoPlaya_foto1.jpg", title: "Playa en Verano", description: "Una playa pardisíaca en Australia durante verano.", season: "verano", zone: "playa" },
        { img: "./fotos/veranoCiudad_foto2.jpg", title: "Ciudad en Verano", description: "Una foto donde se ve la vista de la ciudad de Barcelona en verano.", season: "verano", zone: "ciudad" },
        { img: "./fotos/veranoCiudad_foto3.jpg", title: "Ciudad en Verano", description: "Una foto donde se ve los edificios de una parte de la ciudad de Nueva York en verano.", season: "verano", zone: "ciudad" },
        { img: "./fotos/veranoCiudad_foto4.jpg", title: "Ciudad en Verano", description: "Una foto donde se ve la vista desde arriba de la ciudad de Río de Janeiro en verano.", season: "verano", zone: "ciudad" },
        { img: "./fotos/veranoPlaya_foto5.jpg", title: "Playa en Verano", description: "Una playa pardisíaca de arena blanca con unas montañas en el fondo esto es en Indonesia durante verano.", season: "verano", zone: "playa" },
        { img: "./fotos/veranoPlaya_foto6.jpg", title: "Playa en Verano", description: "Una playa de aguas cristalinas en la isla de Mallorca durante verano.", season: "verano", zone: "playa" },
        { img: "./fotos/inviernoMonta_foto7.jpg", title: "Montaña en Invierno", description: "Una foto donde se ve la montaña Matterhorn nevada durante el invierno.", season: "invierno", zone: "montaña" },
        { img: "./fotos/inviernoCiudad_foto8.jpg", title: "Ciudad en Invierno", description: "Una foto donde se ve la torre Eiffel nevada durante el invierno en la ciudad de París .", season: "invierno", zone: "ciudad" },
        { img: "./fotos/inviernoCiudad_foto9.jpg", title: "Ciudad en Invierno", description: "Una foto donde se ve la ciudad de Saint-Moritz durante una noche de invierno completamente iluminada .", season: "invierno", zone: "ciudad" },
        { img: "./fotos/otonoMonta_foto10.jpg", title: "Montaña en Otoño", description: "Una vista del parque natural de Somiedo en Asturias cubierto por árboles.", season: "otoño", zone: "montaña" },
        { img: "./fotos/otonoCiudad_foto11.jpg", title: "Ciudad en Otoño", description: "Una foto de la ciudad de París durante el otoño donde se ve a través de unos árboles la torre Eiffel.", season: "otoño", zone: "ciudad" }  
    ];

    function filterCards() {
        const season = seasonFilter.value.toLowerCase();
        const zone = zoneFilter.value.toLowerCase();

        const filteredCards = cards.filter(card =>
            (card.season === season || season === "") &&
            (card.zone === zone || zone === "")
        );

        displayCards(filteredCards);
    }

    function displayCards(cards) {
        gallery.innerHTML = '';
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

    // Configura el filtro de temporada desde la URL si existe
    if (seasonFilterFromUrl) {
        seasonFilter.value = seasonFilterFromUrl.toLowerCase();
    }

    // Event listeners para los filtros
    seasonFilter.addEventListener('change', filterCards);
    zoneFilter.addEventListener('change', filterCards);

    // Muestra inicial
    filterCards();
});
