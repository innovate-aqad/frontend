import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-paper';

export default function MyAccount() {
  return (
    <View className="flex flex-col gap-y-2 h-full p-5 py-8 bg-[#f5f5f5]">
      <View className="flex-row items-center">
        <Image
          style={styles.topNavigation}
          source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
        />
        <Text
          className="flex-1 text-[20px] text-center text-[#00274d]"
          style={{fontFamily: 'Roboto-Bold'}}>
          MY ACCOUNT
        </Text>
      </View>
      <View className="pt-5 pb-3">
      <TouchableOpacity className="">
        <Card.Title
          className="px-3 h-[110px] bg-white shadow rounded-xl"
          title="Jone Deo"
          titleStyle={{
            color: '#00274d',
            paddingLeft: 30,
            fontSize: 20,
            paddingTop: 4.5,
          }}
          subtitle="ramsakalpatel@gmail.com"
          subtitleStyle={{
            color: '#f96900',
            fontSize: 13,
            paddingLeft: 30,
          }}
          left={props => (
            <View className="flex flex-row items-center rounded-full pr-7 ">
              <Image
                style={{height: 80, width: 80, borderRadius: 40}}
                source={require('../../Assets/image/ram.png')}
              />
            </View>
          )}
          right={props => (
            <Image
              style={{height: 15, width: 15, tintColor: '#7e84a3'}}
              source={require('../../Assets/image/greater-than.png')}
            />
          )}
        />
      </TouchableOpacity>
      </View>

      <TouchableOpacity className="">
        
        <View className="flex flex-row items-center justify-between p-2 pl-6 pr-4 bg-white rounded-lg">
          <View className="flex flex-row items-center rounded-full gap-x-2 pr-7 ">
            <Image
              style={{
                height: 23,
                width: 17.3,
                borderRadius: 40,
                tintColor: '#7e84a3',
              }}
              source={require('../../Assets/image/drawable-hdpi/user.png')}
            />
            <Text className="text-[#00274d] text-[13px]" style={{fontFamily:"Poppins-Regular"}}>Personal Details</Text>
          </View>

          <Image
            style={{height: 15, width: 15, tintColor: '#7e84a3'}}
            source={require('../../Assets/image/greater-than.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="">
        
        <View className="flex flex-row items-center justify-between p-2 pl-6 pr-4 bg-white rounded-lg">
          <View className="flex flex-row items-center rounded-full gap-x-4 pr-7 ">
            <Image
              style={{
                height: 23,
                width: 17.3,
                borderRadius: 40,
                tintColor: '#7e84a3',
              }}
              source={require('../../Assets/image/drawable-hdpi/user.png')}
            />
            <Text className="text-[#00274d] text-[13px]" style={{fontFamily:"Roboto-Regular"}}>Company Details</Text>
          </View>

          <Image
            style={{height: 15, width: 15, tintColor: '#7e84a3'}}
            source={require('../../Assets/image/greater-than.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="">
        
        <View className="flex flex-row items-center justify-between p-2 pl-6 pr-4 bg-white rounded-lg">
          <View className="flex flex-row items-center rounded-full gap-x-4 pr-7 ">
            <Image
              style={{
                height: 23,
                width: 17.3,
                borderRadius: 40,
                tintColor: '#7e84a3',
              }}
              source={require('../../Assets/image/drawable-hdpi/user.png')}
            />
            <Text className="text-[#00274d] text-[13px]" style={{fontFamily:"Roboto-Regular"}}>Payment</Text>
          </View>

          <Image
            style={{height: 15, width: 15, tintColor: '#7e84a3'}}
            source={require('../../Assets/image/greater-than.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="">
        
        <View className="flex flex-row items-center justify-between p-2 pl-6 pr-4 bg-white rounded-lg">
          <View className="flex flex-row items-center rounded-full gap-x-4 pr-7 ">
            <Image
              style={{
                height: 23,
                width: 17.3,
                borderRadius: 40,
                tintColor: '#7e84a3',
              }}
              source={require('../../Assets/image/drawable-hdpi/user.png')}
            />
            <Text className="text-[#00274d] text-[13px]" style={{fontFamily:"Roboto-Regular"}}>Language</Text>
          </View>

          <View className="flex flex-row items-center gap-x-5">
            <Text className="text-[#f96900] text-[13px]">English</Text>
          <Image
            style={{height: 15, width: 15, tintColor: '#7e84a3'}}
            source={require('../../Assets/image/greater-than.png')}
          />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="">
        
        <View className="flex flex-row justify-between p-2 pl-6 pr-4 bg-white rounded-lg">
          <View className="flex flex-row items-center rounded-full gap-x-4 pr-7 ">
            <Image
              style={{
                height: 23,
                width: 17.3,
                borderRadius: 40,
                tintColor: '#7e84a3',
              }}
              source={require('../../Assets/image/drawable-hdpi/user.png')}
            />
            <Text className="text-[#00274d] text-[13px]" style={{fontFamily:"Roboto-Regular"}}>Settings</Text>
          </View>

          <Image
            style={{height: 15, width: 15, tintColor: '#7e84a3'}}
            source={require('../../Assets/image/greater-than.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="">
        
        <View className="flex flex-row justify-between p-2 pl-6 pr-4 bg-white rounded-lg">
          <View className="flex flex-row items-center rounded-full gap-x-4 pr-7 ">
            <Image
              style={{
                height: 23,
                width: 17.3,
                borderRadius: 40,
                tintColor: '#7e84a3',
              }}
              source={require('../../Assets/image/drawable-hdpi/user.png')}
            />
            <Text className="text-[#00274d] text-[13px]" style={{fontFamily:"Roboto-Regular"}}>Support</Text>
          </View>

          <Image
            style={{height: 15, width: 15, tintColor: '#7e84a3'}}
            source={require('../../Assets/image/greater-than.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="">
        
        <View className="flex flex-row items-center justify-between p-2 pl-6 pr-4 bg-white rounded-lg">
          <View className="flex flex-row items-center rounded-full gap-x-4 pr-7 ">
            <Image
              style={{
                height: 23,
                width: 17.3,
                borderRadius: 40,
                tintColor: '#7e84a3',
              }}
              source={require('../../Assets/image/drawable-hdpi/user.png')}
            />
            <Text className="text-[#00274d] text-[13px]" style={{fontFamily:"Roboto-Regular"}}>Reviews & Feedback</Text>
          </View>

          <Image
            style={{height: 15, width: 15, tintColor: '#7e84a3'}}
            source={require('../../Assets/image/greater-than.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="">
        
        <View className="flex flex-row items-center justify-between p-2 pl-6 pr-4 bg-white rounded-lg">
          <View className="flex flex-row items-center rounded-full gap-x-4 pr-7 ">
            <Image
              style={{
                height: 23,
                width: 17.3,
                borderRadius: 40,
                tintColor: '#7e84a3',
              }}
              source={require('../../Assets/image/drawable-hdpi/user.png')}
            />
            <Text className="text-[#00274d] text-[13px]" style={{fontFamily:"Roboto-Regular"}}>Term & Conditions</Text>
          </View>

          <Image
            style={{height: 15, width: 15, tintColor: '#7e84a3'}}
            source={require('../../Assets/image/greater-than.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  topNavigation: {
    height: 15,
    width: 23.3,
  },
});
