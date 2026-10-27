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
    'Super Mario World',
    'SNES',
    'Nintendo',
    'https://placehold.co/400x300?text=Super+Mario+World',
    149.90
);

INSERT INTO jogos (titulo, plataforma, desenvolvedora, imagem_url, preco)
VALUES (
    'Sonic the Hedgehog',
    'Mega Drive',
    'Sega',
    'https://placehold.co/400x300?text=Sonic',
    99.90
);

INSERT INTO jogos (titulo, plataforma, desenvolvedora, imagem_url, preco)
VALUES (
    'Crash Bandicoot',
    'PlayStation 1',
    'Naughty Dog',
    'https://placehold.co/400x300?text=Crash+Bandicoot',
    129.90
);