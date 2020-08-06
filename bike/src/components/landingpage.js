import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Redirect } from 'react-router-dom';
import '../index.css';
import Equipment from './equipment';


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
            <div style={{width: '100%', height: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div
                        style = {
                            { 
                             textAlign : "left",
                             fontFamily : 'Fira Sans',
                             padding : "25px 25px",
                             width: "98%",
                             height: "400px",
                             backgroundImage: `url(${"https://images.unsplash.com/photo-1592229338506-d4631f32b2b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"})`,
                             backgroundSize: 'cover',
                             overflow: 'hidden',
                             color : 'aliceblue'
                             }}
                         onClick={() => mapClick()}>
                            <h2>
                                Map
                            </h2> 
                            <h4>
                                생생한 코멘트와 함께 여행을 준비할 수 있습니다
                            </h4>
                        </div>
                        <div
                        style = {
                            { 
                             textAlign : "left",
                             fontFamily : 'Fira Sans',
                             padding : "25px 25px",
                             width: "98%",
                             height: "400px",
                             backgroundImage: `url(${"https://cdn.crowdpic.net/list-thumb/thumb_l_232C27CF53C5ED657D8666AE75452327.jpg"})`,
                             backgroundSize: 'cover',
                             overflow: 'hidden',
                             color : 'black'
                             }}
                         onClick={() => eqClick()}>
                            <h2>
                                Equipment
                            </h2> 
                            <h4>
                                명필은 붓탓을 하지 않지만, 프로 라이더는 장비탓을 합니다
                            </h4>
                        </div>
                        
                        <div
                        style = {
                            { 
                             textAlign : "left",
                             fontFamily : 'Fira Sans',
                             padding : "25px 25px",
                             width: "98%",
                             height: "400px",
                             backgroundImage: `url(${"https://cdn.crowdpic.net/list-thumb/thumb_l_D1ABD523471C243CC2568A083A0682DA.jpg"})`,
                             backgroundSize: 'cover',
                             overflow: 'hidden',
                             color : 'aliceblue'
                             }}
                         onClick={() => tipClick()}>
                            <h2>
                                Tips
                            </h2> 
                            <h4>
                                꾸준한 운동으로 부상을 예방하고 대처 방법을 배워보세요
                            </h4>
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