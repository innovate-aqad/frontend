import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CarouselHome from '../Shared/Carousel';
import { LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph} from 'react-native-chart-kit';
import { data, contributionData, pieChartData, progressChartData } from './data'
import LiveOrder from '../Shared/LiveOrder';
const chartConfigs = [
  {
    backgroundColor: '#000000',
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    style: {
      borderRadius: 16
    }
  },
  {
    backgroundColor: '#022173',
    backgroundGradientFrom: '#022173',
    backgroundGradientTo: '#1b3fa0',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  },
  {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
  },
  {
    backgroundColor: '#26872a',
    backgroundGradientFrom: '#43a047',
    backgroundGradientTo: '#66bb6a',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  },
  {
    backgroundColor: '#000000',
    backgroundGradientFrom: '#000000',
    backgroundGradientTo: '#000000',
    color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
  }, {
    backgroundColor: '#0091EA',
    backgroundGradientFrom: '#0091EA',
    backgroundGradientTo: '#0091EA',
    color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
  },
  {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  },
  {
    backgroundColor: '#b90602',
    backgroundGradientFrom: '#e53935',
    backgroundGradientTo: '#ef5350',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  },
  {
    backgroundColor: '#ff3e03',
    backgroundGradientFrom: '#ff3e03',
    backgroundGradientTo: '#ff3e03',
    color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${opacity})`
  }
]


// FontAwesome6

export default function Dashboard() {
  const [searchText, setSearchText] = useState('');
  const handleSearch = () => {};
  return (
    <View className="flex flex-col pb-20">
      {/* <ScrollView style={styles.scrollView}>
        <View className="p-3">
          <View className="flex flex-row w-full bg-gray-200 rounded-full">
            <TouchableOpacity className="w-[50%] h-[39px]" style={styles.button}>
              <Text
                className="text-white"
                style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>
                Vendor
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-[50%] h-[39px]" style={styles.button1}>
              <Text
                className="text-[#00274D]"
                style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>
                Retailer
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Search..."
              underlineColorAndroid="transparent"
              value={searchText}
              placeholderTextColor={"#cbcbcb"}
              keyboardType="default"
              disableFullscreenUI={true}
              onChangeText={text => setSearchText(text)}
              onSubmitEditing={handleSearch}
            />
            

            <TouchableOpacity onPress={handleSearch}>
              <AntDesign name="search1" size={24} color="#cbcbcb" />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-around w-full mt-1.5">
            <View className="flex flex-row items-center">
              <View className="w-[10px] h-[10px] bg-[#21d59b] rounded-full"></View>
              <Text className={"text-[#00274d] text-[10px]"}> Retailer</Text>
            </View>
            <View className="flex flex-row items-center">
              <View className="w-[10px] h-[10px] bg-[#ffc700] rounded-full"></View>
              <Text className={"text-[#00274d] text-[10px]"}> Product Category</Text>
            </View>
            <View className="flex flex-row items-center">
              <View className="w-[10px] h-[10px] bg-[#7e84a3] rounded-full"></View>
              <Text className={"text-[#00274d] text-[10px]"}> Total SKU</Text>
            </View>
            <View className="flex flex-row items-center">
              <View className="w-[10px] h-[10px] bg-[#0058ff] rounded-full"></View>
              <Text className={"text-[#00274d] text-[10px]"}> Orders</Text>
            </View>
          </View>
          <View className="flex flex-row items-center justify-between mt-2">
            <Text className="text-[13px] font-bold" style={styles.textColor}>
              Category Tiles
            </Text>
            <View className="flex flex-row items-center p-1 pr-2 bg-white rounded-full gap-x-2 ">
              <Text className="text-[8px] text-[#00274d]">Show More</Text>

              <Image
                style={styles.tinyLogo}
                source={require('../Assets/image/drawable-hdpi/group_186.png')}
              />
            </View>
          </View>
          <View className="flex flex-col items-center">
            <View className="flex flex-row items-center justify-around mt-3 gap-x-5">
              <View className="gap-y-1">
                <View className="p-2 py-3 bg-white rounded shadow">
                <Image
                style={styles.categoryImage}
                source={require('../Assets/image/drawable-xhdpi/froods.png')}
              />
              </View>
                <Text
                  className="text-center text-[10px]"
                  style={styles.textColor}>
                  Froods
                </Text>
              </View>
              <View className="gap-y-1">
                <View className="p-2 py-3 bg-white rounded shadow">
                <Image
                style={styles.categoryImage}
                source={require('../Assets/image/drawable-xhdpi/personal.png')}
              />
              </View>
                <Text
                  className="text-center text-[10px]"
                  style={styles.textColor}>
                  Beverages
                </Text>
              </View>
              <View className="gap-y-1">
                <View className="p-2 py-3 bg-white rounded shadow">
                <Image
                style={styles.categoryImage}
                source={require('../Assets/image/drawable-xhdpi/mask_group_2.png')}
              />
              </View>
                <Text
                  className="text-center text-[10px]"
                  style={styles.textColor}>
                  Personal Care
                </Text>
              </View>
              <View className="gap-y-1">
                <View className="p-2 py-3 bg-white rounded shadow">
                <Image
                style={styles.categoryImage}
                source={require('../Assets/image/drawable-xhdpi/scroll_group_1.png')}
              />
              </View>
                <Text
                  className="text-center text-[10px]"
                  style={styles.textColor}>
                  Household Care
                </Text>
              </View>
            </View>
            <View className="flex flex-row items-center justify-around mt-3 gap-x-5">
              <View className="gap-y-1">
                <View className="p-2 py-3 bg-white rounded shadow">
                <Image
                style={styles.categoryImage}
                source={require('../Assets/image/drawable-xhdpi/health.png')}
              />
              </View>
                <Text
                  className="text-[10px] text-center"
                  style={styles.textColor}>
                  Health Care
                </Text>
              </View>
              <View className="gap-y-1">
                <View className="p-2 py-3 bg-white rounded shadow">
                <Image
                style={styles.categoryImage}
                source={require('../Assets/image/drawable-xhdpi/untitled_1.png')}
              />
              </View>
                <Text
                  className="text-[10px] text-center"
                  style={styles.textColor}>
                  Baby Care
                </Text>
              </View>
              <View className="gap-y-1">
                <View className="p-2 py-3 bg-white rounded shadow">
                <Image
                style={styles.categoryImage}
                source={require('../Assets/image/drawable-xhdpi/pngwing_com_7.png')}
              />
              </View>
                <Text
                  className="text-[10px] text-center"
                  style={styles.textColor}>
                  Pet Care
                </Text>
              </View>
              <View className="gap-y-1">
                <View className="p-2 py-3 bg-white rounded shadow">
                <Image
                style={styles.categoryImage}
                source={require('../Assets/image/drawable-xhdpi/pngwing_com_8.png')}
              />
              </View>
                <Text
                  className="text-[10px] text-center"
                  style={styles.textColor}>
                  Home Care
                </Text>
              </View>
            </View>
          </View>
        </View>
        <CarouselHome />
      </ScrollView> */}
      <View className="relative top-0 flex flex-row items-center p-5 bg-white">
        <Text
          className="flex justify-center w-[80%] text-center text-[#00274d]"
          style={{fontFamily: 'Poppins-Bold'}}>
          PRODUCTS
        </Text>
      </View>
      <View className="p-3 px-5 gap-y-3">
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            underlineColorAndroid="transparent"
            value={searchText}
            placeholderTextColor={'#cbcbcb'}
            keyboardType="default"
            disableFullscreenUI={true}
            onChangeText={text => setSearchText(text)}
            onSubmitEditing={handleSearch}
          />

          <TouchableOpacity onPress={handleSearch}>
            <AntDesign name="search1" size={24} color="#cbcbcb" />
          </TouchableOpacity>
        </View>
          <View className="flex flex-row justify-between px-3">

         
          <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.2,shadowRadius: 10, }}>
                <Text style={{ fontSize: 12,fontWeight: 'bold',marginBottom: 8,}}>Sales Today</Text>
                <View className="flex flex-row">
                  <Text style={{ fontSize: 14,color: '#666',fontWeight:"bold"  }}>14570</Text>
                  <Text style={{ fontSize: 8,color: '#666',marginLeft:2  }}>AED</Text>
                </View>
                <View className="flex flex-row">
                  <Text style={{fontSize: 14,color: '#999',}}>2.3%</Text>
                  <Text>|</Text>
                  <Text style={{fontSize: 14,color: '#999',}}>than last year</Text>

                </View>
          </View>
          <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.2,shadowRadius: 10, }}>
                <Text style={{ fontSize: 12,fontWeight: 'bold',marginBottom: 8,}}>Sales Today</Text>
                <View className="flex flex-row">
                  <Text style={{ fontSize: 14,color: '#666',fontWeight:"bold"  }}>14570</Text>
                  <Text style={{ fontSize: 8,color: '#666',marginLeft:2  }}>AED</Text>
                </View>
                <View className="flex flex-row">
                  <Text style={{fontSize: 14,color: '#999',}}>2.3%</Text>
                  <Text>|</Text>
                  <Text style={{fontSize: 14,color: '#999',}}>than last year</Text>

                </View>
          </View>
          </View>
          <View className="flex flex-row justify-between px-3">         
          <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.2,shadowRadius: 10, }}>
                <Text style={{ fontSize: 12,fontWeight: 'bold',marginBottom: 8,}}>Sales Today</Text>
                <View className="flex flex-row">
                  <Text style={{ fontSize: 14,color: '#666',fontWeight:"bold"  }}>14570</Text>
                  <Text style={{ fontSize: 8,color: '#666',marginLeft:2  }}>AED</Text>
                </View>
                <View className="flex flex-row">
                  <Text style={{fontSize: 14,color: '#999',}}>2.3%</Text>
                  <Text>|</Text>
                  <Text style={{fontSize: 14,color: '#999',}}>than last year</Text>

                </View>
          </View>
          <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.2,shadowRadius: 10, }}>
                <Text style={{ fontSize: 12,fontWeight: 'bold',marginBottom: 8,}}>Sales Today</Text>
                <View className="flex flex-row">
                  <Text style={{ fontSize: 14,color: '#666',fontWeight:"bold"  }}>14570</Text>
                  <Text style={{ fontSize: 8,color: '#666',marginLeft:2  }}>AED</Text>
                </View>
                <View className="flex flex-row">
                  <Text style={{fontSize: 14,color: '#999',}}>2.3%</Text>
                  <Text>|</Text>
                  <Text style={{fontSize: 14,color: '#999',}}>than last year</Text>

                </View>
          </View>
          </View>

        {/* <LiveOrder/> */}
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
          {chartConfigs.map(chartConfig => {
          const labelStyle = {
            color: chartConfig.color(),
            marginVertical: 10,
            textAlign: 'center',
            fontSize: 16
          }
          const graphStyle = {
            marginVertical: 8,
            ...chartConfig.style
          }
          return (
            <ScrollView
              key={Math.random()}
              style={{
                backgroundColor: chartConfig.backgroundColor
              }}
            >
              <Text style={labelStyle}>Bezier Line Chart</Text>
              <LineChart
                data={data}
                width={190}
                height={190}
                chartConfig={chartConfig}
                bezier
                style={graphStyle}
              />
              <Text style={labelStyle}>Progress Chart</Text>
              <ProgressChart
                data={progressChartData}
                width={190}
                height={190}
                chartConfig={chartConfig}
                style={graphStyle}
              />
              <Text style={labelStyle}>Bar Graph</Text>
              <BarChart
               width={190}
               height={190}
                data={data}
                chartConfig={chartConfig}
                style={graphStyle}
              />
              <Text style={labelStyle}>Pie Chart</Text>
              <PieChart
                data={pieChartData}
                width={190}
                height={190}
                chartConfig={chartConfig}
                accessor="population"
                style={graphStyle}
              />
              <Text style={labelStyle}>Line Chart</Text>
              <LineChart
                data={data}
                width={190}
                height={190}
                chartConfig={chartConfig}
                style={graphStyle}
              />
              <Text style={labelStyle}>Contribution Graph</Text>
              <ContributionGraph
                values={contributionData}
                width={190}
                height={190}
                endDate={new Date('2016-05-01')}
                numDays={105}
                chartConfig={chartConfig}
                style={graphStyle}
              />
            </ScrollView>
          )
        })}
        {/* </View> */}
        {/* <ScrollView >
            {[1, 2, 3, 4, 5]?.map((item, index) => {
              return (
                <View
                  key={index}
                  className="flex flex-row items-center justify-around p-3 mt-1.5 bg-white shadow rounded-xl">
                  <View className="bg-[#FDEEE3] h-[50px] w-[50px] rounded-full border border-[#FDD7BC] p-3">
                    <Image
                      style={{height: 22, width: 29.5}}
                      source={require('../Assets/image/drawable-xhdpi/pngwing_com_9.png')}
                    />
                  </View>
                  <View>
                    <Text
                      className="text-[#5a607f] text-[13px]"
                      style={{fontFamily: 'Poppins-Regular'}}>
                      Product name
                    </Text>
                    <View className="flex flex-row gap-x-2">
                      <Text
                        className="text-[#5a607f] bg-[#e6e9f4] text-center h-[12px] rounded-full w-[55px] text-[7px]"
                        style={{fontFamily: 'Poppins-SemiBold'}}>
                        SKU : 575
                      </Text>
                      <Text
                        className="text-[#5a607f] bg-[#e6e9f4] text-center h-[12px] rounded-full w-[55px] text-[7px]"
                        style={{fontFamily: 'Poppins-SemiBold'}}>
                        Grocery5
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text
                      className="text-[#f96900] pb-3 text-[13px]"
                      style={{fontFamily: 'Poppins-Medium'}}>
                      50 AED
                    </Text>
                  </View>
                  <View>
                    <Entypo
                      name="dots-three-vertical"
                      size={20}
                      color="#cbcbcb"
                    />
                  </View>
                </View>
              );
            })}
          
        </ScrollView> */}
        {/* <View>
          <TouchableOpacity
            className="mt-2 rounded-full"
            // onPress={() => redirect()}
            style={styles.button}>
            <Text
              className="text-white"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              ADD PRODUCT
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 10,
    // marginHorizontal: 10,
    borderBottomWidth: 0,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderColor: 'white',
    paddingRight: 5,
    color:"#cbcbcb",
    borderWidth: 2,
    marginLeft: 5,
  },
  button: {
    backgroundColor: '#F96900',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    color: 'red',
  },
  button1: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    color: 'red',
  },
  bgColor: {
    backgroundColor: '#00274D',
  },
  textColor: {
    color: '#00274d',
  },
  tinyLogo: {
    width: 18.3,
    height: 18.9,
    // marginRight:10
    // borderRadius: 11.5,
  },
  categoryImage:{
    height:44,
    width:65,
  }
});
