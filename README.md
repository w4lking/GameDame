# Game Dame - Landing Page de E-commerce de Jogos

Bem-vindo ao repositório do projeto **Game Dame**!  
Esta é uma aplicação web desenvolvida como parte do processo trainee da **Emakers Jr.**, seguindo a trilha de Front-end.  
O objetivo foi construir uma interface de e-commerce de jogos, utilizando **React**.

---

## Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias e bibliotecas:

- **React** – Biblioteca principal para a construção da interface de usuário.
- **Vite** – Ferramenta de build para um ambiente de desenvolvimento rápido e otimizado.
- **React Router DOM** – Gerenciamento de rotas e navegação entre páginas.
- **Swiper.js** – Criação de carrosséis interativos e responsivos.
- **React-slick.js** – Criação de carrosséis interativos e responsivos.
- **Material-UI Icons** – Utilização de ícones consistentes em toda a aplicação.
- **CSS Modules** – Estilização de componentes de forma escopada e organizada.
- **JavaScript (ES6+)** – Linguagem base para toda a lógica da aplicação.

---

## Funcionalidades Implementadas

A aplicação conta com diversas funcionalidades e telas, implementadas de acordo com os requisitos do processo trainee:

### Múltiplas Páginas

- **Autenticação** – Telas de Login, Registro e Recuperação de Senha.
- **HomePage** – Página principal com banners e listas de jogos.
- **Populares** – Lista de jogos mais populares com layout alternado.
- **Visualização de Jogo** – Página de detalhes com informações dinâmicas.
- **Carrinho de Compras** – Tela de checkout com resumo e pagamento.
- **Conta do Usuário** – Informações do usuário e jogos adquiridos.

### Outros Recursos

- **Componentização** – Interface modular com componentes reutilizáveis (`Button`, `Input`, `Footer`, `NavBar`, `FloatingButton`, `Form`).
- **Dados Mockados** – Simulação de uma API real com dados separados da lógica visual.
- **Design Responsivo** – Totalmente adaptável a dispositivos móveis e telas maiores.
- **Navegação Dinâmica** – Roteamento dinâmico com `/game/:gameId`.

---

## 📂 Estrutura de Pastas

📦 GameDame
┣ 📂 public ----------------------------- // Arquivos públicos acessíveis na aplicação (como index.html)
┣ 📂 src -------------------------------- // Diretório principal do código-fonte
┃ ┣ 📂 assets -------------------------- // Recursos estáticos como imagens, fontes, etc.
┃ ┣ 📂 components ---------------------- // Componentes reutilizáveis da interface
┃ ┃ ┣ 📂 carrossel --------------------- // Componentes de carrossel
┃ ┃ ┃ ┣ 📂 CarouselBanner ------------- // Carrossel principal da HomePage
┃ ┃ ┃ ┃ ┣ 📜 Carousel.module.css ------- // Estilos do banner principal
┃ ┃ ┃ ┃ ┣ 📜 index.jsx ------------------ // Lógica e JSX do componente
┃ ┃ ┃ ┣ 📂 CarouselLaunch ------------- // Carrossel de lançamentos
┃ ┃ ┃ ┃ ┣ 📜 CarouselLaunch.module.css - // Estilos do carrossel de lançamentos
┃ ┃ ┃ ┃ ┣ 📜 index.jsx ------------------ // Lógica e JSX do componente
┃ ┃ ┣ 📂 common ------------------------ // Componentes genéricos reutilizáveis
┃ ┃ ┃ ┣ 📂 Button ---------------------- // Botão padrão
┃ ┃ ┃ ┃ ┣ 📜 Button.module.css ---------- // Estilização do botão
┃ ┃ ┃ ┃ ┣ 📜 index.jsx ------------------ // JSX do botão
┃ ┃ ┃ ┣ 📂 FloatingButton ------------- // Botão flutuante (como carrinho de compras)
┃ ┃ ┃ ┃ ┣ 📜 FloatingButton.module.css - // Estilos do botão flutuante
┃ ┃ ┃ ┃ ┣ 📜 index.jsx ------------------ // JSX do botão flutuante
┃ ┃ ┃ ┣ 📂 Input ----------------------- // Campos de input de formulário
┃ ┃ ┃ ┃ ┣ 📜 Input.module.css ----------- // Estilos dos inputs
┃ ┃ ┃ ┃ ┣ 📜 index.jsx ------------------ // JSX dos inputs
┃ ┃ ┣ 📂 layout ------------------------ // Layouts estruturais da aplicação
┃ ┃ ┃ ┣ 📂 AuthFormContainer ---------- // Layout de formulários de autenticação
┃ ┃ ┃ ┃ ┣ 📜 AuthFormContainer.module.css
┃ ┃ ┃ ┃ ┣ 📜 index.jsx
┃ ┃ ┃ ┣ 📂 AuthLayout ----------------- // Layout geral para páginas de login/registro
┃ ┃ ┃ ┃ ┣ 📜 AuthLayout.module.css
┃ ┃ ┃ ┃ ┣ 📜 index.jsx
┃ ┃ ┃ ┣ 📂 Footer --------------------- // Rodapé da aplicação
┃ ┃ ┃ ┃ ┣ 📜 Footer.module.css
┃ ┃ ┃ ┃ ┣ 📜 index.jsx
┃ ┃ ┃ ┣ 📂 NavBar --------------------- // Barra de navegação principal
┃ ┃ ┃ ┃ ┣ 📜 NavBar.module.css
┃ ┃ ┃ ┃ ┣ 📜 index.jsx
┃ ┣ 📂 data ---------------------------- // Dados mockados
┃ ┃ ┣ 📜 accountGamesData.js
┃ ┃ ┣ 📜 bannerGamesData.js
┃ ┃ ┣ 📜 cartData.js
┃ ┃ ┣ 📜 launchGamesData.js
┃ ┃ ┣ 📜 popularGamesData.js
┃ ┣ 📂 pages --------------------------- // Páginas principais da aplicação
┃ ┃ ┣ 📂 Account ---------------------- // Página de conta do usuário
┃ ┃ ┃ ┣ 📜 Account.module.css
┃ ┃ ┃ ┣ 📜 index.jsx
┃ ┃ ┣ 📂 Launch ----------------------- // Página de lançamentos
┃ ┃ ┃ ┣ 📜 Launch.module.css
┃ ┃ ┃ ┣ 📜 index.jsx
┃ ┃ ┣ 📂 Login ------------------------ // Página de login
┃ ┃ ┃ ┣ 📜 Login.module.css
┃ ┃ ┃ ┣ 📜 index.jsx
┃ ┃ ┣ 📂 Popular ---------------------- // Página de jogos populares
┃ ┃ ┃ ┣ 📜 Popular.module.css
┃ ┃ ┃ ┣ 📜 index.jsx
┃ ┃ ┣ 📂 RecoverPass ------------------ // Página de recuperação de senha
┃ ┃ ┃ ┣ 📜 RecoverPass.module.css
┃ ┃ ┃ ┣ 📜 index.jsx
┃ ┃ ┣ 📂 Register --------------------- // Página de registro de usuário
┃ ┃ ┃ ┣ 📜 Register.module.css
┃ ┃ ┃ ┣ 📜 index.jsx
┃ ┃ ┣ 📂 ShoppingCart ----------------- // Página do carrinho de compras
┃ ┃ ┃ ┣ 📜 ShoppingCart.module.css (não visível, mas presumido)
┃ ┃ ┃ ┣ 📜 index.jsx
┃ ┃ ┣ 📂 ViewGame --------------------- // Página de visualização detalhada de um jogo
┃ ┃ ┃ ┣ 📜 ViewGame.module.css
┃ ┃ ┃ ┣ 📜 index.jsx
┃ ┣ 📜 App.jsx ------------------------- // Configuração de rotas e layout base da aplicação
┃ ┣ 📜 App.css ------------------------- // Estilos globais
┃ ┣ 📜 main.jsx ------------------------ // Ponto de entrada principal da aplicação React

## Como Executar o Projeto

1. Clonar a última versão do projeto: 

```git clone https://github.com/w4lking/GameDame.git```

2. Entrar na pasta do projeto

```sh
cd GameDame
```

3. Instalar as dependências do backend do projeto, com o comando

```sh
npm install
```

4. Inicie a aplicação localmente

```sh
npm run dev
```


