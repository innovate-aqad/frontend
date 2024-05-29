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
import {
  SelectInput,
  SelectInputBrand,
  SelectInputSubCategory,
} from '../../../Shared/SelectInput';
import axios from 'axios';
import {useFormik} from 'formik';
import {AddProductSchema} from '../../../schemas/AddProductSchema';
import {environmentVariables} from '../../../config/Config';

export default function AddProduct(nav) {
  const [size, setSize] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [brandData, setBrandData] = useState([]);
  const [value, setValue] = useState('');
  const [valueSubCategory, setValueSubCategory] = useState('');
  const [valueBrand, setValueBrand] = useState('');
  const [toggle, setToggle] = useState(true);

  const getCategoriedData = async () => {
    try {
      const response = await axios.get(
        `${environmentVariables?.apiUrl}/api/category/get`,
      );
      // console.log(response?.data?.data);
      setCategoryData(response?.data?.data);
    } catch (error) {
      console.log(error, '000');
      setCategoryData([]);
    }
  };
  const getSubCategoriedData = async () => {
    console.log(value, 'value');
    try {
      const response = await axios.get(
        `${environmentVariables?.apiUrl}/api/sub_category/get_by_main_cat_id?category_id=${value}`,
      );
      setSubCategoryData(response?.data?.data);
    } catch (error) {
      console.log(error?.response?.data?.message, '1111');
      setSubCategoryData([]);
    }
  };
  const getBranddData = async () => {
    try {
      const response = await axios.get(
        `${environmentVariables?.apiUrl}/api/brand/get_by_main_cat_id?category_id=${value}`,
      );
      setBrandData(response?.data?.data);
    } catch (error) {
      // console.log(error, '222');
      setBrandData([]);
    }
  };
  useEffect(() => {
    getCategoriedData();
  }, []);
  useEffect(() => {
    getSubCategoriedData();
    getBranddData();
  }, [value]);

  const initialValues = {
    value: '',
    valueSubCategory: '',
    valueBrand: '',
    name: '',
    upc: '',
    description: '',
  };

  let formik = useFormik({
    initialValues,
    validationSchema: AddProductSchema,
    onSubmit: async (values, action) => {
      console.log('ppooo', values);
      nav.navigation.navigate('addVariation')
      // setToggle(false);
      // const formdata = new FormData();
      // formdata.append('title', 'pppppp');
      // formdata.append('universal_standard_code', 'ooooo');
      // formdata.append('brand_id', 'uuuuuu');
      // formdata.append('description', 'hhhhhhh');
      // formdata.append('category_id', 'bbbbbb');
      // formdata.append('sub_category_id', 'vvvvvvv');
      // await axios({
      //   method: 'post',
      //   url: `${environmentVariables?.apiUrl}/api/product/add`,
      //   data: formdata,
      // })
      //   .then(response => {
      //     ToastAndroid.showWithGravityAndOffset(
      //       response?.data?.message,
      //       ToastAndroid.TOP,
      //       ToastAndroid.CENTER,
      //       25,
      //       50,
      //     );
      //     setToggle(true);
      //     // nav.navigation.navigate('business', {id: response?.data?.data?.id});
      //   })
      //   .catch(error => {
      //     console.log('rtttt', error);
      //     nav.navigation.navigate('addVariation');
      //     setToggle(true);
      //     // ToastAndroid.showWithGravityAndOffset(
      //     //   error?.response?.data?.message || error?.message,
      //     //   ToastAndroid.TOP,
      //     //   ToastAndroid.CENTER,
      //     //   25,
      //     //   50,
      //     // );
      //   });
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

  console.log('powwwwwww', errors);
  return (
    <ScrollView>
      <View className="flex flex-col h-full mb-12  bg-[#f5f5f5]">
        <ScrollView keyboardShouldPersistTaps="handled">
          <View className="flex flex-col px-4 pt-3 mb-5 gap-y-3">
            <View>
              <Text className="text-[#00274d] text-[13px] font-[Roboto-Bold]">
                Product Information
              </Text>
            </View>
            <View className=""></View>
            <View className="flex flex-row w-full">
              <View className="w-full pr-1">
                <Text style={styles.textTitle}>Product Category</Text>
                <SelectInput
                  placeholder={'Select product category'}
                  data={categoryData}
                  setValue={setValue}
                  value={value}
                  formik={formik}
                  // name="value"
                  // onChangeText={handleChange('value')}
                  // onBlur={handleBlur('value')}
                />
                {errors.value && touched.value && (
                  <Text style={styles.errorHandle}>{errors.value}</Text>
                )}
              </View>
            </View>
            <View className="flex flex-row w-full ">
              <View className="w-full pr-1">
                <Text style={styles.textTitle}>Product Sub Category</Text>
                <SelectInputSubCategory
                  placeholder={'Select product sub category'}
                  data={subCategoryData}
                  setValue={setValueSubCategory}
                  value={valueSubCategory}
                  formik={formik}
                />
                {errors.valueSubCategory && touched.valueSubCategory && (
                  <Text style={styles.errorHandle}>
                    {errors.valueSubCategory}
                  </Text>
                )}
              </View>
            </View>
            <View className="flex flex-row w-full ">
              <View className="w-full pr-1">
                <Text style={styles.textTitle}>Product Brand</Text>
                <SelectInputBrand
                  placeholder={'Select product brand'}
                  data={brandData}
                  setValue={setValueBrand}
                  value={valueBrand}
                  formik={formik}
                />
                {errors.valueBrand && touched.valueBrand && (
                  <Text style={styles.errorHandle}>{errors.valueBrand}</Text>
                )}
              </View>
            </View>
            <View className="flex flex-row w-full ">
              <View className="w-full pr-1">
                <Text style={styles.textTitle}>Product Name</Text>
                <TextInput
                  style={styles.input}
                  name="name"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  placeholderTextColor="rgb(210, 210, 210)"
                  placeholder="Enter Product Name"
                  className="!border-none pl-4 !border-white"
                  borderRadius={10}
                />
                {errors.name && touched.name && (
                  <Text style={styles.errorHandle}>{errors.name}</Text>
                )}
              </View>
            </View>

            <View className="flex flex-row w-full ">
              <View className="w-full pr-1">
                <Text style={styles.textTitle}>
                  UPC (Universal Product Code)
                </Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="rgb(210, 210, 210)"
                  placeholder="Enter Product UPC"
                  className="!border-none pl-4 !border-white"
                  borderRadius={10}
                  name="upc"
                  value={values.upc}
                  onChangeText={handleChange('upc')}
                  onBlur={handleBlur('upc')}
                />
                {errors.upc && touched.upc && (
                  <Text style={styles.errorHandle}>{errors.upc}</Text>
                )}
              </View>
            </View>
            <View className="flex flex-row w-full ">
              <View className="w-full pr-1">
                <Text style={styles.textTitle}>Description</Text>
                <TextInput
                  style={styles.input}
                  numberOfLines={4}
                  placeholderTextColor="rgb(210, 210, 210)"
                  name="description"
                  value={values.description}
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  placeholder="Enter product description in 200 words"
                  className="!border-none pl-4 !border-white"
                  borderRadius={10}
                />
                {errors.description && touched.description && (
                  <Text style={styles.errorHandle}>{errors.description}</Text>
                )}
              </View>
            </View>

            <View className="mt-4">
              <TouchableOpacity
                className="z-50 rounded-lg"
                onPress={() => handleSubmit()}
                style={styles.button}>
                <Text
                  className="text-white"
                  style={{fontFamily: 'Poppins-SemiBold'}}>
                  ADD PRODUCT
                </Text>
                {toggle ? null : (
                  <ActivityIndicator size="small" color="#00274d" />
                )}
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
  errorHandle: {
    color: 'red',
    paddingLeft: 10,
    fontSize: 12,
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
