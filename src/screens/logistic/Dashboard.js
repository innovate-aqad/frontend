import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import ToggleSwitch from 'toggle-switch-react-native';
import {Divider} from 'react-native-paper';

import van from '../../Assets/image/dashboard/shipping_fast.svg';
import box_open from '../../Assets/image/dashboard/box_open.svg';
import SvgUri from 'react-native-svg-uri';
import {
  blue,
  customGreen,
  grayColor,
  lightGray,
  textColorCustom,
  white,
} from '../../constants/Theme';
import {POPPINS} from '../../constants/CustomFontFamily';

// Octicons

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
export default function Dashboard() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const changeStatus = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Header></Header>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View className="flex flex-row">
          <View className="z-50 flex flex-col justify-between">
            <View className="p-4">
              <Text className="!text-[#f96900] text-[30px] font-[Poppins-Bold]">
                Hello, Boris
              </Text>
              <Text className="!text-[#00274d] text-[15px] font-[Poppins-Medium]">
                Good Morning !
              </Text>
            </View>
            <View className="p-4 mt-16">
              <Text
                className="w-2/3"
                style={{
                  color: blue,
                  fontSize: 12,
                  fontFamily: POPPINS.PoppinsRegular,
                }}>
                Today's Delivery Completed
              </Text>
              <Text
                style={{
                  color: textColorCustom,
                  fontSize: 30,
                  fontFamily: POPPINS.PoppinsBold,
                }}>
                256
              </Text>
            </View>
          </View>
          <Image
            className="relative right-28 top-7"
            style={{height: 260, width: 290}}
            source={require('../../Assets/image/free_shipping_amico.png')}
          />
        </View>
        <View className="relative top-0 px-4 mb-12 h-96">
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-col">
              <View className="flex flex-row">
                <Text
                  style={{fontFamily: POPPINS.PoppinsSemiBold, color: blue}}>
                  Status :{' '}
                </Text>
                <Text
                  style={{
                    fontFamily: POPPINS.PoppinsSemiBold,
                    color: customGreen,
                  }}>
                  {' '}
                  Online{' '}
                </Text>
              </View>
              <Text
                style={{
                  color: grayColor,
                  fontSize: 10,
                  fontFamily: POPPINS.PoppinsRegular,
                }}>
                Open to any delivery
              </Text>
            </View>
            <View style={{borderWidth: 0, borderColor: 'transparent'}}>
              <ToggleSwitch
                isOn={isEnabled}
                onColor="#21d59b"
                offColor={lightGray}
                size="small"
                onToggle={isOn => changeStatus(isOn)}
              />
            </View>
          </View>
          <View className="p-3 my-3 bg-white rounded-lg shadow">
            <View className="flex flex-row items-center justify-between">
              <Text style={{color: blue, fontFamily: POPPINS.PoppinsSemiBold}}>
                Current Order ID #2564712
              </Text>
              <Text
                className=" bg-[#e2f3ed] px-3 py-1 rounded-full text-[7px]  "
                style={{
                  fontFamily: POPPINS.PoppinsSemiBold,
                  color: customGreen,
                }}>
                In Transit
              </Text>
            </View>
            <Divider className="my-2 bg-[#e6e9f4]"></Divider>
            <View className="flex flex-row mt-1 gap-x-2">
              <View className="flex flex-col relative right-2 justify-between mb-6 border-r border-dashed border-[#f96900]">
                <View
                  className="w-3 relative left-1.5 h-3 border-2  rounded-full"
                  style={{
                    borderColor: textColorCustom,
                    backgroundColor: white,
                  }}></View>
                <View
                  className="w-3 h-3 relative left-1.5  rounded-full"
                  style={{backgroundColor: textColorCustom}}></View>
                <View
                  className="w-3 h-3 relative left-1.5  rounded-full"
                  style={{backgroundColor: textColorCustom}}></View>
              </View>

              <View className="flex flex-col gap-y-2">
                <View className="flex flex-col ">
                  <Text style={styles.pickPoint}>Pickup Point</Text>
                  <Text style={styles.pichupAddress}>
                    Forest Hills South Side, Pasthal, Boisar, 401504
                  </Text>
                </View>
                <View className="flex flex-col ">
                  <Text style={styles.pickPoint}>Delivery Point - 1</Text>
                  <Text style={styles.pichupAddress}>
                    Forest Hills South Side, Pasthal, Boisar, 401504
                  </Text>
                </View>
                <View className="flex flex-col ">
                  <Text style={styles.pickPoint}>Delivery Point - 2</Text>
                  <Text style={styles.pichupAddress}>
                    Forest Hills South Side, Pasthal, Boisar, 401504
                  </Text>
                </View>
              </View>
            </View>
            <Divider className="my-2 bg-[#e6e9f4]"></Divider>
            <View className="flex flex-row items-center justify-between">
              <Text style={styles.orderDateTime}>
                Order Date : May 16, 2024
              </Text>
              <Text style={styles.orderDateTime}>
                Delivery Date : May 19, 2024
              </Text>
            </View>
          </View>
          <View className="flex flex-row justify-between pl-2">
            <View className="flex w-[50%] flex-row items-center p-2 bg-white rounded-xl shadow gap-x-2">
              <View className="p-2.5 border border-red-200 bg-red-100 rounded-full">
                <SvgUri width={18.8} height={18.8} source={box_open} />
              </View>
              <View>
                <Text
                  className="text-[10px]  pl-2"
                  style={{
                    color: grayColor,
                    fontFamily: POPPINS.PoppinsRegular,
                  }}>
                  Orders in Queue
                </Text>
                <Text
                  className="text-[13px] pl-2"
                  style={{
                    color: textColorCustom,
                    fontFamily: POPPINS.PoppinsMedium,
                  }}>
                  8 found!
                </Text>
              </View>
            </View>
            <View className="flex w-[50%] flex-row items-center p-2 bg-white rounded-xl shadow ">
              <View className="p-2.5 border border-[#fbb17d] bg-[#fcede3] rounded-full">
                <SvgUri width={18.8} height={18.8} source={van} />
              </View>
              <View>
                <Text
                  className="text-[10px]  pl-2"
                  style={{
                    color: grayColor,
                    fontFamily: POPPINS.PoppinsRegular,
                  }}>
                  Distance Covered
                </Text>
                <Text
                  className="text-[13px] pl-2"
                  style={{
                    color: textColorCustom,
                    fontFamily: POPPINS.PoppinsMedium,
                  }}>
                  6,587 km
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 'auto',
    justifyContent: 'flex-start',
  },
  image: {
    flex: 1,
    height: 310,
  },
  orderDateTime: {
    color: textColorCustom,
    fontFamily: POPPINS.PoppinsRegular,
    fontSize: 10,
  },
  pickPoint: {
    fontFamily: POPPINS.PoppinsSemiBold,
    fontSize: 10,
    color: textColorCustom,
  },
  pichupAddress: {
    fontFamily: POPPINS.PoppinsLight,
    fontSize: 13,
    color: grayColor,
  },
});
