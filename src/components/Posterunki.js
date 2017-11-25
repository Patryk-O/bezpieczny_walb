
import React from 'react';
import { View, Button, Text, TouchableOpacity, Dimensions } from "react-native";
import { Actions } from 'react-native-router-flux';
import dataJson from './Markers';
export default class Posterunki extends React.Component {
    przejdzDoMapy(posterunek){
        Actions.map({posterunek});
        // console.log(posterunek);
    }
  render() {
    return (
        <View style={styles.container}>
               {dataJson.markers.map(marker => (
                   <TouchableOpacity style={styles.tile} onPress={() => this.przejdzDoMapy(marker)}>  
                                      
                  <Text> 
                      {marker.title}
                  </Text>
                    </TouchableOpacity>
                ))}
        </View>
    );
  }

}
var {height, width}= Dimensions.get('window');
const styles={
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        backgroundColor:'#c1bfbd',
        paddingTop: 25
    },
    tile:{
        height:50,
        justifyContent:'center',
        marginHorizontal:15,
        fontSize:40,
        borderBottomColor: '#000',
        borderBottomWidth: 1

    }
}