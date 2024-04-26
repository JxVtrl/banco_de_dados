# 13. Para cada agência (cod_agencia) com menos de 1000 contas, listar os valores máximo e mínimo dos saldos dessas contas, assim como o saldo médio.

select conta.cod_agencia, max(conta.saldo), min(conta.saldo) from conta inner join agencia on conta.cod_agencia=agencia.cod_agencia group by agencia.cod_agencia;