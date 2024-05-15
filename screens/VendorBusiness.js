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
  ToastAndroid
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Badge, IconButton} from 'react-native-paper';
import Addbutton from './Addbutton';
import { useFormik } from 'formik';
import { VendorRegisterSchema2 } from '../schemas/VendorRegiterSchema2';
import { userData } from '../getuserdata/GetUserData';
import axios from 'axios';
export default function VendorBusiness(nav) {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [inputs, setInputs] = useState([{ address: '', po_box: '' }]);
  const mainId = nav.route.params.id;


  
  const initialValues = {
    companyName: "",
    designation: "",
    tradeLicenseNo : "",
    companyAddress : "",
    companyAddressline2 : "",
    vendorPoBox : "",
    country: "", 
    warehouse_addresses: [{ address: '', po_box: '' }],
  };

  let formik =  useFormik({
      initialValues,
      validationSchema: VendorRegisterSchema2,
      onSubmit: async (values, action) => {
      
        console.log("values",values)
        const formdata = {
          company_name: values.companyName,
          slide : "2",
          user_type : "vendor",
          designation: values.designation,
          trade_license_number: values.tradeLicenseNo,
          company_address: values.companyAddress,
          company_address_line_2: values.companyAddressline2,
          po_box : values.vendorPoBox,
          country : values.country,
          warehouse_addresses : values?.warehouse_addresses,
          doc_id : mainId
        };
        console.log(formdata,"llll...");
        await axios({
          method: "post",
          url: `http://localhost:2000/api/user/register`,
        
            headers :{
              "Content-Type":"application/json"
            }
          ,
          data: formdata,
        })
          .then((response) => {
            console.log("565656556",response.data,"hhhhhh",response.data.data)
            ToastAndroid.showWithGravityAndOffset(
              response.data.message,
              ToastAndroid.LONG,
              ToastAndroid.CENTER,
              25,
              50,
            );
            nav.navigation.navigate('document',{ id : response.data.data.id });
          })
          .catch((error) => {
            console.log("error...",error.response.data.message);
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
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik

  const handleAddPair = () => {
    formik.setValues({
      ...values,
      warehouse_addresses: [...values.warehouse_addresses, { address: '', po_box: '' }],
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

  useEffect(async() => {
    const getUserData = await userData()
    // console.log("hhhhhhh",getUserData)


    Animated.timing(progress, {
      toValue: 160,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [])
  
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
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
              placeholder="Enter Company Name"
              className="!border-none pl-4 !border-white"
              borderRadius={10}

              name="companyName"
              value={values.companyName}
              onChangeText={handleChange('companyName')}
              onBlur={handleBlur('companyName')}
            />
             {errors.companyName && touched.companyName && <Text style={{ color: 'red' }}>{errors.companyName}</Text>}

            <Text
              className="text-[#00274D] px-3"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Designation
            </Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgb(210, 210, 210)"
              placeholder="Designation"
              className="!border-none pl-4 !border-white"
              borderRadius={10}

              name="designation"
              value={values.designation}
              onChangeText={handleChange('designation')}
              onBlur={handleBlur('designation')}
            />
             {errors.designation && touched.designation && <Text style={{ color: 'red' }}>{errors.designation}</Text>}


            <Text
              className="text-[#00274D] px-3"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Trade Licence Number
            </Text>
            <TextInput
              style={styles.input}
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
              className="text-[#00274D] px-3"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Company Address Line 1
            </Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgb(210, 210, 210)"
              placeholder="Enter Address line 1"
              className="!border-none pl-4 !border-white"
              borderRadius={10}

              name="companyAddress"
              value={values.companyAddress}
              onChangeText={handleChange('companyAddress')}
              onBlur={handleBlur('companyAddress')}
            />
             {errors.companyAddress && touched.companyAddress && <Text style={{ color: 'red' }}>{errors.companyAddress}</Text>}


            <Text
              className="text-[#00274D] px-3"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Company Address Line 2 (optional)
            </Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgb(210, 210, 210)"
              placeholder="Enter Address line 2"
              className="!border-none pl-4 !border-white"
              borderRadius={10}

              name="companyAddressline2"
              value={values.companyAddressline2}
              onChangeText={handleChange('companyAddressline2')}
              onBlur={handleBlur('companyAddressline2')}
            />
            {errors.companyAddressline2 && touched.companyAddressline2 && <Text style={{ color: 'red' }}>{errors.companyAddressline2}</Text>}

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
                  placeholder="United Arab Emirates"
                  placeholderTextColor="rgb(210, 210, 210)"
                  
                  name="country"
                  value={values.country}
                  onChangeText={handleChange('country')}
                  onBlur={handleBlur('country')}
                />
              {errors.country && touched.country && <Text style={{ color: 'red' }}>{errors.country}</Text>}

              </View>
              <View style={styles.inputContainer}>
                <Text
                  className="text-[#00274D] px-3 pt-0"
                  style={{fontFamily: 'Poppins-SemiBold'}}>
                  PO Box
                </Text>
                <TextInput
                  style={[styles.input, {width: '100%'}]}
                  placeholder="Enter PO"
                  placeholderTextColor="rgb(210, 210, 210)"

                  name="vendorPoBox"
                  value={values.vendorPoBox}
                  onChangeText={handleChange('vendorPoBox')}
                  onBlur={handleBlur('vendorPoBox')}
                />
              </View>
             {errors.vendorPoBox && touched.vendorPoBox && <Text style={{ color: 'red' }}>{errors.vendorPoBox}</Text>}

            </View>
            {/* <Text
              className="text-[#00274D] px-3"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Warehouse Address
            </Text> */}
            {/* <TextInput
              style={styles.input}
              placeholderTextColor="rgb(210, 210, 210)"
              placeholder="Enter your Name"
              className="!border-none pl-4 !border-white"
              borderRadius={10}
            /> */}
            <Addbutton inputs={inputs} setInputs={setInputs} errors={errors} handleAddPair={handleAddPair} handleDeletePair={handleDeletePair} handlePairInputChange={handlePairInputChange} values={values}/>
            {errors.warehouse_addresses && (
              <Text style={{ color: 'red' }}>At least one pair of warehouse address and PO Box is required</Text>
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
    </ScrollView>
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
});


// {"navigation": { "route": {  "params": {"id": "bb0420261bde4d88b7c76fef46fc2cac"}}}qa