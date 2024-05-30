import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InputTextField from '../../../Shared/InputTextField';
const mockData = ['S', 'M', 'L', 'XL', 'XXL'];
import DocumentPicker from 'react-native-document-picker';
// import SelectInput from '../../../Shared/SelectInput';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useFormik} from 'formik';
import {AddProductVariantSchema} from '../../../schemas/AddProductVariantSchema';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {AddVariantionWareHouse} from '../../../Shared/AddVariationSelect';

export default function AddVariation() {
  const [size, setSize] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [resData, setResData] = useState(null);
  const [storedToken, setStoredToken] = useState(null);
  const [valueWareHouse, setValueWareHouse] = useState('');

  useEffect(async () => {
    const storedToken = await AsyncStorage.getItem('_token');
    console.log('storedToken,', storedToken);
    setStoredToken(storedToken);
  }, []);

  const selectDoc = async nav => {
    try {
      const results = await DocumentPicker.pick({
        type: [
          DocumentPicker.types.pdf,
          DocumentPicker.types.images,
          DocumentPicker.types.video,
        ],
        allowMultiSelection: true,
      });

      console.log(results);
      // const fileNames = results.map(file => file.name);
      setSelectedFiles(results);
      formik.setFieldValue('selectedFiles', results);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('user cancelled the upload', err);
      } else {
        console.log(err);
      }
    }
  };

  const handleSelect = index => {
    if (size.includes(index)) {
      setSize(size.filter(item => item !== index));
    } else {
      setSize([...size, index]);
    }
  };

  const initialValues = {
    selectedFiles: [],
    price: '',
    comparePriceAt: '',
    quantity: '',
    sku: '',
    valueWareHouse: '',
  };
  let formik = useFormik({
    initialValues,
    validationSchema: AddProductVariantSchema,
    onSubmit: async (values, action) => {
      console.log('fffffff', values);
      // await axios({
      //   method: 'post',
      //   url: `${environmentVariables?.apiUrl}/api/user/login_with_otp`,
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   data: {
      //     email,
      //     otp: values.otp,
      //   },
      // })
      //   .then(response => {
      //     console.log(response.data, 'otpres');
      //     action.resetForm();
      //     ToastAndroid.showWithGravityAndOffset(
      //       response.data.message,
      //       ToastAndroid.LONG,
      //       ToastAndroid.CENTER,
      //       25,
      //       50,
      //     );

      //     navigation.navigate('productIndex');
      //   })
      //   .catch(error => {
      //     console.log('error', error);
      //     ToastAndroid.showWithGravityAndOffset(
      //       error.response.data.message,
      //       ToastAndroid.LONG,
      //       ToastAndroid.CENTER,
      //       25,
      //       50,
      //     );
      //   });
    },
  });
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    formik;

  const bytesToKB = bytes => {
    return (bytes / 1024).toFixed(2); // Convert bytes to kilobytes and round to 2 decimal places
  };

  const getWareHouseData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:2000/api/user/get_data',
        {
          headers: {_token: storedToken},
        },
      );

      setResData(response?.data?.details);
    } catch (error) {
      console.log('error,///', error);
    }

    return () => {
      setResData(null);
      // Cleanup code here
    };
  };
  useEffect(() => {
    getWareHouseData();
  }, [storedToken]);

  console.log(resData);
  return (
    <ScrollView>
      <View className="flex flex-col gap-y-2 h-full mb-14  bg-[#f5f5f5]">
        <ScrollView keyboardShouldPersistTaps="handled">
          <View className="flex flex-col px-4 pt-3 mb-5 gap-y-3">
            <View>
              <Text className="text-[#00274d] text-[13px] font-[Roboto-Bold]">
                Product Information
              </Text>
            </View>
            <View className="flex flex-col">
              <Text className="text-[#00274d] text-[13px] font-[Poppins-Medium]">
                Product Images
              </Text>
              <TouchableOpacity className="h-[76px] mt-3" onPress={selectDoc}>
                <Card.Title
                  className="bg-white shadow rounded-xl"
                  title={
                    selectedFiles.length > 0
                      ? selectedFiles.map(file => file.name).join(', ')
                      : 'Click to Upload'
                  }
                  titleStyle={{color: '#0058ff', fontSize: 13, paddingTop: 4.5}}
                  subtitle="(Max File Size:MB) File Formate: PDF JPEG, JPG, MP4"
                  subtitleStyle={{
                    color: 'black',
                    paddingBottom: 4.5,
                    color: '#7e84a3',
                    fontSize: 9,
                  }}
                  left={props => (
                    <View className="flex flex-row items-center pt-2 pb-2.5 pl-3 border rounded-full pr-7 border-[#D0DFFF] bg-[#E6EEFF]">
                      <Image
                        style={{height: 24, width: 20}}
                        source={require('../../../Assets/image/file_upload.png')}
                      />
                    </View>
                  )}
                />
              </TouchableOpacity>
              {touched.selectedFiles && errors.selectedFiles && (
                <Text style={{color: 'red', fontSize: 12}}>
                  {errors.selectedFiles}
                </Text>
              )}
            </View>

            {/* <View className="">
              <Text className="text-[#7e84a3] text-[13px] font-[Roboto-Medium]">
                Uploaded Images
              </Text>
              <View className="flex flex-row justify-between mt-3">
                <View className="flex flex-row p-2 bg-white rounded-xl">
                  <View className="flex flex-row items-center gap-x-2">
                    <Image
                      style={{height: 49, width: 49, borderRadius: 24.5}}
                      source={require('../../../Assets/image/ram.png')}
                    />
                    <View className="flex flex-col">
                      <Text className="text-[#00274d] text-[10px]">
                        Filename.jpeg
                      </Text>
                      <Text className="text-[#7e84a3] text-[8px]">256kb</Text>
                    </View>
                  </View>
                  <View className="pl-3">
                    <AntDesign name="close" size={12} color="#7e84a3" />
                  </View>
                </View>
                <View className="flex flex-row p-2 bg-white rounded-xl">
                  <View className="flex flex-row items-center gap-x-2">
                    <Image
                      style={{height: 49, width: 49, borderRadius: 24.5}}
                      source={require('../../../Assets/image/ram.png')}
                    />
                    <View className="flex flex-col">
                      <Text className="text-[#00274d] text-[10px]">
                        Filename.jpeg
                      </Text>
                      <Text className="text-[#7e84a3] text-[8px]">256kb</Text>
                    </View>
                  </View>
                  <View className="pl-3">
                    <AntDesign name="close" size={12} color="#7e84a3" />
                  </View>
                </View>
              </View>
              <View className="flex flex-row justify-between mt-2">
                <View className="flex flex-row p-2 bg-white rounded-xl">
                  <View className="flex flex-row items-center gap-x-2">
                    <Image
                      style={{height: 49, width: 49, borderRadius: 24.5}}
                      source={require('../../../Assets/image/ram.png')}
                    />
                    <View className="flex flex-col">
                      <Text className="text-[#00274d] text-[10px]">
                        Filename.jpeg
                      </Text>
                      <Text className="text-[#7e84a3] text-[8px]">256kb</Text>
                    </View>
                  </View>
                  <View className="pl-3">
                    <AntDesign name="close" size={12} color="#7e84a3" />
                  </View>
                </View>
                <View className="flex flex-row p-2 bg-white rounded-xl">
                  <View className="flex flex-row items-center gap-x-2">
                    <Image
                      style={{height: 49, width: 49, borderRadius: 24.5}}
                      source={require('../../../Assets/image/ram.png')}
                    />
                    <View className="flex flex-col">
                      <Text className="text-[#00274d] text-[10px]">
                        Filename.jpeg
                      </Text>
                      <Text className="text-[#7e84a3] text-[8px]">256kb</Text>
                    </View>
                  </View>
                  <View className="pl-3">
                    <AntDesign name="close" size={12} color="#7e84a3" />
                  </View>
                </View>
              </View>
            </View> */}
            {selectedFiles.length > 0 && (
              <View>
                <Text className="text-[#7e84a3] text-[13px] font-[Roboto-Medium]">
                  Uploaded Files
                </Text>
                {selectedFiles.map((file, index) => (
                  <View
                    key={index}
                    className="flex flex-row justify-between mt-3">
                    <View className="flex flex-row p-2 bg-white rounded-xl">
                      <View className="flex flex-row items-center gap-x-2">
                        {file.type.startsWith('image/') ? (
                          <Image
                            style={{height: 49, width: 49, borderRadius: 24.5}}
                            source={{uri: file.uri}}
                          />
                        ) : (
                          <Image
                            style={{height: 49, width: 49, borderRadius: 24.5}}
                            // source={require('../../../Assets/image/video_placeholder.png')}
                            // source={require('../../../Assets/image/ram.png')}
                            source={{uri: file.uri}}
                          />
                        )}
                        <View className="flex flex-col">
                          <Text className="text-[#00274d] text-[10px]">
                            {file.name}
                          </Text>
                          <Text className="text-[#7e84a3] text-[8px]">
                            {bytesToKB(file.size)} KB
                          </Text>
                        </View>
                      </View>
                      <TouchableOpacity
                        className="pl-3"
                        onPress={() => {
                          const updatedFiles = selectedFiles.filter(
                            (_, i) => i !== index,
                          );
                          setSelectedFiles(updatedFiles);
                          setFieldValue('files', updatedFiles);
                        }}>
                        <AntDesign name="close" size={12} color="#7e84a3" />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            )}

            <View className="flex flex-row w-[100%]">
              <View className="w-[50%] pr-1">
                <Text style={styles.textTitle}>Price</Text>
                <InputTextField
                  placeholderTextColor="00.00 AED"
                  name="price"
                  value={values.price}
                  onChangeText={handleChange('price')}
                  onBlur={handleBlur('price')}
                />
                {touched.price && errors.price && (
                  <Text style={{color: 'red', fontSize: 12}}>
                    {errors.price}
                  </Text>
                )}
              </View>
              <View className="w-[50%] pl-1">
                <Text style={styles.textTitle}>Compare Price at</Text>
                <InputTextField
                  placeholderTextColor="Enter Compare price"
                  name="comparePriceAt"
                  value={values.comparePriceAt}
                  onChangeText={handleChange('comparePriceAt')}
                  onBlur={handleBlur('comparePriceAt')}
                />
                {touched.comparePriceAt && errors.comparePriceAt && (
                  <Text style={{color: 'red', fontSize: 12}}>
                    {errors.comparePriceAt}
                  </Text>
                )}
              </View>
            </View>

            <View className="flex flex-row w-[100%]">
              <View className="w-[50%] pr-1">
                <Text style={styles.textTitle}>Quantity</Text>
                <InputTextField
                  placeholderTextColor="00.00 AED"
                  name="quantity"
                  value={values.quantity}
                  onChangeText={handleChange('quantity')}
                  onBlur={handleBlur('quantity')}
                />
                {touched.quantity && errors.quantity && (
                  <Text style={{color: 'red', fontSize: 12}}>
                    {errors.quantity}
                  </Text>
                )}
              </View>
              <View className="w-[50%] pl-1">
                <Text style={styles.textTitle}>SKU</Text>
                <InputTextField
                  placeholderTextColor="Enterprises SKU ID"
                  name="sku"
                  value={values.sku}
                  onChangeText={handleChange('sku')}
                  onBlur={handleBlur('sku')}
                />
                {touched.sku && errors.sku && (
                  <Text style={{color: 'red', fontSize: 12}}>{errors.sku}</Text>
                )}
              </View>
            </View>
            <View className="flex flex-row w-full ">
              <View className="w-full pr-1">
                <Text style={styles.textTitle}>Select Warehouse</Text>
                <AddVariantionWareHouse
                  placeholderTextColor="Select warehouse"
                  data={resData?.warehouse_addresses}
                  setValue={setValueWareHouse}
                  value={valueWareHouse}
                  formik={formik}
                />
                {errors.valueWareHouse && touched.valueWareHouse && (
                  <Text style={styles.errorHandle}>
                    {errors.valueWareHouse}
                  </Text>
                )}
              </View>
            </View>
            <View className="flex flex-row w-full ">
              <View className="w-full pr-1">
                <Text style={styles.textTitle}>Variation</Text>
                {/* <SelectInput placeholderTextColor="Select variation" /> */}
              </View>
            </View>
            <View className="flex flex-row w-full ">
              <View className="w-full pr-1">
                <Text style={styles.textTitle}>Input Field</Text>
                <InputTextField placeholderTextColor="Enter variation type" />
              </View>
            </View>

            <TouchableOpacity className="w-32 p-2 text-center bg-[#f96900] items-center justify-center flex flex-row rounded-[5px] mt-2">
              <MaterialIcons name="add" size={18} color="white" />
              <Text className="ml-2 text-center text-white font-[Roboto-Regular] text-[12px]">
                Add Variations
              </Text>
            </TouchableOpacity>
            <View className="mt-4">
              <TouchableOpacity
                className="z-50 rounded-lg"
                onPress={() => handleSubmit()}
                style={styles.button}>
                <Text
                  className="text-white"
                  style={{fontFamily: 'Poppins-SemiBold'}}>
                  PROCEED
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topNavigation: {
    height: 15,
    width: 23.3,
    tintColor: 'white',
  },
  textTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#00274d',
  },
  button: {
    backgroundColor: '#F96900',
    padding: 12,
    alignItems: 'center',
    color: 'red',
    marginTop: 8,
  },
});
