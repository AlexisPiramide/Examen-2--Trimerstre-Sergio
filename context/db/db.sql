CREATE TABLE departamentos (
    nombre VARCHAR(255) PRIMARY KEY
);

CREATE TABLE articulos (
    id SERIAL PRIMARY KEY,
    departamento VARCHAR(255),
    nombre VARCHAR(255),
    descripcion VARCHAR(255),
    espacio VARCHAR(255),
    FOREIGN KEY (departamento) REFERENCES departamentos(nombre)
);

CREATE TABLE espacios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255)
)

INSERT INTO articulos (nombre,departamento,descripcion,espacio) 
VALUES ('Aprendiendo React: Guía práctica para aprender desde cero','FRONT','¿Eres [...] React.js','Sala de formación');

INSERT INTO departamentos (nombre) VALUES ('FRONT'),('BACK');

INSERT INTO articulos (nombre) VALUES ('Sala de reuniones'),('Sala de formación'),('Sala de conferencias'),('Sala de eventos');

