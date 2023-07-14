let idNews = 0;
const news = [
    {
        id: idNews,
        title: "Título da Notícia 3",
        image: "./img/text-imag.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet laudantium excepturi ad aliquam tempore dignissimos impedit ea facilis cumque, obcaecati autem voluptates labore reprehenderit error fugiat aspernatur pariatur officiis.",
        date: "00/00/0000"
    },
    {
        id: idNews,
        title: "Título da Notícia 2",
        image: "./img/uesc_entrada.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet laudantium excepturi ad aliquam tempore dignissimos impedit ea facilis cumque, obcaecati autem voluptates labore reprehenderit error fugiat aspernatur pariatur officiis.",
        date: "00/00/0000"
    },
    {
        id: idNews,
        title: "Título da Notícia 1",
        image: "./img/identidadeVisual/capa_manual-06.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet laudantium excepturi ad aliquam tempore dignissimos impedit ea facilis cumque, obcaecati autem voluptates labore reprehenderit error fugiat aspernatur pariatur officiis.",
        date: "00/00/0000"
    },
    {
        id: idNews,
        title: "Título da Notícia 1",
        image: "./img/teste-1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet laudantium excepturi ad aliquam tempore dignissimos impedit ea facilis cumque, obcaecati autem voluptates labore reprehenderit error fugiat aspernatur pariatur officiis.",
        date: "00/00/0000"
    },
    {
        id: idNews,
        title: "Título da Notícia 1",
        image: "./img/te.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet laudantium excepturi ad aliquam tempore dignissimos impedit ea facilis cumque, obcaecati autem voluptates labore reprehenderit error fugiat aspernatur pariatur officiis.",
        date: "00/00/0000"
    },
    
];

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
        divImage.classList.add('p-3');

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
