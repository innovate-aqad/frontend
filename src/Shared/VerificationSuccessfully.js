import {
  StyleSheet,
  Text,
  View,
  // Modal,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';

import {POPPINS, ROBOTO} from '../constants/CustomFontFamily';
import {blue, textColorCustom} from '../constants/Theme';
import Modal from 'react-native-modal';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const VerificationSuccessfully = () => {
  return (
    <Modal
      isVisible={true}
      // animationIn={'slideInUp'}
      // animationOut={'slideOutDown'}
      //   deviceHeight={300}
      // swipeDirection={['up', 'left', 'right', 'down']}
      // onBackdropPress={() => {
      //     setIsVisible(!isVisible)
      // }}
      // onBackButtonPress={() => {
      //     setIsVisible(!isVisible)
      // }}
      backdropColor="#00274D"
      backdropOpacity={0.5}
      animationType="slide"
      style={{width: width - 40, marginVertical: 50}}>
      <View style={styles.modalView}>
        <Image
          source={require('../Assets/image/verification.png')}
          style={{
            height: 100,
            width: 100,
          }}
        />
        <View>
          <Text
            style={{
              fontFamily: ROBOTO.RobotoMedium,
              color: blue,
              fontSize: 19,
              textAlign: 'center',
            }}>
            Verification Successful
          </Text>
          <Text
            style={{
              fontFamily: POPPINS.PoppinsLight,
              color: blue,
              fontSize: 10,
              textAlign: 'center',
              marginTop: 2,
            }}>
            Thymbra praesentium vergo articulus ventito textilis adulatio
            commemoro deserunt peccatus.
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputOTP: {
    color: '#00274d',
    fontFamily: 'Roboto-ExtraBold',
    borderRadius: 10,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#00274d',
    width: 45,
    height: 50,
    textAlign: 'center',
  },
  // modalContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
  // },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    height: 350,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  closeText: {
    height: 35,
    width: 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: textColorCustom,
    justifyContent: 'center',
  },
});

export default VerificationSuccessfully;
