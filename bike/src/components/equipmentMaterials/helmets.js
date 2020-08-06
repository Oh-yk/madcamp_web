import React, { Component } from 'react';
import HelmetSearch from './helmetSearch';
import request from 'superagent';
import HelmetList from './HelmetList';
import './uiEquip.css';
import axios from 'axios';


class Helmets extends Component {

    constructor(props){
        super(props);
        this.state = {
            helmets: [],
            searchField: ''
        }
    }

    searchHelmet = (e) => {
        e.preventDefault();
        axios.get("https://192.249.19.244:2180/search/shop/love")
            .then((data) => {
                console.log(data);
                this.setState({ helmets: [...data.body.items]})
            })
            .catch(error => {
                console.log(error);
            })
            ;
    }

    
    

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
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