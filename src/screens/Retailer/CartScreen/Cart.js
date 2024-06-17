import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Divider} from 'react-native-paper';
import {btnBackround, screenBackground, white} from '../../../constants/Theme';
import {POPPINS, ROBOTO} from '../../../constants/CustomFontFamily';
import {retrieveToken} from '../../../Shared/EncryptionDecryption/Token';
import axios from 'axios';
import {environmentVariables} from '../../../../config/Config';

export default function Cart(nav) {
  const [loader, setLoader] = useState(false);
  const [resCartData, setResCartData] = useState([]);
  const [value, setValue] = React.useState('left');

  const getCartData = async () => {
    const storedToken = await retrieveToken();

    try {
      setLoader(true);
      const getData = await axios.get(
        `${environmentVariables?.apiUrl}/api/cart/fetch_data`,
        {
          headers: {
            _token: storedToken,
          },
        },
      );
      console.log('9999999', getData?.data?.data);
      if (getData?.data?.success) {
        setResCartData(getData?.data?.data);
        setLoader(false);
      } else {
        setResCartData([]);
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
      setResCartData([]);
      console.log(error?.response?.data?.message, error?.message, 'eroorr11');
    }
  };
  useEffect(() => {
    getCartData();
  }, []);

  return (
    <View className="w-full h-full" style={{backgroundColor: screenBackground}}>
      <View className="p-4">
        <View className="flex flex-row w-full bg-gray-200 rounded-full">
          <TouchableOpacity
            onPress={() => setValue('left')}
            className="w-[50%] h-[39px]"
            //  style={styles.button}

            style={[
              styles.button,
              value === 'left' && styles.selectedToggleButton,
            ]}>
            <Text
              className={value === 'left' ? 'text-white' : 'text-[#00274D]'}
              style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>
              All (4)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-[50%] h-[39px]"
            onPress={() => setValue('right')}
            style={[
              styles.button,
              value === 'right' && styles.selectedToggleButton,
            ]}>
            <Text
              className={value === 'right' ? 'text-white' : 'text-[#00274D]'}
              style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>
              History
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mt-3">
          <Text
            className="text-[#00274d] px-2"
            style={{fontFamily: ROBOTO.RobotoBold, fontSize: 13}}>
            My Orders
          </Text>
        </View>
        <View className="mt-3">
          {loader ? (
            <ActivityIndicator />
          ) : resCartData?.length == 0 ? (
            <View>
              <Text>You dont have any product in Cart</Text>
            </View>
          ) : (
            resCartData?.map((item, index) => {
              return (
                <View
                  key={index}
                  className="flex flex-row w-full  mt-1.5 bg-white shadow rounded-xl">
                  <View className="w-[25%]">
                    <Image
                      style={{height: 80, width: 80}}
                      source={require('../../../Assets/image/drawable-xhdpi/mask_group_2.png')}
                    />
                  </View>
                  <View className="flex w-[75%]  flex-row items-center justify-around">
                    <View className="flex flex-col justify-between gap-y-2">
                      <View className="flex flex-col">
                        <Text
                          className="text-[#5a607f]"
                          style={{fontFamily: ROBOTO.RobotoBold, fontSize: 12}}>
                          {item?.productObj?.title}
                        </Text>
                        <Text
                          className="text-[#92939c] relative top-[-3px] w-[55px]"
                          style={{
                            fontFamily: ROBOTO.RobotoRegular,
                            fontSize: 8,
                          }}>
                          {item?.productObj?.categoryObj?.title}
                        </Text>
                      </View>
                      <View className="flex flex-row items-center gap-x-1.5 ">
                        <TouchableOpacity className="bg-[#f7dcc8] h-[18px] w-[18px] flex items-center justify-center rounded-full">
                          <Text className="text-[#f9e4d5] ">
                            <Entypo name="minus" size={14} color="#f96900" />
                          </Text>
                        </TouchableOpacity>
                        <Text
                          className="text-[#00274d] text-[15px]"
                          style={{fontFamily: POPPINS.PoppinsRegular}}>
                          3
                        </Text>
                        <TouchableOpacity className="bg-[#f7dcc8] h-[18px] w-[18px] flex items-center justify-center rounded-full">
                          <Text className="text-[#f9e4d5] ">
                            <Entypo name="plus" size={14} color="#f96900" />
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View className="flex items-center justify-center">
                      <Text
                        className="text-[#f96900] pb-3 text-[15px]"
                        style={{fontFamily: ROBOTO.RobotoMedium}}>
                        {item?.variantObj?.price} AED
                      </Text>
                    </View>
                    <View>
                      <Entypo
                        name="dots-three-vertical"
                        size={20}
                        color="#cbcbcb"
                      />
                    </View>
                  </View>
                </View>
              );
            })
          )}
        </View>

        <Divider className="text-[#dcdcdf] my-4" />

        <View className="">
          <Text
            className="text-[#00274d]"
            style={{fontFamily: ROBOTO.RobotoBold, fontSize: 13}}>
            Order Summary
          </Text>

          <View>
            <View className="flex flex-row mt-3 justify-between">
              <Text
                className="text-[#7e84a3] text-[13px]"
                style={{
                  letterSpacing: 0.08,
                  fontFamily: POPPINS.PoppinsRegular,
                }}>
                Subtotal (4)
              </Text>
              <Text
                className="text-[#7e84a3] text-[13px]"
                style={{
                  letterSpacing: 0.08,
                  fontFamily: POPPINS.PoppinsRegular,
                }}>
                5000 AED
              </Text>
            </View>
            <View className="flex flex-row justify-between">
              <Text
                className="text-[#7e84a3] text-[13px]"
                style={{
                  letterSpacing: 0.08,
                  fontFamily: POPPINS.PoppinsRegular,
                }}>
                VAT & Fees
              </Text>
              <Text
                className="text-[#7e84a3] text-[13px]"
                style={{letterSpacing: 0.08}}>
                5000 AED
              </Text>
            </View>
            <View className="flex flex-row justify-between">
              <Text
                className="text-[#7e84a3] text-[13px]"
                style={{letterSpacing: 0.08}}>
                Discount
              </Text>
              <Text
                className="text-[#7e84a3] text-[13px]"
                style={{letterSpacing: 0.08}}>
                5000 AED
              </Text>
            </View>
          </View>
        </View>
        <Divider className="text-[#dcdcdf] my-4" />
        <View className="flex flex-row justify-between">
          <Text
            className="text-[#f96900] font-[Poppins-Medium]"
            style={{fontSize: 20}}>
            TOTAL
          </Text>
          <Text
            className="text-[#f96900] font-[Poppins-Medium]"
            style={{fontSize: 20}}>
            4900 AED
          </Text>
        </View>

        <TouchableOpacity
          className="z-50 mt-10 rounded-xl "
          onPress={() => nav.navigation.navigate('checkout')}
          style={{
            backgroundColor: btnBackround,
            padding: 10,
            borderRadius: 30,
            alignItems: 'center',
            color: 'red',
          }}>
          <Text
            className="text-white"
            style={{fontFamily: 'Roboto-Regular', fontSize: 20}}>
            CHECK OUT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topNavigation: {
    height: 15,
    width: 23.3,
    tintColor: 'white',
  },
  button: {
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    color: 'white',
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
    color: '#000',
  },
});
