/******/ (() => { // webpackBootstrap
/*!***************************************!*\
  !*** ./src/js/page_actions/perfil.js ***!
  \***************************************/
// Recupera o ID do usuário logado
const userId = sessionStorage.getItem('user_id') || localStorage.getItem('loggedUserId');

if (!userId) {
    alert('ID do usuário não encontrado. Faça login novamente.');
    window.location.href = './login_funcionario.html';
} else {
    window.addEventListener('DOMContentLoaded', async () => {
        const resume = document.getElementById('resume');
        const personalInfo = document.getElementById('personal-info');
        const socialMidia = document.getElementById('social-midia');

        try {
            const response = await fetch(`http://localhost:3001/skilltech/api/v1/users/${userId}`);
            if (!response.ok) throw new Error("Falha ao buscar dados do usuário");

            const user = await response.json();

            user.name = user.name || user.nome || 'Usuário sem nome';
            user.email = user.email || 'Email não informado';
            user.address = user.address || { street: 'Endereço não informado' };
            user.areas_of_interest = user.areas_of_interest || [];
            user.enterprise = user.enterprise || { name: 'Empresa não informada' };
            user.social_midias = Array.isArray(user.social_midias) ? user.social_midias : [];
            user.img = user.img || 'https://bootdey.com/img/Content/avatar/avatar7.png';

            renderResume(resume, user);
            renderPersonalInfo(personalInfo, user);
            renderSocialMidia(socialMidia, user);

            await renderUserCurses(userId);
        } catch (error) {
            console.error("Erro ao carregar perfil:", error);
            resume?.remove();
            personalInfo?.remove();
            socialMidia?.remove();
        }
    });
}

async function renderUserCurses(userId) {
  const ul = document.getElementById('curso-lista');
  ul.innerHTML = '';

  try {
    const response = await fetch(`http://localhost:3001/skilltech/api/v1/users/${userId}/curses`);
   if (!response.ok) {
  const errorText = await response.text(); // lê mesmo respostas não JSON
  console.error("Resposta inválida do servidor:", errorText);
  ul.innerHTML = '<li>Erro ao carregar cursos.</li>';
  return;
}

    

    let cursos = [];
        try {
        const text = await response.text();
        cursos = text ? JSON.parse(text) : [];
        } catch (jsonErr) {
        console.error('Erro ao fazer parsing do JSON:', jsonErr);
        ul.innerHTML = '<li>Erro ao interpretar os dados dos cursos.</li>';
        return;
        }


    if (Array.isArray(cursos) && cursos.length > 0) {
      cursos.forEach(curso => {
        const li = document.createElement('li');
        const titulo = curso.title || 'Curso sem título';
        const url = curso.title ? `./${formatarNomeParaArquivo(titulo)}.html?id=${curso._id}` : '#';
        li.innerHTML = `<a href="${url}">${titulo}</a>`;
        ul.appendChild(li);
      });
    } else {
      ul.innerHTML = '<li>Nenhum curso cadastrado ainda.</li>';
    }
  } catch (err) {
    console.error('Erro ao carregar cursos do usuário:', err);
    ul.innerHTML = '<li>Erro ao carregar cursos.</li>';
  }
}


function renderResume(father, data) {
    father.innerHTML = '';
    const cardFlex = document.createElement('div');
    const image = document.createElement('img');
    const mt3 = document.createElement('div');
    cardFlex.className = 'd-flex flex-column align-items-center text-center';

    image.src = data.img;
    image.className = 'rounded-circle';
    image.width = '150';
    image.alt = 'Admin';

    let areasInterest = data.areas_of_interest.join(', ') || 'Sem áreas de interesse';

    mt3.className = 'mt-3';
    mt3.innerHTML = `
        <h4>${data.name}</h4>
        <p class="text-secondary mb-1">${data.enterprise.name}</p>
        <p class="text-muted font-size-sm">${areasInterest}</p>
        <button class="btn btn-primary">Follow</button>
        <button class="btn btn-outline-primary">Message</button>
    `;

    cardFlex.appendChild(image);
    cardFlex.appendChild(mt3);
    father.appendChild(cardFlex);
}

function renderPersonalInfo(father, data) {
    father.innerHTML = '';

    const makeRow = (label, value) => {
        const row = document.createElement('div');
        row.className = 'row';

        const col1 = document.createElement('div');
        col1.className = 'col-sm-3';
        col1.innerHTML = `<h6 class="mb-0">${label}</h6>`;

        const col2 = document.createElement('div');
        col2.className = 'col-sm-9 text-secondary';
        col2.textContent = value || '-';

        row.appendChild(col1);
        row.appendChild(col2);
        father.appendChild(row);
        father.appendChild(document.createElement('hr'));
    };

    makeRow('Full Name', data.name);
    makeRow('Email', data.email);
    makeRow('CPF', data.cpf || 'Não informado');
    makeRow('Address', data.address.street);
}

function renderSocialMidia(father, data) {
    father.innerHTML = '';
    const ul = document.createElement('ul');
    ul.className = 'list-group list-group-flush';

    if (data.social_midias.length === 0) {
        const li = document.createElement('li');
        li.className = 'list-group-item text-muted';
        li.textContent = 'Nenhuma rede social cadastrada.';
        ul.appendChild(li);
    } else {
        data.social_midias.forEach((socialMidia) => {
            const li = document.createElement('li');
            const h6 = document.createElement('h6');
            const span = document.createElement('span');

            li.className = 'list-group-item d-flex justify-content-between align-items-center flex-wrap';
            h6.className = 'mb-0';
            span.className = 'text-secondary';

            h6.textContent = socialMidia.name;
            span.innerHTML = `<a href="${socialMidia.url}" target="_blank">${socialMidia.url}</a>`;

            li.appendChild(h6);
            li.appendChild(span);
            ul.appendChild(li);
        });
    }

    father.appendChild(ul);
}

function formatarNomeParaArquivo(nome) {
    return nome
        .toLowerCase()
        .replace(/ç/g, 'c')
        .replace(/á|ã|â|à/g, 'a')
        .replace(/é|ê|è/g, 'e')
        .replace(/í|ì/g, 'i')
        .replace(/ó|ô|õ|ò/g, 'o')
        .replace(/ú|ù/g, 'u')
        .replace(/ /g, '_')
        .replace(/[^\w\-]/g, '');
}



/*const UserService = require('../services/userServices');

const userService = new UserService();

/*const resume = document.getElementById('resume');
const personalInfo = document.getElementById('personal-info');
const socialMidia = document.getElementById('social-midia');*/



/*window.onload = async () => {
    try{
        const id = sessionStorage.getItem('user_id');
        const user = await userService.getDataById(id);
        renderResume(resume, user);
        renderPersonalInfo(personalInfo, user);
        renderSocialMidia(socialMidia, user);
    }catch(error){
        console.error(error);
    }
}*/

/*window.onload = async () => {
    const id = sessionStorage.getItem('user_id');

    // Se não houver ID do usuário, remove todo o conteúdo de perfil
    if (!id) {
        console.warn("Usuário não autenticado. Ocultando conteúdo.");
        document.getElementById('resume')?.remove();
        document.getElementById('personal-info')?.remove();
        document.getElementById('social-midia')?.remove();
        return;
    }

    try {
        const user = await userService.getDataById(id);

        // Se não vier usuário ou nome, oculta também
        if (!user || !user.name) {
            console.warn("Dados incompletos. Ocultando conteúdo.");
            document.getElementById('resume')?.remove();
            document.getElementById('personal-info')?.remove();
            document.getElementById('social-midia')?.remove();
            return;
        }

        renderResume(resume, user);
        renderPersonalInfo(personalInfo, user);
        renderSocialMidia(socialMidia, user);

    } catch (error) {
        console.error("Erro ao carregar perfil:", error);
        // Em caso de erro, oculta o conteúdo
        document.getElementById('resume')?.remove();
        document.getElementById('personal-info')?.remove();
        document.getElementById('social-midia')?.remove();
    }
};


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
}*/

/******/ })()
;
//# sourceMappingURL=perfilBundle.js.map