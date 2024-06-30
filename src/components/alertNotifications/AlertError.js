import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Switch,
  ScrollView,
  Image,
} from 'react-native';
import CustomStyle from '../../Styles';
import {Card} from 'react-native-paper';
import {POPPINS, ROBOTO} from '../../constants/CustomFontFamily';

// Get the screen width
const screenWidth = Dimensions.get('window').width;

// Define your styles
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  card: {
    backgroundColor: 'white',
    width: screenWidth - 30, // Decrease the width by 30 pixels from screen width
    alignSelf: 'center',
    marginTop: 8,
  },
  cardHeading: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#00274d',
  },
  cardDesc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#7e84a3',
  },
  text: {
    fontSize: 13,
    marginBottom: 5,
    marginLeft: 15,
    fontFamily: 'Poppins-Light',
  },
  texth: {
    fontSize: 13,
    marginBottom: 8,
    marginLeft: 15,
    fontFamily: 'Roboto-Bold',
    marginTop: 5,
  },
});

const MyComponent = ({navigation}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  // Data for the cards
  const cardData = [
    {
      id: '1',
      title: 'Data Sharing',
      subtitle:
        'Suffragium templum occaecati arca thesis tener tantum aegrus sequi vehemens.',
    },
    {
      id: '2',
      title: 'Location Services',
      subtitle:
        'Suffragium templum occaecati arca thesis tener tantum aegrus sequi vehemens.',
    },
    {
      id: '3',
      title: 'Data Deletion',
      subtitle:
        'Suffragium templum occaecati arca thesis tener tantum aegrus sequi vehemens.',
    },
  ];

  const renderItem = ({item}) => (
    <Card style={styles.card}>
      <Card.Title
        title={item.title}
        subtitle={item.subtitle}
        titleStyle={styles.cardHeading}
        subtitleStyle={styles.cardDesc}
        right={props => (
          <Switch
            {...props}
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            trackColor={{false: '#cbcbcb', true: '#f96900'}}
            thumbColor={isSwitchOn ? '#f96900' : 'rgba(203, 203, 203, 0.3)'}
          />
        )}
      />
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.texth}>Privacy</Text>
      <Text style={styles.text}>
        Adduco cito aegrus. Subseco hic adsidue carcer.
      </Text>
      <FlatList
        data={cardData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MyComponent;
