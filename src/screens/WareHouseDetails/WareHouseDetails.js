import React, {useState} from 'react';
import {Card, IconButton} from 'react-native-paper';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

import WareHouseCard from '../WareHouseDetails/WareHouseCard';
import {screenBackground} from '../../constants/Theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const WareHouseDetails = () => {
  return (
    <ScrollView>
      <View style={{backgroundColor: screenBackground}}>
        <View className="flex flex-col p-3 mb-24">
          <WareHouseCard />
          <TouchableOpacity>
            <View className="w-24 p-2 text-center bg-[#f96900] items-center justify-center flex flex-row rounded-[5px] mt-2">
              <MaterialIcons name="add" size={18} color="white" />
              <Text className="ml-2 text-center text-white font-[Roboto-Regular] text-[12px]">
                Add
              </Text>
            </View>
          </TouchableOpacity>
          <View className="pt-5">
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={styles.buttonAddVendor}>
              <Text
                className="text-white "
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  textTransform: 'uppercase',
                }}>
                Save changes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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

export default WareHouseDetails;
