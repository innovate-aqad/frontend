import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {blue, customLightState, grayColor, lightGray, screenBackground, textColorCustom, white} from '../constants/Theme';
import {POPPINS, ROBOTO} from '../constants/CustomFontFamily';
import message from '../Assets/image/settings/message.svg';
import email from '../Assets/image/settings/email.svg';
import question from '../Assets/image/settings/question.svg';
import SvgUri from 'react-native-svg-uri';
import { Divider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Textarea from 'react-native-textarea';
import Checkbox from '../Shared/Checkbox';

export default function RattingReview() {
  return (
    <View
      style={{backgroundColor: screenBackground, padding: 15, paddingTop: 30}}>
      <View className="flex flex-row items-center ">
        <Image
          style={{height: 15, width: 23.3}}
          source={require('../Assets/image/drawable-xhdpi/arrow_left.png')}
        />
        <Text style={styles.tabName}>RATINGS & REVIEWS</Text>
      </View>
      <View className="flex flex-col items-center mx-auto my-12 ">
        <Image
          style={{height: 100, width: 100}}
          source={require('../Assets/image/settings/review.png')}
        />
        <Text style={styles.heading}>
        Help us improve our
        product for you
        </Text>
      </View>
      <View className="mx-2 bg-white rounded-[15px] p-3">
      <Text
          style={{
            fontSize: 13,
            color: blue,
            // textAlign: 'center',
            fontFamily: POPPINS.PoppinsMedium,
            marginBottom: 15,
            marginTop:0
          }}>
          How would you like to describe your experience with the app today?
        </Text>
        <View className="flex flex-row justify-between ">
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
            <TouchableOpacity  style={{borderColor:textColorCustom,borderWidth:1,height:35,width:100,alignItems:"center",justifyContent:"center",borderRadius:5}}>
                <Text style={{color:textColorCustom}}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderColor:textColorCustom,borderWidth:1,height:35,width:100,alignItems:"center",justifyContent:"center",borderRadius:5,marginLeft:10,backgroundColor:textColorCustom}}>
                <Text style={{color:white}}>Submit</Text>
            </TouchableOpacity>

        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabName: {
    fontFamily: ROBOTO.RobotoBold,
    color: blue,
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
  heading: {
    fontFamily: ROBOTO.RobotoMedium,
    fontSize: 20,
    textAlign: 'center',
    color: blue,
    width: 180,
    marginTop: 16,
  },
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
