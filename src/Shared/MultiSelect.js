import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {MultiSelect} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {blue, grayColor, lightGray} from '../constants/Theme';
import { POPPINS } from '../constants/CustomFontFamily';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const SelectMultiple = () => {
  const [selected, setSelected] = useState([]);

  const renderItem = (item,index) => {
    return (
      <View style={styles.item} key={index}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
        <Entypo
          style={styles.icon}
          color="#cbcbcb"
          name="chevron-small-down"
          size={30}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={[styles.selectedTextStyle,{color:"red"}]}
        inputSearchStyle={[styles.inputSearchStyle,{color:"green"}]}
        iconStyle={styles.iconStyle}
        data={data}
        itemTextStyle={{color:"black"}}
        labelField="label"
        valueField="value"
        placeholder="Select Types"
        value={selected}
        search
        searchPlaceholder="Search..."
        onChange={item => {
          setSelected(item);
        }}
        renderRightIcon={() => (
          <Entypo
            style={styles.icon}
            color="#cbcbcb"
            name="chevron-small-down"
            size={30}
          />
        )}
        renderItem={renderItem}
        renderSelectedItem={(item, unSelect) => (
          <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
            <View style={styles.selectedStyle}>
              <Text style={[styles.textSelectedStyle]}>{item.label}</Text>
              <AntDesign name="close" size={16} color={lightGray} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SelectMultiple;

const styles = StyleSheet.create({
  container: {padding: 0},
  dropdown: {
    height: 40,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 12,
  },
  placeholderStyle: {
    fontSize: 13,
    color:grayColor,
    fontFamily:POPPINS.PoppinsLight
  },
  selectedTextStyle: {
    fontSize: 13,
    color: blue,
    fontFamily:POPPINS.PoppinsLight
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#E6EEFF',
    shadowColor: '#000',
    marginTop: 8,
    height:30,
    width:83,
    marginRight: 3,
    paddingHorizontal: 7,
    paddingVertical: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 11,
    color:blue,
    fontFamily:POPPINS.PoppinsLight,

  },
});
