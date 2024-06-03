import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const handleSearch = () => {};
  return (
    <View style={styles.container}>
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

      <TouchableOpacity onPress={handleSearch}>
        <AntDesign name="search1" size={24} color="#cbcbcb" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 0,
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderColor: 'white',
    paddingRight: 5,
    color: '#cbcbcb',
    borderWidth: 2,
    marginLeft: 5,
  },
});
