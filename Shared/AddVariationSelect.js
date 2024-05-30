import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';

export const AddVariantionWareHouse = ({
  placeholder,
  data,
  value,
  setValue,
  formik,
}) => {
  const renderItem = item => (
    <View style={styles.itemContainer}>
      <Text style={styles.labelStyle}>{item.address}</Text>
    </View>
  );

  const renderSelectedItem = () => {
    const selectedItem = data.find(item => item.po_box === value);
    if (!selectedItem) {
      return <Text style={styles.placeholderStyle}>Select item</Text>;
    }
    return (
      <View style={styles.selectedItemContainer}>
        <Text style={styles.labelStyle}>{selectedItem.address}</Text>
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
      labelField="address"
      valueField="po_box"
      placeholder={placeholder}
      value={value}
      onChange={item => {
        setValue(item.po_box);
        formik.setFieldValue('valueBrand', item.po_box);
      }}
      renderItem={renderItem}
      renderRightIcon={() => (
        <Entypo
          style={styles.icon}
          color="#cbcbcb"
          name="chevron-small-down"
          size={30}
        />
      )}
      renderCustomizedSelectedChild={() => renderSelectedItem()}
    />
  );
};

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
