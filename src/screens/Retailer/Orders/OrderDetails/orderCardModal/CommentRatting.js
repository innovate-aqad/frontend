import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import {
  blue,
  customLightState,
  grayColor,
  lightGray,
  textColorCustom,
  white,
} from '../../../../../constants/Theme';
import {POPPINS, ROBOTO} from '../../../../../constants/CustomFontFamily';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Textarea from 'react-native-textarea';
import Checkbox from '../../../../../Shared/Checkbox';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const DrawerModal = ({isVisible,setIsVisible,handleSubmit}) => {
  const navigation = useNavigation();
  return (
    <Modal
      isVisible={isVisible}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      //   deviceHeight={300}
      swipeDirection={['up', 'left', 'right', 'down']}
        onBackdropPress={() => {
            setIsVisible(!isVisible)
        }}
        onBackButtonPress={() => {
            setIsVisible(!isVisible)
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
        <View
          className="flex flex-row bg-white mt-1 shadow rounded-[15px]"
          style={{shadowColor: lightGray}}>
          <Image
            style={{height: 80, width: 80, borderRadius: 15}}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8SfVm34eY9PL3DKdp1bJ0G5zXvQ6CxAiqg&s',
            }}
          />
          <View className="flex flex-col p-2">
            <Text
              style={{
                color: grayColor,
                fontFamily: POPPINS.PoppinsRegular,
                fontSize: 10,
                letterSpacing: 0.3,
                lineHeight: 13,
              }}>
              Sony
            </Text>
            <Text
              style={{
                lineHeight: 15,
                color: blue,
                fontSize: 13,
                fontFamily: POPPINS.PoppinsMedium,
                letterSpacing: 0.08,
              }}>
              Product Name
            </Text>
            <View style={styles.infoRow}>
              <Text style={styles.orderNumber}>Color : Mate Black</Text>
              <View style={styles.timeContainer}>
                <View style={styles.dot} />
                <Text style={styles.timeText}>Unit : 500 </Text>
              </View>
            </View>
            <Text
              style={{
                color: textColorCustom,
                fontSize: 13,
                fontFamily: POPPINS.PoppinsMedium,
                letterSpacing: 0.08,
              }}>
              5945 AED
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: blue,
            textAlign: 'center',
            fontFamily: ROBOTO.RobotoMedium,
            marginVertical: 15,
          }}>
          What is you rate ?
        </Text>
        <View className="flex flex-row justify-between mx-5">
          <Ionicons name="star" color={'#ffc700'} size={40} />
          <Ionicons name="star" color={'#ffc700'} size={40} />
          <Ionicons name="star" color={'#ffc700'} size={40} />
          <Ionicons name="star" color={'#e6e9f4'} size={40} />
          <Ionicons name="star" color={'#e6e9f4'} size={40} />
        </View>
        <Text
          style={{
            color: blue,
            fontFamily: POPPINS.PoppinsMedium,
            fontSize: 13,
            marginTop: 15,
          }}>
          Minus degusto repellendus vestigium utique vulgus facere totidem
          aetas.
        </Text>
        <Textarea
          containerStyle={styles.textareaContainer}
          style={styles.textarea}
          // onChangeText={th}
          placeholder={'Tell us more about your experience in just 200 word'}
          placeholderTextColor={'#c7c7c7'}
          
          underlineColorAndroid={'transparent'}
        />
        <View className="flex flex-row my-3">
            <Checkbox/>
            <Text style={{fontSize:10,color:blue,fontFamily:POPPINS.PoppinsRegular,marginRight:5}}>Vicissitudo derideo conqueror tandem armarium vis vulnus cognatus quibusdam.</Text>

        </View>
        <View className="flex flex-row mx-auto">
            <TouchableOpacity onPress={()=>setIsVisible(false)} style={{borderColor:textColorCustom,borderWidth:1,height:35,width:100,alignItems:"center",justifyContent:"center",borderRadius:5}}>
                <Text style={{color:textColorCustom}}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleSubmit()} style={{borderColor:textColorCustom,borderWidth:1,height:35,width:100,alignItems:"center",justifyContent:"center",borderRadius:5,marginLeft:10,backgroundColor:textColorCustom}}>
                <Text style={{color:white}}>Submit</Text>
            </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  
  textareaContainer: {
    height: 120,
    padding: 5,
    backgroundColor: '#f5f5f5',
    borderRadius:10,
    color:grayColor

  },
  textarea: {
    textAlignVertical: 'top', // hack android
    height: 120,
    fontSize: 10,
    color: '#333',
  },
  slide: {
    height: 4,
    width: 90,
    backgroundColor: customLightState,
    borderRadius: 2,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },
  infoRow: {
    flexDirection: 'row',
    gap: 2,
  },
  orderNumber: {
    color: grayColor,
    fontSize: 8,
    letterSpacing: 0.24,
    fontFamily: POPPINS.PoppinsRegular,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
  dot: {
    backgroundColor: grayColor,
    borderRadius: 2,
    height: 3,
    width: 3,
    marginLeft: 10,
  },
  timeText: {
    color: grayColor,
    fontSize: 8,
    paddingLeft: 4,
    fontFamily: POPPINS.PoppinsRegular,
  },
});

export default DrawerModal;
