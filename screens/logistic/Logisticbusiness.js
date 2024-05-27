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
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import CountryPicker from 'react-native-country-picker-modal';

import {Badge, IconButton} from 'react-native-paper';
import {useFormik} from 'formik';
import {LogisticRegisterSchema2} from '../../schemas/LogisticRegisterSchema2';
import {environmentVariables} from '../../config/Config';
import axios from 'axios';
export default function VendorBusiness(nav) {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [countryCode, setCountryCode] = useState('AE'); // Default country code
  const [toggle, setToggle] = useState(true);

  const mainId = nav.route.params.id;

  const initialValues = {
    companyName: '',
    designation: '',
    tradeLicenseNo: '',
    companyAddress: '',
    companyAddressline2: '',
    vendorPoBox: '',
    country: 'AE',
  };

  let formik = useFormik({
    initialValues,
    validationSchema: LogisticRegisterSchema2,
    onSubmit: async (values, action) => {
      setToggle(false);
      const formdata = {
        company_name: values.companyName,
        slide: '2',
        user_type: 'logistic',
        designation: values.designation,
        trade_license_number: values.tradeLicenseNo,
        company_address: values.companyAddress,
        company_address_line_2: values.companyAddressline2,
        po_box: values.vendorPoBox,
        country: values.country,
        doc_id: mainId,
      };
      console.log(formdata, 'llll...');
      await axios({
        method: 'post',
        url: `${environmentVariables?.apiUrl}/api/user/register`,

        headers: {
          'Content-Type': 'application/json',
        },
        data: formdata,
      })
        .then(response => {
          setToggle(true);
          ToastAndroid.showWithGravityAndOffset(
            response.data.message,
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            25,
            50,
          );
          nav.navigation.navigate('logisdocument', {id: response.data.data.id});
        })
        .catch(error => {
          setToggle(true);
          ToastAndroid.showWithGravityAndOffset(
            error.response.data.message,
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            25,
            50,
          );
        });
    },
  });
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    formik;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 180,
      duration: 2000,
    }).start();
  }, []);

  const onSelectCountry = country => {
    console.log('ppp', country);
    const callingCodeWithPlus = `+${country.callingCode[0]}`;
    formik.setFieldValue('country', country.cca2);
    setCountryCode(country.cca2);
  };

  const renderCountry = country => {
    return <Text>{country.callingCode}</Text>;
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View
        className="flex flex-col p-4   h-full bg-gray-100 !text-black
        ">
        <View className="relative flex flex-row items-center top-3 ">
          <TouchableOpacity onPress={() => nav.navigation.navigate('logistic')}>
            <Image
              style={styles.topNavigation}
              source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
            />
          </TouchableOpacity>
        </View>

        <View className="mt-8">
          <Text
            className="text-[35px] text-[#00274D]"
            style={{fontFamily: 'Roboto-Bold'}}>
            Logistic Business
          </Text>
          <Text
            className="pt-2 text-xs text-gray-400"
            style={{fontFamily: 'Poppins-Light'}}>
            Pick the type of account that suits your business or personal needs.
          </Text>
        </View>
        <View className="pt-3 ">
          {/* progressbar */}
          <View className="flex flex-col">
            <View className="flex flex-row justify-between ">
              <Text
                className="text-[#F96900]"
                style={{fontFamily: 'Poppins-Regular'}}>
                Profile Upload (2/4)
              </Text>
              <Text
                className="text-[#F96900]"
                style={{fontFamily: 'Poppins-Regular'}}>
                66%
              </Text>
            </View>

            <View className="bg-[#F6E0D1] rounded-[10px]">
              <Animated.View style={[styles.bar, {width: progress}]} />
            </View>
          </View>
          <Text
            className="text-[20px] text-[#00274D] pt-5"
            style={{fontFamily: 'Roboto-Medium'}}>
            Business Information
          </Text>

          <SafeAreaView className="mt-2.5">
            <Text style={styles.textStyle}>Company Name</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgb(210, 210, 210)"
              placeholder="Enter company name"
              className="!border-none pl-4 !border-white"
              borderRadius={10}
              name="companyName"
              value={values.companyName}
              onChangeText={handleChange('companyName')}
              onBlur={handleBlur('companyName')}
            />
            {errors.companyName && touched.companyName && (
              <Text style={styles.errorHandle}>{errors.companyName}</Text>
            )}

            <Text style={styles.textStyle}>Designation</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgb(210, 210, 210)"
              placeholder="Enter designation"
              className="!border-none pl-4 !border-white"
              borderRadius={10}
              name="designation"
              value={values.designation}
              onChangeText={handleChange('designation')}
              onBlur={handleBlur('designation')}
            />
            {errors.designation && touched.designation && (
              <Text style={styles.errorHandle}>{errors.designation}</Text>
            )}

            <Text style={styles.textStyle}>Trade Licence Number</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgb(210, 210, 210)"
              placeholder="Enter trade licence number"
              className="!border-none pl-4 !border-white"
              borderRadius={10}
              name="tradeLicenseNo"
              value={values.tradeLicenseNo}
              onChangeText={handleChange('tradeLicenseNo')}
              onBlur={handleBlur('tradeLicenseNo')}
            />
            <Text style={styles.textStyle}>Company Address Line 1</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgb(210, 210, 210)"
              placeholder="Enter address"
              className="!border-none pl-4 !border-white"
              borderRadius={10}
              name="companyAddress"
              value={values.companyAddress}
              onChangeText={handleChange('companyAddress')}
              onBlur={handleBlur('companyAddress')}
            />
            {errors.companyAddress && touched.companyAddress && (
              <Text style={styles.errorHandle}>{errors.companyAddress}</Text>
            )}

            <Text style={styles.textStyle}>Company Address Line 2</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgb(210, 210, 210)"
              placeholder="Enter address 2"
              className="!border-none pl-4 !border-white"
              borderRadius={10}
              name="companyAddressline2"
              value={values.companyAddressline2}
              onChangeText={handleChange('companyAddressline2')}
              onBlur={handleBlur('companyAddressline2')}
            />
            {errors.companyAddressline2 && touched.companyAddressline2 && (
              <Text style={styles.errorHandle}>
                {errors.companyAddressline2}
              </Text>
            )}

            <View className="flex flex-row justify-between w-full">
              <View style={styles.inputContainer}>
                <Text
                  className="text-[#00274D] pl-1"
                  style={{fontFamily: 'Poppins-Medium'}}>
                  Country
                </Text>
                <View className="p-1.5 bg-white rounded-[10px]">
                  <CountryPicker
                    countryCode={countryCode}
                    withFilter
                    withFlag
                    withCallingCodeButton
                    withAlphaFilter
                    withCallingCode
                    onSelect={onSelectCountry}
                    name="country"
                    value={values.country}
                    onBlur={handleBlur('country')}
                    renderCountry={renderCountry}
                  />
                </View>
                {errors.country && touched.country && (
                  <Text style={styles.errorHandle}>{errors.country}</Text>
                )}
              </View>

              <View style={styles.inputContainer} className="ml-2">
                <Text
                  className="text-[#00274D]"
                  style={{fontFamily: 'Poppins-Medium'}}>
                  PO Box
                </Text>
                <TextInput
                  style={[
                    {
                      backgroundColor: 'white',
                      paddingVertical: 6,
                      paddingLeft: 10,
                      borderRadius: 10,
                      color: '#cbcbcb',
                    },
                    {width: '100%'},
                  ]}
                  placeholder="Enter PO box"
                  placeholderTextColor="rgb(210, 210, 210)"
                  name="vendorPoBox"
                  value={values.vendorPoBox}
                  onChangeText={handleChange('vendorPoBox')}
                  onBlur={handleBlur('vendorPoBox')}
                />
                {errors.vendorPoBox && touched.vendorPoBox && (
                  <Text style={styles.errorHandle}>{errors.vendorPoBox}</Text>
                )}
              </View>
            </View>
          </SafeAreaView>
        </View>
        <View className="pt-5">
          <TouchableOpacity
            onPress={() => {
              toggle ? handleSubmit() : null;
            }}
            style={toggle ? styles.button : styles.button1}
            className="flex flex-row items-center justify-center gap-x-2">
            <Text
              className="text-white flex flex-row  text-[19px]"
              style={{fontFamily: 'Roboto-Regular'}}>
              PROCEED
            </Text>
            {toggle ? null : <ActivityIndicator size="small" color="#00274d" />}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  button1: {
    backgroundColor: '#F6E0D1',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
  },
  errorHandle: {
    color: 'red',
    fontFamily: 'Poppins-Medium',
    paddingLeft: 15,
    fontSize: 12,
  },
  textStyle: {
    color: '#00274D',
    fontFamily: 'Poppins-Medium',
    paddingLeft: 4,
    marginTop: 4,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  topNavigation: {
    height: 15,
    width: 23.3,
  },
  input: {
    paddingVertical: 4,
    margin: 3,
    borderWidth: 1,
    color: 'gray',
    backgroundColor: 'white',
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
