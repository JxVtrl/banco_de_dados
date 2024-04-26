# 11. Listar o número de contas existentes em cada agência.

select
  a.cod_agencia,
  a.agencia,
  count(c.num_conta) as total_contas
from agencia a
inner join conta c ON a.cod_agencia = c.cod_agencia
group by a.cod_agencia, a.agencia;