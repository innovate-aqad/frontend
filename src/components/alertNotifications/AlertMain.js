import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AlertNotifications from './AlertNotifications';
import AlertApproval from './AlertApproval';
import AlertError from './AlertError';
import {POPPINS, ROBOTO} from '../../constants/CustomFontFamily';
import CustomStyle from '../../Styles';
export default class AlertMain extends Component {
  render() {
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
            Notification & Alert
          </Text>
        </View>
        <ScrollView>
          <AlertNotifications />
          <AlertApproval />
          <AlertError />
        </ScrollView>
      </View>
    );
  }
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
