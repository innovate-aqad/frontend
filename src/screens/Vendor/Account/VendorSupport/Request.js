import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { blue, grayColor } from '../../../../constants/Theme'
import { POPPINS, ROBOTO } from '../../../../constants/CustomFontFamily'
import InputTextField from '../../../../Shared/InputTextField'
import CustomStyle from '../../../../Styles'
import CustomButton from '../../../../Shared/CustomButton'
import Textarea from 'react-native-textarea';

export default function Request() {
  return (
    <View className="mt-5">
        <View>
        <Text style={styles.title}>
        Submit an Email Request
        </Text>
        <Text style={styles.desc}>
        Accommodo cura tego aro quaerat strenuus vox careo alo arguo. Defetiscor acsi canis. Sed conscendo.
        </Text>
        </View>
        <View className="mt-4">
            <Text style={CustomStyle.inputLabel}>Full Name</Text>
            <InputTextField placeholderTextColor={"Enter full name"}/>
            <Text style={[CustomStyle.inputLabel,{marginTop:8}]}>Account / Entity</Text>
            <InputTextField placeholderTextColor={"Supplier"}/>
            <Text style={[CustomStyle.inputLabel,{marginTop:8}]}>Subject</Text>
            <InputTextField placeholderTextColor={"Enter subject"}/>
            <Text style={[CustomStyle.inputLabel,{marginTop:8}]}>Message</Text>
            {/* <InputTextField placeholderTextColor={"Enter your message"} numberOfLines={1}/> */}
            <Textarea
          containerStyle={styles.textareaContainer}
          style={styles.textarea}
          // onChangeText={th}
          placeholder={'Enter your message'}
          placeholderTextColor={grayColor}
          
          underlineColorAndroid={'transparent'}
        />
            <View className="mt-10">
            <CustomButton text={"SEND EMAIL"} />
            </View>
        </View>
    </View>
    
  )
}


const styles=StyleSheet.create({
    title:{
        color:blue,
        fontFamily:ROBOTO.RobotoMedium,
        fontSize:20
    },
    desc:{
        fontFamily:POPPINS.PoppinsLight,
        color:"#7c7c7c",
        fontSize:13
    },
    textareaContainer: {
        height: 120,
        padding: 5,
        backgroundColor: 'white',
        borderRadius:10,
        color:grayColor
    
      },
      textarea: {
        textAlignVertical: 'top', // hack android
        height: 120,
        fontSize: 11,
        color: '#333',
      },
})
