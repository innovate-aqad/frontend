import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import SvgUri from 'react-native-svg-uri';
import comment from '../../Assets/image/comment.svg';
import phone_call from '../../Assets/image/phone_call.svg';
import angle_small_down from '../../Assets/image/angle_small_down.png';

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
      {/* chat with us */}
      <View style={styles.customItemContainer}>
        <TouchableOpacity onPress={toggleChat} style={styles.drawerItem}>
          <View
            className="flex flex-row  
    ">
            <SvgUri source={comment}></SvgUri>

            <Text style={styles.drawerLabel}>Chat with us</Text>
          </View>
          {/* <Entypo
            name={isChatExpanded ? 'chevron-up' : 'chevron-down'}
            size={24}
            color="#000"
          /> */}

          {isChatExpanded ? (
            <Image
              source={require('../../Assets/image/angle_small_down.png')}
              style={styles.tinyLogo}></Image>
          ) : (
            <Image
              source={require('../../Assets/image/angle-small-right.png')}
              style={styles.tinyLogo}></Image>
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
      {/* Request a call */}
      <View style={styles.customItemContainer}>
        <TouchableOpacity onPress={toggleRequest} style={styles.drawerItem}>
          <View
            className="flex flex-row  
    ">
            <SvgUri source={phone_call}></SvgUri>
            <Text style={styles.drawerLabel}>Request a Call</Text>
          </View>

          {/* <Entypo
            name={isRequestExpanded ? 'chevron-up' : 'chevron-down'}
            size={24}
            color="#000"
          /> */}
          {isRequestExpanded ? (
            <Image
              source={require('../../Assets/image/angle_small_down.png')}
              style={styles.tinyLogo}></Image>
          ) : (
            <Image
              source={require('../../Assets/image/angle_small_down.png')}
              style={styles.tinyLogo}></Image>
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

    position: 'relative',
  },
  menuButton: {
    marginRight: 10,
  },
  menuText: {
    position: 'absolute',
    left: '50%',
    // transform: [{ translateX: -50% }],
    fontSize: 18,
    color: '#000',
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
    fontSize: 16,
    paddingLeft: 20,
  },
  drawerLabel2: {
    fontSize: 16,
    paddingLeft: 34,
  },
  tinyLogo: {
    height: 8,
    width: 14,
  },
});
