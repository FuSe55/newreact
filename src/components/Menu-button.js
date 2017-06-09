/**
 * Created by kirillov on 08.06.2017.
 */
import React, {Component} from 'react';

// function MenuButton ( { className, href, text, id} ) {
class MenuButton extends Component {

    activeButton() {
        this.props.onClick(this.props.id)
    }

    render (){
        return (
            <li className={this.props.isActive ? 'active' : ''}>
                <a href='#' id={this.props.id} className="black-text" onClick={this.activeButton.bind(this)}>{this.props.text}</a>
            </li>
        )

    }

}

export default MenuButton;