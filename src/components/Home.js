import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from './Header';
import LiveOrder from '../Shared/LiveOrder';
import CarouselHome from '../Shared/Carousel';
import {blue, screenBackground, toggleButton, white} from '../constants/Theme';
import {POPPINS, ROBOTO} from '../constants/CustomFontFamily';
import Search from '../Shared/Search';
import CustomStyle from '../Styles';

// const categoryTiles = [
//   {
//     categoryName: 'Fresh Food',
//     image: '../Assets/image/drawable-xhdpi/froods.png',
//   },
//   {
//     categoryName: 'Grocery',
//     image: '../Assets/image/drawable-xhdpi/personal.png',
//   },
//   {
//     categoryName: 'Beverages',
//     image: '../Assets/image/drawable-xhdpi/mask_group_2.png',
//   },
//   {
//     categoryName: 'Frozen Food',
//     image: '../Assets/image/drawable-xhdpi/scroll_group_1.png',
//   },
//   {
//     categoryName: 'Health & Beauty',
//     image: '../Assets/image/drawable-xhdpi/health.png',
//   },
//   {
//     categoryName: 'Baby Products',
//     image: '../Assets/image/drawable-xhdpi/untitled_1.png',
//   },
//   {
//     categoryName: 'Household Goods',
//     image: '../Assets/image/drawable-xhdpi/pngwing_com_7.png',
//   },
//   {
//     categoryName: 'Home Appliances',
//     image: '../Assets/image/drawable-xhdpi/pngwing_com_8.png',
//   },
// ];

export default function Home() {
  return (
    <View
      className="flex flex-col pb-20"
      style={{backgroundColor: screenBackground}}>
      <Header></Header>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View className="p-3">
          <View
            className="flex flex-row w-full rounded-full"
            style={{backgroundColor: toggleButton}}>
            <TouchableOpacity
              className="w-[50%] h-[39px]"
              style={CustomStyle.activeButton}>
              <Text
                style={{
                  fontFamily: ROBOTO.RobotoRegular,
                  fontSize: 13,
                  color: white,
                }}>
                Vendor
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="w-[50%] h-[39px]"
              style={CustomStyle.invactiveButton}>
              <Text
                style={{
                  fontFamily: ROBOTO.RobotoRegular,
                  fontSize: 13,
                  color: blue,
                }}>
                Retailer
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Search />
          </View>

          <LiveOrder />

          <View className="flex flex-row justify-around w-full mt-1.5">
            <View className="flex flex-row items-center justify-center">
              <View className="w-[10px] h-[10px] bg-[#21d59b] rounded-full"></View>
              <Text style={styles.graphTitles}> Retailer</Text>
            </View>
            <View className="flex flex-row items-center justify-center">
              <View className="w-[10px] h-[10px] bg-[#ffc700] rounded-full"></View>
              <Text style={styles.graphTitles}> Product Category</Text>
            </View>
            <View className="flex flex-row items-center justify-center">
              <View className="w-[10px] h-[10px] bg-[#7e84a3] rounded-full"></View>
              <Text style={styles.graphTitles}> Total SKU</Text>
            </View>
            <View className="flex flex-row items-center justify-center">
              <View className="w-[10px] h-[10px] bg-[#0058ff] rounded-full"></View>
              <Text style={styles.graphTitles}> Orders</Text>
            </View>
          </View>

          <View className="flex flex-row items-center justify-between mt-2">
            <Text className="text-[13px] font-bold" style={styles.textColor}>
              Category Tiles
            </Text>
            <View className="flex flex-row items-center p-1 pr-2 bg-white rounded-full gap-x-2 ">
              <Text className="text-[8px]" style={{color: blue}}>
                Show More
              </Text>

              <Image
                style={styles.tinyLogo}
                source={require('../Assets/image/drawable-hdpi/group_186.png')}
              />
            </View>
          </View>
          <View className="flex flex-col items-center">
            <View className="flex flex-row items-center justify-around mt-3 gap-x-3">
              <View className="gap-y-1">
                <View className="p-2 py-3 w-[75px]  rounded shadow" style={{backgroundColor:white}}>
                  <Image
                    style={styles.categoryImage}
                    source={require('../Assets/image/drawable-xhdpi/froods.png')}
                  />
                </View>
                <Text
                  className="text-center text-[10px]"
                  style={styles.textColor}>
                  Froods
                </Text>
              </View>
              <View className="gap-y-1">
                <View className="p-2 py-3 w-[75px]  rounded shadow" style={{backgroundColor:white}}>
                  <Image
                    style={styles.categoryImage}
                    source={require('../Assets/image/drawable-xhdpi/personal.png')}
                  />
                </View>
                <Text
                  className="text-center text-[10px]"
                  style={styles.textColor}>
                  Beverages
                </Text>
              </View>
              <View className="gap-y-1">
                <View className="p-2 py-3 w-[75px]  rounded shadow" style={{backgroundColor:white}}>
                  <Image
                    style={styles.categoryImage}
                    source={require('../Assets/image/drawable-xhdpi/mask_group_2.png')}
                  />
                </View>
                <Text
                  className="text-center text-[10px]"
                  style={styles.textColor}>
                  Personal Care
                </Text>
              </View>
              <View className="gap-y-1">
                <View className="p-2 py-3 w-[75px]  rounded shadow" style={{backgroundColor:white}}>
                  <Image
                    style={styles.categoryImage}
                    source={require('../Assets/image/drawable-xhdpi/scroll_group_1.png')}
                  />
                </View>
                <Text style={styles.textColor}>Frozen Food</Text>
              </View>
            </View>
            <View className="flex flex-row items-center justify-center mt-3 gap-x-3">
              <View className="gap-y-1">
                <View className="p-2 py-3 w-[75px] rounded shadow" style={{backgroundColor:white}}>
                  <Image
                    style={styles.categoryImage}
                    source={require('../Assets/image/drawable-xhdpi/health.png')}
                  />
                </View>
                <Text
                  className="text-[10px] text-center"
                  style={styles.textColor}>
                  Health & Beauty
                </Text>
              </View>
              <View className="gap-y-1">
                <View className="p-2 py-3 w-[75px] rounded shadow" style={{backgroundColor:white}}>
                  <Image
                    style={styles.categoryImage}
                    source={require('../Assets/image/drawable-xhdpi/untitled_1.png')}
                  />
                </View>
                <Text
                  className="text-[10px] text-center"
                  style={styles.textColor}>
                  Baby & Products
                </Text>
              </View>
              <View className="gap-y-1">
                <View className="p-2 py-3 w-[75px] rounded shadow" style={{backgroundColor:white}}>
                  <Image
                    style={styles.categoryImage}
                    source={require('../Assets/image/drawable-xhdpi/pngwing_com_7.png')}
                  />
                </View>
                <Text
                  className="text-[10px] text-center"
                  style={styles.textColor}>
                  Household Goods
                </Text>
              </View>
              <View className="gap-y-1">
                <View className="p-2 py-3 w-[75px] rounded shadow" style={{backgroundColor:white}}>
                  <Image
                    style={styles.categoryImage}
                    source={require('../Assets/image/drawable-xhdpi/pngwing_com_8.png')}
                  />
                </View>
                <Text
                  className="text-[10px] text-center"
                  style={styles.textColor}>
                  Home Appliances
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="mb-20">
          <CarouselHome />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textColor: {
    color: blue,
    fontFamily: POPPINS.PoppinsRegular,
    fontSize: 10,
    textAlign: 'center',
    width: 75,
  },
  tinyLogo: {
    width: 18.3,
    height: 18.9,
  },
  categoryImage: {
    height: 44,
    width: 65,
  },
  graphTitles: {
    fontSize: 10,
    color: blue,
    fontFamily: POPPINS.PoppinsMedium,
    height: 14,
  },
});
