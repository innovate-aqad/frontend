import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {Card, IconButton} from 'react-native-paper';

const InventoryList = () => {
  console.log('heeeloooo');
  const [openCards, setOpenCards] = useState({});

  useEffect(() => {
    console.log('State updated:', openCards);
  }, [openCards]);

  const data = [
    {id: '1', content: 'Card content 1', heading: 'h1'},
    {id: '2', content: 'Card content 2', heading: 'h2'},
    {id: '3', content: 'Card content 3', heading: 'h3'},
    // Add more cards as needed
  ];

  const toggleCard = id => {
    console.log('Toggling card id:', id); // Log before updating state
    setOpenCards(prevState => {
      const newState = {
        ...prevState,
        [id]: !prevState[id],
      };
      console.log('New state after toggle:', newState); // Log the new state
      return newState;
    });
  };

  const renderItem = ({item}) => {
    const isOpen = openCards[item.id];
    console.log('Rendering item:', item.id, 'isOpen:', isOpen); // Log each render
    return (
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.header}>
            <Text style={styles.heading}>{item.heading}</Text>
            <IconButton
              icon={isOpen ? 'chevron-up' : 'chevron-down'}
              size={24}
              onPress={() => toggleCard(item.id)}
            />
          </View>
          {isOpen && <Text style={styles.content}>{item.content}</Text>}
        </Card.Content>
      </Card>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
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
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
  },
  content: {
    marginTop: 10,
    color: '#7e84a3',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
});

export default InventoryList;
