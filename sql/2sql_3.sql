# 3)  Liste  a  data  de  entrada,  descrição  do  produto,  quantidade  de  entrada  e  nome  da categoria do produto de todos os produtos adquiridos após 01/01/2006 (Data, DescricaoProd, QtdEntrada, NomeCategoria)

select

	entradaproduto.data,
    produto.descricaoProduto,
    entradaproduto.qtdEntrada, 
    categoria.nomeCategoria 

from entradaproduto 
	inner join 
produto on entradaproduto.codProduto = produto.codProduto 
	inner join 
categoria on produto.codCategoria = categoria.codCategoria 
where entradaproduto.data>"2006-01-01";