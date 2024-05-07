import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

export default function LiveOrder() {
  return (
    <View className="flex flex-row h-fit items-center w-[100%] !justify-between mt-2 px-0 text-black bg-white rounded-xl shadow">
      <View className="py-1">
      <LineChart
        data={{
          labels: ['Jul', 'Aug', 'Set', 'Oct',"Nov"],
          datasets: [
            {
              data: [
                10,
                30,
                50,
                70,
                50,
              ],
              color:()=>"#21d59b",
              
              
            },
            {
              data: [
                30,
                20,
                40,
                30,
                20,
              ],
              color:()=>"#0058ff",
              
            },
            {
              data: [
                70,
                50,
                60,
                70,
                80,
              ],
              color:()=>"#ffc700",
              
            },
            {
              data: [
                77,
                82,
                70,
                80,
                90,
              ],
              color:()=>"#ccd7e3",
              
            },
          ],
          
        }}
        
        width={250} // from react-native
        height={144}
        
      
        yAxisLabel=""
        withShadow={false}
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: 'whihte',
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(100, 100, 100, ${opacity})`,
          // labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
            borderRightWidth:3
          },
          propsForDots: {
            r: '0',
            strokeWidth: '0',
            stroke: 'white',
          },
        }}
        bezier
        style={{
          marginVertical: 0,
          borderRadius: 16,
          paddingBottom:4,
          
        }}
      />
      </View>
      <View className="flex flex-col items-center w-20 pr-3">
        <Text className="text-[11px] text-[#7e84a3]">Supermarket Product</Text>
        <Text className="text-[11px] text-[#7e84a3]">Supermarket Product</Text>
        <Text className="text-[11px] text-[#7e84a3]">Supermarket Product</Text>
        <Text className="text-[11px] text-[#7e84a3]">Supermarket Product</Text>
      </View>
    </View>
  );
}
