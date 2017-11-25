import React from 'react';
import { Actions, Scene, Router, Stack, ActionConst } from 'react-native-router-flux';
import Map from './Map';
import Welcome from './Welcome';
import Posterunki from './Posterunki';
import MapPolygon from './MapPolygon';

export default class RouterComponent extends React.Component{
    onBackPress() {
        return Actions.pop();
    }
    render() {
        return (
            <Router backAndroidHandler={this.onBackPress}>
                <Stack>
                    <Scene key="welcome" component={Welcome} hideNavBar/>
                    <Scene key="map" component={Map} hideNavBar/>
                    <Scene key="posterunki" component={Posterunki} hideNavBar/>
                    <Scene key="mappolygon" component={MapPolygon} hideNavBar/>
                </Stack>
            </Router>
        );
    }
}
const styles={
    tabbar:{
        paddingTop:25,
        backgroundColor:'red'
    }
}
