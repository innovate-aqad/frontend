import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../../components/Header';
import ToggleSwitch from 'toggle-switch-react-native';
import {Divider} from 'react-native-paper';
import Octicons from 'react-native-vector-icons/Octicons';

import van from '../../Assets/image/dashboard/shipping_fast.svg';
import box_open from '../../Assets/image/dashboard/box_open.svg';
import free_shipping_amico from '../../Assets/image/dashboard/free_shipping_amico.svg';
// c:\Users\RAM\Downloads\drawable\free_shipping_amico.svg
import delivery_van from '../../Assets/image/free_shipping_amico.png';
import SvgUri from 'react-native-svg-uri';

// Octicons

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
export default function Dashboard() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const rememberMe = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Header></Header>
      <ScrollView keyboardShouldPersistTaps="handled">
        {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
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
              <Text className="!text-[#00274d]  text-[12px] w-2/3 font-[Poppins-Regular]">
                Today's Delivery Completed
              </Text>
              <Text className="!text-[#f96900] text-[30px] font-[Poppins-Bold]">
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
        {/* </ImageBackground> */}

        <View className="relative top-0 px-4 mb-12 h-96">
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-col">
              <View className="flex flex-row">
                <Text className="text-[#00274d]  font-[Poppins-SemiBold]">
                  Status :{' '}
                </Text>
                <Text className="text-[#21d59b]  font-[Poppins-SemiBold]">
                  {' '}
                  Online{' '}
                </Text>
              </View>
              <Text className="text-[#7e84a3] text-[10px]  font-[Poppins-Regular]">
                Open to any delivery
              </Text>
            </View>
            <View style={{borderWidth: 0, borderColor: 'transparent'}}>
              <ToggleSwitch
                isOn={isEnabled}
                onColor="#21d59b"
                offColor="gray"
                // label="Example label"
                labelStyle={{color: 'black', fontWeight: '900'}}
                size="small"
                onToggle={isOn => rememberMe(isOn)}
              />
            </View>
          </View>
          <View className="p-3 my-3 bg-white rounded-lg shadow">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-[#00274d]  font-[Poppins-SemiBold]">
                Current Order ID #2564712
              </Text>
              <Text className="text-[#21d59b] bg-[#e2f3ed] px-3 py-1 rounded-full text-[7px]  font-[Poppins-SemiBold]">
                In Transit
              </Text>
            </View>
            <Divider className="my-2 bg-[#e6e9f4]"></Divider>
            <View className="flex flex-row mt-1 gap-x-2">
              <View className="flex flex-col relative right-2 justify-between mb-6 border-r border-dashed border-[#f96900]">
                <View className="w-3 relative bg-white left-1.5 h-3 border-2 border-[#f96900] rounded-full"></View>
                <View className="w-3 h-3 relative left-1.5  bg-[#f96900] rounded-full"></View>
                <View className="w-3 h-3 relative left-1.5  bg-[#f96900] rounded-full"></View>
              </View>

              <View className="flex flex-col gap-y-2">
                <View className="flex flex-col ">
                  <Text className="text-[#f96900] text-[10px]  font-[Poppins-SemiBold]">
                    Pickup Point
                  </Text>
                  <Text className="text-[#7e84a3] text-[13px]  font-[Poppins-Light]">
                    Forest Hills South Side, Pasthal, Boisar, 401504
                  </Text>
                </View>
                <View className="flex flex-col ">
                  <Text className="text-[#f96900] text-[10px]  font-[Poppins-SemiBold]">
                    Pickup Point - 1
                  </Text>
                  <Text className="text-[#7e84a3] text-[13px]  font-[Poppins-Light]">
                    Forest Hills South Side, Pasthal, Boisar, 401504
                  </Text>
                </View>
                <View className="flex flex-col ">
                  <Text className="text-[#f96900] text-[10px]  font-[Poppins-SemiBold]">
                    Pickup Point - 2
                  </Text>
                  <Text className="text-[#7e84a3] text-[13px]  font-[Poppins-Light]">
                    Forest Hills South Side, Pasthal, Boisar, 401504
                  </Text>
                </View>
              </View>
            </View>
            <Divider className="my-2 bg-[#e6e9f4]"></Divider>
            <View className="flex flex-row items-center justify-between">
              <Text className="text-[#7e84a3] text-[10px] font-[Poppins-Regular]">
                Order Date : May 16, 2024
              </Text>
              <Text className="text-[#7e84a3] text-[10px] font-[Poppins-Regular]">
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
                <Text className="text-[10px] text-[#7e84a3] font-[Poppins-Regular]">
                  Orders in Queue
                </Text>
                <Text className="text-[13px] text-[#f0142f] font-[Poppins-Medium]">
                  8 found!
                </Text>
              </View>
            </View>
            <View className="flex w-[50%] flex-row items-center p-2 bg-white rounded-xl shadow ">
              <View className="p-2.5 border border-[#fbb17d] bg-[#fcede3] rounded-full">
                <SvgUri width={18.8} height={18.8} source={van} />
              </View>
              <View>
                <Text className="text-[10px] text-[#7e84a3] font-[Poppins-Regular] pl-2">
                  Distance Covered
                </Text>
                <Text className="text-[13px] text-[#f96900] font-[Poppins-Medium] pl-2">
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
});
