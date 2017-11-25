import React from 'react';
import {Text,View} from "react-native";
import MapView from 'react-native-maps';

export default class Test extends React.Component {
  render() {
    return (
        <View style={styles.view}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 50.786131,
                    longitude: 16.284904,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    );
  }
}

const styles = {
    view: {
        flex: 1
    },
    map: {
        flex: 1
    }
}
   
