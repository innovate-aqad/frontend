import React, {useEffect, useState} from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#fff',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(255, 116, 32, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
  decimalPlaces: 0, // Remove decimal values on y-axis
  propsForBackgroundLines: {
    stroke: '#000000', // Background lines color
    strokeDasharray: '', // Remove dashed background lines
  },
};

const MyBarChart = () => {
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
    <View style={styles.outerContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Retailers Onboarding</Text>
        <Text style={[styles.headerText, styles.totalRetailersText]}>
          Total Retailers:
          {chartData.datasets[0].data.reduce((a, b) => a + b, 0)}
        </Text>
      </View>
      <BarChart
        data={chartData}
        width={screenWidth - 64} // Adjusting width to fit within the container padding
        height={220}
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
              {backgroundColor: 'rgba(255, 116, 32, 1)'},
            ]}
          />
          <Text style={styles.legendText}>Retailer</Text>
        </View>
        <View style={styles.legendItem}>
          <View
            style={[
              styles.legendColor,
              {backgroundColor: 'rgba(255, 0, 255, 1)'},
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
  chartStyle: {
    marginTop: 40, // Space between the headers and the chart
    borderRadius: 16,
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
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 4,
  },
  legendText: {
    fontSize: 14,
    color: '#00274d',
  },
});

export default MyBarChart;
