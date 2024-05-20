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
import {Avatar} from 'react-native-paper';
import CountryPicker from 'react-native-country-picker-modal';
import ImagePicker from 'react-native-image-crop-picker';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Badge, IconButton} from 'react-native-paper';
import {useFormik} from 'formik';
import {RetailerRegisterSchema} from '../../schemas/RetailerRegisterSchema';
import axios from 'axios';
import {environmentVariables} from '../../config/Config';
export default function VendorInfo(nav) {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [image, setImage] = useState('');
  const [countryCode, setCountryCode] = useState('AE'); // Default country code

  const redirectPorceed = () => {
    nav.navigation.navigate('retailerbusi');
    // nav.navigation.navigate('bottomTab');
  };

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 75,
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
    validationSchema: RetailerRegisterSchema,
    onSubmit: async (values, action) => {
      console.log('kkkeeee', values.image);
      const formdata = new FormData();
      formdata.append('name', values.fullName);
      formdata.append('slide', '1');
      formdata.append('user_type', 'seller');
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
          console.log(
            'res_retail',
            response.data.data.id,
            response.data,
            'hhhhhh',
          );
          ToastAndroid.showWithGravityAndOffset(
            response.data.message,
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            25,
            50,
          );
          nav.navigation.navigate('retailerbusi', {id: response.data.data.id});
        })
        .catch(error => {
          console.log(
            'err_retail...',
            error.response.data.message,
            error?.message,
          );
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

  return (
    <ScrollView>
      <View
        className="flex flex-col p-4   h-full bg-gray-100 !text-black
        ">
        <View className="relative flex flex-row items-center top-3 ">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.topNavigation}
              source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
            />
          </TouchableOpacity>
        </View>
        <View className="mt-5">
          <Text
            className="text-[35px] text-[#00274D]"
            style={{fontFamily: 'Poppins-bold'}}>
            Retailer Info
          </Text>
          <Text
            className="pt-2 text-xs text-gray-400"
            style={{fontFamily: 'Poppins-Light'}}>
            Pick the type of account that suits your business or personal needs.
          </Text>
        </View>
        <View className=" pt-10 ">
          {/* progressbar */}
          <View style={styles.container}>
            {/* <Text>progress</Text> */}
            <Animated.View style={[styles.bar, {width: progress}]} />
          </View>

          <View>
            <Text
              className="text-2xl text-[#00274D] pt-3"
              style={{fontFamily: 'Poppins-bold'}}>
              Personal Information
            </Text>
          </View>

          {/* profile */}
          <View className=" pt-10 " style={styles.user}>
            <TouchableOpacity onPress={() => selectPhoto()}>
              {/* <FontAwesome6 name={'user'} size={30} /> */}
              <Feather
                name={'edit-2'}
                style={{position: 'absolute', top: 0, right: 30}}
              />
              <Avatar.Image
                size={140}
                style={styles.avatar}
                source={{
                  uri:
                    image == '' || image == null
                      ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAM1BMVEXFzeD////Byt7L0uPByd7Q1+b7/P3j5/Dv8fbe4+3r7vTFzuDL0+P19/rn6/LZ3urW2+lU+LHUAAAFLklEQVR4nO2dC3arMAxEQXwCcfjsf7XPkLw2tEka5AEziu8CeuKpJVmyLLIskUgkEkdFbsT+HXEQKbNqOPWN59y72D9nd/z/vWqbOv/mozSY9n116vIl1acYg1++G9v+5/rzvMs+QwL/7x/O9a/lT5zL2D9uF7wAzcP1e+pP2AQi4/mZAJ6TfQ3EtY9N4D+jdQ2k6F8K4OltayDFKyP4cghmI6PzVvDnHrDuEqR9UwFPY1IEufw+C72yh8LeIUFOaxSY6K0dFt2qTXDDVJCUi0IBT2vHHmTUSWAnPjgZtBJ4p2BjJ4RIYCSHlCpEAi+CAXMowiSwIIJoguKSE7k5rD8aPWDg3gnKg8EPLrGXEUL5tGC2ijr2OkIIjAlfEJdVBLMNcmprQEnAW09YUzT5C9aNADgbfMGaPQlOgrwj1cAlDZIGGVYD2ktIpAasiRNQgzxpkOektoCMjUkDT+zFaEFqwNqohtSgiL0YHcHlVAMaoCooM6SJo/qK7RGk+yBpkGVBl2w2NAi7aEwamNEAWE5MGiQNkgZJg6RB0sCEBoj+C3YN0j5IGkyks3LKnSegdaSkQdIgaUCtwcf7RJHy02OjVG3/+knvSlxJd+uK7Emb6eqOrQVBoJvgCtu16xYasF23QXsPWDVI+yArN9CALTyW6LhAqAE8NuaEcQH2fOMbtkNS+e7IC8MaYIuJM3TnRGwxcYbvPQ+0eDBD95TFIRv3rwyx17Qa/EGRbmqSAz1xvSP2ktaDvW3MOV9xoJ0i43tftEPgc4n4U1Ls9ajAbgTOkSCh02AW1GxJ4w2gCKwSIAspF0pLmIB5BNaXvhnwnMSXMn6DqrBzBoUrqKoiXdp8B6qqWMVeSADyzijhNyDeBiinyOwSUc95uAemYZ66sl0wLYGcFPmK6gsgCTRzZJxAlJe5TQFyQiA3hQxRVuSOChPBXrEW2trBf/RDts1sg+C8iXZA1oKwc9IY++dDCDojUKcKd5T67JF6ou4C9SHBhjO4os2hiWupv1Hm0JY00LpFKx5xQmsLpjRQdisy19R/om3MsaSB9rxsSgOdBKY00E5SZOxBeoa2kGJJA+01gyEN1JmjJQ20jxnYq+p3qPNGQxqo66qtHQ3UfUlJA0MalKJ+8NnyPfh/hFzOnbpFr6vP7JeNGaALw0BJMfzemT4+IhqSYq8hFESDInNj3ky4BPSXroieLPZDAuI7nuROsUS84iAvqKmT5gWxVxEIQgJuY8BsA+6NgPmyMXVkQHXuM+cMuBEIjO98Z4K78r5pOFtVpWiRn7Qd+aop5QU9AqJuMyYVRKoNJkT58OD/cuy1vYUX4LTBvLgrzVAcXwYpthPgSjcc2ybkgjoRvKQvjqrCVl7gEU11RJMQGTeYFvicbjyaCnsrMFG3R1JBsnZjR/hEhf4gJiHi0NOg1nCOL8OejvAJ3RBTBScy7O4GHlCfXCwV4hrBkvMlQmYpZXQjWLJ7sJTyEEawZNfMsowUC/+m38kxiNtgbDCMZgfHIMUuaVEA3cYnBnx5aAu8e9xMASkYFJjoNpo/K+7oVnBPg68xuKw8zoHoPXp0pCzHg0bDV0CTa3EsjmBJjUunsB9u35Ua08wkGecmuIEIEVIReoIFwTf38JHhEQgcxuqOlx4qCBFBCnY7uKH/uhV0SHRU9CNFUO1EB0A9TMKIIczoggP+QxpRUQ0cM+MMrmiezG7x0bmoKDYCZhLqgVjf8WvhfLhkfaPnFt/di8zq6XNbfIczMqsHDW3xTdrYPFvrP7kiUsVMV4ODAAAAAElFTkSuQmCC'
                      : image,
                }}
              />
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
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
            />
            {errors.fullName && touched.fullName && (
              <Text style={{color: 'red'}}>{errors.fullName}</Text>
            )}

            <Text
              className="text-[#00274D] px-3"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Email
            </Text>
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
            {errors.email && touched.email && (
              <Text style={{color: 'red'}}>{errors.email}</Text>
            )}

            <View>
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
              <Text style={{color: 'red'}}>{errors.country}</Text>
            )}

            <Text
              className="text-[#00274D] px-3"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Phone Number
            </Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgb(210, 210, 210)"
              placeholder="Enter your phone number"
              className="!border-none pl-4 !border-white"
              borderRadius={10}
              name="number"
              value={values.number}
              onChangeText={handleChange('number')}
              onBlur={handleBlur('number')}
            />
            {errors.number && touched.number && (
              <Text style={{color: 'red'}}>{errors.number}</Text>
            )}

            <Text
              className="text-[#00274D] px-3"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Date of Birth
            </Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgb(210, 210, 210)"
              placeholder="Enter your Date of Birth"
              className="!border-none pl-4 !border-white"
              borderRadius={10}
              name="dateOfBirth"
              value={values.dateOfBirth}
              onChangeText={handleChange('dateOfBirth')}
              onBlur={handleBlur('dateOfBirth')}
            />
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
    borderWidth: 1,
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
});
