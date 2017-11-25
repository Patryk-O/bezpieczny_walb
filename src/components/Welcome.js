import React from 'react';
import { View, Button } from "react-native";
import { Actions } from 'react-native-router-flux';
export default class Welcome extends React.Component {
  render() {
    return (
        <View>
                <Button
                    onPress={this.przejdzDoMapy}
                    title="Przejdz do mapy"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={this.przejdzDoListy}
                    title="Posterunki"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
        </View>
    );
  }
  przejdzDoMapy(){
      Actions.map();
  }

    przejdzDoListy(){
    Actions.posterunki();
    }
}
   
