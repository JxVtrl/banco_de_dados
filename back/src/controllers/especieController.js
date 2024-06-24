const especie = require("../models/especieModel")

class especieController {
  async getAll(req, res, client) {
    try {
      const obj = await client
        .db("test_db")
        .collection("especie")
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
      const { codEspecie } = req.body

      const especie = await client
        .db("test_db")
        .collection("especie")
        .findOne({ codEspecie: codEspecie })

      if (!especie) {
        console.log(`Objeto ${codEspecie} não encontrado!`)
        res.status(404).send(`Objeto ${codEspecie} não encontrado!`)
      } else {
        console.log(especie)
        res.status(200).send(especie)
      }
    } catch {
      ;(err) => console.log(err)
    }
  }

  async addOne(req, res, client) {
    try {
      const { codEspecie, nomeComum, codClasseTax } = req.body
      const newEspecie = new especie({ codEspecie, nomeComum, codClasseTax })
      const response = await client
        .db("test_db")
        .collection("especie")
        .insertOne(newEspecie)
      console.log(response)

      res.status(201).send(`Objeto adicionado ao banco de dados Especie!`)
    } catch {
      ;(err) => console.log(err)
      res
        .status(404)
        .send(`Erro ao adicionar objeto ao banco de dados especie.`)
    }
  }

  async deleteOne(req, res, client) {
    try {
      const { _id } = req.body
      const response = await client
        .db("test_db")
        .collection("especie")
        .deleteOne({ _id })
      console.log(response)
      res.status(200).send(`Objeto deletado do banco de dados especie.`)
    } catch {
      ;(err) => console.log(err)
      res.status(404).send(`Erro ao deletar objeto do banco de dados especie.`)
    }
  }
}

module.exports = new especieController()