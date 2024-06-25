// src/Shared/settings/privacySecurity/PrivacyPolicy.js

import * as React from 'react';
import {Avatar, Card, Switch} from 'react-native-paper';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import key from '../../../Assets/image/settings/key.svg';
import {ROBOTO} from '../../../constants/CustomFontFamily';
import AcitivityApp from './AcitivityApp';

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
  permissionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 8,
    width: screenWidth - 30, // Decrease the width by 30 pixels from screen width
    alignSelf: 'center',
  },
  permissionTextContainer: {
    flexDirection: 'column',
    flex: 1, // Flex to take available space
    marginRight: 10, // Add margin to the right to avoid overlap with the arrow
  },
  permissionText: {
    fontSize: 16,
    marginLeft: 6,
  },
  arrow: {
    height: 25,
    width: 13,
    tintColor: '#7e84a3',
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
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.texth}>Privacy</Text>
        <Text style={styles.text}>
          Adduco cito aegrus. Subseco hic adsidue carcer.
        </Text>
        <Card style={styles.card}>
          <Card.Title
            title="Data Sharing"
            subtitle="Suffragium templum occaecati arca thesis tener tantum aegrus sequi vehemens."
            titleStyle={styles.cardHeading}
            subtitleStyle={styles.cardDesc}
            right={props => (
              <Switch
                {...props}
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
              />
            )}
          />
        </Card>
        <Card style={styles.card}>
          <Card.Title
            title="Location Services"
            subtitle="Suffragium templum occaecati arca thesis tener tantum aegrus sequi vehemens."
            titleStyle={styles.cardHeading}
            subtitleStyle={styles.cardDesc}
            right={props => (
              <Switch
                {...props}
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
              />
            )}
          />
        </Card>
        <Card style={styles.card}>
          <Card.Title
            title="Data Deletion"
            subtitle="Suffragium templum occaecati arca thesis tener tantum aegrus sequi vehemens."
            titleStyle={styles.cardHeading}
            subtitleStyle={styles.cardDesc}
            right={props => (
              <Switch
                {...props}
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
              />
            )}
          />
        </Card>

        <Text style={styles.texth}>Security</Text>
        <Text style={styles.text}>
          Adduco cito aegrus. Subseco hic adsidue carcer.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('')}
          style={styles.permissionContainer}>
          <View style={styles.permissionTextContainer}>
            <Text style={styles.cardHeading}>permission</Text>
            <Text style={styles.cardDesc}>
              Suffragium templum occaecati arca thesis tener tantum aegrus sequi
              vehemens.
            </Text>
          </View>
          <Image
            style={styles.arrow}
            source={require('../../../Assets/image/angle-small-right.png')}
          />
        </TouchableOpacity>

        <AcitivityApp />
      </View>
    </ScrollView>
  );
};

export default MyComponent;
