import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import { POPPINS, ROBOTO } from '../../constants/CustomFontFamily';
import { screenBackground, white } from '../../constants/Theme';

const InventoryList = () => {
  const data = {
    id: '1',
    content: [
      '16th September 2024', 
      '12345', 
      'Sample',
      '$10', 
      '$5', 
    ],
    heading: 'Order Summary',
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.header}>
          <Text style={styles.heading}>{data.heading}</Text>
        </View>
        <View style={styles.line} />
        {/* <View style={styles.cardContent}>
          <View>
            {[
              'Order Date',
              'Order ID',
              'Subtitle',
              'VAT & Fees',
              'Discount',
            ].map((label, index) => (
              <View key={index}>
                <Text style={styles.contentText}>{label}</Text>
              </View>
            ))}
          </View>
          <View style={styles.rightSide}>
            {data.content.map((item, index) => (
              <View key={index}>
                <Text style={styles.contentText}>{item}</Text>
              </View>
            ))}
          </View>
        </View> */}
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
            <Text style={[styles.contentText1 ,{color:"#21d59b"}]}>-130 AED</Text>
          </View>

        </View>
        <View style={styles.line} />
        <View className="flex flex-row justify-between">
          <Text style={{color:"#f96900",fontSize:20,fontFamily:POPPINS.PoppinsMedium}}>TOTAL </Text>
          <Text style={{color:"#f96900",fontSize:20,fontFamily:POPPINS.PoppinsMedium}}>4900 ADE </Text>
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
    color: '#00274d',
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
    color: '#f96900',
  },
  contentText: {
    color: '#7e84a3',
    fontFamily: POPPINS.PoppinsLight,
    fontSize: 13,
    letterSpacing:0.08
  },
  contentText1: {
    color: '#7e84a3',
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
    flexDirection: 'row',
    flexWrap: 'wrap',

    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
  total1: {
    color: '#f96900',
  },
});

export default InventoryList;
