ALTER TABLE cliente MODIFY COLUMN cpf varchar(14) NOT NULL UNIQUE;
ALTER TABLE cliente MODIFY COLUMN id int auto_increment NOT NULL;