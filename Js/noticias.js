let idNews = 0;
const news = [
    {
        id: idNews,
        title: "Pró-Reitores de Extensão da UESC e UFSB discutem futuras parcerias institucionais",
        image: "./img/imagens-noticias/parceria_uesc_e_ufsb_secundaria.jpg",
        description: "Os pró-reitores de extensão da UESC e da UFSB reuniram-se para tratar de futuras parcerias institucionais colaborativas de promoção de atividades extensionistas, em que foram discutidos o...",
        date: "20/07/2023",
        alt: ""
    },
    {
        id: idNews,
        title: "Pró-Reitores de Extensão da UESC e UFSB discutem futuras parcerias institucionais",
        image: "./img/teste-1.jpg",
        description: "Os pró-reitores de extensão da UESC e da UFSB reuniram-se para tratar de futuras parcerias institucionais colaborativas de promoção de atividades extensionistas, em que foram discutidos o...",
        date: "20/07/2023",
        alt: ""
    },
    {
        id: idNews,
        title: "Pró-Reitores de Extensão da UESC e UFSB discutem futuras parcerias institucionais",
        image: "./img/teste-2.jpg",
        description: "Os pró-reitores de extensão da UESC e da UFSB reuniram-se para tratar de futuras parcerias institucionais colaborativas de promoção de atividades extensionistas, em que foram discutidos o...",
        date: "20/07/2023",
        alt: ""
    }
];


function showSpecifNews() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetID = urlParams.get("id");

    const newsSection = document.getElementById("newsSection");

    const children = newsSection.children;

    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.id !== targetID) {
            child.style.display = "none";
        }
    }


}

function showNews() {
    const newsContainer = document.querySelector('.noticias-container');
    newsContainer.innerHTML = '';

    const start = (currentPage - 1) * newsPerPage;
    const end = start + newsPerPage;
    const newsPage = news.slice(start, end);

    for (let i = newsPage.length - 1; i >= 0; i--) {
        const newNews = newsPage[i];

        const newsDiv = document.createElement('div');
        newsDiv.classList.add('noticia');
        newsDiv.id = 'news' + idNews.toString();
        idNews++;
        newsDiv.onclick = function () {
            window.location.href = `noticia.html#${this.id}`;
        };


        const divImage = document.createElement('div');
        divImage.classList.add('div-noticia-image');

        const image = document.createElement('img');
        image.src = newNews.image;
        image.alt = newNews.alt;
        divImage.appendChild(image)
        newsDiv.appendChild(divImage);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('p-2', 'text-justify', 'resumo-descricao');

        const title = document.createElement('h5');
        title.classList.add('font-weight-bold', 'text-proex');
        title.textContent = newNews.title;
        descriptionDiv.appendChild(title);

        const description = document.createElement('p');
        description.textContent = newNews.description;
        descriptionDiv.appendChild(description);

        const date = document.createElement('p');
        date.classList.add('py-2', 'text-secondary');
        date.textContent = newNews.date;
        descriptionDiv.appendChild(date);

        newsDiv.appendChild(descriptionDiv);

        newsContainer.appendChild(newsDiv);
    }
}


const newsPerPage = 10;
let currentPage = 1;

function createPagination() {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    const numbersPage = Math.ceil(news.length / newsPerPage);

    for (let i = 1; i <= numbersPage; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = i;
        pageLink.onclick = function () {
            currentPage = i;
            showNews();
            updatePagination();
            return false;
        };

        if (i === currentPage) {
            pageLink.classList.add('current-page');
        }

        pagination.appendChild(pageLink);
    }
}

function updatePagination() {
    const pagesLink = document.querySelectorAll('.pagination a');
    pagesLink.forEach(function (link) {
        link.classList.remove('current-page');
    });

    const currentLink = document.querySelector(`.pagination a:nth-child(${currentPage})`);
    currentLink.classList.add('current-page');

    const newsContainer = document.querySelector('.return-pagination');
    newsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

showNews();
createPagination();
