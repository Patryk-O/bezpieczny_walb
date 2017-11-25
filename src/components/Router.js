import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Map from './Map';
import Welcome from './Welcome';

const RouterComponent = () => (

    <Router>
        <Stack>
            <Scene key="welcome" component={Welcome}/>
            <Scene key="map" component={Map}/>
        </Stack>
    </Router>
);
export default RouterComponent;
