const ocorrenciaLocal = require("../models/ocorrenciaLocalModel")

class ocorrenciaLocalController {
  async getAll(req, res, client) {
    try {
      const obj = await client
        .db("test_db")
        .collection("categoriaLocal")
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
      const { codOcorrenciaLocal } = req.body

      const ocorrenciaLocal = await client
        .db("test_db")
        .collection("ocorrenciaLocal")
        .findOne({ codOcorrenciaLocal: codOcorrenciaLocal })

      if (!ocorrenciaLocal) {
        console.log(`Objeto ${codOcorrenciaLocal} não encontrado!`)
        res.status(201).send(`Objeto ${codOcorrenciaLocal} não encontrado!`)
      } else {
        console.log(ocorrenciaLocal)
        res.status(200).send(ocorrenciaLocal)
      }
    } catch {
      ;(err) => console.log(err)
    }
  }

  async addOne(req, res, client) {
    try {
      const { codOcorrenciaLocal, codTipoRegiao } = req.body
      const newOcorrenciaLocal = new ocorrenciaLocal({
        codOcorrenciaLocal,
        codTipoRegiao,
      })
      const response = await client
        .db("test_db")
        .collection("ocorrenciaLocal")
        .insertOne(newOcorrenciaLocal)
      console.log(response)
      res
        .status(201)
        .send(`Objeto adicionado ao banco de dados Ocorrencia Local!`)
    } catch {
      ;(err) => console.log(err)
    }
  }

  async deleteOne(req, res, client) {
    try {
      const { _id } = req.body
      const response = await client
        .db("test_db")
        .collection("ocorrenciaLocal")
        .deleteOne({ _id })
      console.log(response)
      res
        .status(200)
        .send(`Objeto deletado do banco de dados Ocorrencia  Local.`)
    } catch {
      ;(err) => console.log(err)
      res
        .status(404)
        .send(`Erro ao deletar objeto do banco de dados ocorrencia local.`)
    }
  }
}

module.exports = new ocorrenciaLocalController()
