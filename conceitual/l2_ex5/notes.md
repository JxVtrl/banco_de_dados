# entidades
- atendente
- cliente
- produto
- reclamacao
- tipoProblema
- registro

# relacionamentos
- cliente (1 faz 1.*) reclamacao
- reclamacao (* faz 1) atendente
- reclamacao (* ehReferente 1) produto
- reclamacao (* ehReferente 1) tipoProblema
- registro (* ehReferente 1) tipoProblema
- registro (* ehReferente 1) produto

# atributos
- cliente
-- codCli
-- nome
-- telefone
-- fax

- atendente
-- codAtendente
-- numeroTel

- reclamacao
-- codReclamacao
-- data

- tipoProblema
-- codTipoProblema
-- descricaoProblema