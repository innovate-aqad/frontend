import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {environmentVariables} from '../../config/Config';
import {retrieveToken} from '../../Shared/EncryptionDecryption/Token';
import {
  SelectInput,
  SelectInputBrand,
  SelectInputSubCategory,
} from '../../Shared/SelectInput';
import {useFormik} from 'formik';
import {AddProductSchema} from '../../schemas/AddProductSchema';

const EditProduct = nav => {
  const mainId = nav.route.params.id;
  const [toggle, setToggle] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [brandData, setBrandData] = useState([]);
  const [resData, setResData] = useState([]);
  const [value, setValue] = useState('');
  const [valueSubCategory, setValueSubCategory] = useState('');
  const [valueBrand, setValueBrand] = useState('');
  const [id, setId] = useState('');

  // console.log('ooooooo', mainId);
  const initialValues = {
    value: '',
    valueSubCategory: '',
    valueBrand: '',
    name: '',
    upc: '',
    description: '',
  };

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

  const getProductData = async () => {
    try {
      const storedToken = await retrieveToken();

      const response = await axios.get(
        `${environmentVariables?.apiUrl}/api/product/get_by_id?product_id=${mainId}`,
        {headers: {_token: storedToken}},
      );
      const productData = response?.data?.data;
      console.log('111111111111111111', productData);
      setResData(productData);
      setValue(productData?.category_id);
      setValueSubCategory(productData?.sub_category_id);
      setValueBrand(productData?.brand_id);
      setId(productData?.id);
      formik.setFieldValue('name', productData?.title);
      formik.setFieldValue('upc', productData?.universal_standard_code);
      formik.setFieldValue('description', productData?.description);
      formik.setFieldValue('value', productData?.category_id);
      formik.setFieldValue('valueSubCategory', productData?.sub_category_id);
      formik.setFieldValue('valueBrand', productData?.brand_id);
    } catch (error) {
      console.log(error, 'ppooerror');
      setResData([]);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  let formik = useFormik({
    initialValues,
    validationSchema: AddProductSchema,
    onSubmit: async (values, action) => {
      setToggle(true);

      console.log('values?.upc', values?.upc);
      const data = {
        title: values.name,
        universal_standard_code: values?.upc,
        brand_id: values?.valueBrand,
        description: values.description,
        category_id: values.value,
        sub_category_id: values?.valueSubCategory,
        id,
      };
      const storedToken = await retrieveToken();
      console.log('55555', storedToken);
      await axios({
        method: 'post',
        url: `${environmentVariables?.apiUrl}/api/product/add`,
        data: data,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          _token: storedToken,
        },
      })
        .then(response => {
          console.log('yesyesyesyesyes', response?.data);
          ToastAndroid.showWithGravityAndOffset(
            response?.data?.message,
            ToastAndroid.TOP,
            ToastAndroid.CENTER,
            25,
            50,
          );
          getProductData();
          // nav.navigation.navigate('addVariation', {
          //   id: response?.data?.data?.id,
          // });
          setToggle(false);
        })
        .catch(error => {
          console.log('rtttt', error?.response?.data?.message, error?.message);
          // nav.navigation.navigate('addVariation');
          setToggle(false);
          ToastAndroid.showWithGravityAndOffset(
            error?.response?.data?.message || error?.message,
            ToastAndroid.TOP,
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
                  formik={{
                    setFieldValue: (field, value) =>
                      (initialValues[field] = value),
                  }}
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
                  UPC (Universal Product Code)(Non Editable)
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
                  readOnly
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
                  {toggle ? (
                    <ActivityIndicator size="small" color="#00274d" />
                  ) : (
                    'Edit PRODUCT'
                  )}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {resData?.variation_arr?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  nav?.navigation?.navigate('editProductVariant', {
                    id: item?.id,
                  })
                }>
                <Text>{item?.sku}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default EditProduct;

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
