import React, {Component} from 'react';
import MenuButton from './Menu-button';

class Navibar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlight: 1
        }
    }

    activeButton(id) {

        this.setState({highlight: id})

    }
    render () {
        return (
            <nav>
                <div className="nav-wrapper container">
                    <a href="#" className="brand-logo black-text">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down ">
                        <MenuButton id={1} isActive={this.state.highlight===1} className="active" text="Главная" onClick={this.activeButton.bind(this)}/>
                        <MenuButton id={2} isActive={this.state.highlight===2} className="" text="Каталог" onClick={this.activeButton.bind(this)}/>
                        <MenuButton id={3} isActive={this.state.highlight===3} className="" text="О Нас" onClick={this.activeButton.bind(this)}/>
                    </ul>
                </div>
            </nav>
        );
    }

}


export default Navibar;