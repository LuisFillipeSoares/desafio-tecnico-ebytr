DROP DATABASE IF EXISTS ToDoList;

CREATE DATABASE ToDoList;

USE ToDoList;

CREATE TABLE tarefas (
    id INT NOT NULL auto_increment,
    name VARCHAR(30) NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT "pendente",
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
) ENGINE=INNODB;

INSERT INTO ToDoList.tarefas (name) VALUES
    ("Teste 1"),
    ("Teste 2"),
    ("Teste 3");
