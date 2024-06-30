import {FlatListSlider} from 'react-native-flatlist-slider';
import React from 'react';
import { Dimensions } from 'react-native';

const images = [
  {
    banner: require('../../../Assets/image/universal/clouselImage.png'),
    desc: 'Silent Waters in the mountains in midst of Himilayas',
  },
  {
    banner: require('../../../Assets/image/universal/clouselImage.png'),
    desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    banner: require('../../../Assets/image/universal/clouselImage.png'),
    desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function AboutMultiCrousel() {
  return (
    <FlatListSlider
    data={images}
    imageKey={'banner'}
    height={229}
    timer={5000}
    width={windowWidth}
    onPress={item => console.log(JSON.stringify(item))}
    // contentContainerStyle={{paddingHorizontal: 16}}
    indicatorContainerStyle={{position:'absolute', bottom: 20}}
    indicatorActiveColor={'#8e44ad'}
    indicatorInActiveColor={'#ffffff'}
    indicatorActiveWidth={15}
    animation
    local   
    />
  );
}
