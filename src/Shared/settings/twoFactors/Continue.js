import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomStyle from '../../../Styles';
import {blue, grayColor, white} from '../../../constants/Theme';
import {POPPINS, ROBOTO} from '../../../constants/CustomFontFamily';
import InputTextField from '../../InputTextField';
import CustomButton from '../../CustomButton';
import message from '../../../Assets/image/settings/comment_alt.svg';
import qr_scan from '../../../Assets/image/settings/qr_scan.svg';
import SvgUri from 'react-native-svg-uri';

// comment_alt.svg

export default function Continue(nav) {
  const navigation = useNavigation();
  return (
    <View>
      <View className="flex-row rounded-b-xl bg-[#f96900] px-4 pb-2 pt-7 items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={[CustomStyle.topNavigation, {tintColor: white}]}
            source={require('../../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <Text
          className="flex-1 text-[20px] text-center text-white"
          style={{fontFamily: ROBOTO.RobotoBold, letterSpacing: 1}}>
          TWO FACTORS
        </Text>
      </View>
      <View className="m-7">
        <Text style={styles.verify}>Two Factors Authentication</Text>
        <Text style={styles.verifyDesc}>
          Choose your type of authentication method Crapula cultellus explicabo
          asperiores aliquam delinquo.
        </Text>
      </View>
      <View className="m-5">
        <TouchableOpacity className="bg-white items-center  flex flex-row rounded-[15px] p-3 ">
          <SvgUri source={message} height={24} width={24} />
          <View className="flex flex-col ml-3.5">
            <Text style={styles.cardHeading}>SMS</Text>
            <Text style={styles.cardDesc}>
              Get a code sent to your phone via SMS
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white items-center mt-3 flex flex-row rounded-[15px] p-3 ">
          <SvgUri source={qr_scan} height={24} width={24} />
          <View className="flex flex-col ml-3.5">
            <Text style={styles.cardHeading}>Authentication App</Text>
            <Text style={styles.cardDesc}>
              Connect your authentication app to HR
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={{
            fontFamily:POPPINS.PoppinsLight,
            fontSize:10,
            color:blue,
            marginTop:15
        }}>
          Damnatio sustineo vicissitudo vinculum. Ambitus trado truculenter.
          Totus ulciscor itaque thema tersus. Tum altus utilis tertius.
        </Text>
      </View>
      <View className="m-4 mt-8">
        <CustomButton
          onPress={() => nav.navigation.navigate('verifyEnable')}
          text={'CONTINUE'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  phoneIage: {
    height: 100,
    width: 100,
  },
  verify: {
    color: blue,
    fontSize: 20,
    fontFamily: ROBOTO.RobotoMedium,
    textAlign: 'center',
  },
  verifyDesc: {
    color: blue,
    fontSize: 10,
    fontFamily: POPPINS.PoppinsLight,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  cardHeading: {
    fontFamily: POPPINS.PoppinsMedium,
    fontSize: 13,
    color: blue,
  },
  cardDesc: {
    fontFamily: POPPINS.PoppinsLight,
    fontSize: 13,
    color: grayColor,
  },
});

// smartphone
