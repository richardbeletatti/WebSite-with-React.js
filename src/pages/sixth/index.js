import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import "./style.css";

export default class Sixth extends Component {
    render() {
        return <div className="slide-edited-4">
            <div className="tittle-sixth">
                <h1>As etapas do cronograma capilar.</h1>

                <p>São três etapas: <strong className="color">HIDRATAÇÃO</strong>,
                 <strong className="color">NUTRIÇÃO </strong>
                 e <strong className="color">RECONSTRUÇÃO</strong>.</p>

                <p className="text-seventh">
                    A primeira etapa tem como foco devolver a água perdida nos fios.<br />
                 Exemplos de ativos mais usado na <strong>HIDRATAÇÃO</strong>: D-pantenol, babosa e vitaminas.</p>
                <p className="text-eighth"> Já a segunda etapa tem como objetivo repor os lípideos.<br />
                  Exemplos de ativos mais usado na <strong>NUTRIÇÃO</strong>: Óleo de coco e argan, manteiga de karité e de murumuru.</p>
                <p className="text-nineth"> Por fim a terceira etapa é ideal para a reposiçãoda massa capilar.<br />
                 Exemplos de ativos mais usado na <strong>RECONSTRUÇÃO</strong>: Queratina, arginina, creatina, cisteina e aminoácidos.</p>

                <Link to="/seventh" >Avançar</Link>
                <Link to="/secundary" >Retornar no Início</Link>
            </div>
        </div>
    }
}

