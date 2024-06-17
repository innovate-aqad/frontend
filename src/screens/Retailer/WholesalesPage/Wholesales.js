import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Divider} from 'react-native-paper';
import Search from '../../../Shared/Search';
import {environmentVariables} from '../../../../config/Config';
import axios from 'axios';
import {retrieveToken} from '../../../Shared/EncryptionDecryption/Token';

export default function Wholesales(nav) {
  const [tab, setTab] = useState('All');
  const [loader, setLoader] = useState(false);
  const [loader1, setLoader1] = useState(false);
  const [resCatData, setResCatData] = useState([]);
  const [resProductData, setResProductData] = useState([]);
  const scrollViewRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const scrollWidth = Dimensions.get('window').width;
  let scrollOffset = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollViewRef.current) {
        scrollOffset += scrollWidth;
        if (scrollOffset > contentWidth) {
          scrollOffset = 0;
        }
        scrollViewRef.current.scrollTo({x: scrollOffset, animated: true});
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [contentWidth, scrollWidth]);

  const tabNavigatePage = value => {
    // console.log(value, 'ramsasalsklaalskfalk');
    if (value === 'Top Sales') {
      setTab('Top Sales');
    } else if (value === 'Features') {
      setTab('Features');
    } else if (value === 'Popular') {
      setTab('Popular');
    } else {
      setTab('All');
    }
  };

  useEffect(async () => {
    const storedToken = await retrieveToken();
    const getCategoryData = async () => {
      try {
        setLoader(true);
        const getData = await axios.get(
          `${environmentVariables?.apiUrl}/api/category/get`,
          {
            headers: {
              _token: storedToken,
            },
          },
        );
        if (getData?.data?.success) {
          setResCatData(getData?.data?.data);
          setLoader(false);
        } else {
          setResCatData([]);
          setLoader(false);
        }
      } catch (error) {
        setLoader(false);
        setResCatData([]);
        console.log(error?.response?.data?.message, 'eroorr');
      }
    };

    const getProductsData = async () => {
      try {
        setLoader1(true);
        const getData = await axios.get(
          `${environmentVariables?.apiUrl}/api/product/get`,
          {
            headers: {
              _token: storedToken,
            },
          },
        );

        console.log('111111111112222222', getData?.data?.data);

        if (getData?.data?.success) {
          setResProductData(getData?.data?.data);
          setLoader1(false);
        } else {
          setResProductData([]);
          setLoader1(false);
        }
      } catch (error) {
        setLoader1(false);
        setResProductData([]);
        console.log(
          error,
          'eroorr12',
          error?.response?.data?.message,
          error?.message,
        );
      }
    };

    getProductsData();

    getCategoryData();
  }, []);

  // console.log(resProductData, 'resCatData');
  return (
    <View className="w-full h-full bg-[#f5f5f5]">
      <View className="px-3">
        <Search />
      </View>

      <View className="mt-3">
        <TouchableOpacity>
          <Text className="text-[#00274d]  px-4 font-[Roboto-Bold]">
            Categories
          </Text>
        </TouchableOpacity>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          className="pl-2"
          showsHorizontalScrollIndicator={false}
          onContentSizeChange={width => setContentWidth(width)}
          style={{flexDirection: 'row', marginTop: 8, gap: 8}}>
          {loader ? (
            <View style={styles.activityIndivator}>
              <ActivityIndicator />
            </View>
          ) : resCatData?.length == 0 ? (
            <Text>Data not Available</Text>
          ) : (
            resCatData?.map((item, index) => (
              <View key={index}>
                <View className="flex flex-col mr-2 bg-white rounded-lg shadow p-1.5">
                  <Image
                    style={{height: 74, width: 74}}
                    className=""
                    source={{
                      uri: `${environmentVariables?.apiUrl}/uploads/category/${item?.category_image}`,
                    }}
                  />
                </View>

                <Text
                  className="pt-1 text-center"
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: '#00274d',
                    fontSize: 10,
                  }}>
                  {item.title}
                </Text>
              </View>
            ))
          )}
          {/* {[
            {name: 'Fresh Food'},
            {name: 'Grocery'},
            {name: 'Beverages'},
            {name: 'Frozen Food'},
            {name: 'Health andBeauty'},
            {name: 'Grocery'},
            {name: 'Grocery'},
            {name: 'Grocery'},
          ].map((item, index) => (
            <View key={index}>
              <View className="flex flex-col mr-2 bg-white rounded-lg shadow p-1.5">
                <Image
                  style={{height: 74, width: 74}}
                  className=""
                  source={{
                    uri: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
                  }}
                />
              </View>
              <Text
                className="pt-1 text-center"
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: '#00274d',
                  fontSize: 10,
                }}>
                {item.name}
              </Text>
            </View>
          ))} */}
        </ScrollView>
      </View>
      <Divider className="bg-[#e6e9f4] m-3" />

      <View className="flex flex-row justify-around px-3 gap-x-3">
        {[
          {name: 'All'},
          {name: 'Top Sales'},
          {name: 'Features'},
          {name: 'Popular'},
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => tabNavigatePage(item.name)}
            className={
              tab == item.name
                ? 'bg-[#f96900] p-1.5 px-3 rounded-lg w-[82px]'
                : 'bg-[#ffffff] p-1.5 px-3 rounded-lg w-[82px]'
            }>
            <Text
              className={
                tab == item.name
                  ? 'text-white text-[12px] text-center'
                  : 'text-[#00274d] text-[12px] text-center'
              }
              style={{fontFamily: 'Poppins-Regular'}}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView className="mt-3 mb-20">
        <View
          className="p-3"
          style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', gap: 14}}>
          <View className="w-40 h-16 mt-2">
            <Text
              className="text-[#f96900] font-[Roboto-Bold]"
              style={{lineHeight: 23, fontSize: 20}}>
              Popular
            </Text>
            <Text
              className="text-[#f96900] font-[Roboto-Bold]"
              style={{lineHeight: 23, fontSize: 20}}>
              Products
            </Text>
          </View>

          {loader1 ? (
            <View style={styles.activityIndivator}>
              <ActivityIndicator />
            </View>
          ) : resProductData?.length == 0 ? (
            <Text>Data not Available</Text>
          ) : (
            resProductData?.map((item, index) => (
              <View
                key={index}
                className={
                  index % 2 == 1
                    ? 'bg-white relative !mt-[-125px] shadow rounded-[12px]'
                    : 'flex flex-col bg-white shadow rounded-[12px]'
                }>
                {console.log('item', item)}
                <TouchableOpacity
                  className=""
                  onPress={() => {
                    nav.navigation.navigate('productDetails', {
                      id: item?.id,
                      categoryId: item?.category_id,
                    });
                  }}>
                  <Image
                    style={{
                      height: 115,
                      width: 160,
                      borderTopRightRadius: 12,
                      borderTopLeftRadius: 12,
                    }}
                    className=""
                    source={{
                      uri: `${environmentVariables?.apiUrl}/uploads/vendor/product/${item?.variation_arr?.[0]?.product_images_arr?.[0]?.image}`,
                    }}
                  />
                  <View className="flex flex-col pt-2 after:pl-2">
                    <Text className="text-[#7e84a3] text-[10px] font-[Poppins-Light]">
                      {item.title}
                    </Text>
                    <Text className="text-[#00274d] text-[10px] font-[Poppins-Regular]">
                      {item.description}
                    </Text>
                    <Text className="text-[#f96900] text-[13px] font-[Poppins-SemiBold]">
                      {item?.variation_arr?.[0]?.price} AED
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    // marginHorizontal: 10,
    borderBottomWidth: 0,
    marginTop: 10,
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
  topNavigation: {
    height: 15,
    width: 23.3,
    tintColor: 'white',
  },

  activityIndivator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
