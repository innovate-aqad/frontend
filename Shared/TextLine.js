import React, {useState} from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import Entypo from 'react-native-vector-icons/Entypo';

function PopoverExample() {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
      }}>
      <Menu
        visible={visible}
        style={{borderRadius: 15, paddingLeft: 4, paddingRight: 4}}
        anchor={
          <TouchableOpacity onPress={showMenu}>
            <Entypo name="dots-three-vertical" size={20} color="#cbcbcb" />
          </TouchableOpacity>
        }
        onRequestClose={hideMenu}>
        <MenuItem onPress={hideMenu} className="">
          <View className="flex flex-row items-center gap-x-2">
            <View className="p-2 bg-blue-100 rounded-lg">
            <Image
              style={{tintColor: '#6d93f2', height: 17, width: 17}}
              source={require('../Assets/image/pencil.png')}
            />
            </View>
            <Text
              className="text-[#6d93f2]"
              style={{fontFamily: 'Poppins-semiBold'}}>
              Edit
            </Text>
          </View>
        </MenuItem>
        <MenuDivider className="px-20" />
        <MenuItem onPress={hideMenu}>
          <View className="flex flex-row items-center gap-2">
          <View className="p-2 bg-red-100 rounded-lg">
            <Image
              style={{tintColor: '#df6886', height: 17, width: 17}}
              source={require('../Assets/image/trash.png')}
            />
            </View>
            <Text
              className="text-[#df6886]"
              style={{fontFamily: 'Poppins-semiBold'}}>
              Remove
            </Text>
          </View>
        </MenuItem>
      </Menu>
    </View>
  );
}

export default PopoverExample;
