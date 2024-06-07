import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

import {Checkbox} from 'react-native-paper';
import {POPPINS, ROBOTO} from '../constants/CustomFontFamily';
import {
  blue,
  flexTradButtonColor,
  screenBackground,
  textColorCustom,
  white,
} from '../constants/Theme';
import {success} from '../constants/ToastMessage';
import CustomStyle from '../Styles';

const HighlightsData = [
  {dec: 'Instant encashment of sale invoices to enhance cash flow'},
  {
    dec: 'Offer credit terms of 15, 30, 45 days to customers,facilitating flexible financial planning',
  },
  {
    dec: 'Simplified product listing and quick market access using mobile uploads',
  },
  {
    dec: 'Advanced analytics for real-time business insights and decision making',
  },
  {dec: 'Proceed to checkout when ready.'},
];
const MyComponent = () => {
  const [value, setValue] = React.useState('left');
  const [checked, setChecked] = React.useState(false);

  return (
    <ScrollView>
      <View
        className="flex flex-col h-full p-5 py-8 gap-y-2"
        style={{backgroundColor: screenBackground}}>
        <View className="flex-row items-center pb-3">
          <Image
            style={CustomStyle.topNavigation}
            source={require('../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
          <Text
            className="flex-1 text-[20px] text-center text-[#00274d]"
            style={{
              fontFamily: ROBOTO.RobotoBold,
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}>
            Flexi tRADE
          </Text>
        </View>
        <View className="flex flex-row w-full bg-white rounded-full ">
          <TouchableOpacity
            onPress={() => setValue('left')}
            className="w-[50%] h-[39px]"
            //  style={styles.button}

            style={[
              styles.button,
              value === 'left' && styles.selectedToggleButton,
            ]}>
            <Text
              style={[
                value === 'left'
                  ? {color: white}
                  : {color: flexTradButtonColor},
                {fontFamily: ROBOTO.RobotoRegular, fontSize: 14},
              ]}>
              Vendor
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-[50%] h-[39px]"
            onPress={() => setValue('right')}
            style={[
              styles.button1,
              value === 'right' && styles.selectedToggleButton,
            ]}>
            <Text
              style={[
                value === 'right'
                  ? {color: white}
                  : {color: flexTradButtonColor},
                {fontFamily: ROBOTO.RobotoRegular, fontSize: 14},
              ]}>
              Retailer
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerimage}>
          <Image
            style={styles.imagecentre}
            source={require('../Assets/image/flexirate.png')}
          />
        </View>

        <View className="pt-5 pb-3">
          <Text style={styles.heading} className="pb-2">
            Introducing Flexi Trade :
          </Text>

          <View>
            <View className="flex flex-row justify-between">
              <Text style={styles.description}>
                The Premier Marketplace for Vendors and Retailers Flexitrade is
                a product designed for vendors and Retailers to transform the
                transaction in between vendors and retailers This innovative
                platform caters to the fast-paced needs of approximately 100,000
                SKUs from diverse vendors, enabling quick purchases and
                streamlined operations for both parties.
              </Text>
            </View>
          </View>
          <View className="pt-3 pr-3">
            <Text style={styles.heading} className="pb-2">
              Features :
            </Text>
            <View style={styles.row}>
              <Text style={styles.subHeading}>Quick Payment Process :</Text>
              <Text
                style={styles.subDescription}
                numberOfLines={1}
                ellipsizeMode="tail">
                {' '}
                Here is the summary of your order
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.subHeading}>Flexible Trade Terms :</Text>
              <Text
                style={styles.subDescription}
                numberOfLines={1}
                ellipsizeMode="tail">
                {' '}
                Customizable payment timelines
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.subDescription}>
                <Text style={styles.subHeading}>Reduced Trade Barriers :</Text>
                Easy product listings and rapid sales processes
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.subDescription}>
                <Text style={styles.subHeading}>
                  Enhanced Visibility and Control :{' '}
                </Text>
                Tools for managing inventory, orders, customer interactions
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.subDescription}>
                <Text style={styles.subHeading}>
                  Access to a Wide Range of Products :
                </Text>{' '}
                Large catalog for easy browsing
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.subDescription}>
                <Text style={styles.subHeading}>
                  Streamlined Ordering Process :
                </Text>{' '}
                Efficient order placement and tracking
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.subDescription}>
                <Text style={styles.subHeading}>
                  Flexible Payment Options :
                </Text>{' '}
                Multiple payment methods to accommodate financial needs
              </Text>
            </View>
          </View>
          {/*  */}
          <View className="pt-2 pb-3">
            <Text style={styles.heading} className="pb-2">
              Highlights :
            </Text>
            <View>
              {HighlightsData?.map((item, index) => (
                <View key={index} className="flex flex-row">
                  <View
                    style={{
                      height: 6,
                      width: 6,
                      backgroundColor: flexTradButtonColor,
                      borderRadius: 3,
                      marginTop: 4,
                    }}></View>
                  <Text style={styles.listItem}>{item.dec}</Text>
                </View>
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.heading} className="mb-0">
              Conditions :
            </Text>
            <View className="flex flex-row mr-6">
              <Checkbox
                color="#f96900"
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: POPPINS.PoppinsMedium,
                  color: blue,
                  marginTop: 6,
                }}>
                Both vendors and retailers must transact through the AQAD
                platform.Both parties must be registered and approved on AQAD
              </Text>
            </View>
          </View>
          <View className="pt-5 mb-8">
            <TouchableOpacity
              onPress={() =>
                success({type: 'success', text: 'Lets Go For Flexi Trade'})
              }
              style={styles.buttonsub}>
              <Text
                className="text-white "
                style={{fontFamily: 'Roboto-Regular', fontSize: 20}}>
                Let's Go
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: textColorCustom,
    fontFamily: POPPINS.PoppinsSemiBold,
    fontSize: 13,
  },
  description: {
    color: flexTradButtonColor,
    fontFamily: POPPINS.PoppinsRegular,
    lineHeight: 18,
    fontSize: 10,
  },
  borderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    flex: 1,
  },
  subHeading: {
    color: blue,
    fontFamily: POPPINS.PoppinsRegular,
    fontSize: 10,
    lineHeight: 18,
  },
  subDescription: {
    color: flexTradButtonColor,
    fontFamily: POPPINS.PoppinsLight,
    fontSize: 10,
    lineHeight: 18,
  },

  button: {
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    color: 'red',
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
    color: 'white',
  },
  imagecentre: {
    height: 210.5,
    width: 218.8,
    alignItems: 'centre',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  listItem: {
    color: '#7e84a3',
    fontFamily: POPPINS.PoppinsRegular,
    fontSize: 10,
    letterSpacing: 0.08,
    marginBottom: 4,
    paddingLeft: 10,
  },

  checkbox: {
    color: 'red',
  },
  buttonsub: {
    backgroundColor: '#F96900',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
  },
  containerimage: {
    paddingTop: 20,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagecentre: {
    height: 210.5,
    width: 218.8,
  },
});

export default MyComponent;
