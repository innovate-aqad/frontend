import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  View,
  Animated,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Badge, IconButton} from 'react-native-paper';
export default function VendorInfo(nav) {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const redirectBusiness = () => {
    nav.navigation.navigate('business');
    // nav.navigation.navigate('bottomTab');
  };

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 75,
      duration: 2000,
    }).start();
  }, []);

  return (
    <View
      className="flex flex-col p-4   h-full bg-gray-100 !text-black
        ">
      <View className="relative top-0 flex flex-row items-center p-5 ">
        <Image
          style={styles.topNavigation}
          source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
        />
      </View>
      <View>
        <Text
          className="text-3xl text-[#00274D]"
          style={{fontFamily: 'Poppins-bold'}}>
          Vendor Info
        </Text>
        <Text
          className="pt-2 text-xs text-gray-400"
          style={{fontFamily: 'Poppins-Light'}}>
          Pick the type of account that suits your business or personal needs.
        </Text>
      </View>
      <View className="pt-10 ">
        {/* progressbar */}
        <View style={styles.container}>
          {/* <Text>progress</Text> */}
          <Animated.View style={[styles.bar, {width: progress}]} />
        </View>

        <View>
          <Text
            className="text-2xl text-[#00274D] pt-3"
            style={{fontFamily: 'Poppins-bold'}}>
            Personal Information
          </Text>
        </View>

        {/* profile */}
        <View className="pt-10 " style={styles.user}>
          {/* <TouchableOpacity className="flex-row items-center p-2 bg-white border border-white rounded-2xl "> */}

          <FontAwesome6 name={'user'} size={30} />
          <Feather
            name={'edit-2'}
            style={{position: 'absolute', bottom: -6, right: -6}}
          />

          {/* </TouchableOpacity> */}
        </View>
        {/* input fields */}
        <SafeAreaView>
          <Text
            className="text-[#00274D] px-3"
            style={{fontFamily: 'Poppins-SemiBold'}}>
            Full Name
          </Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="rgb(210, 210, 210)"
            placeholder="Enter your Name"
            className="!border-none pl-4 !border-white"
            borderRadius={10}
          />

          <Text
            className="text-[#00274D] px-3"
            style={{fontFamily: 'Poppins-SemiBold'}}>
            Email
          </Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="rgb(210, 210, 210)"
            placeholder="Example@gmail.com"
            className="!border-none pl-4 !border-white"
            borderRadius={10}
          />
          <Text
            className="text-[#00274D] px-3"
            style={{fontFamily: 'Poppins-SemiBold'}}>
            Phone Number
          </Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="rgb(210, 210, 210)"
            placeholder="Enter your phone number"
            className="!border-none pl-4 !border-white"
            borderRadius={10}
          />
          <Text
            className="text-[#00274D] px-3"
            style={{fontFamily: 'Poppins-SemiBold'}}>
            Date of Birth
          </Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="rgb(210, 210, 210)"
            placeholder="Enter your Date of Birth"
            className="!border-none pl-4 !border-white"
            borderRadius={10}
          />
        </SafeAreaView>
      </View>
      <View className="pt-5">
        <TouchableOpacity
          onPress={() => redirectBusiness()}
          style={styles.button}>
          <Text
            className="text-white "
            style={{fontFamily: 'Poppins-SemiBold'}}>
            PROCEED
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
  },
  input: {
    height: 40,
    margin: 3,
    borderWidth: 1,
    // padding: 12,
    color: 'gray',
    backgroundColor: 'white',
    // borderRadius: 20,
    fontFamily: 'Poppins-Light',
  },
  button: {
    backgroundColor: '#F96900', // Default button color
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
  },
  user: {
    alignSelf: 'center',
  },
  container: {
    height: 15,
    backgroundColor: '#ccc',
    borderRadius: 10,
    // margin: 10,
  },
  bar: {
    height: 15,
    backgroundColor: '#F96900',
    borderRadius: 10,
  },
});