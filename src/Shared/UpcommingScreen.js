

import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import { blue, screenBackground, textColorCustom } from '../constants/Theme';
import { ROBOTO } from '../constants/CustomFontFamily';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function UpcommingScreen() {
  return (
    <View className="flex flex-col items-center justify-center" style={{height:windowHeight,width:windowWidth,backgroundColor:screenBackground}}>
        <Text style={{color:textColorCustom,fontSize:25,fontFamily:ROBOTO.RobotoBold}}>Comming Soon</Text>
    </View>
  )
}
