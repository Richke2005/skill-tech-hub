const CurseService = require('../services/curseServices');
const Userservice = require('../services/userServices');

const curseService = new CurseService();
const userService = new Userservice();

const slideContainer = document.querySelector('.carousel-inner');
const myCursesContainer = document.querySelector('.active-courses');

window.onload = async () => {
    try{
    const data = await curseService.getCursesLimiting();
    const user = await userService.getUserCurses("66f7602a19a0381d5274083a");
   
    renderNews(slideContainer, data);
    renderMyCurses(myCursesContainer, user[0].curses);
    }catch(error){
        console.error(error);
    }
}

function renderNews(father, newsCurses){
    father.innerHTML = '';
    newsCurses.forEach((curse, i) => {
        const slide = document.createElement('div');
        const caption = document.createElement('div');
        slide.className = 'carousel-item';
        if(i === 0)
            slide.className = 'carousel-item active';
        slide.innerHTML = `<img src="${curse.img}" class="d-block w-100" alt="...">`;
        caption.className = 'carousel-caption d-none d-md-block';
        caption.innerHTML = `<h5>${curse.title}</h5><p>${curse.desc}</p>`;
        slide.appendChild(caption);
        father.appendChild(slide);
    });
}

function renderMyCurses(father, myCurses){
    father.innerHTML = '';
    myCurses.forEach((curse) => {
        const curseCard = document.createElement('div');
        const cardBody = document.createElement('div');
        curseCard.id = curse._id;
        curseCard.className = 'card';
        curseCard.style = 'width: 18rem; margin: 20px;'
        curseCard.innerHTML = `<img src="${curse.img}" class="card-img-top" alt="...">`;
        cardBody.className = 'card-body';
        cardBody.style = 'font-family: lemon_milk;';
        cardBody.innerHTML = `<h5 class="card-title">${curse.title}</h5>
        <p class="card-text">${curse.desc}</p>
        <a href="./curse_page.html/${curse._id}" id="${curse._id}" class="btn btn-outline-dark">Go somewhere</a>`;
        curseCard.appendChild(cardBody);
        father.appendChild(curseCard);
    });
}
