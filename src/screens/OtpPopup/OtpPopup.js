import {StyleSheet, Text, TouchableOpacity, View, Modal} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useFormik} from 'formik';
import axios from 'axios';
import {environmentVariables} from '../../config/Config';
import {OtpSchema} from '../../schemas/OtpSchema';

import OTPTextInput from 'react-native-otp-textinput';
import {success} from '../../constants/ToastMessage';
import {POPPINS, ROBOTO} from '../../constants/CustomFontFamily';
import {blue, textColorCustom, white} from '../../constants/Theme';
import VerificationSuccessfully from '../../Shared/VerificationSuccessfully';

const OtpPopup = ({openPopup, setOpenPopup, setVerified, email,setSuccessMessage}) => {
  const otpInputRef = useRef(null);
  const [num1, setNum1] = useState();
  
  const handleSubmitPopup = () => {
    // Your submit logic here
    setVerified(true);
    setOpenPopup(false);
  };

  const initialValues = {
    otp: '',
  };

  console.log(num1, 'num1num1num1');

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
          success({type: 'success', text: response.data.message});
          setSuccessMessage(true);
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
        })
        .catch(error => {
          success({type: 'error', text: error?.response?.data?.message});
          setVerified(false);
          action.setFieldError(
            'otp',
            error.response?.data?.message || 'OTP verification failed',
          );
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
            <View>
              <Text
                style={{
                  fontFamily: ROBOTO.RobotoMedium,
                  color: blue,
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                Check Your Email
              </Text>
              <Text
                style={{
                  fontFamily: POPPINS.PoppinsLight,
                  color: blue,
                  fontSize: 10,
                  textAlign: 'center',
                  marginTop: 2,
                }}>
                We've sent OTP on your registered Email no
              </Text>
            </View>

            <View className="w-full my-4">
              <Text
                style={{
                  fontFamily: POPPINS.PoppinsMedium,
                  color: textColorCustom,
                  fontSize: 13,
                  textAlign: 'center',
                }}>
                {email}
              </Text>
              <View className="flex flex-col items-center justify-center w-full mt-3 mb-4">
                <Text
                  style={{
                    fontFamily: POPPINS.PoppinsMedium,
                    color: blue,
                    fontSize: 13,
                  }}>
                  Enter OTP
                </Text>
              </View>
              <OTPTextInput
                ref={otpInputRef}
                handleTextChange={text => formik.setFieldValue('otp', text)}
                onBlur={handleBlur('otp')}
                tintColor={'red'}
                textInputStyle={styles.inputOTP}
              />
              {errors.otp && touched.otp && (
                <Text style={{color: 'red', paddingLeft: 5, fontSize: 12}}>
                  {errors.otp}
                </Text>
              )}
            </View>
            <View className="flex flex-row items-center gap-2">
              <Text
                style={{
                  color: blue,
                  fontSize: 13,
                  fontFamily: ROBOTO.RobotoRegular,
                }}>
                Didn't receive OTPP ?
              </Text>
              <Text
                style={{
                  color: textColorCustom,
                  fontSize: 13,
                  fontFamily: ROBOTO.RobotoRegular,
                }}>
                Resend
              </Text>
            </View>

            <View className="flex flex-row mt-4 gap-x-2">
              <TouchableOpacity
                onPress={() => setOpenPopup(false)}
                style={styles.closeText}>
                <Text
                  style={{
                    fontFamily: ROBOTO.RobotoRegular,
                    fontSize: 13,
                    color: textColorCustom,
                    textAlign: 'center',
                  }}>
                  Close
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSubmit}
                style={{
                  height: 35,
                  width: 100,
                  borderRadius: 5,
                  backgroundColor: textColorCustom,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: ROBOTO.RobotoRegular,
                    fontSize: 13,
                    color: white,
                    textAlign: 'center',
                  }}>
                  Verify
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  inputOTP: {
    color: '#00274d',
    fontFamily: 'Roboto-ExtraBold',
    borderRadius: 10,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#00274d',
    width: 45,
    height: 50,
    textAlign: 'center',
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
  closeText: {
    height: 35,
    width: 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: textColorCustom,
    justifyContent: 'center',
  },
});

export default OtpPopup;
