import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {btnBackround, grayColor, screenBackground} from '../constants/Theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { POPPINS } from '../constants/CustomFontFamily';

export default function Checkbox({label}) {
  const [checked, setChecked] = useState(false);
  const handleChack = () => {
    setChecked(!checked);
  };
  return (
    <View className="flex flex-row gap-x-2">
      <TouchableOpacity
        className="flex items-center justify-center shadow hover:bg-black hover:shadow-2xl hover:shadow-black"
        onPress={() => handleChack()}
        style={checked ? styles.checked : styles.unChecked}>
        <Text style={{fontSize: 8}}>
          {checked ? (
            <FontAwesome5 name="check" size={10} color="#f3ebfe" />
          ) : null}
        </Text>
      </TouchableOpacity>
      <Text style={styles.lebel}>{label ? label : "Checked"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  unChecked: {
    height: 15,
    width: 15,
    borderColor: '#7e84a3',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: screenBackground,
  },
  checked: {
    height: 15,
    width: 15,
    borderColor: btnBackround,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: btnBackround,
  },
  lebel:{
    fontFamily:POPPINS.PoppinsLight,
    fontSize:10,
    color:grayColor,
    
  }
});
