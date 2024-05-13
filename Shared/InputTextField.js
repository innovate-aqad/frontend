import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default function InputTextField() {
  return (
    <View>
        <TextInput
            style={styles.input}
            placeholderTextColor="rgb(210, 210, 210)"
            placeholder="Enter your Name"
            className="!border-none pl-4 !border-white"
            borderRadius={10}
          />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 3,
      borderWidth: 1,
      color: 'gray',
      backgroundColor: 'white',
      fontFamily: 'Poppins-Light',
    },

})
