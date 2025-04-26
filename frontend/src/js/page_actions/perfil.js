const UserService = require('../services/userServices');

const userService = new UserService();

const resume = document.getElementById('resume');
const personalInfo = document.getElementById('personal-info');
const socialMidia = document.getElementById('social-midia');



window.onload = async () => {
    try{
        const id = sessionStorage.getItem('user_id');
        const user = await userService.getDataById(id);
        renderResume(resume, user);
        renderPersonalInfo(personalInfo, user);
        renderSocialMidia(socialMidia, user);
    }catch(error){
        console.error(error);
    }
}

function renderResume(father, data){
    father.innerHTML = '';
    const cardFlex = document.createElement('div');
    const image = document.createElement('img');
    const mt3 = document.createElement('div');
    cardFlex.className = 'd-flex flex-column align-items-center text-center';

    image.src = data.img;
    image.className = 'rounded-circle';
    image.width = '150';
    image.alt = 'Admin';
    
    var areasIterest = '';
    data.areas_of_interest.forEach((area, i) => {
        if(!(i === data.areas_of_interest.length - 1))
            areasIterest += `${area}, `;
        else
        areasIterest += `${area}.`;
    }); 

    mt3.className = 'mt-3';
    mt3.innerHTML = `<h4>${data.name}</h4>
    <p class="text-secondary mb-1">${data.enterprise.name}</p>
    <p class="text-muted font-size-sm">${areasIterest}</p>
    <button class="btn btn-primary">Follow</button>
    <button class="btn btn-outline-primary">Message</button>`;
    
    cardFlex.appendChild(image);
    cardFlex.appendChild(mt3);
    father.appendChild(cardFlex);
}

function renderPersonalInfo(father, data){
    father.innerHTML = '';
    const row1 = document.createElement('div');
    const coilName = document.createElement('div');
    const coilName2 = document.createElement('div');

    row1.className = 'row';
    coilName.className = 'col-sm-3';
    coilName2.className = 'col-sm-9 text-secondary';

    coilName.innerHTML = `<h6 class="mb-0">Full Name</h6>`;
    coilName2.innerHTML = `${data.name}`;
    row1.appendChild(coilName);
    row1.appendChild(coilName2);

    father.appendChild(row1);

    const row2 = document.createElement('div');
    const coilEmail = document.createElement('div');
    const colEmail2 = document.createElement('div');

    row2.className = 'row';
    coilEmail.className = 'col-sm-3';
    colEmail2.className = 'col-sm-9 text-secondary';

    coilEmail.innerHTML = `<h6 class="mb-0">Email</h6>`;
    colEmail2.innerHTML = `${data.email}`;
    row2.appendChild(coilEmail);
    row2.appendChild(colEmail2);

    father.appendChild(row2);

    const row3 = document.createElement('div');
    const coilAddress = document.createElement('div');
    const coilAddress2 = document.createElement('div');

    row3.className = 'row';
    coilAddress.className = 'col-sm-3';
    coilAddress2.className = 'col-sm-9 text-secondary';

    coilAddress.innerHTML = `<h6 class="mb-0">Address</h6>`;
    coilAddress2.innerHTML = `${data.address.street}`;
    row3.appendChild(coilAddress);
    row3.appendChild(coilAddress2);

    father.appendChild(row3);
}

function renderSocialMidia(father, data){
    father.innerHTML = '';
    const ul = document.createElement('ul');
    ul.className = 'list-group list-group-flush';
    
    data.social_midias.forEach((socialMidia) => {
        const li = document.createElement('li');
        const h6 = document.createElement('h6');
        const span = document.createElement('span');

        li.className = 'list-group-item d-flex justify-content-between align-items-center flex-wrap';
        h6.className = 'mb-0';
        span.className = 'text-secondary';

        h6.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        class="feather 
        feather-globe mr-2 icon-inline">
        <circle cx="12" cy="12" r="10">
        </circle>
        <line x1="2" y1="12" x2="22" y2="12">
        </line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
        </path></svg>
        ${socialMidia.name}`;

        span.innerHTML = `<a href=${socialMidia.url}>${socialMidia.name}</a>`;

        li.appendChild(h6);
        li.appendChild(span);
        
        ul.appendChild(li);
    });
    father.appendChild(ul);
}
