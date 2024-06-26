import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Card, IconButton} from 'react-native-paper';
import { blue, screenBackground, white } from '../../constants/Theme';
import { POPPINS } from '../../constants/CustomFontFamily';

const MyComponent = () => {
  const [show, setShow] = useState(null);

  const data = [
    {
      id: '1',
      productName: 'Rustic Bronze Computer ...',
      orderNumber: '#AQADORDER001',
      timeAgo: '2m ago',
      unitPrice: '50 AED',
      price: '50 AED',
      sku: 'SKU : 575',
      category: 'Grocery',
      image: require('../../Assets/image/drawable-xhdpi/pngwing_com_9.png'),
    },
    {
      id: '2',
      productName: 'Product 2',
      orderNumber: '#AQADORDER002',
      timeAgo: '5m ago',
      unitPrice: '45 AED',
      price: '45 AED',
      sku: 'SKU : 576',
      category: 'Electronics',
      image: require('../../Assets/image/drawable-xhdpi/pngwing_com_9.png'),
    },
    {
      id: '3',
      productName: 'Product 3',
      orderNumber: '#AQADORDER003',
      timeAgo: '10m ago',
      unitPrice: '60 AED',
      price: '60 AED',
      sku: 'SKU : 577',
      category: 'Clothing',
      image: require('../../Assets/image/drawable-xhdpi/pngwing_com_9.png'),
    },
  ];

  const toggleShow = index => {
    setShow(show === index ? null : index);
  };

  const renderItem = ({item, index}) => (
    <View key={index} style={styles.cardContainer}>
      <Card style={show !== index ? styles.card : styles.cardOpen}>
        <Card.Content>
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <Image style={styles.productImage} source={item.image} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.productName}>{item.productName}</Text>
              <View>
                <View style={styles.infoRow}>
                  <Text style={styles.orderNumber}>{item.orderNumber}</Text>
                  <View style={styles.timeContainer}>
                    <View style={styles.dot} />
                    <Text style={styles.timeText}>{item.timeAgo} </Text>
                  </View>
                </View>
                <Text style={styles.unitPrice}>Per Unit: {item.unitPrice}</Text>
              </View>
            </View>
            <View className="flex flex-col items-center justify-center">
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
          <View style={styles.labelsRow}>
            <Text style={styles.skuLabel}>{item.sku}</Text>
            <Text style={styles.categoryLabel}>{item.category}</Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 4,
    
  },
  card: {
    justifyContent: 'left',
    alignItems: 'left',
    backgroundColor:white,
    shadowColor:screenBackground
  },
  cardOpen: {
    marginHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    left: -12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#FDEEE3',
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: '#FDD7BC',
    borderWidth: 1,
    padding: 3,
    justifyContent: 'left',
    alignItems: 'left',
    alignItems:"center",
    justifyContent:"center"
  },
  productImage: {
    height: 22,
    width: 29.5,
    alignItems: 'left',
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  productName: {
    color: blue,
    fontSize: 10,
    fontFamily: POPPINS.PoppinsMedium,
    letterSpacing: 0.08,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 2,
  },
  orderNumber: {
    color: '#7e84a3',
    fontSize: 8,
    fontFamily: 'Poppins-Regular',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
  dot: {
    backgroundColor: '#7e84a3',
    borderRadius: 2,
    height: 4,
    width: 4,
    marginLeft:10
  },
  timeText: {
    color: '#7e84a3',
    fontSize: 8,
    paddingLeft:4,
    fontFamily: 'Poppins-Regular',
  },
  unitPrice: {
    color: '#7e84a3',
    fontSize: 8,
    fontFamily: 'Poppins-Regular',
  },
  price: {
    color: '#f96900',
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    alignItems:"center",
    justifyContent:"center"
  },
  menuButton: {
    marginTop: 3,
  },
  labelsRow: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    gap: 3,
    paddingTop: 10,
  },
  orderLabel: {
    color: '#21d59b',
    backgroundColor: '#E9FBF5',
    textAlign: 'center',
    height: 12,
    borderRadius: 12,
    width: 55,
    fontSize: 7,
    fontFamily: 'Poppins-SemiBold',
  },
  skuLabel: {
    color: '#cbcbcb',
    backgroundColor: '#F2F3F6',
    textAlign: 'center',
    height: 12,
    borderRadius: 12,
    width: 55,
    fontSize: 7,
    fontFamily: 'Poppins-SemiBold',
  },
  categoryLabel: {
    color: '#cbcbcb',
    backgroundColor: '#F2F3F6',
    textAlign: 'center',
    height: 12,
    borderRadius: 12,
    width: 55,
    fontSize: 7,
    fontFamily: 'Poppins-SemiBold',
  },
  actionsContainer: {
    flexDirection: 'row',
    marginRight: 80,
  },
  editButton: {
    padding: 3,
    backgroundColor: '#E9FBF5',
    borderRadius: 12,
  },
  editIcon: {
    tintColor: '#6d93f2',
    height: 17,
    width: 17,
  },
  deleteButton: {
    padding: 3,
    backgroundColor: '#FDEEE3',
    borderRadius: 12,
    marginLeft: 2,
  },
  deleteIcon: {
    tintColor: '#df6886',
    height: 17,
    width: 17,
  },
});

export default MyComponent;
