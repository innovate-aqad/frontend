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
import {RetailerRegisterSchema2} from '../../schemas/RetailerRegisterSchema2';
import AddbuttonForRetailer from '../AddButton/AddbuttonForRetailer';
import axios from 'axios';
import {environmentVariables} from '../../config/Config';
import {success} from '../../constants/ToastMessage';
import VelidationSymbol from '../../constants/VelidationSymbol';
import CustomStyle from '../../Styles';
import {POPPINS, ROBOTO} from '../../constants/CustomFontFamily';
import {blue, textColorCustom, white} from '../../constants/Theme';
export default function VendorBusiness(nav) {
  const [toggle, setToggle] = useState(true);
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
    outlet_addresses: [{address: '', po_box: '', is_default: false}],
  };

  let formik = useFormik({
    initialValues,
    validationSchema: RetailerRegisterSchema2,
    onSubmit: async values => {
      const hasDefault = values.outlet_addresses.some(pair => pair.is_default);

      if (!hasDefault) {
        formik.setErrors({
          outlet_addresses:
            'At least one outlet address must be set as default.......',
        });
        return;
      }

      setToggle(false);
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
          nav.navigation.navigate('reatilerdocs', {id: response.data.data.id});
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

  console.log(
    '888888',
    errors?.outlet_addresses,
    'values?.outlet_addresses',
    values?.outlet_addresses,
  );
  const handleAddPair = () => {
    formik.setValues({
      ...values,
      outlet_addresses: [
        ...values.outlet_addresses,
        {address: '', po_box: '', is_default: false},
      ],
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

  const handleRadioButtonChange = index => {
    const updatedPairs = values.outlet_addresses.map((address, i) => ({
      ...address,
      is_default: i === index,
    }));
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
          <Image
            style={styles.topNavigation}
            source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </View>

        <View className="mt-8">
          <Text style={CustomStyle.signupHeading}>Retailer Info</Text>
          <Text style={CustomStyle.signupSubDec}>
            Pick the type of account that suits your business or personal needs.
          </Text>
        </View>
        <View className="mt-5">
          <View>
            <View className="flex flex-col">
              <View className="flex flex-row justify-between ">
                <Text
                  style={{
                    fontFamily: POPPINS.PoppinsRegular,
                    color: textColorCustom,
                  }}>
                  Profile Upload (2/3)
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

            <View>
              <Text
                className="text-[20px] text-[#00274D] pt-5"
                style={{fontFamily: 'Roboto-Medium'}}>
                Business Information
              </Text>
            </View>

            <SafeAreaView>
              <Text className="pl-1 mt-5" style={CustomStyle.inputLabel}>
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

              <Text style={styles.textStyle}>
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
              <Text style={styles.textStyle}>
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
                <Text style={styles.errorHandle}>
                  {errors.companyAddressline2}
                </Text>
              )}

              {/* side  */}
              <View className="flex flex-row justify-between mt-2 gap-x-1">
                <View style={styles.inputContainer}>
                  <Text
                    className="pl-1"
                    style={{fontFamily: POPPINS.PoppinsMedium, color: blue}}>
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
                    style={{fontFamily: POPPINS.PoppinsMedium, color: blue}}>
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
              <AddbuttonForRetailer
                inputs={inputs}
                setInputs={setInputs}
                errors={errors}
                handleAddPair={handleAddPair}
                handleDeletePair={handleDeletePair}
                handlePairInputChange={handlePairInputChange}
                values={values}
                handleRadioButtonChange={handleRadioButtonChange}
              />

              {/* {errors?.outlet_addresses && touched?.outlet_addresses && (
                <Text style={styles.errorHandle}>
                  {errors?.outlet_addresses}
                </Text>
              )} */}
            </SafeAreaView>
          </View>
          <View className="pt-5">
            <TouchableOpacity
              onPress={() => {
                toggle ? handleSubmit() : null;
              }}
              style={toggle ? styles.button : styles.button1}
              className="flex flex-row items-center justify-center">
              <Text
                className="flex flex-row  text-[19px]"
                style={{fontFamily: ROBOTO.RobotoRegular, color: white}}>
                {toggle ? (
                  'PROCEED'
                ) : (
                  <ActivityIndicator
                    size="small"
                    className="pl-2"
                    color="#fff"
                  />
                )}
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
    fontFamily: POPPINS.PoppinsMedium,
    paddingLeft: 4,
    marginTop: 4,
  },
  button1: {
    backgroundColor: '#F6E0D1',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
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
    backgroundColor: white,
    fontFamily: POPPINS.PoppinsLight,
  },
  button: {
    backgroundColor: textColorCustom,
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
    backgroundColor: textColorCustom,
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
  errorHandle: {
    color: 'red',
    fontFamily: POPPINS.PoppinsMedium,
    paddingLeft: 15,
    fontSize: 12,
  },
});
