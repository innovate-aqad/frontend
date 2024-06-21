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
import SvgUri from 'react-native-svg-uri';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import marker from '../../../Assets/image/myaccount/marker_1.svg';
import addToCart from '../../../Assets/image/drawable/cartI.svg';
import axios from 'axios';
import {environmentVariables} from '../../../config/Config';
import {retrieveToken} from '../../../Shared/EncryptionDecryption/Token';
import {success} from '../../../constants/ToastMessage';

const mockData = ['UK1', 'UK2', 'UK3', 'UK4', 'UK5'];

export default function ProductDetails(nav) {
  const mainId = nav.route.params.id;
  const categoryId = nav.route.params.categoryId;
  const [size, setSize] = useState([]);
  const [loader, setLoader] = useState(false);
  const [loader1, setLoader1] = useState(false);
  const [loader2, setLoader2] = useState(false);
  const [loader3, setLoader3] = useState(false);
  const [resProductData, setResProductData] = useState();
  const [resRelatedProductData, setResRelatedProductData] = useState([]);

  const scrollViewRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const scrollWidth = Dimensions.get('window').width;
  let scrollOffset = 0;

  useEffect(() => {
    async function getProductsById() {
      const storedToken = await retrieveToken();
      console.log('000000000', mainId);

      try {
        setLoader(true);
        const getData = await axios.get(
          `${environmentVariables?.apiUrl}/api/product/get_by_id?product_id=${mainId}`,
          {
            headers: {
              _token: storedToken,
            },
          },
        );

        if (getData?.data?.success) {
          setResProductData(getData?.data?.data?.productObj);
          setLoader(false);
        } else {
          setResProductData({});
          setLoader(false);
        }
      } catch (error) {
        setLoader(false);
        setResProductData({});
      }
    }

    getProductsById();
  }, []);

  const getRelatedProducts = async () => {
    const storedToken = await retrieveToken();

    try {
      setLoader1(true);
      const getData = await axios.get(
        `${environmentVariables?.apiUrl}/api/product/get_product_by_cat_id?category_id=${categoryId}`,
        {
          headers: {
            _token: storedToken,
          },
        },
      );
      // console.log('9999999', getData?.data?.data);
      if (getData?.data?.success) {
        setResRelatedProductData(getData?.data?.data?.items);
        setLoader1(false);
      } else {
        setResRelatedProductData([]);
        setLoader1(false);
      }
    } catch (error) {
      setLoader1(false);
      setResRelatedProductData([]);
      console.log(error?.response?.data?.message, error?.message, 'eroorr11');
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
    }, 2000); // Adjust the interval as needed

    getRelatedProducts();

    return () => clearInterval(interval);
  }, [contentWidth, scrollWidth]);
  // console.log('44444222', resProductData);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = index => {
    // if (size.includes(index)) {
    //   setSize(size.filter(item => item !== index));
    // } else {
    //   setSize([...size, index]);
    // }
    setSelectedIndex(index);
  };
  const selectedPrice = resProductData?.variation_arr?.[selectedIndex]?.price;

  const addToCart = async (item, selectedIndex) => {
    const storedToken = await retrieveToken();
    const data = {
      product_id: item?.id,
      quantity: 1,
      variant_id: item?.variation_arr?.[selectedIndex]?.id,
    };
    console.log('item', storedToken);
    setLoader2(true);
    try {
      const response = await axios.post(
        `${environmentVariables?.apiUrl}/api/cart/add`,
        data,
        {
          headers: {
            _token: storedToken,
          },
        },
      );

      console.log(response?.data, 'q112');
      if (response?.data?.success) {
        success({type: 'success', text: response.data.message});
        setLoader2(false);
        nav.navigation.navigate('Cart');
      } else {
        success({type: 'success', text: response.data.message});
        setLoader2(false);
      }
    } catch (error) {
      setLoader2(false);

      success({
        type: 'error',
        text: error?.response?.data?.message || error?.message,
      });
      console.log(
        error,
        'eroorr12123',
        error?.response?.data?.message,
        error?.message,
      );
    }
  };
  const buyNowAction = async (item, selectedIndex) => {
    const storedToken = await retrieveToken();
    const data = {
      product_id: item?.id,
      quantity: 1,
      variant_id: item?.variation_arr?.[selectedIndex]?.id,
    };
    console.log('item', storedToken);
    setLoader3(true);
    try {
      const response = await axios.post(
        `${environmentVariables?.apiUrl}/api/cart/add`,
        data,
        {
          headers: {
            _token: storedToken,
          },
        },
      );

      // console.log(
      //   response?.data,
      //   'q112',
      //   item?.variation_arr?.[selectedIndex]?.price,
      //   'popopopoppoppopopo',
      // );
      if (response?.data?.success) {
        console.log('Tanuj');
        success({type: 'success', text: response.data.message});
        setLoader3(false);
        nav.navigation.navigate('checkout', {
          overAllAmount: item?.variation_arr?.[selectedIndex]?.price * 1,
          cartData: resProductData,
          type: 'buynow',
          quantity: 1,
          stock: item?.variation_arr?.[selectedIndex]?.quantity,
          variationDetails: item?.variation_arr?.[selectedIndex],
        });
      } else {
        success({type: 'success', text: response.data.message});
        setLoader3(false);
      }
    } catch (error) {
      setLoader3(false);

      success({
        type: 'error',
        text: error?.response?.data?.message || error?.message,
      });
      console.log(
        error,
        'eroorr12123',
        error?.response?.data?.message,
        error?.message,
      );
    }
  };
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      {loader ? (
        <ActivityIndicator />
      ) : (
        <View className="w-full flex flex-col mb-20 h-full bg-[#f5f5f5]">
          <Image
            style={{
              height: 310,
              width: '100%',
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
            className="shadow-xl "
            source={{
              uri: `${environmentVariables?.apiUrl}/uploads/vendor/product/${resProductData?.variation_arr?.[0]?.product_images_arr?.[0]?.image}`,
            }}
          />
          <View className="px-4 pt-4">
            <View className="flex flex-row justify-between mt-3">
              <View className="flex flex-col">
                <Text
                  className="font-[Poppins-SemiBold] w-3/2 text-[#00274d]"
                  style={{lineHeight: 25, letterSpacing: 0.13, fontSize: 20}}>
                  {resProductData?.title}
                </Text>
                <Text
                  className="text-[#7e84a3]"
                  style={{lineHeight: 20, fontSize: 13, letterSpacing: 0.08}}>
                  {resProductData?.brandObj?.title}
                </Text>
              </View>
              <View className="flex flex-row justify-center mt-2 gap-x-1">
                <Text className="text-[#f96900] text-[10px] font-[Poppins-Medium]">
                  4.5
                </Text>
                <FontAwesome name="star" size={11} color="#ffd500" />
                <FontAwesome name="star" size={11} color="#ffd500" />
                <FontAwesome name="star" size={11} color="#ffd500" />
                <FontAwesome name="star" size={11} color="#ffd500" />
                <FontAwesome name="star-half" size={11} color="#ffd500" />
              </View>
            </View>
            <View className="flex flex-col my-2">
              <View className="flex flex-row items-center">
                <Text className="text-[#f96900] font-[Poppins-SemiBold] text-[20px]">
                  {selectedPrice}
                </Text>
                <Text className="text-[#f96900] font-[Poppins-SemiBold] text-[8px]">
                  AED
                </Text>
              </View>
              <Text
                className="text-[#7e84a3] text-[10px] relative top-[-10px] font-[Poppins-Regular]"
                style={{letterSpacing: 0.06}}>
                Price Per Unit
              </Text>
              <Text
                className="text-[#7e84a3] text-[13px] relative top-[-12px] font-[Poppins-Regular]"
                style={{letterSpacing: 0.06}}>
                Minimum Order Qty : 50 Unit
              </Text>
            </View>
            <View className="flex flex-col">
              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-row">
                  <Text
                    className="text-[#00274d]"
                    style={{fontFamily: 'Poppins-Bold'}}>
                    Color :
                  </Text>
                  <Text
                    className="text-[#00274d]"
                    style={{fontFamily: 'Poppins-Regular'}}>
                    Black
                  </Text>
                </View>
                <Text
                  className="text-[#7e84a3] text-[10px]"
                  style={{fontFamily: 'Poppins-Regular'}}>
                  Available Color : 4
                </Text>
              </View>
              <View className="flex flex-row items-center gap-x-3">
                <View className="p-1 border rounded-full">
                  <View className="w-1 h-1 p-2 bg-[#3c3f3e] rounded-full shadow-xl shadow-gray-400"></View>
                </View>
                <View className="w-1 h-1 p-2 bg-white rounded-full shadow-xl shadow-gray-400"></View>
                <View className="w-1 h-1 p-2 bg-[#f0142f] rounded-full shadow-xl shadow-gray-400"></View>
                <View className="w-1 h-1 p-2 bg-[#0058ff] rounded-full shadow-xl shadow-gray-400"></View>
              </View>
              <View className="flex flex-row items-center justify-between"></View>
            </View>
            <View className="flex flex-row items-center justify-between mt-3">
              <Text
                className="text-[#00274d]"
                style={{fontFamily: 'Poppins-Bold'}}>
                Sizes
              </Text>
              <View className="flex flex-row items-center gap-x-1">
                <Text
                  className="text-[#f96900]"
                  style={{fontFamily: 'Poppins-Regular', fontSize: 10}}>
                  Size Guide
                </Text>
                <View className="px-[8.5px] text-center items-center flex justify-center  bg-gray-300 rounded-full">
                  <Text
                    className="text-[#f96900] relative top-[1px] flex items-center justify-center"
                    style={{fontFamily: 'Poppins-Bold', fontSize: 13}}>
                    !
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex flex-row justify-around mt-1.5">
              {resProductData?.variation_arr?.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleSelect(index)}
                  className={
                    selectedIndex === index
                      ? ' w-14 text-center py-2 bg-[#f96900] text-white rounded-lg'
                      : ' w-14 text-center py-2 border border-[#7e84a3] bg-white rounded-lg'
                  }>
                  <Text
                    className={
                      selectedIndex === index
                        ? 'text-white text-center'
                        : 'text-[#cbcbcb] text-center'
                    }>
                    {item?.input_field} {item?.variationObj?.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View className="my-3">
              <Text
                className="text-[#00274d]"
                style={{fontFamily: 'Roboto-Bold'}}>
                Product Details
              </Text>
              <View className="mt-1.5">
                <Text className="text-[#7e84a3] text-[10px] font-[Poppins-Light]">
                  {resProductData?.description}
                </Text>
                {/* <View className="flex flex-row items-center gap-x-2 ">
                <View className="w-1.5 h-1.5 bg-[#7e84a3] rounded-full"></View>
                <Text className="text-[#7e84a3] text-[10px] font-[Poppins-Light]">
                  Lorem Ipsum is simply dummy text
                </Text>
              </View>
              <View className="flex flex-row items-center gap-x-2 ">
                <View className="w-1.5 h-1.5 bg-[#7e84a3] rounded-full"></View>
                <Text className="text-[#7e84a3] text-[10px] font-[Poppins-Light]">
                  Lorem Ipsum is simply dummy text of the printing
                </Text>
              </View> */}
              </View>

              <View className="p-2 mt-2">
                <View className="flex flex-row items-center">
                  <View className="w-[10%]">
                    <SvgUri width={24} height={24} source={marker} />
                  </View>
                  <View className="w-[90%]">
                    <View className="flex flex-col justify-center">
                      <Text
                        className="text-[#00274d] font-[Poppins-Regular] text-[13px]"
                        style={{letterSpacing: 0.08}}>
                        Deliver to Lorem Ipsum
                      </Text>
                      <Text
                        className="text-[#7e84a3] font-[Poppins-Light] text-[10px]"
                        style={{letterSpacing: 0.08}}>
                        Shipping is negotiable. Contact vendor for more
                        information
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Text className="text-[#00274d]  px-3 font-[Poppins-Bold]">
              Related Products
            </Text>
            <ScrollView
              ref={scrollViewRef}
              horizontal
              className="pl-2"
              showsHorizontalScrollIndicator={false}
              onContentSizeChange={width => setContentWidth(width)}
              style={{flexDirection: 'row', marginTop: 10, gap: 8}}>
              {resRelatedProductData?.map((item, index) => (
                <View
                  key={index}
                  className="flex flex-col mr-2  bg-white rounded-lg shadow shadow-gray-400 p-1.5">
                  <Image
                    style={{height: 114, width: 140}}
                    className=""
                    source={{
                      uri: `${environmentVariables?.apiUrl}/uploads/vendor/product/${item?.variation_arr?.[0]?.product_images_arr?.[0]?.image}`,
                    }}
                  />
                  <Text
                    className="text-[#7e84a3] pl-2 font-[Poppins-SemiBold] text-[8px]"
                    style={{fontSize: 8}}>
                    {item.title}
                  </Text>
                  <Text
                    className="text-[#f0142f] pl-2 font-[Poppins-SemiBold] "
                    style={{fontSize: 10}}>
                    {item?.variation_arr?.[0]?.price} AED
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
          <View className="flex flex-row items-center justify-between w-full px-4 mt-5">
            <View className="w-[20%] border flex border-[#7e84a3] items-center text-center p-1.5 rounded-lg">
              <TouchableOpacity
                onPress={() => addToCart(resProductData, selectedIndex)}>
                {loader2 ? (
                  <ActivityIndicator />
                ) : (
                  <MaterialIcons
                    name="add-shopping-cart"
                    size={30}
                    color="#7e84a3"
                  />
                )}
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              className="z-50 w-[75%] rounded-xl "
              style={styles.button}
              onPress={() => buyNowAction(resProductData, selectedIndex)}>
              <Text
                className="text-white text-[20px]"
                style={{fontFamily: 'Roboto-Regular'}}>
                {loader3 ? <ActivityIndicator /> : 'BUY NOW'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F96900',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    color: 'red',
  },
});
