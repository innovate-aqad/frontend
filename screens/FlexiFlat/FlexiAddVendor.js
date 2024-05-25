import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Card} from 'react-native-paper';

const InventoryList = ({vendorNumber, data}) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.header}>
          <Text style={styles.heading}>{`Vendor (${vendorNumber})`}</Text>
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
                <Text style={styles.contentTextRight}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const VendorList = () => {
  const vendors = [
    {
      id: '1',
      content: ['2024-05-01', '12345', 'Sample', '$10', '$5'],
      heading: 'Order Summary',
    },
    {
      id: '2',
      content: ['2024-05-02', '12346', 'Sample 2', '$12', '$6'],
      heading: 'Order Summary',
    },
    {
      id: '3',
      content: ['2024-05-02', '12346', 'Sample 2', '$12', '$6'],
      heading: 'Order Summary',
    },
    {
      id: '4',
      content: ['2024-05-02', '12346', 'Sample 2', '$12', '$6'],
      heading: 'Order Summary',
    },
    // Add more vendor data as needed
  ];

  return (
    <FlatList
      data={vendors}
      renderItem={({item, index}) => (
        <InventoryList vendorNumber={index + 1} data={item} />
      )}
      keyExtractor={item => item.id}
    />
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
    fontFamily: 'Roboto-Bold',
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
  contentText: {
    font: 'Poppins-Light',
    fontSize: 13,
    letterSpacing: 0.08,

    marginVertical: 2,
    color: '#7e84a3',
  },
  contentTextRight: {
    font: 'Poppins-Regular',
    fontSize: 13,
    letterSpacing: 0.08,

    marginVertical: 2,
    color: '#00274d',
  },
  line: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
});

export default VendorList;
