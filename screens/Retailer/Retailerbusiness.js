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
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import CountryPicker from 'react-native-country-picker-modal';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Badge, IconButton} from 'react-native-paper';
import {useFormik} from 'formik';
import {RetailerRegisterSchema2} from '../../schemas/RetailerRegisterSchema2';
import AddbuttonForRetailer from '../AddButton/AddbuttonForRetailer';
import axios from 'axios';
import {environmentVariables} from '../../config/Config';
export default function VendorBusiness(nav) {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [countryCode, setCountryCode] = useState('AE'); // Default country code

  // const [inputs, setInputs] = useState([]);

  // const handleAdd = () => {
  //   setInputs([...inputs, {email: '', password: ''}]);
  // };

  // const handleDelete = index => {
  //   const updatedInputs = [...inputs];
  //   updatedInputs.splice(index, 1);
  //   setInputs(updatedInputs);
  // };

  // useEffect(() => {
  //   Animated.timing(progress, {
  //     toValue: 200,
  //     duration: 2000,
  //   }).start();
  // }, []);
  // const redirectDocument = () => {
  //   nav.navigation.navigate('reatilerdocs');
  //   // nav.navigation.navigate('bottomTab');
  // };

  const [inputs, setInputs] = useState([{address: '', po_box: ''}]);
  const mainId = nav.route.params.id;

  const initialValues = {
    companyName: '',
    designation: '',
    tradeLicenseNo: '',
    companyAddress: '',
    companyAddressline2: '',
    vendorPoBox: '',
    country: 'AE',
    outlet_addresses: [{address: '', po_box: ''}],
  };

  let formik = useFormik({
    initialValues,
    validationSchema: RetailerRegisterSchema2,
    onSubmit: async (values, action) => {
      console.log('values', values);
      const formdata = {
        company_name: values.companyName,
        slide: '2',
        user_type: 'seller',
        designation: values.designation,
        trade_license_number: values.tradeLicenseNo,
        company_address: values.companyAddress,
        company_address_line_2: values.companyAddressline2,
        po_box: values.vendorPoBox,
        country: values.country,
        outlet_addresses: values?.outlet_addresses,
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
          console.log('565656556', response.data, 'hhhhhh', response.data.data);
          ToastAndroid.showWithGravityAndOffset(
            response.data.message,
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            25,
            50,
          );
          nav.navigation.navigate('reatilerdocs', {id: response.data.data.id});
        })
        .catch(error => {
          console.log('error...', error.response.data.message);
          ToastAndroid.showWithGravityAndOffset(
            error.response.data.message,
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            25,
            50,
          );
          // nav.navigation.navigate('business');
          // setIsLoading(false);
          // Swal.fire({
          //   icon: "error",
          //   title: "Already have an account",
          //   timer: "1000",
          // });
          // setError(error);
        });
    },
  });
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    formik;

  const handleAddPair = () => {
    formik.setValues({
      ...values,
      outlet_addresses: [...values.outlet_addresses, {address: '', po_box: ''}],
    });
  };

  const handleDeletePair = index => {
    const updatedPairs = [...values.outlet_addresses];
    updatedPairs.splice(index, 1);
    formik.setValues({
      ...values,
      outlet_addresses: updatedPairs,
    });
  };

  const handlePairInputChange = (text, index, field) => {
    const updatedPairs = [...values.outlet_addresses];
    updatedPairs[index][field] = text;
    formik.setValues({
      ...values,
      outlet_addresses: updatedPairs,
    });
  };

  useEffect(() => {
    // const getUserData = await userData()
    // console.log("hhhhhhh",getUserData)

    Animated.timing(progress, {
      toValue: 160,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, []);

  const onSelectCountry = country => {
    console.log('ppp', country);
    const callingCodeWithPlus = `+${country.callingCode[0]}`;
    formik.setFieldValue('country', country.cca2);

    // formik.setFieldValue('isoCode', country.cca2);
    setCountryCode(country.cca2);
  };

  const renderCountry = country => {
    return <Text>{country.callingCode}</Text>;
  };

  console.log('999', errors);
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View
        className="flex flex-col p-4   h-full bg-gray-100 !text-black
        ">
        <View className="relative flex flex-row items-center top-3  ">
          <Image
            style={styles.topNavigation}
            source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </View>

        <View className="mt-5">
          {/* progressbar */}

          <View className="mt-5">
            <Text
              className="text-3xl text-[#00274D]"
              style={{fontFamily: 'Poppins-bold'}}>
              Retailer Info
            </Text>
            <Text
              className="pt-2 text-xs text-gray-400"
              style={{fontFamily: 'Poppins-Light'}}>
              Pick the type of account that suits your business or personal
              needs.
            </Text>
          </View>
          <View className="pt-10 ">
            {/* progressbar */}
            <View className="flex flex-col">
              <View className="flex flex-row justify-between ">
                <Text
                  className="text-[#F96900]"
                  style={{fontFamily: 'Poppins-Regular'}}>
                  Profile Upload (2/3)
                </Text>
                <Text
                  className="text-[#F96900]"
                  style={{fontFamily: 'Poppins-Regular'}}>
                  66%
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
                name="companyName"
                value={values.companyName}
                onChangeText={handleChange('companyName')}
                onBlur={handleBlur('companyName')}
              />
              {errors.companyName && touched.companyName && (
                <Text style={{color: 'red'}}>{errors.companyName}</Text>
              )}

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
                name="designation"
                value={values.designation}
                onChangeText={handleChange('designation')}
                onBlur={handleBlur('designation')}
              />
              {errors.designation && touched.designation && (
                <Text style={{color: 'red'}}>{errors.designation}</Text>
              )}

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
                name="tradeLicenseNo"
                value={values.tradeLicenseNo}
                onChangeText={handleChange('tradeLicenseNo')}
                onBlur={handleBlur('tradeLicenseNo')}
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
                name="companyAddress"
                value={values.companyAddress}
                onChangeText={handleChange('companyAddress')}
                onBlur={handleBlur('companyAddress')}
              />
              {errors.companyAddress && touched.companyAddress && (
                <Text style={{color: 'red'}}>{errors.companyAddress}</Text>
              )}

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
                name="companyAddressline2"
                value={values.companyAddressline2}
                onChangeText={handleChange('companyAddressline2')}
                onBlur={handleBlur('companyAddressline2')}
              />
              {errors.companyAddressline2 && touched.companyAddressline2 && (
                <Text style={{color: 'red'}}>{errors.companyAddressline2}</Text>
              )}

              {/* side  */}
              <View style={styles.containerside}>
                <View style={styles.inputContainer}>
                  <Text
                    className="text-[#00274D] px-3"
                    style={{fontFamily: 'Poppins-SemiBold'}}>
                    Country
                  </Text>
                  {/* <TextInput
                    style={[styles.input, {width: '100%'}]}
                    placeholder="Example@gmail.com"
                    placeholderTextColor="rgb(210, 210, 210)"
                    name="country"
                    value={values.country}
                    onChangeText={handleChange('country')}
                    onBlur={handleBlur('country')}
                  /> */}
                  <CountryPicker
                    countryCode={countryCode}
                    withFilter
                    withFlag
                    withCountryNameButton
                    withAlphaFilter
                    withCallingCode
                    onSelect={onSelectCountry}
                    name="country"
                    value={values.country}
                    onBlur={handleBlur('country')}
                    renderCountry={renderCountry}
                  />
                  {errors.country && touched.country && (
                    <Text style={{color: 'red'}}>{errors.country}</Text>
                  )}
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
                    name="vendorPoBox"
                    value={values.vendorPoBox}
                    onChangeText={handleChange('vendorPoBox')}
                    onBlur={handleBlur('vendorPoBox')}
                  />
                  {errors.vendorPoBox && touched.vendorPoBox && (
                    <Text style={{color: 'red'}}>{errors.vendorPoBox}</Text>
                  )}
                </View>
              </View>
              <AddbuttonForRetailer
                inputs={inputs}
                setInputs={setInputs}
                errors={errors}
                handleAddPair={handleAddPair}
                handleDeletePair={handleDeletePair}
                handlePairInputChange={handlePairInputChange}
                values={values}
              />
              {errors.outlet_addresses && (
                <Text style={{color: 'red'}}>
                  At least one pair of Outlet address and PO Box is required
                </Text>
              )}
            </SafeAreaView>
          </View>
          <View className="pt-5">
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={styles.button}>
              <Text
                className="text-white "
                style={{fontFamily: 'Poppins-SemiBold'}}>
                PROCEED
              </Text>
            </TouchableOpacity>
          </View>
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
