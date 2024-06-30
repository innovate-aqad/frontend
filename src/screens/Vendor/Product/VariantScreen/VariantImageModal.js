import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
// AntDesign
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  grayColor,
  lightGray,
  textColorCustom,
  white,
} from '../../../../constants/Theme';
import CustomAddButton from '../../../../Shared/CustomAddButton';
import {SelectInputOtion} from '../../../../Shared/SelectInput';
import CustomStyle from '../../../../Styles';
import SelectMultiple from '../../../../Shared/MultiSelect';
import CustomButton from '../../../../Shared/CustomButton';
import {POPPINS, ROBOTO} from '../../../../constants/CustomFontFamily';
import Modal from 'react-native-modal';
import {Card} from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const VariantImageModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        // animationType="slide"
        // transparent={true}
        // visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
        isVisible={modalVisible}
        backdropColor="#00274D"
        backdropOpacity={0.6}
        animationType="slide">
        <View style={[styles.centeredView]}>
          <View style={styles.modalView}>
            <View className="flex flex-row justify-between p-2">
              <Text>dd</Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <AntDesign name="close" size={20} color={lightGray} />
              </TouchableOpacity>
            </View>
            <View className="m-2">
              <Text style={CustomStyle.inputLabel}>Product Variant Image</Text>

              <TouchableOpacity
                className="h-[76px]"
                //   onPress={() => selectDocument('trade_license', 'trade_license')}
              >
                <Card.Title
                  className="bg-white shadow rounded-xl"
                  style={{shadowColor: grayColor}}
                  // title={selectedDocuments.trade_license || 'Click to Upload'}
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
                        source={require('../../../../Assets/image/file_upload.png')}
                      />
                    </View>
                  )}
                />
              </TouchableOpacity>

              <View className="mt-4">
                <Text
                  style={{
                    fontFamily: POPPINS.PoppinsMedium,
                    fontSize: 10,
                    color: grayColor,
                  }}>
                  Uploaded Images
                </Text>
                <View></View>
              </View>

              <View className="flex flex-row mx-auto mt-3">
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text
                    style={{
                      color: textColorCustom,

                      borderWidth: 1,
                      borderColor: textColorCustom,
                      fontSize: 13,
                      fontFamily: ROBOTO.RobotoRegular,
                      height: 35,
                      width: 100,
                      textAlign: 'center',
                      justifyContent: 'center',
                      paddingTop: 8,
                      borderRadius: 5,
                    }}>
                    CLOSE
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: white,
                      backgroundColor: textColorCustom,
                      fontSize: 13,
                      fontFamily: ROBOTO.RobotoRegular,
                      height: 35,
                      marginLeft: 6,
                      width: 100,
                      textAlign: 'center',
                      justifyContent: 'center',
                      paddingTop: 8,
                      borderRadius: 5,
                    }}>
                    SUBMIT
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* <CustomAddButton onPress={() => setModalVisible(true)} /> */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          backgroundColor: '#E6EEFF',
          padding: 7,
          borderRadius: 10,
        }}>
        <Image
          style={{height: 15, width: 15, tintColor: '#0058ff'}}
          source={require('../../../../Assets/image/vendor/add-image.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  },
  modalView: {
    marginRight: 40,
    backgroundColor: white,
    borderRadius: 20,
    width: windowWidth - 45,
    height: 360,
    shadowColor: grayColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    // padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'white',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default VariantImageModal;
