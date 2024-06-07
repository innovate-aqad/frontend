import React, {useState, useEffect} from 'react';
import * as Yup from 'yup';
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
  ActivityIndicator,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SelectList} from 'react-native-dropdown-select-list';
import {Avatar, Card, Checkbox, Divider} from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import {useFormik} from 'formik';
import axios from 'axios';
import {environmentVariables} from '../../config/Config';
import {success} from '../../constants/ToastMessage';
import {blue, screenBackground, textColorCustom} from '../../constants/Theme';
import CustomStyle from '../../Styles';
import {POPPINS} from '../../constants/CustomFontFamily';

const vehicleTypeList = [
  {key: '1', value: 'Mini Truck'},
  {key: '2', value: 'Medium Truck'},
  {key: '3', value: 'Large Truck'},
];

export default function VendorInfo(nav) {
  const [checked, setChecked] = React.useState(false);
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [inputs, setInputs] = useState([
    {image: '', name: '', license: '', licenseNo: ''},
  ]);
  const [toggle, setToggle] = useState(true);
  const mainId = nav.route.params.id;

  const [inputsVehicle, setInputsVehicle] = useState([
    {brand: '', number: '', vehicleType: ''},
  ]);
  const handleAddVehicle = () => {
    formik.setFieldValue('vehicles', [
      ...inputsVehicle,
      {brand: '', number: '', vehicleType: ''},
    ]);
    setInputsVehicle([
      ...inputsVehicle,
      {brand: '', number: '', vehicleType: ''},
    ]);
  };

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 330,
      duration: 2000,
    }).start();
  }, []);

  const selectDoc = async index => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
      });
      const selectedDoc = res[0];
      const updatedInputs = [...inputs];
      updatedInputs[index].license = selectedDoc.uri;
      setInputs(updatedInputs);
      const imageDetails = {
        uri: selectedDoc.uri,
        type: selectedDoc.type,
        name: selectedDoc.name,
      };

      formik.setFieldValue(`drivers[${index}].license`, imageDetails);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the document picker');
      } else {
        throw err;
      }
    }
  };

  const selectPhoto = index => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      includeBase64: false,
      cropperCircleOverlay: true,
      avoidEmptySpaceAroundImage: true,
      freeStyleCropEnabled: true,
    }).then(image => {
      const imageDetails = {
        uri: image.path,
        type: image.mime,
        name: image.path.split('/').pop(),
      };

      const updatedInputs = [...inputs];
      updatedInputs[index].image = imageDetails;
      setInputs(updatedInputs);
      formik.setFieldValue(`drivers[${index}].image`, imageDetails);
    });
  };

  const handleAdd = () => {
    setInputs([...inputs, {image: '', name: '', license: '', licenseNo: ''}]);
    formik.setFieldValue('drivers', [
      ...inputs,
      {image: '', name: '', license: '', licenseNo: ''},
    ]);
  };

  const handleDelete = index => {
    const updatedInputs = [...inputs];
    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
    formik.setFieldValue('drivers', updatedInputs);
  };

  const handleDeleteVehicle = index => {
    const updatedInputs = [...inputsVehicle];
    updatedInputs.splice(index, 1);
    setInputsVehicle(updatedInputs);
    formik.setFieldValue('vehicles', updatedInputs);
  };
  const LogisticRegisterSchema = Yup.object().shape({
    drivers: Yup.array().of(
      Yup.object().shape({
        image: Yup.object()
          .shape({
            uri: Yup.string(),
            type: Yup.string(),
            name: Yup.string(),
          })
          .required('Driver image is required'),
        name: Yup.string().required("Driver's name is required"),
        license: Yup.object()
          .shape({
            uri: Yup.string(),
            type: Yup.string(),
            name: Yup.string(),
          })
          .required('Driver license is required'),
        licenseNo: Yup.string().required('Driving license Number is required'),
      }),
    ),
    vehicles: Yup.array().of(
      Yup.object().shape({
        brand: Yup.string().required('Vehicle brand is required'),
        number: Yup.string().required('Vehicle number is required'),
        vehicleType: Yup.string().required('Vehicle Type is required'),
      }),
    ),
  });

  const initialValues = {
    drivers: [{image: '', name: '', license: '', licenseNo: ''}],
    vehicles: [{brand: '', number: '', vehicleType: ''}],
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LogisticRegisterSchema,
    onSubmit: async (values, action) => {
      try {
        setToggle(false);
        const formData = new FormData();
        formData.append('slide', '4');
        formData.append('user_type', 'logistic');
        formData.append('doc_id', mainId);
        values.drivers.forEach((driver, index) => {
          formData.append(`driver_images`, {
            uri: driver.image.uri,
            type: driver.image.type,
            name: driver.image.name,
          });
          formData.append(`driver_name_array`, driver.name);
          formData.append(`driving_license`, {
            uri: driver.license.uri,
            type: driver.license.type,
            name: driver.license.name,
          });
          formData.append(`driver_license_number_array`, driver.licenseNo);
        });

        values.vehicles.forEach((vehicle, index) => {
          formData.append(
            `vehicle_details_array[${index}][vehicleType]`,
            vehicle.vehicleType,
          );
          formData.append(
            `vehicle_details_array[${index}][brand]`,
            vehicle.brand,
          );
          formData.append(
            `vehicle_details_array[${index}][number]`,
            vehicle.number,
          );
        });

        await axios({
          method: 'post',
          url: `${environmentVariables?.apiUrl}/api/user/register`,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          data: formData,
        })
          .then(response => {
            setToggle(true);
            success({type: 'success', text: response.data.message});
            nav.navigation.navigate('Login');
          })
          .catch(error => {
            setToggle(true);

            success({
              type: 'error',
              text: error?.response?.data?.message || error?.message,
            });
          });
      } catch (error) {
        setToggle(true);
      }
    },
  });
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    formik;

  return (
    <ScrollView>
      <View
        style={{backgroundColor: screenBackground}}
        className="flex flex-col h-full p-4 ">
        <View className="relative flex flex-row items-center top-3 ">
          <Image
            style={CustomStyle.topNavigation}
            source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </View>
        <View className="mt-8">
          <Text style={CustomStyle.signupHeading}>Logistic Partner Info</Text>
          <Text style={CustomStyle.signupSubDec}>
            Pick the type of account that suits your business or personal needs.
          </Text>
        </View>
        <View className="pt-5 ">
          <View className="flex flex-col">
            <View className="flex flex-row justify-between ">
              <Text
                style={{
                  fontFamily: POPPINS.PoppinsRegular,
                  color: textColorCustom,
                }}>
                Profile Upload (4/4)
              </Text>
              <Text
                style={{
                  fontFamily: POPPINS.PoppinsRegular,
                  color: textColorCustom,
                }}>
                100%
              </Text>
            </View>

            <View className="bg-[#F6E0D1] rounded-[10px]">
              <Animated.View style={[styles.bar, {width: progress}]} />
            </View>
          </View>

          <View>
            <Text
              className="text-[20px] pt-3"
              style={{fontFamily: POPPINS.PoppinsMedium, color: blue}}>
              Driver Details
            </Text>
          </View>
          <SafeAreaView>
            {inputs.map((input, index) => (
              <View key={index}>
                <View className="pt-10" style={styles.user}>
                  <TouchableOpacity onPress={() => selectPhoto(index)}>
                    <Feather
                      name={'edit-2'}
                      style={{position: 'absolute', top: 0, right: 30}}
                    />
                    <Avatar.Image
                      size={80}
                      style={styles.avatar}
                      source={{
                        uri: values.drivers[index].image.uri
                          ? values.drivers[index].image.uri
                          : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAM1BMVEXFzeD////Byt7L0uPByd7Q1+b7/P3j5/Dv8fbe4+3r7vTFzuDL0+P19/rn6/LZ3urW2+lU+LHUAAAFLklEQVR4nO2dC3arMAxEQXwCcfjsf7XPkLw2tEka5AEziu8CeuKpJVmyLLIskUgkEkdFbsT+HXEQKbNqOPWN59y72D9nd/z/vWqbOv/mozSY9n116vIl1acYg1++G9v+5/rzvMs+QwL/7x/O9a/lT5zL2D9uF7wAzcP1e+pP2AQi4/mZAJ6TfQ3EtY9N4D+jdQ2k6F8K4OltayDFKyP4cghmI6PzVvDnHrDuEqR9UwFPY1IEufw+C72yh8LeIUFOaxSY6K0dFt2qTXDDVJCUi0IBT2vHHmTUSWAnPjgZtBJ4p2BjJ4RIYCSHlCpEAi+CAXMowiSwIIJoguKSE7k5rD8aPWDg3gnKg8EPLrGXEUL5tGC2ijr2OkIIjAlfEJdVBLMNcmprQEnAW09YUzT5C9aNADgbfMGaPQlOgrwj1cAlDZIGGVYD2ktIpAasiRNQgzxpkOektoCMjUkDT+zFaEFqwNqohtSgiL0YHcHlVAMaoCooM6SJo/qK7RGk+yBpkGVBl2w2NAi7aEwamNEAWE5MGiQNkgZJg6RB0sCEBoj+C3YN0j5IGkyks3LKnSegdaSkQdIgaUCtwcf7RJHy02OjVG3/+knvSlxJd+uK7Emb6eqOrQVBoJvgCtu16xYasF23QXsPWDVI+yArN9CALTyW6LhAqAE8NuaEcQH2fOMbtkNS+e7IC8MaYIuJM3TnRGwxcYbvPQ+0eDBD95TFIRv3rwyx17Qa/EGRbmqSAz1xvSP2ktaDvW3MOV9xoJ0i43tftEPgc4n4U1Ls9ajAbgTOkSCh02AW1GxJ4w2gCKwSIAspF0pLmIB5BNaXvhnwnMSXMn6DqrBzBoUrqKoiXdp8B6qqWMVeSADyzijhNyDeBiinyOwSUc95uAemYZ66sl0wLYGcFPmK6gsgCTRzZJxAlJe5TQFyQiA3hQxRVuSOChPBXrEW2trBf/RDts1sg+C8iXZA1oKwc9IY++dDCDojUKcKd5T67JF6ou4C9SHBhjO4os2hiWupv1Hm0JY00LpFKx5xQmsLpjRQdisy19R/om3MsaSB9rxsSgOdBKY00E5SZOxBeoa2kGJJA+01gyEN1JmjJQ20jxnYq+p3qPNGQxqo66qtHQ3UfUlJA0MalKJ+8NnyPfh/hFzOnbpFr6vP7JeNGaALw0BJMfzemT4+IhqSYq8hFESDInNj3ky4BPSXroieLPZDAuI7nuROsUS84iAvqKmT5gWxVxEIQgJuY8BsA+6NgPmyMXVkQHXuM+cMuBEIjO98Z4K78r5pOFtVpWiRn7Qd+aop5QU9AqJuMyYVRKoNJkT58OD/cuy1vYUX4LTBvLgrzVAcXwYpthPgSjcc2ybkgjoRvKQvjqrCVl7gEU11RJMQGTeYFvicbjyaCnsrMFG3R1JBsnZjR/hEhf4gJiHi0NOg1nCOL8OejvAJ3RBTBScy7O4GHlCfXCwV4hrBkvMlQmYpZXQjWLJ7sJTyEEawZNfMsowUC/+m38kxiNtgbDCMZgfHIMUuaVEA3cYnBnx5aAu8e9xMASkYFJjoNpo/K+7oVnBPg68xuKw8zoHoPXp0pCzHg0bDV0CTa3EsjmBJjUunsB9u35Ua08wkGecmuIEIEVIReoIFwTf38JHhEQgcxuqOlx4qCBFBCnY7uKH/uhV0SHRU9CNFUO1EB0A9TMKIIczoggP+QxpRUQ0cM+MMrmiezG7x0bmoKDYCZhLqgVjf8WvhfLhkfaPnFt/di8zq6XNbfIczMqsHDW3xTdrYPFvrP7kiUsVMV4ODAAAAAElFTkSuQmCC',
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
                <Text className="mt-3 " style={CustomStyle.inputLabel}>
                  Driver Name
                </Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="rgb(210, 210, 210)"
                  placeholder="Enter Driver's name"
                  className="!border-none pl-4 !border-white"
                  borderRadius={10}
                  onChangeText={handleChange(`drivers[${index}].name`)}
                  onBlur={handleBlur(`drivers[${index}].name`)}
                  value={values.drivers[index].name}
                />
                {errors.drivers &&
                  errors.drivers[index] &&
                  errors.drivers[index].name && (
                    <Text style={styles.errorHandle}>
                      {errors.drivers[index].name}
                    </Text>
                  )}
                <Text style={CustomStyle.inputLabel}>
                  Driver License Number
                </Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="rgb(210, 210, 210)"
                  placeholder="Enter Driver's Number"
                  className="!border-none pl-4 !border-white"
                  borderRadius={10}
                  onChangeText={handleChange(`drivers[${index}].licenseNo`)}
                  onBlur={handleBlur(`drivers[${index}].licenseNo`)}
                  value={values.drivers[index].licenseNo}
                />
                {errors.drivers &&
                  errors.drivers[index] &&
                  errors.drivers[index].licenseNo && (
                    <Text style={styles.errorHandle}>
                      {errors.drivers[index].licenseNo}
                    </Text>
                  )}
                <View className="mt-3">
                  <Text style={CustomStyle.inputLabel}>Driving Licence</Text>
                  <TouchableOpacity
                    className="h-[76px]"
                    onPress={() => selectDoc(index)}
                    style={styles.uploadButton}>
                    <Card.Title
                      className="bg-white shadow rounded-xl"
                      title={
                        values.drivers[index].license.name
                          ? values.drivers[index].license.name
                          : 'Click to Upload'
                      }
                      titleStyle={{
                        color: '#0058ff',
                        fontSize: 13,
                        paddingTop: 4.5,
                      }}
                      subtitle="(Max File Size:MB) File Formate: PDF JPEG, JPG"
                      subtitleStyle={{
                        color: '#7e84a3',
                        fontSize: 10,
                      }}
                      left={props => (
                        <View className="flex flex-row items-center pt-2 pb-2.5 pl-3 border rounded-full pr-7 border-[#D0DFFF] bg-[#E6EEFF]">
                          <Image
                            style={{height: 24, width: 20}}
                            source={require('../../Assets/image/file_upload.png')}
                          />
                        </View>
                      )}
                    />
                  </TouchableOpacity>
                </View>
                {errors.drivers &&
                  errors.drivers[index] &&
                  errors.drivers[index].license && (
                    <Text style={styles.errorText}>
                      {errors.drivers[index].license.uri}
                    </Text>
                  )}

                {inputs?.length > 1 &&
                  index !== 0 &&
                  index !== inputs?.length - 1 && (
                    <TouchableOpacity onPress={() => handleDelete(index)}>
                      <View className="w-24 p-2 text-center bg-[#e6e9f4] items-center justify-center flex flex-row rounded-[5px] mt-2">
                        <Image
                          source={require('../../Assets/image/trash.png')}
                          style={{height: 18, width: 15, tintColor: '#7e84a3'}}
                        />
                        <Text className="text-center text-[#7e84a3] ml-2">
                          Delete
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}

                {inputs?.length > 1 && index === 0 && (
                  <TouchableOpacity onPress={() => handleDelete(index)}>
                    <View className="w-24 p-2 text-center bg-[#e6e9f4] items-center justify-center flex flex-row rounded-[5px] mt-2">
                      <Image
                        source={require('../../Assets/image/trash.png')}
                        style={{height: 18, width: 15, tintColor: '#7e84a3'}}
                      />
                      <Text className="text-center text-[#7e84a3] ml-2">
                        Delete
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}

                {inputs.length > 1 &&
                  index !== 0 &&
                  index !== inputs.length - 1 && (
                    <Divider className="bg-[#cbcbcb] my-3"></Divider>
                  )}
                {inputs.length > 1 && index === 0 && (
                  <Divider className="bg-[#cbcbcb] my-3"></Divider>
                )}
              </View>
            ))}
            <TouchableOpacity onPress={handleAdd}>
              <View className="w-24 p-2.5 text-center bg-[#f96900] items-center justify-center flex flex-row rounded-[5px] mt-3">
                <MaterialIcons name="add" size={18} color="white" />
                <Text className="ml-2 text-center text-white font-[Roboto-Regular] text-[12px]">
                  Add
                </Text>
              </View>
            </TouchableOpacity>

            <View style={styles.line} className="mt-5" />
            <View>
              <Text
                className="text-[20px] text-[#00274D] pt-1 pb-3"
                style={{fontFamily: 'Roboto-Medium'}}>
                Vehicle Details
              </Text>
            </View>

            {inputsVehicle?.map((inputVehicle, indexVehicle) => (
              <View key={indexVehicle}>
                <Text className="text-[#00274D] px-3" style={styles.textStyle}>
                  Vehicle Type hh
                </Text>
                <View className="">
                  {/* <Picker
                    selectedValue={values.vehicles[indexVehicle].vehicleType}
                    style={{
                      backgroundColor: 'white',
                      color: '#cbcbcb',
                      
                    }}
                    radi
                    onValueChange={itemValue =>
                      handleChange(`vehicles[${indexVehicle}].vehicleType`)(
                        itemValue,
                      )
                    }
                    onBlur={handleBlur(
                      `vehicles[${indexVehicle}].vehicleType`,
                    )}
                    // itemStyle={{}}
                    >
                    <Picker.Item label="Select Vehicle Type" value="" />
                    <Picker.Item label="Mini Truck" value="mini_truck" />
                    <Picker.Item label="Medium Truck" value="medium_truck" />
                    <Picker.Item label="Large Truck" value="large_truck" />
                  </Picker> */}

                  <SelectList
                    setSelected={itemValue =>
                      handleChange(`vehicles[${indexVehicle}].vehicleType`)(
                        itemValue,
                      )
                    }
                    boxStyles={{
                      backgroundColor: 'white',
                      borderColor: 'white',
                      paddingVertical: 10,
                    }}
                    inputStyles={{color: '#cbcbcb'}}
                    placeholder="Select vehicle type"
                    dropdownStyles={{
                      backgroundColor: 'white',
                      borderColor: 'white',
                    }}
                    dropdownTextStyles={{color: '#002740'}}
                    data={vehicleTypeList}
                    save="value"
                    className="!outline-none !border"
                  />
                  {touched.vehicles &&
                    touched.vehicles[indexVehicle] &&
                    errors.vehicles &&
                    errors.vehicles[indexVehicle] &&
                    errors.vehicles[indexVehicle].vehicleType && (
                      <Text style={styles.errorHandle}>
                        {errors.vehicles[indexVehicle].vehicleType}
                      </Text>
                    )}
                </View>

                <View className="mt-2">
                  <Text style={styles.textStyle}>Vehicle Brand</Text>
                  <TextInput
                    style={styles.input}
                    placeholderTextColor="rgb(210, 210, 210)"
                    placeholder="Enter your Name"
                    className="!border-none pl-4 !border-white"
                    borderRadius={10}
                    onChangeText={handleChange(
                      `vehicles[${indexVehicle}].brand`,
                    )}
                    onBlur={handleBlur(`vehicles[${indexVehicle}].brand`)}
                    value={values.vehicles[indexVehicle].brand}
                  />
                  {touched.vehicles &&
                    touched.vehicles[indexVehicle] &&
                    errors.vehicles &&
                    errors.vehicles[indexVehicle] &&
                    errors.vehicles[indexVehicle].brand && (
                      <Text style={styles.errorHandle}>
                        {errors.vehicles[indexVehicle].brand}
                      </Text>
                    )}
                </View>
                <Text style={styles.textStyle}>Vehicle Number</Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="rgb(210, 210, 210)"
                  placeholder="Enter your Name"
                  className="!border-none pl-4 !border-white"
                  borderRadius={10}
                  onChangeText={handleChange(
                    `vehicles[${indexVehicle}].number`,
                  )}
                  onBlur={handleBlur(`vehicles[${indexVehicle}].number`)}
                  value={values.vehicles[indexVehicle].number}
                />
                {touched.vehicles &&
                  touched.vehicles[indexVehicle] &&
                  errors.vehicles &&
                  errors.vehicles[indexVehicle] &&
                  errors.vehicles[indexVehicle].number && (
                    <Text style={styles.errorHandle}>
                      {errors.vehicles[indexVehicle].number}
                    </Text>
                  )}

                {inputsVehicle?.length > 1 &&
                  indexVehicle !== 0 &&
                  indexVehicle !== inputsVehicle?.length - 1 && (
                    <TouchableOpacity
                      onPress={() => handleDeleteVehicle(indexVehicle)}>
                      <View className="w-24 p-2 text-center bg-[#e6e9f4] items-center justify-center flex flex-row rounded-[5px] mt-2">
                        <Image
                          source={require('../../Assets/image/trash.png')}
                          style={{height: 18, width: 15, tintColor: '#7e84a3'}}
                        />
                        <Text className="text-center text-[#7e84a3] ml-2">
                          Delete
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}

                {inputsVehicle?.length > 1 && indexVehicle === 0 && (
                  <TouchableOpacity
                    onPress={() => handleDeleteVehicle(indexVehicle)}>
                    <View className="w-24 p-2 text-center bg-[#e6e9f4] items-center justify-center flex flex-row rounded-[5px] mt-2">
                      <Image
                        source={require('../../Assets/image/trash.png')}
                        style={{height: 18, width: 15, tintColor: '#7e84a3'}}
                      />
                      <Text className="text-center text-[#7e84a3] ml-2">
                        Delete
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}

                {inputsVehicle.length > 1 &&
                  indexVehicle !== 0 &&
                  indexVehicle !== inputsVehicle.length - 1 && (
                    <Divider className="bg-[#cbcbcb] my-3"></Divider>
                  )}
                {inputsVehicle.length > 1 && indexVehicle === 0 && (
                  <Divider className="bg-[#cbcbcb] my-3"></Divider>
                )}
              </View>
            ))}
          </SafeAreaView>
        </View>
        <TouchableOpacity onPress={handleAddVehicle}>
          <View className="w-24 p-2.5 text-center bg-[#f96900] items-center justify-center flex flex-row rounded-[5px] mt-4">
            <MaterialIcons name="add" size={18} color="white" />
            <Text className="ml-2 text-center text-white font-[Roboto-Regular] text-[12px]">
              Add
            </Text>
          </View>
        </TouchableOpacity>

        <View className="flex flex-row items-center mt-2">
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color="#f96900"
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text className="font-[Poppins-Light] text-[10px] text-[#7e84a3]">
            I Agree To AQAD's
          </Text>
          <Text className="font-[Poppins-Light] text-[10px] text-sky-600 pl-1">
            Terms And Conditions
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              toggle ? handleSubmit() : null;
            }}
            style={toggle ? styles.button : styles.button1}
            className="flex flex-row items-center justify-center mt-8">
            <Text
              className="text-white flex flex-row  text-[19px]"
              style={{fontFamily: 'Roboto-Regular'}}>
              SUBMIT
            </Text>
            {toggle ? null : (
              <ActivityIndicator className="pl-2" size="small" color="#fff" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  checkboxContainer: {
    borderColor: 'red',
    borderRadius: 5,
    borderWidth: 1,
    padding: 2,
  },
  checked: {
    borderColor: '#f96900',
  },
  button1: {
    backgroundColor: '#F6E0D1',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
  },
  textStyle: {
    color: '#00274D',
    fontFamily: 'Poppins-Medium',
    paddingLeft: 4,
    marginTop: 4,
  },
  errorHandle: {
    color: 'red',
    paddingLeft: 20,
    fontSize: 12,
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
    backgroundColor: 'white',
    fontFamily: 'Poppins-Light',
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
  line: {
    height: 0.5,
    backgroundColor: '#cbcbcb',
    marginVertical: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
  },
});
