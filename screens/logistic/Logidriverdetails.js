import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  View,
  Animated,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Badge, IconButton} from 'react-native-paper';
import {Avatar, Card} from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';

export default function VendorInfo(nav) {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [inputs, setInputs] = useState([]);
  const [inputsVehicle, setInputsVehicle] = useState([]);

  const handleAdd = () => {
    setInputs([...inputs, {email: '', password: ''}]);
  };

  const handleDelete = index => {
    const updatedInputs = [...inputs];
    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
  };
  // vehicle add
  const handleAddVehicle = () => {
    setInputsVehicle([...inputsVehicle, {email2: '', password2: ''}]);
  };
  const handleDeleteVehicle = indexVehicle => {
    const updatedInputs = [...inputsVehicle];
    updatedInputs.splice(indexVehicle, 1);
    setInputsVehicle(updatedInputs);
  };
  const redirectBusiness = () => {
    nav.navigation.navigate('logisbusiness');
    // nav.navigation.navigate('bottomTab');
  };

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 75,
      duration: 2000,
    }).start();
  }, []);
  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
        allowMultiSelection: true,
      });

      console.log(doc, 'driver logt docs');
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('user cancelled the upload driver', err);
      } else {
        console.log(err);
      }
    }
  };

  return (
    <View
      className="flex flex-col p-4   h-full bg-gray-100 !text-black
        ">
      <View className="relative flex flex-row items-center top-3 ">
        <Image
          style={styles.topNavigation}
          source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
        />
      </View>
      <View className="mt-5">
        <Text
          className="text-3xl text-[#00274D]"
          style={{fontFamily: 'Poppins-bold'}}>
          Logistic Partner Info
        </Text>
        <Text
          className="text-xs pt-2 text-gray-400"
          style={{fontFamily: 'Poppins-Light'}}>
          Pick the type of account that suits your business or personal needs.
        </Text>
      </View>
      <View className=" pt-10 ">
        {/* progressbar */}
        <View className="flex flex-col">
          <View className="flex flex-row justify-between ">
            <Text
              className="text-[#F96900]"
              style={{fontFamily: 'Poppins-Regular'}}>
              Profile Upload (3/3)
            </Text>
            <Text
              className="text-[#F96900]"
              style={{fontFamily: 'Poppins-Regular'}}>
              100%
            </Text>
          </View>

          <Animated.View style={[styles.bar, {width: progress}]} />
        </View>

        <View>
          <Text
            className="text-2xl text-[#00274D] pt-3"
            style={{fontFamily: 'Poppins-bold'}}>
            Driver Details
          </Text>
        </View>

        {/* profile */}
        <View className=" pt-10 " style={styles.user}>
          {/* <TouchableOpacity className="flex-row items-center p-2  bg-white border border-white rounded-2xl "> */}

          <FontAwesome6 name={'user'} size={30} />
          <Feather
            name={'edit-2'}
            style={{position: 'absolute', bottom: -6, right: -6}}
          />

          {/* </TouchableOpacity> */}
        </View>
        {/* input fields */}
        <SafeAreaView>
          <Text
            className="text-[#00274D] px-3"
            style={{fontFamily: 'Poppins-SemiBold'}}>
            Driver Name
          </Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="rgb(210, 210, 210)"
            placeholder="Enter Driver's name"
            className="!border-none pl-4 !border-white"
            borderRadius={10}
          />
          <View className="mt-3">
            <Text className="text-[#00274d] text-[13px] font-[Poppins-Medium]">
              Driving Licence
            </Text>
            <TouchableOpacity className="h-[76px]" onPress={selectDoc}>
              <Card.Title
                className="bg-white shadow rounded-xl"
                title="Click to Upload"
                titleStyle={{color: '#0058ff', fontSize: 13, paddingTop: 4.5}}
                subtitle="(Max File Size:MB) File Formate: PDF JPEG, JPG"
                subtitleStyle={{
                  color: 'black',
                  paddingBottom: 4.5,
                  color: '#7e84a3',
                  fontSize: 10,
                }}
                left={props => (
                  <View className="flex flex-row items-center pt-2 pb-2.5 pl-3 border rounded-full pr-7 border-[#D0DFFF] bg-[#E6EEFF]">
                    <Image
                      style={{height: 24, width: 20}}
                      source={require('../../Assets/image/file_upload.png')}
                    />
                  </View>
                )}
              />
            </TouchableOpacity>
          </View>
          {/* add-1 */}
          <TouchableOpacity onPress={handleAdd} style={styles.buttonadd}>
            <Text>Add</Text>
          </TouchableOpacity>
          {inputs.map((input, index) => (
            <SafeAreaView key={index}>
              <View className=" pt-10 " style={styles.user}>
                {/* <TouchableOpacity className="flex-row items-center p-2  bg-white border border-white rounded-2xl "> */}

                <FontAwesome6 name={'user'} size={30} />
                <Feather
                  name={'edit-2'}
                  style={{position: 'absolute', bottom: -6, right: -6}}
                />

                {/* </TouchableOpacity> */}
              </View>
              <Text
                className="text-[#00274D] px-3"
                style={{fontFamily: 'Poppins-SemiBold'}}>
                Full Name
              </Text>
              <TextInput
                style={styles.input}
                placeholderTextColor="rgb(210, 210, 210)"
                placeholder="Enter your Name"
                className="!border-none pl-4 !border-white"
                borderRadius={10}
              />
              <View className="mt-3">
                <Text className="text-[#00274d] text-[13px] font-[Poppins-Medium]">
                  Trade Licence
                </Text>
                <TouchableOpacity className="h-[76px]" onPress={selectDoc}>
                  <Card.Title
                    className="bg-white shadow rounded-xl"
                    title="Click to Upload"
                    titleStyle={{
                      color: '#0058ff',
                      fontSize: 13,
                      paddingTop: 4.5,
                    }}
                    subtitle="(Max File Size:MB) File Formate: PDF JPEG, JPG"
                    subtitleStyle={{
                      color: 'black',
                      paddingBottom: 4.5,
                      color: '#7e84a3',
                      fontSize: 10,
                    }}
                    left={props => (
                      <View className="flex flex-row items-center pt-2 pb-2.5 pl-3 border rounded-full pr-7 border-[#D0DFFF] bg-[#E6EEFF]">
                        <Image
                          style={{height: 24, width: 20}}
                          source={require('../../Assets/image/file_upload.png')}
                        />
                      </View>
                    )}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => handleDelete(index)}
                style={styles.deleteButton}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </SafeAreaView>
          ))}
          <View style={styles.line} />
          {/* text2 */}
          <View>
            <Text
              className="text-2xl text-[#00274D] pt-3 pb-3"
              style={{fontFamily: 'Poppins-bold'}}>
              Vehicle Details
            </Text>
          </View>

          <Text
            className="text-[#00274D] px-3"
            style={{fontFamily: 'Poppins-SemiBold'}}>
            Vehicle Brand
          </Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="rgb(210, 210, 210)"
            placeholder="Enter Vehicle brand name"
            className="!border-none pl-4 !border-white"
            borderRadius={10}
          />
          <Text
            className="text-[#00274D] px-3"
            style={{fontFamily: 'Poppins-SemiBold'}}>
            Vehicle Name
          </Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="rgb(210, 210, 210)"
            placeholder="Enter Vehicle registered number"
            className="!border-none pl-4 !border-white"
            borderRadius={10}
          />

          {/* add-2 */}
          <TouchableOpacity onPress={handleAddVehicle} style={styles.buttonadd}>
            <Text>Add</Text>
          </TouchableOpacity>
          {inputsVehicle.map((inputsVehicle, indexVehicle) => (
            <SafeAreaView key={indexVehicle}>
              <Text
                className="text-[#00274D] px-3"
                style={{fontFamily: 'Poppins-SemiBold'}}>
                Full Name22
              </Text>
              <TextInput
                style={styles.input}
                placeholderTextColor="rgb(210, 210, 210)"
                placeholder="Enter your Name"
                className="!border-none pl-4 !border-white"
                borderRadius={10}
              />
              <Text
                className="text-[#00274D] px-3"
                style={{fontFamily: 'Poppins-SemiBold'}}>
                Full Name2
              </Text>
              <TextInput
                style={styles.input}
                placeholderTextColor="rgb(210, 210, 210)"
                placeholder="Enter your Name"
                className="!border-none pl-4 !border-white"
                borderRadius={10}
              />

              <TouchableOpacity
                onPress={() => handleDeleteVehicle(indexVehicle)}
                style={styles.deleteButton}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </SafeAreaView>
          ))}
        </SafeAreaView>
      </View>
      <View className="pt-5">
        <TouchableOpacity
          onPress={() => redirectBusiness()}
          style={styles.button}>
          <Text
            className="text-white "
            style={{fontFamily: 'Poppins-SemiBold'}}>
            PROCEED
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  topNavigation: {
    height: 15,
    width: 23.3,
  },
  input: {
    height: 40,
    margin: 3,
    borderWidth: 1,
    // padding: 12,
    color: 'gray',
    backgroundColor: 'white',
    // borderRadius: 20,
    fontFamily: 'Poppins-Light',
  },
  button: {
    backgroundColor: '#F96900', // Default button color
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
  },
  user: {
    alignSelf: 'center',
  },
  container: {
    height: 15,
    backgroundColor: '#ccc',
    borderRadius: 10,
    // margin: 10,
  },
  bar: {
    height: 5,
    backgroundColor: '#F96900',
    borderRadius: 10,
  },
  buttonadd: {
    backgroundColor: '#F96900', // Default button color
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
    width: 120,
    marginBottom: 10,
    marginTop: 10,
  },
  deleteButton: {
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    width: 120,
  },
  line: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
});
