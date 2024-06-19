import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import CustomStyle from '../../Styles';
import {ROBOTO} from '../../constants/CustomFontFamily';
import SvgUri from 'react-native-svg-uri';
import wifi_slash from '../../Assets/image/settings/wifi_slash.svg';
import language from '../../Assets/image/settings/language.svg';
import key from '../../Assets/image/settings/key.svg';
import lock from '../../Assets/image/settings/lock.svg';
import shield_keyhole from '../../Assets/image/settings/shield_keyhole.svg';
import eclipse_alt from '../../Assets/image/settings/eclipse_alt.svg';
import ToggleSwitch from 'toggle-switch-react-native';
import {
  blue,
  customGreen,
  lightGray,
  screenBackground,
  textColorCustom,
} from '../../constants/Theme';
import {useNavigation} from '@react-navigation/native';

export default function SettingHome(nav) {
  const [isEnabled, setIsEnabled] = useState(false);
  const changeStatus = () => setIsEnabled(previousState => !previousState);
  // onPress={()=>nav.navigation.navigate('outlet')}
  const navigate = useNavigation();
  return (
    <View className="m-4 mt-8">
      <View className="flex-row items-center pb-3">
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <Image
            style={CustomStyle.topNavigation}
            source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <Text
          className="flex-1 text-[20px] text-center text-[#00274d]"
          style={{
            fontFamily: ROBOTO.RobotoBold,
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}>
          SETTINGS
        </Text>
      </View>
      <TouchableOpacity className="mt-5">
        <View className="flex flex-row items-center justify-between p-2 pl-6 pr-4 bg-white rounded-lg">
          <View className="flex flex-row items-center rounded-full gap-x-2 pr-7 ">
            <SvgUri width={24} height={24} source={wifi_slash} />

            <Text
              style={[
                {
                  paddingLeft: 13,
                  fontFamily: ROBOTO.RobotoRegular,
                  color: blue,
                },
              ]}>
              Offline Mode
            </Text>
          </View>
          <View className="flex flex-row items-center gap-x-2">
            <Text
              style={{
                paddingLeft: 13,
                fontFamily: ROBOTO.RobotoRegular,
                color: customGreen,
              }}>
              Online
            </Text>
            <ToggleSwitch
              isOn={isEnabled}
              onColor="#21d59b"
              offColor={screenBackground}
              size="small"
              onToggle={isOn => changeStatus(isOn)}
            />
          </View>

          {/* <Image
            style={{height: 25, width: 13, tintColor: '#7e84a3'}}
            source={require('../../Assets/image/angle-small-right.png')}
          /> */}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => nav.navigation.navigate('changePassword')}
        className="flex mt-1.5 flex-row items-center justify-between p-2 pl-6 pr-4 bg-white rounded-[10px]">
        <View className="flex flex-row items-center rounded-full gap-x-2 pr-7 ">
          <SvgUri width={24} height={24} source={key} />

          <Text
            style={[
              {
                paddingLeft: 13,
                fontFamily: ROBOTO.RobotoRegular,
                color: blue,
              },
            ]}>
            Change Password
          </Text>
        </View>

        <Image
          style={{height: 25, width: 13, tintColor: '#7e84a3'}}
          source={require('../../Assets/image/angle-small-right.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => nav.navigation.navigate('getStarted')}
        className="flex mt-1.5 flex-row items-center justify-between p-2 pl-6 pr-4 bg-white rounded-[10px]">
        <View className="flex flex-row items-center rounded-full gap-x-2 pr-7 ">
          <SvgUri width={24} height={24} source={lock} />

          <Text
            style={[
              {
                paddingLeft: 13,
                fontFamily: ROBOTO.RobotoRegular,
                color: blue,
              },
            ]}>
            Two Factors Authentication
          </Text>
        </View>

        <Image
          style={{height: 25, width: 13, tintColor: '#7e84a3'}}
          source={require('../../Assets/image/angle-small-right.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity className="flex mt-1.5 flex-row items-center justify-between p-2 pl-6 pr-4 bg-white rounded-[10px]">
        <View className="flex flex-row items-center rounded-full gap-x-2 pr-7 ">
          <SvgUri width={24} height={24} source={shield_keyhole} />

          <Text
            style={[
              {
                paddingLeft: 13,
                fontFamily: ROBOTO.RobotoRegular,
                color: blue,
              },
            ]}>
            Privecy & Security
          </Text>
        </View>

        <Image
          style={{height: 25, width: 13, tintColor: '#7e84a3'}}
          source={require('../../Assets/image/angle-small-right.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity className="flex mt-1.5 flex-row items-center justify-between p-2 pl-6 pr-4 bg-white rounded-[10px]">
        <View className="flex flex-row items-center rounded-full gap-x-2 pr-7 ">
          <SvgUri width={24} height={24} source={language} />

          <Text
            style={[
              {
                paddingLeft: 13,
                fontFamily: ROBOTO.RobotoRegular,
                color: blue,
              },
            ]}>
            Language
          </Text>
        </View>

        <View className="flex flex-row items-center gap-x-2">
          <Text
            style={{
              color: textColorCustom,
              fontSize: 13,
              fontFamily: ROBOTO.RobotoRegular,
            }}>
            English
          </Text>
          <Image
            style={{height: 25, width: 13, tintColor: '#7e84a3'}}
            source={require('../../Assets/image/angle-small-right.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => nav.navigation.navigate('appearance')}
        className="flex mt-1.5 flex-row items-center justify-between p-2 pl-6 pr-4 bg-white rounded-[10px]">
        <View className="flex flex-row items-center rounded-full gap-x-2 pr-7 ">
          <SvgUri width={24} height={24} source={eclipse_alt} />

          <Text
            style={[
              {
                paddingLeft: 13,
                fontFamily: ROBOTO.RobotoRegular,
                color: blue,
              },
            ]}>
            Appearance
          </Text>
        </View>

        <Image
          style={{height: 25, width: 13, tintColor: '#7e84a3'}}
          source={require('../../Assets/image/angle-small-right.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
