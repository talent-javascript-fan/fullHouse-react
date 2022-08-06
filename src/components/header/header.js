import React from 'react';
import './header.scss';

import logo from '../../assets/images/logo.png';
import user from '../../assets/images/user-img.png';


export const Header = () => {
    return (
        <div className="header-container">
            <div className="header-left">
                <img className="logo" src={ logo } alt=""/>
            </div>
            <div className="menu">
                <div>
                    Collection
                </div>
                <div> 
                    Games
                </div>
                <div>
                    Buy Card
                </div>
                <div>
                    <a href="#">
                    Marketplace</a>
                </div>
            </div>
            <div className="header-right">
                <img src={ user } alt="" />
                <button className="header-address">0x2...c9</button>
            </div>
        </div>
    )
}

