import React, {useEffect, useState} from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import { blue, grayColor, lightGray, white } from '../../constants/Theme';
import { POPPINS, ROBOTO } from '../../constants/CustomFontFamily';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#fff',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(3, 138, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  labelColor: (opacity = 1) => grayColor,
  decimalPlaces: 0, // Remove decimal values on y-axis
  propsForBackgroundLines: {
    stroke: "#f1f1f5", // Background lines color
    strokeDasharray: '', // Remove dashed background lines
    
  },
};

const ProductUpload = () => {
  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [15, 30, 45, 60, 75, 90], // Initial data for retailers
        color: (opacity = 1) => `rgba(45, 85, 255, ${opacity})`, // Orange color for retailers
      },
      // {
      //   data: [15, 25, 35, 45, 55, 75], // Initial data for estimated target
      //   color: (opacity = 1) => `rgba(255, 0, 255, ${opacity})`, // Pink color for estimated target
      // },
    ],
  });

  useEffect(() => {
    // Simulate fetching the chart data from the backend
    const fetchChartData = async () => {
      try {
        // Simulated API response
        const response = await new Promise(resolve =>
          setTimeout(
            () =>
              resolve({
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                retailersData: [42, 22, 42, 42, 52, 62],
              }),
            1000,
          ),
        );

        setChartData({
          labels: response.labels,
          datasets: [
            {
              data: response.retailersData,
              color: (opacity = 1) => `rgba(45, 85, 255, ${opacity})`, // Orange color for retailers
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchChartData();
  }, []);

  return (
    <View style={styles.outerContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Product Uploaded </Text>
        <View className="flex flex-row">
          <Text style={[styles.totalRetailersText]}>Total Products:</Text>
          <Text
            style={{
              color: grayColor,
              fontFamily: POPPINS.PoppinsSemiBold,
              fontSize: 15,
            }}>
            {chartData.datasets[0].data.reduce((a, b) => a + b, 0)}
          </Text>
        </View>
      </View>
      <LineChart
        data={chartData}
        width={screenWidth - 44} // Adjusting width to fit within the container padding
        height={220}
        chartConfig={chartConfig}
        style={styles.chartStyle}
        yAxisSuffix=" "
        bezier
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    marginVertical: 2,
    paddingHorizontal: 0,
    backgroundColor: white,
    borderRadius: 15,
    shadowColor: lightGray,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: '90%', // Adjusting width to reduce the size
    alignSelf: 'center',
  },
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
  chartStyle: {
    marginTop: 40, // Space between the headers and the chart
    borderRadius: 16,
  },
});

export default ProductUpload;
