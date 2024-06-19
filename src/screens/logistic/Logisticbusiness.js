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
  ActivityIndicator,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

import {useFormik} from 'formik';
import {LogisticRegisterSchema2} from '../../schemas/LogisticRegisterSchema2';
import {environmentVariables} from '../../config/Config';
import axios from 'axios';
import {success} from '../../constants/ToastMessage';
import VelidationSymbol from '../../constants/VelidationSymbol';
import CustomStyle from '../../Styles';
import {POPPINS, ROBOTO} from '../../constants/CustomFontFamily';
import {
  blue,
  screenBackground,
  textColorCustom,
  white,
} from '../../constants/Theme';
export default function VendorBusiness(nav) {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [countryCode, setCountryCode] = useState('AE');
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
          success({type: 'success', text: response.data.message});
          nav.navigation.navigate('logisdocument', {id: response.data.data.id});
        })
        .catch(error => {
          setToggle(true);

          success({
            type: 'error',
            text: error?.response?.data?.message || error?.message,
          });
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
    formik.setFieldValue('country', country.cca2);
    setCountryCode(country.cca2);
  };

  const renderCountry = country => {
    return <Text>{country.callingCode}</Text>;
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View
        className="flex flex-col h-full p-4 "
        style={{backgroundColor: screenBackground}}>
        <View className="relative flex flex-row items-center top-3 ">
          <TouchableOpacity onPress={() => nav.navigation.navigate('logistic')}>
            <Image
              style={CustomStyle.topNavigation}
              source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
            />
          </TouchableOpacity>
        </View>
        <View className="mt-8">
          <Text style={CustomStyle.signupHeading}>Logistic Partner Info</Text>
          <Text style={CustomStyle.signupSubDec}>
            Pick the type of account that suits your business or personal needs.
          </Text>
        </View>
        <View className="pt-3 ">
          {/* progressbar */}
          <View className="flex flex-col">
            <View className="flex flex-row justify-between ">
              <Text
                style={{
                  fontFamily: POPPINS.PoppinsRegular,
                  color: textColorCustom,
                }}>
                Profile Upload (2/4)
              </Text>
              <Text
                style={{
                  fontFamily: POPPINS.PoppinsRegular,
                  color: textColorCustom,
                }}>
                66%
              </Text>
            </View>

            <View className="bg-[#F6E0D1] rounded-[10px]">
              <Animated.View style={[styles.bar, {width: progress}]} />
            </View>
          </View>
          <Text
            className="text-[20px] pt-5"
            style={{fontFamily: ROBOTO.RobotoMedium, color: blue}}>
            Business Information
          </Text>

          <SafeAreaView className="mt-2.5">
            <Text style={CustomStyle.inputLabel}>
              Company Name <VelidationSymbol />
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

            <Text style={CustomStyle.inputLabel}>
              Designation <VelidationSymbol />
            </Text>
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

            <Text style={CustomStyle.inputLabel}>Trade Licence Number</Text>
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
            <Text style={CustomStyle.inputLabel}>
              Company Address Line 1 <VelidationSymbol />
            </Text>
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

            <Text style={CustomStyle.inputLabel}>Company Address Line 2</Text>
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
                <Text style={CustomStyle.inputLabel}>Country</Text>
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
                <Text style={CustomStyle.inputLabel}>
                  PO Box <VelidationSymbol />
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
              className="flex flex-row  text-[19px]"
              style={{fontFamily: ROBOTO.RobotoRegular, color: white}}>
              PROCEED
            </Text>
            {toggle ? null : (
              <ActivityIndicator size="small" className="pl-2" color={white} />
            )}
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
    fontFamily: POPPINS.PoppinsMedium,
    paddingLeft: 15,
    fontSize: 12,
  },
  textStyle: {
    color: blue,
    fontFamily: POPPINS.PoppinsMedium,
    paddingLeft: 4,
    marginTop: 4,
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
    fontFamily: POPPINS.PoppinsLight,
  },
  button: {
    backgroundColor: textColorCustom,
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
  },
  bar: {
    height: 5,
    backgroundColor: textColorCustom,
    borderRadius: 10,
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
