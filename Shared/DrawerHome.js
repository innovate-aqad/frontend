import { Text, View } from 'react-native';
import Drawer from 'react-native-drawer';

const DrawerHome = () => {
  closeControlPanel = () => {
    close();
  };
  openControlPanel = () => {
    open();
  };

  return (
    <Drawer
      type="overlay"
      content={<View className="h-3 bg-red-500">
        <Text className="text-black">reactnavigation</Text>
      </View>}
      tapToClose={true}
      openDrawerOffset={0.2} // 20% gap on the right side of drawer
      panCloseMask={0.2}
      closedDrawerOffset={-3}
      styles={drawerStyles}
      tweenHandler={ratio => ({
        main: {opacity: (2 - ratio) / 2},
      })}>
      <View>
        <Text className="text-red-400">hello</Text>
      </View>
    </Drawer>
  );
};

const drawerStyles = {
  drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
};

export default DrawerHome;
