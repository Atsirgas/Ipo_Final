function initializeGallery() {
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
        { img: "./fotos/otonoCiudad_foto11.jpg", title: "Ciudad en Otoño", description: "Una foto de la ciudad de París durante el otoño donde se ve a través de unos árboles la torre Eiffel.", season: "otoño", zone: "ciudad" },
        { img: "./fotos/primaveraCiudad_foto12.jpg", title: "Ciudad en primavera", description: "Una vista de la torre Eiffel a través de las hojas rosas de unos árboles en la primavera.", season: "primavera", zone: "ciudad" },
        { img: "./fotos/primaveraCiudad_foto13.jpg", title: "Ciudad en primavera", description: "Se ve unas de las casas de la ciudad de Ámsterdam donde delante tienen unos campos de flores en primavera.", season: "primavera", zone: "ciudad" },
        { img: "./fotos/primaveraCiudad_foto14.jpg", title: "Ciudad en primavera", description: "Una calle peatonal en ciudad de México con árboles de hojas de color lavanda a los dos lados.", season: "primavera", zone: "ciudad" },
        { img: "./fotos/primaveraCiudad_foto15.jpg", title: "Ciudad en primavera", description: "Se ve una parte de un parque en la ciudad de Dublín con muchos árboles de hojas rosadas.", season: "primavera", zone: "ciudad" },
        { img: "./fotos/primaveraCiudad_foto16.jpg", title: "Ciudad en primavera", description: "Se ve uno de los canales de la ciudad de Ámsterdam con árboles a uno de los lados.", season: "primavera", zone: "ciudad" },
        { img: "./fotos/primaveraCiudad_foto17.jpg", title: "Ciudad en primavera", description: "Se ve la torre del reloj de Londres entre unas flores.", season: "primavera", zone: "ciudad" },
        { img: "./fotos/primaveraCiudad_foto18.jpg", title: "Ciudad en primavera", description: "Una vista de un lago desde un paseo de la ciudad de Montreux con flores a los lados.", season: "primavera", zone: "ciudad" },
        { img: "./fotos/primaveraCiudad_foto19.jpg", title: "Ciudad en primavera", description: "Se ve un grupo de flores en el banco de un canal el cual atraviesa un puente en la ciudad de Sevilla.", season: "primavera", zone: "ciudad" },
        { img: "./fotos/primaveraMonta_foto20.jpg", title: "Montaña en primavera", description: "Se ve un cerezo con flores rosas y de fondo una vista del monte Fuji con el pico nevado.", season: "primavera", zone: "montaña" },
        { img: "./fotos/primaveraMonta_foto21.jpg", title: "Montaña en primavera", description: "Se ve un campo de flores desde lo alto de una montaña en Tennesse durante el atardecer.", season: "primavera", zone: "montaña" },
        { img: "./fotos/primaveraMonta_foto22.jpg", title: "Montaña en primavera", description: "Se ve la vista de un bosque con montañas nevadas desde el borde de un lago.", season: "primavera", zone: "montaña" },
        { img: "./fotos/primaveraCiudad_foto23.jpg", title: "Ciudad en primavera", description: "Se ve una fuente en un parque con algunos árboles en la ciudad de Nueva York.", season: "primavera", zone: "ciudad" },
        { img: "./fotos/primaveraCiudad_foto24.jpg", title: "Ciudad en primavera", description: "Una calle de la ciudad de Stavanger con casas blancas y flores a los dos lados.", season: "primavera", zone: "ciudad" },
        { img: "./fotos/primaveraCiudad_foto25.jpg", title: "Ciudad en primavera", description: "Se ve un canal con canoas rodeado de árboles y de fondo la ciudad de Tokio.", season: "primavera", zone: "ciudad" },
        { img: "./fotos/primaveraPlaya_foto26.jpg", title: "Playa en primavera", description: "Una playa de roca volcánica de fondo con vegetación en primer plano en Tenerife.", season: "primavera", zone: "playa" },
        { img: "./fotos/primaveraPlaya_foto27.jpg", title: "Playa en primavera", description: "Se ve una vista aérea de la bahía de San Sebastián con la playa y los barcos anclados.", season: "primavera", zone: "playa" },



        { img: "./fotos/veranoCiudad_foto28.jpg", title: "Ciudad en Verano", description: "Se ve desde el mar las míticas casas de colores de la ciudad de Bergen en verano.", season: "verano", zone: "ciudad" },
        { img: "./fotos/veranoCiudad_foto29.jpg", title: "Ciudad en Verano", description: "Se puede ver una parte de la ciudad de Venecia desde el mar durante un atardecer de verano.", season: "verano", zone: "ciudad" },
        { img: "./fotos/veranoCiudad_foto30.jpg", title: "Ciudad en Verano", description: "Una vista aérea de la ciudad de Londres con edificios a cada lado del río  y puentes que lo atraviesan.", season: "verano", zone: "ciudad" },
        { img: "./fotos/veranoCiudad_foto31.jpg", title: "Ciudad en Verano", description: "Se ve una vista de los edificios de la ciudad de los Ángeles durante el amanecer en verano.", season: "verano", zone: "ciudad" },
        { img: "./fotos/veranoCiudad_foto32.jpg", title: "Ciudad en Verano", description: "Se ve la ciudad Italiana polignano mare en el borde de unos acantilados al lado del mar.", season: "verano", zone: "ciudad" },
        { img: "./fotos/veranoCiudad_foto33.jpg", title: "Ciudad en Verano", description: "Una vista aérea de la casa de ópera  de Sídney con la ciudad de fondo.", season: "verano", zone: "ciudad" },
        { img: "./fotos/veranoCiudad_foto34.jpg", title: "Ciudad en Verano", description: "Se ve el puente de Brooklyn con los rascacielos de la ciudad de Nueva York de fondo.", season: "verano", zone: "ciudad" },
        { img: "./fotos/veranoCiudad_foto35.jpg", title: "Ciudad en Verano", description: "Una de las calles de la ciudad Francesa de Villefranche-sur-Mer con casas de colores a los dos lados.", season: "verano", zone: "ciudad" },
        { img: "./fotos/veranoPlaya_foto36.jpg", title: "Playa en Verano", description: "Vista aérea de la playa de Bondi Beach durante el verano.", season: "verano", zone: "playa" },
        { img: "./fotos/veranoPlaya_foto37.jpg", title: "Playa en Verano", description: "Se ve una pequeña cala de agua clara con una casa en una península en la costa Amalfitana.", season: "verano", zone: "playa" },
        { img: "./fotos/veranoPlaya_foto38.jpg", title: "Playa en Verano", description: "Una playa de arena blanca rodeada de palmeras y aguas turquesa en República Dominicana.", season: "verano", zone: "playa" },
        { img: "./fotos/veranoMonta_foto39.jpg", title: "Montaña en Verano", description: "Se ve una pradera con unas cuantas cabañas y de fondo las Dolomitas en Italia.", season: "verano", zone: "montaña" },


        { img: "./fotos/inviernoCiudad_foto40.jpg", title: "Ciudad en Invierno", description: "Una foto desde un puente de la ciudad de Ámsterdam con todo nevado.", season: "invierno", zone: "ciudad" },
        { img: "./fotos/inviernoCiudad_foto41.jpg", title: "Ciudad en Invierno", description: "Una foto desde el mar de las famosas casas de colores de la ciudad de Bergen con un paisaje nevado de fondo.", season: "invierno", zone: "ciudad" },
        { img: "./fotos/inviernoCiudad_foto42.jpg", title: "Ciudad en Invierno", description: "Una imagen de la ciudad de Aspen nevada desde lo alto de una montaña.", season: "invierno", zone: "ciudad" },
        { img: "./fotos/inviernoCiudad_foto43.jpg", title: "Ciudad en Invierno", description: "Se ve una vista de la ciudad de Helsinki con un mar de hielo delante.", season: "invierno", zone: "ciudad" },
        { img: "./fotos/inviernoCiudad_foto44.jpg", title: "Ciudad en Invierno", description: "Se puede ver la aurora boreal en el cielo nocturno de una ciudad en las Lofoten.", season: "invierno", zone: "ciudad" },
        { img: "./fotos/inviernoCiudad_foto45.jpg", title: "Ciudad en Invierno", description: "Se ve desde el río la ciudad de Praga nevada.", season: "invierno", zone: "ciudad" },
        { img: "./fotos/inviernoPlaya_foto46.jpg", title: "Playa en Invierno", description: "Una playa nevada con montañas de fondo y las olas rompiendo en la playa con un surfista en las Lofoten.", season: "invierno", zone: "playa" },
        { img: "./fotos/inviernoMonta_foto47.jpg", title: "Montaña en Invierno", description: "Se ve el lago Moraine con toda la orilla llena de árboles y montañas nevadas.", season: "invierno", zone: "montaña" },
        { img: "./fotos/inviernoMonta_foto48.jpg", title: "Montaña en Invierno", description: "Una vista aérea de la estación de esquí en la montaña Mammoth completamente nevada.", season: "invierno", zone: "montaña" },
        { img: "./fotos/inviernoMonta_foto49.jpg", title: "Montaña en Invierno", description: "Una foto del pico nevado del Mont blanc rodeado de otras montañas nevadas.", season: "invierno", zone: "montaña" },
        { img: "./fotos/inviernoMonta_foto50.jpg", title: "Montaña en Invierno", description: "Una vista del pico K2 completamente nevado.", season: "invierno", zone: "montaña" },
        { img: "./fotos/inviernoMonta_foto51.jpg", title: "Montaña en Invierno", description: "Una vista de la montaña mas alta del mundo, el Everest completamente nevado.", season: "invierno", zone: "montaña" },



        { img: "./fotos/otonoCiudad_foto52.jpg", title: "Ciudad en Otoño", description: "Uno de los canales de Ámsterdam con líneas de barcos a los dos lados y de árboles.", season: "otoño", zone: "ciudad" },
        { img: "./fotos/otonoCiudad_foto53.jpg", title: "Ciudad en Otoño", description: "Una foto de una carretera con árboles a los dos lados que llega a la ciudad de Berlin.", season: "otoño", zone: "ciudad" },
        { img: "./fotos/otonoCiudad_foto54.jpg", title: "Ciudad en Otoño", description: "Vemos dos barcos en uno de los canales de la ciudad de Brujas.", season: "otoño", zone: "ciudad" },
        { img: "./fotos/otonoCiudad_foto55.jpg", title: "Ciudad en Otoño", description: "Vemos dos filas de árboles de color dorado y de fondo la torre del reloj de Londres.", season: "otoño", zone: "ciudad" },
        { img: "./fotos/otonoCiudad_foto56.jpg", title: "Ciudad en Otoño", description: "Una vista aérea de la ciudad de zurich donde vemos un lago al que llega un río.", season: "otoño", zone: "ciudad" },
        { img: "./fotos/otonoCiudad_foto57.jpg", title: "Ciudad en Otoño", description: "Vemos un parque al lado de un río y en el horizonte la ciudad de Vancouver.", season: "otoño", zone: "ciudad" },
        { img: "./fotos/otonoCiudad_foto58.jpg", title: "Ciudad en Otoño", description: "Vemos un río  que atraviesa la ciudad de Praga con todas las hojas de árboles de color dorado.", season: "otoño", zone: "ciudad" },
        { img: "./fotos/otonoPlaya_foto59.jpg", title: "Playa en Otoño", description: "Se ve una playa en el amanecer con arbloes y casas en primera línea  y un mar tranquilo en Polonia.", season: "otoño", zone: "playa" },
        { img: "./fotos/otonoPlaya_foto60.jpg", title: "Playa en Otoño", description: "Vemos una playa con árboles en la orilla del lago Carmi en Vermontt.", season: "otoño", zone: "playa" },
        { img: "./fotos/otonoMonta_foto61.jpg", title: "Montaña en Otoño", description: "Vemos un castillo en Bavaria Alemania rodeado por un bosque con las hojas de los árboles de colores rojizos y montañas en el horizonte.", season: "otoño", zone: "montaña" },
        { img: "./fotos/otonoMonta_foto62.jpg", title: "Montaña en Otoño", description: "Se ve un lago el cual tiene un bosque en la orilla y unas montañas en el horizonte, esto es en el parque nacional Grand Teton.", season: "otoño", zone: "montaña" },
        { img: "./fotos/otonoMonta_foto63.jpg", title: "Montaña en Otoño", description: "Vemos una parte de las tierras altas en Escocia donde se ven bosques y montañas.", season: "otoño", zone: "montaña" }
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
}
