import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import Search from '../../../Shared/Search';

export default function Order(nav) {
  const [tab, setTab] = useState('All Orders');
  const [show, setShow] = useState();

  const tabNavigatePage = value => {
    console.log(value, 'ramsasalsklaalskfalk');
    if (value === 'Pending') {
      setTab('Pending');
    } else if (value === 'Shipped') {
      setTab('Shipped');
    } else if (value === 'Cancelled') {
      setTab('Cancelled');
    } else {
      setTab('All Orders');
    }
  };

  const showMenu = index => {
    if (show === index) {
      setShow();
    } else {
      setShow(index);
    }
  };

  const navigation = useNavigation();
  return (
    <View className="w-full bg-[#f5f5f5]">
      <View className="flex-row rounded-b-xl bg-[#f96900] px-4 pb-2 pt-7 items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.topNavigation}
            source={require('../../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <Text
          className="flex-1 text-[20px] text-center text-white"
          style={{fontFamily: 'Poppins-Bold'}}>
          ORDER
        </Text>
      </View>
      <View className="p-3 px-5 gap-y-3">
        <Search />
        <View className="flex flex-row justify-around gap-x-3">
          <TouchableOpacity
            onPress={() => tabNavigatePage('All Orders')}
            className={
              tab == 'All Orders'
                ? 'bg-[#f96900] p-1.5 px-3 rounded-xl'
                : 'bg-[#ffffff] p-1.5 px-3 rounded-xl'
            }>
            <Text
              className={
                tab == 'All Orders'
                  ? 'text-white text-[12px]'
                  : 'text-[#00274d] text-[12px]'
              }
              style={{fontFamily: 'Poppins-Regular'}}>
              All Orders
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => tabNavigatePage('Pending')}
            className={
              tab == 'Pending'
                ? 'bg-[#f96900] p-1.5 px-3 rounded-xl'
                : 'bg-[#ffffff] p-1.5 px-3 rounded-xl'
            }>
            <Text
              className={
                tab == 'Pending'
                  ? 'text-white text-[12px]'
                  : 'text-[#00274d] text-[12px]'
              }
              style={{fontFamily: 'Poppins-Regular'}}>
              Pending
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => tabNavigatePage('Shipped')}
            className={
              tab == 'Shipped'
                ? 'bg-[#f96900] p-1.5 px-3 rounded-xl'
                : 'bg-[#ffffff] p-1.5 px-3 rounded-xl'
            }>
            <Text
              className={
                tab == 'Shipped'
                  ? 'text-white text-[12px]'
                  : 'text-[#00274d] text-[12px]'
              }
              style={{fontFamily: 'Poppins-Regular'}}>
              Shipped
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => tabNavigatePage('Cancelled')}
            className={
              tab == 'Cancelled'
                ? 'bg-[#f96900] p-1.5 px-3 rounded-xl'
                : 'bg-[#ffffff] p-1.5 px-3 rounded-xl'
            }>
            <Text
              className={
                tab == 'Cancelled'
                  ? 'text-white text-[12px]'
                  : 'text-[#00274d] text-[12px]'
              }
              style={{fontFamily: 'Poppins-Regular'}}>
              Cancelled
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-row justify-between px-3">
        <Text
          className="text-[#00274d] text-[13px]"
          style={{fontFamily: 'Poppins-Bold'}}>
          Orders History
        </Text>
        <Image
          style={{height: 18, width: 18}}
          source={require('../../../Assets/image/drawable-hdpi/apps_sort.png')}
        />
      </View>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View className="mb-16">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]?.map(
            (item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  className={
                    !(show == index)
                      ? 'flex flex-row mx-3 items-center justify-center'
                      : 'flex flex-row items-center justify-center'
                  }
                  onPress={() => navigation.navigate('orderDetailRetailer')}>
                  <View
                    className={
                      !(show == index)
                        ? 'flex w-full gap-y-2 flex-col p-1.5 pb-2 mt-1.5 bg-white shadow rounded-xl'
                        : 'flex w-[90%] gap-y-2 flex-col p-1.5 pb-2 mt-1.5 bg-white relative left-[-12px] shadow rounded-xl'
                    }>
                    <View className="flex flex-row justify-around ">
                      <View className="bg-[#FDEEE3] h-[50px] w-[50px] rounded-full border border-[#FDD7BC] p-3">
                        <Image
                          style={{height: 22, width: 29.5}}
                          source={require('../../../Assets/image/drawable-xhdpi/pngwing_com_9.png')}
                        />
                      </View>
                      <View>
                        <Text
                          className="text-[#00274d] text-[13px]"
                          style={{
                            fontFamily: 'Poppins-Regular',
                            letterSpacing: 0.08,
                          }}>
                          Product name {index}
                        </Text>
                        <View>
                          <View className="flex flex-row gap-x-2">
                            <Text
                              className="text-[#7e84a3]  rounded-full text-[8px]"
                              style={{fontFamily: 'Poppins-Regular'}}>
                              #AQADORDER052
                            </Text>
                            <View className="flex flex-row items-center gap-1">
                              <View className="bg-[#7e84a3] rounded-full h-[4px] w-[4px] "></View>
                              <Text
                                className="text-[#7e84a3]  rounded-full text-[8px]"
                                style={{fontFamily: 'Poppins-Regular'}}>
                                2m ago
                              </Text>
                            </View>
                          </View>
                          <View>
                            <Text
                              className="text-[#7e84a3]  rounded-full text-[8px]"
                              style={{fontFamily: 'Poppins-Regular'}}>
                              Per Unit :50 AED
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View>
                        <Text
                          className="text-[#f96900] text-[13px] pb-3"
                          style={{fontFamily: 'Poppins-Medium'}}>
                          50 AED
                        </Text>
                      </View>

                      <TouchableOpacity
                        onPress={() => showMenu(index)}
                        className="mt-3">
                        <Entypo
                          name="dots-three-vertical"
                          size={20}
                          color="#cbcbcb"
                        />
                      </TouchableOpacity>
                    </View>
                    <View className="flex flex-row px-3 gap-x-3">
                      <Text
                        className="text-[#21d59b] bg-[#E9FBF5] text-center h-[12px] rounded-full w-[55px] text-[7px]"
                        style={{fontFamily: 'Poppins-SemiBold'}}>
                        {tab === 'All Orders' ? 'Order' : tab}
                      </Text>
                      <Text
                        className="text-[#5a607f] bg-[#e6e9f4] text-center h-[12px] rounded-full w-[55px] text-[7px]"
                        style={{fontFamily: 'Poppins-SemiBold'}}>
                        SKU : 575
                      </Text>
                      <Text
                        className="text-[#5a607f] bg-[#e6e9f4] text-center h-[12px] rounded-full w-[55px] text-[7px]"
                        style={{fontFamily: 'Poppins-SemiBold'}}>
                        Grocery
                      </Text>
                    </View>
                  </View>
                  <View
                    className={
                      !(show == index) ? 'hidden' : 'flex flex-row mr-[80px] '
                    }>
                    <View className="flex flex-row items-center gap-x-2">
                      <TouchableOpacity className="p-3 bg-blue-100 rounded-xl">
                        <Image
                          style={{tintColor: '#6d93f2', height: 17, width: 17}}
                          source={require('../../../Assets/image/pencil.png')}
                        />
                      </TouchableOpacity>
                    </View>
                    <View className="flex flex-row items-center gap-2 ml-2">
                      <TouchableOpacity className="p-3 bg-red-100 rounded-xl">
                        <Image
                          style={{tintColor: '#df6886', height: 17, width: 17}}
                          source={require('../../../Assets/image/trash.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            },
          )}
        </View>
      </ScrollView>
    </View>
  );
}
//
const styles = StyleSheet.create({

  topNavigation: {
    height: 15,
    width: 23.3,
    tintColor: 'white',
  },
});
