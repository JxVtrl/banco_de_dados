const express = require("express")
const cors = require("cors")
require("dotenv").config()
const routes = require("./routes/routes")
const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

// configuração da porta da aplicação
app.listen(process.env.port, () => {
  console.log(`App running at port ${process.env.port}`)
})
