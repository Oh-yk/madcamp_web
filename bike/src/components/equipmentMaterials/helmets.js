import React, { Component } from 'react';
import HelmetSearch from './helmetSearch';
import request from 'superagent';
import HelmetList from './HelmetList';
import './uiEquip.css';


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
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({q: this.state.searchField})
            .then((data) => {
                console.log(data);
                this.setState({ helmets: [...data.body.items]})
            })

    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        return(
            <div>
                <HelmetSearch searchHelmet={this.searchHelmet} handleSearch={this.handleSearch} />

                <HelmetList className="helmet-grid" helmets={this.state.helmets}/>
                
            </div>
        )
    }
}

export default Helmets;