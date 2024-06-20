import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';
import { blue, grayColor, textColorCustom, white } from '../../../../constants/Theme';
import { POPPINS, ROBOTO } from '../../../../constants/CustomFontFamily';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Ionicons
const MyComponent = ({setIsVisible}) => {
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
      image: require('../../../../Assets/image/drawable-xhdpi/pngwing_com_9.png'),
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
      image: require('../../../../Assets/image/drawable-xhdpi/pngwing_com_9.png'),
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
      image: require('../../../../Assets/image/drawable-xhdpi/pngwing_com_9.png'),
    },
  ];

  const renderItem = ({item, index}) => (
    <TouchableOpacity onPress={()=>setIsVisible(true)} key={index} style={styles.cardContainer}>
      <Card  className="shadow" style={show !== index ? styles.card : styles.cardOpen}>
        <Card.Content className="p-0 pr-3">
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <Image style={styles.productImage} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8SfVm34eY9PL3DKdp1bJ0G5zXvQ6CxAiqg&s"}} />
            </View>
            <View style={styles.textContainer}>
              <Text style={{color:grayColor,fontFamily:POPPINS.PoppinsRegular,fontSize:10,letterSpacing:0.3,lineHeight:13}}>Sony</Text>
              <Text style={[styles.productName,{lineHeight:15}]}>{item.productName}</Text>
              <View>
                <View style={styles.infoRow}>
                  <Text style={styles.orderNumber}>Color : Mate Black</Text>
                  <View style={styles.timeContainer}>
                    <View style={styles.dot} />
                    <Text style={styles.timeText}>Unit : 500 </Text>
                  </View>
                </View>
                <View className="flex flex-row justify-between">
                <Text style={styles.unitPrice}>5945 AED</Text>
                
                <View className="flex flex-row items-center">
                <Text style={[styles.unitPrice,{fontFamily:ROBOTO.RobotoMedium,color:textColorCustom,fontSize:10}]}>Ratings</Text>
                <View className="flex flex-row ml-1.5">
                  <Ionicons name="star" color={"#ffc700"} size={12}  />
                  <Ionicons name="star" color={"#ffc700"} size={12}  />
                  <Ionicons name="star" color={"#ffc700"} size={12}  />
                  <Ionicons name="star" color={"#e6e9f4"} size={12}  />
                  <Ionicons name="star" color={"#e6e9f4"} size={12}  />
                </View>
                </View>
                </View>
              </View>
            </View>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
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
    
  },
  cardOpen: {
    // marginHorizontal: 12,
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
    height: 80,
    width: 80,
    borderRadius: 15,
    justifyContent: 'left',
    alignItems: 'left',
    alignItems:"center",
    justifyContent:"center"
  },
  productImage: {
    height: 80,
    width: 80,
    borderRadius:15,
    alignItems: 'left',
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  productName: {
    color: blue,
    fontSize: 13,
    fontFamily: POPPINS.PoppinsMedium,
    letterSpacing: 0.08,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 2,
  },
  orderNumber: {
    color: grayColor,
    fontSize: 8,
    letterSpacing:0.24,
    fontFamily: POPPINS.PoppinsRegular,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
  dot: {
    backgroundColor: grayColor,
    borderRadius: 2,
    height: 3,
    width: 3,
    marginLeft:10
  },
  timeText: {
    color: grayColor,
    fontSize: 8,
    paddingLeft:4,
    fontFamily: POPPINS.PoppinsRegular,
  },
  unitPrice: {
    color: blue,
    fontSize: 10,
    letterSpacing:0.06,
    fontFamily: POPPINS.PoppinsRegular,
  },
});

export default MyComponent;
