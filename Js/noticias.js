const newsPerPage = 10;
let currentPage = 1;

const news = [
    {
        id: 0,
        title: "Pró-Reitores de Extensão da UESC e UFSB discutem futuras parcerias institucionais",
        image: "./img/imagens-noticias/parceria_uesc_e_ufsb_secundaria.jpg",
        description: "Os pró-reitores de extensão da UESC e da UFSB reuniram-se para tratar de futuras parcerias institucionais colaborativas de promoção de atividades extensionistas, em que foram discutidos o...",
        date: "20/07/2023",
        alt: "imagem pró-reitores de extensão"
    }, 
    {
        id: 1,
        title: "UESC realiza Congresso Internacional sobre Educação Empreendedora e Cidadania",
        image: "./img/imagens-noticias/noticia_congresso_secundaria.png",
        description: "UESC organiza o III Congresso Internacional de Educação Empreendedora e Cidadania com o tema: Construindo pontes. Criando cultura colaborativa.",
        date: "20/06/2023",
        alt: ""
    },
    {
        id: 2,
        title: "Uesc divulga o resultado do edital PROBEX",
        image: "./img/imagens-noticias/noticia_divulgacao_edital_probex_073_secundaria.png",
        description: "Uesc publica resultados do Edital 073/2023 para abertura das inscrições do edital PROBEX",
        date: "19/07/2023",
        alt: ""
    },
    {
        id: 3,
        title: "BORÉPETEÍ.UNO: A extensão universitária na cultura regional",
        image: "./img/teste-1.jpg",
        description: "Novo espetáculo do Teatro Popular de Ilhéus é uma parceria com a Universidade Estadual de Santa Cruz, a Pró-Reitoria de Extensão-Proex, o Observatório Astronômico e o Núcleo de Artes da UESC",
        date: "21/06/2023",
        alt: ""
    },
    {
        id: 4,
        title: "Proex-UESC participa da itinerância FAEG-SUL em Itacaré",
        image: "./img/teste-1.jpg",
        description: "Proex e Programa Agir participam do encontro cultural promovido por FAEG-SUL no Centro Cultural Porto de Trás de Itacaré",
        date: "21/06/2023",
        alt: ""
    },
    {
        id: 5,
        title: "Proex-UESC participa da itinerância FAEG-SUL em Itacaré",
        image: "./img/teste-1.jpg",
        description: "Proex e Programa Agir participam do encontro cultural promovido por FAEG-SUL no Centro Cultural Porto de Trás de Itacaré",
        date: "21/06/2023",
        alt: ""
    }
];


function createNewsElement(news) {
    const newsDiv = document.createElement('div');
    newsDiv.classList.add('noticia');
    newsDiv.id = 'news' + news.id.toString(); // Usar news.id em vez de idNews
    newsDiv.onclick = function () {
        window.location.href = `noticia.html#${this.id}`;
    };

    const divImage = document.createElement('div');
    divImage.classList.add('div-noticia-image');

    const image = document.createElement('img');
    image.src = news.image;
    image.alt = news.alt;
    divImage.appendChild(image);
    newsDiv.appendChild(divImage);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('p-2', 'resumo-descricao');

    const title = document.createElement('h5');
    title.classList.add('font-weight-bold', 'text-proex');
    title.textContent = news.title;
    descriptionDiv.appendChild(title);

    const description = document.createElement('p');
    description.textContent = news.description;
    descriptionDiv.appendChild(description);

    const date = document.createElement('p');
    date.classList.add('py-2', 'text-secondary');
    date.textContent = news.date;
    descriptionDiv.appendChild(date);

    newsDiv.appendChild(descriptionDiv);

    return newsDiv;
}

function showNews() {
    const newsContainer = document.querySelector('.noticias-container');
    newsContainer.innerHTML = '';

    const start = (currentPage - 1) * newsPerPage;
    const end = start + newsPerPage;
    const newsPage = news.slice(start, end);

    const newsElements = [];

    for (let i = newsPage.length - 1; i >= 0; i--) {
        const newNews = newsPage[i];
        const newsElement = createNewsElement(newNews);
        newsElements.push(newsElement);
    }

    for (const element of newsElements) {
        newsContainer.appendChild(element);
    }
}


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
