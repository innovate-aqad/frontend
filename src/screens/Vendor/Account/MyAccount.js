import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-paper';
import setting from '../../../Assets/image/myaccount/settings.svg';
import briefcase from '../../../Assets/image/myaccount/briefcase.svg';
import credit_card from '../../../Assets/image/myaccount/credit_card.svg';
import feedback_review from '../../../Assets/image/myaccount/feedback_review.svg';
import headset from '../../../Assets/image/myaccount/headset.svg';
import language from '../../../Assets/image/myaccount/language.svg';
import assept_document from '../../../Assets/image/myaccount/assept_document.svg';
import greater from '../../../Assets/image/myaccount/greater.svg';
import integrationSettings from '../../../Assets/image/vendor/integrationSettings.svg';

import angle from '../../../Assets/image/angle-small-right.png';
import SvgUri from 'react-native-svg-uri';

export default function MyAccount(nav) {
  return (
    <View className="flex flex-col gap-y-2 h-full p-5 py-8 bg-[#f5f5f5]">
      <View className="flex-row items-center">
        <Image
          style={styles.topNavigation}
          source={require('../../../Assets/image/drawable-xhdpi/arrow_left.png')}
        />
        <Text
          className="flex-1 text-[20px] text-center text-[#00274d]"
          style={{fontFamily: 'Roboto-Bold'}}>
          MY ACCOUNT
        </Text>
      </View>

      <View className="pt-5 pb-3">
        <TouchableOpacity
          className=""
          onPress={() => nav.navigation.navigate('personalInfo')}>
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
                  source={require('../../../Assets/image/ram.png')}
                />
              </View>
            )}
            right={props => (
              <Image
                style={{height: 25, width: 13, tintColor: '#7e84a3'}}
                source={require('../../../Assets/image/angle-small-right.png')}
              />
            )}
          />
        </TouchableOpacity>
      </View>
      {/* warehouse */}
      <TouchableOpacity onPress={() => nav.navigation.navigate('warehouse')}>
        <View className="flex flex-row items-center justify-between p-2 pl-6 pr-4 bg-white rounded-lg">
          <View className="flex flex-row items-center rounded-full gap-x-2 pr-7 ">
            <Image
              style={{
                height: 24,
                width: 18,
                borderRadius: 40,
                tintColor: '#7e84a3',
              }}
              source={require('../../../Assets/image/drawable-hdpi/user.png')}
            />
            <Text
              className="text-[#00274d] pl-4 text-[13px]"
              style={{fontFamily: 'Poppins-Regular'}}>
              Warehouse Details
            </Text>
          </View>

          <Image
            style={{height: 25, width: 13, tintColor: '#7e84a3'}}
            source={require('../../../Assets/image/angle-small-right.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>nav.navigation.navigate("companyDetails")}>
        <View className="flex flex-row items-center justify-between p-2 pl-6 pr-4 bg-white rounded-lg">
          <View className="flex flex-row items-center rounded-full gap-x-4 pr-7 ">
            <SvgUri width={24} height={24} source={briefcase} />
            <Text
              className="text-[#00274d] text-[13px]"
              style={{fontFamily: 'Roboto-Regular'}}>
              Company Details
            </Text>
          </View>

          <Image
            style={{height: 25, width: 13, tintColor: '#7e84a3'}}
            source={require('../../../Assets/image/angle-small-right.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="">
        <View className="flex flex-row items-center justify-between p-2 pl-6 pr-4 bg-white rounded-lg">
          <View className="flex flex-row items-center rounded-full gap-x-4 pr-7 ">
            <SvgUri width={24} height={24} source={credit_card} />
            <Text
              className="text-[#00274d] text-[13px]"
              style={{fontFamily: 'Roboto-Regular'}}>
              Payment Details
            </Text>
          </View>

          <Image
            style={{height: 25, width: 13, tintColor: '#7e84a3'}}
            source={require('../../../Assets/image/angle-small-right.png')}
          />
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity className="">
        <View className="flex flex-row items-center justify-between p-2 pl-6 pr-4 bg-white rounded-lg">
          <View className="flex flex-row items-center rounded-full gap-x-4 pr-7 ">
            <SvgUri width={24} height={24} source={language} />
            <Text
              className="text-[#00274d] text-[13px]"
              style={{fontFamily: 'Roboto-Regular'}}>
              Language
            </Text>
          </View>

          <View className="flex flex-row items-center gap-x-5">
            <Text className="text-[#f96900] text-[13px]">English</Text>
            <Image
              style={{height: 25, width: 13, tintColor: '#7e84a3'}}
              source={require('../../../Assets/image/angle-small-right.png')}
            />
          </View>
        </View>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={()=>nav.navigation.navigate("integrationSettings")}>
        <View className="flex flex-row items-center justify-between p-2 pl-6 pr-4 bg-white rounded-lg">
          <View className="flex flex-row items-center rounded-full gap-x-4 pr-7 ">
            <SvgUri width={24} height={24} source={integrationSettings} />
            <Text
              className="text-[#00274d] text-[13px]"
              style={{fontFamily: 'Roboto-Regular'}}>
              Integration Settings
            </Text>
          </View>

          <View className="flex flex-row items-center gap-x-5">
            <Image
              style={{height: 25, width: 13, tintColor: '#7e84a3'}}
              source={require('../../../Assets/image/angle-small-right.png')}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>nav.navigation.navigate("setting")}>
        <View className="flex flex-row justify-between p-2 pl-6 pr-4 mt-2 bg-white rounded-lg">
          <View className="flex flex-row items-center rounded-full gap-x-4 pr-7 ">
            <SvgUri width={24} height={21.6} source={setting} />
            <Text
              className="text-[#00274d] text-[13px]"
              style={{fontFamily: 'Roboto-Regular'}}>
              Settings
            </Text>
          </View>

          <Image
            style={{height: 25, width: 13, tintColor: '#7e84a3'}}
            source={require('../../../Assets/image/angle-small-right.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="">
        <View className="flex flex-row justify-between p-2 pl-6 pr-4 bg-white rounded-lg">
          <View className="flex flex-row items-center rounded-full gap-x-4 pr-7 ">
            <SvgUri width={24} height={24} source={headset} />
            <Text
              className="text-[#00274d] text-[13px]"
              style={{fontFamily: 'Roboto-Regular'}}>
              Support
            </Text>
          </View>

          <Image
            style={{height: 25, width: 13, tintColor: '#7e84a3'}}
            source={require('../../../Assets/image/angle-small-right.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="">
        <View className="flex flex-row items-center justify-between p-2 pl-6 pr-4 bg-white rounded-lg">
          <View className="flex flex-row items-center rounded-full gap-x-4 pr-7 ">
            <SvgUri
              style={StyleSheet.flatten([{height: 24, width: 24}])}
              source={feedback_review}
            />
            <Text
              className="text-[#00274d] text-[13px]"
              style={{fontFamily: 'Roboto-Regular'}}>
              Reviews & Feedback
            </Text>
          </View>

          <Image
            style={{height: 25, width: 13, tintColor: '#7e84a3'}}
            source={require('../../../Assets/image/angle-small-right.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="">
        <View className="flex flex-row items-center justify-between p-2 pl-6 pr-4 bg-white rounded-lg">
          <View className="flex flex-row items-center rounded-full gap-x-4 pr-7 ">
            <SvgUri width={24} height={24} source={assept_document} />
            <Text
              className="text-[#00274d] text-[13px]"
              style={{fontFamily: 'Roboto-Regular'}}>
              Term & Conditions
            </Text>
          </View>

          <Image
            style={{height: 25, width: 13, tintColor: '#7e84a3'}}
            source={require('../../../Assets/image/angle-small-right.png')}
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
