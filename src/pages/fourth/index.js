import React, { Component } from 'react';

import "./style.css";

import {Link} from 'react-router-dom';

export default class Third extends Component {
    render() {
        return <div className="slide-edited-2">
            <div className="tittle-fourth">
                <h1><strong>2 - Passo:</strong><br />Escolher o produto
                    correto para o seu cronograma capilar.
                </h1>
                <p className="text-fourth">Meninas, muito importante saber escolher os produtos em alta no meio de
                cosméticos para obter todos os efeitos necessário do cronograma capilar.
                </p>
                <p className="text-fifth">Quando se falamos de hidratação, é muito
                importante que a máscara utilizada seja formulada com ingredientes
                que devolvam a umidade natural dos fios.
                </p>
                <p className="text-sixth">Na nutrição escolham as fórmulas à base de
                óleos vegetais extraídos da própria fruta, sementes e plantas que são ricos
                em ácidos graxos, vitaminas A e E e ômega 3,6 e 9, com o objetivo de proteção
                    ao cabelo das agressões diárias com o fechamento das cutículas.</p>

                <Link to="/fifth">Avançar</Link>
                <Link to="/third">Voltar</Link>
            </div>
        </div>
    }
}