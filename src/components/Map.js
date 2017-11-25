import React from 'react';
import { View, Text, Button } from "react-native";
import MapView from 'react-native-maps';
import dataJson from './Markers';
import openMap from 'react-native-open-maps';

export default class Map extends React.Component {
    przejdzDoMapy(coordinate){
        openMap(coordinate);
        console.log(coordinate);

    }
  render() {
    return (
        <View style={styles.view}>
            <View style={styles.details}>
                <View>
                    <Text>{this.props.posterunek.title}</Text>
                </View>
                <View>
                    <Text>{this.props.posterunek.address} </Text>
                    <View>
                    <Text>{this.props.posterunek.name} </Text>
                    <View>
                    <Text>{this.props.posterunek.phone} </Text>
                    <View>
                </View>
                <View>
                    <Text>{this.props.posterunek.name2} </Text>
                </View>
                </View>
                    <Text>{this.props.posterunek.phone2} </Text>
                </View>
                </View>
                <View>
                    <Text>{this.props.posterunek.email} </Text>
                </View>
                <View>
                    <Button
                    title = "Nawigacja"
                    onPress = {() => this.przejdzDoMapy(this.props.posterunek.latlng)}
                    />
                </View>

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

                    <MapView.Marker
                    coordinate={this.props.posterunek.latlng}
                    title={this.props.posterunek.title}
                    description={this.props.posterunek.address}
                    image={require('../../assets/policemarker.png')}
                    />

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
   
