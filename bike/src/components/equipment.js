import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell} from 'react-mdl';
import Helmets from './equipmentMaterials/helmets';
import Gloves from './equipmentMaterials/gloves';
import Clothes from './equipmentMaterials/clothes';
import Tools from './equipmentMaterials/tools';
import Bags from './equipmentMaterials/bags';


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
                    <Gloves />
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div>
                    <Clothes />
                </div>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <div>
                    <Tools />
                </div>
            )
        } else if(this.state.activeTab === 4) {
            return (
                <div>
                    <Bags />
                </div>
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
                <Tabs 
                style = {{padding : "5px"}}
                activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
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