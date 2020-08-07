import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

class App extends Component {

    state = {name : "name",
            id : "id"}

    render() {

        const responseFacebook = (response) => 
        { 
            this.setState({name : response.name ,id : response.id});
            console.log(response);
            //실제 사용자 name, email 받아옴. id, accessToken도 추가로 사용 가능
            //에러나면 yarn add react-facebook-login
            //console.log('/mypage/'+{this.response.id}+'/'+{this.response.name});
            
        }


        return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color"
                style = {{paddingTop : "20px" , justifyItems : "center"}}
                title="자전거와 나" scroll>
                    <Navigation>
                        <Link to="/" 
                        style = {{fontSize : "20px"}}>Home</Link>
                        <Link to="/map" 
                        style = {{fontSize : "20px"}}>Map</Link>
                        <Link to="/equipment" 
                        style = {{fontSize : "20px"}}>Equipment</Link>
                        <Link to="/tips" 
                        style = {{fontSize : "20px"}}>Tips</Link>
                        <Link to={'/mypage/'+this.state.id+'/'+this.state.name}
                        style = {{fontSize : "20px"}}>My Page</Link>
                    </Navigation>
                </Header>
                <Drawer title="Menu">
                    <Navigation >
                        <Link to="/map">Map</Link>
                        <Link to="/equipment">Equipment</Link>
                        <Link to="/tips">Tips</Link>
                        <Link to={'/mypage/'+this.state.id+'/'+this.state.name}>My Page</Link>
                        <FacebookLogin
                            appId="656508918298278"
                            autoLoad={true}
                            fields="name,email"
                            //onClick={componentClicked}
                            callback={responseFacebook} />
                    </Navigation>
                </Drawer>
                <Content >
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
        )
  }
}

export default App;
