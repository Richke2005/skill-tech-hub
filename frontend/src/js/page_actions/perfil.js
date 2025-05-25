// Recupera o ID do usuário logado
//let userId = sessionStorage.getItem('user_id') || localStorage.getItem('loggedUserId');
let userId = localStorage.getItem('loggedUserId') || sessionStorage.getItem('user_id');


console.log("user_id no sessionStorage:", sessionStorage.getItem("user_id"));
console.log("user_id no localStorage:", localStorage.getItem("loggedUserId"));

if (!userId) {
    alert('ID do usuário não encontrado. Faça login novamente.');
    window.location.href = './login_funcionario.html';
} else {
    window.addEventListener('DOMContentLoaded', async () => {
        const resumeElement = document.getElementById('resume'); // Renomeado para evitar conflito com 'user'
        const personalInfoElement = document.getElementById('personal-info'); // Renomeado
        const socialMidiaElement = document.getElementById('social-midia'); // Renomeado

        try {
            const response = await fetch(`http://localhost:3001/skilltech/api/v1/users/${userId}`);
            if (!response.ok) {
                // Tenta ler a mensagem de erro do backend, se disponível
                const errorData = await response.json().catch(() => ({ message: "Erro desconhecido" }));
                throw new Error(`Falha ao buscar dados do usuário: ${errorData.message || response.statusText}`);
            }

            const user = await response.json();
            user.name = user.name || user.nome || 'Usuário sem nome';
            // Garantir que os campos existam para evitar erros, usando fallback
            
            user.email = user.email || 'Email não informado';
            user.cpf = user.cpf || 'CPF não informado'; // Campo 'cpf' do backend
            user.areas_of_interest = user.areas_of_interest || [];
            user.social_midias = Array.isArray(user.social_midias) ? user.social_midias : []; // Garante que seja um array

            // Chamar as funções de renderização com os elementos e os dados
            if (resumeElement) {
                renderResume(resumeElement, user);
            }
            if (personalInfoElement) {
                renderPersonalInfo(personalInfoElement, user);
            }
            if (socialMidiaElement) {
                renderSocialMidia(socialMidiaElement, user);
            }

            await renderUserCurses(userId);



        } catch (error) {
            console.error("Erro ao carregar dados do usuário:", error);
            alert(`Erro ao carregar seu perfil: ${error.message}.`);
        }
    });
}

async function renderUserCurses(userId) {
  const ul = document.getElementById('lista-cursos');
  if (!ul) {
    console.warn("Elemento #curso-lista não encontrado no DOM.");
    return;
  }

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
        
        const cursoIdsRenderizados = new Set();

    if (Array.isArray(cursos) && cursos.length > 0) {
        const cursosUnicos = cursos.filter(
        (curso, index, self) => index === self.findIndex(c => c._id === curso._id)
        );

      cursos.forEach(curso => {
        if (!curso._id || cursoIdsRenderizados.has(curso._id)) return;

        cursoIdsRenderizados.add(curso._id);

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
    father.innerHTML = '' // Não apagar aqui, pois o HTML já está montado. Apenas preencher.
    const nameElement = father.querySelector('#name');
        const enterpriseElement = father.querySelector('#enterprise');
        const interestsElement = father.querySelector('#interests');

        if (nameElement) nameElement.textContent = data.name || data.nome || 'Sem nome';
        if (enterpriseElement) enterpriseElement.textContent = data.enterprise?.name || 'Sem empresa';
        if (interestsElement) interestsElement.textContent = data.areas_of_interest?.join(', ') || 'Sem áreas de interesse';

    

    const cardFlex = document.createElement('div');
    const image = document.createElement('img');
    const mt3 = document.createElement('div');
    cardFlex.className = 'd-flex flex-column align-items-center text-center';

        image.src = data.img || 'https://bootdey.com/img/Content/avatar/avatar7.png';
        image.className = 'rounded-circle';
        image.width = 150;
        image.alt = 'Admin';
    let areasInterest = data.areas_of_interest.join(', ') || 'Sem áreas de interesse';

    mt3.className = 'mt-3';
    mt3.innerHTML = `
        <h4>${data.name}</h4>
        <p class="text-secondary mb-1">${data.enterprise?.name || 'Empresa não informada'}</p>
        <p class="text-muted font-size-sm">${areasInterest}</p>
        <button class="btn btn-primary">Follow</button>
        <button class="btn btn-outline-primary">Message</button>
    `;

    cardFlex.appendChild(image);
    cardFlex.appendChild(mt3);
    father.appendChild(cardFlex);
}

function renderPersonalInfo(father, data) {
    father.innerHTML = ''; // Intencionalmente limpa e recria o conteúdo

    // Full Name
    const rowFullName = document.createElement('div');
    rowFullName.className = 'row';
    rowFullName.innerHTML = `
        <div class="col-sm-3">
            <h6 class="mb-0">Full Name</h6>
        </div>
       <div class="col-sm-9 text-secondary">${data.name || data.nome || 'Não informado'}</div> `;
    father.appendChild(rowFullName);
    father.appendChild(document.createElement('hr'));

    // Email
    const rowEmail = document.createElement('div');
    rowEmail.className = 'row';
    rowEmail.innerHTML = `
        <div class="col-sm-3">
            <h6 class="mb-0">Email</h6>
        </div>
        <div class="col-sm-9 text-secondary">${data.email}</div> `;
    father.appendChild(rowEmail);
    father.appendChild(document.createElement('hr'));

    // CPF
    const rowCpf = document.createElement('div');
    rowCpf.className = 'row';
    rowCpf.innerHTML = `
        <div class="col-sm-3">
            <h6 class="mb-0">CPF</h6>
        </div>
        <div class="col-sm-9 text-secondary">${data.cpf}</div> `;
    father.appendChild(rowCpf);
    father.appendChild(document.createElement('hr'));

    const rowPhone = document.createElement('div');
    rowPhone.className = 'row';
    rowPhone.innerHTML = `
        <div class="col-sm-3">
            <h6 class="mb-0">Phone</h6>
        </div>
        <div class="col-sm-9 text-secondary">(239) 816-9029</div>
    `;
    father.appendChild(rowPhone);
    father.appendChild(document.createElement('hr'));

    const rowMobile = document.createElement('div');
    rowMobile.className = 'row';
    rowMobile.innerHTML = `
        <div class="col-sm-3">
            <h6 class="mb-0">Mobile</h6>
        </div>
        <div class="col-sm-9 text-secondary">(320) 380-4539</div>
    `;
    father.appendChild(rowMobile);
    father.appendChild(document.createElement('hr'));

    const rowAddress = document.createElement('div');
    rowAddress.className = 'row';
    rowAddress.innerHTML = `
        <div class="col-sm-3">
            <h6 class="mb-0">Address</h6>
        </div>
        <div class="col-sm-9 text-secondary">Bay Area, San Francisco, CA</div>
    `;
    father.appendChild(rowAddress);
    father.appendChild(document.createElement('hr'));
}



function renderSocialMidia(father, data) {
    father.innerHTML = '';
    const ul = document.createElement('ul');
    ul.className = 'list-group list-group-flush';

    // Se social_midias estiver vazia ou não for um array, evitar o forEach
    if (data.social_midias && Array.isArray(data.social_midias) && data.social_midias.length > 0) {
        data.social_midias.forEach((socialMidia) => {
            const li = document.createElement('li');
            const h6 = document.createElement('h6');
            const span = document.createElement('span');

            li.className = 'list-group-item d-flex justify-content-between align-items-center flex-wrap';
            h6.className = 'mb-0';
            span.className = 'text-secondary';

            // ATENÇÃO: Se 'socialMidia' for apenas uma string (ex: "facebook"), você precisará de um mapa
            // para obter o ícone SVG e o link correto. O código abaixo assume que `socialMidia` é uma string.
            // Se socialMidia for um objeto { name: 'facebook', url: '...' }, ajuste aqui.
            // Para simplicidade, vou usar um exemplo genérico.
            let iconSvg = '';
            let socialName = socialMidia;
            let socialUrl = '#'; // Fallback

            if (socialMidia === 'github') {
                iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`;
                socialUrl = `https://github.com/${socialMidia}`; // Ajuste para o URL real do usuário
            } else if (socialMidia === 'twitter') {
                 iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>`;
                 socialUrl = `https://twitter.com/${socialMidia}`;
            }
            // Adicione mais `else if` para outros social_midias (instagram, facebook, website, etc.)

            h6.innerHTML = `${iconSvg}${socialName}`;
            span.textContent = socialMidia; // Ou data.social_midias[index].url se for um objeto

            li.appendChild(h6);
            li.appendChild(span);
            ul.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = 'Nenhuma mídia social informada.';
        ul.appendChild(li);
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
