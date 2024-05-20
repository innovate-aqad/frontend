import React from 'react';
import {Text, View, Button} from 'react-native';
const Homescreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};

export default Homescreen;
