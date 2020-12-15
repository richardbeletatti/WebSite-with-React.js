import React, { Component } from 'react';

import "./style.css";

import {Link} from 'react-router-dom';

export default class Third extends Component {
    render() {
        return <div className="slide-edited-1">
            <div className="tittle-third">
                <h1><strong >1 - Passo:</strong><br/>Identificar qualidade do que é necessário
                    para seu cabelo.
                </h1>

                <p className="text-first">Para iniciar um cronograma capilar,
                     é necessário ter o compreendimento do que seu cabelo
                    necessita. Caso ele se embaraça com certa facilidade,
                    com os fios muitos arrepiados e sem brilho, ele necessita de 
                    <strong  className="color"> NUTRIÇÃO</strong>. 
                </p>

                <p className="text-secundary">Por acaso for o ressecamento, falta de movimento e aspero ao ser tocado,
                     ele necessita de mais fases de <strong  className="color">HIDRATAÇÃO</strong>.</p>

                <p className="text-third">Por fim, se seu cabelo tiver sofrido alguma agressão recente, 
                    estiver muito quebrado e com pouca densidade, está na hora de
                    investir em <strong  className="color">RECONSTRUÇÃO</strong>.</p>
                
                <Link to="/fourth">Avançar</Link>
                <Link to="/secundary">Voltar</Link>
            </div>
        </div>
    }
}