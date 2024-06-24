const categoria = require("../models/categoriaModel")

class categoriaController {
  async getAll(req, res, client) {
    try {
      const obj = await client
        .db("test_db")
        .collection("categoria")
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
      const { codCategoria } = req.body

      const categoria = await client
        .db("test_db")
        .collection("categoria")
        .findOne({ codCategoria: codCategoria })

      if (!categoria) {
        console.log(`Objeto ${codCategoria} não encontrado!`)
        res.status(201).send(`Objeto ${codCategoria} não encontrado!`)
      } else {
        console.log(categoria)
        res.status(200).send(categoria)
      }
    } catch {
      ;(err) => console.log(err)
    }
  }

  async addOne(req, res, client) {
    try {
      const { codCategoria, nomeCategoria } = req.body
      const newCategoria = new categoria({ codCategoria, nomeCategoria })
      const response = await client
        .db("test_db")
        .collection("categoria")
        .insertOne(newCategoria)
      console.log(response)
      res.status(201).send(`Objeto adicionado ao banco de dados Categoria!`)
    } catch {
      ;(err) => console.log(err)
    }
  }

  async deleteOne(req, res, client) {
    try {
      const { codCategoria } = req.body
      const response = await client
        .db("test_db")
        .collection("uf")
        .deleteOne({ codCategoria: codCategoria })
      console.log(response)
      res.status(200).send(`Objeto deletado do banco de dados Categoria!`)
    } catch {
      ;(err) => console.log(err)
      res
        .status(404)
        .send(`Erro ao deletar objeto do banco de dados categoria.`)
    }
  }
}

module.exports = new categoriaController()
