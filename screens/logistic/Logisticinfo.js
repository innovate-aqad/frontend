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
  ToastAndroid,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Avatar} from 'react-native-paper';
import CountryPicker from 'react-native-country-picker-modal';
import ImagePicker from 'react-native-image-crop-picker';
import {useFormik} from 'formik';
import {LogisticRegisterSchema} from '../../schemas/LogisticRegisterSchema';
import axios from 'axios';
import {environmentVariables} from '../../config/Config';
import {SendOtpSchema} from '../../schemas/SendOtpSchema';
import OtpPopup from '../OtpPopup/OtpPopup';
export default function VendorInfo(nav) {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [image, setImage] = useState('');
  const [countryCode, setCountryCode] = useState('AE'); // Default country code
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateSelected, setDateSelected] = useState('');
  const [toggle, setToggle] = useState(true);

  const [errorValue, setErrorValue] = useState('');
  const [openPopup, setOpenPopup] = useState(false);
  const [verified, setVerified] = useState(false);

  const redirectPorceed = () => {
    nav.navigation.navigate('retailerbusi');
    // nav.navigation.navigate('bottomTab');
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDateSelected(moment(date).format('YYYY-MM-DD'));
    formik.setFieldValue('dateOfBirth', moment(date).format('YYYY-MM-DD'));
    hideDatePicker();
  };

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 100,
      duration: 2000,
    }).start();
  }, []);

  const initialValues = {
    fullName: '',
    email: '',
    country: '+971',
    number: '',
    dateOfBirth: '',
    isoCode: 'AE',
    image: '',
  };

  let formik = useFormik({
    initialValues,
    validationSchema: LogisticRegisterSchema,
    onSubmit: async (values, action) => {
      setToggle(false);
      const formdata = new FormData();
      formdata.append('name', values.fullName);
      formdata.append('slide', '1');
      formdata.append('user_type', 'logistic');
      if (values?.image) {
        formdata.append('profile_photo', {
          uri: values.image.path,
          type: values.image.mime,
          name: `image.${values.image.mime.split('/')[1]}`,
        });
      }
      formdata.append('email', values.email);
      formdata.append('country', values.isoCode);
      formdata.append('phone', `${values.country}-${values?.number}`);
      formdata.append('dob', values.dateOfBirth);
      console.log(formdata, 'llll');
      await axios({
        method: 'post',
        url: `${environmentVariables?.apiUrl}/api/user/register`,
        headers: {
          'Content-Type': 'multipart/form-data',
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
          nav.navigation.navigate('logisbusiness', {id: response.data.data.id});
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
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
  } = formik;

  const onSelectCountry = country => {
    const callingCodeWithPlus = `+${country.callingCode[0]}`;
    formik.setFieldValue('country', callingCodeWithPlus);

    formik.setFieldValue('isoCode', country.cca2);
    setCountryCode(country.cca2);
  };

  const selectPhoto = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      includeBase64: false,
      cropperCircleOverlay: true,
      avoidEmptySpaceAroundImage: true,
      freeStyleCropEnabled: true,
    }).then(image => {
      formik.setFieldValue('image', image);
      setImage(image?.path);
    });
  };

  const renderCountry = country => {
    return <Text>{country.callingCode}</Text>;
  };

  const sendOtp = async email => {
    try {
      await SendOtpSchema.validate({email});
      // console.log('oooo', responseData);
      setErrorValue('');

      const response = await axios.get(
        `${environmentVariables?.apiUrl}/api/user/send_otp_to_email?email=${email}`,
      );
      console.log('response', response?.data?.success);
      if (response?.data?.success) {
        setOpenPopup(true);
      } else {
        setOpenPopup(false);
      }
    } catch (validationError) {
      setErrorValue(validationError.message);
    }
  };

  const handleNameChange = text => {
    const regex = /^[a-zA-Z\s]*$/;
    if (regex.test(text)) {
      formik.setFieldValue('fullName', text);
    }
  };
  const handleNumberChange = text => {
    const regex = /^[0-9\s]*$/;
    if (regex.test(text)) {
      formik.setFieldValue('number', text);
    }
  };
  return (
    <ScrollView>
      <View
        className="flex flex-col p-4   h-full bg-gray-100 !text-black
        ">
        <View className="relative flex flex-row items-center top-3 ">
          <TouchableOpacity onPress={() => nav.navigation.navigate('signup')}>
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
            Logistic Partner Info
          </Text>
          <Text
            className="pt-2 text-xs text-gray-400"
            style={{fontFamily: 'Poppins-Light'}}>
            Pick the type of account that suits your business or personal needs.
          </Text>
        </View>
        <View className="mt-5">
          <View className="flex flex-col">
            <View className="flex flex-row justify-between ">
              <Text
                className="text-[#F96900]"
                style={{fontFamily: 'Poppins-Regular'}}>
                Profile Upload (1/4)
              </Text>
              <Text
                className="text-[#F96900]"
                style={{fontFamily: 'Poppins-Regular'}}>
                36%
              </Text>
            </View>

            <View className="bg-[#F6E0D1] rounded-[10px]">
              <Animated.View style={[styles.bar, {width: progress}]} />
            </View>
          </View>

          <View>
            <Text
              className="text-[20px] text-[#00274D] pt-3"
              style={{fontFamily: 'Roboto-Medium'}}>
              Personal Information
            </Text>
          </View>

          <View className="pt-6" style={styles.user}>
            <TouchableOpacity onPress={() => selectPhoto()}>
              <Avatar.Image
                size={80}
                style={styles.avatar}
                source={{
                  uri:
                    image == '' || image == null
                      ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAM1BMVEXFzeD////Byt7L0uPByd7Q1+b7/P3j5/Dv8fbe4+3r7vTFzuDL0+P19/rn6/LZ3urW2+lU+LHUAAAFLklEQVR4nO2dC3arMAxEQXwCcfjsf7XPkLw2tEka5AEziu8CeuKpJVmyLLIskUgkEkdFbsT+HXEQKbNqOPWN59y72D9nd/z/vWqbOv/mozSY9n116vIl1acYg1++G9v+5/rzvMs+QwL/7x/O9a/lT5zL2D9uF7wAzcP1e+pP2AQi4/mZAJ6TfQ3EtY9N4D+jdQ2k6F8K4OltayDFKyP4cghmI6PzVvDnHrDuEqR9UwFPY1IEufw+C72yh8LeIUFOaxSY6K0dFt2qTXDDVJCUi0IBT2vHHmTUSWAnPjgZtBJ4p2BjJ4RIYCSHlCpEAi+CAXMowiSwIIJoguKSE7k5rD8aPWDg3gnKg8EPLrGXEUL5tGC2ijr2OkIIjAlfEJdVBLMNcmprQEnAW09YUzT5C9aNADgbfMGaPQlOgrwj1cAlDZIGGVYD2ktIpAasiRNQgzxpkOektoCMjUkDT+zFaEFqwNqohtSgiL0YHcHlVAMaoCooM6SJo/qK7RGk+yBpkGVBl2w2NAi7aEwamNEAWE5MGiQNkgZJg6RB0sCEBoj+C3YN0j5IGkyks3LKnSegdaSkQdIgaUCtwcf7RJHy02OjVG3/+knvSlxJd+uK7Emb6eqOrQVBoJvgCtu16xYasF23QXsPWDVI+yArN9CALTyW6LhAqAE8NuaEcQH2fOMbtkNS+e7IC8MaYIuJM3TnRGwxcYbvPQ+0eDBD95TFIRv3rwyx17Qa/EGRbmqSAz1xvSP2ktaDvW3MOV9xoJ0i43tftEPgc4n4U1Ls9ajAbgTOkSCh02AW1GxJ4w2gCKwSIAspF0pLmIB5BNaXvhnwnMSXMn6DqrBzBoUrqKoiXdp8B6qqWMVeSADyzijhNyDeBiinyOwSUc95uAemYZ66sl0wLYGcFPmK6gsgCTRzZJxAlJe5TQFyQiA3hQxRVuSOChPBXrEW2trBf/RDts1sg+C8iXZA1oKwc9IY++dDCDojUKcKd5T67JF6ou4C9SHBhjO4os2hiWupv1Hm0JY00LpFKx5xQmsLpjRQdisy19R/om3MsaSB9rxsSgOdBKY00E5SZOxBeoa2kGJJA+01gyEN1JmjJQ20jxnYq+p3qPNGQxqo66qtHQ3UfUlJA0MalKJ+8NnyPfh/hFzOnbpFr6vP7JeNGaALw0BJMfzemT4+IhqSYq8hFESDInNj3ky4BPSXroieLPZDAuI7nuROsUS84iAvqKmT5gWxVxEIQgJuY8BsA+6NgPmyMXVkQHXuM+cMuBEIjO98Z4K78r5pOFtVpWiRn7Qd+aop5QU9AqJuMyYVRKoNJkT58OD/cuy1vYUX4LTBvLgrzVAcXwYpthPgSjcc2ybkgjoRvKQvjqrCVl7gEU11RJMQGTeYFvicbjyaCnsrMFG3R1JBsnZjR/hEhf4gJiHi0NOg1nCOL8OejvAJ3RBTBScy7O4GHlCfXCwV4hrBkvMlQmYpZXQjWLJ7sJTyEEawZNfMsowUC/+m38kxiNtgbDCMZgfHIMUuaVEA3cYnBnx5aAu8e9xMASkYFJjoNpo/K+7oVnBPg68xuKw8zoHoPXp0pCzHg0bDV0CTa3EsjmBJjUunsB9u35Ua08wkGecmuIEIEVIReoIFwTf38JHhEQgcxuqOlx4qCBFBCnY7uKH/uhV0SHRU9CNFUO1EB0A9TMKIIczoggP+QxpRUQ0cM+MMrmiezG7x0bmoKDYCZhLqgVjf8WvhfLhkfaPnFt/di8zq6XNbfIczMqsHDW3xTdrYPFvrP7kiUsVMV4ODAAAAAElFTkSuQmCC'
                      : image,
                }}
              />
              <View className="relative top-[-12px] ">
                <MaterialIcons
                  name={'edit'}
                  style={{
                    position: 'absolute',
                    backgroundColor: '#E6E9F4',
                    color: 'blue',
                    borderRadius: 100,
                    padding: 6,
                    Index: 1,
                    top: -7,
                    right: -3,
                    fontSize: 15,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          {/* input fields */}
          <SafeAreaView>
            <Text
              className="text-[#00274D] px-3"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Full Name
            </Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgb(210, 210, 210)"
              placeholder="Enter your Name"
              className="!border-none pl-4 !border-white"
              borderRadius={10}
              name="fullName"
              value={values.fullName}
              onChangeText={handleNameChange}
              onBlur={handleBlur('fullName')}
            />
            {errors.fullName && touched.fullName && (
              <Text style={styles.errorHandle}>{errors.fullName}</Text>
            )}

            <Text
              className="text-[#00274D] px-3"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Email
            </Text>
            <View className="flex flex-row items-center pr-1.5 justify-between w-full bg-white rounded-[10px] py-0">
              <TextInput
                style={styles.input}
                placeholderTextColor="rgb(210, 210, 210)"
                placeholder="Example@gmail.com"
                className="!border-none pl-4 !border-white"
                borderRadius={10}
                name="email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              {verified ? (
                <Text className="text-[10px] text-[#21d59b]">Verified</Text>
              ) : (
                <Text
                  className="text-[10px] text-[#f96900]"
                  onPress={() => sendOtp(values.email)}>
                  Verify
                </Text>
              )}
            </View>
            {errorValue ? (
              <Text style={{color: 'red'}}>{errorValue}</Text>
            ) : (
              errors.email &&
              touched.email && (
                <Text style={{color: 'red'}}>{errors.email}</Text>
              )
            )}

            <Text
              className="text-[#00274D] px-3"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Phone Number
            </Text>
            <View className="flex flex-row items-center pl-2 w-full bg-white rounded-[10px] py-0">
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
              <Text className="pl-2 text-xl text-[#cbcbcb]">|</Text>
              <View className="flex flex-row items-center justify-between w-[70%]">
                <TextInput
                  placeholderTextColor="rgb(210, 210, 210)"
                  placeholder="Enter your phone number"
                  className="!border-none py-1.5 pl-2  !border-white text-[#cbcbcb]"
                  name="number"
                  value={values.number}
                  onChangeText={handleNumberChange}
                  onBlur={handleBlur('number')}
                  maxLength={14}
                />
                <Text
                  className={
                    values.number.length >= 10
                      ? 'text-[10px] text-[#21d59b]'
                      : 'text-[10px] text-[#f96900]'
                  }>
                  {values.number.length >= 10 ? 'Verified' : 'Invalid'}
                </Text>
              </View>
            </View>
            {errors.number && touched.number && (
              <Text style={styles.errorHandle}>{errors.number}</Text>
            )}
            <Text
              className="text-[#00274D] px-3 mt-2"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Date of Birth
            </Text>

            <View className="w-full ">
              <TouchableOpacity
                className="flex flex-row w-full"
                style={[
                  styles.input,
                  {
                    borderWidth: 0,
                    borderRadius: 10,
                    paddingVertical: 8,
                    width: '100%',
                  },
                ]}
                onPress={showDatePicker}
                title="Show date picker!">
                <View className="">
                  <Text
                    className="flex flex-row w-full font-[Poppins-Light] text-[13px]"
                    style={{color: '#cbcbcb', paddingHorizontal: 10, flex: 1}}>
                    {dateSelected
                      ? moment(dateSelected).format('DD / MM / YYYY')
                      : 'DD / MM / YYYY'}
                  </Text>
                </View>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  // onChange={dateFunction}
                  onCancel={hideDatePicker}
                  customStyles={{
                    datePicker: styles.datePicker,

                    datePickerContainer: styles.datePickerContainer,
                  }}
                />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
        <View className="pt-5">
          <TouchableOpacity
            onPress={() => handleSubmit()}
            disabled={!verified || !isValid}
            style={[
              styles.button,
              (!verified || !isValid) && styles.disabledButton,
            ]}>
            <Text
              className="text-white flex flex-row  text-[18px]"
              style={{fontFamily: 'Roboto-Regular'}}>
              PROCEED
            </Text>
            {toggle ? null : (
              <ActivityIndicator
                size="small"
                className="ml-5"
                color="#00274d"
              />
            )}
          </TouchableOpacity>
        </View>
        {openPopup && (
          <OtpPopup
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            setVerified={setVerified}
            email={values?.email}
          />
        )}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  topNavigation: {
    height: 15,
    width: 23.3,
  },
  button1: {
    backgroundColor: '#F6E0D1',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
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
  errorHandle: {
    color: 'red',
    paddingLeft: 20,
    fontSize: 12,
  },
  disabledButton: {
    backgroundColor: '#F96900',
    opacity: 0.5, // Add opacity to make it look blurred
  },
});
