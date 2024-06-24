import axios from 'axios';
import React, { useState } from 'react';

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
  const [formData, setFormData] = useState<{ [key: string]: string | boolean }>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/${entity}/addOne`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        alert('Dados adicionados com sucesso!');
        fetchData();
        setFormData({});
      } else {
        alert('Erro ao adicionar dados.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const getFields = () => {
    const fields: { [key: string]: { name: string; label: string; type: string }[] } = {
      uf: [
        { name: 'codUf', label: 'Código UF', type: 'number' },
        { name: 'nome', label: 'Nome', type: 'text' },
      ],
      rodovia: [
        { name: 'codRodovia', label: 'Código Rodovia', type: 'number' },
        { name: 'nome', label: 'Nome', type: 'text' },
      ],
      tipoRegiao: [
        { name: 'codTipoRegiao', label: 'Código Tipo Região', type: 'number' },
        { name: 'nome', label: 'Nome', type: 'text' },
      ],
      classeTaxonomica: [
        { name: 'codClasseTaxonomica', label: 'Código Classe Taxonômica', type: 'number' },
        { name: 'nome', label: 'Nome', type: 'text' },
      ],
      situacaoFinalAnimal: [
        { name: 'codSituacao', label: 'Código Situação Final Animal', type: 'number' },
        { name: 'descricao', label: 'Descrição', type: 'text' },
      ],
      tipoPavimento: [
        { name: 'codTipoPavimento', label: 'Código Tipo Pavimento', type: 'number' },
        { name: 'descricao', label: 'Descrição', type: 'text' },
      ],
      especie: [
        { name: 'codEspecie', label: 'Código Espécie', type: 'number' },
        { name: 'nomeComum', label: 'Nome Comum', type: 'text' },
        { name: 'codClasseTax', label: 'Código Classe Taxonômica', type: 'number' },
      ],
      categoria: [
        { name: 'codCategoria', label: 'Código Categoria', type: 'number' },
        { name: 'nomeCategoria', label: 'Nome Categoria', type: 'text' },
      ],
      categoriaLocal: [
        { name: 'codCatLoc', label: 'Código Categoria Local', type: 'number' },
        { name: 'nome', label: 'Nome', type: 'text' },
        { name: 'codUf', label: 'Código UF', type: 'number' },
        { name: 'codEspecie', label: 'Código Espécie', type: 'number' },
        { name: 'codCategoria', label: 'Código Categoria', type: 'number' },
      ],
      ocorrenciaLocal: [
        { name: 'codOcorrenciaLocal', label: 'Código Ocorrência Local', type: 'number' },
        { name: 'codTipoRegiao', label: 'Código Tipo Região', type: 'number' },
      ],
      ocorrencia: [
        { name: 'codOcorrencia', label: 'Código Ocorrência', type: 'number' },
        { name: 'data', label: 'Data', type: 'date' },
        { name: 'km', label: 'KM', type: 'number' },
        { name: 'haviaAgua', label: 'Havia Água', type: 'checkbox' },
        { name: 'numPistas', label: 'Número de Pistas', type: 'number' },
        { name: 'velocidadeMaxima', label: 'Velocidade Máxima', type: 'number' },
        { name: 'codTipoPavimento', label: 'Código Tipo Pavimento', type: 'number' },
        { name: 'codCatLoc', label: 'Código Categoria Local', type: 'number' },
        { name: 'codSituacao', label: 'Código Situação', type: 'number' },
        { name: 'codRodovia', label: 'Código Rodovia', type: 'number' },
      ],
    };

    return fields[entity] || [];
  };

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
                value={formData[field.name] || '' as any}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button type="submit">Adicionar</button>
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
    </div>
  );
};

export default EntityTable;