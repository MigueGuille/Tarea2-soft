CREATE TABLE videojuego (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    genero VARCHAR(50),
    año VARCHAR(50)
);

INSERT INTO videojuego (nombre, genero, año)
VALUES
    ('The Legend of Zelda', 'Aventura', '1986'),
    ('Super Mario Bros', 'Plataformas', '1985');
