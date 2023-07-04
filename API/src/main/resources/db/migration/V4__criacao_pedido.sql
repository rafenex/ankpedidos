CREATE TABLE pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data DATETIME NULL,
    cliente_id INT,
    total DECIMAL(10, 2),
    FOREIGN KEY (cliente_id) REFERENCES cliente (id)
);

CREATE TABLE item_pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produto_id INT,
    quantidade BIGINT,
    cor VARCHAR(255),
    preco DECIMAL(10, 2),
    total DECIMAL(10, 2),
    FOREIGN KEY (produto_id) REFERENCES produto (id)
);

CREATE TABLE pedido_item_pedido (
    pedido_id INT,
    item_pedido_id INT,
    FOREIGN KEY (pedido_id) REFERENCES pedido (id),
    FOREIGN KEY (item_pedido_id) REFERENCES item_pedido (id)
);

