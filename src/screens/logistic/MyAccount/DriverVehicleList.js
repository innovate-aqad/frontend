import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {ROBOTO} from '../../../constants/CustomFontFamily';
import CustomStyle from '../../../Styles';
import DriverList from './DriverVehicle/DriverList';
import {blue, lightGray, screenBackground} from '../../../constants/Theme';
import VehicleList from './DriverVehicle/VehicleList';
import CustomAddButton from '../../../Shared/CustomAddButton';
import {Divider} from 'react-native-paper';

export default function DriverVehicleList(nav) {
  return (
    <View style={{backgroundColor: screenBackground}}>
      <View className="relative top-0 flex flex-row items-center px-5 pt-7 pb-4 bg-[#f96900] rounded-b-[15px] ">
        <Image
          style={[CustomStyle.topNavigation, {tintColor: 'white'}]}
          source={require('../../../Assets/image/drawable-xhdpi/arrow_left.png')}
        />
        <Text
          className="flex justify-center w-[88%] text-center text-white"
          style={{
            fontFamily: ROBOTO.RobotoBold,
            fontSize: 20,
            alignItems: 'center',
          }}>
          DRIVER & VEHICLE DETAILS
        </Text>
      </View>

      <View className="flex flex-col p-5 ">
        <Text style={styles.sideHeadingcard}>Driver Details</Text>
        <DriverList />

        <View className="flex flex-col mt-1">
          <CustomAddButton
            onPress={() => nav.navigation.navigate('addDriverDetails')}
          />
        </View>
        <Divider
          style={{
            marginVertical: 15,
            backgroundColor: lightGray,
            color: lightGray,
          }}
        />
        <Text style={styles.sideHeadingcard}>Vehilcle Details</Text>
        <VehicleList />
        <View className="flex flex-col mt-1 ">
          <CustomAddButton
            onPress={() => nav.navigation.navigate('addVehicleDetails')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topNavigation: {
    height: 15,
    width: 23.3,
    tintColor: 'white',
  },

  sideHeadingcard: {
    color: blue, // Gray color
    fontFamily: ROBOTO.RobotoBold,
    fontSize: 13,
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
