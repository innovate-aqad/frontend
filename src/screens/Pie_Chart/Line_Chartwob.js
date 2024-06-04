import React, {useEffect, useState} from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(183, 244, 216, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  decimalPlaces: 0, // Remove decimal values on y-axis
  propsForBackgroundLines: {
    stroke: '#e3e3e3', // Background lines color
  },
  withDots: false, // Remove dots
  bezier: true, // Ensure the curve is smooth
};

const MyLineChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [15, 30, 45, 60, 75, 90], // Initial data for retailers
        color: (opacity = 1) => `rgba(45, 85, 255, ${opacity})`, // Blue color for retailers
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
              color: (opacity = 1) => `rgba(45, 85, 255, ${opacity})`, // Blue color for retailers
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
        <Text style={styles.headerText}>Product Uploaded</Text>
        <Text style={[styles.headerText, styles.totalRetailersText]}>
          Total Products:{' '}
          {chartData.datasets[0].data.reduce((a, b) => a + b, 0)}
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.leftHeaderText}>June 2025</Text>
          <Text style={styles.leftValueText}>356k</Text>
          <Text style={styles.leftComparisonText}>1.3% than last year</Text>
        </View>
        <View style={styles.rightContainer}>
          <LineChart
            data={chartData}
            width={screenWidth / 2 - 32} // Adjusting width to fit within the container padding
            height={220}
            chartConfig={chartConfig}
            style={styles.chartStyle}
            yAxisSuffix=" "
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingTop: 40, // Space for headers within the container
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00274d', // Adjust color if needed to ensure visibility
  },
  totalRetailersText: {
    borderWidth: 1,
    borderColor: 'gray', // Updated border color to gray
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40, // Space between the headers and the content
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 16,
  },
  leftHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00274d',
  },
  leftValueText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00274d',
    marginVertical: 8,
  },
  leftComparisonText: {
    fontSize: 14,
    color: '#00274d',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartStyle: {
    borderRadius: 16,
  },
});

export default MyLineChart;
