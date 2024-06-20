import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import SvgUri from 'react-native-svg-uri';
import comment from '../../../Assets/image/comment.svg';
import phone_call from '../../../Assets/image/phone_call.svg';
import angle_small_down from '../../../Assets/image/angle_small_down.png';

export default function CustomDrawerContent(props) {
  console.log(props, 'props====');
  const [isChatExpanded, setIsChatExpanded] = useState(false);
  const [isRequestExpanded, setIsRequestExpened] = useState(false);

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
