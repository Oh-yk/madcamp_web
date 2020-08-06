import React, { Component } from 'react';
import ClothesList from './ClothesList';
import './uiEquip.css';



class Clothes extends Component {

    constructor(props){
        super(props);
        this.state = {
            clothes: [],
        }
    }


    render() {
        return(
            <div>
                <ClothesList className="helmet-grid" clothes={this.state.clothes}/>
            </div>
        )
    }
}

export default Clothes;