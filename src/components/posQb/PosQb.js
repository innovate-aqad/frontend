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
import InputTextField from '../../Shared/InputTextField';

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
      <View style={styles.imageContainerMain}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.pocImage}
            source={require('../../Assets/image/bp.png')}
          />
        </View>
      </View>
      <View>
        <View style={styles.headingContainer}>
          <Text style={styles.faqTitle}>POS Integration Platforms</Text>
          <Text style={styles.faqDescription}>
            This section lists all available POS integration platforms.
          </Text>
        </View>
      </View>
      <View>
        <InputTextField />
      </View>
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
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
    padding: 8,
    borderRadius: 30,
    shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 1,
    margin: 16,
    height: 80,
    width: 80,
  },
  pocImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  imageContainerMain: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  faqTitle: {
    fontFamily: ROBOTO.RobotoMedium,
    color: blue,
    // marginVertical: 10,
    marginTop: 10,
    marginLeft: 4,
  },
  faqDescription: {
    fontFamily: POPPINS.PoppinsLight,
    color: blue,
    // marginVertical: 10,
    marginTop: 5,
    marginLeft: 4,
  },
  headingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
