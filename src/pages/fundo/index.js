import React, { Component } from 'react';

import TabelaBaixo from '../../assents/tabelaBaixo.png';

import "./style.css";

export default class Fundo extends Component {
    render() {
        return <div className="slide-edited-8">
            <div className="tittle-fifth">
                <h1><strong>Cabelo no Fundo</strong></h1>
                <p className="text-tabelaFundo"> Se o fio afundou totalmente, significa
                que seu cabelo está com alta porosidade, ou seja, ele precisa de reconstrução.
                Ou seja suas cutículas estão abertas e defeituosa, mas o uso de máscaras potente
                pode auxiliar a recuperá-las.</p>

                <p className="text-tabelaFundo">É importante lembrar que é essencial
                fazer a reconstrução a cada 15 ou 30 dias, e sempre após hidratação e nutrição.
                Seu calendário ficou assim:</p>
                <img className="tabelaBaixo" src={TabelaBaixo} />
            </div> 
        </div>
    }
}