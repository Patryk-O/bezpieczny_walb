import React from 'react';
import { View, Button } from "react-native";
import { Actions } from 'react-native-router-flux';
export default class Posterunki extends React.Component {
  render() {
    return (
        <View>
                <Button
                    onPress={this.onPressLearnMore}
                    title="Przejdz do mapy"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={this.onPressLearnMore}
                    title="Posterunki"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
        </View>
    );
  }
  onPressLearnMore(){
      Actions.map();
  }
}
   
