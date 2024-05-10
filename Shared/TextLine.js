import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(true);

  const hideDialog = () => setVisible(false);

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog} style={{ backgroundColor: 'white' }}>
        <Dialog.Actions className="flex flex-col gap-y-3 w-full !mx-auto">
          <TouchableOpacity className="w-full p-3 text-center bg-green-500 rounded-full">
          <Text className="font-bold text-center text-white"> UPDATE</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-full p-3 text-center bg-red-500 rounded-full">
          <Text className="font-bold text-center text-white"> DELETE</Text>
          </TouchableOpacity>
          
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default MyComponent;