import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import { POPPINS, ROBOTO } from '../../../../constants/CustomFontFamily';
import { blue, customGreen, grayColor, screenBackground, textColorCustom, white } from '../../../../constants/Theme';

const InventoryList = () => {
  const data = {
    id: '1',
    content: [
      '16th September 2024', 
      '12345', 
      'Sample',
      '$10', 
      '$5', 
    ]
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.header}>
          <Text style={styles.heading}>Order Summary</Text>
          <Text style={[styles.heading,{color:customGreen}]}>Delivered </Text>
        </View>
        <View style={styles.line} />
        
        <View className="flex flex-col">
          <View className="flex flex-row justify-between">
            <Text style={styles.contentText}>Order Date</Text>
            <Text style={styles.contentText1}>16th September 2024</Text>
          </View>
          <View className="flex flex-row justify-between">
            <Text style={styles.contentText}>Order ID</Text>
            <Text style={styles.contentText1}>SI81125730019800907</Text>
          </View>
          <View className="flex flex-row justify-between">
            <Text style={styles.contentText}>Subtotal (4)</Text>
            <Text style={styles.contentText1}>5000 AED</Text>
          </View>
          <View className="flex flex-row justify-between">
            <Text style={styles.contentText}>VAT & Fees (5%)</Text>
            <Text style={[styles.contentText1,{color:"#f0142f"}]}>+30 AED</Text>
          </View>
          <View className="flex flex-row justify-between">
            <Text style={styles.contentText}>Discount</Text>
            <Text style={[styles.contentText1 ,{color:grayColor}]}>-130 AED</Text>
          </View>

        </View>
        <View style={styles.line} />
        <View className="flex flex-row justify-between">
          <Text style={styles.total}>TOTAL </Text>
          <Text style={styles.total}>4900 AED </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 0,
    shadowColor:"#A9A9A9",
    backgroundColor:white
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    color: blue,
    fontFamily: ROBOTO.RobotoBold,
    fontSize: 13,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  leftSide: {
    flex: 1,
  },
  rightSide: {
    flex: 1,
    marginLeft: 150,
  },
  rightSide2: {
    flex: 1,
    marginLeft: 210,
    color: textColorCustom,
  },
  contentText: {
    color: grayColor,
    fontFamily: POPPINS.PoppinsLight,
    fontSize: 13,
    letterSpacing:0.08
  },
  contentText1: {
    color: grayColor,
    fontFamily: POPPINS.PoppinsRegular,
    fontSize: 13,
    letterSpacing:0.08
  },
  line: {
    height: 1,
    backgroundColor: '#ECEDF1',
    marginVertical: 10,
  },
  lineAfterDiscount: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
    marginTop: 5,
  },
  total: {
    color:textColorCustom,fontSize:20,fontFamily:POPPINS.PoppinsMedium
  },
});

export default InventoryList;
