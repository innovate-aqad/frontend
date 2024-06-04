import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header';
import Pie_charts from '../../screens/Pie_Chart/Pie_charts';
import Line_Chart from '../../screens/Pie_Chart/Line_Chart';
import Line_Chartwob from '../../screens/Pie_Chart/Line_Chartwob';

export default function Pie_App() {
  return (
    <View className="flex flex-col pb-20">
      <Header></Header>
      <ScrollView>
        <View>
          <Pie_charts />
        </View>
        <View>
          <Line_Chart />
        </View>
        <View>
          <Line_Chartwob />
        </View>
      </ScrollView>
    </View>
  );
}
