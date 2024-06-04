import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {Card} from 'react-native-paper';
import { POPPINS, ROBOTO } from '../../../constants/CustomFontFamily';
import { blue, screenBackground } from '../../../constants/Theme';

const OutletCard = ({
  index,
  data,
  handleChange,
  handleBlur,
  onEdit,
  onDelete,
}) => {
  return (
    <Card style={styles.card}>
      <Card.Content className="">
        <Text style={styles.heading}>{`Outlet Address (${index + 1})`}</Text>

        <TextInput
          style={styles.input}
          placeholderTextColor="#7e84a3"
          placeholder="Enter Outlet Address"
          value={data.outletAddress}
          onChangeText={handleChange(`outletAddress${index}`)}
          onBlur={handleBlur(`outletAddress${index}`)}
        />
        <Text style={styles.label}>PO Box</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#7e84a3"
          placeholder="Enter PO Box"
          value={data.poBox}
          onChangeText={handleChange(`poBox${index}`)}
          onBlur={handleBlur(`poBox${index}`)}
        />
        <View style={styles.iconContainer}>
          
          <View style={styles.iconEditdel}>
            <TouchableOpacity style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center",gap:6}} onPress={() => onDelete(index)}>
              <Image style={{height:18,width:15,tintColor:"#f0142f"}} source={require("../../../Assets/image/trash.png")} />
              <Text style={{fontFamily:ROBOTO.RobotoRegular,color:"#f0142f",fontSize:12}}>Remove</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconEdit}>
            <TouchableOpacity style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center",gap:6}} onPress={() => onEdit(index)}>
              <Image style={{height:18,width:18,tintColor:"#0058ff"}} source={require("../../../Assets/image/vendor/edit.png")} />
              <Text style={{fontFamily:ROBOTO.RobotoRegular,color:"#0058ff",fontSize:12}}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const OutletList = ({outlets, handleChange, handleBlur, onEdit, onDelete}) => {
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
    borderRadius:15,
    shadowColor:screenBackground
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
    fontSize:13
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
    fontSize:11,
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
});

const data = [
  {outletAddress: '', poBox: ''},
  {outletAddress: '', poBox: ''},
  {outletAddress: '', poBox: ''},
];

class MainComponent extends React.Component {
  state = {
    outlets: data,
  };

  handleChange = name => text => {
    const [field, index] = name.match(/[a-zA-Z]+|[0-9]+/g);
    this.setState(prevState => {
      const newOutlets = [...prevState.outlets];
      newOutlets[index][field] = text;
      return {outlets: newOutlets};
    });
  };

  handleBlur = name => () => {
    // Handle blur event if needed
  };

  handleEdit = index => {
    // Handle edit event if needed
  };

  handleDelete = index => {
    this.setState(prevState => {
      const newOutlets = prevState.outlets.filter((_, i) => i !== index);
      return {outlets: newOutlets};
    });
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
        <OutletList
          outlets={this.state.outlets}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
        />
      </SafeAreaView>
    );
  }
}

export default MainComponent;
