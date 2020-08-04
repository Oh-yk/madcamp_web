import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import FirstAid from './contents_FirstAid';

class Tips extends Component {
    constructor(props){
        super(props)
        this.state = {activeTab : 0};
    }
    render() {
        return (
            <div className = "Tips-tabs">
                <Tabs 
                activeTab = {this.state.activeTab} 
                onChange = {(tabId) => this.setState({activeTab : tabId})} ripple>
                    <Tab>Exercise</Tab>
                    <Tab>First Aid</Tab>
                </Tabs>
                <section>
                    {this.toggleCategories()}
                </section>
            </div>
        )
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div><h1>Exercise tab</h1></div>
            );
        } else if(this.state.activeTab === 1){
            return( <FirstAid/> );
        } else{
            return (
                <div><h1>exception</h1></div>
            );
        }
    }

}




export default Tips;