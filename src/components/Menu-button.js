/**
 * Created by kirillov on 08.06.2017.
 */
import React from 'react';

function MenuButton ( { className, href, text, id} ) {
    return (
        <li className={className}>
            <a href={href} id={id} className="black-text">{text}</a>
        </li>
    )
}

export default MenuButton;