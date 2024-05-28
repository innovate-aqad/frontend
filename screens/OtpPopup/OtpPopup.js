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
  Modal,
  Button,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFormik} from 'formik';
import axios from 'axios';
import {environmentVariables} from '../../config/Config';
import {OtpSchema} from '../../schemas/OtpSchema';

import OTPTextInput from 'react-native-otp-textinput';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

const OtpPopup = ({openPopup, setOpenPopup, setVerified, email}) => {
  const otpInputRef = useRef(null);
  const [num1,setNum1]=useState()
  const handleSubmitPopup = () => {
    // Your submit logic here
    setVerified(true);
    setOpenPopup(false);
  };

  const initialValues = {
    otp: '',
  };

  console.log(num1,"num1num1num1")

  let formik = useFormik({
    initialValues,
    validationSchema: OtpSchema,
    onSubmit: async (values, action) => {
      await axios({
        method: 'get',
        url: `${environmentVariables?.apiUrl}/api/user/verfy_otp_with_email?email=${email}&otp=${values?.otp}`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          console.log(response.data, 'otpres');

          if (response?.data?.success) {
            setVerified(true);
            setOpenPopup(false);
          } else {
            setVerified(false);
            action.setFieldError(
              'otp',
              response?.data?.message || 'OTP verification failed',
            );
          }
          //   action.resetForm();
          //   ToastAndroid.showWithGravityAndOffset(
          //     response.data.message,
          //     ToastAndroid.LONG,
          //     ToastAndroid.CENTER,
          //     25,
          //     50,
          //   );

          //   navigation.navigate('dashboard');
        })
        .catch(error => {
          console.log('error', error?.message, error.response.data.message);
          setVerified(false);
          action.setFieldError(
            'otp',
            error.response?.data?.message || 'OTP verification failed',
          );

          //   ToastAndroid.showWithGravityAndOffset(
          //     error.response.data.message,
          //     ToastAndroid.LONG,
          //     ToastAndroid.CENTER,
          //     25,
          //     50,
          //   );
        });
    },
  });
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    formik;


  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={openPopup}
      onRequestClose={() => {
        setOpenPopup(!openPopup);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={() => setOpenPopup(false)}>
            <Icon name="close" size={16} color="red" />
          </TouchableOpacity>
          
          <View className="w-full mb-6">
            {/* <TextInput
            style={styles.input}
            value={values.otp}
            onChangeText={handleChange('otp')}
            onBlur={handleBlur('otp')}
            placeholderTextColor="rgb(210, 210, 210)"
            placeholder="Enter OTP"
            className="!border-none pl-4 py-1.5 !border-white"
            borderRadius={18}
          /> */}
          <View className="flex flex-col items-center justify-center w-full">
            <Text className="text-[#00274d] font-[Roboto-Bold]">Enter OTP Code</Text>
          </View>
            <OTPTextInput
              ref={otpInputRef}
              handleTextChange={text => formik.setFieldValue('otp', text)}
              onBlur={handleBlur('otp')}
              tintColor={'red'}
              textInputStyle={{
                color: '#00274d',
                fontFamily: 'Roboto-ExtraBold',
              }}
            />
            {errors.otp && touched.otp && (
              <Text style={{color: 'red', paddingLeft: 5, fontSize: 12}}>
                {errors.otp}
              </Text>
            )}
          </View>

          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.closeText}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: 4,
    marginTop: 40,
    borderWidth: 1,
    borderColor: 'gray',
    color: 'gray',
    backgroundColor: 'white',
    fontFamily: 'Poppins-Light',

    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#F96900',
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
  },
  bar: {
    height: 5,
    backgroundColor: '#F96900',
    borderRadius: 10,
  },
  containerDate: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 250,
  },
  datePicker: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 250,
    height: 250,
  },
  datePickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorHandle: {
    color: 'red',
    paddingLeft: 20,
    fontSize: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalInput: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  closeText: {
    backgroundColor: '#F96900',
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 50,
    color: 'white',
    fontFamily: 'Roboto-Regular',
    borderRadius: 10,
    fontSize: 18,
    marginTop: 10,
    
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor:"#cbcbcb",
    borderRadius:15,
    padding:2
  },
});

export default OtpPopup;
