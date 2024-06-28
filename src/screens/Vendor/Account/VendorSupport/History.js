import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Search from '../../../../Shared/Search';
import {
  blue,
  grayColor,
  lightGray,
  textColorCustom,
  white,
} from '../../../../constants/Theme';
import {POPPINS, ROBOTO} from '../../../../constants/CustomFontFamily';
import CustomButton from '../../../../Shared/CustomButton';

export default function History() {
  return (
    
    <View className="mt-4">
        <ScrollView>
      <Search />
      <Text style={[styles.heading, {marginTop: 10}]}>Today</Text>
      <View className="">
        {[1, 2].map((item, index) => (
          <View key={index} style={[styles.mainBox,{marginTop:7}]}>
            <View className="flex flex-row justify-between">
              <Text style={styles.title}>Charley Monserrat</Text>
              <Text style={styles.time}>24th June 2024, 10:25 AM</Text>
            </View>
            <Text style={[styles.titleHeading, {marginTop: 6}]}>
              Subject : Repudiandae Recusandae De...
            </Text>
            <Text style={styles.titleDescription}>
              Defendo advoco deprecator alius calculus vulgus denuncio dicta.
              Minus advoco volo damnatio tabernus adamo sono aduro acsi esse.
            </Text>
          </View>
        ))}
      </View>
      <Text style={[styles.heading, {marginTop: 10}]}>This Week</Text>
      <View className="">
        {[1].map((item, index) => (
          <View key={index} style={[styles.mainBox,{marginTop:7}]}>
            <View className="flex flex-row justify-between">
              <Text style={styles.title}>Beverly Retta</Text>
              <Text style={styles.time}>24th June 2024, 10:25 AM</Text>
            </View>
            <Text style={[styles.titleHeading, {marginTop: 6}]}>
              Subject : Repudiandae Recusandae De...
            </Text>
            <Text style={styles.titleDescription}>
              Defendo advoco deprecator alius calculus vulgus denuncio dicta.
              Minus advoco volo damnatio tabernus adamo sono aduro acsi esse.
            </Text>
          </View>
        ))}
      </View>
      </ScrollView>
      <View style={styles.fixedButton}>
        <CustomButton text={"CLEAR ALL"}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: blue,
    fontFamily: ROBOTO.RobotoBold,
    fontSize: 13,
  },
  mainBox: {
    backgroundColor: white,
    borderRadius: 15,
    padding: 12,
    paddingHorizontal: 20,
  },
  title: {
    color: textColorCustom,
    fontFamily: POPPINS.PoppinsRegular,
    fontSize: 10,
    letterSpacing: 0.06,
  },
  time: {
    color: lightGray,
    fontFamily: POPPINS.PoppinsRegular,
    fontSize: 10,
    letterSpacing: 0.06,
  },
  titleHeading: {
    fontFamily: POPPINS.PoppinsMedium,
    fontSize: 13,
    color: blue,
    etterSpacing: 0.08,
  },
  titleDescription: {
    fontFamily: POPPINS.PoppinsMedium,
    fontSize: 8,
    color: grayColor,
    etterSpacing: 0.08,
  },
  fixedButton: {
    position: 'static',
    bottom: -40,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});
