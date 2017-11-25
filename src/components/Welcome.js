import React from 'react';
import {Text,View,Button} from "react-native";
import Actions from 'react-native-router-flux';
export default class Welcome extends React.Component {
  render() {
    return (
        <View>
                <Text> test test</Text>
                <Button
                    onPress={onPressLearnMore}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
    
        </View>
    );
  }
  onPressLearnMore(){
      Actions.test();

  }
}
   
