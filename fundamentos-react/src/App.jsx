import "./App.css";
import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default () => (
	<div className='App'>
		<h1>Fundamentos React</h1>

		<div className='Cards'>
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
