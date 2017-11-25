import React from 'react';
import {Text,View} from "react-native";
import MapView from 'react-native-maps';

export default class Test extends React.Component {
     markers = [
        {
            latitude: 50.786131,
            longitude: 16.284904,
            title: 'walbrzych',
            subtitle: 'test',
        }
    ];
  render() {
    return (
        <View style={styles.view}>
            <MapView style={styles.map}
                annotations={markers}
                initialRegion={{
                    latitude: 50.786131,
                    longitude: 16.284904,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
          
            {/* <MapView.Marker
                coordinate={}
                image={require('C:\Users\MAX\Desktop\projekt\bezpieczny-walbrzych\src/policja_LOGO_1_0.jpg')}

/> */}
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
   
