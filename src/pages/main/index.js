import React, { Component } from 'react';
import api from '../../services/api';

import { Link } from 'react-router-dom';

import logo from '../../assents/logo.PNG';

import "./style.css";

export default class Main extends Component {
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products')

        console.log(response.data.docs);
    };
    render() {
        return <div className="slide-edited-0">
                <div className="tittle ">
                    <h1>Seu cronograma capilar,
                    <br /> descubra o melhor
                    para seu cabelo.</h1>

                    <img className="logo" src={logo} />

                    <Link to="/secundary">Iniciar Descoberta</Link>
                </div>
            </div>
        // <div className="col-sm-12 col-md-4 py-4">
    }
}