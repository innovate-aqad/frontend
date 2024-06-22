import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import marker from '../../../Assets/image/myaccount/marker_1.svg';
import Entypo from 'react-native-vector-icons/Entypo';

import SvgUri from 'react-native-svg-uri';
import {Divider} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {retrieveToken} from '../../../Shared/EncryptionDecryption/Token';
import axios from 'axios';
import {environmentVariables} from '../../../../config/Config';

export default function Outlet(nav) {
  const [select, setSelect] = useState(0);
  const [resOutletData, setOutletData] = useState([]);
  const [show, setShow] = useState();

  const showMenu = index => {
    if (show === index) {
      setShow();
    } else {
      setShow(index);
    }
  };

  const changeAddress = index => {
    setSelect(index);
  };

  const DeleteOutlet = async item => {
    const storedToken = await retrieveToken();

    try {
      const response = await axios.delete(
        `${environmentVariables?.apiUrl}/api/user/delete_warehouse_or_retailer_address`,
        {
          headers: {
            _token: storedToken,
          },
        },
      );
    
    } catch (error) {
      console.log('ksssssssss', error);
    }
  };

  const getOutletData = async () => {
    const storedToken = await retrieveToken();

    try {
      // setLoader(true);
      const getData = await axios.get(
        `${environmentVariables?.apiUrl}/api/user/get_warehouse_or_retailer_address`,
        {
          headers: {
            _token: storedToken,
          },
        },
      );
      if (getData?.data?.success) {
        const outletDataRes = getData?.data?.data;

        setOutletData(outletDataRes);
      } else {
        setOutletData([]);
      }
    } catch (error) {
      setOutletData([]);
    }
  };

  useEffect(() => {
    getOutletData();
  }, []);

  console.log('reeeeeeeeee', resOutletData);

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
              {resOutletData
                ?.filter(item => item?.is_default)
                ?.map((item, index) => {
                  return (
                    <View className="w-[90%]" key={index}>
                      <View className="flex flex-row">
                        <Text
                          className="text-[#7e84a3] font-[Poppins-Bold] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          Outlet 1
                        </Text>
                      </View>
                      <View className="flex flex-row">
                        <Text
                          className="text-[#7e84a3] font-[Poppins-Light] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          Po Box
                        </Text>
                        <Text
                          className="text-[#7e84a3] pl-6 pr-3 font-[Poppins-Light] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          :
                        </Text>
                        <Text
                          className="text-[#00274d] font-[Poppins-Regular] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          {item?.po_box}
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
                          {item?.address}
                        </Text>
                      </View>
                    </View>
                  );
                })}
            </View>
          </View>
          <Text className="text-[#00274d] mt-3 font-[Poppins-Bold] text-[13px]">
            Other Outlets
          </Text>

          {/* {resOutletData?.map((item, index) =>
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
                          className="text-white font-[Poppins-Bold] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          Outlet {index}
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
          )} */}
          {resOutletData
            ?.filter(item => !item?.is_default)
            ?.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  // className={
                  //   !(show == index)
                  //     ? 'flex flex-row mx-0 items-center justify-center'
                  //     : 'flex flex-row items-center justify-center'
                  // }
                >
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
                            className="text-white font-[Poppins-Bold] text-[13px]"
                            style={{letterSpacing: 0.08}}>
                            Outlet {index}
                          </Text>
                        </View>
                        <View className="flex flex-row">
                          <Text
                            className="text-white font-[Poppins-Light] text-[13px]"
                            style={{letterSpacing: 0.08}}>
                            Po Box
                          </Text>
                          <Text
                            className="text-white pl-6 pr-3 font-[Poppins-Light] text-[13px]"
                            style={{letterSpacing: 0.08}}>
                            :
                          </Text>
                          <Text
                            className="text-white font-[Poppins-Regular] text-[13px]"
                            style={{letterSpacing: 0.08}}>
                            {item?.po_box}
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
                            {item?.address}
                          </Text>
                          <TouchableOpacity
                            onPress={() => showMenu(index)}
                            className="mt-3">
                            <Entypo
                              name="dots-three-vertical"
                              size={20}
                              color="#cbcbcb"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View
                      className={
                        !(show == index) ? 'hidden' : 'flex flex-row mr-[80px] '
                      }>
                      <View className="flex flex-row items-center gap-2 ml-2">
                        <TouchableOpacity
                          className="p-3 bg-red-100 rounded-xl"
                          onPress={() => DeleteOutlet(item)}>
                          <Image
                            style={{
                              tintColor: '#df6886',
                              height: 17,
                              width: 17,
                            }}
                            source={require('../../../Assets/image/trash.png')}
                          />
                        </TouchableOpacity>
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
              );
            })}

          <TouchableOpacity
            className="z-50 mt-10 rounded-xl "
            onPress={() => console.warn('No any action bottons')}
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
