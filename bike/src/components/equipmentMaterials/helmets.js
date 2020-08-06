import React, { Component } from 'react';
import HelmetList from './HelmetList';
import './uiEquip.css';



class Helmets extends Component {

    constructor(props){
        super(props);
        this.state = {
            helmets: [],
        }
    }


    render() {
        return(
            <div>
                <HelmetList className="helmet-grid" helmets={this.state.helmets}/>
            </div>
        )
    }
}

export default Helmets;