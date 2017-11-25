import React from 'react';
import { View } from "react-native";
import MapView from 'react-native-maps';
import dataJson from './Markers';

export default class Map extends React.Component {
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
                {dataJson.markers.map(marker => (
                    <MapView.Marker
                    coordinate={marker.latlng}
                    title={marker.title}
                    description={marker.description}
                    image={require('../../assets/policemarker.png')}
                    />
                ))}
            </MapView>
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
   
