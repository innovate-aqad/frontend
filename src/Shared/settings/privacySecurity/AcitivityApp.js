// src/Shared/settings/privacySecurity/AcitivityApp.js

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import Activity from './Activity';
import {Provider as PaperProvider} from 'react-native-paper';
import trash from '../../../Assets/image/trash.png';
import barsSort from '../../../Assets/image/bars-sort.png';

const screenWidth = Dimensions.get('window').width;

const AcitivityApp = () => {
  const [locations, setLocations] = useState([
    {
      id: 1,
      name: 'Fort Alexanderstad, UAE',
      details: 'Mac OS, Apple Phone',
      leftIcon: barsSort,
      rightIcon: trash,
    },
    {
      id: 2,
      name: 'Lake Gonzalo, UAE',
      details: 'Mac OS, Apple Phone',
      leftIcon: barsSort,
      rightIcon: trash,
    },
    {
      id: 3,
      name: 'Location 3',
      details: 'Mac OS, Apple Phone',
      leftIcon: barsSort,
      rightIcon: trash,
    },
  ]);

  const handleDelete = id => {
    setLocations(locations.filter(location => location.id !== id));
  };

  return (
    <View style={styles.card}>
      <View className="flex flex-col">
        <Text style={styles.cardHeadingl}>Login Activity</Text>
        <Text style={styles.cardDesc}>
          Numquam cruciamentum adamo suppellex coruscus sustineo delinquo sub
          arguo coadunatio.
        </Text>
        <Text style={styles.textb}>Where you're logged in</Text>
      </View>
      {locations.map(location => (
        <Activity
          key={location.id}
          title={location.name}
          subtitle={location.details}
          leftIcon={location.leftIcon}
          rightIcon={location.rightIcon}
          onDelete={() => handleDelete(location.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  textb: {
    fontSize: 10,
    marginBottom: 8,
    marginLeft: 18,
    fontFamily: 'Poppins-Regular',
    color: '#0058ff',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#ffff',
    borderRadius: 15,
    width: screenWidth - 30,
    alignSelf: 'center',
    marginTop: 8,
  },
  cardHeadingl: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#00274d',
    marginLeft: 15,
    paddingTop: 8,
  },
  cardDesc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#7e84a3',
    marginLeft: 15,
  },
});

export default AcitivityApp;
