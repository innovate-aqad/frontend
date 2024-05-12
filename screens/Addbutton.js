import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function Addbutton({inputs, setInputs, errors, handleAddPair, handleDeletePair, handlePairInputChange, values}) {
  // const [inputs, setInputs] = useState([]);

  // const handleAdd = () => {
  //   setInputs([...inputs, {address: '', po_box: ''}]);
  // };

  // const handleDelete = index => {
  //   const updatedInputs = [...inputs];
  //   updatedInputs.splice(index, 1);
  //   setInputs(updatedInputs);
  // };


  const handleAdd = () => {
    setInputs([...inputs, { address: '', po_box: '' }]);
    console.log(inputs)
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
    // <View style={styles.container}>
    //   <TouchableOpacity onPress={handleAdd} style={styles.button}>
    //     <Text>Add</Text>
    //   </TouchableOpacity>
    //   {inputs.map((input, index) => (
    //     <SafeAreaView key={index}>
    //       <Text style={styles.label} className="text-[#00274D] px-3">
    //         Warehouse Address
    //       </Text>
    //       <TextInput
    //         className="!border-none pl-4 !border-white"
    //         placeholderTextColor="rgb(210, 210, 210)"
    //         style={styles.input}
    //         placeholder="Enter warehouse address"
    //         value={input.address}
    //         onChangeText={text => {
    //           const updatedInputs = [...inputs];
    //           updatedInputs[index].address = text;
    //           setInputs(updatedInputs);
    //         }}
    //       />
    //       <Text style={styles.label} className="text-[#00274D] px-3">
    //         PO Box
    //       </Text>
    //       <TextInput
    //         style={styles.input}
    //         placeholderTextColor="rgb(210, 210, 210)"
    //         placeholder="Enter PO"
    //         value={input.po_box}
    //         onChangeText={text => {
    //           const updatedInputs = [...inputs];
    //           updatedInputs[index].po_box = text;
    //           setInputs(updatedInputs);
    //         }}
    //       />
    //       <TouchableOpacity
    //         onPress={() => handleDelete(index)}
    //         style={styles.deleteButton}>
    //         <Text>Delete</Text>
    //       </TouchableOpacity>
    //     </SafeAreaView>
    //   ))}
    // </View>
    <View style={styles.container}>
   
    {values.warehouse_addresses.map((input, index) => (
      <View key={index}>
        <Text style={styles.label}>Warehouse Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter warehouse address"
          value={input.address}
          onChangeText={text => handlePairInputChange(text, index, 'address')}

          // name={inputs[index].address}
        />
          {errors.warehouse_addresses && errors.warehouse_addresses[index] && errors.warehouse_addresses[index].address && (
              <Text style={{ color: 'red' }}>{errors.warehouse_addresses[index].address}</Text>
            )}
        <Text style={styles.label}>PO Box</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter PO"
          value={input.po_box}
          onChangeText={text => handlePairInputChange(text, index, 'po_box')}

          // name={inputs[index].po_box}

        />
        {errors.warehouse_addresses && errors.warehouse_addresses[index] && errors.warehouse_addresses[index].po_box && (
              <Text style={{ color: 'red' }}>{errors.warehouse_addresses[index].po_box}</Text>
            )}
            
        <TouchableOpacity
          onPress={() => handleDeletePair(index)}
          style={styles.deleteButton}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    ))}
     <TouchableOpacity onPress={()=>handleAddPair()} style={styles.button}>
      <Text>Add</Text>
     </TouchableOpacity>
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    margin: 3,
    borderWidth: 0,
    // padding: 12,
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
