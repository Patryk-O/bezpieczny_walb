import React from 'react';
import { View, Text, Button } from "react-native";
import MapView from 'react-native-maps';
import dataJson from './Polygons';

export default class MapPolygon extends React.Component {
  render() {
    return (
        <View style={styles.view}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 50.772349,
                    longitude: 16.261400,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
             {dataJson.polygons.map(polygon => (
            <MapView.Polygon
              key={polygon.id}
              coordinates={polygon.coordinates}
              strokeColor="#F00"
              fillColor="rgba(255,0,0,0.5)"
              strokeWidth={1}
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
   
