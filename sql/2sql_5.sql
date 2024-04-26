# 5) Liste a quantidade total de entrada de cada categoria de produto, ou seja, agrupada pelo nome da categoria dos produtos (NomeCategoriua, qtdtotal)

select 
	categoria.nomeCategoria,
    sum(entradaproduto.qtdEntrada) as "QtdTotal"
from categoria 
inner join 
produto 
	on produto.codCategoria = categoria.codCategoria
inner join
entradaproduto
	on entradaproduto.codProduto = produto.codProduto
group by categoria.nomeCategoria;