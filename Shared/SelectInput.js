import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
  { label: 'Item 9', value: '9' },
  { label: 'Item 10', value: '10' },
  { label: 'Item 11', value: '11' },
  { label: 'Item 12', value: '12' },
];

const SelectInput = ({ placeholder }) => {
  const [value, setValue] = useState(null);

  const renderItem = (item) => (
    <View style={styles.itemContainer}>
      <Text style={styles.labelStyle}>{item.label}</Text>
    </View>
  );

  const renderSelectedItem = () => {
    const selectedItem = data.find((item) => item.value === value);
    if (!selectedItem) {
      return <Text style={styles.placeholderStyle}>Select item</Text>;
    }
    return (
      <View style={styles.selectedItemContainer}>
        <Text style={styles.labelStyle}>{selectedItem.label}</Text>
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      itemTextStyle={styles.itemTextStyle}
      selectedStyle={styles.selectedStyle}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      value={value}
      onChange={(item) => {
        setValue(item.value);
      }}
      renderItem={renderItem}
      renderRightIcon={() => (
        <Entypo style={styles.icon} color="#cbcbcb" name="chevron-small-down" size={30} />
      )}
      renderCustomizedSelectedChild={() => renderSelectedItem()}
    />
  );
};

export default SelectInput;

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 3,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#cbcbcb',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#cbcbcb',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  selectedStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemTextStyle: {
    color: '#cbcbcb',
  },
  itemContainer: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  selectedItemContainer: {
    flexDirection: 'column',
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#cbcbcb',
  },
});
