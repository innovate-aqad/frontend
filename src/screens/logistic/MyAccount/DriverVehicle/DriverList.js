import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';
import {
  customGreen,
  grayColor,
  lightGray,
  white,
} from '../../../../constants/Theme';
import {POPPINS} from '../../../../constants/CustomFontFamily';

const initialData = [
  {
    id: '1',
    title: 'Card Title 1 73377',
    subtitle: 'DL : 28678-0271 48866',
    imageUrl:
      'https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149659.png',
    verified: true,
  },
  {
    id: '2',
    title: 'Card Title 2',
    subtitle: 'DL : 28678-0271 48866',
    imageUrl:
      'https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149659.png',
    verified: false,
  },
  // Add more items as needed
];

const DriverList = () => {
  const [data, setData] = useState(initialData);
  const renderItem = ({item}) => (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <View style={styles.leftSection}>
          <Image source={{uri: item.imageUrl}} style={styles.squareImage} />
        </View>
        <View style={styles.middleSection}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
        <View style={styles.rightSection}>
          
            <TouchableOpacity mode="contained">
              <Text style={styles.verified}>Verified</Text>
            </TouchableOpacity>
         
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 0,
    marginVertical: 4,
    shadowColor: grayColor,
    backgroundColor: white,
    paddingVertical: 0,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  leftSection: {
    flex: 1,
  },
  middleSection: {
    flex: 3,
    paddingLeft: 10,
  },
  rightSection: {
    flex: 1,
    alignItems: 'flex-end',
  },
  squareImage: {
    borderRadius: 15,
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 13,
    fontFamily: POPPINS.PoppinsMedium,
    color: grayColor,
  },
  subtitle: {
    fontSize: 13,
    color: lightGray,
    fontFamily: POPPINS.PoppinsRegular,
  },
  verified: {
    color: customGreen,
    fontSize: 10,
    fontFamily: POPPINS.PoppinsSemiBold,
  },
});

export default DriverList;
