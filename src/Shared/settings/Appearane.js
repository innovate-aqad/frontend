import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  blue,
  grayColor,
  lightGray,
  screenBackground,
  white,
} from '../../constants/Theme';
import {POPPINS, ROBOTO} from '../../constants/CustomFontFamily';
import CustomStyle from '../../Styles';
import {useNavigation} from '@react-navigation/native';

import light from '../../Assets/image/settings/light.svg';
import darkmode from '../../Assets/image/settings/dark.svg';
import system33 from '../../Assets/image/settings/system.svg';
import SvgUri from 'react-native-svg-uri';

const Appearance = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: screenBackground}}>
      <View className="flex-row rounded-b-xl bg-[#f96900] px-4 pb-2 pt-7 items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={[CustomStyle.topNavigation, {tintColor: white}]}
            source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <Text
          className="flex-1 text-[20px] text-center text-white"
          style={{fontFamily: ROBOTO.RobotoBold, letterSpacing: 1}}>
          APPEARANCE
        </Text>
      </View>
      <View className="m-4">
        <Text
          style={{color: blue, fontFamily: ROBOTO.RobotoBold, fontSize: 13}}>
          Interface Theme
        </Text>
        <Text
          style={{
            color: '#7c7c7c',
            fontFamily: POPPINS.PoppinsLight,
            fontSize: 13,
          }}>
          Customize how the UI theme looks on your device
        </Text>

        <View
          className="flex p-3 mt-3.5 items-center flex-row bg-white shadow rounded-[15px]"
          style={{shadowColor: lightGray}}>
          <SvgUri source={light} height={24} width={24} />
          <View className="ml-4">
            <Text style={styles.heading}>Light Mode</Text>
            <Text style={styles.desc}>
              App theme will always be in Light Mode
            </Text>
          </View>
        </View>
        <View
          className="flex p-3 pl-4 mt-2 items-center flex-row bg-white shadow rounded-[15px]"
          style={{shadowColor: lightGray}}>
          <Image
            source={require('../../Assets/image/settings/dark.png')}
            style={{height: 16, width: 16}}
          />

          <View className="ml-4">
            <Text style={styles.heading}>Light Mode</Text>
            <Text style={styles.desc}>
            App theme will always be in Dark Mode
            </Text>
          </View>
        </View>
        <View
          className="flex p-3 mt-2 items-center flex-row bg-white shadow rounded-[15px]"
          style={{shadowColor: lightGray}}>
          <Image
            source={require('../../Assets/image/settings/system.png')}
            style={{height: 24, width: 24}}
          />
          <View className="ml-4">
            <Text style={styles.heading}>System Preference</Text>
            <Text style={styles.desc}>
            App theme will follow the OS theme
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Appearance;

const styles = StyleSheet.create({
  heading: {
    color: blue,
    fontFamily: POPPINS.PoppinsMedium,
    fontSize: 13,
  },
  desc: {
    color: grayColor,
    fontFamily: POPPINS.PoppinsLight,
    fontSize: 13,
  },
});
