import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Card, IconButton} from 'react-native-paper';

const initialData = [
  {
    id: '1',
    title: 'Card Title 1',
    subtitle: 'Card Subtitle 1',
    imageUrl: 'https://via.placeholder.com/100',
    verified: true,
  },
  {
    id: '2',
    title: 'Card Title 2',
    subtitle: 'Card Subtitle 2',
    imageUrl: 'https://via.placeholder.com/100',
    verified: false,
  },
  // Add more items as needed
];

const DriverVehicleDetails = () => {
  const [data, setData] = useState(initialData);

  const handleDelete = id => {
    setData(data.filter(item => item.id !== id));
  };

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
          {item.verified && (
            <TouchableOpacity mode="contained" onPress={() => {}}>
              <Text style={styles.verified}>Verified</Text>
            </TouchableOpacity>
          )}
          <IconButton
            icon="trash-can-outline"
            color="#ff0000"
            size={20}
            onPress={() => handleDelete(item.id)}
          />
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
    margin: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
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
    borderRadius: 5,
    width: 60,
    height: 50,
  },
  title: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
  },
  subtitle: {
    fontSize: 13,
    color: '#cbcbcb',
    fontFamily: 'Poppins-Regular',
  },
  verified: {
    color: '#21d59b',
  },
});

export default DriverVehicleDetails;
