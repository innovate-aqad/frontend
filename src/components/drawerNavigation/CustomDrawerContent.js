import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import SvgUri from 'react-native-svg-uri';
import comment from '../../Assets/image/comment.svg';
import phone_call from '../../Assets/image/phone_call.svg';
import { blue, grayColor } from '../../constants/Theme';
import { POPPINS } from '../../constants/CustomFontFamily';

export default function CustomDrawerContent(props) {
  console.log(props, 'props====');
  const [isChatExpanded, setIsChatExpanded] = useState(false);
  const [isRequestExpanded, setIsRequestExpened] = useState(false);

  const toggleChat = () => {
    setIsChatExpanded(!isChatExpanded);
  };
  const toggleRequest = () => {
    setIsRequestExpened(!isRequestExpanded);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => props.navigation.closeDrawer()}>
          <Entypo name="cross" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.menuText}>Menu</Text>
      </View>
      <View style={styles.customItemContainer}>
        <TouchableOpacity onPress={toggleChat} style={styles.drawerItem}>
          <View
            className="flex flex-row ">
            <SvgUri source={comment} style={styles.svg}></SvgUri>

            <Text style={styles.drawerLabel}>Chat With Us</Text>
          </View>

          {isChatExpanded ? (
            <Image
              source={require('../../Assets/image/angle_small_down.png')}
              style={{height:7.2,width:14}} />
          ) : (
            <Image
              source={require('../../Assets/image/universal/angle-down.png')}
              style={[styles.tinyLogo,{tintColor:grayColor}]} />
          )}
        </TouchableOpacity>
        {isChatExpanded && (
          <View style={styles.subItemContainer}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('WhatsAppMessage')}
              style={styles.subDrawerItem}>
              <Text style={styles.drawerLabel2}>WhatsApp Message</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('AQADApp')}
              style={styles.subDrawerItem}>
              <Text style={styles.drawerLabel2}>AQAD App</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.customItemContainer}>
        <TouchableOpacity onPress={toggleRequest} style={styles.drawerItem}>
          <View
            className="flex flex-row ">
            <SvgUri source={phone_call}></SvgUri>
            <Text style={styles.drawerLabel}>Request a Call</Text>
          </View>
          {isRequestExpanded ? (
            <Image
              source={require('../../Assets/image/angle_small_down.png')}
              style={styles.tinyLogo} />
          ) : (
            <Image
              source={require('../../Assets/image/universal/angle-down.png')}
              style={[styles.tinyLogo,{tintColor:grayColor}]} />
          )}
        </TouchableOpacity>
        {isRequestExpanded && (
          <View style={styles.subItemContainer}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('technical')}
              style={styles.subDrawerItem}>
              <Text style={styles.drawerLabel2}>Technical issues</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('sales')}
              style={styles.subDrawerItem}>
              <Text style={styles.drawerLabel2}>Sales Related</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('contact')}
              style={styles.subDrawerItem}>
              <Text style={styles.drawerLabel2}>Contact via Email</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingTop: 30,
    position: 'relative',
  },
  menuButton: {
    marginRight: 10,
  },
  menuText: {
    position: 'absolute',
    left: '40%',
    fontSize: 20,
    color: blue,
    fontFamily: 'Roboto-Bold',
    textTransform: 'uppercase',
    paddingTop: 30,
    letterSpacing: 1,
  },

  drawerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  subItemContainer: {
    paddingLeft: 30,
  },
  subDrawerItem: {
    paddingVertical: 10,
  },
  drawerLabel: {
    fontSize: 15,
    paddingLeft: 28,
    fontFamily: POPPINS.PoppinsRegular,
    color: grayColor,
  },
  drawerLabel2: {
    fontSize: 13,
    paddingLeft: 42,
    fontFamily: POPPINS.PoppinsRegular,
    color: grayColor,
  },
  tinyLogo: {
    height: 7.2,
    width: 14,
  },
  svg: {
    height: 24,
    width: 24,
  },
});
