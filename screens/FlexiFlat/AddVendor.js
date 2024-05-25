import React, {useState} from 'react';
import {Card, IconButton} from 'react-native-paper';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  Divider,
  ScrollView,
} from 'react-native';

import FlexiAddVendor from '../FlexiFlat/FlexiAddVendor';

const MyComponent = () => {
  const [value, setValue] = React.useState('left');

  return (
    <ScrollView>
      <View>
        <View className="relative top-0 flex flex-row items-center px-5 pt-7 pb-2 bg-[#f96900] rounded-b-[15px] ">
          <Image
            style={styles.topNavigation}
            source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
          <Text
            className="flex justify-center w-[80%] text-center text-white"
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 20,
              alignItems: 'center',
            }}>
            FLEXI TRADE
          </Text>
        </View>
        <View className="flex flex-col   p-5  ">
          <Text style={styles.sideHeadingcard}>Vendor List</Text>
          <FlexiAddVendor />

          {/* <View className="flex flex-col  pl-2  ">
          <TouchableOpacity
            // onPress={() => handleAddPair()}
            style={styles.buttonAdd}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View> */}

          <View className="pt-5">
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={styles.buttonAddVendor}>
              <Text
                className="text-white "
                style={{fontFamily: 'Poppins-SemiBold'}}>
                Add Vendor
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* divider */}
      </View>
    </ScrollView>
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
  buttonAddVendor: {
    backgroundColor: '#F96900', // Default button color
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
    font: 'Roboto-Regular',
    fontSize: 20,
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
  buttonAdd: {
    alignItems: 'center',
    backgroundColor: '#F96900',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    width: 80,
  },
  lineAfterDiscount: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
    marginTop: 30,
    margin: 8,
  },
});

export default MyComponent;
