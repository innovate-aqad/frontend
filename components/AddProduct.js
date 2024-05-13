import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function AddProduct() {
  const selectDoc = async nav => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
        allowMultiSelection: true,
      });

      console.log(doc);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('user cancelled the upload', err);
      } else {
        console.log(err);
      }
    }
  };
  return (
    <View className="flex flex-col gap-y-2 h-full  bg-[#f5f5f5]">
      <View className="flex-row rounded-b-xl bg-[#f96900] p-4 pt-9 items-center">
        <Image
          style={styles.topNavigation}
          source={require('../Assets/image/drawable-xhdpi/arrow_left.png')}
        />
        <Text
          className="flex-1 text-[20px] text-center text-white"
          style={{fontFamily: 'Roboto-Bold'}}>
          Add PRODUCTS
        </Text>
      </View>
      <View className="flex flex-col px-4 pt-3 gap-y-3">
        <View>
          <Text className="text-[#00274d] text-[13px] font-[Roboto-Bold]">
            Product Information
          </Text>
        </View>
        <View className="flex flex-col">
          <Text className="text-[#00274d] text-[13px] font-[Roboto-Medium]">
            Trade Licence
          </Text>
          <TouchableOpacity className="h-[76px] mt-3" onPress={selectDoc}>
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
                    source={require('../Assets/image/file_upload.png')}
                  />
                </View>
              )}
            />
          </TouchableOpacity>
        </View>
        <View className="">
          <Text className="text-[#7e84a3] text-[13px] font-[Roboto-Medium]">
            Uploaded Images
          </Text>
          <View className="flex flex-row justify-between mt-3">
            <View className="flex flex-row p-2 bg-white rounded-xl">
              <View className="flex flex-row items-center gap-x-2">
                <Image
                  style={{height: 49, width: 49, borderRadius: 24.5}}
                  source={require('../Assets/image/ram.png')}
                />
                <View className="flex flex-col">
                  <Text className="text-[#00274d] text-[10px]">
                    Filename.jpeg
                  </Text>
                  <Text className="text-[#7e84a3] text-[8px]">256kb</Text>
                </View>
              </View>
              <View className="pl-3">
                <AntDesign name="close" size={12} color="#7e84a3" />
              </View>
            </View>
            <View className="flex flex-row p-2 bg-white rounded-xl">
              <View className="flex flex-row items-center gap-x-2">
                <Image
                  style={{height: 49, width: 49, borderRadius: 24.5}}
                  source={require('../Assets/image/ram.png')}
                />
                <View className="flex flex-col">
                  <Text className="text-[#00274d] text-[10px]">
                    Filename.jpeg
                  </Text>
                  <Text className="text-[#7e84a3] text-[8px]">256kb</Text>
                </View>
              </View>
              <View className="pl-3">
                <AntDesign name="close" size={12} color="#7e84a3" />
              </View>
            </View>
          </View>
          <View className="flex flex-row justify-between mt-2">
            <View className="flex flex-row p-2 bg-white rounded-xl">
              <View className="flex flex-row items-center gap-x-2">
                <Image
                  style={{height: 49, width: 49, borderRadius: 24.5}}
                  source={require('../Assets/image/ram.png')}
                />
                <View className="flex flex-col">
                  <Text className="text-[#00274d] text-[10px]">
                    Filename.jpeg
                  </Text>
                  <Text className="text-[#7e84a3] text-[8px]">256kb</Text>
                </View>
              </View>
              <View className="pl-3">
                <AntDesign name="close" size={12} color="#7e84a3" />
              </View>
            </View>
            <View className="flex flex-row p-2 bg-white rounded-xl">
              <View className="flex flex-row items-center gap-x-2">
                <Image
                  style={{height: 49, width: 49, borderRadius: 24.5}}
                  source={require('../Assets/image/ram.png')}
                />
                <View className="flex flex-col">
                  <Text className="text-[#00274d] text-[10px]">
                    Filename.jpeg
                  </Text>
                  <Text className="text-[#7e84a3] text-[8px]">256kb</Text>
                </View>
              </View>
              <View className="pl-3">
                <AntDesign name="close" size={12} color="#7e84a3" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topNavigation: {
    height: 15,
    width: 23.3,
    tintColor: 'white',
  },
});
