# Sistema de Ensino Indústrial

# Sistema de Ensino Indústrial

A plataforma visa capacitar profissionais para o ambiente industrial, reduzindo manutenções desnecessárias e aumentando a eficiência e segurança no trabalho.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Skill Tech Hub**
| :label: Tecnologias | HTML, CSS e JavaScript (tecnologias utilizadas)
| :rocket: URL         | https://url-deploy.com.br
| :fire: Desafio     | https://url-do-desafio.com.br


| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Skill Tech Hub**
| :label: Tecnologias | HTML, css e javascript (tecnologias utilizadas)
| :rocket: URL         | https://url-deploy.com.br
| :fire: Desafio     | https://url-do-desafio.com.br

<!-- Inserir imagem com a #vitrinedev ao final do link -->
![](https://lh3.googleusercontent.com/pw/AP1GczMfb_yNCJdDsiKKQeRESIsYy3T3OA0nX55WGOkeUuViY7OoMj3wWAW-u-qf0xx-oX2F-Pd0MNNSsWbJse_gyUSaCASRryFEQbPfviCZi5JfKJ5rVHcgofejVqkgnnoyDJrrZmeGLn9KaAjbkclu-xofBw=w1803-h927-s-no-gm?authuser=1#vitrinedev)

## Detalhes do projeto

A plataforma de treinamento industrial é um sistema virtual de aprendizado que tem como objetivo capacitar profissionais para atuarem em ambientes industriais. Através dela, é possível simular situações reais de trabalho, proporcionando um treinamento mais eficaz e seguro para seus colaboradores. A plataforma é composta por uma interface interativa e intuitiva, que permite aos usuários vivenciarem diferentes cenários e desafios. Ela também conta com conteúdo teóricos e práticos, além de recursos audiovisuais que auxiliam no aprendizado.



## Pré-requisitos
- Node.js instalado (versão 14 ou superior recomendada).
- npm instalado (vem junto com o Node.js).
- plugin do live server ou similar instalado em sua máquina
- git instalado em sua máquina

### Estrutura do Projeto

```
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
