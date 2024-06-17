import React, {useEffect, useState} from 'react';
import {Card, Divider, IconButton} from 'react-native-paper';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import OrderList from '../OrderDetails/OrderList';
import OrderSummary from '../OrderDetails/OrderSummary';
import {blue, grayColor, screenBackground} from '../../../../constants/Theme';
import {POPPINS, ROBOTO} from '../../../../constants/CustomFontFamily';
import CustomButton from '../../../../Shared/CustomButton';
import DrawerModal from './orderCardModal/CommentRatting';
import SharingFeedback from './orderCardModal/SharingFeedback';

const OrderDetails = (nav) => {
  const [value, setValue] = React.useState('left');
  const [isVisible,setIsVisible]=useState(false)
  const [feedBack,setFeedBack]=useState(false) 

  const handleSubmit=()=>{
    console.log("dskfjlskj");
    
    setFeedBack(true)
    setIsVisible(false)
  }

  useEffect(()=>{
    feedBack && setTimeout(() => {
      setFeedBack(false)
    }, 2000);
  },[feedBack])

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={{backgroundColor: screenBackground, marginBottom: 80}}>
        <View className="flex flex-col p-4  bg-[#f5f5f5]">
          <OrderSummary />
        </View>

        <View className="flex flex-col h-full px-4 bg-[#f5f5f5]">
          <Text
            style={{
              fontFamily: ROBOTO.RobotoBold,
              color: blue,
              fontSize: 13,
              marginBottom: 2,
              paddingLeft: 5,
            }}>
            Product Details
          </Text>
          <View className="">
            <OrderList setIsVisible={setIsVisible} isVisible={isVisible} />
          </View>
          <Divider className="bg-[#dbdcde] my-5 " />
          <View className="px-3 rounded-lg shadow">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-[#00274d]  font-[Poppins-SemiBold]">
                Shipment Address
              </Text>
            </View>
            <View className="flex flex-row mt-1 gap-x-2">
              <View className="flex flex-col relative right-2 justify-between mb-6 border-r border-dashed border-[#f96900]">
                <View className="w-3 relative bg-white left-1.5 h-3 border-2 border-[#f96900] rounded-full"></View>
                <View className="w-3 h-3 relative left-1.5  bg-[#f96900] rounded-full"></View>
                <View className="w-3 h-3 relative left-1.5  bg-[#f96900] rounded-full"></View>
              </View>

              <View className="flex flex-col gap-y-2">
                <View className="flex flex-col ">
                  <View className="flex flex-row justify-between">
                    <Text className="text-[#f96900] text-[10px]  font-[Poppins-SemiBold]">
                      Pickup Point
                    </Text>
                    <View className="flex flex-row items-center gap-x-1">
                      <Text className="text-[#7c7c7c] text-[8px]  font-[Poppins-Light]">
                        10th January 2024
                      </Text>
                      <Text className="bg-[#7c7c7c] text-[8px] h-1 w-1 rounded-full font-[Poppins-Light]"></Text>

                      <Text className="text-[#7c7c7c] text-[8px]  font-[Poppins-Light]">
                        17:45
                      </Text>
                    </View>
                  </View>
                  <Text className="text-[#7e84a3] text-[13px]  font-[Poppins-Light]">
                    Forest Hills South Side, Pasthal, Boisar, 401504
                  </Text>
                </View>
                <View className="flex flex-col ">
                  <View className="flex flex-row justify-between">
                    <Text className="text-[#f96900] text-[10px]  font-[Poppins-SemiBold]">
                      Pickup Point - 1
                    </Text>
                    <View className="flex flex-row items-center gap-x-1">
                      <Text className="text-[#7c7c7c] text-[8px]  font-[Poppins-Light]">
                        10th January 2024
                      </Text>
                      <Text className="bg-[#7c7c7c] text-[8px] h-1 w-1 rounded-full font-[Poppins-Light]"></Text>

                      <Text className="text-[#7c7c7c] text-[8px]  font-[Poppins-Light]">
                        17:45
                      </Text>
                    </View>
                  </View>
                  <Text className="text-[#7e84a3] text-[13px]  font-[Poppins-Light]">
                    Forest Hills South Side, Pasthal, Boisar, 401504
                  </Text>
                </View>
                <View className="flex flex-col ">
                  <View className="flex flex-row justify-between">
                    <Text className="text-[#f96900] text-[10px]  font-[Poppins-SemiBold]">
                      Delivery Point - 2
                    </Text>
                    <View className="flex flex-row items-center gap-x-1">
                      <Text className="text-[#7c7c7c] text-[8px]  font-[Poppins-Light]">
                        10th January 2024
                      </Text>
                      <Text className="bg-[#7c7c7c] text-[8px] h-1 w-1 rounded-full font-[Poppins-Light]"></Text>

                      <Text className="text-[#7c7c7c] text-[8px]  font-[Poppins-Light]">
                        17:45
                      </Text>
                    </View>
                  </View>
                  <Text className="text-[#7e84a3] text-[13px]  font-[Poppins-Light]">
                    Forest Hills South Side, Pasthal, Boisar, 401504
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Divider className="bg-[#dbdcde] mt-3 mb-5" />
          <View>
            <Text
              style={{
                fontFamily: ROBOTO.RobotoBold,
                color: blue,
                fontSize: 13,
                marginBottom: 2,
                paddingLeft: 5,
              }}>
              Payment Details
            </Text>
            <View className="my-3">
              <View className="flex flex-row justify-between">
                <Text
                  style={{
                    fontFamily: POPPINS.PoppinsLight,
                    color: grayColor,
                    fontSize: 13,
                    marginBottom: 2,
                    paddingLeft: 5,
                  }}>
                  Payment Details
                </Text>
                <Text
                  style={{
                    fontFamily: POPPINS.PoppinsRegular,
                    color: grayColor,
                    fontSize: 13,
                    marginBottom: 2,
                    paddingLeft: 5,
                  }}>
                  National of Dubai
                </Text>
              </View>
              <View className="flex flex-row justify-between">
                <Text
                  style={{
                    fontFamily: POPPINS.PoppinsLight,
                    color: grayColor,
                    fontSize: 13,
                    marginBottom: 2,
                    paddingLeft: 5,
                  }}>
                  Branch
                </Text>
                <Text
                  style={{
                    fontFamily: POPPINS.PoppinsRegular,
                    color: grayColor,
                    fontSize: 13,
                    marginBottom: 2,
                    paddingLeft: 5,
                  }}>
                  Dubai
                </Text>
              </View>
              <View className="flex flex-row justify-between">
                <Text
                  style={{
                    fontFamily: POPPINS.PoppinsLight,
                    color: grayColor,
                    fontSize: 13,
                    marginBottom: 2,
                    paddingLeft: 5,
                  }}>
                  IBAN
                </Text>
                <Text
                  style={{
                    fontFamily: POPPINS.PoppinsRegular,
                    color: grayColor,
                    fontSize: 13,
                    marginBottom: 2,
                    paddingLeft: 5,
                  }}>
                  AD60900326689P6144586184
                </Text>
              </View>
              <View className="flex flex-row justify-between">
                <Text
                  style={{
                    fontFamily: POPPINS.PoppinsLight,
                    color: grayColor,
                    fontSize: 13,
                    marginBottom: 2,
                    paddingLeft: 5,
                  }}>
                  Status
                </Text>
                <Text
                  style={{
                    fontFamily: POPPINS.PoppinsRegular,
                    color: '#21d59b',
                    fontSize: 13,
                    marginBottom: 2,
                    paddingLeft: 5,
                  }}>
                  Complete
                </Text>
              </View>
            </View>
          </View>
          <CustomButton text={"REORDER"}/>
        </View>

        
      </View>
      <DrawerModal setIsVisible={setIsVisible} handleSubmit={handleSubmit} isVisible={isVisible}/>
      {
        feedBack && <SharingFeedback setFeedBack={setFeedBack} feedBack={feedBack}/>
      }
      
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

export default OrderDetails;
