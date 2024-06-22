import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {Divider, RadioButton} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import VelidationSymbol from '../../constants/VelidationSymbol';
import {btnBackround, lightGray} from '../../constants/Theme';
export default function AddbuttonForRetailer({
  inputs,
  setInputs,
  errors,
  handleAddPair,
  handleDeletePair,
  handlePairInputChange,
  values,
  handleRadioButtonChange,
}) {
  // console.log('values.outlet_addresses', values.outlet_addresses);
  return (
    <View style={styles.container}>
      {values.outlet_addresses.map((input, index) => (
        <View key={index}>
          <Text style={styles.label}>
            Outlet Address <VelidationSymbol />
            <RadioButton
              value="first"
              color={btnBackround}
              uncheckedColor={lightGray}
              status={input.is_default ? 'checked' : 'unchecked'}
              onPress={() => handleRadioButtonChange(index)}
            />
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Outlet address"
            value={input.address}
            onChangeText={text => handlePairInputChange(text, index, 'address')}
            placeholderTextColor="#cbcbcb"
            // name={inputs[index].address}
          />
          {errors.outlet_addresses &&
            errors.outlet_addresses[index] &&
            errors.outlet_addresses[index].address && (
              <Text
                style={{
                  color: 'red',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 12,
                }}>
                {errors.outlet_addresses[index].address}
              </Text>
            )}
          <Text style={styles.label}>
            PO Box <VelidationSymbol />
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter PO"
            value={input.po_box}
            onChangeText={text => handlePairInputChange(text, index, 'po_box')}
            placeholderTextColor="#cbcbcb"
          />
          {errors.outlet_addresses &&
            errors.outlet_addresses[index] &&
            errors.outlet_addresses[index].po_box && (
              <Text
                style={{
                  color: 'red',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 12,
                }}>
                {errors.outlet_addresses[index].po_box}
              </Text>
            )}
          {/* {errors.outlet_addresses && (
            <Text
              style={{
                color: 'red',
                fontFamily: 'Poppins-Medium',
                fontSize: 12,
              }}>
              {errors.outlet_addresses}
            </Text>
          )} */}

          {/* {values.outlet_addresses.length > 1 &&
            index !== 0 &&
            index !== values.outlet_addresses.length - 1 && (
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
            )} */}
          {values.outlet_addresses.length > 1 && index !== 0 && (
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
          {values.outlet_addresses.length > 1 &&
            index !== 0 &&
            index !== values.outlet_addresses.length - 1 && (
              <Divider className="bg-[#cbcbcb] my-3"></Divider>
            )}
          {values.outlet_addresses.length > 1 && index === 0 && (
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
    marginBottom: 2,
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
