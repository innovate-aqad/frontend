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
import Header from './Header';
import LiveOrder from '../Shared/LiveOrder';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CarouselHome from '../Shared/Carousel';

// FontAwesome6

export default function Dashboard() {
  const [searchText, setSearchText] = useState('');
  const handleSearch = () => {};
  return (
    <View className="flex flex-col pb-20">
      <Header></Header>
      <ScrollView style={styles.scrollView}>
        <View className="p-3">
          <View className="flex flex-row w-full bg-gray-200 rounded-full">
            <TouchableOpacity
              className="w-[50%] h-[39px]"
              style={styles.button}>
              <Text
                className="text-white"
                style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>
                Vendor
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="w-[50%] h-[39px]"
              style={styles.button1}>
              <Text
                className="text-[#00274D]"
                style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>
                Retailer
              </Text>
            </TouchableOpacity>
          </View>
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

          <LiveOrder />
          <View className="flex flex-row justify-around w-full mt-1.5">
            <View className="flex flex-row items-center">
              <View className="w-[10px] h-[10px] bg-[#21d59b] rounded-full"></View>
              <Text className={'text-[#00274d] text-[10px]'}> Retailer</Text>
            </View>
            <View className="flex flex-row items-center">
              <View className="w-[10px] h-[10px] bg-[#ffc700] rounded-full"></View>
              <Text className={'text-[#00274d] text-[10px]'}>
                {' '}
                Product Category
              </Text>
            </View>
            <View className="flex flex-row items-center">
              <View className="w-[10px] h-[10px] bg-[#7e84a3] rounded-full"></View>
              <Text className={'text-[#00274d] text-[10px]'}> Total SKU</Text>
            </View>
            <View className="flex flex-row items-center">
              <View className="w-[10px] h-[10px] bg-[#0058ff] rounded-full"></View>
              <Text className={'text-[#00274d] text-[10px]'}> Orders</Text>
            </View>
          </View>
          <View className="flex flex-row items-center justify-between mt-2">
            <Text className="text-[13px] font-bold" style={styles.textColor}>
              Category Tiles
            </Text>
            <View className="flex flex-row items-center p-1 pr-2 bg-white rounded-full gap-x-2 ">
              <Text className="text-[8px] text-[#00274d]">Show More</Text>

              <Image
                style={styles.tinyLogo}
                source={require('../Assets/image/drawable-hdpi/group_186.png')}
              />
              {/* </Text> */}
            </View>
          </View>
          <View className="flex flex-col items-center">
            <View className="flex flex-row items-center justify-around mt-3 gap-x-5">
              <View className="gap-y-1">
                <View className="p-2 py-3 bg-white rounded shadow">
                  <Image
                    style={styles.categoryImage}
                    source={require('../Assets/image/drawable-xhdpi/froods.png')}
                  />
                </View>
                <Text
                  className="text-center text-[10px]"
                  style={styles.textColor}>
                  Froods
                </Text>
              </View>
              <View className="gap-y-1">
                <View className="p-2 py-3 bg-white rounded shadow">
                  <Image
                    style={styles.categoryImage}
                    source={require('../Assets/image/drawable-xhdpi/personal.png')}
                  />
                </View>
                <Text
                  className="text-center text-[10px]"
                  style={styles.textColor}>
                  Beverages
                </Text>
              </View>
              <View className="gap-y-1">
                <View className="p-2 py-3 bg-white rounded shadow">
                  <Image
                    style={styles.categoryImage}
                    source={require('../Assets/image/drawable-xhdpi/mask_group_2.png')}
                  />
                </View>
                <Text
                  className="text-center text-[10px]"
                  style={styles.textColor}>
                  Personal Care
                </Text>
              </View>
              <View className="gap-y-1">
                <View className="p-2 py-3 bg-white rounded shadow">
                  <Image
                    style={styles.categoryImage}
                    source={require('../Assets/image/drawable-xhdpi/scroll_group_1.png')}
                  />
                </View>
                <Text
                  className="text-center text-[10px]"
                  style={styles.textColor}>
                  Household Care
                </Text>
              </View>
            </View>
            <View className="flex flex-row items-center justify-around mt-3 gap-x-5">
              <View className="gap-y-1">
                <View className="p-2 py-3 bg-white rounded shadow">
                  <Image
                    style={styles.categoryImage}
                    source={require('../Assets/image/drawable-xhdpi/health.png')}
                  />
                </View>
                <Text
                  className="text-[10px] text-center"
                  style={styles.textColor}>
                  Health Care
                </Text>
              </View>
              <View className="gap-y-1">
                <View className="p-2 py-3 bg-white rounded shadow">
                  <Image
                    style={styles.categoryImage}
                    source={require('../Assets/image/drawable-xhdpi/untitled_1.png')}
                  />
                </View>
                <Text
                  className="text-[10px] text-center"
                  style={styles.textColor}>
                  Baby Care
                </Text>
              </View>
              <View className="gap-y-1">
                <View className="p-2 py-3 bg-white rounded shadow">
                  <Image
                    style={styles.categoryImage}
                    source={require('../Assets/image/drawable-xhdpi/pngwing_com_7.png')}
                  />
                </View>
                <Text
                  className="text-[10px] text-center"
                  style={styles.textColor}>
                  Pet Care
                </Text>
              </View>
              <View className="gap-y-1">
                <View className="p-2 py-3 bg-white rounded shadow">
                  <Image
                    style={styles.categoryImage}
                    source={require('../Assets/image/drawable-xhdpi/pngwing_com_8.png')}
                  />
                </View>
                <Text
                  className="text-[10px] text-center"
                  style={styles.textColor}>
                  Home Care
                </Text>
              </View>
            </View>
          </View>
        </View>
        <CarouselHome />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 10,
    // marginHorizontal: 10,
    borderBottomWidth: 0,
    marginTop: 10,
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
  bgColor: {
    backgroundColor: '#00274D',
  },
  textColor: {
    color: '#00274d',
  },
  tinyLogo: {
    width: 18.3,
    height: 18.9,
    // marginRight:10
    // borderRadius: 11.5,
  },
  categoryImage: {
    height: 44,
    width: 65,
  },
});
