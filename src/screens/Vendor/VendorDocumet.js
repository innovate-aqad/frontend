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
import {success} from '../../constants/ToastMessage';
import VelidationSymbol from '../../constants/VelidationSymbol';
import { POPPINS, ROBOTO } from '../../constants/CustomFontFamily';
import { blue, textColorCustom, white } from '../../constants/Theme';
import CustomStyle from '../../Styles';

export default function VendorDocument(nav) {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [toggle, setToggle] = useState(true);

  const [selectedDocuments, setSelectedDocuments] = useState({
    vat_certificate: null,
  });

  const mainId = nav.route.params.id;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 330,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, []);

  const initialValues = {
    trade_license: '',
    cheque_scan: '',
    cancelledChequeIBAN: '',
    vat_certificate: '',
    emirate_id_pic: '',
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
          console.log(
            {
              uri: values[key].uri,
              type: values[key].type,
              name: values[key].name,
            },
            'namamammammammma',
          );
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
          success({type: 'success', text: response.data.message});
          nav.navigation.navigate('Login');
        })
        .catch(error => {
          setToggle(true);
          console.log(error,"errorerrorerror");
          success({
            type: 'error',
            text: error?.response?.data?.message || error?.message,
          });
        });
    },
  });

  const selectDocument = async (documentType, formikField) => {
    console.log('formikField', formikField, documentType);
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
          <TouchableOpacity
            onPress={() => nav.navigation.navigate('business', {id: mainId})}>
            <Image
              style={CustomStyle.topNavigation}
              source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
            />
          </TouchableOpacity>
        </View>
        <View className="mt-5">
          <Text
            style={CustomStyle.signupHeading}>
            Vendor Info
          </Text>
          <Text
            style={CustomStyle.signupSubDec}>
            Pick the type of account that suits your business or personal needs.
          </Text>
        </View>
        <View className="pt-3 ">
          {/* progressbar */}
          <View className="flex flex-col">
            <View className="flex flex-row justify-between ">
              <Text
                style={{fontFamily: POPPINS.PoppinsRegular,color:textColorCustom}}>
                Profile Upload (3/3)
              </Text>
              <Text
                style={{fontFamily: POPPINS.PoppinsRegular,color:textColorCustom}}>
                100%
              </Text>
            </View>

            <Animated.View style={[styles.bar, {width: progress}]} />
          </View>
          {/* text */}
          <View>
            <Text
              className="pt-3 text-2xl"
              style={{fontFamily: ROBOTO.RobotoMedium,color:blue}}>
              Document Verification
            </Text>
          </View>
          <View className="mt-3">
            <Text style={CustomStyle.inputLabel}>
              Trade Licence
            </Text>
            <TouchableOpacity
              className="h-[76px]"
              onPress={() => selectDocument('trade_license', 'trade_license')}>
              <Card.Title
                className="bg-white shadow rounded-xl"
                title={selectedDocuments.trade_license || 'Click to Upload'}
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
            <Text style={CustomStyle.inputLabel}>
              Cancelled Cheque / IBAN sdksdf
            </Text>
            <TouchableOpacity
              className="h-[76px]"
              onPress={() => selectDocument('cheque_scan', 'cheque_scan')}>
              <Card.Title
                className="bg-white shadow rounded-xl"
                title={selectedDocuments.cheque_scan || 'Click to Upload'}
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
            <Text style={CustomStyle.inputLabel}>
              VAT Certificate <VelidationSymbol />
            </Text>
            <TouchableOpacity
              className="h-[76px]"
              onPress={() =>
                selectDocument('vat_certificate', 'vat_certificate')
              }
              onChangeText={handleChange('vat_certificate')}
              onBlur={handleBlur('vat_certificate')}
              name="vat_certificate"
              value={values?.vat_certificate}>
              <Card.Title
                className="bg-white shadow rounded-xl"
                title={selectedDocuments.vat_certificate || 'Click to Upload'}
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
            {errors.vat_certificate && touched.vat_certificate && (
              <Text style={{color: 'red'}}>{errors.vat_certificate}</Text>
            )}
          </View>
          <View className="mt-3">
            <Text style={CustomStyle.inputLabel}>
              Emirates ID
            </Text>
            <TouchableOpacity
              className="h-[76px]"
              onPress={() =>
                selectDocument('emirate_id_pic', 'emirate_id_pic')
              }>
              <Card.Title
                className="bg-white shadow rounded-xl"
                title={selectedDocuments.emirate_id_pic || 'Click to Upload'}
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
          className="flex flex-row items-center justify-center mt-8">
          <Text
            className=" flex flex-row  text-[19px]"
            style={{fontFamily: ROBOTO.RobotoRegular,color:white}}>
            SUBMIT
          </Text>
          {toggle ? null : (
            <ActivityIndicator className="ml-2" size="small" color={white} />
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({

  input: {
    margin: 3,
    borderWidth: 0,
    borderRadius: 12,
    paddingLeft: 12,
    color: 'gray',
    backgroundColor: white,
    fontFamily: POPPINS.PoppinsLight,
  },
  button: {
    backgroundColor: textColorCustom,
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
  },
  button1: {
    backgroundColor: textColorCustom,
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
  },
  bar: {
    height: 5,
    backgroundColor: textColorCustom,
    borderRadius: 10,
  },
  button: {
    backgroundColor: textColorCustom,
    padding: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    color: 'red',
  },
});
