import React, { Component } from 'react';

import "./style.css";
import Superfice from '../../assents/superfice.PNG';
import Meio from '../../assents/meio.png';
import Fundo from '../../assents/fundo.png';

import { Link } from 'react-router-dom';

export default class Seventh extends Component {
    render() {
        return <div className="slide">
            <div className="tittle-seventh">
                <h1>Como identificar o que meu cabelo precisa ?</h1>

                <p>Para montar o seu cronograma capilar,<br /> é necessário enteder primeiro qual
                    é a maior necessidade do seu cabelo.<br /> Por isso vamos fazer um teste !!
                </p>
                <p className="text-tenth"><strong>Teste</strong><br />Pegue um copo transparente e encha com água filtrada.<br /> Depois, passe a mão
                    no cabelo para sair alguns fios que estão solto. Por fim coloque os fios
                    dentro do copo com água. Veja abaixo qual foi o resultado e seleciona-o.
                </p>

                <Link to="/superficie">
                    <img className="superficie" src={Superfice} />
                </Link>

                <Link to="/meio">
                    <img className="meio" src={Meio} />
                </Link>

                <Link to="/fundo">
                    <img className="fundo" src={Fundo} />
                </Link>

            </div>
        </div>
    }
}