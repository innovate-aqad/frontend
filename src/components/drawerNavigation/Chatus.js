import {View, Text, Button} from 'react-native';
import React from 'react';

export default function Chatus(nav) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => nav.navigation.navigate('Home')}
        title="Go to home"
      />
    </View>
  );
}
