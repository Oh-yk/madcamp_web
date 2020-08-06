import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Equipment from './equipment';
import Map from './map';
import MyPage from './mypage';
import Tips from './tips';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/equipment" component={Equipment} />
        <Route path="/map" component={Map} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/tips" component={Tips} />
    </Switch>
)

export default Main;