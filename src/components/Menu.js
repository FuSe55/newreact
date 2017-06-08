import React from 'react';

function Navibar() {
    return (
        <nav>
            <div className="nav-wrapper container">
                <a href="#" className="brand-logo black-text">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down ">
                    <li className="active"><a href="#" className="black-text">Главная</a></li>
                    <li><a href="#" className="black-text">Каталог</a></li>
                    <li><a href="#" className="black-text">О Нас</a></li>
                </ul>
            </div>
        </nav>
    );
}


export default Navibar;