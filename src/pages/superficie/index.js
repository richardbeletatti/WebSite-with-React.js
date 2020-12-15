import React, { Component } from 'react';

import TabelaSuperficie from '../../assents/tabelaSuperficie.png';

import './style.css';

export default class Superficie extends Component {
    render() {
        return <div className="slide-edited-6">
            <div className="tittle-fifth">
                <h1><strong>Cabelo na Superfície</strong></h1>
                <p className="text-tabelaSuperficie">O fio boiando na superfície do copo mostra que ele
                está precisando de hidratação. Entretanto você precisa
                intensificar o uso de máscaras de hidratação durante o
                seu cronograma. Seu calendário ficou assim:
            </p>
                <img className="tabelaSuperficie" src={TabelaSuperficie} />

                <p className="agradecimento">Obrigada por ter chegada até aqui,
                qualquer dúvida sobre o seu cronograma pode me chamar
                no Direct do Instagram.</p>
            </div>
        </div>
    }
}