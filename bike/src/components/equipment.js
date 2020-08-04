import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Textfield } from 'react-mdl';
import Helmets from './equipmentMaterials/helmets'

class Equipment extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return (
                <div>
                    <Helmets />
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div>
                    <div>
                        <Textfield
                            onChange={() => {}}
                            label="Expandable Input"
                            expandable
                            expandableIcon="search"
                        />
                    </div>
                    <div className="equipment-grid">
                        <Card shadow={3} style={{minWidth: "450", margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://img.hankyung.com/photo/cts/201801/a40bb51cda4d84c5d28e84d355867694.jpg) center / cover'}} >HJC480 Helmet</CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </CardText>
                            <CardActions border>
                                <Button colored>Buy</Button>
                                <Button colored>Browse</Button>
                                <Button colored>Like</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        <Card shadow={3} style={{minWidth: "450", margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://img.hankyung.com/photo/cts/201801/a40bb51cda4d84c5d28e84d355867694.jpg) center / cover'}} >HJC480 Helmet</CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </CardText>
                            <CardActions border>
                                <Button colored>Buy</Button>
                                <Button colored>Browse</Button>
                                <Button colored>Like</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        <Card shadow={3} style={{minWidth: "450", margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://img.hankyung.com/photo/cts/201801/a40bb51cda4d84c5d28e84d355867694.jpg) center / cover'}} >HJC480 Helmet</CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </CardText>
                            <CardActions border>
                                <Button colored>Buy</Button>
                                <Button colored>Browse</Button>
                                <Button colored>Like</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>
                
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div><h1>Clothes Recommendation List</h1></div>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <div><h1>Tools Recommendation List</h1></div>
            )
        } else if(this.state.activeTab === 4) {
            return (
                <div><h1>Bags Recommendation List</h1></div>
            )
        } else if(this.state.activeTab === 5) {
            return (
                <div><h1>ADD MORE</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Helmet</Tab>
                    <Tab>Gloves</Tab>
                    <Tab>Clothes</Tab>
                    <Tab>Bicycle Tools</Tab>
                    <Tab>Bags</Tab>
                    <Tab>More</Tab>
                </Tabs>

                <section className="equipment-grid">
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>

                        </Cell>
                    </Grid>
                    
                </section>
            </div>
        )
    }
}

export default Equipment;