import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import inventory from '../../../Assets/image/vendor/inventory.svg';
import {
  blue,
  btnBackround,
  grayColor,
  lightGray,
  screenBackground,
  textColorCustom,
  white,
} from '../../../constants/Theme';
import {POPPINS, ROBOTO} from '../../../constants/CustomFontFamily';
import CustomButton from '../../../Shared/CustomButton';
import Checkbox from '../../../Shared/Checkbox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImageCropPicker from 'react-native-image-crop-picker';
import {Avatar, RadioButton} from 'react-native-paper';
import InputTextField from '../../../Shared/InputTextField';
import CountryPicker from 'react-native-country-picker-modal';

export default function AddUserInfo(nav) {
  const [image, setImage] = useState('');
  const [country, setCountry] = useState();
  const [countryCode, setCountryCode] = useState('AE');
  const [checked, setChecked] = React.useState('first');
  const selectPhoto = () => {
    ImageCropPicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      includeBase64: false,
      cropperCircleOverlay: true,
      avoidEmptySpaceAroundImage: true,
      freeStyleCropEnabled: true,
    }).then(image => {
      //   formik.setFieldValue('image', image);
      setImage(image?.path);
    });
  };
  const onSelectCountry = country => {
    const callingCodeWithPlus = `+${country.callingCode[0]}`;
    // formik.setFieldValue('country', callingCodeWithPlus);
    setCountry(callingCodeWithPlus);
    // formik.setFieldValue('isoCode', country.cca2);
    setCountryCode(country.cca2);
  };

  const handleConfirm = date => {
    // console.warn('A date has been picked: ', date);
    // setWorkDate(moment(date).format('YYYY-MM-DD'));
    setDateSelected(moment(date).format('YYYY-MM-DD'));
    // formik.setFieldValue('dateOfBirth', moment(date).format('YYYY-MM-DD'));
    hideDatePicker();
  };

  const renderCountry = country => {
    return <Text>{country.callingCode}</Text>;
  };
  return (
    <View
      className="flex flex-col h-full mb-12"
      style={{backgroundColor: screenBackground}}>
      <View className="flex-row rounded-b-xl bg-[#f96900] px-4 pb-2 pt-7 items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{height: 15, width: 23.3, tintColor: 'white'}}
            source={require('../../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <Text
          className="flex-1 text-center"
          style={{
            fontFamily: POPPINS.PoppinsBold,
            color: white,
            fontSize: 20,
          }}>
          ADD USER INFO
        </Text>
      </View>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View className="flex flex-col p-4 ">
          <Text
            style={{
              fontFamily: ROBOTO.RobotoBold,
              fontSize: 13,
              color: blue,
            }}>
            User Information
          </Text>
          <View className="mt-6 mb-3" style={{alignSelf: 'center'}}>
            <TouchableOpacity onPress={() => selectPhoto()}>
              <Avatar.Image
                size={80}
                style={{backgroundColor: 'red'}}
                source={{
                  uri:
                    image == '' || image == null
                      ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAM1BMVEXFzeD////Byt7L0uPByd7Q1+b7/P3j5/Dv8fbe4+3r7vTFzuDL0+P19/rn6/LZ3urW2+lU+LHUAAAFLklEQVR4nO2dC3arMAxEQXwCcfjsf7XPkLw2tEka5AEziu8CeuKpJVmyLLIskUgkEkdFbsT+HXEQKbNqOPWN59y72D9nd/z/vWqbOv/mozSY9n116vIl1acYg1++G9v+5/rzvMs+QwL/7x/O9a/lT5zL2D9uF7wAzcP1e+pP2AQi4/mZAJ6TfQ3EtY9N4D+jdQ2k6F8K4OltayDFKyP4cghmI6PzVvDnHrDuEqR9UwFPY1IEufw+C72yh8LeIUFOaxSY6K0dFt2qTXDDVJCUi0IBT2vHHmTUSWAnPjgZtBJ4p2BjJ4RIYCSHlCpEAi+CAXMowiSwIIJoguKSE7k5rD8aPWDg3gnKg8EPLrGXEUL5tGC2ijr2OkIIjAlfEJdVBLMNcmprQEnAW09YUzT5C9aNADgbfMGaPQlOgrwj1cAlDZIGGVYD2ktIpAasiRNQgzxpkOektoCMjUkDT+zFaEFqwNqohtSgiL0YHcHlVAMaoCooM6SJo/qK7RGk+yBpkGVBl2w2NAi7aEwamNEAWE5MGiQNkgZJg6RB0sCEBoj+C3YN0j5IGkyks3LKnSegdaSkQdIgaUCtwcf7RJHy02OjVG3/+knvSlxJd+uK7Emb6eqOrQVBoJvgCtu16xYasF23QXsPWDVI+yArN9CALTyW6LhAqAE8NuaEcQH2fOMbtkNS+e7IC8MaYIuJM3TnRGwxcYbvPQ+0eDBD95TFIRv3rwyx17Qa/EGRbmqSAz1xvSP2ktaDvW3MOV9xoJ0i43tftEPgc4n4U1Ls9ajAbgTOkSCh02AW1GxJ4w2gCKwSIAspF0pLmIB5BNaXvhnwnMSXMn6DqrBzBoUrqKoiXdp8B6qqWMVeSADyzijhNyDeBiinyOwSUc95uAemYZ66sl0wLYGcFPmK6gsgCTRzZJxAlJe5TQFyQiA3hQxRVuSOChPBXrEW2trBf/RDts1sg+C8iXZA1oKwc9IY++dDCDojUKcKd5T67JF6ou4C9SHBhjO4os2hiWupv1Hm0JY00LpFKx5xQmsLpjRQdisy19R/om3MsaSB9rxsSgOdBKY00E5SZOxBeoa2kGJJA+01gyEN1JmjJQ20jxnYq+p3qPNGQxqo66qtHQ3UfUlJA0MalKJ+8NnyPfh/hFzOnbpFr6vP7JeNGaALw0BJMfzemT4+IhqSYq8hFESDInNj3ky4BPSXroieLPZDAuI7nuROsUS84iAvqKmT5gWxVxEIQgJuY8BsA+6NgPmyMXVkQHXuM+cMuBEIjO98Z4K78r5pOFtVpWiRn7Qd+aop5QU9AqJuMyYVRKoNJkT58OD/cuy1vYUX4LTBvLgrzVAcXwYpthPgSjcc2ybkgjoRvKQvjqrCVl7gEU11RJMQGTeYFvicbjyaCnsrMFG3R1JBsnZjR/hEhf4gJiHi0NOg1nCOL8OejvAJ3RBTBScy7O4GHlCfXCwV4hrBkvMlQmYpZXQjWLJ7sJTyEEawZNfMsowUC/+m38kxiNtgbDCMZgfHIMUuaVEA3cYnBnx5aAu8e9xMASkYFJjoNpo/K+7oVnBPg68xuKw8zoHoPXp0pCzHg0bDV0CTa3EsjmBJjUunsB9u35Ua08wkGecmuIEIEVIReoIFwTf38JHhEQgcxuqOlx4qCBFBCnY7uKH/uhV0SHRU9CNFUO1EB0A9TMKIIczoggP+QxpRUQ0cM+MMrmiezG7x0bmoKDYCZhLqgVjf8WvhfLhkfaPnFt/di8zq6XNbfIczMqsHDW3xTdrYPFvrP7kiUsVMV4ODAAAAAElFTkSuQmCC'
                      : image,
                }}
              />

              <View className="relative top-[-20px] ">
                <AntDesign
                  name={'camerao'}
                  style={{
                    position: 'absolute',
                    backgroundColor: white,
                    color: '#0058ff',
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
          <View>
            <Text style={styles.textStyle}>Full Name</Text>
            <InputTextField placeholderTextColor="Enter your full name" />
          </View>
          <View className="mt-2">
            <Text style={styles.textStyle}>Email</Text>
            <InputTextField placeholderTextColor="Example@gmail.com" />
          </View>

          <View className="mt-2">
            <Text style={styles.textStyle}>Phone Number</Text>
            <View className="flex flex-row items-center p-2 w-full bg-white rounded-[10px] py-0">
              <CountryPicker
                countryCode={countryCode}
                withFilter
                withFlag
                withCallingCodeButton
                withAlphaFilter
                withCallingCode
                onSelect={onSelectCountry}
                name="country"
                value={country}
                // onBlur={handleBlur('country')}
                renderCountry={renderCountry}
              />
              <Text className="pl-2 text-2xl text-[#cbcbcb]">|</Text>
              <View className="flex flex-row items-center justify-between w-[73%]">
                <TextInput
                  placeholderTextColor="rgb(210, 210, 210)"
                  placeholder="Phone number"
                  className="!border-none py-1.5 pl-2  !border-white text-[#cbcbcb]"
                  name="number"
                  maxLength={14}
                />
              </View>
            </View>
          </View>
          <View className="mt-5">
            <Text style={styles.textStyle}>Role</Text>
            <View className="flex flex-col px-1">
              <Checkbox label={'Product'} />
              <View className="mt-1.5">
                <Checkbox label={'Order'} />
              </View>
              <View className="mt-1.5">
                <Checkbox label={'Inventory'} />
              </View>
              {/* <View className="mt-1.5">
                <Checkbox label={'Insight Access'} />
              </View>
              <View className="mt-1.5">
                <Checkbox label={'Product Price'} />
              </View>
              <View className="mt-1.5">
                <Checkbox label={'Dashboard Access'} />
              </View> */}
            </View>
          </View>
          <View className="mt-4">
            <Text style={styles.textStyle}>Access</Text>
            <View className="flex flex-row">
              <View className="flex flex-row items-center">
                <RadioButton
                  value="first"
                  color={btnBackround}
                  uncheckedColor={lightGray}
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')}
                />
                <Text style={styles.checkLabel}>Editor</Text>
              </View>
              <View className="flex flex-row items-center ml-2">
                <RadioButton
                  value="second"
                  color={btnBackround}
                  uncheckedColor={lightGray}
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('second')}
                />
                <Text style={styles.checkLabel}>Viewer</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="relative w-full px-4 mb-12">
          <CustomButton
            text={'SUBMIT'}
            onPress={() => nav.navigation.navigate('userList')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: POPPINS.PoppinsMedium,
    fontSize: 13,
    color: blue,
    paddingLeft: 5,
  },
  checkLabel: {
    fontFamily: POPPINS.PoppinsLight,
    fontSize: 10,
    color: grayColor,
  },
});
