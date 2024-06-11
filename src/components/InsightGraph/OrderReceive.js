import React from 'react';
import {Image, StyleSheet, Dimensions, Text, View} from 'react-native';
import {POPPINS, ROBOTO} from '../../constants/CustomFontFamily';
import {
  blue,
  customGreen,
  customRed,
  grayColor,
} from '../../constants/Theme';
import Svg, {Polyline, LinearGradient, Stop} from 'react-native-svg';

export default function OrderReceive() {
  const data = [0, 45, 28, 50,20, 70, 0];
  const screenWidth = Dimensions.get('window').width;
  const graphHeight = 80;
  const graphWidth = 150;

  // Calculate points for the graph
  const points = data.map((point, index) => {
    const x = (index / (data.length - 1)) * graphWidth;
    const y = graphHeight - (point / 100) * graphHeight;
    return `${x},${y}`;
  }).join(' ');
  return (
    <View className="mx-4 my-3 mb-8 ">
      <View className="p-4 bg-white rounded-[15px]">
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Order Received </Text>
          <View className="flex flex-row">
            <Text style={[styles.totalRetailersText]}>Total Order :</Text>
            <Text
              style={{
                color: grayColor,
                fontFamily: POPPINS.PoppinsSemiBold,
                fontSize: 15,
              }}>
              84578
            </Text>
          </View>
        </View>
        <View className="flex flex-row justify-between mt-10">
          <View className="flex flex-col">
            <Text
              style={{
                color: customGreen,
                fontFamily: POPPINS.PoppinsMedium,
                fontSize: 10,
              }}>
              June 2025
            </Text>
            <Text
              style={{
                color: '#131523',
                fontFamily: POPPINS.PoppinsSemiBold,
                fontSize: 28,
                letterSpacing: 0.12,
              }}>
              356k
            </Text>
            <View className="flex flex-row items-center">
              <Text
                style={{
                  color: customRed,
                  fontFamily: POPPINS.PoppinsMedium,
                  fontSize: 16,
                }}>
                1.3%
                <Image
                  source={require('../../Assets/image/universal/ic_arrow_narrow_up.png')}
                  style={{height: 16, width: 16}}
                />
              </Text>
              <Text
                style={{
                  color: grayColor,
                  fontFamily: POPPINS.PoppinsMedium,
                  fontSize: 12,
                }}>
                than last year{' '}
              </Text>
            </View>
          </View>
          <View className="h-20 mt-1 ml-2 w-44">
            <View style={styles.container}>
              <Svg height={graphHeight} width={graphWidth}>
                <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <Stop offset="0%" stopColor="#1fd286" stopOpacity="0.8" />
                  <Stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
                </LinearGradient>
                <Polyline
                  points={points}
                  fill="url(#grad)"
                  stroke="#1fd286"
                  strokeWidth="2"
                />
              </Svg>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 10,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1, // Ensure the header is on top of the chart
  },
  headerText: {
    fontSize: 13,
    fontFamily: ROBOTO.RobotoBold,
    color: blue,
  },
  totalRetailersText: {
    color: grayColor,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 10,
    fontFamily: POPPINS.PoppinsMedium,
  },
});
