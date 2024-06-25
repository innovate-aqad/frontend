// src/Shared/settings/privacySecurity/BigCard.js

import React from 'react';
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native';
import {IconButton} from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;

const Activity = ({title, subtitle, leftIcon, rightIcon, onDelete}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {leftIcon && <Image source={leftIcon} style={styles.leftIcon} />}
        <View style={styles.textContainer}>
          <Text style={styles.cardHeading}>{title}</Text>
          {subtitle && <Text style={styles.cardDesc}>{subtitle}</Text>}
        </View>
        {rightIcon && (
          <IconButton
            icon={() => (
              <View style={styles.rightIconWrapper}>
                <Image
                  source={rightIcon}
                  style={[styles.rightIconImage, {tintColor: '#f0142f'}]}
                />
              </View>
            )}
            onPress={onDelete}
            style={styles.rightIcon}
          />
        )}
      </View>
      <View style={styles.underline} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginVertical: 4,
    width: screenWidth - 30,
    alignSelf: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 8,
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
  underline: {
    marginTop: 8,
    height: 1,
    backgroundColor: '#e6e9f4',
  },
  leftIcon: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
  rightIconImage: {
    width: 24,
    height: 24,
  },
  rightIconWrapper: {
    backgroundColor: '#FDEEE3',
    height: 50,
    width: 80,

    borderColor: '#FDD7BC',
    borderWidth: 1,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIconImage: {
    width: 24,
    height: 24,
  },
});

export default Activity;
