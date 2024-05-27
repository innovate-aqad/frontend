import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InputTextField from '../../../Shared/InputTextField';
const mockData = ['S', 'M', 'L', 'XL', 'XXL'];
import DocumentPicker from 'react-native-document-picker';
import SelectInput from '../../../Shared/SelectInput';

export default function AddProduct(nav) {
  const [size, setSize] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const selectDoc = async nav => {
    try {
      const results = await DocumentPicker.pick({
        type: [
          DocumentPicker.types.pdf,
          DocumentPicker.types.images,
          DocumentPicker.types.video,
        ],
        allowMultiSelection: true,
      });

      console.log(results);
      const fileNames = results.map(file => file.name);
      setSelectedFiles(fileNames);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('user cancelled the upload', err);
      } else {
        console.log(err);
      }
    }
  };

  const handleSelect = index => {
    if (size.includes(index)) {
      setSize(size.filter(item => item !== index));
    } else {
      setSize([...size, index]);
    }
  };

  console.log(size, 'sizeproduct');
  return (
    <ScrollView>
      <View className="flex flex-col h-full mb-12  bg-[#f5f5f5]">
        {/* <View className="flex-row rounded-b-xl bg-[#f96900] p-4 pt-9 items-center">
          <Image
            style={styles.topNavigation}
            source={require('../../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
          <Text
            className="flex-1 text-[20px] text-center text-white"
            style={{fontFamily: 'Roboto-Bold'}}>
            Add PRODUCTS
          </Text>
        </View> */}
        <ScrollView keyboardShouldPersistTaps="handled">
          <View className="flex flex-col px-4 pt-3 mb-5 gap-y-3">
            <View>
              <Text className="text-[#00274d] text-[13px] font-[Roboto-Bold]">
                Product Information
              </Text>
            </View>
            <View className="">  
            </View>
            <View className="flex flex-row w-full">
              <View className="w-full pr-1">
                <Text style={styles.textTitle}>Product Category</Text>
                <SelectInput placeholder={"Select product category"}/>
              </View>
            </View>
            <View className="flex flex-row w-full ">
              <View className="w-full pr-1">
                <Text style={styles.textTitle}>Product Sub Category</Text>
                <SelectInput placeholder={"Select product sub category"}/>
              </View>
            </View>
            <View className="flex flex-row w-full ">
              <View className="w-full pr-1">
                <Text style={styles.textTitle}>Product Brand</Text>
                <SelectInput placeholder={"Select product brand"}/>
              </View>
            </View>
            <View className="flex flex-row w-full ">
              <View className="w-full pr-1">
                <Text style={styles.textTitle}>Product Name</Text>
                <InputTextField placeholderTextColor="Select category" />
              </View>
            </View>
            
            <View className="flex flex-row w-full ">
              <View className="w-full pr-1">
                <Text style={styles.textTitle}>UPC (Universal Product Code)</Text>
                <InputTextField placeholderTextColor="Enter UPC" />
              </View>
            </View>
            <View className="flex flex-row w-full ">
              <View className="w-full pr-1">
                <Text style={styles.textTitle}>Description</Text>
                <InputTextField
                  numberOfLines={4}
                  placeholderTextColor="Enter product description in 200 works"
                />
              </View>
            </View>
            
            
            <View className="mt-4">
              <TouchableOpacity
                className="z-50 rounded-lg"
                onPress={()=>nav.navigation.navigate("addVariation")}
                style={styles.button}>
                <Text
                  className="text-white"
                  style={{fontFamily: 'Poppins-SemiBold'}}>
                  ADD PRODUCT
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topNavigation: {
    height: 15,
    width: 23.3,
    tintColor: 'white',
  },
  textTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#00274d',
  },
  button: {
    backgroundColor: '#F96900',
    padding: 12,
    alignItems: 'center',
    color: 'red',
    marginTop: 8,
  },
});
