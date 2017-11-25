import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Map from './Map';
import Welcome from './Welcome';
import Posterunki from './Posterunki';
import MapPolygon from './MapPolygon';
import {View} from 'react-native';

const RouterComponent = () => (

    <Router>
        <Stack>
            <Scene key="welcome" component={Welcome}/>
            <Scene key="map" component={Map}/>
            <Scene key="posterunki" component={Posterunki}/>
            <Scene key="mappolygon" component={MapPolygon}/>

        </Stack>
    </Router>

);
const styles={
    tabbar:{
    paddingTop:25,
    backgroundColor:'red'
    }
}

export default RouterComponent;
