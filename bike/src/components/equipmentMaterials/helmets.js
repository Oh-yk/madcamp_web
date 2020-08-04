import React, { Component } from 'react';
import HelmetSearch from './helmetSearch';
//import request from 'superagent';

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

        var request = require('request');

        var client_id = '7VMhSCJ3G03IlNB12U4G';
        var client_secret = '3PU3o2Q0At';

        var api_url = 'https://openapi.naver.com/v1/datalab/shopping/categories';
        var request_body = {
            "startDate": "2017-08-01",
            "endDate": "2017-09-30",
            "timeUnit": "month",
            "category": [
                {"name": "패션의류", "param": ["50000000"]},
                {"name": "화장품/미용", "param": ["50000002"]}
            ],
            "device": "pc",
            "ages": ["20", "30"],
            "gender": "f"
        };

        request
            .post({
                url: api_url,
                body: JSON.stringify(request_body),
                headers: {
                    'X-Naver-Client-Id': client_id,
                    'X-Naver-Client-Secret': client_secret,
                    'Content-Type': 'application/json'
                }
            },
            function (error, response, body) {
                console.log(response && response.statusCode);
                console.log(body);
            });

    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        return(
            <div>
                <HelmetSearch searchHelmet={this.searchHelmet} handleSearch={this.handleSearch} />
            </div>
        )
    }
}

export default Helmets;