import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Divider} from 'react-native-paper';
import CustomStyle from '../../Styles';
import { screenBackground } from '../../constants/Theme';
import Search from '../../Shared/Search';
const tanList = [
  {tabName: 'All Orders'},
  {tabName: 'Pending'},
  {tabName: 'Shipped'},
  {tabName: 'Cancelled'},
];

export default function Deliveries() {
  const [tab, setTab] = useState('All Orders');
  const [searchText, setSearchText] = useState('');
  const [show, setShow] = useState();

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

  return (
    <View className="w-full h-full" style={{backgroundColor:screenBackground}}>
      <View className="flex-row rounded-b-xl bg-[#f96900] px-4 pb-2 pt-7 items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={CustomStyle.topNavigation}
            source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <Text
          className="flex-1 text-[20px] text-center text-white"
          style={{fontFamily: 'Poppins-Bold'}}>
          DELIVERIES
        </Text>
      </View>
      <View className="p-4 gap-y-3">
        <Search/>
        <View className="flex flex-row justify-around gap-x-3">
          {tanList.map((item, index) => (
            <TouchableOpacity
            key={index}
              onPress={() => tabNavigatePage(item.tabName)}
              className={
                tab == item.tabName
                  ? 'bg-[#f96900] p-1.5 px-3 rounded-xl'
                  : 'bg-white p-1.5 px-3 rounded-xl'
              }>
              <Text
                className={
                  tab == item.tabName
                    ? 'text-white text-[12px]'
                    : 'text-[#00274d] text-[12px]'
                }
                style={{fontFamily: 'Poppins-Regular'}}>
                {item.tabName}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="flex flex-row justify-between px-3">
          <Text
            className="text-[#00274d] text-[13px]"
            style={{fontFamily: 'Poppins-Bold'}}>
            Orders History
          </Text>
          <Image
            style={{height: 18, width: 18}}
            source={require('../../Assets/image/drawable-hdpi/apps_sort.png')}
          />
        </View>
          <ScrollView>
        {tanList.map((item, index) => (
          <View key={index} className="p-3 my-3 bg-white rounded-lg shadow">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-[#00274d]  font-[Poppins-SemiBold]">
                Order ID #2564712
              </Text>
              <Text className="text-[#21d59b] bg-[#e2f3ed] px-3 py-1 rounded-full text-[7px]  font-[Poppins-SemiBold]">
                Completed
              </Text>
            </View>
            <Divider className="my-2 bg-[#e6e9f4]"></Divider>

            <View className="flex flex-row items-center my-1">
              <Image
                style={{width: 60, height: 60, borderRadius: 15}}
                source={{
                  uri: 'https://www.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg',
                }}
              />
              <View className="pl-2">
                <Text className="text-[#7e84a3] text-[13px]  font-[Poppins-Medium]">
                  Gusikowski Norene
                </Text>
                <Text className="text-[#cbcbcb] text-[13px]  font-[Poppins-Regular]">
                  Pick Up Truck : Dubai X 526871
                </Text>
              </View>
            </View>
            <View className="flex flex-row mt-1 gap-x-2">
              <View className="flex flex-col relative right-2 justify-between mb-6 border-r border-dashed border-[#f96900]">
                <View className="w-3 relative bg-white left-1.5 h-3 border-2 border-[#f96900] rounded-full"></View>
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
              </View>
            </View>
          </View>
        ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 0,
  },
  topNavigation: {
    height: 15,
    width: 23.3,
    tintColor: 'white',
  },
  input: {
    flex: 1,
    height: 45,
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
