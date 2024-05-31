import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const data = [{address: 'Djdjdj', po_box: 'Jdndnd'}];

export const AddVariantionWareHouse = ({
  placeholder,

  value,
  setValue,
  formik,
}) => {
  const [resData, setResData] = useState({});

  useEffect(() => {
    const getWareHouseData = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('_token');
        // console.log('storedToken,mmm', storedToken);
        // setStoredToken(storedToken);
        const response = await axios.get(
          'http://localhost:2000/api/user/get_data',
          {
            headers: {_token: storedToken},
          },
        );

        setResData(response?.data?.details);
      } catch (error) {
        console.log('error,///', error);
      }
    };
    getWareHouseData();
  }, []);

  const renderItem = item => (
    <View style={styles.itemContainer}>
      <Text style={styles.labelStyle}>{item.address}</Text>
    </View>
  );

  const renderSelectedItem = () => {
    const selectedItem = resData?.warehouse_addresses?.find(
      item => item.po_box === value,
    );
    if (!selectedItem) {
      return <Text style={styles.placeholderStyle}>Select item</Text>;
    }
    return (
      <View style={styles.selectedItemContainer}>
        <Text style={styles.labelStyle}>{selectedItem.address}</Text>
      </View>
    );
  };
  return resData != undefined && resData?.warehouse_addresses?.length > 0 ? (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      itemTextStyle={styles.itemTextStyle}
      selectedStyle={styles.selectedStyle}
      data={resData?.warehouse_addresses}
      maxHeight={300}
      labelField="address"
      valueField="po_box"
      placeholder={placeholder}
      value={value}
      onChange={item => {
        setValue(item.po_box);
        formik.setFieldValue('valueWareHouse', item.po_box);
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
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};
export const AddVariantionType = ({placeholder, value, setValue, formik}) => {
  const [resData, setResData] = useState({});

  useEffect(() => {
    const getVariationData = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('_token');
        // console.log('storedToken,mmm', storedToken);
        // setStoredToken(storedToken);
        const response = await axios.get(
          'http://localhost:2000/api/si_unit/get',
          {
            headers: {_token: storedToken},
          },
        );

        setResData(response?.data?.data);
      } catch (error) {
        console.log('error,///', error);
      }
    };
    getVariationData();
  }, []);

  // console.log('uuyuyuuuyuy', resData);
  const renderItem = item => (
    <View style={styles.itemContainer}>
      <Text style={styles.labelStyle}>{item.title}</Text>
    </View>
  );

  const renderSelectedItem = () => {
    const selectedItem = resData?.find(item => item.id === value);
    if (!selectedItem) {
      return <Text style={styles.placeholderStyle}>Select item</Text>;
    }
    return (
      <View style={styles.selectedItemContainer}>
        <Text style={styles.labelStyle}>{selectedItem.address}</Text>
      </View>
    );
  };
  return resData != undefined && resData?.length > 0 ? (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      itemTextStyle={styles.itemTextStyle}
      selectedStyle={styles.selectedStyle}
      data={resData}
      maxHeight={300}
      labelField="title"
      valueField="id"
      placeholder={placeholder}
      value={value}
      onChange={item => {
        setValue(item.id);
        formik.setFieldValue('valueVariation', item.id);
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
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
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
