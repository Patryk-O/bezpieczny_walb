import React from 'react';
import { View } from "react-native";
import MapView from 'react-native-maps';
import dataJson from './Markers';

export default class Map extends React.Component {
  render() {
    return (
        <View style={styles.view}>
            <View style={styles.details}>
            </View>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 50.772349,
                    longitude: 16.261400,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
            <MapView.Marker
                    coordinate={{ latitude: 50.772349,
                        longitude: 16.261400 }}
                    title={'Twoja pozycja'}
                    image={require('../../assets/usermarker.png')}
                    />
                {dataJson.markers.map(marker => (
                    <MapView.Marker
                    coordinate={marker.latlng}
                    title={marker.title}
                    description={marker.address}
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
    details: {
        flex: 1
    },
    map: {
        flex: 1
    }
}
   
