const categoriaLocal = require("../models/categoriaLocalModel")

class categoriaLocalController {
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
      const { codCatLoc } = req.body

      const categoriaLocal = await client
        .db("test_db")
        .collection("categoriaLocal")
        .findOne({ codCatLoc: codCatLoc })

      if (!categoriaLocal) {
        console.log(`Objeto ${codCatLoc} não encontrado!`)
        res.status(404).send(`Objeto ${codCatLoc} não encontrado!`)
      } else {
        console.log(categoriaLocal)
        res.status(200).send(categoriaLocal)
      }
    } catch {
      ;(err) => console.log(err)
    }
  }

  async addOne(req, res, client) {
    try {
      const { codCatLoc, nome, codUf, codEspecie, codCategoria } = req.body
      const newCategoriaLocal = new categoriaLocal({
        codCatLoc,
        nome,
        codUf,
        codEspecie,
        codCategoria,
      })
      const response = await client
        .db("test_db")
        .collection("categoriaLocal")
        .insertOne(newCategoriaLocal)
      console.log(response)
      res
        .status(201)
        .send(`Objeto adicionado ao banco de dados Categoria Local!`)
    } catch {
      ;(err) => console.log(err)
    }
  }

  async deleteOne(req, res, client) {
    try {
      const { codCatLoc } = req.body
      const response = await client
        .db("test_db")
        .collection("codCatLoc")
        .deleteOne({ codCatLoc: codCatLoc })
      console.log(response)
      res.status(200).send(`Objeto deletado do banco de dados Categoria Local!`)
    } catch {
      ;(err) => console.log(err)
      res
        .status(404)
        .send(`Erro ao deletar objeto do banco de dados codCatLoc.`)
    }
  }
}

module.exports = new categoriaLocalController()
