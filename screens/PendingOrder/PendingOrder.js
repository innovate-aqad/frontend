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
    ],
    heading: 'Pending Order',
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
            <Text style={styles.sideHeadingcard}>Vendor</Text>
            {['Order Date', 'Order ID', 'Subtitle'].map((label, index) => (
              <View key={index}>
                <Text style={styles.contentText}>{label}</Text>
              </View>
            ))}
          </View>
          <View style={styles.leftSide}>
            <Text style={styles.sideHeadingcard}>Pickup</Text>
            {['Order Date', 'Order ID', 'Subtitle'].map((label, index) => (
              <View key={index}>
                <Text style={styles.contentText}>{label}</Text>
              </View>
            ))}
          </View>
          <View style={styles.rightSide}>
            <Text style={styles.sideHeadingcard}>Drop</Text>
            {data.content.map((item, index) => (
              <View key={index}>
                <Text style={styles.contentText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.lineAfterDiscount} />
        <View style={styles.total}>
          <Text style={styles.total1}>Total Distance Travelled :12km</Text>
          <Text style={styles.rightSide2}>pickup time </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    color: '#00274d',
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    // height: 18,
    // width: 91,
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
    // marginLeft: 150,
  },
  rightSide2: {
    flex: 1,
    marginLeft: 50,
    color: '#f0142f',
  },
  contentText: {
    color: '#00274d',
    fontFamily: 'Poppins-Light',
    fontSize: 10,
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
    color: '#21d59b',
  },
  sideHeadingcard: {
    color: '#f96900', // Gray color
    fontFamily: 'Poppins-Bold',
    fontSize: 13,
  },
});

export default InventoryList;
