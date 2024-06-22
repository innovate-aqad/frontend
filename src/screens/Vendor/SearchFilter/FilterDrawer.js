import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import {
  blue,
  customLightState,
  grayColor,
  lightGray,
  textColorCustom,
  white,
} from '../../../constants/Theme';
import {POPPINS, ROBOTO} from '../../../constants/CustomFontFamily';
import Checkbox from '../../../Shared/Checkbox';
import {Divider} from 'react-native-paper';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const colorData = [
  {colorName: 'blue', type: 'Blue', num: '20'},
  {colorName: 'red', type: 'Red', num: '234'},
  {colorName: 'green', type: 'Green', num: '211'},
  {colorName: 'black', type: 'Black', num: '11'},
  {colorName: 'pink', type: 'Pink', num: '43'},
  {colorName: 'gray', type: 'Gray', num: '0004'},
  {colorName: 'yellow', type: 'Yellow', num: '231'},
  {colorName: 'purple', type: 'Purle', num: '90'},
];
const ColorList = () => {
  return (
    <View className="flex flex-col gap-y-4">
      {colorData.map((item, index) => (
        <View>
          <View
            key={index}
            className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center">
              <Checkbox />
              <View
                style={{
                  height: 21,
                  width: 35,
                  backgroundColor: item.colorName,
                  marginLeft: 10,
                }}></View>
              <Text
                className="ml-4"
                style={{
                  fontFamily: POPPINS.PoppinsRegular,
                  fontSize: 13,
                  color: blue,
                }}>
                {item.type}
              </Text>
            </View>
            <Text
              className="float-right"
              style={{
                color: lightGray,
                fontSize: 10,
                fontFamily: POPPINS.PoppinsRegular,
              }}>
              {item.num}
            </Text>
          </View>
          <Divider style={{backgroundColor: customLightState, marginTop: 12}} />
        </View>
      ))}
    </View>
  );
};

const categoryData = [
  {name: 'Electronic'},
  {name: 'Froods'},
  {name: 'Material'},
  {name: 'Agriculture'},
  {name: 'Building'},
  {name: 'Energy'},
  {name: 'Waste'},
];
const CategoryList = () => {
  const renderItem = ({item}) => (
    <View className="flex flex-row justify-center rounded-[5px] m-0.5 text-center items-center h-[25px] w-[60px]"
    style={{borderWidth:1,borderColor:lightGray}}>
      
        <Text
          style={{
            color: blue,
            fontSize: 10,
            fontFamily: POPPINS.PoppinsRegular,
            textAlign:"center"
          }}>
          {item.name}
        </Text>
      
    </View>
  );
  return (
    
     <FlatList
     data={categoryData}
     renderItem={renderItem}
     numColumns={3}
    //  horizontal={false}
     keyExtractor={(item, index) => index.toString()}
   />
  );
};

const filterData = [
  'Quick FILTERS',
  'Size',
  'COLOUR',
  'BRAND',
  'CATEGORIES',
  'PRICE RANGE',
  'DISCOUNT',
  'RANGE',
  'DEVILERY TIME',
];
const FilterDrawer = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState('');

  const selectCategory = item => {
    setCategory(item);
  };
  return (
    <Modal
      isVisible={true}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      swipeDirection={['up', 'left', 'right', 'down']}
      // onBackdropPress={() => {
      //     setFeedBack(!feedBack)
      // }}
      // onBackButtonPress={() => {
      //     setFeedBack(!feedBack)
      // }}
    >
      <View
        style={{
          //   flex: 1,
          marginLeft: -20,
          marginRight: -50,
          marginTop: 0,
          marginBottom: -500,
          width: width,
          height: 900,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          paddingHorizontal: 30,
          backgroundColor: '#fff',
        }}>
        <View style={styles.slide}></View>
        <View>
          <View className="flex flex-row items-center justify-between">
            <Text
              style={{
                fontFamily: ROBOTO.RobotoBold,
                color: blue,
                fontSize: 13,
              }}>
              Filters
            </Text>
            <Text
              style={{
                fontFamily: ROBOTO.RobotoRegular,
                color: textColorCustom,
                fontSize: 13,
              }}>
              Clear All
            </Text>
          </View>
          <View className="flex flex-row justify-between mt-6">
            <View className="gap-y-6 w-[40%]">
              {filterData.map((item, index) => (
                <TouchableOpacity onPress={() => selectCategory(item)}>
                  <Text
                    style={[
                      category == item
                        ? {
                            fontFamily: POPPINS.PoppinsSemiBold,
                            color: textColorCustom,
                            fontSize: 10,
                          }
                        : {
                            fontFamily: POPPINS.PoppinsSemiBold,
                            color: blue,
                            fontSize: 10,
                          },
                    ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View className="gap-y-3 w-[60%]">
              <Text
                style={{
                  fontFamily: ROBOTO.RobotoRegular,
                  color: lightGray,
                  fontSize: 13,
                }}>
                Top Picks
              </Text>
              <View className="mt-1">
                {category === 'COLOUR' && <ColorList />}
                {category === 'CATEGORIES' && <CategoryList />}
              </View>
            </View>
          </View>
          <View className="flex flex-row mx-auto mt-5">
            <TouchableOpacity
              style={{
                borderColor: textColorCustom,
                borderWidth: 1,
                height: 35,
                width: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
              }}>
              <Text style={{color: textColorCustom}}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderColor: textColorCustom,
                borderWidth: 1,
                height: 35,
                width: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                marginLeft: 10,
                backgroundColor: textColorCustom,
              }}>
              <Text style={{color: white}}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  slide: {
    height: 4,
    width: 90,
    backgroundColor: customLightState,
    borderRadius: 2,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },
});

export default FilterDrawer;
