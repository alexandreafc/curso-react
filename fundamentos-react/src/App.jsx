import React from 'react'

import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default function App(props) {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <Aleatorio min={10} max={60} />
            <Fragmento />
            <ComParametro
                titulo="Situação do Aluno"
                aluno="Alexandre" nota={9.5} />
            <ComParametro
                titulo="Situação do Aluno"
                aluno="Pedro" nota={6.5} />
            <Primeiro></Primeiro>
        </div>
    )
}