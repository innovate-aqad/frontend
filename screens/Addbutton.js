import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function Addbutton() {
  const [inputs, setInputs] = useState([]);

  const handleAdd = () => {
    setInputs([...inputs, {email: '', password: ''}]);
  };

  const handleDelete = index => {
    const updatedInputs = [...inputs];
    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleAdd} style={styles.button}>
        <Text>Add</Text>
      </TouchableOpacity>
      {inputs.map((input, index) => (
        <SafeAreaView key={index}>
          <Text style={styles.label} className="text-[#00274D] px-3">
            Your Email
          </Text>
          <TextInput
            className="!border-none pl-4 !border-white"
            placeholderTextColor="rgb(210, 210, 210)"
            style={styles.input}
            placeholder="Example@gmail.com"
            value={input.email}
            onChangeText={text => {
              const updatedInputs = [...inputs];
              updatedInputs[index].email = text;
              setInputs(updatedInputs);
            }}
          />
          <Text style={styles.label} className="text-[#00274D] px-3">
            Password
          </Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="rgb(210, 210, 210)"
            placeholder="Enter your password"
            value={input.password}
            onChangeText={text => {
              const updatedInputs = [...inputs];
              updatedInputs[index].password = text;
              setInputs(updatedInputs);
            }}
          />
          <TouchableOpacity
            onPress={() => handleDelete(index)}
            style={styles.deleteButton}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </SafeAreaView>
      ))}
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
