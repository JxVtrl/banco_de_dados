import axios from "axios"
import { useEffect, useState } from "react"
import EntityTable from "./components/EntityTable"

function App() {
  const [entity, setEntity] = useState<string>("uf")
  const [data, setData] = useState<any[]>([])
  const apiUrl = "http://localhost:5000"

  useEffect(() => {
    fetchData()
  }, [entity])

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/${entity}`)
      console.log("Response:", response)
      const result = response.data
      console.log("Data fetched:", result)
      setData(result)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  return (
    <div>
      <h1>Visualização de Dados</h1>
      <div>
        <label htmlFor="entity-select">Selecionar Entidade:</label>
        <select
          id="entity-select"
          value={entity}
          onChange={(e) => setEntity(e.target.value)}
        >
          <option value="uf">UF</option>
          <option value="rodovia">Rodovia</option>
          <option value="tipoRegiao">Tipo de Região</option>
          <option value="classeTaxonomica">Classe Taxonômica</option>
          <option value="situacaoFinalAnimal">Situação Final do Animal</option>
          <option value="tipoPavimento">Tipo de Pavimento</option>
          <option value="especie">Espécie</option>
          <option value="categoria">Categoria</option>
          <option value="categoriaLocal">Categoria Local</option>
          <option value="ocorrenciaLocal">Ocorrência Local</option>
          <option value="ocorrencia">Ocorrência</option>
        </select>
      </div>

      <EntityTable
        entity={entity}
        data={data}
        apiUrl={apiUrl}
        fetchData={fetchData}
      />
    </div>
  )
}

export default App
