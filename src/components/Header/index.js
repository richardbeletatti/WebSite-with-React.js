import React from 'react';

import whatss from '../../assents/whatss.jpg';
import instagram from '../../assents/instagram.jpg';

import "./style.css";

const Header = () => (
    <header id="main-header">
            <a href="https://api.whatsapp.com/send?phone=5519989922236">
                <img className="whatss" src={whatss} />
            </a>

            <h1 className="title">Rainha do Cronograma</h1>

        <a href="https://www.instagram.com/cabelosdeseda_/">
                <img className="instagram" src={instagram} />
            </a>
    </header>
);
export default Header;