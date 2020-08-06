import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Redirect } from 'react-router-dom';
import '../index.css';

class LandingPage extends Component {

    state = {
        moveToMap : false,
        moveToEq : false,
        moveToTip : false
    }

    _MainView(){
        const mapClick = () => {
            this.setState({moveToMap: !this.state.moveToMap});            
        } 
        const eqClick = () => {
            this.setState({moveToEq: !this.state.moveToEq});            
        }
        const tipClick = () => {
            this.setState({moveToTip: !this.state.moveToTip});            
        }

        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <h2
                            style = {
                               { 
                                fontFamily : 'Segoe UI',
                                paddingTop : "25px",
                                width: "100%",
                                height: "60%",
                                backgroundImage: `url(${"https://images.unsplash.com/photo-1592229338506-d4631f32b2b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"})`,
                                backgroundSize: 'cover',
                                overflow: 'hidden',
                                color : 'aliceblue'
                                }}
                            onClick={() => mapClick()}
                        >
                            Find Best Course For Your Trip
                        </h2> 
                        <h2 
                            style = {
                                { 
                                 paddingTop : "35px",
                                 width: "100%",
                                 height: "60%",
                                 backgroundImage: `url(${"https://postfiles.pstatic.net/MjAyMDA4MDZfMjg3/MDAxNTk2NjU1NzM5NzUz.qRj3otzlLMIt9DPjbRfjvwy_ZmXEao1CSH8cMaTvAS0g.4IqRaNfM3mL-PMMwhMKZCiWB2Mc0IIagQNIxbdfePdYg.PNG.kgy556/equipment.png?type=w773"})`,
                                 backgroundSize: 'cover',
                                 overflow: 'hidden',
                                 color : 'inherit'
                                }}
                            onClick={() => eqClick()}
                        >
                            Recommend Good Stuff
                        </h2> 
                        <h2 
                            style = {
                                { 
                                 paddingTop : "35px",
                                 width: "100%",
                                 height: "60%",
                                 backgroundImage: `url(${"https://postfiles.pstatic.net/MjAyMDA4MDZfMjY1/MDAxNTk2NjU1NzM1NTM3.bvvCKnYWjZTbNRry0XBhLMD2M5nYJSAdqjPTzfu9Wbkg.zqlCT4v3IwPtoVYnwyEvcKfTz9JgQ6jTIZYKfNeL9oAg.PNG.kgy556/healing.png?type=w773"})`,
                                 backgroundSize: 'cover',
                                 overflow: 'hidden',
                                 color : 'aliceblue'
                                }}
                            onClick={() => tipClick()}
                        >
                            How To Overcome Pain
                        </h2> 
                        <div className="banner-text">
                            <h1>Everything You Need for a Bicycle Trip</h1>
                        
                        <hr/> {/* // dotted line */}
    
                    <p>Bicycle path through the country | Bicycle equipment | Place to stay | First aid</p>
    
                <div className="page-links">
                    {/* Map */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-map-marked-alt" aria-hidden="true" />
                    </a>
    
                    {/* Github */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                    </a>
    
                    {/* FreeCodeCamp */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-free-code-camp-square" aria-hidden="true" />
                    </a>
    
                    {/* Youtube */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-youtube-square" aria-hidden="true" />
                    </a>
    
                </div>
    
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

    render() {
    
        if(this.state.moveToMap){
            return <Redirect push to = "/map"/>;
        }
        else if(this.state.moveToEq){
            return <Redirect push to = "/equipment"/>;
        }
        else if(this.state.moveToTip){
            return <Redirect push to = "/tips"/>;
        }
        else{
            return this._MainView();
        }
    }
}

export default LandingPage;