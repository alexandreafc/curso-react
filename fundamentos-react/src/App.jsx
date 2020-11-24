import "./App.css";
import ReactDom from "react-dom";
import React from "react";

import Card from "./components/layout/Card";

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai.jsx";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default () => (
	<div className='App'>
		<h1>Fundamentos React</h1>

		<div className='Cards'>
			<Card titulo='#13 - Mega' color='#B9006E '>
				<Mega></Mega>
			</Card>

			<Card titulo='#12 - Contador' color='#424242'>
				<Contador numeroInicial={12} />
			</Card>

			<Card titulo='#11 - Componente Controlado' color='#E45F56'>
				<Input />
			</Card>

			<Card titulo='#10 - Comunicação Indireta' color='#8BAD39'>
				<IndiretaPai />
			</Card>

			<Card titulo='#09 - Comunicação Direta' color='#59323C'>
				<DiretaPai></DiretaPai>
			</Card>

			<Card titulo='#08 - Renderização Condicional' color='#982395'>
				<ParOuImpar numero={20}></ParOuImpar>
				<UsuarioInfo usuario={{ nome: "Alexandre" }} />
			</Card>
			<Card titulo='#07 - Desafio Repetição' color='#3A9AD9'>
				<TabelaProdutos></TabelaProdutos>
			</Card>

			<Card titulo='#06 - Repetição' color='#FF4C65'>
				<ListaAlunos></ListaAlunos>
			</Card>

			<Card titulo='#05 - Componente com Filhos' color='#00C8F8'>
				<Familia sobrenome='Ferreira'>
					<FamiliaMembro nome='Pedro' />
					<FamiliaMembro nome='Ana' />
					<FamiliaMembro nome='Gustavo' />
				</Familia>
			</Card>

			<Card titulo='#04 - Desafio Aleatório' color='#FA6900'>
				<Aleatorio min={10} max={60} />
			</Card>
			<Card titulo='#03 - Fragmento' color='#E94C6F'>
				<Fragmento />
			</Card>
			<Card titulo='#02 - Com Parâmetro' color='#E8B71A'>
				<ComParametro titulo='Situação do Aluno' aluno='Alexandre' nota={9.5} />
				<ComParametro titulo='Situação do Aluno' aluno='Pedro' nota={6.5} />
			</Card>
			<Card titulo='#01 - Primeiro Componente' color='#588C73'>
				<Primeiro></Primeiro>
			</Card>
		</div>
	</div>
);
