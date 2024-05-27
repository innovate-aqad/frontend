import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {Card} from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import {useFormik} from 'formik';
import {VendorRegisterSchema3} from '../../schemas/VendorRegisterSchema3';
import axios from 'axios';
import {environmentVariables} from '../../config/Config';

export default function VendorDocument(nav) {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [toggle, setToggle] = useState(true);

  const [selectedDocuments, setSelectedDocuments] = useState({
    vatCertificateDocument: null,
  });

  const mainId = nav.route.params.id;

  const redirectDocument = () => {
    nav.navigation.navigate('business');
    // nav.navigation.navigate('bottomTab');
  };

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 330,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, []);

  const initialValues = {
    tradeLicense: '',
    cancelledChequeDocument: '',
    cancelledChequeIBAN: '',
    vatCertificateDocument: '',
    emiratesIDDocument: '',
    emiratesIDNumber: '',
  };

  let formik = useFormik({
    initialValues,
    validationSchema: VendorRegisterSchema3,
    onSubmit: async (values, action) => {
      setToggle(false);
      let formdata = new FormData();
      formdata.append('slide', '3');
      formdata.append('user_type', 'vendor');
      formdata.append('doc_id', mainId);
      formdata.append('iban', values.cancelledChequeIBAN);
      formdata.append('emirates_id', values.emiratesIDNumber);

      Object.keys(values).forEach(key => {
        if (values[key] && typeof values[key] === 'object') {
          formdata.append(key, {
            uri: values[key].uri,
            type: values[key].type,
            name: values[key].name,
          });
        }
      });
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
            ToastAndroid.TOP,
            ToastAndroid.CENTER,
            25,
            50,
          );
          nav.navigation.navigate('Login');
        })
        .catch(error => {
          setToggle(true);
          ToastAndroid.showWithGravityAndOffset(
            error.response.data.message,
            ToastAndroid.TOP,
            ToastAndroid.CENTER,
            25,
            50,
          );
        });
    },
  });

  const selectDocument = async (documentType, formikField) => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
        allowMultiSelection: false,
      });

      if (doc && doc.length > 0) {
        const selectedDoc = doc[0];
        formik.setFieldValue(formikField, selectedDoc);
        setSelectedDocuments(prev => ({
          ...prev,
          [documentType]: selectedDoc.name,
        }));
      }
    } catch (err) {
      console.error('Error selecting document: ', err);
    }
  };

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    formik;

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View
        className="flex flex-col justify-center p-4   h-full bg-gray-100 !text-black
        ">
        <View className="relative flex flex-row items-center top-3 ">
          <TouchableOpacity onPress={() => nav.navigation.navigate('business')}>
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
            Vendor Info
          </Text>
          <Text
            className="pt-2 text-xs text-gray-400"
            style={{fontFamily: 'Poppins-Light'}}>
            Pick the type of account that suits your business or personal needs.
          </Text>
        </View>
        <View className="pt-3 ">
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
          {/* text */}
          <View>
            <Text
              className="text-2xl text-[#00274D] pt-3"
              style={{fontFamily: 'Roboto-Medium'}}>
              Document Verification
            </Text>
          </View>
          <View className="mt-3">
            <Text className="text-[#00274d] text-[13px] font-[Poppins-Medium]">
              Trade Licence
            </Text>
            <TouchableOpacity
              className="h-[76px]"
              onPress={() => selectDocument('tradeLicense', 'trade_license')}>
              <Card.Title
                className="bg-white shadow rounded-xl"
                title={selectedDocuments.tradeLicense || 'Click to Upload'}
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
          </View>
          <View className="mt-3">
            <Text className="text-[#00274d] text-[13px] font-[Poppins-Medium]">
              Cancelled Cheque / IBAN sdksdf
            </Text>
            <TouchableOpacity
              className="h-[76px]"
              onPress={() =>
                selectDocument('cancelledChequeDocument', 'cheque_scan')
              }>
              <Card.Title
                className="bg-white shadow rounded-xl"
                title={
                  selectedDocuments.cancelledChequeDocument || 'Click to Upload'
                }
                titleStyle={{color: '#0058ff', fontSize: 13, paddingTop: 4.5}}
                subtitle="(Max File Size:MB) File Formate: PDF JPEG, JPG"
                subtitleStyle={{
                  color: 'black',
                  paddingBottom: 4.5,
                  color: '#7e84a3',
                  fontSize: 10,
                }}
                left={props => (
                  <View className="flex flex-row items-center pt-2 pb-2.5 pl-3 border rounded-full pr-7 border-[#cdddfe] bg-[#E6EEFF]">
                    <Image
                      style={{height: 24, width: 20}}
                      source={require('../../Assets/image/file_upload.png')}
                    />
                  </View>
                )}
              />
            </TouchableOpacity>
            <TextInput
              className="py-2"
              style={styles.input}
              placeholder="Enter IBAN"
              placeholderTextColor={'#cbcbcb'}
              name="cancelledChequeIBAN"
              value={values?.cancelledChequeIBAN}
              onChangeText={handleChange('cancelledChequeIBAN')}
              onBlur={handleBlur('cancelledChequeIBAN')}
            />
          </View>
          <View className="mt-3">
            <Text className="text-[#00274d] text-[13px] font-[Poppins-Medium]">
              VAT Certificate
            </Text>
            <TouchableOpacity
              className="h-[76px]"
              onPress={() =>
                selectDocument('vatCertificateDocument', 'vat_certificate')
              }
              onChangeText={handleChange('vatCertificateDocument')}
              onBlur={handleBlur('vatCertificateDocument')}
              name="vatCertificateDocument"
              value={values?.vatCertificateDocument}>
              <Card.Title
                className="bg-white shadow rounded-xl"
                title={
                  selectedDocuments.vatCertificateDocument || 'Click to Upload'
                }
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
            {errors.vatCertificateDocument &&
              touched.vatCertificateDocument && (
                <Text style={{color: 'red'}}>
                  {errors.vatCertificateDocument}
                </Text>
              )}
          </View>
          <View className="mt-3">
            <Text className="text-[#00274d] text-[13px] font-[Poppins-Medium]">
              Emirates ID
            </Text>
            <TouchableOpacity
              className="h-[76px]"
              onPress={() =>
                selectDocument('emiratesIDDocument', 'emirate_id_pic')
              }>
              <Card.Title
                className="bg-white shadow rounded-xl"
                title={
                  selectedDocuments.emiratesIDDocument || 'Click to Upload'
                }
                titleStyle={{color: '#0058ff', fontSize: 13, paddingTop: 4.5}}
                subtitle="(Max File Size:MB) File Formate: PDF JPEG, JPG"
                subtitleStyle={{
                  color: 'black',
                  paddingBottom: 4.5,
                  color: '#7e84a3',
                  fontSize: 10,
                }}
                left={props => (
                  <View className="flex flex-row items-center pt-2 pb-2.5 pl-3 border rounded-full pr-7 border-[#cdddfe] bg-[#E6EEFF]">
                    <Image
                      style={{height: 24, width: 20}}
                      source={require('../../Assets/image/file_upload.png')}
                    />
                  </View>
                )}
              />
            </TouchableOpacity>
            <TextInput
              className="py-2"
              style={styles.input}
              placeholder="Enter Emirates ID number"
              placeholderTextColor={'#cbcbcb'}
              name="emiratesIDNumber"
              value={values?.emiratesIDNumber}
              onChangeText={handleChange('emiratesIDNumber')}
              onBlur={handleBlur('emiratesIDNumber')}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            toggle ? handleSubmit() : null;
          }}
          style={toggle ? styles.button : styles.button1}
          className="flex flex-row items-center justify-center mt-8 gap-x-2">
          <Text
            className="text-white flex flex-row  text-[19px]"
            style={{fontFamily: 'Roboto-Regular'}}>
            SUBMIT
          </Text>
          {toggle ? null : <ActivityIndicator size="small" color="#00274d" />}
        </TouchableOpacity>
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
    margin: 3,

    borderWidth: 0,
    borderRadius: 12,
    paddingLeft: 12,
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
  button1: {
    backgroundColor: '#F6E0D1',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
  },
  user: {
    alignSelf: 'center',
  },
  bar: {
    height: 5,
    backgroundColor: '#F96900',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#F96900', // Default button color
    padding: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    color: 'red',
  },
});
