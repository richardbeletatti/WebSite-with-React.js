import React, { Component } from 'react';

import TabelaMeio from '../../assents/tabelaMeio.png';

import "./style.css";

export default class Meio extends Component {
    render() {
        return <div className="slide-edited-7">
            <div className="tittle-fifth">
                <h1><strong>Cabelo no Meio</strong></h1>

                <p className="text-tabelaMeio">Isso significa que o seu cabelo está com
                porosidade:ele está hidratado, porém precisa de mais nutrição.
                Certificasse de usar cremes e máscaras com óleos nas
                suas fórmulas, que são fundamentais na hora de nutrir as fibras.
                Seu calendário ficou assim:</p>
                <img className="tabelaMeio" src={TabelaMeio} />

                <p className="agradecimento">Obrigada por ter chegada até aqui,
                qualquer dúvida sobre o seu cronograma pode me chamar
                no Direct do Instagram.</p>
            </div>
        </div>
    }
}