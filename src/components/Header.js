import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

export default function Header({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          style={styles.menuIcon}
          source={require('../Assets/image/bars-sort.png')}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Image
          style={styles.tinyLogo}
          source={require('../Assets/image/omniIcon.jpeg')}
        />
        <Text style={styles.title}>AL QUTUB Al DHAHABI</Text>
      </View>
      <View style={styles.notificationContainer}>
        <Octicons name="bell" size={12.5} color={'#F96900'} />
        <Text style={styles.notificationBadge}>10</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
  },
  menuIcon: {
    height: 21,
    width: 24,
    tintColor: '#7e84a3',
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 30.9,
    height: 29.8,
    borderRadius: 11.5,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#050605',
  },
  notificationContainer: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#f96900',
    color: 'white',
    borderRadius: 7.5,
    width: 17,
    height: 15,
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 15,
  },
});
