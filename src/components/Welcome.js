import React from 'react';
import { View, Button, Dimensions, TouchableOpacity, Text, Image } from "react-native";
import { Actions } from 'react-native-router-flux';
export default class Welcome extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => this.przejdzDoMapy() }>
               <View style={styles.button}>
               <Text> 
                    Niebezpieczne miejsca
                </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.przejdzDoListy() }>
            <View style={styles.button}>
                <Text> 
                    Lista posterunków
                </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
  }
  przejdzDoMapy(){
      Actions.mappolygon();
  }

    przejdzDoListy(){
    Actions.posterunki();
    }
}
var {height, width}= Dimensions.get('window');
const styles = {
    container:{
        flex: 1,
        flexDirection: 'column',
    },
    button:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
        
    },
}
   
