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
import CarouselHome from '../../Shared/Carousel';
import {BarChart} from 'react-native-chart-kit';
import LiveOrder from '../../Shared/LiveOrder';
import Header from '../../components/Header';

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      data: [90, 45, 40, 80, 99]
    }
  ]
};

const chartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  decimalPlaces: 0,
  color: () => `#f96900`,
  labelColor: (opacity = 1) => `#999`,
  style: {
    borderRadius: 16,
    paddingTop:1,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '0',
    stroke: '#ffa726',
  },
};


export default function Dashboard(nav) {
  const [searchText, setSearchText] = useState('');
  const handleSearch = () => {};
  return (
    <View className="flex flex-col pb-20">
      <Header></Header>
      <View className="p-3 px-5 gap-y-2">
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

        <View className="flex flex-row justify-between w-full gap-x-2">
          <View className="flex flex-row items-center p-3 bg-white gap-x-2 rounded-xl">
            <View className="">
              <Text
                style={styles.cardTitle}
                className="flex flex-row text-black">
                Sales Today
              </Text>
              <View className="flex flex-row">
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
              <View className="flex flex-row mt-1.5">
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
            <View className="">
              <View className="p-2 py-3 h-[45px] w-[45px] flex flex-row items-center justify-center bg-[#E5EEFF] border  border-[#cedefc] rounded-full shadow">
                <Image
                  style={styles.categoryImage}
                  source={require('../../Assets/image/vendor_dashboard_images/sales_today.jpeg')}
                />
              </View>
            </View>
          </View>
          <View className="flex flex-row items-center p-3 bg-white gap-x-2 rounded-xl">
            <View className="">
              <Text
                style={styles.cardTitle}
                className="flex flex-row text-black">
                SKU
              </Text>
              <View className="flex flex-row">
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
                  Units
                </Text>
              </View>
              <View className="flex flex-row mt-1.5">
                <Text
                  style={{
                    fontSize: 8,
                    color: '#f0142f',
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
            <View className="">
              <View className="p-2 py-3 h-[45px] w-[45px] flex flex-row items-center justify-center bg-[#E8FBF5] border border-[#d7f8ee] rounded-full shadow">
                <Image
                  style={{height: 18, width: 18}}
                  source={require('../../Assets/image/vendor_dashboard_images/sku.jpeg')}
                />
              </View>
            </View>
          </View>
        </View>

        <View className="flex flex-row justify-between w-full gap-x-2">
          <View className="flex flex-row items-center p-2.5 py-3 bg-white gap-x-2 rounded-xl">
            <View className="">
              <Text
                style={styles.cardTitle}
                className="flex flex-row text-black">
                Pending Orders
              </Text>
              <View className="flex flex-row">
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
              <View className="flex flex-row mt-1.5">
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
            <View className="">
              <View className=" h-[45px] w-[45px] flex flex-row items-center justify-center bg-[#FFFAE6] border border-[#faf2d1] rounded-full shadow">
                <Image
                  style={{height: 18, width: 15.4}}
                  source={require('../../Assets/image/vendor_dashboard_images/pending_orders.jpeg')}
                />
              </View>
            </View>
          </View>
          <View className="flex flex-row items-center p-2.5 py-3 bg-white rounded-xl">
            <View className="">
              <Text
                style={styles.cardTitle}
                className="flex flex-row text-black">
                Cancelled Orders
              </Text>
              <View className="flex flex-row">
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
              <View className="flex flex-row mt-1.5">
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
            <View className="">
              <View className=" h-[45px] w-[45px] flex flex-row items-center justify-center bg-[#F2F2F6] border-[#8c8c8d] rounded-full shadow">
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../../Assets/image/vendor_dashboard_images/cancel_orders.jpeg')}
                />
              </View>
            </View>
          </View>
        </View>

        <View className="flex flex-row h-fit items-center w-[100%] !justify-between mt-2 px-0 text-black bg-white rounded-xl shadow">
          <View className="py-1">
            <View className="flex flex-col pt-4 pb-5 pl-6 w-100">
              <Text style={{fontSize: 13,color:"#00274d", fontWeight: 'Poppins-Bold'}}>
                Performance Matrix
              </Text>
            </View>
            <BarChart
              data={data}
              width={300}
              height={190}
              
              chartConfig={chartConfig}
              style={{paddingTop:0, paddingLeft:5}}
              yAxisSuffix=" Units "


            />
            {/* <BarChartDashboard/> */}
          </View>
        </View>
        
        
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
