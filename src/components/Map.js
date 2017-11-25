import React from 'react';
import { View, Text, Button, TouchableOpacity } from "react-native";
import MapView from 'react-native-maps';
import dataJson from './Markers';
import openMap from 'react-native-open-maps';
import Communications from 'react-native-communications';

export default class Map extends React.Component {
    przejdzDoMapy(coordinate){
        openMap(coordinate);
        console.log(coordinate);

    }
  render() {
    return (
        <View style={styles.view}>
            <View style={styles.details}>
                <View style={styles.tile}>
                    <Text>{this.props.posterunek.title}</Text>
                </View>
                <View style={styles.tile}>
                    <Text>{this.props.posterunek.address} </Text>
                </View>
                <View style={styles.tile}>
                    <Text>{this.props.posterunek.name} </Text>
                </View>
                <View style={styles.tile}>
                    <TouchableOpacity onPress={() => Communications.phonecall(this.props.posterunek.phone, true)}><Text style={styles.photo}>{this.props.posterunek.phone}</Text></TouchableOpacity>
                </View>
                <View style={styles.tile}>
                    <Text>{this.props.posterunek.name2} </Text>
                </View>
                <View style={styles.tile}>
                    <TouchableOpacity onPress={() => Communications.phonecall(this.props.posterunek.phone2, true)}><Text style={styles.photo}>{this.props.posterunek.phone2}</Text></TouchableOpacity>
                </View>
                <View style={styles.tile}>
                    <TouchableOpacity onPress={() => Communications.email(this.props.posterunek.phone2, null,null,'Wiadomość do komendy','Treść wiadomości')}><Text>{this.props.posterunek.email} </Text></TouchableOpacity>
                </View>
            </View>
                <View>
                    <Button
                    title = "Nawigacja"
                    onPress = {() => this.przejdzDoMapy(this.props.posterunek.latlng)}
                    />
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
        flex: 1,
        paddingTop:60
    },
    map: {
        flex: 1
    },
    photo: {
        color: 'blue'
    },
    tile:{
        height:30,
        justifyContent:'center',
        marginHorizontal:15,
        fontSize:40,
        borderBottomColor: '#000',
        borderBottomWidth: 1 
    }
}
   
