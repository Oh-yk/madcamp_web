import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src = "https://images.unsplash.com/photo-1592229338506-d4631f32b2b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                            alt = "mainImg"
                            className = "main-img"
                        />
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
}

export default LandingPage;