import React from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import {blue, lightGray} from '../../../../constants/Theme';
import {POPPINS} from '../../../../constants/CustomFontFamily';

const data = [
  {
    send: {
      message: ' ram Molestias spiculum vereor vulnero aeneus comitatus ars ater.',
    },
    id: '1',
    sendStatus: true,
  },
  {reciever: {message: 'Molestias spiculum vereor vulnero aeneus comitatus ars ater.'}, id: '2', sendStatus: false},
  {
    send: {
      message: 'Molestias spiculum vereor vulnero aeneus comitatus ars ater.',
    },
    id: '3',
    sendStatus: true,
  },
  {
    send: {
      message: 'Molestias spiculum vereor vulnero aeneus comitatus ars ater.',
    },
    id: '1',
    sendStatus: true,
  },
  {reciever: {message: 'Molestias spiculum vereor vulnero aeneus comitatus ars ater.'}, id: '2', sendStatus: false},
  {
    send: {
      message: 'Molestias spiculum vereor vulnero aeneus comitatus ars ater.',
    },
    id: '3',
    sendStatus: true,
  },
  {reciever: {message: 'Molestias spiculum vereor vulnero aeneus comitatus ars ater.'}, id: '2', sendStatus: false},
  {
    send: {
      message: 'Molestias spiculum vereor vulnero aeneus comitatus ars ater.',
    },
    id: '3',
    sendStatus: true,
  },
];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Messages() {
  const renderItem = ({item}) =>(
    <View>
        {
            item.sendStatus ? (
                <View style={styles.container}>
                  <Text style={styles.title}>{item?.send?.message}</Text>
                  <Text style={styles.time}>
                  10:56 AM
                  </Text>
                </View>
              ) : (
                <View style={styles.container1}>
                  <Text style={styles.title}>{item?.reciever?.message}</Text>
                  <Text style={styles.time}>
                  10:56 AM
                  </Text>
                </View>
              )
        }
    </View>)
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6EEFF',
    width: windowWidth - 90,
    marginTop: 6,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 0,
    padding: 10,
    paddingHorizontal: 15,
  },
  container1: {
    backgroundColor: '#fee8d9',
    marginLeft: 65,
    // width: windowWidth - 90,
    marginTop: 6,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 15,
    padding: 10,
    paddingHorizontal: 15,
  },
  title: {
    color: blue,
    fontFamily: POPPINS.PoppinsLight,
    fontSize: 13,
  },
  time:{
    color:lightGray,
    fontSize:10,
    fontFamily:POPPINS.PoppinsRegular,
    marginTop:3
  }
});
