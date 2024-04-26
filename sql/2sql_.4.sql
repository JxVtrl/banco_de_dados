# 5) Liste a quantidade total de entrada de cada categoria de produto, ou seja, agrupada pelo nome da categoria dos produtos (NomeCategoriua, qtdtotal)

select produto.codProduto, produto.descricaoProduto, sum(entradaproduto.qtdEntrada) as "QtdTotal" from produto inner join entradaproduto on produto.codProduto = entradaproduto.codProduto where produto.codProduto = 1234;