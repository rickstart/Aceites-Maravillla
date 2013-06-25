-- phpMyAdmin SQL Dump
-- version 3.5.7
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 30-05-2013 a las 21:25:45
-- Versión del servidor: 5.5.29
-- Versión de PHP: 5.4.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `aceitera`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_bolsa`
--

CREATE TABLE `tbl_bolsa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `puesto` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `escolaridad` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `edad` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `estado` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `experiencia` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `sexo` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `calle` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `colonia` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `cp` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Volcado de datos para la tabla `tbl_bolsa`
--

INSERT INTO `tbl_bolsa` (`id`, `puesto`, `escolaridad`, `edad`, `estado`, `experiencia`, `sexo`, `calle`, `colonia`, `cp`, `email`) VALUES
(1, 'Gerente', 'Licenciatura', '25 aÃ±os', 'Indistinto', '5 aÃ±os', 'Masculino', 'jardin', 'pedregal', '07890', 'rulo@aceitera.com'),
(5, 'Supervisor', 'IngenierÃ­a', '40 aÃ±os', 'Soltero', '9 aÃ±os', 'Femenino', 'Prizo', 'Sagitario', '78999', 'any_141004@hotmail.com'),
(6, 'Ayudante', 'SecundarÃ­a', '24 aÃ±os', 'Casado', '5 aÃ±os', 'Indistinto', 'Norte 90', 'Malinche', '08999', 'ricardo.celj@gmail.com'),
(8, 'Limpieza', 'Primaria', '34 aÃ±os', 'Casado', 'No necesaria', 'Indistinto', 'Pedregal', 'Pedregal', '89000', 'ricky_taekwondo@hotmail.com'),
(10, 'Secretaria', 'Preparatoria', '25 aÃ±os', 'Soltera', 'No necesaria', 'femenino', 'sinai', 'puerto alegre', '89078', 'jaime@aceitera.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `nombre`, `email`, `password`) VALUES
(1, 'root', 'root', 'root');
