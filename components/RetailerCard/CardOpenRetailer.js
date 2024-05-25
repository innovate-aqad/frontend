import React, {useState} from 'react';
import {Card, IconButton} from 'react-native-paper';
import {TouchableOpacity, StyleSheet, View, Text, Image} from 'react-native';
import CardRetailer from '../RetailerCard/CardRetailer';
const MyComponent = () => {
  const [value, setValue] = React.useState('left');

  return (
    <View>
      <View className="relative top-0 flex flex-row items-center px-5 pt-7 pb-2 bg-[#f96900] rounded-b-[15px] ">
        <Image
          style={styles.topNavigation}
          source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
        />
        <Text
          className="flex justify-center w-[80%] text-center text-white"
          style={{fontFamily: 'Poppins-Bold', fontSize: 20}}>
          FEATURES
        </Text>
      </View>
      {/* toggle */}
      <View className="m-5  ">
        <View className="flex flex-row w-full bg-white rounded-full  ">
          <TouchableOpacity
            onPress={() => setValue('left')}
            className="w-[50%] h-[39px]"
            //  style={styles.button}

            style={[
              styles.button,
              value === 'left' && styles.selectedToggleButton,
            ]}>
            <Text
              className="text-[#00274D]"
              style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>
              Vendor
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-[50%] h-[39px]"
            onPress={() => setValue('right')}
            style={[
              styles.button1,
              value === 'right' && styles.selectedToggleButton,
            ]}>
            <Text
              className="text-[#00274D]"
              style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>
              Retailer
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex flex-col  h-full p-5 py-8 bg-[#f5f5f5]">
        <Text style={styles.sideHeadingcard}>Highlights</Text>
        <CardRetailer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'red', // Gray color
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
  },
  content: {
    marginTop: 10,
    color: '#7e84a3', // Gray color
    fontFamily: 'Poppins-Regular',
    fontSize: 10,

    // lineHeight: 18,
  },
  heading: {
    color: '#00274d', // Gray color
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
  },
  topNavigation: {
    height: 15,
    width: 23.3,
    tintColor: 'white',
  },
  button: {
    // backgroundColor: '#F96900',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    color: 'red',
  },
  button1: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    color: 'red',
  },
  selectedToggleButton: {
    backgroundColor: '#F96900',
    borderColor: '#F96900',
  },
  sideHeadingcard: {
    color: '#00274d', // Gray color
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    fontWeight: 'bold',
    paddingLeft: 8,
    paddingBottom: 10,
  },
});

export default MyComponent;
