import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import marker from '../../../Assets/image/myaccount/marker_1.svg';
import SvgUri from 'react-native-svg-uri';
import {Divider} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Outlet() {
  const [select, setSelect] = useState(0);

  const changeAddress = index => {
    setSelect(index);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-col mb-10 h-screen p-4 bg-[#f5f5f5]">
          <Text className="text-[#00274d] font-[Poppins-Bold] text-[13px]">
            Default Outlet
          </Text>
          <View className="p-2.5 mt-2 bg-white rounded-lg">
            <View className="flex flex-row">
              <View className="w-[10%]">
                <SvgUri width={24} height={24} source={marker} />
              </View>
              <View className="w-[90%]">
                <View className="flex flex-row">
                  <Text
                    className="text-[#7e84a3] font-[Poppins-Light] text-[13px]"
                    style={{letterSpacing: 0.08}}>
                    Name
                  </Text>
                  <Text
                    className="text-[#7e84a3] pl-6 pr-3 font-[Poppins-Light] text-[13px]"
                    style={{letterSpacing: 0.08}}>
                    :
                  </Text>
                  <Text
                    className="text-[#00274d] font-[Poppins-Regular] text-[13px]"
                    style={{letterSpacing: 0.08}}>
                    Jane Deo
                  </Text>
                </View>
                <View className="flex flex-row">
                  <Text
                    className="text-[#7e84a3] font-[Poppins-Light] text-[13px]"
                    style={{letterSpacing: 0.08}}>
                    Phone
                  </Text>
                  <Text
                    className="text-[#7e84a3] pl-6 pr-3 font-[Poppins-Light] text-[13px]"
                    style={{letterSpacing: 0.08}}>
                    :
                  </Text>
                  <Text
                    className="text-[#00274d] font-[Poppins-Regular] text-[13px]"
                    style={{letterSpacing: 0.08}}>
                    1-444-239-8092
                  </Text>
                </View>
                <View className="flex flex-row">
                  <Text
                    className="text-[#7e84a3] font-[Poppins-Light] text-[13px]"
                    style={{letterSpacing: 0.08}}>
                    Location
                  </Text>
                  <Text
                    className="text-[#7e84a3] pl-2.5 pr-3 font-[Poppins-Light] text-[13px]"
                    style={{letterSpacing: 0.08}}>
                    :
                  </Text>
                  <Text
                    className="text-[#00274d] w-2/3 font-[Poppins-Regular] text-[13px]"
                    style={{letterSpacing: 0.08}}>
                    Apt. 961 Leffler Green Veronica Unions Licensed Plastic Fish
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Text className="text-[#00274d] mt-3 font-[Poppins-Bold] text-[13px]">
            Other Outlets
          </Text>

          {[1, 2, 3].map((item, index) =>
            index === select ? (
              <TouchableOpacity key={index}>
                <View className="p-2.5 mt-2 bg-[#f96900] rounded-lg">
                  <View className="flex flex-row">
                    <View className="w-[10%] text-blue-500">
                      <SvgUri
                        width={24}
                        height={24}
                        source={marker}
                        fill="white"
                      />
                    </View>
                    <View className="w-[90%]">
                      <View className="flex flex-row">
                        <Text
                          className="text-white font-[Poppins-Light] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          Name
                        </Text>
                        <Text
                          className="text-white pl-6 pr-3 font-[Poppins-Light] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          :
                        </Text>
                        <Text
                          className="text-white font-[Poppins-Regular] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          Jane Deo
                        </Text>
                      </View>
                      <View className="flex flex-row">
                        <Text
                          className="text-white font-[Poppins-Light] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          Phone
                        </Text>
                        <Text
                          className="text-white pl-6 pr-3 font-[Poppins-Light] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          :
                        </Text>
                        <Text
                          className="text-white font-[Poppins-Regular] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          1-444-239-8092
                        </Text>
                      </View>
                      <View className="flex flex-row">
                        <Text
                          className="text-white font-[Poppins-Light] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          Location
                        </Text>
                        <Text
                          className="text-white pl-2.5 pr-3 font-[Poppins-Light] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          :
                        </Text>
                        <Text
                          className="text-white w-2/3 font-[Poppins-Regular] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          Apt. 961 Leffler Green Veronica Unions Licensed
                          Plastic Fish
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <Divider className="bg-[#e6e9f4] my-2"></Divider>
                    <View className="flex flex-row items-center">
                      <Text className="text-white px-2 text-[10px] font-[Poppins-Medium]">
                        Select Outlet
                      </Text>
                      <MaterialCommunityIcons
                        name="greater-than"
                        size={14}
                        color="white"
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                key={index}
                onPress={() => changeAddress(index)}>
                <View className="p-2.5 mt-2 bg-white rounded-lg">
                  <View className="flex flex-row">
                    <View className="w-[10%]">
                      <SvgUri width={24} height={24} source={marker} />
                    </View>
                    <View className="w-[90%]">
                      <View className="flex flex-row">
                        <Text
                          className="text-[#7e84a3] font-[Poppins-Light] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          Name
                        </Text>
                        <Text
                          className="text-[#7e84a3] pl-6 pr-3 font-[Poppins-Light] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          :
                        </Text>
                        <Text
                          className="text-[#00274d] font-[Poppins-Regular] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          Jane Deo
                        </Text>
                      </View>
                      <View className="flex flex-row">
                        <Text
                          className="text-[#7e84a3] font-[Poppins-Light] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          Phone
                        </Text>
                        <Text
                          className="text-[#7e84a3] pl-6 pr-3 font-[Poppins-Light] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          :
                        </Text>
                        <Text
                          className="text-[#00274d] font-[Poppins-Regular] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          1-444-239-8092
                        </Text>
                      </View>
                      <View className="flex flex-row">
                        <Text
                          className="text-[#7e84a3] font-[Poppins-Light] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          Location
                        </Text>
                        <Text
                          className="text-[#7e84a3] pl-2.5 pr-3 font-[Poppins-Light] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          :
                        </Text>
                        <Text
                          className="text-[#00274d] w-2/3 font-[Poppins-Regular] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          Apt. 961 Leffler Green Veronica Unions Licensed
                          Plastic Fish
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ),
          )}

          <TouchableOpacity
            className="z-50 mt-10 rounded-xl "
            // onPress={() => nav.navigation.navigate('outlet')}
            style={styles.button}>
            <Text
              className="text-white text-[20px]"
              style={{fontFamily: 'Poppins-Regular'}}>
              ADD NEW OUTLET
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topNavigation: {
    height: 15,
    width: 23.3,
    tintColor: 'white',
  },
  button: {
    backgroundColor: '#F96900',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    color: 'red',
  },
  button1: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    color: 'red',
  },
});
