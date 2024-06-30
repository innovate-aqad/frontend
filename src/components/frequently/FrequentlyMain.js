import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {ROBOTO, POPPINS} from '../../constants/CustomFontFamily';
import {
  blue,
  btnBackround,
  flexTradButtonColor,
  screenBackground,
  white,
} from '../../constants/Theme';
import Frequently from './Frequently';
import Search from '../../Shared/Search';

// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function FeatureMain() {
  const [value, setValue] = React.useState('left');
  return (
    <View>
      <View className="flex-row rounded-b-xl bg-[#f96900] px-4 pb-2 pt-7 items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.topNavigation}
            source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <Text
          className="flex-1 text-[20px] text-center text-white"
          style={{fontFamily: 'Poppins-Bold'}}>
          FAQ's
        </Text>
      </View>

      <View
        className="flex flex-col h-full p-5 py-8 mb-20 gap-y-2"
        style={{backgroundColor: screenBackground, height: windowHeight - 75}}>
        <Search />
        <View className="mt-0">
          <Text
            style={{
              fontFamily: ROBOTO.RobotoMedium,
              color: blue,
              marginVertical: 10,
              marginTop: 12,
              marginLeft: 4,
            }}>
            Frequently Asked Questions
          </Text>
          <Text
            style={{
              fontFamily: POPPINS.PoppinsLight,
              color: blue,
              marginVertical: 10,
              marginTop: 5,
              marginLeft: 4,
            }}>
            Accommodo cura tego aro quaerat strenuus vox careo alo arguo.
            Defetiscor acsi canis. Sed conscendo.
          </Text>
        </View>
        <Frequently />

        {/* <View className="flex flex-row w-full bg-white rounded-full ">
        <TouchableOpacity
          onPress={() => setValue('left')}
          className="w-[50%] h-[39px]"
          style={[
            CustomStyle.invactiveButton,
            value === 'left' && styles.selectedToggleButton,
          ]}>
          <Text
            style={[
              value === 'left' ? {color: white} : {color: flexTradButtonColor},
              {fontFamily: ROBOTO.RobotoRegular, fontSize: 14},
            ]}>
            Vendor
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-[50%] h-[39px]"
          onPress={() => setValue('right')}
          style={[
            CustomStyle.invactiveButton,
            value === 'right' && styles.selectedToggleButton,
          ]}>
          <Text
            style={[
              value === 'right' ? {color: white} : {color: flexTradButtonColor},
              {fontFamily: ROBOTO.RobotoRegular, fontSize: 14},
            ]}>
            Retailer
          </Text>
        </TouchableOpacity>
      </View>
      <View className="mt-0">
        <Text
          style={{
            fontFamily: ROBOTO.RobotoBold,
            color: blue,
            marginVertical: 10,
            marginTop: 12,
            marginLeft: 4,
          }}>
          Highlights
        </Text>
      </View>
      {value === 'left' ? <VendorFeatures /> : <RetailFeatures />} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'red', // Gray color
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
  },
  content: {
    marginTop: 10,
    color: '#7e84a3', // Gray color
    fontFamily: 'Poppins-Regular',
    fontSize: 10,

    // lineHeight: 18,
  },
  heading: {
    color: '#00274d', // Gray color
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
  },
  topNavigation: {
    height: 15,
    width: 23.3,
    tintColor: 'white',
  },
  buttonAddVendor: {
    backgroundColor: '#F96900', // Default button color
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
    font: 'Roboto-Regular',
    fontSize: 20,
  },
  button1: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    color: 'red',
  },
  selectedToggleButton: {
    backgroundColor: '#F96900',
    borderColor: '#F96900',
  },
  sideHeadingcard: {
    color: '#00274d', // Gray color
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    fontWeight: 'bold',
    paddingLeft: 8,
    paddingBottom: 10,
  },
  buttonAdd: {
    alignItems: 'center',
    backgroundColor: '#F96900',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    width: 80,
  },
  lineAfterDiscount: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
    marginTop: 30,
    margin: 8,
  },
});
