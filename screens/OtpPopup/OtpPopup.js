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
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFormik} from 'formik';
import axios from 'axios';
import {environmentVariables} from '../../config/Config';
import {OtpSchema} from '../../schemas/OtpSchema';

const OtpPopup = ({openPopup, setOpenPopup, setVerified, email}) => {
  console.log('hhh');
  const handleSubmitPopup = () => {
    // Your submit logic here
    setVerified(true);
    setOpenPopup(false);
  };

  const initialValues = {
    otp: '',
  };
  console.log;
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
  console.log('0909909', errors, values?.otp, email);
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
            <Icon name="close" size={24} color="black" />
          </TouchableOpacity>
          <TextInput
            // style={styles.modalInput}
            style={styles.input}
            value={values.otp}
            onChangeText={handleChange('otp')}
            onBlur={handleBlur('otp')}
            placeholderTextColor="rgb(210, 210, 210)"
            placeholder="Enter OTP"
            className="!border-none pl-4 py-1.5 !border-white"
            borderRadius={18}
          />
          {errors.otp && touched.otp && (
            <Text style={{color: 'red'}}>{errors.otp}</Text>
          )}

          <Button title="Submit" onPress={handleSubmit} />
          {/* <TouchableOpacity onPress={() => setOpenPopup(false)}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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

    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 20,
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
    color: 'blue',
    marginTop: 15,
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default OtpPopup;
