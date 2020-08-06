import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color"
              title="Happy Bicycle Trip" scroll>
                  <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/map">Map</Link>
                      <Link to="/equipment">Equipment</Link>
                      <Link to="/tips">Tips</Link>
                      <Link to="/mypage">My Page</Link>
                  </Navigation>
              </Header>
              <Drawer title="Menu">
                  <Navigation>
                  <Link to="/map">Map</Link>
                      <Link to="/equipment">Equipment</Link>
                      <Link to="/tips">Tips</Link>
                      <Link to="/mypage">My Page</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
          </Layout>
      </div>
    )
  }
}

export default App;
