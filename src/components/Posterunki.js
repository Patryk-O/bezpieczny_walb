
import React from 'react';
import { View, Button, Text, TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';
import dataJson from './Markers';
export default class Posterunki extends React.Component {
    przejdzDoMapy(posterunek){
        Actions.map({posterunek});
        // console.log(posterunek);
    }
  render() {
    return (
        <View>
               {dataJson.markers.map(marker => (
                   <TouchableOpacity onPress={() => this.przejdzDoMapy(marker)}>  
                                      
                  <Text> 
                      {marker.title}
                  </Text>
                    </TouchableOpacity>
                ))}
        </View>
    );
  }

}