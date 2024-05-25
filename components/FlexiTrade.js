import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

import {Checkbox} from 'react-native-paper';

const MyComponent = () => {
  const [value, setValue] = React.useState('left');
  const [checked, setChecked] = React.useState(false);

  return (
    <ScrollView>
      <View className="flex flex-col gap-y-2 h-full p-5 py-8 bg-[#f5f5f5]">
        <View className="flex-row items-center pb-3">
          <Image
            style={styles.topNavigation}
            source={require('../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
          <Text
            className="flex-1 text-[20px] text-center text-[#00274d]"
            style={{
              fontFamily: 'Roboto-Bold',
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}>
            Flexi tRADE
          </Text>
        </View>
        <View className="flex flex-row w-full bg-white rounded-full  ">
          <TouchableOpacity
            onPress={() => setValue('left')}
            className="w-[50%] h-[39px]"
            //  style={styles.button}

            style={[
              styles.button,
              value === 'left' && styles.selectedToggleButton,
            ]}>
            <Text
              className="text-[#00274D]"
              style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>
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
              className="text-[#00274D]"
              style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>
              Retailer
            </Text>
          </TouchableOpacity>
        </View>
        {/* image center */}
        <View style={styles.containerimage}>
          <Image
            style={styles.imagecentre}
            source={require('../Assets/image/flexirate.png')}
          />
        </View>

        <View className="pt-5 pb-3">
          <Text className="text-[#F96900] font-[Poppins-Bold]">
            Introducing Flexi Trade :
          </Text>

          <View>
            <View className="flex flex-row justify-between">
              <Text
                className="text-[#7e84a3] text-[10spx] "
                style={{lineHeight: 18}}>
                The Premier Marketplace for Vendors and Retailers Flexitrade is
                a product designed for vendors and Retailers to transform the
                transaction in between vendors and retailers This innovative
                platform caters to the fast-paced needs of approximately 100,000
                SKUs from diverse vendors, enabling quick purchases and
                streamlined operations for both parties.
              </Text>
            </View>
          </View>
          {/* side heading */}
          <View className="pt-5 ">
            <Text className="text-[#F96900] font-[Poppins-Bold]">
              Features :
            </Text>
            <View style={styles.row}>
              <Text style={styles.sideHeading}>Quick Payment Process :</Text>
              <Text
                style={styles.paragraph}
                numberOfLines={1}
                ellipsizeMode="tail">
                Here is the summary of your order
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.sideHeading}>Flexible Trade Terms :</Text>
              <Text
                style={styles.paragraph}
                numberOfLines={1}
                ellipsizeMode="tail">
                Here is the summary of your order
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.sideHeading}>Reduced Trade Barriers :</Text>
              <Text
                style={styles.paragraph}
                numberOfLines={1}
                ellipsizeMode="tail">
                Here is the summary of your order
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.sideHeading}>
                Enhanced Visibility and Control :
              </Text>
              <Text
                style={styles.paragraph}
                numberOfLines={1}
                ellipsizeMode="tail">
                Here is the summary of your order
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.sideHeading}>
                Access to a Wide Range of Products :
              </Text>
              <Text
                style={styles.paragraph}
                numberOfLines={1}
                ellipsizeMode="tail">
                Here is the summary of your order
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.sideHeading}>
                Streamlined Ordering Process :
              </Text>
              <Text
                style={styles.paragraph}
                numberOfLines={1}
                ellipsizeMode="tail">
                Here is the summary of your order
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.sideHeading}>Flexible Payment Options :</Text>
              <Text
                style={styles.paragraph}
                numberOfLines={1}
                ellipsizeMode="tail">
                Here is the summary of your order
              </Text>
            </View>
          </View>
          {/*  */}
          <View className="pt-5 pb-3">
            <Text className="text-[#F96900] font-[Poppins-Bold]">
              Highlights :
            </Text>
            <View style={styles.listContainer}>
              <Text style={styles.listItem}>
                • Instant encashment of sale invoices to enhance cash flow
              </Text>
              <Text style={styles.listItem}>
                • Offer credit terms of 15, 30, 45 days to customers,
                facilitating flexible financial planning
              </Text>
              <Text style={styles.listItem}>
                • Simplified product listing and quick market access using
                mobile uploads
              </Text>
              <Text style={styles.listItem}>
                • Advanced analytics for real-time business insights and
                decision making
              </Text>
              <Text style={styles.listItem}>
                • Proceed to checkout when ready.
              </Text>
            </View>
          </View>
          {/* checkbox */}
          <View>
            <Text className="text-[#F96900] font-[Poppins-Bold]">
              Conditions :
            </Text>
            <View className="flex flex-row ">
              <Checkbox
                style={styles.checkbox}
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.paragraph1}>
                Both vendors and retailers must transact through the AQAD
                platform.Both parties must be registered and approved on AQAD
              </Text>
            </View>
          </View>
          <View className="pt-5">
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={styles.buttonsub}>
              <Text
                className="text-white "
                style={{fontFamily: 'Poppins-SemiBold'}}>
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
  topNavigation: {
    height: 15,
    width: 23.3,
    tintColor: '',
  },
  button: {
    // backgroundColor: '#F96900',
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
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    // marginHorizontal: 10,
    borderBottomWidth: 0,
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderColor: 'white',
    paddingRight: 5,
    color: '#cbcbcb',
    borderWidth: 2,
    marginLeft: 5,
  },
  imagecentre: {
    height: 210.5,
    width: 218.8,
    alignItems: 'centre',

    // tintColor: '#00274d',
  },
  row: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  sideHeading: {
    color: '00274d',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    lineHeight: 18,
    marginRight: 6, // Adjust as needed for spacing
  },
  paragraph: {
    color: '#7e84a3', // Gray color
    fontFamily: 'Poppins-Light',
    fontSize: 10,
    lineHeight: 18,
    // flexShrink: 1, // Allows text to shrink to fit in the remaining space
  },

  listItem: {
    color: '#7e84a3', // Gray color
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    letterSpacing: 0.08,
    marginBottom: 4, // Space between list items
  },
  checkbox: {
    marginRight: 8, // Space between the checkbox and the text
  },
  checkbox: {
    color: '#F96900',
  },
  paragraph1: {
    color: '#00274d', // Gray color
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    lineHeight: 18,
    letterSpacing: 0.25,
  },
  row1: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'left',
  },
  buttonsub: {
    backgroundColor: '#F96900', // Default button color
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
    // tintColor: '#00274d',
  },
});

export default MyComponent;
