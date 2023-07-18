let idNews = 0;
const news = [
    {
        id: idNews,
        title: "Pró-Reitores de Extensão da UESC e UFSB discutem futuras parcerias institucionais asdasdasd asdasdasd asdasd adasd asd",
        image: "./img/imagens-noticias/Parceria Uesc e Ufsb_secundaria.jpg",
        description: "Os pró-reitores de extensão da UESC e da UFSB reuniram-se para tratar de futuras parcerias institucionais colaborativas de promoção de atividades extensionistas, em que foram discutidos o papel das duas Universidades na proposição de soluções aos problemas locais vislumbrando o desenvolvimento regional.",
        date: "20/07/2023"
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

    for (let i = 0; i < newsPage.length; i++) {
        const newNews = newsPage[i];

        const newsDiv = document.createElement('div');
        newsDiv.classList.add('noticia');
        newsDiv.id = 'news' + idNews.toString();
        idNews++;
        newsDiv.onclick = function () {
            window.location.href = `noticia.html#${this.id}`;
        };


        const divImage = document.createElement('div');
        divImage.classList.add('p-3', 'card-noticia');

        const image = document.createElement('img');
        image.src = newNews.image;
        image.alt = 'image da Notícia';
        divImage.appendChild(image)
        newsDiv.appendChild(divImage);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('p-2', 'text-justify');

        const title = document.createElement('h5');
        title.classList.add('font-weight-bold', 'text-proex');
        title.textContent = newNews.title;
        descriptionDiv.appendChild(title);

        const description = document.createElement('p');
        description.textContent = newNews.description;
        descriptionDiv.appendChild(description);

        const date = document.createElement('p');
        date.textContent = newNews.date;
        descriptionDiv.appendChild(date);

        newsDiv.appendChild(descriptionDiv);

        newsContainer.appendChild(newsDiv);
    }
}

function ocultarElementosPorID() {
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf("#") + 1);

    var section = document.getElementById("newsSection");

    var elementos = section.getElementsByTagName("*");

    for (var i = 0; i < elementos.length; i++) {
        var elemento = elementos[i];

        if (elemento.id !== id && !elemento.contains(document.getElementById(id))) {
            elemento.style.display = "none";
        }
    }

    var elementoEspecifico = document.getElementById(id);
    if (elementoEspecifico) {
        elementoEspecifico.style.display = "block";
        var filhos = elementoEspecifico.getElementsByTagName("*");
        for (var j = 0; j < filhos.length; j++) {
            filhos[j].style.display = "block";
        }
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
