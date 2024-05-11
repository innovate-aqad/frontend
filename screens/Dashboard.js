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
import {BarChart} from 'react-native-chart-kit';
import {data} from './data';
import LiveOrder from '../Shared/LiveOrder';
import Header from '../components/Header';

const chartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  
  decimalPlaces: 0, 
  color: () => `#f96900`, 
  labelColor: (opacity = 1) => `#999`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};
export default function Dashboard() {
  const [searchText, setSearchText] = useState('');
  const handleSearch = () => {};
  return (
    <View className="flex flex-col pb-20">
      <Header></Header>
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



        
        <View className="flex flex-row justify-between">
          <View className="flex flex-row items-center justify-between px-3 bg-white rounded-2xl">
            <View>
              <View>
              <Text style={styles.cardTitle} className="flex flex-row text-black">Sales Today</Text>
              <View className="s">
                <Text
                  style={{
                    fontSize: 14,
                    color: '#000',
                    fontWeight: 'bold',
                    fontFamily: 'Poppins-SemiBold',
                  }}>
                  14570
                </Text>
                <Text
                  className="relative top-2"
                  style={{fontSize: 7, color: '#7e84a3', marginLeft: 2}}>
                  AED
                </Text>
              </View>


              <View className="flex flex-row">
                <Text
                  style={{
                    fontSize: 8,
                    color: '#3dd598',
                    color: 'green',
                    marginRight: 2,
                  }}>
                  2.3%
                </Text>
                <Text style={{fontSize: 8, color: '#999'}}>|</Text>
                <Text style={{fontSize: 8, color: '#999', marginLeft: 2}}>
                  than last year
                </Text>
              </View>
            </View>
              </View>
              


            <View className="p-2 py-3 h-[45px] w-[45px] flex flex-row items-center justify-center bg-sky-200 rounded-full shadow">
              <Image
                style={styles.categoryImage}
                source={require('../Assets/image/vendor_dashboard_images/sales_today.jpeg')}
              />
            </View>
          </View>























          <View
            style={{
              backgroundColor: '#fff',
              padding: 12,
              borderRadius: 10,
              shadowColor: '#000',
              shadowOpacity: 0.2,
              shadowRadius: 10,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View>
              <Text style={{fontSize: 12, fontWeight: 'bold', marginBottom: 8}}>
                SKU
              </Text>
              <View className="flex flex-row">
                <Text style={{fontSize: 14, color: '#666', fontWeight: 'bold'}}>
                  14570
                </Text>
                <Text style={{fontSize: 8, color: '#666', marginLeft: 2}}>
                  Units
                </Text>
              </View>
              <View className="flex flex-row">
                <Text
                  style={{
                    fontSize: 8,
                    color: '#999',
                    color: 'red',
                    marginRight: 2,
                  }}>
                  2.3%
                </Text>
                <Text style={{fontSize: 8, color: '#999'}}>|</Text>
                <Text style={{fontSize: 8, color: '#999', marginLeft: 2}}>
                  than last year
                </Text>
              </View>
            </View>
            <View>
              <View className="p-2 py-3 bg-white rounded shadow">
                <Image
                  style={{height: 18, width: 18}}
                  source={require('../Assets/image/vendor_dashboard_images/sku.jpeg')}
                />
              </View>
            </View>
          </View>
        </View>

        <View className="flex flex-row justify-between px-3">
          <View
            style={{
              backgroundColor: '#fff',
              padding: 12,
              borderRadius: 10,
              shadowColor: '#000',
              shadowOpacity: 0.2,
              shadowRadius: 10,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: 'red',
                  marginBottom: 8,
                }}>
                Pending Orders
              </Text>
              <View className="flex flex-row">
                <Text style={{fontSize: 14, color: '#666', fontWeight: 'bold'}}>
                  300
                </Text>
              </View>
              <View className="flex flex-row">
                <Text
                  style={{
                    fontSize: 8,
                    color: '#999',
                    color: 'red',
                    marginRight: 2,
                  }}>
                  2.3%
                </Text>
                <Text style={{fontSize: 8, color: '#999'}}>|</Text>
                <Text style={{fontSize: 8, color: '#999', marginLeft: 2}}>
                  than last year
                </Text>
              </View>
            </View>
            <View>
              <View className="p-2 py-3 bg-white rounded shadow">
                <Image
                  style={{height: 18, width: 15}}
                  source={require('../Assets/image/vendor_dashboard_images/pending_orders.jpeg')}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#fff',
              padding: 12,
              borderRadius: 10,
              shadowColor: '#000',
              shadowOpacity: 0.2,
              shadowRadius: 10,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View>
              <Text style={{fontSize: 12, fontWeight: 'bold', marginBottom: 8}}>
                Cancelled Orders
              </Text>
              <View className="flex flex-row">
                <Text style={{fontSize: 14, color: '#666', fontWeight: 'bold'}}>
                  105
                </Text>
              </View>
              <View className="flex flex-row">
                <Text
                  style={{
                    fontSize: 8,
                    color: '#999',
                    color: 'green',
                    marginRight: 2,
                  }}>
                  2.3%
                </Text>
                <Text style={{fontSize: 8, color: '#999'}}>|</Text>
                <Text style={{fontSize: 8, color: '#999', marginLeft: 2}}>
                  than last year
                </Text>
              </View>
            </View>
            <View>
              <View className="p-2 py-3 bg-white rounded shadow">
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../Assets/image/vendor_dashboard_images/cancel_orders.jpeg')}
                />
              </View>
            </View>
          </View>
        </View>

        {/* <LiveOrder/> */}

        <View className="flex flex-row h-fit items-center w-[100%] !justify-between mt-2 px-0 text-black bg-white rounded-xl shadow">
          <View className="py-1">
            <View className="flex flex-col pt-4 pb-5 pl-6 w-100">
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                Performance Matrix
              </Text>
            </View>
            <BarChart
              data={data}
              width={300}
              height={220}
              chartConfig={chartConfig}
            />
          </View>
        </View>
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
    color: '#cbcbcb',
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
  categoryImage: {
    height: 18.8,
    width: 14.1,
  },

  cardTitle: {
    color: '#5a607f',
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
  },
});
