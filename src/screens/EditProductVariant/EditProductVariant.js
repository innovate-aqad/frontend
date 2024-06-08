import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {Card} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import InputTextField from '../../../Shared/InputTextField';
const mockData = ['S', 'M', 'L', 'XL', 'XXL'];
import DocumentPicker from 'react-native-document-picker';
// import SelectInput from '../../../Shared/SelectInput';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useFormik} from 'formik';
import {AddProductVariantSchema} from '../../schemas/AddProductVariantSchema';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  AddVariantionType,
  AddWareHouseType,
} from '../../Shared/AddVariationSelect';
import {environmentVariables} from '../../../config/Config';
import {retrieveToken} from '../../Shared/EncryptionDecryption/Token';
import * as mime from 'react-native-mime-types';

export default function EditProductVariant(nav) {
  const mainId = nav.route.params.id;
  const productId = nav.route.params.productId;
  console.log(mainId, 'llklklkl', productId);
  const [size, setSize] = useState([]);
  const [loader, setLoader] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [resData, setResData] = useState([]);
  const [inputVariations, setInputVariations] = useState([
    {valueVariation: '', valueVariationUnit: ''},
  ]);
  // console.log('environmentVariables?.apiUrl', environmentVariables?.apiUrl);

  const getFileSize = async url => {
    try {
      const response = await axios.head(url);
      const size = response.headers['content-length'];
      return size ? parseInt(size, 10) : 0;
    } catch (error) {
      console.log('Error fetching file size', error);
      return 0;
    }
  };
  const getMimeType = fileName => {
    const extension = fileName.split('.').pop();
    return mime.lookup(extension) || 'application/octet-stream';
  };
  const getProductVariantData = async () => {
    try {
      setLoader(true);
      const storedToken = await retrieveToken();

      const response = await axios.get(
        `${environmentVariables?.apiUrl}/api/product/get_variant_by_id?product_id=${productId}&variant_id=${mainId}`,
        {headers: {_token: storedToken}},
      );
      const productData = response?.data?.data;
      console.log(
        '222222222222',
        productData?.variationObj?.id,
        productData?.id,
      );
      setResData(productData);
      if (productData?.variationObj?.product_images_arr) {
        const imageFiles = await Promise.all(
          productData.variationObj.product_images_arr.map(async imageObj => {
            const uri = `${environmentVariables?.apiUrl}/uploads/vendor/product/${imageObj.image}`;
            console.log('Fetching size for:', uri);
            const size = await getFileSize(uri);
            return {
              uri,
              name: imageObj.image,
              type: getMimeType(imageObj.image),
              size,
            };
          }),
        );
        // console.log('extension', imageFiles);

        setSelectedFiles(imageFiles);
        formik.setFieldValue('selectedFiles', imageFiles);
      }
      formik.setFieldValue(
        'variationType',
        productData?.variationObj?.variation,
      );
      formik.setFieldValue(
        'variationValue',
        productData?.variationObj?.input_field,
      );
      formik.setFieldValue('price', productData?.variationObj?.price);
      formik.setFieldValue(
        'comparePriceAt',
        productData?.variationObj?.compare_price_at,
      );
      formik.setFieldValue('sku', productData?.variationObj?.sku);
      // if (productData?.variationObj?.warehouse_arr) {
      //   const warehouses = productData.variationObj.warehouse_arr.map((warehouse) => ({
      //     po_box: warehouse.po_box || '',
      //     quantity: warehouse.quantity || ''
      //   }));
      //   formik.setFieldValue('wareHouses', warehouses);
      // }

      if (productData?.variationObj?.warehouse_arr) {
        formik.setFieldValue(
          'wareHouses',
          productData.variationObj.warehouse_arr,
        );
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);

      console.log(error, 'ppooerror', storedToken);
      setResData([]);
    }
  };
  useEffect(() => {
    getProductVariantData();
  }, []);

  // const selectDoc = async nav => {
  //   try {
  //     const results = await DocumentPicker.pick({
  //       type: [
  //         DocumentPicker.types.pdf,
  //         DocumentPicker.types.images,
  //         DocumentPicker.types.video,
  //       ],
  //       allowMultiSelection: true,
  //     });

  //     console.log(results);
  //     // const fileNames = results.map(file => file.name);
  //     setSelectedFiles(results);
  //     formik.setFieldValue('selectedFiles', results);
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err)) {
  //       console.log('user cancelled the upload', err);
  //     } else {
  //       console.log(err);
  //     }
  //   }
  // };
  const selectDoc = async () => {
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
      const updatedFiles = [...selectedFiles, ...results];
      setSelectedFiles(updatedFiles);
      formik.setFieldValue('selectedFiles', updatedFiles);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('user cancelled the upload', err);
      } else {
        console.log(err);
      }
    }
  };

  // console.log(
  //   'resData.product_images_arr',
  //   resData?.variationObj?.product_images_arr,
  //   environmentVariables?.apiUrl,
  // );
  // const handleSelect = index => {
  //   if (size.includes(index)) {
  //     setSize(size.filter(item => item !== index));
  //   } else {
  //     setSize([...size, index]);
  //   }
  // };

  const bytesToKB = bytes => {
    return (bytes / 1024).toFixed(2);
  };

  const handleInputChange = (field, value) => {
    formik.setFieldValue(`${field}`, value);
  };

  const initialValues = {
    selectedFiles: [],
    variationType: '',
    variationValue: '',
    price: '',
    comparePriceAt: '',
    sku: '',
    wareHouses: [{po_box: '', quantity: ''}],
  };

  let formik = useFormik({
    initialValues,
    validationSchema: AddProductVariantSchema,
    onSubmit: async (values, action) => {
      const storedToken = await retrieveToken();
      let formData = new FormData();

      formData.append('product_id', productId);
      formData.append('id', mainId);

      console.log('values34343434', values, 'storedToken', storedToken);
      formData.append('compare_price_at', values?.comparePriceAt);
      formData.append('price', values?.price);
      // formData.append('sku', values?.sku);
      // formData.append('variation', values?.variationType);
      // formData.append('input_field', Number(values?.variationValue));

      values.wareHouses.forEach((warehouse, index) => {
        formData.append(`warehouse_arr[${index}][po_box]`, warehouse.po_box);
        formData.append(
          `warehouse_arr[${index}][quantity]`,
          warehouse.quantity,
        );
      });
      values?.selectedFiles?.forEach((driver, index) => {
        formData.append(`product_images_arr`, {
          uri: driver.uri,
          type: driver.type,
          name: driver.name,
        });
      });
      console.log("Tanujjjjjjjjjjjjjjjjj",`${environmentVariables?.apiUrl}/api/product/add_product_variant`)
      await axios({
        method: 'post',
        url: `${environmentVariables?.apiUrl}/api/product/add_product_variant`,
        headers: {
          'Content-Type': 'multipart/form-data',
          _token: storedToken,
        },

        data: formData,
      })
        .then(response => {
          console.log(response.data, 'otpres');
          ToastAndroid.showWithGravityAndOffset(
            response.data.message,
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            25,
            50,
          );

          // nav.navigation.navigate('Product');
        })
        .catch(error => {
          console.log(
            'error_123',
            error?.response?.data?.message,
            error?.message,
            environmentVariables?.apiUrl,
          );
          // ToastAndroid.showWithGravityAndOffset(
          //   error.response.data.message,
          //   ToastAndroid.LONG,
          //   ToastAndroid.CENTER,
          //   25,
          //   50,
          // );
        });
    },
  });
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    formik;

  const handleAddWareHouses = () => {
    const newWarehouse = {po_box: '', quantity: ''};
    const updatedWarehouses = [...formik.values.wareHouses, newWarehouse];
    formik.setFieldValue('wareHouses', updatedWarehouses);
  };

  const handleDeleteWareHouses = index => {
    const updatedWarehouses = formik.values.wareHouses.filter(
      (_, i) => i !== index,
    );
    formik.setFieldValue('wareHouses', updatedWarehouses);
  };

  const handleInputChangeSelect = (index, field, value) => {
    const updatedWarehouses = formik.values.wareHouses.map((warehouse, i) =>
      i === index ? {...warehouse, [field]: value} : warehouse,
    );
    formik.setFieldValue('wareHouses', updatedWarehouses);
  };

  const handeleteImages = async imgname => {
    const storedToken = await retrieveToken();
    let config = {
      method: 'delete',
      url: `${environmentVariables?.apiUrl}/api/product/delete_variant_image?product_id=${productId}&variant_id=${mainId}&image=${imgname}`,
      headers: {
        _token: storedToken,
        'Content-Type': 'application/json',
      },
    };

    axios
      .request(config)
      .then(response => {
        getProductVariantData();
        console.log(response.data.message, 'aaasasasas');
      })
      .catch(error => {
        console.log(error?.response?.data?.message, error?.message, 'kklklklk');
      });
  };

  return (
    <ScrollView>
      <View className="flex flex-col gap-y-2 h-full mb-14  bg-[#f5f5f5]">
        <ScrollView keyboardShouldPersistTaps="handled">
          {loader ? (
            <ActivityIndicator />
          ) : (
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
                    titleStyle={{
                      color: '#0058ff',
                      fontSize: 13,
                      paddingTop: 4.5,
                    }}
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
                          source={require('../../Assets/image/file_upload.png')}
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

              {values?.selectedFiles.length > 0 && (
                <View>
                  <Text className="text-[#7e84a3] text-[13px] font-[Roboto-Medium]">
                    Uploaded Files
                  </Text>
                  {values?.selectedFiles.map((file, index) => (
                    <View
                      key={index}
                      className="flex flex-row justify-between mt-3">
                      <View className="flex flex-row p-2 bg-white rounded-xl">
                        <View className="flex flex-row items-center gap-x-2">
                          {/* {console.log('fffff', file)} */}
                          {file.type.startsWith('image/') ? (
                            <Image
                              style={{
                                height: 49,
                                width: 49,
                                borderRadius: 24.5,
                              }}
                              source={{uri: file.uri}}
                            />
                          ) : file.type === 'video/mp4' ? (
                            <View
                              style={{
                                height: 49,
                                width: 49,
                                borderRadius: 24.5,
                                backgroundColor: 'black',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <Text style={{color: 'white', fontSize: 10}}>
                                MP4
                              </Text>
                            </View>
                          ) : (
                            <View
                              style={{
                                height: 49,
                                width: 49,
                                borderRadius: 24.5,
                                backgroundColor: 'gray',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <Text style={{color: 'white', fontSize: 10}}>
                                File
                              </Text>
                            </View>
                          )}
                          <View className="flex flex-col">
                            <Text className="text-[#00274d] text-[10px]">
                              {file.name}
                            </Text>
                            <Text className="text-[#7e84a3] text-[8px]">
                              {file.size ? `${bytesToKB(file.size)} KB` : ''}
                            </Text>
                          </View>
                        </View>
                        <TouchableOpacity
                          className="pl-3"
                          onPress={() => {
                            // const updatedFiles = selectedFiles.filter(
                            //   (_, i) => i !== index,
                            // );
                            // setSelectedFiles(updatedFiles);
                            // formik.setFieldValue('selectedFiles', updatedFiles);
                            handeleteImages(file?.name);
                          }}>
                          <AntDesign name="close" size={12} color="#7e84a3" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
                </View>
              )}

              <View className="flex flex-col w-full">
                <View className="flex flex-column w-full mb-2">
                  <View className="w-full pr-1">
                    <Text style={styles.textTitle}>Variation</Text>
                    <AddVariantionType
                      placeholder="Select variation"
                      value={formik?.values?.variationType}
                      setValue={value => {
                        console.log('value', value);
                        handleInputChange('variationType', value);
                      }}
                      formik={formik}
                    />

                    {formik.touched.variationType &&
                      formik.errors.variationType && (
                        <Text style={{color: 'red', fontSize: 12}}>
                          {formik.errors.variationType}
                        </Text>
                      )}
                  </View>
                  <View className="w-full pr-1">
                    <Text style={styles.textTitle}>Input Field</Text>
                    <TextInput
                      style={styles.input}
                      className="!border-none pl-4 !border-white"
                      borderRadius={10}
                      placeholderTextColor="rgb(210, 210, 210)"
                      placeholder="Enter variation value"
                      value={formik?.values?.variationValue}
                      onChangeText={value =>
                        handleInputChange('variationValue', value)
                      }
                      onBlur={() => formik.handleBlur(`variationValue`)}
                    />

                    {formik.touched.variationValue &&
                      formik.errors.variationValue && (
                        <Text style={{color: 'red', fontSize: 12}}>
                          {formik.errors.variationValue}
                        </Text>
                      )}
                  </View>
                </View>
              </View>

              <View className="flex flex-row w-[100%]">
                <View className="w-[50%] pr-1">
                  <Text style={styles.textTitle}>Price</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="00.00 AED"
                    className="!border-none pl-4 !border-white"
                    borderRadius={10}
                    name="price"
                    value={values.price}
                    onChangeText={handleChange('price')}
                    onBlur={handleBlur('price')}
                    placeholderTextColor="rgb(210, 210, 210)"
                  />
                  {errors.price && touched.price && (
                    <Text style={{color: 'red', fontSize: 12}}>
                      {errors.price}
                    </Text>
                  )}
                </View>
                <View className="w-[50%] pl-1">
                  <Text style={styles.textTitle}>Compare Price at</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="00.00 AED"
                    className="!border-none pl-4 !border-white"
                    borderRadius={10}
                    placeholderTextColor="rgb(210, 210, 210)"
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
                <View className="w-[100%] pl-1">
                  <Text style={styles.textTitle}>SKU</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="00.00"
                    className="!border-none pl-4 !border-white"
                    borderRadius={10}
                    placeholderTextColor="rgb(210, 210, 210)"
                    name="sku"
                    value={values.sku}
                    onChangeText={handleChange('sku')}
                    onBlur={handleBlur('sku')}
                  />
                  {touched.sku && errors.sku && (
                    <Text style={{color: 'red', fontSize: 12}}>
                      {errors.sku}
                    </Text>
                  )}
                </View>
              </View>

              <View className="flex flex-col w-full ">
                {values?.wareHouses?.map((warehouse, index) => (
                  <View key={index} className="flex flex-column w-full mb-2">
                    {/* {console.log('valueiiii', warehouse?.po_box)} */}
                    <View className="w-full pr-1">
                      <Text style={styles.textTitle}>WareHouse</Text>
                      <AddWareHouseType
                        placeholder="Select Warehouse"
                        value={warehouse.po_box}
                        // value={formik.values.wareHouses[index].po_box}
                        setValue={value =>
                          handleInputChangeSelect(index, 'po_box', value)
                        }
                        formik={formik}
                      />
                      {/* <TextInput
                        style={styles.input}
                        className="!border-none pl-4 !border-white"
                        borderRadius={10}
                        placeholderTextColor="rgb(210, 210, 210)"
                        placeholder="Enter warehouse value"
                        value={warehouse.po_box}
                        onChangeText={value =>
                          handleInputChangeSelect(index, 'po_box', value)
                        }
                        onBlur={() =>
                          formik.handleBlur(`wareHouses[${index}].quantity`)
                        }
                      /> */}

                      {formik.touched.wareHouses &&
                        formik.touched.wareHouses[index] &&
                        formik.errors.wareHouses &&
                        formik.errors.wareHouses[index] &&
                        formik.errors.wareHouses[index].po_box && (
                          <Text style={{color: 'red', fontSize: 12}}>
                            {formik.errors.wareHouses[index].po_box}
                          </Text>
                        )}
                    </View>
                    <View className="w-full pr-1">
                      <Text style={styles.textTitle}>Quantity</Text>
                      <TextInput
                        style={styles.input}
                        className="!border-none pl-4 !border-white"
                        borderRadius={10}
                        placeholderTextColor="rgb(210, 210, 210)"
                        placeholder="Enter warehouse value"
                        value={warehouse.quantity}
                        onChangeText={value =>
                          handleInputChangeSelect(index, 'quantity', value)
                        }
                        onBlur={() =>
                          formik.handleBlur(`wareHouses[${index}].quantity`)
                        }
                      />
                      {formik.touched.wareHouses?.[index]?.quantity &&
                        formik.errors.wareHouses?.[index]?.quantity && (
                          <Text style={{color: 'red', fontSize: 12}}>
                            {formik.errors.wareHouses[index].quantity}
                          </Text>
                        )}

                      {index > 0 && (
                        <TouchableOpacity
                          onPress={() => handleDeleteWareHouses(index)}>
                          <View className="w-24 p-2 text-center bg-[#e6e9f4] items-center justify-center flex flex-row rounded-[5px] mt-2">
                            <Image
                              source={require('../../Assets/image/trash.png')}
                              style={{
                                height: 18,
                                width: 15,
                                tintColor: '#7e84a3',
                              }}
                            />
                            <Text className="text-center text-[#7e84a3] ml-2">
                              Delete
                            </Text>
                          </View>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                ))}
                {formik.errors.wareHouses && formik.touched.wareHouses && (
                  <Text style={{color: 'red', fontSize: 12}}>
                    At least one warehouse should be selected
                  </Text>
                )}
                <TouchableOpacity
                  className="w-32 p-2 text-center bg-[#f96900] items-center justify-center flex flex-row rounded-[5px] mt-2"
                  onPress={handleAddWareHouses}>
                  <MaterialIcons name="add" size={18} color="white" />
                  <Text className="ml-2 text-center text-white font-[Roboto-Regular] text-[12px]">
                    Add WareHouse
                  </Text>
                </TouchableOpacity>
              </View>
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
          )}
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
  input: {
    paddingTop: 4,
    paddingBottom: 4,
    marginTop: 3,
    borderWidth: 1,
    color: 'gray',
    fontSize: 13,
    backgroundColor: 'white',
    fontFamily: 'Poppins-Light',
  },
});
