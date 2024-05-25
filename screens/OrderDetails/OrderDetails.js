import React, {useState} from 'react';
import {Card, IconButton} from 'react-native-paper';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  Divider,
} from 'react-native';
import OrderList from '../OrderDetails/OrderList';
import OrderSummary from '../OrderDetails/OrderSummary';

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
          ORDER DETAILS
        </Text>
      </View>
      {/* total card */}

      {/* card */}

      <View className="flex flex-col   p-5  bg-[#f5f5f5]">
        <OrderSummary />
      </View>

      <View className="flex flex-col  h-full p-5  bg-[#f5f5f5]">
        <Text style={styles.sideHeadingcard}>Highlights</Text>
        <OrderList />
      </View>
      {/* divider */}
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
