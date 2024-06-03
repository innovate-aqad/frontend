import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {POPPINS, ROBOTO} from '../../../constants/CustomFontFamily';
import {blue, white} from '../../../constants/Theme';
import Search from '../../../Shared/Search';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButton from '../../../Shared/CustomButton';

export default function UserList(nav) {
  const [tab, setTab] = useState('All Users');
  const [show, setShow] = useState();
  const navigation = useNavigation();
  const tabNavigatePage = value => {
    console.log(value, 'ramsasalsklaalskfalk');
    if (value === 'Manage') {
      setTab('Manage');
    } else if (value === 'View') {
      setTab('View');
    } else {
      setTab('All Users');
    }
  };
  const showMenu = index => {
    if (show === index) {
      setShow();
    } else {
      setShow(index);
    }
  };
  const editFun=()=>{
    nav.navigation.navigate('editUser')
  }
  return (
    <View>
      <View className="flex-row rounded-b-xl bg-[#f96900] px-4 pb-2 pt-7 items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{height: 15, width: 23.3, tintColor: 'white'}}
            source={require('../../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <Text
          className="flex-1 text-center"
          style={{
            fontFamily: POPPINS.PoppinsBold,
            color: white,
            fontSize: 20,
          }}>
          USER LIST
        </Text>
      </View>
      <View className="p-4">
        <Search />
        <View className="flex flex-row mt-3 gap-x-2">
          {[{name: 'All Users'}, {name: 'Manage'}, {name: 'View'}].map(
            (item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => tabNavigatePage(item.name)}
                className={
                  tab == item.name
                    ? 'bg-[#f96900] p-1.5 px-3 rounded-lg w-[82px]'
                    : 'bg-[#ffffff] p-1.5 px-3 rounded-lg w-[82px]'
                }>
                <Text
                  className={
                    tab == item.name
                      ? 'text-white text-[12px] text-center'
                      : 'text-[#00274d] text-[12px] text-center'
                  }
                  style={{fontFamily: ROBOTO.RobotoRegular}}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ),
          )}
        </View>
        <View className="flex flex-row justify-between pt-4">
          <Text
            className="text-[#00274d] text-[13px]"
            style={{fontFamily: ROBOTO.RobotoBold}}>
            Orders History
          </Text>
          <Image
            style={{height: 18, width: 18}}
            source={require('../../../Assets/image/drawable-hdpi/apps_sort.png')}
          />
        </View>
      </View>

      <ScrollView keyboardShouldPersistTaps="handled">
        <View className="mb-16">
          {[1, 2, 3, 4, 5]?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                className={
                  !(show == index)
                    ? 'flex flex-row mx-3 items-center justify-center'
                    : 'flex flex-row items-center justify-center'
                }>
                <View
                  className={
                    !(show == index)
                      ? 'flex w-full gap-y-2 flex-col p-1.5 pb-2 mt-1.5 bg-white shadow rounded-xl'
                      : 'flex w-[90%] gap-y-2 flex-col p-1.5 pb-2 mt-1.5 bg-white relative left-[-12px] shadow rounded-xl'
                  }>
                  <View className="flex flex-row justify-between ">
                    <View className="flex flex-row gap-x-2">
                      <View className="bg-[#FDEEE3] rounded-full">
                        <Image
                          style={{height: 50, width: 50, borderRadius: 50}}
                          source={{
                            uri: 'https://www.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg',
                          }}
                        />
                      </View>
                      <View>
                        <View className="flex flex-row">
                          <Text
                            style={{
                              fontFamily: POPPINS.PoppinsMedium,
                              letterSpacing: 0.08,
                              color: blue,
                              fontSize: 13,
                            }}>
                            Farrell Gretchen {index}
                          </Text>
                          <Text
                            className="p-1 px-3 text-[#0058ff] text-center bg-blue-50 rounded-[5px] ml-3"
                            style={{
                              fontSize: 8,
                              fontFamily: POPPINS.PoppinsSemiBold,
                              width: 70,
                            }}>
                            Editor
                          </Text>
                        </View>
                        <View>
                          <View className="flex flex-row gap-x-2">
                            <Text
                              className="text-[#7c7c7c]  rounded-full text-[8px]"
                              style={{fontFamily: 'Poppins-Regular'}}>
                              Role :
                            </Text>
                            <View className="flex flex-row items-center gap-1">
                              <Text
                                className="text-[#7e84a3]  rounded-full text-[8px]"
                                style={{fontFamily: 'Poppins-Regular'}}>
                                Edit Product
                              </Text>
                              <View className="bg-[#7e84a3] rounded-full h-[4px] w-[4px] "></View>
                              <Text
                                className="text-[#7e84a3]  rounded-full text-[8px]"
                                style={{fontFamily: 'Poppins-Regular'}}>
                                Accept Order
                              </Text>
                              <View className="bg-[#7e84a3] rounded-full h-[4px] w-[4px] "></View>
                              <Text
                                className="text-[#7e84a3]  rounded-full text-[8px]"
                                style={{fontFamily: 'Poppins-Regular'}}>
                                View Only
                              </Text>
                            </View>
                          </View>
                          <View>
                            <Text
                              className="text-[#7e84a3] pl-8 rounded-full text-[8px]"
                              style={{fontFamily: 'Poppins-Regular'}}>
                              Insight Access
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>

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
                <View
                  className={
                    !(show == index) ? 'hidden' : 'flex flex-row mr-[80px] '
                  }>
                  <View className="flex flex-row items-center gap-x-2">
                    <TouchableOpacity onPress={()=>editFun()} className="p-3 bg-blue-100 rounded-xl">
                      <Image
                        style={{tintColor: '#6d93f2', height: 17, width: 17}}
                        source={require('../../../Assets/image/pencil.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <View className="flex flex-row items-center gap-2 ml-2">
                    <TouchableOpacity className="p-3 bg-red-100 rounded-xl">
                      <Image
                        style={{tintColor: '#df6886', height: 17, width: 17}}
                        source={require('../../../Assets/image/trash.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <View className="px-4">
        <CustomButton text={"ADD USER"} />
      </View>
    </View>
  );
}
