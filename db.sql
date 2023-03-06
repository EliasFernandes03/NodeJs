
CREATE DATABASE db_points;

USE db_points;

CREATE TABLE tb_file (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
);

INSERT INTO tb_file 
    (id, name)
VALUES 
    (1, 'file1'),
    (2, 'file2'),
    (3, 'file3')
    ;


