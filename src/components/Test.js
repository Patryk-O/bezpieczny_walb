import React from 'react';
import {Text,View} from "react-native";
import MapView from 'react-native-maps';

export default class Test extends React.Component {
     markers = [
        {
            latlng: {
                latitude: 50.786131,
                longitude: 16.28490

            },
            title: 'walbrzych',
            description: 'test',
        },
        {
        latlng: {
            latitude: 50.786031,
            longitude: 16.28490

        },
        title: 'walb',
        description: 'test2',
    } 
    ];
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
            >
                {this.markers.map(marker => (
                    <MapView.Marker
                    coordinate={marker.latlng}
                    title={marker.title}
                    description={marker.description}
                    />
                ))} 
            </MapView>
          
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
   
