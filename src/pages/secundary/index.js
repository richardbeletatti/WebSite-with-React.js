import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import mulherPensativa from '../../assents/pensativa.jpg';

import "./style.css";

export default class Secundary extends Component {
    render() {
        return <div className="slide-edited-0">
            <div className="tittle-secudary">
                <h1> Olá meninas, tudo bem ? Antes de descobrir o melhor cronograma para seu cabelo,
                temos que ver alguns passo a passo, então clique em <strong className="color">Avançar</strong> para saber mais !
                  <br />
                  <br /> Caso deseja ir direto ao cronograma capilar clique em <strong className="color">Cronograma Capilar</strong>.
                </h1>
                <img className="mulherPensativa" src={mulherPensativa} />
                <Link to="/third">Avançar</Link>
                <Link to="/sixth">Cronograma Capilar</Link>
            </div>
        </div>
    }
}