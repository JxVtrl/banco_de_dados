# 1 - Liste todos os produtos e suas respectivas categorias (DescricaoProd, NomeCategoria)

select produto.descricaoProduto, categoria.nomeCategoria from produto inner join categoria on produto.codCategoria=categoria.codCategoria;