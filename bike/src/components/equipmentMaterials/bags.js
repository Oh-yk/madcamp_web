import React, { Component } from 'react';
import BagsList from './BagsList';
import './uiEquip.css';



class Bags extends Component {

    constructor(props){
        super(props);
        this.state = {
            bags: [],
        }
    }


    render() {
        return(
            <div>
                <BagsList className="helmet-grid" clothes={this.state.clothes}/>
            </div>
        )
    }
}

export default Bags;