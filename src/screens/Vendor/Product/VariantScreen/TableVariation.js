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
import CollapseTable from './CollapseTable';
import InputTextField from '../../../../Shared/InputTextField';

const TableVariation = () => {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );
  const [show,setShow]=React.useState(null)

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
    {
      key: 3,
      name: 'Frozen',
      calories: 159,
      fat: 6,
    },
    // {
    //   key: 4,
    //   name: 'frood',
    //   calories: 305,
    //   fat: 3.7,
    // },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);


  const openCollapse=(index)=>{
    setShow(index)
  }

  return (
    <View className="">
      <DataTable
        className="mt-3"
        style={{backgroundColor: screenBackground}}>
        <DataTable.Header
          className="flex flex-row items-center "
          style={{backgroundColor: grayColor}}>
          <DataTable.Title style={{minWidth: 125}}>
            <Checkbox />
          </DataTable.Title>
          <DataTable.Title style={{minWidth: 100}}>
            <Text style={[styles.th]}>VARIANTS</Text>
          </DataTable.Title>
          <DataTable.Title style={{minWidth: 100}}>
            <Text style={[styles.th]}>Price (aed)</Text>
          </DataTable.Title>
          <DataTable.Title style={{minWidth: 100}}>
            <Text style={[styles.th]}>Quantity</Text>
          </DataTable.Title>
          <DataTable.Title style={{minWidth: 175}}>
            <Text style={[styles.th]}>WAREHOUSE</Text>
          </DataTable.Title>
          <DataTable.Title style={{minWidth: 50}}>
            {/* <Text style={[styles.th]}>WAREHOUSE</Text> */}
          </DataTable.Title>
        </DataTable.Header>

        {items?.map((item,index) => (
            show==index?<CollapseTable openCollapse={openCollapse}/> :
          <DataTable.Row className="mt-1.5 h-14 bg-white shadow" key={item.key}>
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
                <Text style={styles.td}>{item.name}</Text>
              </View>
            </DataTable.Cell>
            <DataTable.Cell style={{minWidth: 100}}>
              <Text style={styles.td}>{item.calories}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{minWidth: 100}}>
                <TextInput style={styles.InputTextField} placeholder='Enter Price' placeholderTextColor={grayColor} />
            </DataTable.Cell>
            <DataTable.Cell style={{minWidth: 100}}>
              <TextInput style={[styles.InputTextField,{width:65,marginLeft:5}]} placeholder='Quantity' placeholderTextColor={grayColor} />
            </DataTable.Cell>
            <DataTable.Cell style={{minWidth: 150}}>
              <View className="flex flex-col">
                  <View className="flex flex-row p-1 px-3" style={{backgroundColor:"#E6EEFF",borderRadius:5}}>
                    <Text style={styles.warehouseHeading}>Warehouse (1) : </Text>
                    <Text style={[styles.warehouseDesc,{marginLeft:5}]}>New Huldashire 122...</Text>
                  </View>
                  <View className="flex flex-row p-1 px-3 mt-0.5" style={{backgroundColor:"#E6EEFF",borderRadius:5}}>
                    <Text style={styles.warehouseHeading}>Warehouse (1) : </Text>
                    <Text style={[styles.warehouseDesc,{marginLeft:5}]}>New Huldashire 122...</Text>
                  </View>
              </View>
            </DataTable.Cell>
            <DataTable.Cell
              className="flex flex-row items-center justify-center"
              style={{minWidth: 50}}>
              <TouchableOpacity onPress={()=>openCollapse(index)}>
                <Image
                  style={{tintColor: '#e6e9f4', height: 7.2, width: 14}}
                  source={require('../../../../Assets/image/vendor/downArrow.png')}
                />
              </TouchableOpacity>
            </DataTable.Cell>
          </DataTable.Row>
          
          
        ))}
      </DataTable>
      
    </View>
  );
};

export default TableVariation;

const styles = StyleSheet.create({
  th: {
    color: white,
    borderRadius: 15,
    fontFamily: POPPINS.PoppinsSemiBold,
    textAlign: 'center',
    alignItems: 'center',
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
    width:90,
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
