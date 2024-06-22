import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import marker from '../../../Assets/image/myaccount/marker_1.svg';
import {POPPINS, ROBOTO} from '../../../constants/CustomFontFamily';

import SvgUri from 'react-native-svg-uri';
import {Divider} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {retrieveToken} from '../../../Shared/EncryptionDecryption/Token';
import {environmentVariables} from '../../../../config/Config';
import axios from 'axios';
import {success} from '../../../constants/ToastMessage';

export default function Checkout(nav) {
  const overAllAmount = nav?.route?.params?.overAllAmount;
  const cartData = nav?.route?.params?.cartData;
  const type = nav?.route?.params?.type;
  // const individialQuantity = nav?.route?.params?.quantity;
  // const stock = nav?.route?.params?.stock;
  const variationDetails = nav?.route?.params?.variationDetails;
  const [quantities, setQuantities] = useState({});
  const [resCartData, setResCartData] = useState([]);
  const [resOutletData, setOutletData] = useState();
  const [stock, setStock] = useState(nav?.route?.params?.stock);
  const [individialQuantity, setIndividialQuantity] = useState(
    nav?.route?.params?.quantity,
  );
  const [buyNowAmount, setBuyNowAmount] = useState(overAllAmount);
  // console.log(
  //   overAllAmount,
  //   'checkout',
  //   cartData,
  //   'quantity',
  //   individialQuantity,
  //   'variationDetails_variationDetails_variationDetails_variationDetails_variationDetails_variationDetails',
  //   variationDetails,
  // );

  const getCartData = async () => {
    const storedToken = await retrieveToken();

    try {
      // setLoader(true);
      const getData = await axios.get(
        `${environmentVariables?.apiUrl}/api/cart/fetch_data`,
        {
          headers: {
            _token: storedToken,
          },
        },
      );
      // console.log('9999999', getData?.data?.data);
      if (getData?.data?.success) {
        const cartDataRes = getData?.data?.data;

        setResCartData(cartDataRes);

        setQuantities(
          cartDataRes.reduce((acc, item) => {
            acc[item.id] = item.quantity;
            return acc;
          }, {}),
        );
        // setLoader(false);
      } else {
        setResCartData([]);
        // setLoader(false);
      }
    } catch (error) {
      // setLoader(false);
      setResCartData([]);
      // console.log(error?.response?.data?.message, error?.message, 'eroorr113');
    }
  };
  const getOutletData = async () => {
    const storedToken = await retrieveToken();

    try {
      // setLoader(true);
      const getData = await axios.get(
        `${environmentVariables?.apiUrl}/api/user/get_warehouse_or_retailer_address`,
        {
          headers: {
            _token: storedToken,
          },
        },
      );
      if (getData?.data?.success) {
        const outletDataRes = getData?.data?.data;
        const defaultAddress = outletDataRes.find(
          address => address.is_default,
        );

        setOutletData(defaultAddress);
      } else {
        setOutletData();
      }
    } catch (error) {
      setOutletData();
    }
  };

  useEffect(() => {
    getCartData();
    getOutletData();
  }, []);
  const updateData = (id, newQuantity) => {
    let newData = [...resCartData];
    newData.forEach(val => {
      if (val.id == id) {
        val.quantity = newQuantity;
      }
    });
    setResCartData(newData);
  };

  const updateQuantity = async (quantity, product_id, variant_id, id) => {
    const storedToken = await retrieveToken();
    const config = {
      method: 'post',
      url: `${environmentVariables?.apiUrl}/api/cart/add`,
      headers: {
        _token: storedToken,
      },
      data: {
        product_id: product_id,
        variant_id: variant_id,
        quantity: quantity,
      },
    };

    axios
      .request(config)
      .then(response => {
        updateData(id, quantity);
        // console.log('dddd', response?.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleIncrement = (item, type) => {
    if (type == 'buynow') {
      console.log(item, individialQuantity + 1, type, 'iii');
      const availableQuantity = item?.quantity;
      if (individialQuantity < availableQuantity) {
        setIndividialQuantity(prev => {
          const newQuantity = prev + 1;
          updateQuantity(newQuantity, item.product_id, item.variation, item.id);
          return newQuantity;
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Stock Exceeded',
          text2: 'You have exceeded the available stock.',
        });
      }
    } else {
      setQuantities(prev => {
        const newQuantities = {...prev};
        const availableQuantity = item.variantObj.warehouse_arr.reduce(
          (sum, warehouse) => sum + Number(warehouse.quantity),
          0,
        );
        const currentQuantity = Number(newQuantities[item.id]);
        if (currentQuantity < availableQuantity) {
          newQuantities[item.id] = currentQuantity + 1;
          updateQuantity(
            newQuantities[item.id],
            item.product_id,
            item.variant_id,
            item?.id,
          );
        } else {
          success({
            type: 'success',
            text: 'You have exceeded the available stock.',
          });
        }
        return newQuantities;
      });
    }
  };

  const handleDecrement = item => {
    // console.log(item?.product_id, item?.variant_id);
    if (type == 'buynow') {
      console.log(item?.product_id, item?.variant_id);
      if (individialQuantity > 1) {
        setIndividialQuantity(prev => {
          const newQuantity = prev - 1;
          updateQuantity(newQuantity, item.product_id, item.variation, item.id);
          return newQuantity;
        });
      }
    } else {
      setQuantities(prev => {
        const newQuantities = {...prev};
        const currentQuantity = Number(newQuantities[item.id]);
        if (currentQuantity > 1) {
          newQuantities[item.id] = currentQuantity - 1;
          updateQuantity(
            newQuantities[item.id],
            item.product_id,
            item.variant_id,
            item?.id,
          );
        }
        return newQuantities;
      });
    }
  };
  const calculateTotal = type => {
    if (type == 'buynow') {
      return individialQuantity * buyNowAmount;
    } else {
      return resCartData.reduce((sum, item) => {
        const quantity = Number(quantities[item.id]) || 1; // Convert to number
        return sum + item.variantObj.price * quantity;
      }, 0);
    }
  };
  // console.log(
  //   'rrrrrrrrrrwwwwwwww',
  //   cartData?.variation_arr?.[0]?.product_images_arr?.[0]?.image,
  // );

  return (
    <SafeAreaView>
      <ScrollView>
        {type == 'buynow' ? (
          <View
            // key={index}
            className="flex flex-row w-full  mt-1.5 bg-white shadow rounded-xl">
            <View className="w-[25%]">
              <Image
                style={{height: 80, width: 80}}
                source={{
                  uri: `${environmentVariables?.apiUrl}/uploads/vendor/product/${cartData?.variation_arr?.[0]?.product_images_arr?.[0]?.image}`,
                }}
              />
            </View>
            <View className="flex w-[75%]  flex-row items-center justify-around">
              <View className="flex flex-col justify-between gap-y-2">
                <View className="flex flex-col">
                  <Text
                    className="text-[#5a607f]"
                    style={{fontFamily: ROBOTO.RobotoBold, fontSize: 12}}>
                    {cartData?.title}
                  </Text>
                  <Text
                    className="text-[#92939c] relative top-[-3px] w-[55px]"
                    style={{
                      fontFamily: ROBOTO.RobotoRegular,
                      fontSize: 8,
                    }}>
                    {cartData?.categoryObj?.title}
                  </Text>
                </View>
                <View className="flex flex-row items-center gap-x-1.5 ">
                  <TouchableOpacity
                    className="bg-[#f7dcc8] h-[18px] w-[18px] flex items-center justify-center rounded-full"
                    onPress={() => handleDecrement(variationDetails, 'buynow')}
                    disabled={individialQuantity == 1}
                    style={{opacity: individialQuantity == 1 ? 0.5 : 1}}>
                    <Text className="text-[#f9e4d5] ">
                      <Entypo name="minus" size={14} color="#f96900" />
                    </Text>
                  </TouchableOpacity>
                  <Text
                    className="text-[#00274d] text-[15px]"
                    style={{fontFamily: POPPINS.PoppinsRegular}}>
                    {individialQuantity}
                  </Text>
                  <TouchableOpacity
                    className="bg-[#f7dcc8] h-[18px] w-[18px] flex items-center justify-center rounded-full"
                    onPress={() => handleIncrement(variationDetails, 'buynow')}
                    disabled={individialQuantity >= stock}
                    style={{
                      opacity: individialQuantity >= stock ? 0.5 : 1,
                    }}>
                    <Text className="text-[#f9e4d5] ">
                      <Entypo name="plus" size={14} color="#f96900" />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex items-center justify-center">
                <Text
                  className="text-[#f96900] pb-3 text-[15px]"
                  style={{fontFamily: ROBOTO.RobotoMedium}}>
                  {calculateTotal(type)} AED
                </Text>
              </View>
              <View>
                <Entypo name="dots-three-vertical" size={20} color="#cbcbcb" />
              </View>
            </View>
          </View>
        ) : (
          resCartData?.map((item, index) => {
            const availableQuantity = item.variantObj.warehouse_arr.reduce(
              (sum, warehouse) => sum + Number(warehouse.quantity),
              0,
            );
            const currentQuantity = quantities[item.id] || 1;
            // console.log(
            //   '343434',
            //   availableQuantity,
            //   currentQuantity,
            //   item.variantObj.price,
            // );
            return (
              <View
                key={index}
                className="flex flex-row w-full  mt-1.5 bg-white shadow rounded-xl">
                <View className="w-[25%]">
                  <Image
                    style={{height: 80, width: 80}}
                    source={{
                      uri: `${environmentVariables?.apiUrl}/uploads/vendor/product/${item?.variantObj?.product_images_arr?.[0]?.image}`,
                    }}
                  />
                </View>
                <View className="flex w-[75%]  flex-row items-center justify-around">
                  <View className="flex flex-col justify-between gap-y-2">
                    <View className="flex flex-col">
                      <Text
                        className="text-[#5a607f]"
                        style={{
                          fontFamily: ROBOTO.RobotoBold,
                          fontSize: 12,
                        }}>
                        {item?.productObj?.title}
                      </Text>
                      <Text
                        className="text-[#92939c] relative top-[-3px] w-[55px]"
                        style={{
                          fontFamily: ROBOTO.RobotoRegular,
                          fontSize: 8,
                        }}>
                        {item?.productObj?.categoryObj?.title}
                      </Text>
                    </View>
                    <View className="flex flex-row items-center gap-x-1.5 ">
                      <TouchableOpacity
                        className="bg-[#f7dcc8] h-[18px] w-[18px] flex items-center justify-center rounded-full"
                        onPress={() => handleDecrement(item)}
                        disabled={currentQuantity == 1}
                        style={{opacity: currentQuantity == '1' ? 0.5 : 1}}>
                        <Text className="text-[#f9e4d5] ">
                          <Entypo name="minus" size={14} color="#f96900" />
                        </Text>
                      </TouchableOpacity>
                      <Text
                        className="text-[#00274d] text-[15px]"
                        style={{fontFamily: POPPINS.PoppinsRegular}}>
                        {currentQuantity}
                      </Text>
                      <TouchableOpacity
                        className="bg-[#f7dcc8] h-[18px] w-[18px] flex items-center justify-center rounded-full"
                        onPress={() => handleIncrement(item)}
                        disabled={currentQuantity >= availableQuantity}
                        style={{
                          opacity:
                            currentQuantity >= availableQuantity ? 0.5 : 1,
                        }}>
                        <Text className="text-[#f9e4d5] ">
                          <Entypo name="plus" size={14} color="#f96900" />
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View className="flex items-center justify-center">
                    <Text
                      className="text-[#f96900] pb-3 text-[15px]"
                      style={{fontFamily: ROBOTO.RobotoMedium}}>
                      {item.variantObj.price * currentQuantity} AED
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
              </View>
            );
          })
        )}

        <View className="flex flex-col mb-10 h-screen p-4 bg-[#f5f5f5]">
          <Text className="text-[#00274d] font-[Poppins-Bold] text-[13px]">
            Order Summary
          </Text>
          <View className="p-2.5 mt-2 bg-white rounded-lg">
            <View>
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#7e84a3] text-[13px]"
                  style={{letterSpacing: 0.08}}>
                  Subtotal ({type == 'buynow' ? 1 : resCartData?.length})
                </Text>
                <Text
                  className="text-[#7e84a3] text-[13px]"
                  style={{letterSpacing: 0.08}}>
                  {calculateTotal(type)} AED
                </Text>
              </View>
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#7e84a3] text-[13px]"
                  style={{letterSpacing: 0.08}}>
                  VAT & Fees
                </Text>
                <Text
                  className="text-[#7e84a3] text-[13px]"
                  style={{letterSpacing: 0.08}}>
                  0 AED
                </Text>
              </View>
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#7e84a3] text-[13px]"
                  style={{letterSpacing: 0.08}}>
                  Discount
                </Text>
                <Text
                  className="text-[#7e84a3] text-[13px]"
                  style={{letterSpacing: 0.08}}>
                  0 AED
                </Text>
              </View>
              <View className="flex flex-row justify-between mt-3">
                <Text className="text-[#f96900] text[20px] font-[Poppins-Medium]">
                  TOTAL
                </Text>
                <Text className="text-[#f96900] text[20px] font-[Poppins-Medium]">
                  {calculateTotal(type)} AED
                </Text>
              </View>
            </View>
          </View>
          <Text className="text-[#00274d] my-3 font-[Poppins-Bold] text-[13px]">
            Default Outlet
          </Text>
          <View className="p-2.5 mt-2 bg-white rounded-lg">
            <View className="flex flex-row">
              <View className="w-[10%]">
                <SvgUri width={24} height={24} source={marker} />
              </View>
              <View className="w-[90%]">
                <View className="flex flex-row">
                  <Text
                    className="text-[#7e84a3] font-[Poppins-Bold] text-[13px]"
                    style={{letterSpacing: 0.08}}>
                    Outlet 1
                  </Text>
                </View>
                <View className="flex flex-row">
                  <Text
                    className="text-[#7e84a3] font-[Poppins-Light] text-[13px]"
                    style={{letterSpacing: 0.08}}>
                    Po Box
                  </Text>
                  <Text
                    className="text-[#7e84a3] pl-6 pr-3 font-[Poppins-Light] text-[13px]"
                    style={{letterSpacing: 0.08}}>
                    :
                  </Text>
                  <Text
                    className="text-[#00274d] font-[Poppins-Regular] text-[13px]"
                    style={{letterSpacing: 0.08}}>
                    {resOutletData?.po_box}
                  </Text>
                </View>
                <View className="flex flex-row">
                  <Text
                    className="text-[#7e84a3] font-[Poppins-Light] text-[13px]"
                    style={{letterSpacing: 0.08}}>
                    Location
                  </Text>
                  <Text
                    className="text-[#7e84a3] pl-2.5 pr-3 font-[Poppins-Light] text-[13px]"
                    style={{letterSpacing: 0.08}}>
                    :
                  </Text>
                  <Text
                    className="text-[#00274d] w-2/3 font-[Poppins-Regular] text-[13px]"
                    style={{letterSpacing: 0.08}}>
                    {resOutletData?.address}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Divider className="bg-[#e6e9f4] my-2"></Divider>
              <View className="flex flex-row items-center">
                <TouchableOpacity
                  onPress={() => nav.navigation.navigate('outlet')}>
                  <Text className="text-[#f96900] px-2 text-[10px] font-[Poppins-Medium]">
                    Select Outlet
                  </Text>
                </TouchableOpacity>

                <MaterialCommunityIcons
                  name="greater-than"
                  size={14}
                  color="#f96900"
                />
              </View>
            </View>
          </View>

          <Text className="text-[#00274d] my-3 font-[Poppins-Bold] text-[13px]">
            Payment Method
          </Text>

          <View>
            <View className="p-2.5  bg-[#f96900] rounded-lg">
              <Text className="text-white font-[Poppins-Regular] text-[13px]">
                Advance Pay
              </Text>
              <Text className="text-slate-300 text-[10px]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </Text>
            </View>
            <View className="p-2.5 mt-2 bg-white rounded-lg">
              <Text className="text-[#00274d] font-[Poppins-Regular] text-[13px]">
                Pay As You Go
              </Text>
              <Text className="text-[#7e84a3] text-[10px]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </Text>
            </View>
            <View className="p-2.5 mt-2 bg-white rounded-lg">
              <Text className="text-[#00274d] font-[Poppins-Regular] text-[13px]">
                Against Delivery
              </Text>
              <Text className="text-[#7e84a3] text-[10px]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </Text>
            </View>
          </View>

          <TouchableOpacity
            className="z-50 mt-10 rounded-xl "
            onPress={() => nav.navigation.navigate('outlet')}
            style={styles.button}>
            <Text
              className="text-white text-[20px]"
              style={{fontFamily: 'Poppins-Regular'}}>
              PLACE ORDER
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topNavigation: {
    height: 15,
    width: 23.3,
    tintColor: 'white',
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
});
