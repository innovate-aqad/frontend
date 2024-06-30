import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {blue, customLightState, grayColor, lightGray, screenBackground} from '../../../../constants/Theme';
import {POPPINS, ROBOTO} from '../../../../constants/CustomFontFamily';
import message from '../../../../Assets/image/settings/message.svg';
import email from '../../../../Assets/image/settings/email.svg';
import question from '../../../../Assets/image/settings/question.svg';
import whatsapp from '../../../../Assets/image/settings/whatsapp.svg';
import SvgUri from 'react-native-svg-uri';
import { Divider } from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Support(nav) {
  return (
    <ScrollView>
    <View
      style={{height:windowHeight-50,marginBottom:170 ,backgroundColor: screenBackground, padding: 15, paddingTop: 30}}>
      <View className="flex flex-row items-center ">
        <Image
          style={{height: 15, width: 23.3}}
          source={require('../../../../Assets/image/drawable-xhdpi/arrow_left.png')}
        />
        <Text style={styles.tabName}>SUPPORT</Text>
      </View>
      <View className="flex flex-col items-center mx-auto my-12 ">
        <Image
          style={{height: 131, width: 142}}
          source={require('../../../../Assets/image/settings/support.png')}
        />
        <Text style={styles.heading}>
          Hello, How can we help you today?
        </Text>
      </View>
      <View className="mx-2">
        <TouchableOpacity onPress={()=>nav.navigation.navigate("liveChat")} className="p-3 rounded-[15px] bg-white shadow" style={{shadowColor:lightGray}}>
          <View className="flex flex-row items-center justify-between" style={{marginHorizontal:10}}>
            <View className="flex flex-row">
              <SvgUri source={message} height={18} width={18} />
              <Text style={styles.subHeading}>Live Chat</Text>
            </View>
            <Image
              style={styles.rightIcon}
              source={require('../../../../Assets/image/angle-small-right.png')}
            />
          </View>
          <Divider style={styles.divider} />
          <Text style={styles.content}>
          Cito tergum contabesco ulterius derelinquo totidem thymbra caveo umbra.
          </Text>
        </TouchableOpacity>
        <View className="p-3 rounded-[15px] mt-3 bg-white shadow" style={{shadowColor:lightGray}}>
          <View className="flex flex-row items-center justify-between" style={{marginHorizontal:10}}>
            <View className="flex flex-row">
              <SvgUri source={whatsapp} height={18} width={18} />
              <Text style={styles.subHeading}>Whatsapp</Text>
            </View>
            <Image
              style={styles.rightIcon}
              source={require('../../../../Assets/image/angle-small-right.png')}
            />
          </View>
          <Divider style={styles.divider} />
          <Text style={styles.content}>
          Cito tergum contabesco ulterius derelinquo totidem thymbra caveo umbra.
          </Text>
        </View>
        <TouchableOpacity onPress={()=>nav.navigation.navigate("emailUs")} className="p-3 mt-3 rounded-[15px] bg-white shadow" style={{shadowColor:lightGray}}>
          <View className="flex flex-row items-center justify-between" style={{marginHorizontal:10}}>
            <View className="flex flex-row">
              <SvgUri source={email} height={18} width={18} />
              <Text style={styles.subHeading}>Email Us </Text>
            </View>
            <Image
              style={styles.rightIcon}
              source={require('../../../../Assets/image/angle-small-right.png')}
            />
          </View>
          <Divider style={styles.divider} />
          <Text style={styles.content}>
          Cito tergum contabesco ulterius derelinquo totidem thymbra caveo umbra.
          </Text>
        </TouchableOpacity>
        <View className="p-3 mt-3 rounded-[15px] bg-white shadow" style={{shadowColor:lightGray}}>
          <View className="flex flex-row items-center justify-between" style={{marginHorizontal:10}}>
            <View className="flex flex-row">
              <SvgUri source={question} height={18} width={18} />
              <Text style={styles.subHeading}>FAQ's </Text>
            </View>
            <Image
              style={styles.rightIcon}
              source={require('../../../../Assets/image/angle-small-right.png')}
            />
          </View>
          <Divider style={styles.divider} />
          <Text style={styles.content}>
          Cito tergum contabesco ulterius derelinquo totidem thymbra caveo umbra.
          </Text>
        </View>
      </View>
    </View>
    </ScrollView>
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
    width: 164,
    marginTop: 16,
  },
  subHeading: {
    fontFamily: ROBOTO.RobotoRegular,
    fontSize: 13,
    color: blue,
    marginLeft: 10,
  },
  rightIcon: {height: 25, width: 13, tintColor: blue},
  divider:{
    color:customLightState,
    marginVertical:10
  },
  content:{
    color:grayColor,
    fontSize:10,
    fontFamily:POPPINS.PoppinsLight,
    marginHorizontal:10
  }
});
