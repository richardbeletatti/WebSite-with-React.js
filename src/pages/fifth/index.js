import React, { Component } from 'react';

import "./style.css";

import {Link} from 'react-router-dom';

import Tabela from '../../assents/tabela.png';

export default class Third extends Component {
    render() {
        return <div className="slide-edited-3">
            <div className="tittle-fifth">
                <h1><strong>3 - Passo:</strong><br />
            Faça uma agenda mensal de tratamento.
            </h1>
                <p className="text-seveth">Organiza-se para fazer os cuidados que seu cabelo mais necessita de forma
                    que um complemente o outro.<strong className="color"> SEMPRE</strong> comece
                    pela hidratação.
                </p>

                <img className="tabela" src={Tabela} />
                <Link to="/sixth">Avançar</Link>
                <Link to="fourth">Voltar</Link>
            </div>
        </div>
    }
}