import React, { Component } from 'react';
import ToolsList from './ToolsList';
import './uiEquip.css';



class Tools extends Component {

    constructor(props){
        super(props);
        this.state = {
            clothes: [],
        }
    }


    render() {
        return(
            <div>
                <ToolsList className="helmet-grid" tools={this.state.tools}/>
            </div>
        )
    }
}

export default Tools;