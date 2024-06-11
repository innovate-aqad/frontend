import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { grayColor } from '../constants/Theme'

export default function InputTextField({onPress,placeholderTextColor,numberOfLines}) {
  return (
    <View>
        <TextInput
            style={styles.input}
            onPress={onPress}
            placeholderTextColor={grayColor}
            placeholder={placeholderTextColor ? placeholderTextColor :"search"}
            className="!border-none pl-4 !border-white"
            borderRadius={10}
            multiline={true}
            numberOfLines={numberOfLines ? numberOfLines :1}
          />
    </View>
  )
}

const styles = StyleSheet.create({
    input: { 
      paddingTop:4,
      paddingBottom:4,
      marginTop: 3,
      borderWidth: 1,
      color: 'gray',
      fontSize:13,
      backgroundColor: 'white',
      fontFamily: 'Poppins-Light',
    },

})
