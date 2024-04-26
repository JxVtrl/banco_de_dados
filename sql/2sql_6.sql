# 6) Liste o preço médio de custo dos produtos adquiridos em 15/05/2006 (MediaPrecoCusto)

select 

	produto.codProduto as "identificador", 
    produto.descricaoProduto as "Produto", 
    avg(entradaproduto.precoCusto) as "Preço Médio" 

from produto 
inner join 
entradaproduto 
	on produto.codProduto = entradaproduto.codProduto 
where entradaproduto.data="2006-05-15"
order by produto.codProduto;