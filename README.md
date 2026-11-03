# RetroGames

## Sobre o projeto

O RetroGames é um catálogo de jogos desenvolvido como projeto acadêmico. O sistema permite cadastrar e visualizar jogos, armazenando suas informações em um banco de dados.

## Jogos cadastrados

- Adopt Me!
- Littlest Pet Shop
- The Sims 2

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- MySQL
- phpMyAdmin

## Estrutura do projeto

- `index.html` – Estrutura da página.
- `style.css` – Estilização do site.
- `script.js` – Funcionalidades do frontend.
- `server.js` – Servidor e comunicação com o banco de dados.
- `schema.sql` – Criação do banco de dados e tabela de jogos.
- `.gitignore` – Arquivos ignorados pelo Git.

## Como executar o projeto

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o MySQL pelo XAMPP.

3. Importe o arquivo `schema.sql` pelo phpMyAdmin.

4. Inicie o servidor:

   ```bash
   node server.js
   ```

5. Abra o arquivo `index.html` com o Live Server.

## Banco de dados

Nome: `db_retrogames`

Tabela: `jogos`

Campos:
- id
- titulo
- plataforma
- desenvolvedora
- imagem_url
- preco
- data_cadastro

## Autora

Desenvolvido por Mariana Correia.
