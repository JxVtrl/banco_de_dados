export const fields: { [key: string]: { name: string; label: string; type: string }[] } = {
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