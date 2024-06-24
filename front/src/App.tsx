import axios from "axios"
import { useEffect, useState } from "react"

interface EntityTableProps {
  entity: string
  data: any[]
  apiUrl: string
  fetchData: () => void
}

const EntityTable: React.FC<EntityTableProps> = ({
  entity,
  data,
  apiUrl,
  fetchData,
}) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const formDataObject: { [key: string]: string | boolean } = {}
    formData.forEach((value, key) => {
      formDataObject[key] = value.toString()
    })

    try {
      const response = await axios.post(
        `${apiUrl}/${entity}/addOne`,
        JSON.stringify(formDataObject)
      )
      if (response.status === 200) {
        alert("Dados adicionados com sucesso!")
        fetchData()
      } else {
        alert("Erro ao adicionar dados.")
      }
    } catch (error) {
      console.error("Error submitting data:", error)
    }
  }
  const getFields = () => {
    const fields: {
      [key: string]: { name: string; label: string; type: string }[]
    } = {
      uf: [
        { name: "codUf", label: "Código UF", type: "number" },
        { name: "nome", label: "Nome", type: "text" },
      ],
      rodovia: [
        { name: "codRodovia", label: "Código Rodovia", type: "number" },
        { name: "nome", label: "Nome", type: "text" },
      ],
      tipoRegiao: [
        { name: "codTipoRegiao", label: "Código Tipo Região", type: "number" },
        { name: "nome", label: "Nome", type: "text" },
      ],
      classeTaxonomica: [
        {
          name: "codClasseTaxonomica",
          label: "Código Classe Taxonômica",
          type: "number",
        },
        { name: "nome", label: "Nome", type: "text" },
      ],
      situacaoFinalAnimal: [
        {
          name: "codSituacao",
          label: "Código Situação Final Animal",
          type: "number",
        },
        { name: "descricao", label: "Descrição", type: "text" },
      ],
      tipoPavimento: [
        {
          name: "codTipoPavimento",
          label: "Código Tipo Pavimento",
          type: "number",
        },
        { name: "descricao", label: "Descrição", type: "text" },
      ],
      especie: [
        { name: "codEspecie", label: "Código Espécie", type: "number" },
        { name: "nomeComum", label: "Nome Comum", type: "text" },
        {
          name: "codClasseTax",
          label: "Código Classe Taxonômica",
          type: "number",
        },
      ],
      categoria: [
        { name: "codCategoria", label: "Código Categoria", type: "number" },
        { name: "nomeCategoria", label: "Nome Categoria", type: "text" },
      ],
      categoriaLocal: [
        { name: "codCatLoc", label: "Código Categoria Local", type: "number" },
        { name: "nome", label: "Nome", type: "text" },
        { name: "codUf", label: "Código UF", type: "number" },
        { name: "codEspecie", label: "Código Espécie", type: "number" },
        { name: "codCategoria", label: "Código Categoria", type: "number" },
      ],
      ocorrenciaLocal: [
        {
          name: "codOcorrenciaLocal",
          label: "Código Ocorrência Local",
          type: "number",
        },
        { name: "codTipoRegiao", label: "Código Tipo Região", type: "number" },
      ],
      ocorrencia: [
        { name: "codOcorrencia", label: "Código Ocorrência", type: "number" },
        { name: "data", label: "Data", type: "date" },
        { name: "km", label: "KM", type: "number" },
        { name: "haviaAgua", label: "Havia Água", type: "checkbox" },
        { name: "numPistas", label: "Número de Pistas", type: "number" },
        {
          name: "velocidadeMaxima",
          label: "Velocidade Máxima",
          type: "number",
        },
        {
          name: "codTipoPavimento",
          label: "Código Tipo Pavimento",
          type: "number",
        },
        { name: "codCatLoc", label: "Código Categoria Local", type: "number" },
        { name: "codSituacao", label: "Código Situação", type: "number" },
        { name: "codRodovia", label: "Código Rodovia", type: "number" },
      ],
    }

    return fields[entity] || []
  }
  
  console.log(data)

  return (
    <div>
      <div id="data-display">
        {!data || data.length === 0 ? (
          <p>No data available</p>
        ) : (
          <table>
            <thead>
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((value, idx) => (
                    <td key={idx}>{value as any}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div id="form-container">
        <form id="entity-form" onSubmit={handleSubmit}>
          {getFields().map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name}>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                required
              />
            </div>
          ))}
          <button type="submit">Adicionar</button>
        </form>
      </div>
    </div>
  )
}

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
