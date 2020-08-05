import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';
import FirstAid from './contents_FirstAid';
import './contents.css';
import Exercise from './contents_Exercise';

class tips extends Component {
    constructor(props){
        super(props)
        this.state = {activeTab : 1};
    }
    render() {
        return (
            <div className = "Tips-tabs">
                <Tabs 
                style = {{padding : "5px"}}
                activeTab = {this.state.activeTab} 
                onChange = {(tabId) => this.setState({activeTab : tabId})} ripple>
                    <Tab>First Aid</Tab>
                    <Tab>Exercise</Tab>
                </Tabs>
                <section >
                    {this.toggleCategories()}
                </section>
            </div>
        )
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return( <FirstAid/> );
        } else if(this.state.activeTab === 1){
            return( <Exercise/> );
        } else{
            return (
                <div><h1>exception</h1></div>
            );
        }
    }

}




export default tips;