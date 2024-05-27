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
    heading: 'Driver details',
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
            <Text style={styles.sideHeadingcard}>Driver List</Text>
            {['Order Date', 'Order ID', 'Subtitle'].map((label, index) => (
              <View key={index}>
                <Text style={styles.contentText}>{label}</Text>
              </View>
            ))}
          </View>
          <View style={styles.leftSide}>
            <Text style={styles.sideHeadingcard}>Status</Text>
            {['Order Date', 'Order ID', 'Subtitle'].map((label, index) => (
              <View key={index}>
                <Text
                  style={[
                    styles.contentText,
                    index === 0
                      ? styles.color1
                      : index === 1
                      ? styles.color2
                      : styles.color3,
                  ]}>
                  {label}
                </Text>
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
    color: '#7e84a3',
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
    color: '#00274d', // Gray color
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
  },
  color1: {
    color: '#21d59b',
    height: 20,
    width: 50,
    backgroundColor: '#26f0142f',
    borderRadius: 15,
    alignItems: 'center',
  },
  color2: {
    color: '#0058ff',
    height: 20,
    width: 50,
    backgroundColor: '#26f0142f',
    borderRadius: 15,
  },
  color3: {
    color: '#f0142f',
    height: 20,
    width: 50,
    backgroundColor: '#26f0142f',
    borderRadius: 15,
  },
});

export default InventoryList;
