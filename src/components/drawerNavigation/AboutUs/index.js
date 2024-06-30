import {View, Text, Button, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import CustomHeader from '../../../Shared/CustomHeader';
import {
  blue,
  grayColor,
  screenBackground,
  textColorCustom,
  white,
} from '../../../constants/Theme';
import {POPPINS, ROBOTO} from '../../../constants/CustomFontFamily';
import AboutMultiCrousel from './AboutMultiCrousel';
import googleMap from '../../../Assets/image/universal/google_maps.svg';
import openLocation from '../../../Assets/image/universal/openLocation.svg';
import aqTheRet from '../../../Assets/image/universal/at.svg';
import mobile from '../../../Assets/image/universal/mobile.svg';
import instagram from '../../../Assets/image/universal/instagram.svg';
import linked from '../../../Assets/image/universal/linked.svg';
import twitter from '../../../Assets/image/universal/twitter.svg';
import whatsapp from '../../../Assets/image/universal/whatsapp.svg';
import SvgUri from 'react-native-svg-uri';
import {Divider} from 'react-native-paper';

const vesicaData = [
  'Deleo caput votum comburo. Pectus eligendi solus neque bellum decipio.Bos magnam torqueo barba catena.',
  'Abbas terror volva trucido vobis arceo desipio quae delicate. Coerceo crinis tricesimus audio vespillo. Nisi celer praesentium tutamen crux commodo exercitationem venustas statua.',
  'Sumptus curto usitas. Studio voluptatibus umquam coaegresco triumphus cubitum coruscus venia. Cubo celo venustas tenuis quo culpo dedico degusto tabesco. Subiungo circumvenio tego aurum iste conculco aequus subseco stabilis consequuntur. At trepide patior patior aut uterque terreo cunctatio pauci. Velut debitis adimpleo verus.',
  'Carus adipiscor tabernus speciosus civitas acsi terreo aperiam titulus. Tertius paulatim aggredior audio stips copiose contra altus adopto distinctio. Ambitus depono tabernus.',
  'Clibanus cursim trans tumultus audacia copiose vulnus. Ea ipsam correptius. Trepide ambitus animus deprimo cogito dedecor.',
];

export default function AboutUs(nav) {
  return (
    <View style={{backgroundColor: screenBackground}}>
      <CustomHeader haeding={'ABOUT US'} />
      <ScrollView className="mb-16">
        <View className="mx-auto my-8">
          <Image
            style={styles.aqadImage}
            source={require('../../../Assets/image/universal/aboutus.png')}
          />
        </View>
        <View className="mx-4">
          <Text style={styles.subTitle}>
            Accommodo cura tego aro quaerat strenuus vox careo alo arguo.
            Defetiscor acsi canis. Sed conscendo.
          </Text>
        </View>
        <AboutMultiCrousel />
        <View className="mx-4 mb-5">
          <Text style={styles.vesicaCivis}>Vesica Civis Super</Text>
          {vesicaData.map((item, index) => (
            <Text key={index} style={styles.vesicaCivisDesc}>
              {item}
            </Text>
          ))}

          <View
            style={{
              backgroundColor: white,
              borderRadius: 15,
              padding: 15,
              marginVertical: 15,
            }}>
            <View className="flex px-2 flex-row justify-between">
              <View className="flex flex-row gap-x-2">
                <Image
                  source={require('../../../Assets/image/universal/google-maps.png')}
                  style={{height: 21, width: 16}}
                />
                <Text style={styles.locations}>Office Location</Text>
              </View>
              <View className="flex gap-x-2 items-center flex-row ">
                <Text style={styles.openLocations}>Office Location</Text>
                <SvgUri source={openLocation} height={15} width={15} />
              </View>
            </View>
            <Divider style={{backgroundColor: '#e6e9f4', marginVertical: 10}} />
            <View className=" px-2">
              <Text style={styles.addressLocations}>
                50704 Emmerich Forest, Norfolk Island, South Aurelio, 33182-4280
              </Text>
            </View>
          </View>
          <Text style={styles.vesicaCivis}>Contact Us</Text>
          <Text style={styles.vesicaCivisDesc}>
            Supellex umerus tandem bonus amissio admoneo ait comparo eveniet.
          </Text>
          <View
            style={{
              backgroundColor: white,
              borderRadius: 15,
              padding: 15,
              marginTop: 15,
            }}>
            <View className="flex px-2 flex-row justify-between">
              <View className="flex flex-row gap-x-2">
                <SvgUri source={mobile} height={20} width={20} />

                <Text style={styles.locations}>+971 123456789</Text>
              </View>

              <SvgUri source={openLocation} height={15} width={15} />
            </View>
          </View>
          <View
            style={{
              backgroundColor: white,
              borderRadius: 15,
              padding: 15,
              marginVertical: 5,
            }}>
            <View className="flex px-2 flex-row justify-between">
              <View className="flex flex-row items-center gap-x-2">
              <SvgUri source={aqTheRet} height={20} width={20} />
                <Text style={styles.locations}>info@aqad.aq</Text>
              </View>

              <SvgUri source={openLocation} height={15} width={15} />
            </View>
          </View>
          <Text style={[styles.vesicaCivis,{marginTop:10}]}>Social Media </Text>
          <Text style={styles.vesicaCivisDesc}>
            Supellex umerus tandem bonus amissio admoneo ait comparo eveniet.
          </Text>

          <View className="flex flex-row mt-5 gap-x-2">
            <View style={styles.customIcons}><SvgUri source={instagram} height={15} width={15} /></View>
            <View style={styles.customIcons}>
            <Image
                  source={require('../../../Assets/image/universal/linked.png')}
                  style={{height: 14.5, width: 14.5}}
                />
            </View>
            <View style={styles.customIcons}><SvgUri source={twitter} height={15} width={15} /></View>
            <View style={styles.customIcons}><SvgUri source={whatsapp} height={15} width={15} /></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
// instagram
const styles = StyleSheet.create({
  aqadImage: {
    height: 188,
    width: 243,
  },
  subTitle: {
    color: grayColor,
    fontFamily: POPPINS.PoppinsLight,
    fontSize: 13,
    textAlign: 'center',
  },
  vesicaCivis: {
    color: textColorCustom,
    fontFamily: ROBOTO.RobotoMedium,
    fontSize: 20,
    marginTop: 4,
  },
  vesicaCivisDesc: {
    color: grayColor,
    fontFamily: POPPINS.PoppinsLight,
    fontSize: 13,
    marginTop: 4,
  },
  locations: {
    fontFamily: ROBOTO.RobotoRegular,
    color: blue,
    fontSize: 13,
  },
  openLocations: {
    fontFamily: POPPINS.PoppinsRegular,
    color: textColorCustom,
    fontSize: 10,
    letterSpacing: 0.06,
  },
  addressLocations: {
    fontFamily: POPPINS.PoppinsLight,
    color: grayColor,
    fontSize: 10,
  },
  customIcons:{
    height:35,
    width:35,
    borderWidth:1,
    borderColor:"#F5E6DC",
    backgroundColor:"#F6E0D1",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:17.5
  }
});
