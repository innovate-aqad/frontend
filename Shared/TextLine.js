import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const {Popover} = renderers;

const MyPopover = () => (
  <Menu renderer={Popover} rendererProps={{preferredPlacement: 'bottom'}}>
    <MenuTrigger style={styles.menuTrigger}>
      <Text style={styles.triggerText}>{'\u263A'}</Text>
    </MenuTrigger>
    <MenuOptions style={styles.menuOptions}>
      <TouchableOpacity className="bg-yellow-500">
        <Text style={styles.contentText}>Hello world!</Text>
      </TouchableOpacity>
      <TouchableOpacity className="mt-3 bg-yellow-500">
        <Text style={styles.contentText}>Hello world!</Text>
      </TouchableOpacity>
    </MenuOptions>
  </Menu>
);

const Row = () => (
  <View style={styles.row}>
    <MyPopover />
  </View>
);

const PopoverExample = () => (
  <MenuProvider
    style={styles.container}
    customStyles={{backdrop: styles.backdrop}}>
    <Row />
  </MenuProvider>
);

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // backgroundColor: 'red',
    // zIndex:1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  backdrop: {},
  menuOptions: {
    padding: 10,
    position: 'relative',
    backgroundColor: 'green',
  },
  menuTrigger: {
    padding: 5,
  },
  triggerText: {
    fontSize: 20,
    backgroundColor: 'red',
    color: 'black',
  },
  contentText: {
    fontSize: 18,
    color: 'red',
  },
});

export default PopoverExample;
