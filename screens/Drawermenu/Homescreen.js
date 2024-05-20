import React from 'react';
import {Text, View, Button} from 'react-native';
const Homescreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to Notifications"
      />
    </View>
  );
};

export default Homescreen;
