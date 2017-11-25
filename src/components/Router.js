import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Map from './Map';
import Welcome from './Welcome';
import Posterunki from './Posterunki';

const RouterComponent = () => (

    <Router>
        <Stack>
            <Scene key="welcome" component={Welcome}/>
            <Scene key="map" component={Map}/>
            <Scene key="posterunki" component={Posterunki}/>

        </Stack>
    </Router>
);
export default RouterComponent;
