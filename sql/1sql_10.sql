# 10. Quantos clientes possuem contas na agência cujo cod_agencia = ‘123’?

select count(DISTINCT conta.cod_cliente) from conta where conta.cod_agencia=123;