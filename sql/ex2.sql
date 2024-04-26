-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26/04/2024 às 16:50
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
-- Banco de dados: `ex2`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `categoria`
--

CREATE TABLE `categoria` (
  `codCategoria` bigint(200) NOT NULL,
  `nomeCategoria` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `categoria`
--

INSERT INTO `categoria` (`codCategoria`, `nomeCategoria`) VALUES
(1, 'laticinio');

-- --------------------------------------------------------

--
-- Estrutura para tabela `entradaproduto`
--

CREATE TABLE `entradaproduto` (
  `numeroEntrada` bigint(200) NOT NULL,
  `data` date NOT NULL,
  `codProduto` bigint(200) NOT NULL,
  `qtdEntrada` int(11) NOT NULL,
  `precoCusto` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `entradaproduto`
--

INSERT INTO `entradaproduto` (`numeroEntrada`, `data`, `codProduto`, `qtdEntrada`, `precoCusto`) VALUES
(1, '2024-04-26', 1, 12, 7.5);

-- --------------------------------------------------------

--
-- Estrutura para tabela `produto`
--

CREATE TABLE `produto` (
  `codProduto` bigint(200) NOT NULL,
  `descricaoProduto` varchar(200) NOT NULL,
  `precoVenda` float NOT NULL,
  `codCategoria` bigint(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `produto`
--

INSERT INTO `produto` (`codProduto`, `descricaoProduto`, `precoVenda`, `codCategoria`) VALUES
(1, 'Leite Parmalat 1L', 8, 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`codCategoria`);

--
-- Índices de tabela `entradaproduto`
--
ALTER TABLE `entradaproduto`
  ADD PRIMARY KEY (`numeroEntrada`),
  ADD KEY `codProduto` (`codProduto`);

--
-- Índices de tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`codProduto`),
  ADD KEY `codCategoria` (`codCategoria`);

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `entradaproduto`
--
ALTER TABLE `entradaproduto`
  ADD CONSTRAINT `entradaproduto_ibfk_1` FOREIGN KEY (`codProduto`) REFERENCES `produto` (`codProduto`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `produto`
--
ALTER TABLE `produto`
  ADD CONSTRAINT `produto_ibfk_1` FOREIGN KEY (`codCategoria`) REFERENCES `categoria` (`codCategoria`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
