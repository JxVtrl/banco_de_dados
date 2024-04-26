# 6. Quais os clientes com empréstimos de valor superior a 2.500?

select co.num_conta, co.saldo from conta co where co.cod_agencia=123 order by co.saldo DESC;