import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  blue,
  grayColor,
  lightGray,
  screenBackground,
  textColorCustom,
  white,
} from '../../../../constants/Theme';
import {POPPINS, ROBOTO} from '../../../../constants/CustomFontFamily';
import documents from '../../../../Assets/image/settings/documents.svg';
import SvgUri from 'react-native-svg-uri';
import Messages from './Messages';
import Fontisto from 'react-native-vector-icons/Fontisto';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function LiveChat() {
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
    console.log('Input field focused');
  };

  const handleBlur = () => {
    setIsFocused(false);
    console.log('Input field blurred');
  };
  return (
    // <ScrollView keyboardShouldPersistTaps={'handled'}>
      <View
        className="flex flex-col justify-between"
        style={{
          backgroundColor: '#ffffff',
          height: isFocused ? windowHeight - 260 : windowHeight,
        }}>
        <View className="flex-row rounded-b-xl bg-[#f96900] px-4 pb-2 pt-7 items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.topNavigation}
              source={require('../../../../Assets/image/drawable-xhdpi/arrow_left.png')}
            />
          </TouchableOpacity>
          <Text
            className="flex-1 text-[20px] text-center text-white"
            style={{fontFamily: POPPINS.PoppinsBold}}>
            LIVE CHAT
          </Text>
        </View>

        {true ? (
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View className="absolute px-4 top-2">
            <View className="mb-4">
              <Text style={{color:lightGray,fontSize:10,fontFamily:POPPINS.PoppinsLight,textAlign:"center"}}>
              <Fontisto name="locked" color={lightGray} size={15} /> {" "}
                Verbera magni correptius credo vergoubstantia deliber aliquam
                subiungo cursus. Comedo amor alo pecto. Utpote volaticus taedium
                audax quod tondeo similique. Aeternus validus confugo utrum
                expedita. Incidunt iste speculum vociferor deorsum. Ea amitto
                cuppedia.
              </Text>
            </View>
            <Messages />
          </View>
          </ScrollView>
        ) : (
          <View className="flex flex-col items-center justify-between m-auto my-3">
            <View className="flex flex-col items-center">
              <Image
                style={styles.livechat}
                source={require('../../../../Assets/image/settings/chat.png')}
              />
              <Text style={styles.title}>Supra Solvo Uberrime</Text>
              <Text style={styles.desc}>
                Tricesimus facere agnitio articulus exercitationem sollicito
                cursim consectetur terminatio.
              </Text>
            </View>
          </View>
        )}

        <View className="m-4">
          <View
            className="flex flex-row items-center justify-between w-full bg-white"
            style={{backgroundColor: '#f5f5f5', borderRadius: 25}}>
            <View
              className="flex items-center justify-center mx-auto"
              style={{width: 38}}>
              <SvgUri source={documents} height={22} width={22} />
            </View>
            <TextInput
              placeholder="Type your message..."
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{width: 240, color: grayColor}}
              placeholderTextColor={lightGray}
            />
            <View
              className="flex flex-col items-center justify-center"
              style={{
                backgroundColor: textColorCustom,
                borderRadius: 18,
                width: 36,
                height: 36,
                marginRight: 8,
              }}>
              <Image
                style={{height: 20, width: 20, tintColor: white}}
                source={require('../../../../Assets/image/settings/send.png')}
              />
            </View>
          </View>
        </View>
      </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  topNavigation: {
    height: 15,
    width: 23.3,
    tintColor: 'white',
  },
  livechat: {
    height: 200,
    width: 200,
  },
  title: {
    color: blue,
    fontSize: 20,
    fontFamily: ROBOTO.RobotoMedium,
    marginTop: 10,
  },
  desc: {
    color: blue,
    fontSize: 10,
    fontFamily: POPPINS.PoppinsLight,
    textAlign: 'center',
  },
});
