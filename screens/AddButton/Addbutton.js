import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {Divider} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Addbutton({
  inputs,
  setInputs,
  errors,
  handleAddPair,
  handleDeletePair,
  handlePairInputChange,
  values,
}) {
  const handleAdd = () => {
    setInputs([...inputs, {address: '', po_box: ''}]);
    console.log(inputs);
  };

  const handleDelete = index => {
    const updatedInputs = [...inputs];
    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
  };

  const handleInputChange = (text, index, field) => {
    const updatedInputs = [...inputs];
    updatedInputs[index][field] = text;
    setInputs(updatedInputs);
  };
  return (
    <View style={styles.container}>
      {values.warehouse_addresses.map((input, index) => (
        <View key={index}>
          <Text style={styles.label}>Warehouse Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter warehouse address"
            value={input.address}
            placeholderTextColor="#cbcbcb"
            onChangeText={text => handlePairInputChange(text, index, 'address')}
          />
          {errors.warehouse_addresses &&
            errors.warehouse_addresses[index] &&
            errors.warehouse_addresses[index].address && (
              <Text
                style={{
                  color: 'red',
                  fontFamily: 'Poppins-Medium',
                  paddingLeft: 15,
                  fontSize: 12,
                }}>
                {errors.warehouse_addresses[index].address}
              </Text>
            )}
          <Text style={styles.label} className="mt-2">
            PO Box
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter PO"
            placeholderTextColor="#cbcbcb"
            value={input.po_box}
            onChangeText={text => handlePairInputChange(text, index, 'po_box')}
          />
          {errors.warehouse_addresses &&
            errors.warehouse_addresses[index] &&
            errors.warehouse_addresses[index].po_box && (
              <Text
                style={{
                  color: 'red',
                  fontFamily: 'Poppins-Medium',
                  paddingLeft: 15,
                  fontSize: 12,
                }}>
                {errors.warehouse_addresses[index].po_box}
              </Text>
            )}
          {values.warehouse_addresses.length > 1 &&
            index !== 0 &&
            index !== values.warehouse_addresses.length - 1 && (
              <TouchableOpacity onPress={() => handleDeletePair(index)}>
                <View className="w-24 p-2 text-center bg-[#e6e9f4] items-center justify-center flex flex-row rounded-[5px] mt-2">
                  <Image
                    source={require('../../Assets/image/trash.png')}
                    style={{height: 18, width: 15, tintColor: '#7e84a3'}}
                  />
                  <Text className="text-center text-[#7e84a3] ml-2">
                    Delete
                  </Text>
                </View>
              </TouchableOpacity>
            )}

          {values.warehouse_addresses.length > 1 && index === 0 && (
            <TouchableOpacity onPress={() => handleDeletePair(index)}>
              <View className="w-24 p-2 text-center bg-[#e6e9f4] items-center justify-center flex flex-row rounded-[5px] mt-2">
                <Image
                  source={require('../../Assets/image/trash.png')}
                  style={{height: 18, width: 15, tintColor: '#7e84a3'}}
                />
                <Text className="text-center text-[#7e84a3] ml-2">Delete</Text>
              </View>
            </TouchableOpacity>
          )}
          {values.warehouse_addresses.length > 1 &&
            index !== 0 &&
            index !== values.warehouse_addresses.length - 1 && (
              <Divider className="bg-[#cbcbcb] my-3"></Divider>
            )}
          {values.warehouse_addresses.length > 1 && index === 0 && (
            <Divider className="bg-[#cbcbcb] my-3"></Divider>
          )}
        </View>
      ))}

      <TouchableOpacity onPress={() => handleAddPair()}>
        <View className="w-24 p-2 text-center bg-[#f96900] items-center justify-center flex flex-row rounded-[5px] mt-2">
          <MaterialIcons name="add" size={18} color="white" />
          <Text className="ml-2 text-center text-white font-[Roboto-Regular] text-[12px]">
            Add
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  label: {
    marginBottom: 5,
    color: '#00274d',
    fontFamily: 'Poppins-Medium',
  },
  input: {
    paddingVertical: 5,
    paddingLeft: 10,
    borderWidth: 0,
    color: 'gray',
    backgroundColor: 'white',
    borderRadius: 5,
    fontFamily: 'Poppins-Light',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F96900',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  deleteButton: {
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
});
