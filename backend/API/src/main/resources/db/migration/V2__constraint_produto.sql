ALTER TABLE produto
ADD CONSTRAINT NOME_PRODUTO_UNIQUE UNIQUE (nome);

ALTER TABLE categoria
ADD CONSTRAINT NOME_CATEGORIA_UNIQUE UNIQUE (nome);
