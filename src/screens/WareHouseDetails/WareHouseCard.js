import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const OutletCard = ({
  index,
  data,
  handleChange,
  handleBlur,
  onEdit,
  onDelete,
  ScrollView,
}) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
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
          <View style={styles.iconEdit}>
            <TouchableOpacity onPress={() => onEdit(index)}>
              <Icon name="pencil-outline" size={24} color="#00274D" />
            </TouchableOpacity>
          </View>
          <View style={styles.iconEditdel}>
            <TouchableOpacity onPress={() => onDelete(index)}>
              <Icon name="trash-outline" size={24} color="#00274D" />
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
    margin: 10,
    backgroundColor: '#FFF',
  },
  heading: {
    color: '#00274d',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    marginBottom: 10,
  },
  label: {
    color: '#00274D',
    fontFamily: 'Poppins-Medium',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderColor: '#F5F5F5',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontFamily: 'Poppins-Light',
    marginBottom: 16,
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
    backgroundColor: '#26f0142f',
    alignItems: 'center',
    paddingTop: 4,
  },
  iconEditdel: {
    height: 35,
    width: 100,
    borderRadius: 5,
    backgroundColor: '#26f0142f',
    alignItems: 'center',
    paddingTop: 4,
  },
});

const data = [
  {outletAddress: '', poBox: ''},
  {outletAddress: '', poBox: ''},
  {outletAddress: '', poBox: ''},
  // Add more outlet data as needed
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
