# entidades
- fornecedor (2)
- produto (3)
- compra (4)
- compraProd (3)
- comprador (1)
- categoriaProd (2)
- parcela (1)

# relacionamentos
- fornecedor (0.* fornece 0.*) produto
- categoriaProd (1 abrange 0.*) produto
- compraProd (0.* ehAtrelada 1) produto
- compraProd (0.* ehAtrelada 1) categoriaProd
- compra (1 ehAtrelada 0.*) compraProd
- compra (1 ehAtrelada 1.*) parcela
- compra (0.* ehFornecida 1) fornecedor
- compra (0.* ehFeita 1) comprador

# atributos
- fornecedor
-- codFornecedor
-- nome

- categoriaProd
-- codCategoria
-- nome

- produto
-- codProduto
-- nome
-- marca

- compra
-- codCompra
-- modalidade

- compraProd
-- data
-- codCompraProd
-- subtotal
-- qtdProduto

- parcela
-- codParcela
-- valor
-- dataVenc

- comprador
-- codComprador
-- nome