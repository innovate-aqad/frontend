import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Divider} from 'react-native-paper';
import Search from '../../../Shared/Search';
import {environmentVariables} from '../../../../config/Config';
import axios from 'axios';
import {retrieveToken} from '../../../Shared/EncryptionDecryption/Token';
import {blue, grayColor, lightGray, white} from '../../../constants/Theme';
import {ROBOTO} from '../../../constants/CustomFontFamily';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FilterDrawer from './FilterDrawer';

export default function ProductFilter(nav) {
  const [tab, setTab] = useState('Filter');
  const [searchText, setSearchText] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const [loader, setLoader] = useState(false);
  const [loader1, setLoader1] = useState(false);
  const [resCatData, setResCatData] = useState([]);
  const [resProductData, setResProductData] = useState([]);
  const scrollViewRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const scrollWidth = Dimensions.get('window').width;
  let scrollOffset = 0;

  const tabNavigatePage = item => {
    setFilterValue(item?.value);
    if (item?.name === 'Top Sales') {
      setTab('Top Sales');
    } else if (item?.name === 'Features') {
      setTab('Features');
    } else if (item?.name === 'Popular') {
      setTab('Popular');
    } else {
      setTab('Filter');
    }
  };

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

  useEffect(() => {
    async function getCategoryData() {
      const storedToken = await retrieveToken();
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
    }

    getCategoryData();
  }, []);

  useEffect(() => {
    async function getProductsData() {
      const storedToken = await retrieveToken();
      try {
        setLoader1(true);
        const getData = await axios.get(
          `${environmentVariables?.apiUrl}/api/product/get?search=${searchText}&filter=${filterValue}`,
          {
            headers: {
              _token: storedToken,
            },
          },
        );

        // console.log('111111111112222222', getData?.data?.data);

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
    }

    getProductsData();
  }, [searchText, filterValue]);

  const handleSearchValueChange = async value => {
    if (value.length > 2) {
      setSearchText(value);
    } else {
      setSearchText('');
    }
  };

  // console.log(resProductData, 'resCatData');
  return (
    <View className="w-full h-full mt-5 bg-[#f5f5f5]">
      <View className="px-3">
        {/* <Search onSearchValueChange={handleSearchValueChange} /> */}
        <View style={styles.container}>
        <TextInput
          style={styles.input}
          // placeholder="Search..."
          underlineColorAndroid="transparent"
          // value={searchText}
          placeholderTextColor={'#cbcbcb'}
          keyboardType="default"
          disableFullscreenUI={true}
          // onChangeText={handleTextChange}
          // onSubmitEditing={handleSearch}
        />

        <TouchableOpacity
          className="flex flex-row items-center gap-x-2"
          // onPress={handleSearch}
          >
          <AntDesign name="close" size={20} color={lightGray} />
          <Divider className="w-[0.9px] h-6" style={{color: lightGray}} />
          <MaterialCommunityIcons
            name="line-scan"
            size={20}
            color={lightGray}
          />
          <Divider className="w-[0.9px] h-6" style={{color: lightGray}} />
          <AntDesign name="search1" size={24} color={lightGray} />
        </TouchableOpacity>
      </View>
      </View>

      <View className="flex flex-row justify-around px-3 mt-4 gap-x-3">
        {[
          {name: 'Filter', value: ''},
          {name: 'Popular', value: 'popular'},
          {name: 'Top Sales', value: 'top_sales'},
          {name: 'Features', value: 'features'},
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => tabNavigatePage(item)}
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
              
              {
                item.name=="Filter" ? 
                <View className="flex flex-row items-center justify-center"> 
                  <Image source={require('../../../Assets/image/vendor/filter.png')}
               
                style={{height:13,width:13,tintColor:white,marginTop:1}} />
                <Text style={{color:white}}> {item.name}</Text>
                </View>
                 :item.name 
              }
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView className="mt-3 mb-3">
        <View
          className="p-3"
          style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', gap: 14}}>
          <View className="w-40 h-16 mt-2">
            <Text
              style={{
                lineHeight: 23,
                fontSize: 20,
                color: blue,
                fontFamily: ROBOTO.RobotoBold,
              }}>
              Result For
            </Text>
            <Text
              style={{
                lineHeight: 23,
                fontSize: 20,
                color: blue,
                fontFamily: ROBOTO.RobotoBold,
              }}>
              'Groove'
            </Text>
          </View>

          {[
            {title: 'Nike', description: 'Considero casus adduco',price:"150"},
            {title: 'Nike', description: 'Considero casus adduco',price:"150"},
            {title: 'Nike', description: 'Considero casus adduco',price:"150"},
            {title: 'Nike', description: 'Considero casus adduco',price:"150"},
            {title: 'Nike', description: 'Considero casus adduco',price:"150"},
            {title: 'Nike', description: 'Considero casus adduco',price:"150"},
            {title: 'Nike', description: 'Considero casus adduco',price:"150"},
            {title: 'Nike', description: 'Considero casus adduco',price:"150"},
          ]?.map(
            (item, index) => (
              <View
                key={index}
                className={
                  index % 2 == 1
                    ? 'bg-white relative !mt-[-125px] shadow rounded-[12px]'
                    : 'flex flex-col bg-white shadow rounded-[12px]'
                }>
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
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8SfVm34eY9PL3DKdp1bJ0G5zXvQ6CxAiqg&s',
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
                      {item?.price} AED
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ),
          )}
        </View>
      </ScrollView>
      <FilterDrawer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: white,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 0,
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: white,
    borderColor: white,
    paddingRight: 5,
    color: grayColor,
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
