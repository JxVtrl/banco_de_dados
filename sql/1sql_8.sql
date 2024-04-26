# 8. Listar as contas (num_conta, saldo) da agência cujo cod_agencia = ‘123’, por ordem decrescente do seu valor de saldo.

select co.num_conta, co.saldo from conta co where co.cod_agencia=123 order by co.saldo DESC;