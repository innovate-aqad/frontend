import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import {blue, grayColor, lightGray} from '../../../src/constants/Theme';
import {POPPINS, ROBOTO} from '../../constants/CustomFontFamily';

const styles = StyleSheet.create({
  today: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    color: blue,
  },
  imageIcons: {
    height: 48,
    width: 49,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  heading: {
    fontFamily: 'Poppins-Medium',
    color: blue,
    fontSize: 13,
    letterSpacing: 0.08,
  },

  desc: {
    fontFamily: 'Poppins-Regular',
    color: grayColor,
    fontSize: 8,
    letterSpacing: 0.24,
    width: 250,
    marginTop: -10,
  },
  card: {
    margin: 5,
  },
  // container: {
  //   flex: 1,
  //   padding: 1,
  // },
  faqTitle: {
    fontFamily: ROBOTO.RobotoMedium,
    color: blue,
    marginVertical: 5,
    marginTop: 0,
    marginLeft: 4,
  },
  faqDescription: {
    fontFamily: POPPINS.PoppinsLight,
    color: blue,
    // marginVertical: 10,
    // marginTop: 5,
    marginLeft: 4,
  },
});

const notifications = [
  {
    id: '1',
    title: 'Card Title 1',
    subtitle: 'Card Subtitle 1',
    image: require('../../Assets/image/bp.png'),
  },
];

const NotificationCard = ({title, subtitle, image}) => (
  <Card style={styles.card}>
    <Card.Title
      title={title}
      subtitle={subtitle}
      titleStyle={styles.heading}
      subtitleStyle={styles.desc}
      left={() => <Image style={{height: 50, width: 50}} source={image} />}
    />
  </Card>
);

const PosCard = () => (
  <View style={styles.container}>
    <View>
      <Text style={styles.faqTitle}>Active POS Integration</Text>
      <Text style={styles.faqDescription}>
        This section shows the currently active POS integration.
      </Text>
    </View>
    <FlatList
      data={notifications}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <NotificationCard
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
        />
      )}
    />
  </View>
);

export default PosCard;
