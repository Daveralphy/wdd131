const nav = document.querySelector('nav');
const menuButton = document.querySelector('#menu');
const header = document.querySelector('header');
const container = document.querySelector('#temples-container');
const sectionTitle = document.querySelector('#section-title');

menuButton.addEventListener('click', () => {
    header.classList.toggle('open');
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-lds-1029391-wallpaper.jpg"
    },
    {
        templeName: "Durban South Africa",
        location: "Durban, South Africa",
        dedicated: "2020, February, 16",
        area: 19860,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/durban-south-africa-temple-lds-2318212-wallpaper.jpg"
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-1229728-wallpaper.jpg"
    }
];

function displayTemples(list) {
    container.innerHTML = "";
    list.forEach(t => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
            <div class="card-text">
                <h3>${t.templeName}</h3>
                <p>Location: ${t.location}</p>
                <p>Dedicated: ${t.dedicated}</p>
                <p>Area: ${t.area} sq ft</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function getYear(d) {
    return Number(d.split(",")[0]);
}

document.querySelector('#home').addEventListener('click', () => {
    displayTemples(temples);
    sectionTitle.textContent = "Home";
});

document.querySelector('#old').addEventListener('click', () => {
    displayTemples(temples.filter(t => getYear(t.dedicated) < 1900));
    sectionTitle.textContent = "Old Temples";
});

document.querySelector('#new').addEventListener('click', () => {
    displayTemples(temples.filter(t => getYear(t.dedicated) > 2000));
    sectionTitle.textContent = "New Temples";
});

document.querySelector('#large').addEventListener('click', () => {
    displayTemples(temples.filter(t => t.area > 90000));
    sectionTitle.textContent = "Large Temples";
});

document.querySelector('#small').addEventListener('click', () => {
    displayTemples(temples.filter(t => t.area < 10000));
    sectionTitle.textContent = "Small Temples";
});

displayTemples(temples);

document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;