import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Divider} from 'react-native-paper';
import {btnBackround, screenBackground, white} from '../../../constants/Theme';
import {POPPINS, ROBOTO} from '../../../constants/CustomFontFamily';
import {retrieveToken} from '../../../Shared/EncryptionDecryption/Token';
import axios from 'axios';
import {environmentVariables} from '../../../../config/Config';
import {success} from '../../../constants/ToastMessage';

export default function Cart(nav) {
  const [loader, setLoader] = useState(false);
  const [resCartData, setResCartData] = useState([]);
  const [value, setValue] = React.useState('left');
  const [quantities, setQuantities] = useState({});

  const getCartData = async () => {
    const storedToken = await retrieveToken();

    try {
      setLoader(true);
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
        const cartData = getData?.data?.data;

        setResCartData(cartData);

        setQuantities(
          cartData.reduce((acc, item) => {
            acc[item.id] = item.quantity;
            return acc;
          }, {}),
        );
        setLoader(false);
      } else {
        setResCartData([]);
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
      setResCartData([]);
      // console.log(error?.response?.data?.message, error?.message, 'eroorr113');
    }
  };

  // const handleIncrement = index => {
  //   const updatedCartData = [...resCartData];
  //   console.log(updatedCartData, 'updatedCartData');
  //   updatedCartData[index].quantity =
  //     parseInt(updatedCartData[index].quantity, 10) + 1;
  //   setResCartData(updatedCartData);
  // };

  // const handleDecrement = index => {
  //   const updatedCartData = [...resCartData];
  //   if (updatedCartData[index].quantity > 1) {
  //     updatedCartData[index].quantity =
  //       parseInt(updatedCartData[index].quantity, 10) - 1;
  //     setResCartData(updatedCartData);
  //   }
  // };

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
  const handleIncrement = item => {
    // console.log(item?.product_id, item?.variant_id);
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
  };

  const handleDecrement = item => {
    // console.log(item?.product_id, item?.variant_id);
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
  };

  const calculateTotal = () => {
    return resCartData.reduce((sum, item) => {
      const quantity = Number(quantities[item.id]) || 1; // Convert to number
      return sum + item.variantObj.price * quantity;
    }, 0);
  };

  const DeleteProductFromcart = async item => {
    try {
      const storedToken = await retrieveToken();
      const data = {
        product_id: item?.product_id,
        variant_id: item?.variant_id,
      };
      let config = {
        method: 'delete',
        url: `${environmentVariables?.apiUrl}/api/cart/delete_from_cart`,
        headers: {
          _token: storedToken,
        },
        data: data,
      };

      const response = await axios(config);
      // console.log('rrrrrrrrrrr', response?.data);
      if (response?.data?.success) {
        getCartData();
        success({
          type: 'success',
          text: response?.data?.message,
        });
      } else {
        success({
          type: 'success',
          text: response?.data?.message,
        });
      }
    } catch (error) {
      success({
        type: 'success',
        text: error?.response?.data?.message,
      });
    }
  };
  const EmptyCart = async () => {
    try {
      const storedToken = await retrieveToken();
      let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `${environmentVariables?.apiUrl}/api/cart/empty_cart`,
        headers: {
          _token: storedToken,
        },
      };

      const response = await axios(config);
      // console.log('dfdsfsdf', response?.data);
      if (response?.data?.success) {
        getCartData();
        success({
          type: 'success',
          text: response?.data?.message,
        });
      } else {
        success({
          type: 'success',
          text: response?.data?.message,
        });
      }
    } catch (error) {
      success({
        type: 'success',
        text: error?.response?.data?.message,
      });
    }
  };

  useEffect(() => {
    getCartData();
  }, []);
  return (
    <ScrollView>
      <View
        className="w-full h-full"
        style={{backgroundColor: screenBackground}}>
        <View className="p-4">
          <View className="flex flex-row w-full bg-gray-200 rounded-full">
            <TouchableOpacity
              onPress={() => setValue('left')}
              className="w-[50%] h-[39px]"
              //  style={styles.button}

              style={[
                styles.button,
                value === 'left' && styles.selectedToggleButton,
              ]}>
              <Text
                className={value === 'left' ? 'text-white' : 'text-[#00274D]'}
                style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>
                All ({resCartData.length})
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="w-[50%] h-[39px]"
              onPress={() => setValue('right')}
              style={[
                styles.button,
                value === 'right' && styles.selectedToggleButton,
              ]}>
              <Text
                className={value === 'right' ? 'text-white' : 'text-[#00274D]'}
                style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>
                History
              </Text>
            </TouchableOpacity>
          </View>
          <View className="mt-3">
            <Text
              className="text-[#00274d] px-2"
              style={{fontFamily: ROBOTO.RobotoBold, fontSize: 13}}>
              My Orders
            </Text>
          </View>
          <View className="mt-3">
            {loader ? (
              <ActivityIndicator />
            ) : resCartData?.length == 0 ? (
              <View>
                <Text>You dont have any product in Cart</Text>
              </View>
            ) : (
              resCartData?.map((item, index) => {
                const availableQuantity = item.variantObj.warehouse_arr.reduce(
                  (sum, warehouse) => sum + Number(warehouse.quantity),
                  0,
                );
                const currentQuantity = quantities[item.id] || 1;
                // console.log('343434', availableQuantity, currentQuantity);
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
                      <TouchableOpacity
                        onPress={() => DeleteProductFromcart(item)}>
                        <Text>Remove</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => EmptyCart()}>
                        <Text>Empty</Text>
                      </TouchableOpacity>
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
          </View>

          <Divider className="text-[#dcdcdf] my-4" />

          <View className="">
            <Text
              className="text-[#00274d]"
              style={{fontFamily: ROBOTO.RobotoBold, fontSize: 13}}>
              Order Summary
            </Text>

            <View>
              <View className="flex flex-row mt-3 justify-between">
                <Text
                  className="text-[#7e84a3] text-[13px]"
                  style={{
                    letterSpacing: 0.08,
                    fontFamily: POPPINS.PoppinsRegular,
                  }}>
                  Subtotal ({resCartData.length})
                </Text>
                <Text
                  className="text-[#7e84a3] text-[13px]"
                  style={{
                    letterSpacing: 0.08,
                    fontFamily: POPPINS.PoppinsRegular,
                  }}>
                  {calculateTotal()} AED
                </Text>
              </View>
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#7e84a3] text-[13px]"
                  style={{
                    letterSpacing: 0.08,
                    fontFamily: POPPINS.PoppinsRegular,
                  }}>
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
            </View>
          </View>
          <Divider className="text-[#dcdcdf] my-4" />
          <View className="flex flex-row justify-between">
            <Text
              className="text-[#f96900] font-[Poppins-Medium]"
              style={{fontSize: 20}}>
              TOTAL
            </Text>
            <Text
              className="text-[#f96900] font-[Poppins-Medium]"
              style={{fontSize: 20}}>
              {calculateTotal()} AED
            </Text>
          </View>

          <TouchableOpacity
            className="z-50 mt-10 rounded-xl "
            onPress={() => nav.navigation.navigate('checkout')}
            style={{
              backgroundColor: btnBackround,
              padding: 10,
              borderRadius: 30,
              alignItems: 'center',
              color: 'red',
            }}>
            <Text
              className="text-white"
              style={{fontFamily: 'Roboto-Regular', fontSize: 20}}>
              CHECK OUT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topNavigation: {
    height: 15,
    width: 23.3,
    tintColor: 'white',
  },
  button: {
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    color: 'white',
  },
  button1: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    color: 'red',
  },
  selectedToggleButton: {
    backgroundColor: '#F96900',
    borderColor: '#F96900',
    color: '#000',
  },
});
