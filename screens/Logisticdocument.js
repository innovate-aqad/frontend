import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  View,
  Animated,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Avatar, Card, IconButton} from 'react-native-paper';

export default function VendorDocument(nav) {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const redirectDocument = () => {
    nav.navigation.navigate('business');
    // nav.navigation.navigate('bottomTab');
  };

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 75,
      duration: 2000,
    }).start();
  }, []);

  return (
    <View
      className="flex flex-col p-4   h-full bg-gray-100 !text-black
        ">
      <View className="relative top-0 flex flex-row items-center p-5 ">
        <Image
          style={styles.topNavigation}
          source={require('../Assets/image/drawable-xhdpi/arrow_left.png')}
        />
      </View>
      <View>
        <Text
          className="text-3xl text-[#00274D]"
          style={{fontFamily: 'Poppins-bold'}}>
          Logistic Partner Info
        </Text>
        <Text
          className="text-xs pt-2 text-gray-400"
          style={{fontFamily: 'Poppins-Light'}}>
          Pick the type of account that suits your business or personal needs.
        </Text>
      </View>
      <View className=" pt-10 ">
        {/* progressbar */}
        <View style={styles.container}>
          {/* <Text>progress</Text> */}
          <Animated.View style={[styles.bar, {width: progress}]} />
        </View>
        {/* text */}
        <View>
          <Text
            className="text-2xl text-[#00274D] pt-3"
            style={{fontFamily: 'Poppins-bold'}}>
            Document Verification
          </Text>
        </View>
        {/* cards */}
        <Card.Title
          className=" bg-white shadow rounded-xl"
          title="Card Title"
          subtitle="Card Subtitle"
          left={props => <Avatar.Icon {...props} icon="folder" />}
          // right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
        />
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          titleStyle={{color: 'red'}} // Custom color for the title
          subtitleStyle={{color: 'blue'}} // Custom color for the subtitle
          left={props => <Avatar.Icon {...props} icon="folder" />}
          right={props => (
            <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
          )}
        />

        {/* <View
           
                className="flex gap-y-2 flex-col  pb-2 mt-1.5 bg-white shadow rounded-xl">
                <View className="flex flex-row justify-around ">
                  <View className="bg-[#FDEEE3] h-[50px] w-[50px] rounded-full border border-[#FDD7BC] p-3">
                    <Image
                      style={{height: 22, width: 29.5}}
                      source={require('../Assets/image/drawable-xhdpi/pngwing_com_9.png')}
                    />
                  </View>
                  <View>
                    <Text
                      className="text-[#00274d] text-[13px]"
                      style={{
                        fontFamily: 'Poppins-Regular',
                        letterSpacing: 0.08,
                      }}>
                      Product name
                    </Text>
                    <View>
                      <View className="flex flex-row gap-x-2">
                        <Text
                          className="text-[#7e84a3]  rounded-full text-[8px]"
                          style={{fontFamily: 'Poppins-Regular'}}>
                          #AQADORDER052
                        </Text>
                  
                      </View>
                   
                    </View>
                  </View>
         
       
                </View>
        
              </View> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  topNavigation: {
    height: 15,
    width: 23.3,
  },
  input: {
    height: 40,
    margin: 3,
    borderWidth: 1,
    // padding: 12,
    color: 'gray',
    backgroundColor: 'white',
    // borderRadius: 20,
    fontFamily: 'Poppins-Light',
  },
  button: {
    backgroundColor: '#F96900', // Default button color
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
  },
  user: {
    alignSelf: 'center',
  },
  container: {
    height: 15,
    backgroundColor: '#ccc',
    borderRadius: 10,
    // margin: 10,
  },
  bar: {
    height: 15,
    backgroundColor: '#F96900',
    borderRadius: 10,
  },
});
