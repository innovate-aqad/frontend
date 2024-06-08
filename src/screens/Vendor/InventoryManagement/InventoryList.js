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
      <ScrollView className="" horizontal showsHorizontalScrollIndicator={true}>
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
