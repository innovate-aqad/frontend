import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [data, setData] = useState([]);
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRotate = () => {
    setIsHorizontal(!isHorizontal);
    Alert.alert('Hello');
  };

  const renderItem = ({item}) => (
    <View style={[styles.itemContainer, isHorizontal && styles.itemHorizontal]}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemText}>{item.email}</Text>
      <Text style={styles.itemText}>{item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        horizontal={isHorizontal}
      />
      <TouchableOpacity onPress={handleRotate} style={styles.rotateButton}>
        <Icon name="rotate-right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemHorizontal: {
    flexDirection: 'column',
  },
  itemText: {
    flex: 1,
    textAlign: 'center',
  },
  rotateButton: {
    flex: 1,
    textAlign: 'center',
