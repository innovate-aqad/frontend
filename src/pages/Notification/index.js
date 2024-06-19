import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  blue,
  customGreen,
  grayColor,
  lightGray,
  screenBackground,
  skyBlue,
  textColorCustom,
  white,
} from '../../constants/Theme';
import {POPPINS, ROBOTO} from '../../constants/CustomFontFamily';
import CustomStyle from '../../Styles';
import SvgUri from 'react-native-svg-uri';
import settings from '../../Assets/image/vendor/settings.svg';
import {useNavigation} from '@react-navigation/native';
import bell_ring from '../../Assets/image/vendor/bell_ring.svg';
import box_circle_check from '../../Assets/image/vendor/box_circle_check.svg';
import termsCondition from '../../Assets/image/vendor/termsCondition.svg';
import AntDesign from 'react-native-vector-icons/AntDesign';

// AntDesign
export default function Notification() {
  const navigate = useNavigation();
  return (
    <View style={{backgroundColor: screenBackground}}>
      <View className="flex flex-row items-center justify-around m-4 mt-8">
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <Image
            style={CustomStyle.topNavigation}
            source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <Text
          className="flex-1 text-[20px] text-center "
          style={{
            fontFamily: ROBOTO.RobotoBold,
            letterSpacing: 1,
            textTransform: 'uppercase',
            color: blue,
          }}>
          NOTIFICATIONS
        </Text>
        <SvgUri source={settings} width={24} />
      </View>
      <ScrollView>
        <View>
          <View className="mx-5">
            <Text style={styles.today}>Today</Text>
            <View className="flex flex-row w-full p-3 mt-3 rounded-[15px] bg-white">
              <View style={[styles.imageIcons, {backgroundColor: '#E6EEFF'}]}>
                <SvgUri source={box_circle_check} fill={skyBlue} />
              </View>
              <View className="w-full ml-2">
                <View className="flex w-[80%]  flex-row justify-between">
                  <Text style={styles.heading}>vilitas caritas aestus</Text>
                  <Text style={styles.time}>1 hour ago</Text>
                </View>
                <Text style={styles.desc}>
                  Defendo advoco deprecator alius calculus vulgus denuncio
                  dicta. Minus advoco volo damnatio
                </Text>
              </View>
            </View>
            <View className="flex flex-row w-full p-3 mt-1.5 rounded-[15px] bg-white">
              <View style={[styles.imageIcons, {backgroundColor: '#FEE8D9'}]}>
                <SvgUri source={bell_ring} fill={textColorCustom} />
              </View>
              <View className="w-full ml-2">
                <View className="flex w-[80%]  flex-row justify-between">
                  <Text style={styles.heading}>vilitas caritas aestus</Text>
                  <Text style={styles.time}>2 hour ago</Text>
                </View>
                <Text style={styles.desc}>
                  Defendo advoco deprecator alius calculus vulgus denuncio
                  dicta. Minus advoco volo damnatio
                </Text>
              </View>
            </View>
            <View className="flex flex-row w-full p-3 mt-1.5 rounded-[15px] bg-white">
              <View style={[styles.imageIcons, {backgroundColor: '#E9FBF5'}]}>
                <SvgUri source={bell_ring} fill={customGreen} />
              </View>
              <View className="w-full ml-2">
                <View className="flex w-[80%]  flex-row justify-between">
                  <Text style={styles.heading}>vilitas caritas aestus</Text>
                  <Text style={styles.time}>6 hour ago</Text>
                </View>
                <Text style={styles.desc}>
                  Defendo advoco deprecator alius calculus vulgus denuncio
                  dicta. Minus advoco volo damnatio
                </Text>
              </View>
            </View>
          </View>
          <View className="mx-5 mt-5">
            <Text style={styles.today}>This Weak</Text>
            <View className="flex flex-row w-full p-3 mt-3 rounded-[15px] bg-white">
              <View style={[styles.imageIcons, {backgroundColor: '#E6EEFF'}]}>
                {/* <SvgUri source={box_circle_check} fill={skyBlue} /> */}
                <AntDesign name="clockcircleo" color={'blue'} size={22} />
              </View>
              <View className="w-full ml-2">
                <View className="flex w-[80%]  flex-row justify-between">
                  <Text style={styles.heading}>vilitas caritas aestus</Text>
                  <Text style={styles.time}>1 hour ago</Text>
                </View>
                <Text style={styles.desc}>
                  Defendo advoco deprecator alius calculus vulgus denuncio
                  dicta. Minus advoco volo damnatio
                </Text>
                <View className="flex flex-row mt-3">
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: white,
                        backgroundColor: textColorCustom,
                        fontSize: 13,
                        fontFamily: ROBOTO.RobotoRegular,
                        height: 35,
                        width: 100,
                        textAlign: 'center',
                        justifyContent: 'center',
                        paddingTop: 8,
                        borderRadius: 5,
                      }}>
                      ACCEPT
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: textColorCustom,
                        marginLeft: 6,
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
                      DENY
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View className="flex flex-row w-full p-3 mt-1.5 rounded-[15px] bg-white">
              <View style={[styles.imageIcons, {backgroundColor: '#FDDCE0'}]}>
                <SvgUri
                  source={termsCondition}
                  fill={textColorCustom}
                  width={24}
                  height={24}
                />
              </View>
              <View className="w-full ml-2">
                <View className="flex w-[80%]  flex-row justify-between">
                  <Text style={styles.heading}>vilitas caritas aestus</Text>
                  <Text style={styles.time}>2 hour ago</Text>
                </View>
                <Text style={styles.desc}>
                  Defendo advoco deprecator alius calculus vulgus denuncio
                  dicta. Minus advoco volo damnatio
                </Text>
                <View className="flex flex-row items-center content-center">
                  <Text
                    style={[
                      styles.desc,
                      {
                        marginTop: 6,
                        width: 60,
                        fontSize: 10,
                        color: textColorCustom,
                        alignItems: 'center',
                      },
                    ]}>
                    See details{' '}
                  </Text>
                  <Text className="mt-1">
                    <AntDesign
                      name="arrowright"
                      color={textColorCustom}
                      size={14}
                    />
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex flex-row w-full p-3 mt-1.5 rounded-[15px] bg-white">
              <View style={[styles.imageIcons, {backgroundColor: '#E9FBF5'}]}>
                <SvgUri source={bell_ring} fill={customGreen} />
              </View>
              <View className="w-full ml-2">
                <View className="flex w-[80%]  flex-row justify-between">
                  <Text style={styles.heading}>vilitas caritas aestus</Text>
                  <Text style={styles.time}>6 hour ago</Text>
                </View>
                <Text style={styles.desc}>
                  Defendo advoco deprecator alius calculus vulgus denuncio
                  dicta. Minus advoco volo damnatio
                </Text>
              </View>
            </View>
            <View className="flex flex-row w-full p-3 mt-1.5 rounded-[15px] bg-white">
              <View style={[styles.imageIcons, {backgroundColor: '#E9FBF5'}]}>
                <SvgUri source={bell_ring} fill={customGreen} />
              </View>
              <View className="w-full ml-2">
                <View className="flex w-[80%]  flex-row justify-between">
                  <Text style={styles.heading}>vilitas caritas aestus</Text>
                  <Text style={styles.time}>6 hour ago</Text>
                </View>
                <Text style={styles.desc}>
                  Defendo advoco deprecator alius calculus vulgus denuncio
                  dicta. Minus advoco volo damnatio
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  today: {
    fontFamily: ROBOTO.RobotoBold,
    fontSize: 13,
    color: blue,
  },
  imageIcons: {
    height: 48,
    width: 49,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  heading: {
    fontFamily: POPPINS.PoppinsMedium,
    color: blue,
    fontSize: 13,
    letterSpacing: 0.08,
  },
  time: {
    fontFamily: POPPINS.PoppinsRegular,
    color: lightGray,
    fontSize: 10,
    letterSpacing: 0.06,
  },
  desc: {
    fontFamily: POPPINS.PoppinsRegular,
    color: grayColor,
    fontSize: 8,
    letterSpacing: 0.24,
    width: 250,
  },
});
