const tipoRegiao = require("../models/tipoRegiaoModel")

class tipoRegiaoController {
  async getAll(req, res, client) {
    try {
      const obj = await client
        .db("test_db")
        .collection("tipoRegiao")
        .find()
        .toArray()

      console.log(obj)

      res.status(200).send(obj)
    } catch {
      ;(err) => console.log(err)
    }
  }

  async searchOne(req, res, client) {
    try {
      const { codTipoRegiao } = req.body

      const tipoRegiao = await client
        .db("test_db")
        .collection("tipoRegiao")
        .findOne({ codTipoRegiao: codTipoRegiao })

      if (!tipoRegiao) {
        console.log(`Objeto de identificador ${codTipoRegiao} não encontrado!`)
        res
          .status(404)
          .send(`Objeto de identificador ${codTipoRegiao} não encontrado!`)
      } else {
        console.log(tipoRegiao)
        res.status(200).send(tipoRegiao)
      }
    } catch {
      ;(err) => console.log(err)
      res
        .status(404)
        .send(`Erro ao buscar objeto do banco de dados tipo regiao.`)
    }
  }

  async addOne(req, res, client) {
    try {
      const { codTipoRegiao, nome } = req.body
      const newTipoRegiao = new tipoRegiao({ codTipoRegiao, nome })
      const response = await client
        .db("test_db")
        .collection("tipoRegiao")
        .insertOne(newTipoRegiao)
      console.log(response)
      res.status(200).send(`Objeto adicionado ao banco de dados tipo regiao!`)
    } catch {
      ;(err) => console.log(err)
      res
        .status(404)
        .send(`Erro ao adicionar objeto ao banco de dados tipo regiao.`)
    }
  }

  async deleteOne(req, res, client) {
    try {
      const { _id } = req.body
      const response = await client
        .db("test_db")
        .collection("tipoRegiao")
        .deleteOne({ _id })
      console.log(response)
      res.status(200).send(`Objeto deletado do banco de dados tipo regiao.`)
    } catch {
      ;(err) => console.log(err)
      res
        .status(404)
        .send(`Erro ao deletar objeto do banco de dados tipo regiao.`)
    }
  }
}

module.exports = new tipoRegiaoController()
