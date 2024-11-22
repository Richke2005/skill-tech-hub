# Sistema de Ensino Indústrial

Rápida descrição do objetivo de fazer esse projeto

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Skill Tech Hub**
| :label: Tecnologias | HTML, css e javascript (tecnologias utilizadas)
| :rocket: URL         | https://url-deploy.com.br
| :fire: Desafio     | https://url-do-desafio.com.br

<!-- Inserir imagem com a #vitrinedev ao final do link -->
![](https://photos.fife.usercontent.google.com/pw/AP1GczOju1UbMeu1gU6F4UUmEYSIDGy_f5NhnpZFDfg1ktnWa4E6Eitqkh23=w1803-h927-s-no-gm?authuser=0#vitrinedev)

## Detalhes do projeto


## Pré-requisitos
- Node.js instalado (versão 14 ou superior recomendada).
- npm instalado (vem junto com o Node.js).
- plugin do live server ou similar instalado em sua máquina
- git instalado em sua máquina

### Estrutura do Projeto

```
.env
.gitignore
.hintrc
LICENSE
[package.json](http://_vscodecontentref_/0)
public/
    fonts/
        dune_rise/
            Dune_Rise.otf
            ...
        good_times/
        lemon_milk/
        nasalization/
    images/
[README.md](http://_vscodecontentref_/1)
src/
    css/
        components/
        fonts/
        pages/
    index.html
    js/
        animations/
        page_actions/
        services/
    pages/
        cadastro_empresa.html
        cadastro_funcionario.html
        catalogo.html
        curse_page.html
        historico_cursos.html
        historico_funcionarios.html
        home.html
        login_empresa.html
        login_funcionario.html
        perfil.html
[webpack.config.js](http://_vscodecontentref_/2)
```

### Passos para Rodar o Site

1. **Clonar o repositório**

   O primeiro passo é clonar o repositório do projeto:

   ```bash
   git clone <url-do-repositorio>
   cd <nome-do-repositorio>
   ```

2. **Instalar as dependências**

   No diretório do projeto, instale todas as dependências necessárias:

   ```bash
   npm install
   ```

3. **Rodar o servidor**
   Se o live server estiver instalado, clique em "Go Live" no canto inferior direito da tela do Visual Studio Code.

   Alternativamente, você pode usar qualquer outro servidor local para servir os arquivos estáticos. Por exemplo, usando o `http-server`:

   ```bash
   npx http-server ./src
   ```
