import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  blue,
  grayColor,
  screenBackground,
  white,
} from '../../../constants/Theme';
import {POPPINS, ROBOTO} from '../../../constants/CustomFontFamily';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Checkbox from '../../../Shared/Checkbox';
import InventoryProductList from '../../../pages/InventoryProductList';

// MaterialCommunityIcons

export default function InventoryList(nav) {
  const data = [
    {id: '1'},
    {id: '2'},
    {id: '3'},
    {id: '4'},
    {id: '5'},
    {id: '6'},
    {id: '7'},
    {id: '8'},
    {id: '9'},
    {id: '10'},
    {id: '11'},
    {id: '12'},
    {id: '13'},
    {id: '14'},
  ];

  const renderItem = ({item}) => {
    console.log(item, 'titletitletitle');
    <View className="flex flex-row items-center bg-black ">
      <View
        className="flex flex-row items-center justify-center pl-3 bg-black"
        style={{width: 130}}>
        <View>
          <Checkbox />
        </View>
        <Text style={styles.category}>{item.id}</Text>
        <Text style={[styles.category, {backgroundColor: white}]}>
          Rustic Concrete Sausages
        </Text>
      </View>
      <View className="flex flex-row">
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
    </View>;
  };
  return (
    <View className="flex flex-col" style={{backgroundColor: screenBackground}}>
      <View className="flex-row rounded-b-xl bg-[#f96900] px-4 pb-2 pt-7 items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{height: 15, width: 23.3, tintColor: 'white'}}
            source={require('../../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <Text
          className="flex-1 text-[20px] text-center text-white"
          style={{fontFamily: 'Poppins-Bold'}}>
          INVENTORY MANAGEMENT
        </Text>
      </View>
      <View className="flex flex-row justify-between px-3 my-3">
        <Text
          className="text-[13px]"
          style={{fontFamily: ROBOTO.RobotoBold, color: blue}}>
          Inventory List
        </Text>
        <View className="flex flex-row items-center gap-x-3">
          <MaterialCommunityIcons name="reload" size={25} color={grayColor} />
          <Image
            style={{height: 18, width: 18}}
            source={require('../../../Assets/image/drawable-hdpi/apps_sort.png')}
          />
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
       <InventoryProductList/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: blue,
    fontFamily: POPPINS.PoppinsSemiBold,
    fontSize: 10,
    width: 138,
    paddingVertical: 5,
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
