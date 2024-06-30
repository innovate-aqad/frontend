import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  blue,
  grayColor,
  lightGray,
  textColorCustom,
  white,
} from '../../../../constants/Theme';
import CustomAddButton from '../../../../Shared/CustomAddButton';
import {SelectWarehouse} from '../../../../Shared/SelectInput';
import CustomStyle from '../../../../Styles';
import {ROBOTO} from '../../../../constants/CustomFontFamily';
import InputTextField from '../../../../Shared/InputTextField';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SelectWarehouseModal = () => {
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
              <Text></Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <AntDesign name="close" size={20} color={lightGray} />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <Text
              style={{
                fontFamily: ROBOTO.RobotoBold,
                fontSize: 13,
                color: blue,
                marginHorizontal: 10,
              }}>
              Select Warehouse
            </Text>
            <View>
              <View
                className="p-3 m-2"
                style={{backgroundColor: '#f5f5f5', borderRadius: 15}}>
                <Text style={CustomStyle.inputLabel}>Warehouse Address(1)</Text>
                <SelectWarehouse />
                <View>
                  <Text style={[CustomStyle.inputLabel, {marginTop: 8}]}>
                    Quantity
                  </Text>
                  <InputTextField placeholderTextColor={'Enter quantity'} />
                </View>
              </View>
              <View style={[styles.iconEditdel, {marginLeft: 10}]}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 6,
                  }}>
                  <Image
                    style={{height: 18, width: 15, tintColor: '#f0142f'}}
                    source={require('../../../../Assets/image/trash.png')}
                  />
                  <Text
                    style={{
                      fontFamily: ROBOTO.RobotoRegular,
                      color: '#f0142f',
                      fontSize: 12,
                    }}>
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <View
                className="p-3 m-2"
                style={{backgroundColor: '#f5f5f5', borderRadius: 15}}>
                <Text style={CustomStyle.inputLabel}>Warehouse Address(1)</Text>
                <SelectWarehouse />
                <View>
                  <Text style={[CustomStyle.inputLabel, {marginTop: 8}]}>
                    Quantity
                  </Text>
                  <InputTextField placeholderTextColor={'Enter quantity'} />
                </View>
              </View>
              <View className="ml-2">
              <CustomAddButton/>
              </View>
            </View>
            
            
            </ScrollView>

            <View className="flex flex-row mx-auto mt-3 mb-5">
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
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
      </Modal>
      {/* <CustomAddButton onPress={() => setModalVisible(true)} /> */}
      <TouchableOpacity onPress={() => setModalVisible(true)} className="flex flex-row">
      <MaterialIcons name="add" size={18} color={textColorCustom} />
      <Text style={{fontFamily:ROBOTO.RobotoRegular,color:textColorCustom,fontSize:13}}>Add</Text>
      </TouchableOpacity>
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
    // marginRight: 20,
    backgroundColor: white,
    borderRadius: 20,
    width: windowWidth - 45,
    height: windowHeight-190,
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

  iconEditdel: {
    height: 35,
    width: 100,
    borderRadius: 5,
    backgroundColor: '#FDDCE0',
    alignItems: 'center',
  },
});

export default SelectWarehouseModal;
