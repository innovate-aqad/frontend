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
import {useFormik} from 'formik';
import CountryPicker from 'react-native-country-picker-modal';
import {VendorRegisterSchema2} from '../../schemas/VendorRegiterSchema2';
import Addbutton from '../AddButton/Addbutton';
import axios from 'axios';
import {environmentVariables} from '../../config/Config';
import {Divider} from 'react-native-paper';
import { success } from '../../constants/ToastMessage';
import VelidationSymbol from '../../constants/VelidationSymbol';
import CustomStyle from '../../Styles';
import { ROBOTO } from '../../constants/CustomFontFamily';
export default function VendorBusiness(nav) {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [inputs, setInputs] = useState([{address: '', po_box: ''}]);
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
    warehouse_addresses: [{address: '', po_box: ''}],
  };

  let formik = useFormik({
    initialValues,
    validationSchema: VendorRegisterSchema2,
    onSubmit: async (values, action) => {
      setToggle(false);
      const formdata = {
        company_name: values.companyName,
        slide: '2',
        user_type: 'vendor',
        designation: values.designation,
        trade_license_number: values.tradeLicenseNo,
        company_address: values.companyAddress,
        company_address_line_2: values.companyAddressline2,
        po_box: values.vendorPoBox,
        country: values.country,
        warehouse_addresses: values?.warehouse_addresses,
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
          success({type: 'success', text: response.data.message})
          nav.navigation.navigate('document', {id: response.data.data.id});
        })
        .catch(error => {
          setToggle(true);
          success({type: 'error', text: error?.response?.data?.message || error?.message})
          
        });
    },
  });
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    formik;

  const handleAddPair = () => {
    formik.setValues({
      ...values,
      warehouse_addresses: [
        ...values.warehouse_addresses,
        {address: '', po_box: ''},
      ],
    });
  };

  const handleDeletePair = index => {
    const updatedPairs = [...values.warehouse_addresses];
    updatedPairs.splice(index, 1);
    formik.setValues({
      ...values,
      warehouse_addresses: updatedPairs,
    });
  };

  const handlePairInputChange = (text, index, field) => {
    const updatedPairs = [...values.warehouse_addresses];
    updatedPairs[index][field] = text;
    formik.setValues({
      ...values,
      warehouse_addresses: updatedPairs,
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
    const callingCodeWithPlus = `+${country.callingCode[0]}`;
    formik.setFieldValue('country', country.cca2);
    setCountryCode(country.cca2);
  };

  const renderCountry = country => {
    return <Text>{country.callingCode}</Text>;
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      <View
        className="flex flex-col p-4   h-full bg-gray-100 !text-black
        ">
        <View className="relative flex flex-row items-center top-3 ">
          <TouchableOpacity onPress={() => nav.navigation.navigate('retailer')}>
            <Image
              style={styles.topNavigation}
              source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
            />
          </TouchableOpacity>
        </View>

        <View className="mt-5">
          <Text
            style={CustomStyle.signupHeading}>
            Vendor Info
          </Text>
          <Text
            style={CustomStyle.signupSubDec}>
            Pick the type of account that suits your business or personal needs.
          </Text>
        </View>

        <View className="pt-5">
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

          <Text
            className="text-[20px] text-[#00274D] pt-5"
            style={{fontFamily: 'Roboto-Medium'}}>
            Business Information
          </Text>
        </View>
        <SafeAreaView>
          <Text
            className="pl-1 mt-5 "
            style={CustomStyle.inputLabel}>
            Company Name <VelidationSymbol/>
          </Text>
          <TextInput
            style={CustomStyle.inputStyle}
            placeholderTextColor="rgb(210, 210, 210)"
            placeholder="Enter Company Name"
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

          <Text
            className="pl-1 mt-1"
            style={CustomStyle.inputLabel}>
            Designation <VelidationSymbol/>
          </Text>
          <TextInput
            style={CustomStyle.inputStyle}
            placeholderTextColor="rgb(210, 210, 210)"
            placeholder="Designation"
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

          <Text
            className="pl-1 mt-1"
            style={CustomStyle.inputLabel}>
            Trade Licence Number
          </Text>
          <TextInput
            style={CustomStyle.inputStyle}
            placeholderTextColor="rgb(210, 210, 210)"
            placeholder="Company Registered ID"
            className="!border-none pl-4 !border-white"
            borderRadius={10}
            name="tradeLicenseNo"
            value={values.tradeLicenseNo}
            onChangeText={handleChange('tradeLicenseNo')}
            onBlur={handleBlur('tradeLicenseNo')}
          />
          <Text
            className="pl-1 mt-1"
            style={CustomStyle.inputLabel}>
            Company Address Line 1 <VelidationSymbol/>
          </Text>
          <TextInput
            style={CustomStyle.inputStyle}
            placeholderTextColor="rgb(210, 210, 210)"
            placeholder="Enter Address line 1"
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

          <Text
            className="pl-1 mt-1 "
            style={CustomStyle.inputLabel}>
            Company Address Line 2
          </Text>
          <TextInput
            style={CustomStyle.inputStyle}
            placeholderTextColor="rgb(210, 210, 210)"
            placeholder="Enter Address line 2"
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
          <View className="flex flex-row justify-between gap-x-2">
            <View style={styles.inputContainer}>
              <Text
                className="pl-1"
                style={CustomStyle.inputLabel}>
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
                style={CustomStyle.inputLabel}>
                PO Box <VelidationSymbol/>
              </Text>
              <TextInput
                style={[
                  {
                    backgroundColor: 'white',
                    paddingVertical: 6,
                    paddingLeft: 10,
                    borderRadius: 10,
                    color:"#cbcbcb"
                  },
                  {width: '100%'},
                ]}
                placeholder="Enter PO"
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
          <Divider className="bg-[#cbcbcb] mt-3"></Divider>
          <Addbutton
            inputs={inputs}
            setInputs={setInputs}
            errors={errors}
            handleAddPair={handleAddPair}
            handleDeletePair={handleDeletePair}
            handlePairInputChange={handlePairInputChange}
            values={values}
          />
        </SafeAreaView>
        <View className="pt-5">
          <TouchableOpacity
            onPress={() => {
              toggle ? handleSubmit() : null;
            }}
            style={toggle ? styles.button : styles.button1}
            className="flex flex-row items-center justify-center">
            <Text
              className="text-white flex flex-row  text-[19px]"
              style={{fontFamily: ROBOTO.RobotoRegular}}>
              PROCEED
            </Text>
            {toggle ?null :
              <ActivityIndicator size="small" className="pl-2" color="#fff" />}
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
  button: {
    backgroundColor: '#F96900',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
  },
  button1: {
    backgroundColor: '#F6E0D1',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
  },
  container: {
    height: 15,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  bar: {
    height: 5,
    backgroundColor: '#F96900',
    borderRadius: 10,
  },
  inputContainer: {
    flex: 1,
    marginVertical: 5,
    borderWidth: 0,
  },
  errorHandle: {
    color: 'red',
    fontFamily: 'Poppins-Medium',
    paddingLeft: 15,
    fontSize: 12,
  },
});
