const classeTaxonomica = require("../models/classeTaxModel")

class classeTaxonomicaController {
  async getAll(req, res, client) {
    try {
      const obj = await client
        .db("test_db")
        .collection("classeTaxonomica")
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
      const { codClasseTaxonomica } = req.body

      const classeTaxonomica = await client
        .db("test_db")
        .collection("classeTaxonomica")
        .findOne({ codClasseTaxonomica: codClasseTaxonomica })

      if (!classeTaxonomica) {
        console.log(`Objeto ${codClasseTaxonomica} não encontrado!`)
        res.status(404).send(`Objeto ${codClasseTaxonomica} não encontrado!`)
      } else {
        console.log(classeTaxonomica)
        res.status(200).send(classeTaxonomica)
      }
    } catch {
      ;(err) => console.log(err)
    }
  }

  async addOne(req, res, client) {
    try {
      const { codClasseTaxonomica, nome } = req.body
      const newClasseTaxonomica = new classeTaxonomica({
        codClasseTaxonomica,
        nome,
      })
      const response = await client
        .db("test_db")
        .collection("classeTaxonomica")
        .insertOne(newClasseTaxonomica)
      console.log(response)
      res
        .status(201)
        .send(`Objeto adicionado ao banco de dados Classe Taxonomica!`)
    } catch {
      ;(err) => console.log(err)
    }
  }

  async deleteOne(req, res, client) {
    try {
      const { _id } = req.body
      const response = await client
        .db("test_db")
        .collection("classeTaxonomica")
        .deleteOne({ _id })
      console.log(response)
      res
        .status(201)
        .send(
          `Objeto de identificador ${codClasseTaxonomica} deletado com sucesso`
        )
    } catch {
      ;(err) => console.log(err)
      res
        .status(404)
        .send(`Erro ao deletar objeto do banco de dados classe taxonomica.`)
    }
  }
}

module.exports = new classeTaxonomicaController()
