import {FlatListSlider} from 'react-native-flatlist-slider';
import React from 'react';

const images = [
  {
    banner: require('../Assets/image/drawable-hdpi/no_path_copy_8.png'),
    desc: 'Silent Waters in the mountains in midst of Himilayas',
  },
  {
    banner: require('../Assets/image/drawable-hdpi/no_path_copy_8.png'),
    desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    banner: require('../Assets/image/drawable-hdpi/no_path_copy_8.png'),
    desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
];

export default function CarouselHome() {
  return (
    <FlatListSlider
      width={300}
      height={100}
      contentContainerStyle={{paddingHorizontal: 30}}
      separatorWidth={10}
      indicatorActiveWidth={10}
      data={images}
      imageKey={'banner'}
      local
      animation
    />
  );
}
