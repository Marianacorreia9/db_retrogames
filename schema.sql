CREATE DATABASE IF NOT EXISTS db_retrogames;

USE db_retrogames;

CREATE TABLE IF NOT EXISTS jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    plataforma VARCHAR(100) NOT NULL,
    desenvolvedora VARCHAR(150) NOT NULL,
    imagem_url TEXT NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO jogos (titulo, plataforma, desenvolvedora, imagem_url, preco)
VALUES (
    'Adopt-me',
    'Roblox',
    'Uplift games',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJOABtReAdCY8zo_kYZyXZvgP7q-dKdla-brhqUOcVQ&s=10',
    49.90
);

INSERT INTO jogos (titulo, plataforma, desenvolvedora, imagem_url, preco)
VALUES (
    'Littlest Pet Shop',
    'Nintendo DS',
    'EA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFt_ZwA0z7dPh9LEOViFYKd3J3EwHak6365nosJ78QZg&s=10',
    19.90
);

INSERT INTO jogos (titulo, plataforma, desenvolvedora, imagem_url, preco)
VALUES (
    'The Sims 2',
    'PC',
    'Maxis',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Xy10Cio_HVg_UkT6Xu3-u7_YkCh0fhq8JXEQoov9eA&s=10',
    59.90
);