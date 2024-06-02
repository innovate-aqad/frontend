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
import SelectDropDown from '../../../Shared/SelectDropDown';
import { headerColor } from '../../../constants/Theme';

export default function Products(nav) {
  const [searchText, setSearchText] = useState('');
  const handleSearch = () => {};
  return (
    <View className="w-full h-full bg-[#f5f5f5]">
      <View className="relative top-0 flex flex-row items-center px-5 pt-7 pb-2 rounded-b-[15px]" style={{backgroundColor:headerColor}}>
        <Image
          style={styles.topNavigation}
          source={require('../../../Assets/image/drawable-xhdpi/arrow_left.png')}
        />
        <Text
          className="flex justify-center w-[80%] text-center text-white"
          style={{fontFamily: 'Poppins-Bold',fontSize:20}}>
          PRODUCTS
        </Text>
      </View>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View className="p-3 px-5 gap-y-3">
          <SelectDropDown/>
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

          <View className="flex flex-col">
            <Text
              className="text-[#00274d] text-[13px]"
              style={{fontFamily: 'Poppins-Bold'}}>
              Category Tiles
            </Text>
            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', gap:14}}>
              
              <View className="flex flex-row items-center p-2.5 bg-white rounded-xl">
                <View>
                  <Image
                    style={{height:47,width:50}}
                    source={require('../../../Assets/image/drawable-hdpi/untitled_1.png')}
                  />
                </View>
                <View className="flex flex-col pl-2">
                  <Text className="text-[#00274d] font-[Poppins-SemiBold]" style={{fontSize:10, lineHeight:12}}>
                    Baby Products
                  </Text>
                  <View className="flex flex-row items-center gap-x-2">
                    <Text className="text-[#f96900] text-[13px] font-[Poppins-SemiBold]" style={{fontSize:13}}>504</Text>
                    <Text className="text-[#7e84a3] font-[Poppins-Regular]" style={{fontSize:8}}>products</Text>
                  </View>
                </View>
              </View>
              <View className="flex flex-row items-center p-2.5 bg-white rounded-xl">
                <View>
                  <Image
                    style={{height:47,width:50}}
                    source={require('../../../Assets/image/drawable-hdpi/untitled_1.png')}
                  />
                </View>
                <View className="flex flex-col pl-2">
                  <Text className="text-[#00274d] font-[Poppins-SemiBold]" style={{fontSize:10, lineHeight:12}}>
                    Baby Products
                  </Text>
                  <View className="flex flex-row items-center gap-x-2">
                    <Text className="text-[#f96900] text-[13px] font-[Poppins-SemiBold]" style={{fontSize:13}}>504</Text>
                    <Text className="text-[#7e84a3] font-[Poppins-Regular]" style={{fontSize:8}}>products</Text>
                  </View>
                </View>
              </View>
              <View className="flex flex-row items-center p-2.5 bg-white rounded-xl">
                <View>
                  <Image
                    style={{height:47,width:50}}
                    source={require('../../../Assets/image/drawable-hdpi/untitled_1.png')}
                  />
                </View>
                <View className="flex flex-col pl-2">
                  <Text className="text-[#00274d] font-[Poppins-SemiBold]" style={{fontSize:10, lineHeight:12}}>
                    Baby Products
                  </Text>
                  <View className="flex flex-row items-center gap-x-2">
                    <Text className="text-[#f96900] text-[13px] font-[Poppins-SemiBold]" style={{fontSize:13}}>504</Text>
                    <Text className="text-[#7e84a3] font-[Poppins-Regular]" style={{fontSize:8}}>products</Text>
                  </View>
                </View>
              </View>
             
            </View>
          </View>

          <View className="flex flex-row justify-between px-3">
            <Text
              className="text-[#00274d] text-[13px]"
              style={{fontFamily: 'Poppins-Bold'}}>
              Product History
            </Text>
            <Image
              style={{height: 18, width: 18}}
              source={require('../../../Assets/image/drawable-hdpi/apps_sort.png')}
            />
          </View>
          <SafeAreaView>
            <ScrollView keyboardShouldPersistTaps="handled">
              {[1, 2]?.map((item, index) => {
                return (
                  <View
                    key={index}
                    className="flex flex-row items-center justify-around p-3 mt-1.5 bg-white shadow rounded-xl">
                    <View className="bg-[#FDEEE3] h-[50px] w-[50px] rounded-full border border-[#FDD7BC] p-3">
                      <Image
                        style={{height: 22, width: 29.5}}
                        source={require('../../../Assets/image/drawable-xhdpi/pngwing_com_9.png')}
                      />
                    </View>
                    <View>
                      <Text
                        className="text-[#5a607f] text-[13px]"
                        style={{fontFamily: 'Poppins-Regular'}}>
                        Product name {index}
                      </Text>
                      <View className="flex flex-row gap-x-2">
                        <Text
                          className="text-[#5a607f] bg-[#e6e9f4] text-center h-[12px] rounded-full w-[55px] text-[7px]"
                          style={{fontFamily: 'Poppins-SemiBold'}}>
                          SKU : 575
                        </Text>
                        <Text
                          className="text-[#5a607f] bg-[#e6e9f4] text-center h-[12px] rounded-full w-[55px] text-[7px]"
                          style={{fontFamily: 'Poppins-SemiBold'}}>
                          Grocery5
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text
                        className="text-[#f96900] pb-3 text-[13px]"
                        style={{fontFamily: 'Poppins-Medium'}}>
                        50 AED
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
                );
              })}
            </ScrollView>
          </SafeAreaView>
          {/* </View> */}

          <TouchableOpacity
            className="z-50 rounded-xl "
            onPress={() => nav.navigation.navigate('addProduct')}
            style={styles.button}>
            <Text
              className="text-white"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              ADD PRODUCT
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
//
const styles = StyleSheet.create({
  scrollViewConaner: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 10,
    // marginHorizontal: 10,
    borderBottomWidth: 0,
  },
  topNavigation: {
    height: 15,
    width: 23.3,
    tintColor:"white"
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
    backgroundColor: '#F96900', // Default button color
    padding: 12,
    alignItems: 'center',
    color: 'red',
  },
});
