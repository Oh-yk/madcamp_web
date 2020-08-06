import React, { Component } from 'react';
import GlovesList from './glovesList';
import './uiEquip.css';



class Gloves extends Component {

    constructor(props){
        super(props);
        this.state = {
            gloves: [],
        }
    }


    render() {
        return(
            <div>
                <GlovesList className="helmet-grid" gloves={this.state.gloves}/>
            </div>
        )
    }
}

export default Gloves;