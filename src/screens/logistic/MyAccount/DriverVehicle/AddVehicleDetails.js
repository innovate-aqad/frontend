import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
import {
  customRed,
  grayColor,
  screenBackground,
} from '../../../../constants/Theme';
import InputTextField from '../../../../Shared/InputTextField';
import CustomStyle from '../../../../Styles';
import {POPPINS} from '../../../../constants/CustomFontFamily';
import CustomButton from '../../../../Shared/CustomButton';

export default function AddVehicleDetails() {
  const [image, setImage] = useState('');
  const [selectedDocuments, setSelectedDocuments] = useState({
    vatCertificateDocument: null,
  });
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
  const selectDocument = async (documentType, formikField) => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
        allowMultiSelection: false,
      });

      if (doc && doc.length > 0) {
        const selectedDoc = doc[0];
        // formik.setFieldValue(formikField, selectedDoc);
        setSelectedDocuments(prev => ({
          ...prev,
          [documentType]: selectedDoc.name,
        }));
      }
    } catch (err) {
      console.error('Error selecting document: ', err);
    }
  };
  return (
    <View className="h-screen m-4" style={{backgroundColor: screenBackground}}>
      <View>
        <Text style={CustomStyle.inputLabel}>Vehicle Type </Text>
        <InputTextField placeholderTextColor={'Enter vehicle type'} />
      </View>
      <View className="mt-3">
        <Text style={CustomStyle.inputLabel}>Vehicle Brand </Text>
        <InputTextField placeholderTextColor={'Enter vehicle brand'} />
      </View>
      <View className="mt-3">
        <Text style={CustomStyle.inputLabel}>Vehicle Number </Text>
        <InputTextField placeholderTextColor={'Enter vehicle number'} />
      </View>
      <View className="mt-3">
        <View className="flex flex-row justify-between">
          <Text style={CustomStyle.inputLabel}>Registration Certificate</Text>
          <Text
            style={[
              CustomStyle.inputLabel,
              {
                color: customRed,
                fontSize: 10,
                fontFamily: POPPINS.PoppinsSemiBold,
              },
            ]}>
            Verify
          </Text>
        </View>
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
              color: grayColor,
              fontSize: 10,
            }}
            left={props => (
              <View className="flex flex-row items-center pt-2 pb-2.5 pl-3 border rounded-full pr-7 border-[#D0DFFF] bg-[#E6EEFF]">
                <Image
                  style={{height: 24, width: 20}}
                  source={require('../../../../Assets/image/file_upload.png')}
                />
              </View>
            )}
          />
        </TouchableOpacity>
      </View>
      <View className="absolute w-full bottom-36">
        <CustomButton text={'ADD VEHICLE'} />
      </View>
    </View>
  );
}
