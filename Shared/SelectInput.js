import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';

export const SelectInput = ({placeholder, data, value, setValue, formik}) => {
  const renderItem = item => (
    <View style={styles.itemContainer}>
      <Text style={styles.labelStyle}>{item.title}</Text>
    </View>
  );

  const renderSelectedItem = () => {
    const selectedItem = data.find(item => item.id === value);
    if (!selectedItem) {
      return <Text style={styles.placeholderStyle}>Select item</Text>;
    }
    return (
      <View style={styles.selectedItemContainer}>
        <Text style={styles.labelStyle}>{selectedItem.title}</Text>
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
      labelField="title"
      valueField="id"
      placeholder={placeholder}
      value={value}
      onChange={item => {
        setValue(item.id);
        formik.setFieldValue('value', item.id);
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
export const SelectInputSubCategory = ({
  placeholder,
  data,
  value,
  setValue,
  formik,
}) => {
  const renderItem = item => (
    <View style={styles.itemContainer}>
      <Text style={styles.labelStyle}>{item.title}</Text>
    </View>
  );

  const renderSelectedItem = () => {
    const selectedItem = data.find(item => item.id === value);
    if (!selectedItem) {
      return <Text style={styles.placeholderStyle}>Select item</Text>;
    }
    return (
      <View style={styles.selectedItemContainer}>
        <Text style={styles.labelStyle}>{selectedItem.title}</Text>
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
      labelField="title"
      valueField="id"
      placeholder={placeholder}
      value={value}
      onChange={item => {
        setValue(item.id);
        formik.setFieldValue('valueSubCategory', item.id);
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
export const SelectInputBrand = ({
  placeholder,
  data,
  value,
  setValue,
  formik,
}) => {
  const renderItem = item => (
    <View style={styles.itemContainer}>
      <Text style={styles.labelStyle}>{item.title}</Text>
    </View>
  );

  const renderSelectedItem = () => {
    const selectedItem = data.find(item => item.id === value);
    if (!selectedItem) {
      return <Text style={styles.placeholderStyle}>Select item</Text>;
    }
    return (
      <View style={styles.selectedItemContainer}>
        <Text style={styles.labelStyle}>{selectedItem.title}</Text>
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
      labelField="title"
      valueField="id"
      placeholder={placeholder}
      value={value}
      onChange={item => {
        setValue(item.id);
        formik.setFieldValue('valueBrand', item.id);
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
