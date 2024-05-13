import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import PopoverExample from '../Shared/TextLine';

export default function Orders() {
  const [tab, setTab] = useState('All Orders');
  const [searchText, setSearchText] = useState('');
  const [show, setShow] = useState(false);

  const handleSearch = () => {};

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

  const showMenu = () => {
    setShow(true);
  };

  return (
    <View className="w-full h-full bg-[#f5f5f5]">
      <View className="relative top-0 flex flex-row items-center p-5 bg-white">
        <Image
          style={styles.topNavigation}
          source={require('../Assets/image/drawable-xhdpi/arrow_left.png')}
        />
        <Text
          className="flex justify-center w-[80%] text-center text-[#00274d]"
          style={{fontFamily: 'Poppins-Bold'}}>
          ORDERS
        </Text>
      </View>
      <View className="p-3 px-5 gap-y-3">
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            underlineColorAndroid="transparent"
            value={searchText}
            // textColor='#cbcbcb'
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
        <View className="flex flex-row justify-between px-3">
          <Text
            className="text-[#00274d] text-[13px]"
            style={{fontFamily: 'Poppins-Bold'}}>
            Orders History
          </Text>
          <Image
            style={{height: 18, width: 18}}
            source={require('../Assets/image/drawable-hdpi/apps_sort.png')}
          />
        </View>
        <SafeAreaView>
          <ScrollView keyboardShouldPersistTaps="handled">
            <View className="">
              {[1,2,3,4,5,6,7,8,9]?.map((item, index) => {
                return (
                    <View
                      key={index}
                      className="flex gap-y-2 flex-col p-1.5 pb-2 mt-1.5 bg-white  shadow rounded-xl">
                      <View className="flex flex-row justify-around ">
                        <View className="bg-[#FDEEE3] h-[50px] w-[50px] rounded-full border border-[#FDD7BC] p-3">
                          <Image
                            style={{height: 22, width: 29.5}}
                            source={require('../Assets/image/drawable-xhdpi/pngwing_com_9.png')}
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
                        {/* <PopoverExample /> */}

                        <TouchableOpacity onPress={showMenu} className="mt-3">
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
                );
              })}
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
}
//
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 10,
    borderBottomWidth: 0,
  },
  topNavigation: {
    height: 15,
    width: 23.3,
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
  button: {
    backgroundColor: '#F96900',
    padding: 12,
    alignItems: 'center',
    color: 'red',
  },
});
