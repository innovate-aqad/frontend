import React from 'react';
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
import {blue, lightGray, screenBackground, textColorCustom, white} from '../../../../constants/Theme';
import {POPPINS, ROBOTO} from '../../../../constants/CustomFontFamily';
import documents from '../../../../Assets/image/settings/documents.svg';
import SvgUri from 'react-native-svg-uri';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function LiveChat() {
  return (
    <ScrollView keyboardShouldPersistTaps={"handled"}>
    <View
      className="flex flex-col items-center justify-between"
      style={{backgroundColor: "#ffffff", height: windowHeight}}>
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

      <View className="flex flex-col items-center justify-between m-auto my-3">
        <View className="flex flex-col items-center">
          <Image
            style={styles.livechat}
            source={require('../../../../Assets/image/settings/chat.png')}
          />
          <Text style={styles.title}>Supra Solvo Uberrime</Text>
          <Text style={styles.desc}>
            Tricesimus facere agnitio articulus exercitationem sollicito cursim
            consectetur terminatio.
          </Text>
        </View>
      </View>
      <View className="m-4">
        <View className="flex flex-row items-center justify-between w-full bg-white"
        style={{backgroundColor:"#f5f5f5",borderRadius:25}}>
          <View className="flex items-center justify-center mx-auto" style={{width:38}}>
          <SvgUri source={documents} height={22} width={22} />
          </View>
          <TextInput placeholder="Type your message..."
          style={{width:240}} placeholderTextColor={lightGray} />
         <View style={{backgroundColor:textColorCustom,padding:8,borderRadius:50,width:38,marginRight:8}}>
         <Image
            style={{height: 20,width:20, tintColor: white}}
            source={require('../../../../Assets/image/settings/send.png')}
          />
         </View>
        </View>
      </View>
    </View>
    </ScrollView>
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
