import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import {
  blue,
  customLightState,
  grayColor,
  textColorCustom,
  white,
} from '../../constants/Theme';
import {POPPINS, ROBOTO} from '../../constants/CustomFontFamily';
import CustomStyle from '../../Styles';
import {
  dataPrivacy,
  definitions,
  eligibility,
  feesPayment,
  governingLaw,
  intellectualProperty,
  limitationOfLiability,
  logisticsPartnerTerms,
  retailerTerms,
  supplierTerms,
  termination,
  useOfServic,
  userAccounts,
} from './CustomData';
import LinearGradient from 'react-native-linear-gradient';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const TermCondition = () => {
  const navigation = useNavigation();
  const [isVisible,setIsVisible]=useState(true)
  return (
    <Modal
      isVisible={isVisible}
      // animationIn={'slideInUp'}
      // animationOut={'slideOutDown'}
      //   deviceHeight={300}
      // swipeDirection={['up', 'left', 'right', 'down']}
      // onBackdropPress={() => {
      //     setIsVisible(!isVisible)
      // }}
      // onBackButtonPress={() => {
      //     setIsVisible(!isVisible)
      // }}
      animationType="slide"
      style={{width: width - 40, marginVertical: 50}}>
      <View style={{backgroundColor: white, borderRadius: 25}}>
        <ScrollView>
          <View className="flex-row items-center px-4 pt-4 pb-2 rounded-b-xl">
            <TouchableOpacity>
              <Image
                style={[CustomStyle.topNavigation, {tintColor: white}]}
                source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
              />
            </TouchableOpacity>
            <Text
              className="flex-1 text-[20px] text-center"
              style={{
                fontFamily: ROBOTO.RobotoBold,
                letterSpacing: 1,
                color: blue,
              }}>
              TERMS & CONDITIONS
            </Text>
          </View>
          <View className="px-3">
            <Text
              style={{
                fontFamily: POPPINS.PoppinsSemiBold,
                fontSize: 13,
                color: blue,
                marginTop: 2,
              }}>
              AQAD Mobile Application Terms and Conditions :
            </Text>
            <Text style={styles.heading}>1. Introduction</Text>
            <Text style={styles.desc}>
              Welcome to the AQAD Mobile Application (“AQAD”), a platform
              offering FMCG products and services. These Terms and Conditions
              (“Terms”) govern your use of our application and services. By
              accessing or using AQAD, you agree to comply with and be bound by
              these Terms. If you do not agree, please do not use our services.
            </Text>
            <View>
              <Text style={styles.heading}>2. Definitions</Text>
              {definitions?.map((item, index) => (
                <View key={index} className="flex flex-row">
                  <View
                    style={{
                      height: 3,
                      width: 3,
                      borderRadius: 1.5,
                      backgroundColor: blue,
                      marginTop: 7,
                    }}></View>
                  <Text style={styles.subHeading}>
                    {item.heading}{' '}
                    <Text style={[styles.desc, {paddingLeft: 10}]}>
                      {item.desc}
                    </Text>
                  </Text>
                </View>
              ))}
            </View>
            <Text style={styles.heading}>3. Eligibility</Text>
            {eligibility.map((item, index) => (
              <View key={index} className="flex flex-row items-center">
                <View
                  style={{
                    height: 3,
                    width: 3,
                    borderRadius: 1.5,
                    backgroundColor: grayColor,
                  }}></View>
                <Text style={[styles.desc, {marginLeft: 6}]}>{item}</Text>
              </View>
            ))}
            <View>
              <Text style={styles.heading}>4. User Accounts</Text>
              {userAccounts?.map((item, index) => (
                <View key={index} className="flex flex-row">
                  <View
                    style={{
                      height: 3,
                      width: 3,
                      borderRadius: 1.5,
                      backgroundColor: blue,
                      marginTop: 7,
                    }}></View>
                  <Text style={styles.subHeading}>
                    {item.heading}{' '}
                    <Text style={[styles.desc, {paddingLeft: 10}]}>
                      {item.desc}
                    </Text>
                  </Text>
                </View>
              ))}
            </View>
            <View>
              <Text style={styles.heading}>5. Use of Services</Text>
              {useOfServic?.map((item, index) => (
                <View key={index} className="flex flex-row">
                  <View
                    style={{
                      height: 3,
                      width: 3,
                      borderRadius: 1.5,
                      backgroundColor: blue,
                      marginTop: 7,
                    }}></View>
                  <Text style={styles.subHeading}>
                    {item.heading}{' '}
                    <Text style={[styles.desc, {paddingLeft: 10}]}>
                      {item.desc}
                    </Text>
                  </Text>
                </View>
              ))}
            </View>
            <View>
              <Text style={styles.heading}>6. Supplier Terms</Text>
              {supplierTerms?.map((item, index) => (
                <View key={index} className="flex flex-row">
                  <View
                    style={{
                      height: 3,
                      width: 3,
                      borderRadius: 1.5,
                      backgroundColor: blue,
                      marginTop: 7,
                    }}></View>
                  <Text style={styles.subHeading}>
                    {item.heading}{' '}
                    <Text style={[styles.desc, {paddingLeft: 10}]}>
                      {item.desc}
                    </Text>
                  </Text>
                </View>
              ))}
            </View>
            <View>
              <Text style={styles.heading}>7. Retailer Terms</Text>
              {retailerTerms?.map((item, index) => (
                <View key={index} className="flex flex-row">
                  <View
                    style={{
                      height: 3,
                      width: 3,
                      borderRadius: 1.5,
                      backgroundColor: blue,
                      marginTop: 7,
                    }}></View>
                  <Text style={styles.subHeading}>
                    {item.heading}{' '}
                    <Text style={[styles.desc, {paddingLeft: 10}]}>
                      {item.desc}
                    </Text>
                  </Text>
                </View>
              ))}
            </View>
            <View>
              <Text style={styles.heading}>8. Logistics Partner Terms</Text>
              {logisticsPartnerTerms?.map((item, index) => (
                <View key={index} className="flex flex-row">
                  <View
                    style={{
                      height: 3,
                      width: 3,
                      borderRadius: 1.5,
                      backgroundColor: blue,
                      marginTop: 7,
                    }}></View>
                  <Text style={styles.subHeading}>
                    {item.heading}{' '}
                    <Text style={[styles.desc, {paddingLeft: 10}]}>
                      {item.desc}
                    </Text>
                  </Text>
                </View>
              ))}
            </View>
            <View>
              <Text style={styles.heading}>9. Fees and Payments</Text>
              {feesPayment?.map((item, index) => (
                <View key={index} className="flex flex-row">
                  <View
                    style={{
                      height: 3,
                      width: 3,
                      borderRadius: 1.5,
                      backgroundColor: blue,
                      marginTop: 7,
                    }}></View>
                  <Text style={styles.subHeading}>
                    {item.heading}{' '}
                    <Text style={[styles.desc, {paddingLeft: 10}]}>
                      {item.desc}
                    </Text>
                  </Text>
                </View>
              ))}
            </View>
            <View>
              <Text style={styles.heading}>10. Data Privacy</Text>
              {dataPrivacy?.map((item, index) => (
                <View key={index} className="flex flex-row">
                  <View
                    style={{
                      height: 3,
                      width: 3,
                      borderRadius: 1.5,
                      backgroundColor: blue,
                      marginTop: 7,
                    }}></View>
                  <Text style={styles.subHeading}>
                    {item.heading}{' '}
                    <Text style={[styles.desc, {paddingLeft: 10}]}>
                      {item.desc}
                    </Text>
                  </Text>
                </View>
              ))}
            </View>
            <View>
              <Text style={styles.heading}>11. Intellectual Property</Text>
              {intellectualProperty?.map((item, index) => (
                <View key={index} className="flex flex-row">
                  <View
                    style={{
                      height: 3,
                      width: 3,
                      borderRadius: 1.5,
                      backgroundColor: blue,
                      marginTop: 7,
                    }}></View>
                  <Text style={styles.subHeading}>
                    {item.heading}{' '}
                    <Text style={[styles.desc, {paddingLeft: 10}]}>
                      {item.desc}
                    </Text>
                  </Text>
                </View>
              ))}
            </View>
            <View>
              <Text style={styles.heading}>12. Limitation of Liability</Text>
              {limitationOfLiability?.map((item, index) => (
                <View key={index} className="flex flex-row">
                  <View
                    style={{
                      height: 3,
                      width: 3,
                      borderRadius: 1.5,
                      backgroundColor: blue,
                      marginTop: 7,
                    }}></View>
                  <Text style={styles.subHeading}>
                    {item.heading}{' '}
                    <Text style={[styles.desc, {paddingLeft: 10}]}>
                      {item.desc}
                    </Text>
                  </Text>
                </View>
              ))}
            </View>

            <View>
              <Text style={styles.heading}>13. Indemnification</Text>
              <Text style={styles.desc}>
                Users agree to indemnify and hold AQAD, its affiliates, and
                their respective officers, directors, employees, and agents
                harmless from any claims, liabilities, damages, losses, and
                expenses, including legal fees, arising out of or in any way
                connected with their use of the services, violation of these
                Terms, or any infringement by them of any intellectual property
                or other rights of any person or entity.
              </Text>
            </View>
            <View>
              <Text style={styles.heading}>14. Termination</Text>
              {termination?.map((item, index) => (
                <View key={index} className="flex flex-row">
                  <View
                    style={{
                      height: 3,
                      width: 3,
                      borderRadius: 1.5,
                      backgroundColor: blue,
                      marginTop: 7,
                    }}></View>
                  <Text style={styles.subHeading}>
                    {item.heading}{' '}
                    <Text style={[styles.desc, {paddingLeft: 10}]}>
                      {item.desc}
                    </Text>
                  </Text>
                </View>
              ))}
            </View>
            <View>
              <Text style={styles.heading}>15. Amendments</Text>
              <Text style={styles.desc}>
                AQAD may amend these Terms from time to time. Users will be
                notified of any significant changes. Continued use of the
                services after such amendments constitutes acceptance of the new
                Terms.
              </Text>
            </View>
            <View>
              <Text style={styles.heading}>
                16. Governing Law and Dispute Resolution
              </Text>
              {governingLaw?.map((item, index) => (
                <View key={index} className="flex flex-row">
                  <View
                    style={{
                      height: 3,
                      width: 3,
                      borderRadius: 1.5,
                      backgroundColor: blue,
                      marginTop: 7,
                    }}></View>
                  <Text style={styles.subHeading}>
                    {item.heading}{' '}
                    <Text style={[styles.desc, {paddingLeft: 10}]}>
                      {item.desc}
                    </Text>
                  </Text>
                </View>
              ))}
            </View>

            <View>
              <Text style={styles.heading}>17. Contact Information</Text>
              <Text style={styles.desc}>
                For any questions or concerns about these Terms, please contact
                AQAD support at <Text style={{color:textColorCustom}}>info@aqad.ae</Text>.
              </Text>
              <Text style={[styles.desc,{marginVertical:15}]}>
              By using AQAD, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </Text>
            </View>

            <View className="flex flex-row items-center justify-center mb-10">
              <TouchableOpacity onPress={()=>setIsVisible(true)} >
                <LinearGradient className="flex items-center justify-center h-[35px] w-[100px] rounded-[5px] shadow" colors={['#f96900', '#FB964C']}>
                <Text className="text-center text-white">Accept</Text>
                </LinearGradient>
              </TouchableOpacity>
                <TouchableOpacity onPress={()=>setIsVisible(false)} className="flex ml-3 items-center justify-center h-[35px] w-[100px] rounded-[5px] shadow" style={{borderWidth:1,borderColor:textColorCustom}}>
                <Text style={{color:textColorCustom,fontFamily:ROBOTO.RobotoRegular,textAlign:"center"}}>Accept</Text>
                </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};
export default TermCondition;

const styles = StyleSheet.create({
  slide: {
    height: 4,
    width: 90,
    backgroundColor: customLightState,
    borderRadius: 2,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },
  heading: {
    color: textColorCustom,
    fontSize: 13,
    fontFamily: POPPINS.PoppinsSemiBold,
    marginTop: 8,
  },
  subHeading: {
    fontSize: 10,
    fontFamily: POPPINS.PoppinsRegular,
    color: blue,
    marginLeft: 6,
  },
  desc: {
    fontFamily: POPPINS.PoppinsRegular,
    fontSize: 10,
    color: grayColor,
  },
});
