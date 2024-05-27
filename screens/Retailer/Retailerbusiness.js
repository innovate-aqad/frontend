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
  const [countryCode, setCountryCode] = useState('AE');
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
    Animated.timing(progress, {
      toValue: 220,
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
        <View className="relative flex flex-row items-center top-3 ">
          <Image
            style={styles.topNavigation}
            source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </View>

        <View className="mt-8">
          <Text
            className="text-[35px] text-[#00274D]"
            style={{fontFamily: 'Roboto-Bold'}}>
            Retailer Info
          </Text>
          <Text
            className="pt-2 text-xs text-gray-400"
            style={{fontFamily: 'Poppins-Light'}}>
            Pick the type of account that suits your business or personal needs.
          </Text>
        </View>
        <View className="mt-5">
          <View>
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

              <View className="bg-[#F6E0D1] rounded-[10px]">
                <Animated.View style={[styles.bar, {width: progress}]} />
              </View>
            </View>

            <View>
              <Text
                className="text-[20px] text-[#00274D] pt-5"
                style={{fontFamily: 'Roboto-Medium'}}>
                Business Information
              </Text>
            </View>

            <SafeAreaView>
              <Text
                className="text-[#00274D] mt-5 pl-1"
                style={{fontFamily: 'Poppins-Medium'}}>
                Company Name
              </Text>
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
                placeholder="Enter address"
                className="!border-none pl-4 !border-white"
                borderRadius={10}
                name="companyAddressline2"
                value={values.companyAddressline2}
                onChangeText={handleChange('companyAddressline2')}
                onBlur={handleBlur('companyAddressline2')}
              />
              {errors.companyAddressline2 && touched.companyAddressline2 && (
                <Text style={styles.errorHandle}>{errors.companyAddressline2}</Text>
              )}

              {/* side  */}
              <View className="flex flex-row justify-between mt-2 gap-x-1">
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

                <View style={styles.inputContainer}>
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
              <AddbuttonForRetailer
                inputs={inputs}
                setInputs={setInputs}
                errors={errors}
                handleAddPair={handleAddPair}
                handleDeletePair={handleDeletePair}
                handlePairInputChange={handlePairInputChange}
                values={values}
              />
              {/* {errors.outlet_addresses && (
                <Text style={styles.errorHandle}>
                  At least one pair of Outlet address and PO Box is required
                </Text>
              )} */}
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
    backgroundColor: '#F96900',
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
  errorHandle: {
    color: 'red',
    fontFamily: 'Poppins-Medium',
    paddingLeft: 15,
    fontSize: 12,
  },
});
