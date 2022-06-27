DROP DATABASE IF EXISTS toDoList;

CREATE DATABASE toDoList;

USE toDoList;

CREATE TABLE tarefas (
    id INT NOT NULL auto_increment,
    name VARCHAR(30) NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT "pendente",
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
) ENGINE=INNODB;

INSERT INTO toDoList.tarefas (name) VALUES
    ("Martelo de Thor"),
    ("Traje de encolhimento"),
    ("Escudo do Capitão América");
