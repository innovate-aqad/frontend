import React, {useState, useEffect} from 'react';
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
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Avatar, Card, IconButton} from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import { useFormik } from 'formik';
import { VendorRegisterSchema3 } from '../schemas/VendorRegisterSchema3';
import axios from 'axios';

export default function VendorDocument(nav) {
  const [progress, setProgress] = useState(new Animated.Value(0));
  // const [selectedTradeLicense, setSelectedTradeLicenseName] = useState(null);
  // const [selectedCancelledCheque, setSelectedCancelledChequeName] = useState(null);
  // const [selectedVATCertificate, setSelectedVATCertificate] = useState(null);
  // const [selectedEmiratesDoc, setSelectedEmiratesDoc] = useState(null);

  const [selectedDocuments, setSelectedDocuments] = useState({
    // tradeLicense: null,
    // cancelledChequeDocument: null,
    vatCertificateDocument: null,
    // emiratesIDDocument: null
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


  let formik =  useFormik({
      initialValues,
      validationSchema: VendorRegisterSchema3,
      onSubmit: async (values, action) => {
      
        console.log("values",values,errors)
        let formdata = new FormData();
        // formdata.append("trade_license", {
        //   uri: values.tradeLicense.uri,
        //   type: values.tradeLicense.type,
        //   name: values.tradeLicense.name
        // });
        // formdata.append("cheque_scan", {
        //   uri: values.cancelledChequeDocument.uri,
        //   type: values.cancelledChequeDocument.type,
        //   name: values.cancelledChequeDocument.name
        // });
        // formdata.append("vat_certificate", {
        //   uri: values.vatCertificateDocument.uri,
        //   type: values.vatCertificateDocument.type,
        //   name: values.vatCertificateDocument.name
        // });
        // formdata.append("emirate_id_pic", {
        //   uri: values.emiratesIDDocument.uri,
        //   type: values.emiratesIDDocument.type,
        //   name: values.emiratesIDDocument.name
        // });
        formdata.append("slide", "3");
        formdata.append("user_type", "vendor");
        formdata.append("doc_id", mainId);
        formdata.append("cancelledChequeIBAN", values.cancelledChequeIBAN);
        formdata.append("emiratesIDNumber", values.emiratesIDNumber);
     
        Object.keys(values).forEach(key => {
          if (values[key] && typeof values[key] === 'object') {
            formdata.append(key, {
              uri: values[key].uri,
              type: values[key].type,
              name: values[key].name
            });
          }
        });
        await axios({
          method: "post",
          url: `http://localhost:2000/api/user/register`,        
          headers :{
            "Content-Type":"multipart/form-data"
          },
          data: formdata,
        })
          .then((response) => {
            ToastAndroid.showWithGravityAndOffset(
              response.data.message,
              ToastAndroid.LONG,
              ToastAndroid.CENTER,
              25,
              50,
            );
            nav.navigation.navigate('Login');

          })
          .catch((error) => {
            ToastAndroid.showWithGravityAndOffset(
              error.response.data.message,
              ToastAndroid.LONG,
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
          [documentType]: selectedDoc.name
        }));
      }
    } catch (err) {
      console.error('Error selecting document: ', err);
    }
  };
  // const selectDocTradeLicense = async () => {
  //   try {
  //     const doc = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.pdf],
  //       allowMultiSelection: true,
  //     });

  //     formik.setFieldValue("tradeLicense", doc?.[0]?.uri);
  //     setSelectedTradeLicenseName(doc?.[0]?.name);
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err)) {
  //     } else {
  //     }
  //   }
  // };
  const selectDocTradeLicense = async () => {
    try {
      const docs = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images], // Allow both PDF and image files
        allowMultiSelection: false,  // Change to false if you want only one file to be selectable
      });
  
      if (docs && docs.length > 0) {
        const selectedDoc = docs[0];
        if (selectedDoc.type === "application/pdf" || selectedDoc.type === "image/jpeg" || selectedDoc.type === "image/jpg") {
          formik.setFieldValue("tradeLicense", selectedDoc);
          setSelectedTradeLicenseName(selectedDoc.name);
        } else {
          alert("Please select a PDF, JPEG, or JPG file.");
        }
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the upload', err);
      } else {
        console.log('Unknown error: ', err);
      }
    }
  };
  const selectDocCancelledChequeDocument = async () => {
    try {
      const docs = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images], // Allow both PDF and image files
        allowMultiSelection: false,  // Change to false if you want only one file to be selectable
      });      

      if (docs && docs.length > 0) {
        const selectedDoc = docs[0];
        if (selectedDoc.type === "application/pdf" || selectedDoc.type === "image/jpeg" || selectedDoc.type === "image/jpg") {
          formik.setFieldValue("cancelledChequeDocument", selectedDoc);
          setSelectedCancelledChequeName(selectedDoc.name);
        } else {
          alert("Please select a PDF, JPEG, or JPG file.");
        }
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('user cancelled the upload', err);
      } else {
        console.log(err);
      }
    }
  };
  const selectDocVATCertificate = async () => {
    try {     

      const docs = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images], // Allow both PDF and image files
        allowMultiSelection: false,  // Change to false if you want only one file to be selectable
      });      

      if (docs && docs.length > 0) {
        // Assuming you only want to handle the first selected document
        const selectedDoc = docs[0];
        if (selectedDoc.type === "application/pdf" || selectedDoc.type === "image/jpeg" || selectedDoc.type === "image/jpg") {
          formik.setFieldValue("vatCertificateDocument", selectedDoc);
          setSelectedVATCertificate(selectedDoc.name);
        } else {
          alert("Please select a PDF, JPEG, or JPG file.");
        }
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('user cancelled the upload', err);
      } else {
        console.log(err);
      }
    }
  };
  const selectEmiratesDoc = async () => {
    try {
    const docs = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images], // Allow both PDF and image files
        allowMultiSelection: false,  // Change to false if you want only one file to be selectable
      });      

      if (docs && docs.length > 0) {
        console.log("docs...",docs)
        // Assuming you only want to handle the first selected document
        const selectedDoc = docs[0];
        if (selectedDoc.type === "application/pdf" || selectedDoc.type === "image/jpeg" || selectedDoc.type === "image/jpg") {
          formik.setFieldValue("emiratesIDDocument", selectedDoc);
          setSelectedEmiratesDoc(selectedDoc.name);
        } else {
          alert("Please select a PDF, JPEG, or JPG file.");
        }
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('user cancelled the upload', err);
      } else {
        console.log(err);
      }
    }
  };


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik


  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View
        className="flex flex-col justify-center p-4   h-full bg-gray-100 !text-black
        ">
        <View className="relative flex flex-row items-center top-3 ">
          <Image
            style={styles.topNavigation}
            source={require('../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
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
              style={{fontFamily: 'Roboto-Medium'}}>
              Document Verification
            </Text>
          </View>
          <View className="mt-3">
            <Text className="text-[#00274d] text-[13px] font-[Poppins-Medium]">
              Trade Licence
            </Text>
            <TouchableOpacity className="h-[76px]" onPress={() => selectDocument('tradeLicense', 'trade_license')}>
              <Card.Title
                className="bg-white shadow rounded-xl"
                title={selectedDocuments.tradeLicense || "Click to Upload"}
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
                      source={require('../Assets/image/file_upload.png')}
                    />
                  </View>
                )}
              />
            </TouchableOpacity>
          </View>
          <View className="mt-3">
            <Text className="text-[#00274d] text-[13px] font-[Poppins-Medium]">
              Cancelled Cheque / IBAN 
            </Text>
            <TouchableOpacity className="h-[76px]" onPress={() => selectDocument('cancelledChequeDocument', 'cheque_scan')}>
              <Card.Title
                className="bg-white shadow rounded-xl"
                title={selectedDocuments.cancelledChequeDocument || "Click to Upload"}
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
                      source={require('../Assets/image/file_upload.png')}
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
            <TouchableOpacity className="h-[76px]" 
              onPress={() => selectDocument('vatCertificateDocument', 'vat_certificate')}
              // onBlur={handleBlur('vatCertificateDocument')}
            >
              <Card.Title
                className="bg-white shadow rounded-xl"
                title={selectedDocuments.vatCertificateDocument || "Click to Upload"}
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
                      source={require('../Assets/image/file_upload.png')}
                    />
                  </View>
                )}
              />
            </TouchableOpacity>
            {errors.vatCertificateDocument && touched.vatCertificateDocument && (
              <Text style={{ color: 'red' }}>{errors.vatCertificateDocument}</Text>
            )}
          </View>
          <View className="mt-3">
            <Text className="text-[#00274d] text-[13px] font-[Poppins-Medium]">
              Emirates ID
            </Text>
            <TouchableOpacity className="h-[76px]" onPress={()=> selectDocument('emiratesIDDocument', 'emirate_id_pic')}>
              <Card.Title
                className="bg-white shadow rounded-xl"
                title={selectedDocuments.emiratesIDDocument || "Click to Upload"}
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
                      source={require('../Assets/image/file_upload.png')}
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
          className="mt-8"
          onPress={() => handleSubmit()}
          style={styles.button}>
          <Text className="text-white" style={{fontFamily: 'Poppins-SemiBold'}}>
            SUBMIT
          </Text>
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
