import React from 'react';
import {FlatList, Text, View, StyleSheet, ScrollView} from 'react-native';
import Checkbox from '../Shared/Checkbox';
import {blue, grayColor, white} from '../constants/Theme';
import {POPPINS} from '../constants/CustomFontFamily';
// import {POPPINS} from '../constants/CustomFontFamily';
// import {blue, grayColor, white} from '../constants/Theme';
// import Checkbox from './Checkbox';

const data = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '4', title: 'Item 3'},
  {id: '5', title: 'Item 3'},
  {id: '6', title: 'Item 3'},
  {id: '7', title: 'Item 3'},
  {id: '8', title: 'Item 3'},
  {id: '9', title: 'Item 3'},
  {id: '10', title: 'Item 3'},
  {id: '11', title: 'Item 3'},
  {id: '12', title: 'Item 3'},
  {id: '13', title: 'Item 3'},
  {id: '14', title: 'Item 3'},
  {id: '15', title: 'Item 3'},
  {id: '16', title: 'Item 3'},
  {id: '17', title: 'Item 3'},
  {id: '18', title: 'Item 3'},
  {id: '19', title: 'Item 3'},
  {id: '20', title: 'Item 3'},
  {id: '21', title: 'Item 3'},
];

const InventoryProductList = () => {
  const renderItem = ({item}) =>
    item.id === '1' ? (
      <View className="flex flex-row">
        <Text
          style={[
            styles.header,
            {backgroundColor: white, textAlign: 'center'},
          ]}>
          # {'   '}PRODUCT
        </Text>
        <Text style={[styles.header, {width: 100, paddingLeft: 10}]}>
          CATEGORY
        </Text>
        <Text style={[styles.header, {width: 100, paddingLeft: 10}]}>
          SUB CATEGORY
        </Text>
        <Text style={[styles.header, {width: 100, paddingLeft: 10}]}>
          BRAND
        </Text>
        <Text style={[styles.header, {width: 100, paddingLeft: 10}]}>UPC</Text>
        <Text style={[styles.header, {width: 100, paddingLeft: 10}]}>
          IN STOCK
        </Text>
        <Text style={[styles.header, {width: 100, paddingLeft: 10}]}>SKU</Text>
        <Text style={[styles.header, {width: 100, paddingLeft: 10}]}>
          PRICE
        </Text>
      </View>
    ) : (
      <View className="flex flex-row items-center">
        <View
          className="flex flex-row gap-x-[-3px] items-center justify-center h-full pl-5 bg-white "
          style={{width: 130, position: 'fixed'}}>
          <View>
            <Checkbox />
          </View>
          <Text style={styles.category}>{item.id}</Text>
          <Text style={[styles.category, {backgroundColor: white}]}>
            Rustic Concrete Sausages
          </Text>
        </View>
        <View className="relative left-0 flex flex-row">
          <Text
            style={[
              styles.td,
              {
                marginLeft: 10,
              },
            ]}>
            Home Appliance
          </Text>
          <Text style={[styles.td]}>Electronis</Text>
          <Text style={[styles.td]}>Microless</Text>
          <Text style={[styles.td]}>123876487</Text>
          <Text style={[styles.td]}>1400</Text>
          <Text style={[styles.td]}>1232</Text>
          <Text style={[styles.td]}>50000</Text>
        </View>
      </View>
    );

  return (
    // <View className="!w-full h-full rotate-90">
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          // className="w-full rotate-90"
        />
      </ScrollView>
    // </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9c2ff',
  },
  title: {
    fontSize: 32,
  },
  header: {
    color: blue,
    fontFamily: POPPINS.PoppinsSemiBold,
    fontSize: 10,
    width: 135.5,
    paddingVertical: 10,
  },
  category: {
    color: blue,
    fontFamily: POPPINS.PoppinsRegular,
    fontSize: 10,
    textAlign: 'center',
    padding: 5,
  },
  td: {
    color: grayColor,
    fontFamily: POPPINS.PoppinsRegular,
    fontSize: 10,
    paddingVertical: 12,
    width: 100,
    backgroundColor: white,
    paddingHorizontal: 0,
    paddingLeft: 10,
  },
});

export default InventoryProductList;
