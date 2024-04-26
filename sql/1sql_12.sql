# 12. Quais os clientes cuja profissão é desconhecida?

select cliente.cliente from cliente where isnull(cliente.profissao);