import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  blue,
  customLightState,
  grayColor,
  lightGray,
  screenBackground,
  white,
} from '../../../../constants/Theme';
import {POPPINS, ROBOTO} from '../../../../constants/CustomFontFamily';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomAddButton from '../../../../Shared/CustomAddButton';
import AddVariationModal from './AddVariationModal';
import SelectWarehouseModal from './SelectWarehouseModal';
import VariantImageModal from './VariantImageModal';
import Checkbox from '../../../../Shared/Checkbox';
import TableVariation from './TableVariation';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function ProductVariantAdd() {
  return (
    <ScrollView>
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: screenBackground,
        paddingVertical: 12,
        // paddingHorizontal: 25,
        // marginBottom:50
      }}>
      <View style={{paddingHorizontal: 25}}>
        <Text
          style={{color: blue, fontFamily: ROBOTO.RobotoBold, fontSize: 13}}>
          Variations
        </Text>
        <View className="mt-3">
          <View
            className="flex flex-row items-center justify-between"
            style={styles.main}>
            <View className="ml-2">
              <Text style={styles.title}>Colour</Text>
              <View className="flex flex-row mt-1">
                {[{name: 'blue'}, {name: 'red'}, {name: 'yellow'}].map(
                  (item, index) => (
                    <View
                      className="flex flex-row p-1"
                      style={{borderRadius: 20}}>
                      <View
                        className="flex flex-row items-center "
                        style={{
                          backgroundColor: '#F2F3F6',
                          width: 60,
                          height: 20,
                          borderRadius: 4,
                        }}>
                        <View
                          style={{
                            height: 16,
                            width: 16,
                            backgroundColor: item.name,
                            borderRadius: 4,
                          }}></View>
                        <Text style={styles.subTitle}>Yellow</Text>
                      </View>
                    </View>
                  ),
                )}
              </View>
            </View>
            <Entypo name="dots-three-vertical" size={18} color={lightGray} />
          </View>
          <View
            className="flex flex-row items-center justify-between mt-2"
            style={styles.main}>
            <View className="ml-2">
              <Text style={styles.title}>Size</Text>
              <View className="flex flex-row mt-1">
                {[{name: 'M'}, {name: 'L'}, {name: 'XL'}].map((item, index) => (
                  <View
                    className="flex flex-row p-1"
                    style={{borderRadius: 20}}>
                    <View
                      className="flex flex-row items-center justify-center"
                      style={{
                        backgroundColor: '#F2F3F6',
                        width: 60,
                        height: 20,
                        borderRadius: 4,
                      }}>
                      <Text style={[styles.subTitle, {textAlign: 'center'}]}>
                        {item.name}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
            <Entypo name="dots-three-vertical" size={18} color={lightGray} />
          </View>
          <View
            className="flex flex-row items-center justify-between mt-2"
            style={styles.main}>
            <View className="ml-2">
              <Text style={styles.title}>Material</Text>
              <View className="flex flex-row mt-1">
                {[{name: '1L'}, {name: '10L'}, {name: '50L'}].map(
                  (item, index) => (
                    <View
                      className="flex flex-row p-1"
                      style={{borderRadius: 20}}>
                      <View
                        className="flex flex-row items-center justify-center"
                        style={{
                          backgroundColor: '#F2F3F6',
                          width: 60,
                          height: 20,
                          borderRadius: 4,
                        }}>
                        <Text style={[styles.subTitle, {textAlign: 'center'}]}>
                          {item.name}
                        </Text>
                      </View>
                    </View>
                  ),
                )}
              </View>
            </View>
            <Entypo name="dots-three-vertical" size={18} color={lightGray} />
          </View>
          <AddVariationModal />
          {/* <SelectWarehouseModal/>
        <VariantImageModal/> */}
        </View>
      </View>
      <ScrollView showsHorizontalScrollIndicator={true} horizontal>
        <TableVariation/>
      </ScrollView>

      {/* <View className="relative bg-green-500 bottom-24">
        <Text style={{color:blue,fontFamily:ROBOTO.RobotoBold,fontSize:13}}>Select Warehouse</Text>
      </View> */}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: blue,
    fontFamily: POPPINS.PoppinsMedium,
    fontSize: 13,
    letterSpacing: 0.08,
  },
  subTitle: {
    color: grayColor,
    fontFamily: POPPINS.PoppinsRegular,
    fontSize: 8,
    letterSpacing: 0.08,
    marginLeft: 3,
  },
  main: {backgroundColor: white, borderRadius: 15, padding: 10},
  th: {color: white, borderRadius: 15, padding: 2},
});
