
INSERT INTO categoria (id, nome) VALUES
    (1, 'Categoria 1'),
    (2, 'Categoria 2'),
    (3, 'Categoria 3');


INSERT INTO produto (id, nome, valor_padrao, categoria_id) VALUES
    (1, 'Produto 1', 10.50, 1),
    (2, 'Produto 2', 15.75, 1),
    (3, 'Produto 3', 20.00, 2),
    (4, 'Produto 4', 12.99, 2),
    (5, 'Produto 5', 8.50, 3),
    (6, 'Produto 6', 9.99, 3),
    (7, 'Produto 7', 7.25, 1),
    (8, 'Produto 8', 14.50, 2),
    (9, 'Produto 9', 18.75, 3),
    (10, 'Produto 10', 11.99, 1);



INSERT INTO pedido (id, data, cliente_id) VALUES
    (1, '2023-06-15', 1),
    (2, '2023-06-16', 2);

INSERT INTO item_pedido (id, produto_id, quantidade, cor, preco) VALUES
    (1, 1, 2, 'Vermelho', 21.00),
    (2, 2, 3, 'Azul', 15.75),
    (3, 3, 1, 'Verde', 60.00);

INSERT INTO pedido_item_pedido (pedido_id, item_pedido_id) VALUES
    (1, 1),
    (1, 2),
    (2, 3);