import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown,MultiSelect} from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import { blue, white } from '../constants/Theme';
import { POPPINS } from '../constants/CustomFontFamily';

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



const dataOtion = [
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
];
export const SelectInputOtion = () => {
  const renderItem = item => (
    <View style={styles.itemContainer}>
      <Text style={styles.labelStyle}>{item.label}</Text>
    </View>
  );

  const renderSelectedItem = () => {
    // const selectedItem = data.find(item);
    // if (!selectedItem) {
    //   return <Text style={[styles.placeholderStyle,{color:"red"}]}>Select item</Text>;
    // }
    return (
      <View style={[styles.selectedItemContainer,{backgroundColor:"red"}]}>
        <Text style={styles.labelStyle}>{item.value}</Text>
      </View>
    );
  }; 

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Dropdown
      style={[styles.dropdown,{backgroundColor:"#f5f5f5"}]}
      placeholderStyle={[styles.placeholderStyle]}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      itemTextStyle={styles.itemTextStyle}
      selectedStyle={styles.selectedStyle}
      data={dataOtion}
      maxHeight={300}
      labelField="title"
      valueField="id"
      placeholder={"Placeholder"}
      value={value}
      onChange={item => {
        setValue(item.value);
        setIsFocus(false);
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

const dataMultiLine = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

export const SelectWarehouse = () => {
  const renderItem = item => (
    <View style={styles.itemContainer}>
      <Text style={styles.labelStyle}>{item.label}</Text>
    </View>
  );

  const renderSelectedItem = () => {
    // const selectedItem = data.find(item);
    // if (!selectedItem) {
    //   return <Text style={[styles.placeholderStyle,{color:"red"}]}>Select item</Text>;
    // }
    return (
      <View style={[styles.selectedItemContainer,{backgroundColor:"red"}]}>
        <Text style={styles.labelStyle}>{item.value}</Text>
      </View>
    );
  }; 

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Dropdown
      style={[styles.dropdown,{backgroundColor:white}]}
      placeholderStyle={[styles.placeholderStyle]}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      itemTextStyle={styles.itemTextStyle}
      selectedStyle={styles.selectedStyle}
      data={dataOtion}
      maxHeight={300}
      labelField="title"
      valueField="id"
      placeholder={"Placeholder"}
      value={value}
      onChange={item => {
        setValue(item.value);
        setIsFocus(false);
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
    padding: 7,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  selectedItemContainer: {
    flexDirection: 'column',
  },
  labelStyle: {
    fontSize: 13,
    fontFamily: POPPINS.PoppinsLight,
    color: blue,
  },
});
