import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Dimensions,
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
import {ROBOTO} from '../../../../constants/CustomFontFamily';
import Modal from 'react-native-modal';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AddVariationModal = () => {
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
        backdropColor='#00274D'
        backdropOpacity={0.6}
        animationType="slide"
        >
        <View style={[styles.centeredView]}>
          <View style={styles.modalView}>
            <View className="flex flex-row justify-between p-2">
              <Text>dd</Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <AntDesign name="close" size={20} color={lightGray} />
              </TouchableOpacity>
            </View>
            <View className="m-2">
              <Text style={CustomStyle.inputLabel}>Option Name</Text>
              <SelectInputOtion />
              <Text style={[CustomStyle.inputLabel, {marginTop: 8}]}>
                Types
              </Text>
              <View className="h-36">
                <SelectMultiple />
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
      <CustomAddButton onPress={() => setModalVisible(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin:"auto"
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

export default AddVariationModal;
