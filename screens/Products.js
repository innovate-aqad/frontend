import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

export default function Products() {
  return (
    <View className="w-full bg-red-500">
      <View className="relative top-0 flex flex-row items-center p-5 bg-white">
        <Image
          style={styles.topNavigation}
          source={require('../Assets/image/drawable-xhdpi/arrow_left.png')}
        />
        <Text
          className="flex justify-center w-[80%] text-center text-[#00274d]"
          style={{fontFamily: 'Poppins-Bold'}}>
          products
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          underlineColorAndroid="transparent"
          value={searchText}
          placeholderTextColor={'#cbcbcb'}
          keyboardType="default"
          disableFullscreenUI={true}
          onChangeText={text => setSearchText(text)}
          onSubmitEditing={handleSearch}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topNavigation: {
    height: 15,
    width: 23.3,
  },
});
