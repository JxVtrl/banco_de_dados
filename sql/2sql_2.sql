# 2)  Liste  todos os  produtos  e  suas  quantidades  adquiridas  em  15/04/2004  (CodProduto, QtdEntrada)

select produto.descricaoProduto, entradaproduto.qtdEntrada from entradaproduto inner join produto on produto.codProduto = entradaproduto.codProduto where entradaproduto.data="2024-04-15";