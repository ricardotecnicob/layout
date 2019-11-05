import React, { Component } from 'react';

import Logo from '../../assets/images/logo.png';

import './style.css';

class Header extends Component {
    render() {
        return (
            <div className="imagemtopo" >
                <div className="menu" >
                    <ul>
                        <li>SEJA BEM VINDO!</li>
                        <li>CARDÁPIO</li>
                        <li>EVENTOS</li>
                        <li>CONTATO</li>
                    </ul>
                </div>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="piso" ></div>
                <div className="texto01">
                    <label>NEW OPENING</label><br/>
                    <strong>23RD SEPT</strong>
                </div>
                <div className="piso" ></div>
                <div className="divBotaoTopo">
                    <button type="button" >LEARN MORE</button>
                </div>
            </div>
        )
    }
}

export default Header;
