import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { black, blue, customLightState, grayColor, screenBackground, textColorCustom, white } from '../../../constants/Theme';
import CustomStyle from '../../../Styles';
import { POPPINS, ROBOTO } from '../../../constants/CustomFontFamily';
import ToggleSwitch from 'toggle-switch-react-native';
import erp_integration from "../../../Assets/image/vendor/erp_integration.svg"
import SvgUri from 'react-native-svg-uri';
import { Divider } from 'react-native-paper';
// AntDesign
export default function IntegrationSettings() {
  const navigate = useNavigation();
  const [isEnabled, setIsEnabled] = React.useState(false);
  const rememberMe = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{backgroundColor: screenBackground}}>
      <View className="flex flex-row items-center justify-around m-4 mt-8">
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <Image
            style={CustomStyle.topNavigation}
            source={require('../../../Assets/image/drawable-xhdpi/arrow_left.png')}
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
          Integration Settings
        </Text>
      </View>
      <View className="flex flex-col items-center justify-center mt-8">
        <Image source={require("../../../Assets/image/vendor/integration.png")} style={{height:122,width:142}} />
        <Text style={{color:blue,fontFamily:ROBOTO.RobotoMedium,fontSize:20,width:180,textAlign:"center",marginVertical:25}}>
        Help us improve our
        product for you
        </Text>
      </View>
      <View className="mx-4 mt-5">
          <View style={styles.mainView}>
            <View className="flex flex-row justify-between">
                <View className="flex flex-row">
                    <Image source={require('../../../Assets/image/vendor/erp_integration.png')} 
                    style={{height:18,width:18}} />
                    <Text style={styles.heading}>ERP Integration</Text>
                </View>
                <ToggleSwitch
                  isOn={isEnabled}
                  onColor={textColorCustom}
                  offColor={customLightState}
                  // label="Example label"
                  labelStyle={{color: black, fontWeight: '900'}}
                  size="small"
                  onToggle={isOn => rememberMe(isOn)}
                />

            </View>
            <Divider style={{marginVertical:10,backgroundColor:"#e6e9f4"}}/>
            <Text style={styles.desc}>
            Careo aliquid argentum audentia contabesco decens saepe accusator ratione confugo.
            </Text>
          </View>
          <View style={[styles.mainView,{marginTop:8}]}>
            <View className="flex flex-row justify-between">
                <View className="flex flex-row">
                    <Image source={require('../../../Assets/image/vendor/it.png')} 
                    style={{height:18,width:18}} />
                    <Text style={styles.heading}>OMS Integration</Text>
                </View>
                <ToggleSwitch
                  isOn={isEnabled}
                  onColor={textColorCustom}
                  offColor={customLightState}
                  // label="Example label"
                  labelStyle={{color: black, fontWeight: '900'}}
                  size="small"
                  onToggle={isOn => rememberMe(isOn)}
                />

            </View>
            <Divider style={{marginVertical:10,backgroundColor:"#e6e9f4"}}/>
            <Text style={styles.desc}>
            Careo aliquid argentum audentia contabesco decens saepe accusator ratione confugo.
            </Text>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    mainView:{
        backgroundColor:white,
        borderRadius:15,
        padding:15
    },
    heading:{
        color:blue,
        fontFamily:ROBOTO.RobotoRegular,
        fontSize:13,
        marginLeft:8
    },
    desc:{
        color:grayColor,
        fontFamily:POPPINS.PoppinsLight,
        fontSize:10
    }
});
