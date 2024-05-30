import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

const InventoryList = () => {
  const data = {
    id: '1',
    content: [
      '2024-05-01', // Order Date from backend
      '12345', // Order ID from backend
      'Sample', // Subtitle from backend
      '$10', // VAT & Fees from backend
      '$5', // Discount from backend
      // TOTAL from backend
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
        <View style={styles.cardContent}>
          <View style={styles.leftSide}>
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
        </View>
        <View style={styles.lineAfterDiscount} />
        <View style={styles.total}>
          <Text style={styles.total1}>TOTAL </Text>
          <Text style={styles.rightSide2}>4900 ADE </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    color: '#00274d',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
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
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginVertical: 2,
  },
  line: {
    height: 1,
    backgroundColor: 'lightgray',
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
