import * as React from 'react';
import {DataTable} from 'react-native-paper';
import {
  blue,
  grayColor,
  screenBackground,
  white,
} from '../../../../constants/Theme';
import Checkbox from '../../../../Shared/Checkbox';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {POPPINS} from '../../../../constants/CustomFontFamily';
import downArrow from '../../../../Assets/image/vendor/downArrow.svg';
import SvgUri from 'react-native-svg-uri';
import SelectWarehouseModal from './SelectWarehouseModal';

const CollapseTable = ({openCollapse}) => {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );

  const [items] = React.useState([
    {
      key: 1,
      name: 'name',
      calories: 356,
      fat: 16,
    },
    {
      key: 2,
      name: 'Eclair',
      calories: 262,
      fat: 16,
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <View className="h-48 mt-1.5 bg-red">
      <DataTable>
        <DataTable.Row className="bg-white shadow">
          <DataTable.Cell style={{minWidth: 125}}>
            <View className="flex flex-row items-center">
              <Checkbox />
              <View
                style={{
                  backgroundColor: '#E6EEFF',
                  padding: 7,
                  borderRadius: 10,
                }}>
                <Image
                  style={{height: 15, width: 15, tintColor: '#0058ff'}}
                  source={require('../../../../Assets/image/vendor/add-image.png')}
                />
              </View>
              <Text style={styles.td}>name</Text>
            </View>
          </DataTable.Cell>
          <DataTable.Cell style={{minWidth: 100}}>300</DataTable.Cell>
          <DataTable.Cell style={{minWidth: 100}}>300</DataTable.Cell>
          <DataTable.Cell style={{minWidth: 100}}>300</DataTable.Cell>
          <DataTable.Cell style={{minWidth: 100}}>300</DataTable.Cell>
          <DataTable.Cell
              className="flex flex-row items-center justify-center"
              style={{minWidth: 50}}>
              <TouchableOpacity onPress={()=>openCollapse(null)}>
                <Image
                  style={{tintColor: '#e6e9f4', height: 7.2, width: 14}}
                  source={require('../../../../Assets/image/vendor/downArrow.png')}
                />
              </TouchableOpacity>
            </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
      <DataTable
        className="pl-4 pr-4"
        style={{backgroundColor: white, minHeight: 200}}>
        <DataTable.Header
          className="flex flex-row items-center "
          style={{backgroundColor: '#e6e9f4'}}>
         
          <DataTable.Title
            style={{width: 50, margin: 0, paddingVertical: 3}}>
            {/* <Text style={[styles.th]}>VARIANTS</Text> */}
          </DataTable.Title>
          
          <DataTable.Title
            style={{width: 40, margin: 0, paddingVertical: 3}}>
            <Text style={[styles.th]}>Price (aed)</Text>
          </DataTable.Title>
          <DataTable.Title
            style={{width: 40, margin: 0, paddingVertical: 3}}>
            <Text style={[styles.th]}>Quantity</Text>
          </DataTable.Title>
          <DataTable.Title
            style={{width: 100, margin: 0, paddingVertical: 3}}>
            <Text style={[styles.th]}>WAREHOUSE</Text>
          </DataTable.Title>
        </DataTable.Header>

        {items?.map(item => (
          <DataTable.Row className="bg-white shadow h-14 mx-7" key={item.key}>
            <DataTable.Cell style={{width: 55}}>
              <View className="flex flex-row items-center">
                <Checkbox />
                <View
                  style={{
                    backgroundColor: '#E6EEFF',
                    padding: 7,
                    borderRadius: 10,
                  }}>
                  <Image
                    style={{height: 15, width: 15, tintColor: '#0058ff'}}
                    source={require('../../../../Assets/image/vendor/add-image.png')}
                  />
                </View>
                <Text style={styles.td}>{item.name}</Text>
              </View>
            </DataTable.Cell>
            <DataTable.Cell style={{width: 80}}>
            <TextInput style={[styles.InputTextField]} placeholder='Enter Price' placeholderTextColor={grayColor} />
            </DataTable.Cell>
            <DataTable.Cell style={{width: 70}}>
            <TextInput style={[styles.InputTextField,{width:65}]} placeholder='Quantity' placeholderTextColor={grayColor} />
            </DataTable.Cell>
            <DataTable.Cell style={{width: 100}}>
            <View className="flex flex-row">
            <View className="flex flex-col">
                  {/* <View className="flex flex-row p-1 px-3" style={{backgroundColor:"#E6EEFF",borderRadius:5}}>
                    <Text style={styles.warehouseHeading}>Warehouse (1) : </Text>
                    <Text style={[styles.warehouseDesc,{marginLeft:5}]}>New Huldashire 122...</Text>
                  </View>
                  <View className="flex flex-row p-1 px-3 mt-0.5" style={{backgroundColor:"#E6EEFF",borderRadius:5}}>
                    <Text style={styles.warehouseHeading}>Warehouse (1) : </Text>
                    <Text style={[styles.warehouseDesc,{marginLeft:5}]}>New Huldashire 122...</Text>
                  </View> */}
              </View>
              <SelectWarehouseModal/>
            </View>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
};

export default CollapseTable;

const styles = StyleSheet.create({
  th: {
    color: blue,
    borderRadius: 15,
    fontFamily: POPPINS.PoppinsSemiBold,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 10,
    flex: 1,
  },
  td: {
    color: blue,
    fontSize: 10,
    fontFamily: POPPINS.PoppinsRegular,
    letterSpacing: 0.14,
    marginLeft: 6,
  },
  InputTextField:{
    backgroundColor:"#f5f5f5",
    // height:24,
    paddingVertical:0,
    color:grayColor,
    fontFamily:POPPINS.PoppinsRegular,
    fontSize:10,
    paddingHorizontal:10,
    width:100,
    borderRadius:5
  },
  warehouseHeading:{
    color:blue,
    fontFamily:POPPINS.PoppinsRegular,
    fontSize:8
  },
  warehouseDesc:{
    color:grayColor,
    fontFamily:POPPINS.PoppinsRegular,
    fontSize:8
  }
});
