import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Avatar} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CountryPicker from 'react-native-country-picker-modal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function PersonalInformation() {
  const [image, setImage] = useState('');
  const [country, setCountry] = useState();
  const [countryCode, setCountryCode] = useState('AE');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateSelected, setDateSelected] = useState('');
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
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
    <ScrollView keyboardShouldPersistTaps="handled">
      <View
        className="flex flex-col p-4   h-full bg-gray-100 !text-black
        ">
        <View className="" style={styles.user}>
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

            <View className="relative top-[-12px] ">
              <AntDesign
                name={'camerao'}
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

        <View className="mt-2">
          <Text className="text-[#00274d] pl-1 font-[Poppins-Medium]">
            Full Name
          </Text>
          <View style={styles.container1}>
            <TextInput
              style={styles.input1}
              placeholder="Enter your name"
              underlineColorAndroid="transparent"
              keyboardType="default"
              disableFullscreenUI={true}
              borderRadius={18}
              placeholderTextColor="rgb(210, 210, 210)"
              name="password"
            />
            <MaterialIcons
              name={'edit'}
              style={{
                backgroundColor: '#E5EEFF',
                color: 'blue',
                borderRadius: 8,
                padding: 6,
                Index: 1,

                fontSize: 20,
              }}
            />
          </View>
        </View>
        <View className="mt-2">
          <Text className="text-[#00274d] pl-1 font-[Poppins-Medium]">
            Email
          </Text>
          <View style={styles.container1}>
            <TextInput
              style={styles.input1}
              placeholder="janedoe123@email.com"
              underlineColorAndroid="transparent"
              keyboardType="default"
              disableFullscreenUI={true}
              borderRadius={18}
              placeholderTextColor="rgb(210, 210, 210)"
              name="password"
            />
            <View className="flex flex-row items-center gap-x-2">
              <Text className={'text-[10px] text-[#f96900]'}>Verify</Text>
              <MaterialIcons
                name={'edit'}
                style={{
                  backgroundColor: '#E5EEFF',
                  color: 'blue',
                  borderRadius: 8,
                  padding: 6,
                  Index: 1,

                  fontSize: 20,
                }}
              />
            </View>
          </View>
        </View>
        <View className="mt-2">
          <Text className="text-[#00274d] pl-1 font-[Poppins-Medium]">
            Phone Number
          </Text>
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
            <Text className="pl-2 text-xl text-[#cbcbcb]">|</Text>
            <View className="flex flex-row items-center justify-between w-[73%]">
              <TextInput
                placeholderTextColor="rgb(210, 210, 210)"
                placeholder="Phone number"
                className="!border-none py-1.5 pl-2  !border-white text-[#cbcbcb]"
                name="number"
                // value={values.number}
                // onChangeText={handleChange('number')}
                // onBlur={handleBlur('number')}
                maxLength={14}
              />
              <View className="flex flex-row items-center gap-x-2">
                <Text className={'text-[10px] text-[#21d59b]'}>Verified</Text>
                <MaterialIcons
                  name={'edit'}
                  style={{
                    backgroundColor: '#E5EEFF',
                    color: 'blue',
                    borderRadius: 8,
                    padding: 6,
                    Index: 1,

                    fontSize: 20,
                  }}
                />
              </View>
            </View>
          </View>
        </View>

        <View className="mt-2">
          <Text className="text-[#00274d] pl-1 font-[Poppins-Medium]">
            Date of Birth
          </Text>
          <View className="flex flex-row justify-between bg-white rounded-[10px]">
            <TouchableOpacity
              className="flex flex-row w-full"
              style={[
                {
                  borderWidth: 0,
                  borderRadius: 10,
                  paddingVertical: 8,
                  width:100
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
            <MaterialIcons
              name={'edit'}
              style={{
                backgroundColor: '#E5EEFF',
                color: 'blue',
                borderRadius: 8,
                padding: 6,
                margin:2,
                Index: 1,

                fontSize: 20,
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 4,
    margin: 3,
    borderWidth: 1,
    color: 'gray',
    backgroundColor: 'white',
    fontFamily: 'Poppins-Light',
  },
  user: {
    alignSelf: 'center',
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

  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 18,
    paddingRight: 3,
    // marginHorizontal: 10,
    borderBottomWidth: 0,
  },
  input1: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderColor: 'white',
    paddingRight: 5,
    color: '#cbcbcb',
    borderWidth: 2,
    // marginLeft: 5,
  },
});
