import React from 'react';
import { View, Button, Dimensions } from "react-native";
import { Actions } from 'react-native-router-flux';
export default class Welcome extends React.Component {
  render() {
    return (
        <View style={styles.container}>
                <Button style={styles.button}
                    onPress={this.przejdzDoMapy}
                    title="Niebezpieczne miejsca"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button style={styles.button}
                    onPress={this.przejdzDoListy}
                    title="Posterunki"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
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
        flexDirection: 'column'
    },
    button:{
        height:400
    },
}
   
