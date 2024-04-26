-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26/04/2024 às 15:29
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `ex1`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `agencia`
--

CREATE TABLE `agencia` (
  `cod_agencia` bigint(200) NOT NULL,
  `agencia` varchar(200) NOT NULL,
  `localidade` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `agencia`
--

INSERT INTO `agencia` (`cod_agencia`, `agencia`, `localidade`) VALUES
(1, 'cg-1', 'Campo Grande'),
(2, 'sc-1', 'Santa Cruz'),
(123, 'rio-de-janeiro-123', 'Rio de Janeiro');

-- --------------------------------------------------------

--
-- Estrutura para tabela `cliente`
--

CREATE TABLE `cliente` (
  `cod_cliente` bigint(200) NOT NULL,
  `cliente` varchar(200) NOT NULL,
  `profissao` varchar(200) NOT NULL,
  `localidade` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `cliente`
--

INSERT INTO `cliente` (`cod_cliente`, `cliente`, `profissao`, `localidade`) VALUES
(1, 'Kauan Peçanha', 'Engenheiro de Software', 'Santa Cruz'),
(2, 'Cláudia Peçanha', 'Auxiliar de Imobilização Ortopédica', 'Braga'),
(1234, 'Flávio Lira', 'Padeiro', 'Santa Cruz'),
(1235, 'Alexander', 'Padeiro', 'Braga'),
(1236, 'Alexandre', 'Padeiro', 'Antares');

-- --------------------------------------------------------

--
-- Estrutura para tabela `conta`
--

CREATE TABLE `conta` (
  `num_conta` bigint(200) NOT NULL,
  `tipo_conta` int(11) NOT NULL,
  `cod_cliente` bigint(200) NOT NULL,
  `cod_agencia` bigint(200) NOT NULL,
  `saldo` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `conta`
--

INSERT INTO `conta` (`num_conta`, `tipo_conta`, `cod_cliente`, `cod_agencia`, `saldo`) VALUES
(1000, 1, 1, 2, 2000),
(1001, 1, 1, 123, 3000),
(1002, 1, 1, 123, 4000),
(1003, 1, 1, 123, 5000);

-- --------------------------------------------------------

--
-- Estrutura para tabela `emprestimo`
--

CREATE TABLE `emprestimo` (
  `num_emprestimo` bigint(200) NOT NULL,
  `cod_cliente` bigint(200) NOT NULL,
  `cod_agencia` bigint(200) NOT NULL,
  `valor` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `emprestimo`
--

INSERT INTO `emprestimo` (`num_emprestimo`, `cod_cliente`, `cod_agencia`, `valor`) VALUES
(1, 2, 1, 2499),
(2, 1, 2, 2521);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `agencia`
--
ALTER TABLE `agencia`
  ADD PRIMARY KEY (`cod_agencia`);

--
-- Índices de tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`cod_cliente`);

--
-- Índices de tabela `conta`
--
ALTER TABLE `conta`
  ADD PRIMARY KEY (`num_conta`),
  ADD KEY `cod_cliente` (`cod_cliente`),
  ADD KEY `cod_agencia` (`cod_agencia`);

--
-- Índices de tabela `emprestimo`
--
ALTER TABLE `emprestimo`
  ADD KEY `cod_cliente` (`cod_cliente`),
  ADD KEY `cod_agencia` (`cod_agencia`);

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `conta`
--
ALTER TABLE `conta`
  ADD CONSTRAINT `conta_ibfk_1` FOREIGN KEY (`cod_cliente`) REFERENCES `cliente` (`cod_cliente`) ON UPDATE CASCADE,
  ADD CONSTRAINT `conta_ibfk_2` FOREIGN KEY (`cod_agencia`) REFERENCES `agencia` (`cod_agencia`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `emprestimo`
--
ALTER TABLE `emprestimo`
  ADD CONSTRAINT `emprestimo_ibfk_1` FOREIGN KEY (`cod_cliente`) REFERENCES `cliente` (`cod_cliente`) ON UPDATE CASCADE,
  ADD CONSTRAINT `emprestimo_ibfk_2` FOREIGN KEY (`cod_agencia`) REFERENCES `agencia` (`cod_agencia`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
