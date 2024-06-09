Create Database Tickets;

Use Tickets;

CREATE TABLE Tarjeta (
    nro_tarjeta INT PRIMARY KEY,
    titular VARCHAR(50),
    fecha_expiracion DATE,
    codigo_seguridad INT(3)
)  ENGINE=INNODB;

CREATE TABLE Usuario (
    nro_cedula INT(10) PRIMARY KEY,
    nombre VARCHAR(30),
    apellido VARCHAR(30),
    correo VARCHAR(50) UNIQUE,
    telefono INT(10),
    nro_tarjeta INT,
    FOREIGN KEY (nro_tarjeta)
        REFERENCES Tarjeta (nro_tarjeta)
)  ENGINE=INNODB;

#se agrega la primary key nro_cedula en la tabla tarjeta
ALTER TABLE Tarjeta
ADD COLUMN nro_cedula INT UNIQUE,
ADD FOREIGN KEY (nro_cedula) REFERENCES Usuario(nro_cedula);

CREATE TABLE Ticket (
    ID_ticket INT AUTO_INCREMENT PRIMARY KEY,
    nombre_concierto VARCHAR(50),
    fecha_concierto DATE,
    nro_tickets INT(2),
    precio FLOAT
)  ENGINE=INNODB;

CREATE TABLE Compra (
    nro_cedula INT(10),
    ID_ticket INT,
    PRIMARY KEY (nro_cedula , ID_ticket),
    FOREIGN KEY (nro_cedula)
        REFERENCES Usuario (nro_cedula),
    FOREIGN KEY (ID_ticket)
        REFERENCES Ticket (ID_ticket)
)  ENGINE=INNODB;

