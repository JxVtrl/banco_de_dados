const uf = require("../models/ufModel")

class ufController {
  async getAll(req, res, client) {
    try {
      const obj = await client.db("test_db").collection("uf").find().toArray()

      console.log(obj)

      res.status(200).send(obj)
    } catch {
      ;(err) => console.log(err)
    }
  }

  async searchOne(req, res, client) {
    try {
      const { codUf } = req.body

      const uf = await client
        .db("test_db")
        .collection("uf")
        .findOne({ codUf: codUf })

      if (!uf) {
        console.log(`Objeto ${codUf} não encontrado!`)
        res.status(404).send(`Objeto ${codUf} não encontrado!`)
      } else {
        console.log(uf)
        res.status(200).send(uf)
      }
    } catch {
      ;(err) => console.log(err)
    }
  }

  async addOne(req, res, client) {
    try {
      const { codUf, nome } = req.body
      const newUf = new uf({ codUf, nome })
      const response = await client
        .db("test_db")
        .collection("uf")
        .insertOne(newUf)
      console.log(response)
      res
        .status(200)
        .send(`Objeto adicionado ao banco de dados Unidade Federativa (uf)!`)
    } catch {
      ;(err) => console.log(err)
      res.status(404).send(`Erro ao adicionar objeto ao banco de dados uf.`)
    }
  }

  async deleteOne(req, res, client) {
    try {
      const { _id } = req.body
      const response = await client
        .db("test_db")
        .collection("uf")
        .deleteOne({ _id: _id })

      console.log(response)

      res
        .status(200)
        .send(`Objeto deletado do banco de dados Unidade Federativa (uf)!`)
    } catch {
      ;(err) => console.log(err)
      res.status(404).send(`Erro ao deletar objeto do banco de dados uf.`)
    }
  }

  async updateOne(req, res, client) {
    try {
      const { _id, codUf, nome } = req.body
      const response = await client
        .db("test_db")
        .collection("uf")
        .updateOne({ _id: _id }, { $set: { codUf: codUf, nome: nome } })

      console.log(response)

      res
        .status(200)
        .send(`Objeto atualizado no banco de dados Unidade Federativa (uf)!`)
    } catch {
      ;(err) => console.log(err)
      res.status(404).send(`Erro ao atualizar objeto no banco de dados uf.`)
    }
  }
}

module.exports = new ufController()
