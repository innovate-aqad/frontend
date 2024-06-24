import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import marker from '../../../Assets/image/myaccount/marker_1.svg';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import SvgUri from 'react-native-svg-uri';
import {Divider} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Card} from 'react-native-paper';
import {POPPINS, ROBOTO} from '../../../constants/CustomFontFamily';
import {blue, screenBackground} from '../../../constants/Theme';
import {retrieveToken} from '../../EncryptionDecryption/Token';
import {environmentVariables} from '../../../../config/Config';
import axios from 'axios';
import {success} from '../../../constants/ToastMessage';

const OutletCard = ({
  index,
  data,
  handleChange,
  handleBlur,
  onEdit,
  onDelete,
}) => {
  return (
    <ScrollView>
      <Card style={styles.card}>
        <Card.Content className="">
          <Text style={styles.heading}>{`Outlet Address (${index + 1})`}</Text>

          <TextInput
            style={styles.input}
            placeholderTextColor="#7e84a3"
            placeholder="Enter Outlet Address"
            value={data.address}
            onChangeText={handleChange(`address${index}`)}
            onBlur={handleBlur(`address${index}`)}
          />
          <Text style={styles.label}>PO Box_098</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#7e84a3"
            placeholder="Enter PO Box"
            value={data.po_box}
            onChangeText={handleChange(`po_box${index}`)}
            onBlur={handleBlur(`po_box${index}`)}
          />
          <View style={styles.iconContainer}>
            <View style={styles.iconEditdel}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 6,
                }}
                onPress={() => onDelete(index)}>
                <Image
                  style={{height: 18, width: 15, tintColor: '#f0142f'}}
                  source={require('../../../Assets/image/trash.png')}
                />
                <Text
                  style={{
                    fontFamily: ROBOTO.RobotoRegular,
                    color: '#f0142f',
                    fontSize: 12,
                  }}>
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
            {/* <View style={styles.iconEdit}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 6,
                }}
                onPress={() => onEdit(index)}>
                <Image
                  style={{height: 18, width: 18, tintColor: '#0058ff'}}
                  source={require('../../../Assets/image/vendor/edit.png')}
                />
                <Text
                  style={{
                    fontFamily: ROBOTO.RobotoRegular,
                    color: '#0058ff',
                    fontSize: 12,
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const OutletList = ({outlets, handleChange, handleBlur, onEdit, onDelete}) => {
  console.log('outlets', outlets);
  return (
    <FlatList
      data={outlets}
      renderItem={({item, index}) => (
        <OutletCard
          index={index}
          data={item}
          handleChange={handleChange}
          handleBlur={handleBlur}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    backgroundColor: '#FFF',
    borderRadius: 15,
    shadowColor: screenBackground,
  },
  heading: {
    color: blue,
    fontFamily: POPPINS.PoppinsMedium,
    fontSize: 13,
    marginBottom: 10,
  },
  label: {
    color: blue,
    fontFamily: 'Poppins-Medium',
    marginBottom: 8,
    fontSize: 13,
  },
  input: {
    backgroundColor: screenBackground,
    borderColor: screenBackground,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 7,
    fontFamily: 'Poppins-Light',
    marginBottom: 16,
    fontSize: 11,
    color: 'red',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  iconEdit: {
    height: 35,
    width: 100,
    borderRadius: 5,
    backgroundColor: '#E6EEFF',
    alignItems: 'center',
  },
  iconEditdel: {
    height: 35,
    width: 100,
    borderRadius: 5,
    backgroundColor: '#FDDCE0',
    alignItems: 'center',
  },
  buttonAddVendor: {
    backgroundColor: '#F96900', // Default button color
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
    font: 'Roboto-Regular',
    fontSize: 20,
  },
});

const MainComponent = () => {
  const data = [{address: '', po_box: '', is_default: false}];
  const [outlets, setOutlets] = useState(data);

  // const handleChange = name => text => {
  //   const [field, index] = name.match(/[a-zA-Z]+|[0-9]+/g);
  //   setOutlets(prevOutlets => {
  //     const newOutlets = [...prevOutlets];
  //     newOutlets[index][field] = text;
  //     return newOutlets;
  //   });
  // };

  const handleChange = name => text => {
    const [field, index] = name.split(/(\d+)/).filter(Boolean);
    setOutlets(prevOutlets => {
      const newOutlets = [...prevOutlets];
      newOutlets[index][field] = text;
      return newOutlets;
    });
  };
  const handleBlur = name => () => {
    // Handle blur event if needed
  };

  const handleEdit = index => {
    // Handle edit event if needed
  };

  const handleDelete = index => {
    setOutlets(prevOutlets => prevOutlets.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    setOutlets(prevOutlets => [
      ...prevOutlets,
      {address: '', po_box: '', is_default: false},
    ]);
  };

  const [resOutletData, setOutletData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState();

  const showMenu = index => {
    if (show === index) {
      setShow();
    } else {
      setShow(index);
    }
  };

  const getOutletData = async () => {
    const storedToken = await retrieveToken();

    try {
      setLoader(true);
      const getData = await axios.get(
        `${environmentVariables?.apiUrl}/api/user/get_warehouse_or_retailer_address`,
        {
          headers: {
            _token: storedToken,
          },
        },
      );
      if (getData?.data?.success) {
        setLoader(false);
        const outletDataRes = getData?.data?.data;

        setOutletData(outletDataRes);
      } else {
        setLoader(false);

        setOutletData([]);
      }
    } catch (error) {
      setLoader(false);
      console.log(error);
      setOutletData([]);
    }
  };

  console.log('ewwwwwwwwww', resOutletData);

  useEffect(() => {
    getOutletData();
  }, []);

  const handleSubmit = async () => {
    const storedToken = await retrieveToken();
    console.log('Submitted Data:', outlets, storedToken);
    let data = JSON.stringify({
      arr: outlets,
    });
    try {
      let config = {
        method: 'post',
        url: `${environmentVariables?.apiUrl}/api/user/add_edit_warehouse_or_retailer_address_data`,
        headers: {
          _token: storedToken,
          'Content-Type': 'application/json',
        },
        data: data,
      };

      axios
        .request(config)
        .then(response => {
          console.log(response.data, 'popopop');
          getOutletData();
          setOutlets([{address: '', po_box: '', is_default: false}]);
          success({
            type: 'success',
            text: response?.data?.message,
          });
        })
        .catch(error => {
          success({
            type: 'error',
            text: error?.response?.data?.message || error?.message,
          });
        });
    } catch (error) {
      console.log('123123123', error?.response?.data?.message, error?.message);
      success({
        type: 'error',
        text: error?.response?.data?.message || error?.message,
      });
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <View>
        {loader ? (
          <ActivityIndicator />
        ) : resOutletData?.length == 0 ? (
          <Text>No Any Outlet added</Text>
        ) : (
          resOutletData?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                // className={
                //   !(show == index)
                //     ? 'flex flex-row mx-0 items-center justify-center'
                //     : 'flex flex-row items-center justify-center'
                // }
              >
                <View className="p-2.5 mt-2 bg-[#f96900] rounded-lg">
                  <View className="flex flex-row">
                    <View className="w-[10%] text-blue-500">
                      <SvgUri
                        width={24}
                        height={24}
                        source={marker}
                        fill="white"
                      />
                    </View>
                    <View className="w-[90%]">
                      <View className="flex flex-row">
                        <Text
                          className="text-white font-[Poppins-Bold] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          Outlet {index}
                        </Text>
                      </View>
                      <View className="flex flex-row">
                        <Text
                          className="text-white font-[Poppins-Light] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          Po Box
                        </Text>
                        <Text
                          className="text-white pl-6 pr-3 font-[Poppins-Light] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          :
                        </Text>
                        <Text
                          className="text-white font-[Poppins-Regular] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          {item?.po_box}
                        </Text>
                      </View>
                      <View className="flex flex-row">
                        <Text
                          className="text-white font-[Poppins-Light] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          Location
                        </Text>
                        <Text
                          className="text-white pl-2.5 pr-3 font-[Poppins-Light] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          :
                        </Text>
                        <Text
                          className="text-white w-2/3 font-[Poppins-Regular] text-[13px]"
                          style={{letterSpacing: 0.08}}>
                          {item?.address}
                        </Text>
                        <TouchableOpacity
                          onPress={() => showMenu(index)}
                          className="mt-3">
                          <Entypo
                            name="dots-three-vertical"
                            size={20}
                            color="#cbcbcb"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View
                    className={
                      !(show == index) ? 'hidden' : 'flex flex-row mr-[80px] '
                    }>
                    <View className="flex flex-row items-center gap-2 ml-2">
                      <TouchableOpacity
                        className="p-3 bg-red-100 rounded-xl"
                        onPress={() => DeleteOutlet(item)}>
                        <Image
                          style={{
                            tintColor: '#df6886',
                            height: 17,
                            width: 17,
                          }}
                          source={require('../../../Assets/image/trash.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View>
                    <Divider className="bg-[#e6e9f4] my-2"></Divider>
                    <View className="flex flex-row items-center">
                      <Text className="text-white px-2 text-[10px] font-[Poppins-Medium]">
                        Select Outlet
                      </Text>
                      <MaterialCommunityIcons
                        name="greater-than"
                        size={14}
                        color="white"
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })
        )}
      </View>

      <OutletList
        outlets={outlets}
        handleChange={handleChange}
        handleBlur={handleBlur}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <TouchableOpacity onPress={handleAdd}>
        <View className="w-24 p-2 text-center bg-[#f96900] items-center justify-center flex flex-row rounded-[5px] mt-2">
          <MaterialIcons name="add" size={18} color="white" />
          <Text className="ml-2 text-center text-white font-[Roboto-Regular] text-[12px]">
            Add
          </Text>
        </View>
      </TouchableOpacity>

      <View className="pt-5">
        <TouchableOpacity
          onPress={() => handleSubmit()}
          style={styles.buttonAddVendor}>
          <Text
            className="text-white "
            style={{
              fontFamily: 'Poppins-SemiBold',
              textTransform: 'uppercase',
            }}>
            Save changes
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainComponent;
