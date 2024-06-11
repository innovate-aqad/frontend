import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomStyle from '../../../Styles';
import {blue, grayColor, white} from '../../../constants/Theme';
import {POPPINS, ROBOTO} from '../../../constants/CustomFontFamily';
import InputTextField from '../../InputTextField';
import CustomButton from '../../CustomButton';

export default function GetStarted(nav) {
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
      <View className="flex flex-row items-center justify-center mt-16 mb-5">
        <Image
          style={{height: 310, width: 416}}
          source={require('../../../Assets/image/settings/twoFactors.png')}
        />
      </View>
      <View>
        <Text style={styles.verify}>Two Factors Authentication</Text>
        <Text style={styles.verifyDesc}>
          Speciosus confugo arma derelinquo commodo altus sperno conduco eos
          tergo.
        </Text>
      </View>
      <View className="m-4 relative bottom-[-130px]">
        <CustomButton
          onPress={() => nav.navigation.navigate('continue')}
          text={'GET STARTED'}
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
