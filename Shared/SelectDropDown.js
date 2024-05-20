import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';

const data = [
  { label: 'Item 1', value: '1', description: 'Description for Item 1' },
  { label: 'Item 2', value: '2', description: 'Description for Item 2' },
  { label: 'Item 3', value: '3', description: 'Description for Item 3' },
  { label: 'Item 4', value: '4', description: 'Description for Item 4' },
  { label: 'Item 5', value: '5', description: 'Description for Item 5' },
  { label: 'Item 6', value: '6', description: 'Description for Item 6' },
  { label: 'Item 7', value: '7', description: 'Description for Item 7' },
  { label: 'Item 8', value: '8', description: 'Description for Item 8' },
  { label: 'Item 9', value: '9', description: 'Description for Item 9' },
  { label: 'Item 10', value: '10', description: 'Description for Item 10' },
  { label: 'Item 11', value: '11', description: 'Description for Item 11' },
  { label: 'Item 12', value: '12', description: 'Description for Item 12' },
];

const SelectDropDown = () => {
  const [value, setValue] = useState(null);

  const renderItem = (item) => (
    <View style={styles.itemContainer}>
      <Text style={styles.labelStyle}>{item.label}</Text>
      <Text style={styles.descriptionStyle}>{item.description}</Text>
    </View>
  );

  const renderSelectedItem = () => {
    const selectedItem = data.find(item => item.value === value);
    if (!selectedItem) {
      return <Text style={styles.placeholderStyle}>Select item</Text>;
    }
    return (
      <View style={styles.selectedItemContainer}>
        <Text style={styles.labelStyle}>{selectedItem.label}</Text>
        <Text style={styles.descriptionStyle}>{selectedItem.description}</Text>
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      itemTextStyle={styles.itemTextStyle}
      selectedStyle={styles.selectedStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderItem={renderItem}
      renderLeftIcon={() => (
        <Fontisto style={styles.icon} color="#f96900" name="map-marker-alt" size={20} />
      )}
      renderRightIcon={() => (
        <Entypo style={styles.icon} color="#f96900" name="chevron-small-down" size={30} />
      )}
      renderCustomizedRowChild={(item) => renderItem(item)}
      renderCustomizedSelectedChild={() => renderSelectedItem()}
    />
  );
};

export default SelectDropDown;

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#7e84a3',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#7e84a3',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: '#7e84a3',
  },
  selectedStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemTextStyle: {
    color: '#7e84a3',
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
    color: '#f96900',
  },
  descriptionStyle: {
    fontSize: 14,
    color: '#7e84a3',
  },
});
