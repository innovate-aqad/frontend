import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {ROBOTO, POPPINS} from '../../constants/CustomFontFamily';
import {
  blue,
  btnBackround,
  flexTradButtonColor,
  screenBackground,
  white,
} from '../../constants/Theme';
import POSInte from './POSInte';
import PosCard from './PosCard';

const windowHeight = Dimensions.get('window').height;

export default function FeatureMain({navigation}) {
  // Add navigation as a prop
  const [value, setValue] = React.useState('left');

  return (
    <View style={{flex: 1, backgroundColor: screenBackground}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.topNavigation}
            source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>POS INTEGRATION</Text>
      </View>
      <View
        className="flex flex-col h-full p-5 py-8 mb-10 gap-y-1"
        style={{backgroundColor: screenBackground, height: windowHeight - 75}}>
        <PosCard />
        <POSInte />
      </View>

      {/* <View style={styles.contentContainer}>
      
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f96900',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  topNavigation: {
    height: 15,
    width: 23.3,
    tintColor: 'white',
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    color: white,
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  // contentContainer: {
  //   flex: 1,
  //   padding: 0,
  // },
  card: {
    margin: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'red', // Gray color
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
  },
});
