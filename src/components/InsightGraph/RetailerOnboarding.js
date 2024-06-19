import React, {useEffect, useState} from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {POPPINS, ROBOTO} from '../../constants/CustomFontFamily';
import {blue, btnBackround, grayColor, lightGray, white} from '../../constants/Theme';
const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#fff',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(255, 116, 32, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  labelColor: (opacity = 1) => grayColor,
  useShadowColorFromDataset: false, // optional
  decimalPlaces: 0, // Remove decimal values on y-axis
  propsForBackgroundLines: {
    stroke: "#f1f1f5", // Background lines color
    strokeDasharray: '', // Remove dashed background lines
  },
};

const RetailerOnboarding = () => {
  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [15, 30, 45, 60, 75, 90], // Initial data for retailers
        color: (opacity = 1) => `rgba(255, 116, 32, ${opacity})`, // Orange color for retailers
      },
      {
        data: [15, 25, 35, 45, 55, 75], // Initial data for estimated target
        color: (opacity = 1) => `rgba(255, 0, 255, ${opacity})`, // Pink color for estimated target
      },
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
                retailersData: [32, 22, 42, 42, 52, 62],
                estimatedTargetData: [28, 28, 38, 48, 58, 68],
              }),
            1000,
          ),
        );

        setChartData({
          labels: response.labels,
          datasets: [
            {
              data: response.retailersData,
              color: (opacity = 1) => `rgba(255, 116, 32, ${opacity})`, // Orange color for retailers
            },
            {
              data: response.estimatedTargetData,
              color: (opacity = 1) => `rgba(255, 0, 255, ${opacity})`, // Pink color for estimated target
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
    <View style={styles.outerContainer} className="pb-4">
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Retailers Onboarding</Text>
        <View className="flex flex-row">
          <Text style={[styles.totalRetailersText]}>Total Retailers:</Text>
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
      <BarChart
        data={chartData}
        width={screenWidth - 64}
        height={160}
        chartConfig={chartConfig}
        style={styles.chartStyle}
        yAxisSuffix=" "
        fromZero
      />
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View
            style={[
              styles.legendColor,
              {backgroundColor: btnBackround},
            ]}
          />
          <Text style={styles.legendText}>Retailer</Text>
        </View>
        <View style={styles.legendItem}>
          <View
            style={[
              styles.legendColor,
              {backgroundColor: "#fee8d9"},
            ]}
          />
          <Text style={styles.legendText}>Estimated Target</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    marginVertical: 16,
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
    // borderRadius: 16,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 16,
    marginLeft: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  legendColor: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 4,
  },
  legendText: {
    fontSize: 10,
    fontFamily:POPPINS.PoppinsMedium,
    letterSpacing:0.07,
    color: grayColor,
  },
});

export default RetailerOnboarding;
