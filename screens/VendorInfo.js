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
import { Formik, useFormik } from 'formik';
import CountryPicker from 'react-native-country-picker-modal'
import { VendorRegisterSchema } from '../schemas/VendorRegisterSchema';
import ImagePicker from 'react-native-image-picker';

import axios from 'axios';


export default function VendorInfo(nav) {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [countryCode, setCountryCode] = useState('AE'); // Default country code
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSelectCountry = (country) => {

    const callingCodeWithPlus = `+${country.callingCode[0]}`;
    formik.setFieldValue('country', callingCodeWithPlus);
    
    formik.setFieldValue('isoCode', country.cca2);
    setCountryCode(country.cca2);
  };

  const redirectPorceed = () => {
    nav.navigation.navigate('document');
    // nav.navigation.navigate('bottomTab');
  };

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 75,
      duration: 2000,
    }).start();
  }, []);

  const initialValues = {
    fullName: "",
    email:"",
    country:"",
    number :"",
    dateOfBirth: "",
    isoCode :""
  };

  let formik =  useFormik({
      initialValues,
      validationSchema: VendorRegisterSchema,
      onSubmit: async (values, action) => {
      
        console.log("values",values)
        // setIsLoading(true);
        await axios({
          method: "post",
          url: `${baseUrl}auth/register`,
          data: {
            name: values.fullName,
            email: values.email,
            slide : 1,
            user_type : "vendor",
            country: values.isoCode,
            phone: `${values.country}-${values?.number}`,
            dob: values.dateOfBirth,
          },
        })
          .then((response) => {
            Swal.fire({
              icon: "success",
              title:
                "Please Check Your Mail, and verify Your Account in Floxy Travel",
              timer: "1000",
            });
            socket.emit("user_registeration", response.data);
            // console.log("response", response.data);
            setIsLoading(false);
            setData(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log("error", error);
            setIsLoading(false);
            Swal.fire({
              icon: "error",
              title: "Already have an account",
              timer: "1000",
            });
            // setError(error);
          });
        action.resetForm();
        setUpdateChecked(false);
        setAgreechecked(false);

      },
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik

  const renderCountry = (country) => {
    return (
      <Text>{country.callingCode}</Text>
    );
  };

  const pickImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // Image selected, do something with it (e.g., save to state)
        console.log('Image URI: ', response.uri);
      }
    });
  };
  
  return (
    <View
      className="flex flex-col p-4   h-full bg-gray-100 !text-black
        ">
      <View className="relative top-0 flex flex-row items-center p-5 ">
        <Image
          style={styles.topNavigation}
          source={require('../Assets/image/drawable-xhdpi/arrow_left.png')}
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
        <View className=" pt-10 " style={styles.user}>
          <TouchableOpacity onPress={pickImage}>
            <FontAwesome6 name={'user'} size={30} />
            <Feather
              name={'edit-2'}
              style={{position: 'absolute', bottom: -6, right: -6}}
            />
          </TouchableOpacity>
        </View>
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

            name="fullName"
            value={values.fullName}
            onChangeText={handleChange('fullName')}
            onBlur={handleBlur('fullName')}
          />
          {errors.fullName && touched.fullName && <Text style={{ color: 'red',fontSize:8 }}>{errors.fullName}</Text>}
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

            name="email"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
          />
          {errors.email && touched.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

          <View>
          <CountryPicker
            countryCode={countryCode}
            withFilter
            withFlag
            // withCountryNameButton
            withCallingCodeButton
            withAlphaFilter
            withCallingCode
            onSelect={onSelectCountry}

            name="country"
            value={values.country}
            // onChangeText={handleChange('country')}
            onBlur={handleBlur('country')}

            // onSelect={(country) => {
            //   formik.setFieldValue('country', country.callingCode[0]);
            //   // setFieldValue('callingCode', country.callingCode);
            // }}
            renderCountry={renderCountry} 
          />
          </View>
          {errors.country && touched.country && <Text style={{ color: 'red' }}>{errors.country}</Text>}

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

            name="number"
            value={values.number}
            onChangeText={handleChange('number')}
            onBlur={handleBlur('number')}

          />
          {errors.number && touched.number && <Text style={{ color: 'red' }}>{errors.number}</Text>}
          
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

            name="dateOfBirth"
            value={values.dateOfBirth}
            onChangeText={handleChange('dateOfBirth')}
            onBlur={handleBlur('dateOfBirth')}

          />
        </SafeAreaView>
      </View>
      <View className="pt-5">
        <TouchableOpacity
          onPress={handleSubmit}
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
