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
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Badge, IconButton} from 'react-native-paper';
import {Avatar, Card} from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import {useFormik} from 'formik';

export default function VendorInfo(nav) {
  const [image, setImage] = useState('');

  const [progress, setProgress] = useState(new Animated.Value(0));
  const [inputsVehicle, setInputsVehicle] = useState([{brand: '', number: ''}]);

  // const handleAdd = () => {
  //   setInputs([...inputs, {email: '', password: ''}]);
  // };

  // const handleDelete = index => {
  //   const updatedInputs = [...inputs];
  //   updatedInputs.splice(index, 1);
  //   setInputs(updatedInputs);
  // };
  // vehicle add
  const handleAddVehicle = () => {
    const newVehicles = [...formik.values.vehicles, {brand: '', number: ''}];
    formik.setFieldValue('vehicles', newVehicles);
    setInputsVehicle(newVehicles);
  };
  const handleDeleteVehicle = index => {
    const newVehicles = formik.values.vehicles.filter((_, i) => i !== index);
    formik.setFieldValue('vehicles', newVehicles);
    setInputsVehicle(newVehicles);
  };
  const redirectBusiness = () => {
    nav.navigation.navigate('logisbusiness');
    // nav.navigation.navigate('bottomTab');
  };

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 75,
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
      console.log('rrrr', selectedDoc);
      formik.setFieldValue(`drivers[${index}].license`, selectedDoc.name);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the document picker');
      } else {
        throw err;
      }
    }
  };

  // const selectPhoto = () => {
  //   ImagePicker.openPicker({
  //     width: 400,
  //     height: 400,
  //     cropping: true,
  //     includeBase64: false,
  //     cropperCircleOverlay: true,
  //     avoidEmptySpaceAroundImage: true,
  //     freeStyleCropEnabled: true,
  //   }).then(image => {
  //     formik.setFieldValue('image', image);
  //     setImage(image?.path);
  //   });
  // };

  const [inputs, setInputs] = useState([{image: '', name: '', license: ''}]);

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
      const updatedInputs = [...inputs];
      updatedInputs[index].image = image.path;
      setInputs(updatedInputs);
      formik.setFieldValue(`drivers[${index}].image`, image.path);
    });
  };

  const handleAdd = () => {
    setInputs([...inputs, {image: '', name: '', license: ''}]);
    formik.setFieldValue('drivers', [
      ...inputs,
      {image: '', name: '', license: ''},
    ]);
  };

  const handleDelete = index => {
    const updatedInputs = [...inputs];
    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
    formik.setFieldValue('drivers', updatedInputs);
  };

  const LogisticRegisterSchema = Yup.object().shape({
    drivers: Yup.array().of(
      Yup.object().shape({
        image: Yup.string(),
        name: Yup.string().required("Driver's name is required"),
        license: Yup.string().required('Driving license is required'),
      }),
    ),
    vehicles: Yup.array().of(
      Yup.object().shape({
        brand: Yup.string().required('Vehicle brand is required'),
        number: Yup.string().required('Vehicle number is required'),
      }),
    ),
  });

  const initialValues = {
    drivers: [{image: '', name: '', license: ''}],
    vehicles: [{brand: '', number: ''}],
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LogisticRegisterSchema,
    onSubmit: async (values, action) => {
      console.log('Form values:', values);
      const formData = new FormData();
      values.drivers.forEach((driver, index) => {
        if (driver.image) {
          formData.append(`drivers[${index}][image]`, {
            uri: driver.image,
            type: 'image/jpeg',
            name: `driver_${index}.jpg`,
          });
        }
        formData.append(`drivers[${index}][name]`, driver.name);
        formData.append(`drivers[${index}][license]`, driver.license);
      });

      await axios({
        method: 'post',
        url: 'https://example.com/api/submit', // replace with your API endpoint
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
      })
        .then(response => {
          console.log('Response:', response.data);
          ToastAndroid.showWithGravityAndOffset(
            'Form submitted successfully!',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            25,
            50,
          );
        })
        .catch(error => {
          console.log('Error:', error.response.data);
          ToastAndroid.showWithGravityAndOffset(
            'Error submitting form',
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

  return (
    <ScrollView>
      <View
        className="flex flex-col p-4   h-full bg-gray-100 !text-black
        ">
        <View className="relative flex flex-row items-center top-3 ">
          <Image
            style={styles.topNavigation}
            source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </View>
        <View className="mt-5">
          <Text
            className="text-3xl text-[#00274D]"
            style={{fontFamily: 'Poppins-bold'}}>
            Logistic Partner Info
          </Text>
          <Text
            className="text-xs pt-2 text-gray-400"
            style={{fontFamily: 'Poppins-Light'}}>
            Pick the type of account that suits your business or personal needs.
          </Text>
        </View>
        <View className=" pt-10 ">
          {/* progressbar */}
          <View className="flex flex-col">
            <View className="flex flex-row justify-between ">
              <Text
                className="text-[#F96900]"
                style={{fontFamily: 'Poppins-Regular'}}>
                Profile Upload (3/3)
              </Text>
              <Text
                className="text-[#F96900]"
                style={{fontFamily: 'Poppins-Regular'}}>
                100%
              </Text>
            </View>

            <Animated.View style={[styles.bar, {width: progress}]} />
          </View>

          <View>
            <Text
              className="text-2xl text-[#00274D] pt-3"
              style={{fontFamily: 'Poppins-bold'}}>
              Driver Details
            </Text>
          </View>

          {/* <View className=" pt-10 " style={styles.user}>

            <FontAwesome6 name={'user'} size={30} />
            <Feather
              name={'edit-2'}
              style={{position: 'absolute', bottom: -6, right: -6}}
            />

          </View> */}
          <SafeAreaView>
            {/* <Text
              className="text-[#00274D] px-3"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Driver Name
            </Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgb(210, 210, 210)"
              placeholder="Enter Driver's name"
              className="!border-none pl-4 !border-white"
              borderRadius={10}
            />
            <View className="mt-3">
              <Text className="text-[#00274d] text-[13px] font-[Poppins-Medium]">
                Driving Licence
              </Text>
              <TouchableOpacity className="h-[76px]" onPress={selectDoc}>
                <Card.Title
                  className="bg-white shadow rounded-xl"
                  title="Click to Upload"
                  titleStyle={{color: '#0058ff', fontSize: 13, paddingTop: 4.5}}
                  subtitle="(Max File Size:MB) File Formate: PDF JPEG, JPG"
                  subtitleStyle={{
                    color: 'black',
                    paddingBottom: 4.5,
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
            </View> */}
            {/* add-1 */}

            {/* {inputs.map((input, index) => (
              <SafeAreaView key={index}>
                <View className=" pt-10 " style={styles.user}>
                  <TouchableOpacity onPress={() => selectPhoto()}>
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
                <Text
                  className="text-[#00274D] px-3"
                  style={{fontFamily: 'Poppins-SemiBold'}}>
                  Driver Name
                </Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="rgb(210, 210, 210)"
                  placeholder="Enter Driver's name"
                  className="!border-none pl-4 !border-white"
                  borderRadius={10}
                />
                <View className="mt-3">
                  <Text className="text-[#00274d] text-[13px] font-[Poppins-Medium]">
                    Driving Licence
                  </Text>
                  <TouchableOpacity className="h-[76px]" onPress={selectDoc}>
                    <Card.Title
                      className="bg-white shadow rounded-xl"
                      title="Click to Upload"
                      titleStyle={{
                        color: '#0058ff',
                        fontSize: 13,
                        paddingTop: 4.5,
                      }}
                      subtitle="(Max File Size:MB) File Formate: PDF JPEG, JPG"
                      subtitleStyle={{
                        color: 'black',
                        paddingBottom: 4.5,
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
                <TouchableOpacity
                  onPress={() => handleDelete(index)}
                  style={styles.deleteButton}>
                  <Text>Delete</Text>
                </TouchableOpacity>
              </SafeAreaView>
            ))} */}

            {inputs.map((input, index) => (
              <View key={index} style={styles.driverContainer}>
                <View className=" pt-10 " style={styles.user}>
                  <TouchableOpacity onPress={() => selectPhoto(index)}>
                    <Feather
                      name={'edit-2'}
                      style={{position: 'absolute', top: 0, right: 30}}
                    />
                    <Avatar.Image
                      size={140}
                      style={styles.avatar}
                      source={{
                        uri: input.image
                          ? input.image
                          : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAqgVjf8WvhfLhkfaPnFt/di8zq6XNbfIczMqsHDW3xTdrYPFvrP7kiUsVMV4ODAAAAAElFTkSuQmCC',
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <Text
                  className="text-[#00274D] px-3"
                  style={{fontFamily: 'Poppins-SemiBold'}}>
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
                    <Text style={styles.errorText}>
                      {errors.drivers[index].name}
                    </Text>
                  )}
                <View className="mt-3">
                  <Text className="text-[#00274d] text-[13px] font-[Poppins-Medium]">
                    Driving Licence
                  </Text>
                  <TouchableOpacity
                    className="h-[76px]"
                    onPress={() => selectDoc(index)}
                    style={styles.uploadButton}>
                    <Card.Title
                      className="bg-white shadow rounded-xl"
                      title={
                        values.drivers[index].license
                          ? values.drivers[index].license.split('/').pop()
                          : 'Click to Upload'
                      }
                      titleStyle={{
                        color: '#0058ff',
                        fontSize: 13,
                        paddingTop: 4.5,
                      }}
                      subtitle="(Max File Size:MB) File Formate: PDF JPEG, JPG"
                      subtitleStyle={{
                        color: 'black',
                        paddingBottom: 4.5,
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
                      {errors.drivers[index].license}
                    </Text>
                  )}
                {index > 0 && (
                  <TouchableOpacity
                    onPress={() => handleDelete(index)}
                    style={styles.deleteButton}>
                    <Text>Delete</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
            {/* <TouchableOpacity onPress={handleAdd} style={styles.addButton}>
              <Text>Add Driver</Text>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={handleAdd} style={styles.buttonadd}>
              <Text>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.submitButton}>
              <Text>Submit</Text>
            </TouchableOpacity>

            <View style={styles.line} />
            {/* text2 */}
            <View>
              <Text
                className="text-2xl text-[#00274D] pt-3 pb-3"
                style={{fontFamily: 'Poppins-bold'}}>
                Vehicle Details
              </Text>
            </View>

            {/* <Text
              className="text-[#00274D] px-3"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Vehicle Brand
            </Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgb(210, 210, 210)"
              placeholder="Enter Vehicle brand name"
              className="!border-none pl-4 !border-white"
              borderRadius={10}
            />
            <Text
              className="text-[#00274D] px-3"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Vehicle Name
            </Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgb(210, 210, 210)"
              placeholder="Enter Vehicle registered number"
              className="!border-none pl-4 !border-white"
              borderRadius={10}
            /> */}

            {/* add-2 */}

            {values?.vehicles?.map((inputVehicle, indexVehicle) => (
              <SafeAreaView key={indexVehicle}>
                <Text
                  className="text-[#00274D] px-3"
                  style={{fontFamily: 'Poppins-SemiBold'}}>
                  Vehicle Brand
                </Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="rgb(210, 210, 210)"
                  placeholder="Enter your Name"
                  className="!border-none pl-4 !border-white"
                  borderRadius={10}
                  onChangeText={handleChange(`vehicles[${indexVehicle}].brand`)}
                  onBlur={handleBlur(`vehicles[${indexVehicle}].brand`)}
                  value={values.vehicles[indexVehicle].brand}
                />
                {touched.vehicles &&
                  touched.vehicles[indexVehicle] &&
                  errors.vehicles &&
                  errors.vehicles[indexVehicle] &&
                  errors.vehicles[indexVehicle].brand && (
                    <Text style={styles.errorText}>
                      {errors.vehicles[indexVehicle].brand}
                    </Text>
                  )}
                <Text
                  className="text-[#00274D] px-3"
                  style={{fontFamily: 'Poppins-SemiBold'}}>
                  Vehicle Number
                </Text>
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
                    <Text style={styles.errorText}>
                      {errors.vehicles[indexVehicle].number}
                    </Text>
                  )}
                {indexVehicle > 0 && (
                  <TouchableOpacity
                    onPress={() => handleDeleteVehicle(indexVehicle)}
                    style={styles.deleteButton}>
                    <Text>Delete</Text>
                  </TouchableOpacity>
                )}
              </SafeAreaView>
            ))}
            <TouchableOpacity
              onPress={handleAddVehicle}
              style={styles.buttonadd}>
              <Text>Add</Text>
            </TouchableOpacity>

            {/* {values.vehicles.map((inputVehicle, indexVehicle) => (
              <View key={indexVehicle} style={styles.vehicleContainer}>
                <Text style={styles.label}>Vehicle Brand</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Vehicle Brand"
                  placeholderTextColor="rgb(210, 210, 210)"
                  onChangeText={handleChange(`vehicles[${indexVehicle}].brand`)}
                  onBlur={handleBlur(`vehicles[${indexVehicle}].brand`)}
                  value={values.vehicles[indexVehicle].brand}
                />
                {touched.vehicles &&
                  touched.vehicles[indexVehicle] &&
                  errors.vehicles &&
                  errors.vehicles[indexVehicle] &&
                  errors.vehicles[indexVehicle].brand && (
                    <Text style={styles.errorText}>
                      {errors.vehicles[indexVehicle].brand}
                    </Text>
                  )}
                <Text style={styles.label}>Vehicle Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Vehicle Number"
                  placeholderTextColor="rgb(210, 210, 210)"
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
                    <Text style={styles.errorText}>
                      {errors.vehicles[indexVehicle].number}
                    </Text>
                  )}
                {indexVehicle > 0 && (
                  <TouchableOpacity
                    onPress={() => handleDeleteVehicle(indexVehicle)}
                    style={styles.deleteButton}>
                    <Text>Delete</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
            <TouchableOpacity
              onPress={handleAddVehicle}
              style={styles.addButton}>
              <Text>Add Vehicle</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.submitButton}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
        <View className="pt-5">
          <TouchableOpacity
            onPress={() => redirectBusiness()}
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
    height: 5,
    backgroundColor: '#F96900',
    borderRadius: 10,
  },
  buttonadd: {
    backgroundColor: '#F96900', // Default button color
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
    width: 120,
    marginBottom: 10,
    marginTop: 10,
  },
  deleteButton: {
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    width: 120,
  },
  line: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
  },
});
