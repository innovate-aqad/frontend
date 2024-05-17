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
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Badge, IconButton} from 'react-native-paper';
export default function VendorBusiness(nav) {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [inputs, setInputs] = useState([]);

  const handleAdd = () => {
    setInputs([...inputs, {email: '', password: ''}]);
  };

  const handleDelete = index => {
    const updatedInputs = [...inputs];
    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
  };

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 200,
      duration: 2000,
    }).start();
  }, []);
  const redirectDocument = () => {
    nav.navigation.navigate('document');
    // nav.navigation.navigate('bottomTab');
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
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
          VendorBusiness
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
        <View className="mt-5">
          <Text
            className="text-3xl text-[#00274D]"
            style={{fontFamily: 'Poppins-bold'}}>
            VendorBusiness
          </Text>
          <Text
            className="pt-2 text-xs text-gray-400"
            style={{fontFamily: 'Poppins-Light'}}>
            Pick the type of account that suits your business or personal needs.
          </Text>
        </View>
        <View className="pt-10 ">
          {/* progressbar */}
          <View className="flex flex-col">
            <View className="flex flex-row justify-between ">
              <Text
                className="text-[#F96900]"
                style={{fontFamily: 'Poppins-Regular'}}>
                Profile Upload (3/3)
              </Text>
              <Text
                className="text-[#F96900]"
                style={{fontFamily: 'Poppins-Regular'}}>
                100%
              </Text>
            </View>

            <Animated.View style={[styles.bar, {width: progress}]} />
          </View>
          {/* end of progressbar */}

          {/* text */}
          <View>
            <Text
              className="text-2xl text-[#00274D] pt-3"
              style={{fontFamily: 'Poppins-bold'}}>
              Business Information
            </Text>
          </View>

          <SafeAreaView>
            <Text
              className="text-[#00274D] px-3"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Company Name
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
              Designation
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
              Trade Licence Number
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
              Company Address Line 1
            </Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgb(210, 210, 210)"
              placeholder="Enter your Date of Birth"
              className="!border-none pl-4 !border-white"
              borderRadius={10}
            />
            <Text
              className="text-[#00274D] px-3"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Company Address Line 2
            </Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgb(210, 210, 210)"
              placeholder="Enter your Name"
              className="!border-none pl-4 !border-white"
              borderRadius={10}
            />
            {/* side  */}
            <View style={styles.containerside}>
              <View style={styles.inputContainer}>
                <Text
                  className="text-[#00274D] px-3"
                  style={{fontFamily: 'Poppins-SemiBold'}}>
                  Country
                </Text>
                <TextInput
                  style={[styles.input, {width: '100%'}]}
                  placeholder="Example@gmail.com"
                  placeholderTextColor="rgb(210, 210, 210)"
                />
              </View>
              <View style={styles.inputContainer}>
                <Text
                  className="text-[#00274D] px-3 pt-0"
                  style={{fontFamily: 'Poppins-SemiBold'}}>
                  PO Box
                </Text>
                <TextInput
                  style={[styles.input, {width: '100%'}]}
                  placeholder="Enter your phone number"
                  placeholderTextColor="rgb(210, 210, 210)"
                />
              </View>
            </View>
            {/* add */}

            <TouchableOpacity onPress={handleAdd} style={styles.buttonadd}>
              <Text>Add</Text>
            </TouchableOpacity>
            {inputs.map((input, index) => (
              <SafeAreaView key={index}>
                <Text style={styles.label} className="text-[#00274D] px-3">
                  Your Email
                </Text>
                <TextInput
                  className="!border-none pl-4 !border-white"
                  placeholderTextColor="rgb(210, 210, 210)"
                  style={styles.input}
                  placeholder="Example@gmail.com"
                  value={input.email}
                  onChangeText={text => {
                    const updatedInputs = [...inputs];
                    updatedInputs[index].email = text;
                    setInputs(updatedInputs);
                  }}
                />
                <Text style={styles.label} className="text-[#00274D] px-3">
                  Password
                </Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="rgb(210, 210, 210)"
                  placeholder="Enter your password"
                  value={input.password}
                  onChangeText={text => {
                    const updatedInputs = [...inputs];
                    updatedInputs[index].password = text;
                    setInputs(updatedInputs);
                  }}
                />
                <TouchableOpacity
                  onPress={() => handleDelete(index)}
                  style={styles.deleteButton}>
                  <Text>Delete</Text>
                </TouchableOpacity>
              </SafeAreaView>
            ))}
          </SafeAreaView>
        </View>
        <View className="pt-5">
          <TouchableOpacity
            onPress={() => redirectDocument()}
            style={styles.button}>
            <Text
              className="text-white "
              style={{fontFamily: 'Poppins-SemiBold'}}>
              PROCEED
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  topNavigation: {
    height: 15,
    width: 23.3,
  },
  input: {
    height: 40,
    margin: 3,
    borderWidth: 0,
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
  buttonadd: {
    backgroundColor: '#F96900', // Default button color
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
    width: 120,
    marginBottom: 10,
    marginTop: 10,
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
    height: 5,
    backgroundColor: '#F96900',
    borderRadius: 10,
  },
  containerside: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 20,
  },
  inputContainer: {
    flex: 1,

    marginRight: 20,
    borderWidth: 0,
  },
  deleteButton: {
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    width: 120,
  },
});
