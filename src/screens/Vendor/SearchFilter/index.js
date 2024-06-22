import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  blue,
  grayColor,
  lightGray,
  textColorCustom,
  white,
} from '../../../constants/Theme';
import {Divider, shadow} from 'react-native-paper';
import {POPPINS, ROBOTO} from '../../../constants/CustomFontFamily';
import {Card} from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = [
  {id: '1', title: 'Small Frozen Gloves'},
  {id: '2', title: 'Handcrafted Wooden Fish'},
  {id: '3', title: 'Ergonomic Wooden Chair'},
  {id: '4', title: 'Ergonomic Wooden Chair'},
  {id: '5', title: 'Incredible Concrete Chair'},
];
const dataRecommended = [
  'Denim Jeans',
  'Jacket',
  'Sports Accessories',
  'Cup',
  'Rubber Mouse',
  'Granite Soap',
  'Ring',
  'Soft Towels',
];
const HistoryList = () => {
  const renderItem = ({item}) => (
    <View>
      <View className="flex flex-row items-center justify-between mt-3 ">
        <View className="flex flex-row items-center">
          <Entypo name="back-in-time" size={22} color="#cbcbcb" />
          <Text
            style={{
              color: grayColor,
              marginLeft: 8,
              fontSize: 13,
              fontFamily: POPPINS.PoppinsRegular,
            }}>
            {/* Small Frozen Gloves */}
            {item.title}
          </Text>
        </View>
        <AntDesign name="close" size={15} color={'#7E84A3'} />
      </View>
      {item.id === '5' ? null : (
        <Divider style={{marginTop: 10, backgroundColor: '#e6e9f4'}} />
      )}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};
const RecommendedFun = () => {
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{}} className="">
      <FlatList
        data={dataRecommended}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};


// any time of value then start filter and search start 

const data1 = [
  {id: '1', title: 'Small Frozen Gloves'},
  {id: '2', title: 'Handcrafted Wooden Fish'},
  {id: '3', title: 'Ergonomic Wooden Chair'},
  {id: '4', title: 'Ergonomic Wooden Chair'},
  {id: '5', title: 'Incredible Concrete Chair'},
];
const data2 = [
  {
    id: '1',
    productName: 'Rustic Bronze Computer ...',
    orderNumber: '#AQADORDER001',
    timeAgo: '2m ago',
    unitPrice: '50 AED',
    price: '50 AED',
    sku: 'SKU : 575',
    category: 'Grocery',
    image: require('../../../Assets/image/drawable-xhdpi/pngwing_com_9.png'),
  },
  {
    id: '2',
    productName: 'Product 2',
    orderNumber: '#AQADORDER002',
    timeAgo: '5m ago',
    unitPrice: '45 AED',
    price: '45 AED',
    sku: 'SKU : 576',
    category: 'Electronics',
    image: require('../../../Assets/image/drawable-xhdpi/pngwing_com_9.png'),
  },
  {
    id: '3',
    productName: 'Product 3',
    orderNumber: '#AQADORDER003',
    timeAgo: '10m ago',
    unitPrice: '60 AED',
    price: '60 AED',
    sku: 'SKU : 577',
    category: 'Clothing',
    image: require('../../../Assets/image/drawable-xhdpi/pngwing_com_9.png'),
  },
  {
    id: '3',
    productName: 'Product 3',
    orderNumber: '#AQADORDER003',
    timeAgo: '10m ago',
    unitPrice: '60 AED',
    price: '60 AED',
    sku: 'SKU : 577',
    category: 'Clothing',
    image: require('../../../Assets/image/drawable-xhdpi/pngwing_com_9.png'),
  },
];
const SearchValueItemList = () => {
  const renderItem = ({item,index}) => (
    <View key={index}>
      <View className="flex flex-row items-center justify-between mt-3.5 ">
        <View className="flex flex-row items-center">
          <Text
            style={{
              color: lightGray,
              marginLeft: 8,
              fontSize: 13,
              fontFamily: POPPINS.PoppinsRegular,
            }}>
            <Text
            style={{
              color: blue,
              marginLeft: 8,
              fontSize: 13,
              fontFamily: POPPINS.PoppinsRegular,
            }}>
            
            The {" "}
          </Text>
            {item.title}
          </Text>
        </View>
        <Feather name="arrow-up-left" size={19} color={lightGray} />
      </View>
      
    </View>
  );

  return (
    <FlatList
      data={data1}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const CartList = () => {
const renderItem = ({item, index}) => (
  <TouchableOpacity key={index}  style={styles.cardContainer}>
    <Card  className="shadow shadow-gray-200" style={styles.card}>
      <Card.Content className="p-0 pr-3">
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Image style={styles.productImage} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8SfVm34eY9PL3DKdp1bJ0G5zXvQ6CxAiqg&s"}} />
          </View>
          <View style={styles.textContainer}>
            <Text style={{color:grayColor,fontFamily:POPPINS.PoppinsRegular,fontSize:10,letterSpacing:0.3}}>GenieElectro</Text>
            <Text style={[styles.productName,{lineHeight:15}]}>{item.productName}</Text>
            <View>
              <View className="flex flex-row justify-between">
              <Text style={styles.unitPrice}>5945 AED</Text>
              
              <View className="flex flex-row items-center" style={{marginTop:5}}>
                 <View className="flex flex-row ml-1.5">
                <Ionicons name="star" color={"#ffc700"} size={12}  />
                <Ionicons name="star" color={"#ffc700"} size={12}  />
                <Ionicons name="star" color={"#ffc700"} size={12}  />
                <Ionicons name="star" color={"#e6e9f4"} size={12}  />
                <Ionicons name="star" color={"#e6e9f4"} size={12}  />
              </View>
              </View>
              </View>
            </View>
          </View>
        </View>
      </Card.Content>
    </Card>
  </TouchableOpacity>
);

return (
  <FlatList
    data={data2}
    keyExtractor={item => item.id}
    renderItem={renderItem}
  />
);
};
// any time of value then start filter and search End




export default function SearchFilter(nav) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {};

  const handleTextChange = text => {
    setSearchText(text);
    // onSearchValueChange(text);
  };

  console.log(searchText, 'searchText');
  return (
    <View
      style={{
        backgroundColor: white,
        height: windowHeight,
        width: windowWidth,
        padding: 18,
      }}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          // placeholder="Search..."
          underlineColorAndroid="transparent"
          value={searchText}
          placeholderTextColor={'#cbcbcb'}
          keyboardType="default"
          disableFullscreenUI={true}
          onChangeText={handleTextChange}
          onSubmitEditing={handleSearch}
        />

        <TouchableOpacity
          className="flex flex-row items-center gap-x-2"
          onPress={handleSearch}>
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

      {searchText.length > 0 ? 
      
      <View className="mt-2">
        <SearchValueItemList/>
        <Divider style={{marginTop: 15, backgroundColor: '#e6e9f4'}} />
        <View>
        <TouchableOpacity onPress={()=>nav.navigation.navigate("productFilter")}>
          <Text style={{color:blue,fontFamily:ROBOTO.RobotoBold,fontSize:13,marginVertical:10}}>Products kk</Text>
          </TouchableOpacity>
        <CartList/>
        </View>
         </View>
      : (
        <View>
          <View className="mt-5">
            
            <Text style={styles.heading}>History</Text>
            <HistoryList />
            <View className="flex flex-row items-center justify-center mx-auto mt-3">
              <Text
                style={{
                  color: textColorCustom,
                  fontSize: 10,
                  fontFamily: ROBOTO.RobotoRegular,
                }}>
                Clear All Search History
              </Text>
              <AntDesign
                name="arrowright"
                style={{marginLeft: 6}}
                size={12}
                color={textColorCustom}
              />
            </View>
          </View>
          <View className="mt-5">
            <Text style={styles.heading}>Recommended</Text>
            <RecommendedFun />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 0,
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#f5f5f5',
    borderColor: '#f5f5f5',
    paddingRight: 5,
    color: grayColor,
    borderWidth: 2,
    marginLeft: 5,
  },
  heading: {
    color: blue,
    fontSize: 13,
    fontFamily: ROBOTO.RobotoBold,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  row: {
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 0.5,
  },
  buttonText: {
    color: blue,
    fontFamily: ROBOTO.RobotoRegular,
    fontSize: 12,
  },




  cardContainer: {
    marginVertical: 4,
  },
  card: {
    justifyContent: 'left',
    alignItems: 'left',
    backgroundColor:white,
    
    
  },
  cardOpen: {
    // marginHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    left: -12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#FDEEE3',
    height: 80,
    width: 80,
    borderRadius: 15,
    justifyContent: 'left',
    alignItems: 'left',
    alignItems:"center",
    justifyContent:"center"
  },
  productImage: {
    height: 80,
    width: 80,
    borderRadius:15,
    alignItems: 'left',
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  productName: {
    color: blue,
    fontSize: 13,
    fontFamily: POPPINS.PoppinsMedium,
    letterSpacing: 0.08,
    marginTop:5
  },
  infoRow: {
    flexDirection: 'row',
    gap: 2,
  },
  orderNumber: {
    color: grayColor,
    fontSize: 8,
    letterSpacing:0.24,
    fontFamily: POPPINS.PoppinsRegular,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
  dot: {
    backgroundColor: grayColor,
    borderRadius: 2,
    height: 3,
    width: 3,
    marginLeft:10
  },
  timeText: {
    color: grayColor,
    fontSize: 8,
    paddingLeft:4,
    fontFamily: POPPINS.PoppinsRegular,
  },
  unitPrice: {
    color: textColorCustom,
    fontSize: 10,
    letterSpacing:0.06,
    fontFamily: POPPINS.PoppinsMedium,
    marginTop:5
  },
});
