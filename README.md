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

O projeto é organizado seguindo uma arquitetura modular e escalável, separando claramente as responsabilidades de cada parte da aplicação.

📦 GAMEDAME
 ┣ 📂 public/              # Arquivos estáticos que não passam pelo processo de build
 ┣ 📂 src/                 # Diretório principal do código-fonte
 ┃   ┣ 📂 assets/          # Imagens, fontes, e outros recursos
 ┃   ┃   ┗ 📂 images/
 ┃   ┣ 📂 components/      # Componentes React reutilizáveis
 ┃   ┃   ┣ 📂 carrossel/   # Componentes específicos de carrossel
 ┃   ┃   ┣ 📂 common/      # Componentes genéricos (Button, Input, etc.)
 ┃   ┃   ┗ 📂 layout/      # Componentes de estrutura (NavBar, Footer, etc.)
 ┃   ┣ 📂 data/            # Arquivos de dados mockados (.js)
 ┃   ┣ 📂 pages/           # Componentes que representam as páginas do site
 ┃   ┣ 📜 App.css          # Estilos globais da aplicação
 ┃   ┣ 📜 App.jsx          # Configuração de rotas e layout raiz
 ┃   ┗ 📜 main.jsx         # Ponto de entrada da aplicação React
 ┣ 📜 .gitignore          # Arquivos e pastas ignorados pelo Git
 ┣ 📜 index.html          # Template HTML principal
 ┣ 📜 package.json        # Dependências e scripts do projeto
 ┗ 📜 README.md          # Documentação do projeto (este arquivo)

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


