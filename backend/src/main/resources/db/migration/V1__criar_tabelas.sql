CREATE TABLE categoria (
    id BIGINT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255),
    PRIMARY KEY (id)
);
ALTER TABLE categoria
ADD CONSTRAINT NOME_CATEGORIA_UNIQUE UNIQUE (nome);


CREATE TABLE cliente (
    id BIGINT NOT NULL AUTO_INCREMENT,
    cpfcnpj VARCHAR(255) UNIQUE,
    endereco VARCHAR(255),
    nome VARCHAR(255),
    telefone VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE produto (
    id BIGINT NOT NULL AUTO_INCREMENT,
    referencia VARCHAR(255) unique,
    nome VARCHAR(255),
    valor_padrao DECIMAL(38,2),
    categoria_id BIGINT,
    PRIMARY KEY (id),
    CONSTRAINT FK_PRODUTO_CATEGORIA
        FOREIGN KEY (categoria_id)
        REFERENCES categoria (id)
);

ALTER TABLE produto
ADD CONSTRAINT NOME_PRODUTO_UNIQUE UNIQUE (nome);

CREATE TABLE image_data (
    id BIGINT NOT NULL AUTO_INCREMENT,
    imagedata BLOB,
    name VARCHAR(255),
    type VARCHAR(255),
    produto_id BIGINT,
    PRIMARY KEY (id),
    CONSTRAINT FK_IMAGEM_DATA_PRODUTO
        FOREIGN KEY (produto_id)
        REFERENCES produto (id)
);

CREATE TABLE item_pedido (
    id BIGINT NOT NULL AUTO_INCREMENT,
    cor VARCHAR(255),
    preco DECIMAL(38,2),
    quantidade BIGINT,
    total DECIMAL(38,2),
    produto_id BIGINT,
    PRIMARY KEY (id),
    CONSTRAINT FK_ITEM_PEDIDO_PRODUTO
        FOREIGN KEY (produto_id)
        REFERENCES produto (id)
);

CREATE TABLE pedido (
    id BIGINT NOT NULL AUTO_INCREMENT,
    data DATETIME(6),
    total DECIMAL(38,2),
    cliente_id BIGINT,
    PRIMARY KEY (id),
    CONSTRAINT FK_PEDIDO_CLIENTE
        FOREIGN KEY (cliente_id)
        REFERENCES cliente (id)
);

CREATE TABLE pedido_item_pedido (
    pedido_id BIGINT NOT NULL,
    item_pedido_id BIGINT NOT NULL,
    CONSTRAINT FK_ITEM_PEDIDO
        FOREIGN KEY (item_pedido_id)
        REFERENCES item_pedido (id),
    CONSTRAINT FK_PEDIDO
        FOREIGN KEY (pedido_id)
        REFERENCES pedido (id)
);

CREATE TABLE user (
    id INTEGER NOT NULL AUTO_INCREMENT,
    email VARCHAR(255),
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    password VARCHAR(255),
    role SMALLINT,
    PRIMARY KEY (id)
);
