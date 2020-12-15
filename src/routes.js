import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Secundary from './pages/secundary';
import Third from './pages/third';
import Fourth from './pages/fourth';
import Fifth from './pages/fifth';
import Sixth from './pages/sixth';
import Seventh from './pages/seventh';

import Superficie from './pages/superficie';
import Meio from './pages/meio';
import Fundo from './pages/fundo';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/secundary" component={Secundary} />
            <Route path="/third" component={Third} />
            <Route path="/fourth" component={Fourth} />
            <Route path="/fifth" component={Fifth} />
            <Route path="/sixth" component={Sixth} />
            <Route path="/seventh" component={Seventh} />
            <Route path="/superficie" component={Superficie} />
            <Route path="/meio" component={Meio} />
            <Route path="/fundo" component={Fundo} />

        </Switch>
    </BrowserRouter>
);

export default Routes;