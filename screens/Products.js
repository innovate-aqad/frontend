import React, {useState} from 'react';
import {
  Image,
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

export default function Products() {
  const [searchText, setSearchText] = useState('');
  const handleSearch = () => {};
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
          PRODUCTS
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
        <View className="flex flex-row justify-between px-3">
          <Text
            className="text-[#00274d] text-[13px]"
            style={{fontFamily: 'Poppins-Bold'}}>
            Product History
          </Text>
          <Image
            style={{height: 18, width: 18}}
            source={require('../Assets/image/drawable-hdpi/apps_sort.png')}
          />
        </View>
        {/* <View style={styles.scrollViewConaner}>  */}
        <ScrollView >
          {/* <View className="h-[460px]"> */}
            {[1, 2, 3, 4, 5]?.map((item, index) => {
              return (
                <View
                  key={index}
                  className="flex flex-row items-center justify-around p-3 mt-1.5 bg-white shadow rounded-xl">
                  <View className="bg-[#FDEEE3] h-[50px] w-[50px] rounded-full border border-[#FDD7BC] p-3">
                    <Image
                      style={{height: 22, width: 29.5}}
                      source={require('../Assets/image/drawable-xhdpi/pngwing_com_9.png')}
                    />
                  </View>
                  <View>
                    <Text
                      className="text-[#5a607f] text-[13px]"
                      style={{fontFamily: 'Poppins-Regular'}}>
                      Product name
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
        {/* </View> */}
        <View>
          <TouchableOpacity
            className="mt-2 rounded-full"
            // onPress={() => redirect()}
            style={styles.button}>
            <Text
              className="text-white"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              ADD PRODUCT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    borderRadius: 25,
    paddingHorizontal: 10,
    // marginHorizontal: 10,
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
    backgroundColor: '#F96900', // Default button color
    padding: 12,
    alignItems: 'center',
    color: 'red',
  },
});
