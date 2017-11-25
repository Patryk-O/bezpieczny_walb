
import React from 'react';
import { Scene,Router,Stack,ActionConst } from 'react-native-router-flux';
import Test from './Test';
import Welcome from './Welcome';
const RouterComponent = () => (

    <Router>
        <Stack>
            <Scene  key = "welcome" component { Welcome }         />
            <Scene  key = "test" component { Test }         />
            </Stack>
    </Router>
);
export default RouterComponent;
