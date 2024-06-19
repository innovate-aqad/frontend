import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import {
  blue,
  customLightState,
} from '../../../../../constants/Theme';
import {POPPINS, ROBOTO} from '../../../../../constants/CustomFontFamily';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const SharingFeedback = ({feedBack,setFeedBack}) => {
  const navigation = useNavigation();
  return (
    <Modal
      isVisible={feedBack}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      swipeDirection={['up', 'left', 'right', 'down']}
        onBackdropPress={() => {
            setFeedBack(!feedBack)
        }}
        onBackButtonPress={() => {
            setFeedBack(!feedBack)
        }}
    >
      <View
        style={{
          //   flex: 1,
          marginLeft: -20,
          marginRight: -50,
          marginTop: 0,
          marginBottom: -500,
          width: width,
          height: 750,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          paddingHorizontal: 30,
          backgroundColor: '#fff',
        }}>
        <View style={styles.slide}></View>
        <View>
            <Image style={{height:115,width:115,margin:"auto"}} source={require("../../../../../Assets/image/retailer/feedback.png")} />
            <Text style={{
                color:blue,
                fontFamily:ROBOTO.RobotoMedium,fontSize:20,textAlign:"center"
            }}>
            Thanks For Sharing Feedback
            </Text>
            <Text style={{
                color:blue,
                fontFamily:POPPINS.PoppinsLight,marginTop:5,fontSize:10,textAlign:"center"
            }}>
            Thymbra praesentium vergo articulus ventito textilis adulatio commemoro deserunt peccatus.
            </Text>
        </View>
        
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  
  slide: {
    height: 4,
    width: 90,
    backgroundColor: customLightState,
    borderRadius: 2,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  }
});

export default SharingFeedback;
