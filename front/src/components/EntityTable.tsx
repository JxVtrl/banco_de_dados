import axios from "axios"
import React, { useState, useEffect } from "react"
import { fields } from "../data/fields"

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
  const [formData, setFormData] = useState<{ [key: string]: string | boolean }>(
    {}
  )
  const [isUpdate, setIsUpdate] = useState(false)
  const [updateId, setUpdateId] = useState<string | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = isUpdate
        ? await axios.put(`${apiUrl}/${entity}/update/${updateId}`, formData, {
            headers: {
              "Content-Type": "application/json",
            },
          })
        : await axios.post(`${apiUrl}/${entity}/addOne`, formData, {
            headers: {
              "Content-Type": "application/json",
            },
          })

      if (response.status === 200) {
        alert(
          isUpdate
            ? "Dados atualizados com sucesso!"
            : "Dados adicionados com sucesso!"
        )
        fetchData()
        setFormData({})
        setIsUpdate(false)
        setUpdateId(null)
      } else {
        alert("Erro ao adicionar/atualizar dados.")
      }
    } catch (error) {
      console.error("Error submitting data:", error)
    }
  }

  const handleDelete = async (id: string, event: React.MouseEvent) => {
    event.stopPropagation(); // Para evitar a propagação do clique na linha
    try {
      const response = await axios.delete(`${apiUrl}/${entity}/deleteOne`, {
        headers: {
          "Content-Type": "application/json",
        },
        data: { _id: id },
      })
      if (response.status === 200) {
        alert("Dados excluídos com sucesso!")
        fetchData()
      } else {
        alert("Erro ao excluir dados.")
      }
    } catch (error) {
      console.error("Error deleting data:", error)
    }
  }

  const handleRowClick = (item: any) => {
    setFormData(item)
    setIsUpdate(true)
    setUpdateId(item._id)
  }

  const getFields = () => {
    return fields[entity] || []
  }

  return (
    <div>
      <div id="form-container">
        <form id="entity-form" onSubmit={handleSubmit}>
          {getFields().map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name}>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                value={(formData[field.name] as any) || ("" as any)}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button type="submit">{isUpdate ? "Atualizar" : "Adicionar"}</button>
        </form>
      </div>
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} onClick={() => handleRowClick(item)}>
                  {Object.values(item).map((value, idx) => (
                    <td key={idx}>{value as any}</td>
                  ))}
                  <td>
                    <button onClick={(event) => handleDelete(item._id, event)}>Delete</button>
                    <button onClick={(event) => { event.stopPropagation(); handleRowClick(item); }}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default EntityTable
