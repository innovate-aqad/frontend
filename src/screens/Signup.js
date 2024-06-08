import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export default function Signup(nav) {
  const [bgColor, setBgColor] = useState('bg-white');

  // Function to toggle background color on press
  const toggleColor = () => {
    const newColor = bgColor === 'bg-white' ? 'bg-[#ffc094]' : 'bg-white';
    setBgColor(newColor);
  };

  const redirectVendor = () => {
    nav.navigation.navigate('piechart');
    // nav.navigation.navigate('pmain');
  };
  const redirectLogistic = () => {
    // nav.navigation.navigate('logidrivdetail');
    nav.navigation.navigate('logistic');
  };
  const redirectRetailer = () => {
    nav.navigation.navigate('retailer');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setBgColor('bg-white');
    }, 100);

    // Clear the timeout if the component unmounts or bgColor changes before the timeout is reached
    return () => clearTimeout(timer);
  }, [bgColor]);

  const navigation = useNavigation();

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View
        className="flex flex-col px-4 pt-5  h-full bg-gray-100 !text-black
    "
        style={{fontFamily: 'Poppins-Bold'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.topNavigation}
            source={require('../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <View>
          <Text
            className="text-3xl text-[#00274D]"
            style={{fontFamily: 'Roboto-Bold'}}>
            Get Started As
          </Text>
          <Text
            className="text-xs text-gray-400"
            style={{fontFamily: 'Poppins-Light'}}>
            Pick the type of account that suits your business or personal needs.
          </Text>
        </View>

        <View className="flex flex-col !pt-5 gap-y-3">
          <TouchableOpacity
            activeOpacity={0.1}
            onPress={() => {
              redirectVendor();
              toggleColor();
            }}>
            <View
              className={`flex flex-row items-center w-full p-2 rounded-lg ${bgColor}`}>
              <View className="w-[12%] flex flex-row items-center justify-center rounded-full">
                <Image
                  style={styles.tinyLogo}
                  source={require('../Assets/image/vendor.jpeg')}
                />
              </View>
              <View className="w-[88%] px-3">
                <Text
                  className="text-xl text-[#00274D]"
                  style={styles.fontFamily}>
                  Vendor
                </Text>
                <Text className="pt-2 text-xs text-gray-300">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              redirectRetailer();
              toggleColor();
            }}>
            <View className="flex flex-row items-center w-full p-2 bg-white rounded-lg">
              <View className="w-[12%] flex flex-row items-center justify-center rounded-full">
                <Image
                  style={styles.tinyLogo}
                  source={require('../Assets/image/retailer.jpeg')}
                />
              </View>
              <View className="w-[88%] px-3">
                <Text
                  className="text-xl text-[#00274D]"
                  style={styles.fontFamily}>
                  Retail
                </Text>
                <Text className="pt-2 text-xs text-gray-300">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={redirectLogistic}>
            <View className="flex flex-row items-center w-full p-2 bg-white rounded-lg">
              <View className="w-[12%] flex flex-row items-center justify-center rounded-full">
                <Image
                  style={styles.tinyLogo}
                  source={require('../Assets/image/logistic.jpeg')}
                />
              </View>
              <View className="w-[88%] px-3">
                <Text
                  className="text-xl text-[#00274D]"
                  style={styles.fontFamily}>
                  Logistic Partner
                </Text>
                <Text className="pt-2 text-xs text-gray-300">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            indicatorStyle={'green'}
            className="flex flex-row items-center w-full p-2 bg-white rounded-lg"
            activeOpacity={0.5}>
            {/* <View className="flex flex-row items-center w-full p-2 rounded-lg"> */}
            <View className="w-[12%]  flex flex-row items-center justify-center rounded-full">
              <Image
                style={styles.tinyLogo}
                source={require('../Assets/image/employee.jpeg')}
              />
            </View>
            <View className="w-[88%] px-3">
              <Text
                className="text-xl text-[#00274D]"
                style={styles.fontFamily}>
                Employee
              </Text>
              <Text className="pt-2 text-xs text-gray-300">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </Text>
            </View>
            {/* </View> */}
          </TouchableOpacity>
        </View>

        <View className="flex flex-row items-center justify-center mt-8">
          <Text className="text-[#00274D] font-[Roboto-Regular]">
            Already Signed Up ?
          </Text>
          <Text
            className="px-5 text-[#F96900] font-[Roboto-Regular]"
            onPress={() => nav.navigation.navigate('Login')}>
            Login
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 35,
    height: 35,
    borderRadius: 11.5,
  },
  fontFamily: {
    fontFamily: 'Roboto-Regular',
  },
  topNavigation: {
    height: 15,
    width: 23.3,
    marginBottom: 15,
  },
});