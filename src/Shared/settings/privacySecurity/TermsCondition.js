import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

import {POPPINS, ROBOTO} from '../../../constants/CustomFontFamily';
import {
  blue,
  flexTradButtonColor,
  screenBackground,
  textColorCustom,
} from '../../../constants/Theme';
import CustomStyle from '../../../Styles';
const MyComponent = () => {
  return (
    <ScrollView>
      <View style={[styles.container, {backgroundColor: screenBackground}]}>
        <View className="flex-row items-center pb-3">
          <Image
            style={CustomStyle.topNavigation}
            source={require('../../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
          <Text
            className="flex-1 text-[20px] text-center "
            style={{
              fontFamily: ROBOTO.RobotoBold,
              letterSpacing: 1,
              textTransform: 'uppercase',
              color: blue,
            }}>
            TERMS & CONDITIONS
          </Text>
        </View>
        <View>
          <Text style={styles.heading1}>
            AQAD Mobile Application Terms and Conditions :
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>1. Introduction</Text>
          <Text style={styles.description}>
            Welcome to the AQAD Mobile Application (“AQAD”), a platform offering
            FMCG products and services. These Terms and Conditions (“Terms”)
            govern your use of our application and services. By accessing or
            using AQAD, you agree to comply with and be bound by these Terms. If
            you do not agree, please do not use our services.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>2. Definitions</Text>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                AQAD :
                <Text style={styles.subDescription}>
                  The AQAD Mobile Application.
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                User :
                <Text style={styles.subDescription}>
                  Anyone using the AQAD application, including suppliers,
                  retailers, and logistics partners.
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Supplier :
                <Text style={styles.subDescription}>
                  Wholesalers offering products on AQAD.
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Retailer :
                <Text style={styles.subDescription}>
                  Supermarkets or retailers purchasing products through AQAD.
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Logistics Partner :
                <Text style={styles.subDescription}>
                  Entities providing transportation and delivery services.
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Services :
                <Text style={styles.subDescription}>
                  The functionalities provided by AQAD, including product
                  listing, purchasing, inventory management, and logistics.
                </Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>3. Eligibility</Text>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.subDescription}>
              Have a valid VAT certificate.
            </Text>
          </View>
          {/* <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.subDescription}>
              Possess a trade license issued by the respective government
              department of the UAE.
            </Text>
          </View> */}
          {/* <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.subDescription}>
              Possess a trade license issued by the respective government
              department of the UAE.
            </Text>
          </View> */}
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.subDescription}>
              Be a legally registered entity as per UAE laws.
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.subDescription}>
              By using AQAD, you represent and warrant that you meet these
              requirements.
            </Text>
          </View>
        </View>
        {/* sec-1 */}

        <View style={styles.section}>
          <Text style={styles.heading}>4. User Accounts</Text>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Account Creation :
                <Text style={styles.subDescription}>
                  Users must create an account to access AQAD’s services.
                  Accurate and complete information must be provided during
                  registration.
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Account Security :
                <Text style={styles.subDescription}>
                  Users are responsible for maintaining the confidentiality of
                  their account information and for all activities under their
                  account. AQAD is not liable for any loss or damage from
                  unauthorized use of your account.
                </Text>
              </Text>
            </View>
          </View>
        </View>
        {/* sec-2 */}
        <View style={styles.section}>
          <Text style={styles.heading}>5. Use of Services</Text>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Account Creation :
                <Text style={styles.subDescription}>
                  Users must create an account to access AQAD’s services.
                  Accurate and complete information must be provided during
                  registration.
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Account Security :
                <Text style={styles.subDescription}>
                  Users are responsible for maintaining the confidentiality of
                  their account information and for all activities under their
                  account. AQAD is not liable for any loss or damage from
                  unauthorized use of your account.
                </Text>
              </Text>
            </View>
          </View>
        </View>
        {/* sec-3 */}
        <View style={styles.section}>
          <Text style={styles.heading}>6. Supplier Terms</Text>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Product Listings :
                <Text style={styles.subDescription}>
                  Suppliers are responsible for providing accurate and detailed
                  product descriptions, including pricing, availability, and
                  specifications.
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Compliance :
                <Text style={styles.subDescription}>
                  Products listed must comply with UAE laws and regulations.
                  Suppliers are liable for any non-compliance.
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Quality Assurance :
                <Text style={styles.subDescription}>
                  Suppliers must ensure that products meet the agreed quality
                  standards and are delivered as described.
                </Text>
              </Text>
            </View>
          </View>
        </View>
        {/* sec-4 */}
        <View style={styles.section}>
          <Text style={styles.heading}>7. Retailer Terms</Text>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Purchasing :
                <Text style={styles.subDescription}>
                  Retailers can purchase products through AQAD, subject to
                  availability and pricing listed by suppliers.
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Payments :
                <Text style={styles.subDescription}>
                  Retailers agree to make timely payments as per the agreed
                  terms. AQAD may facilitate payment processing through
                  integrated banking APIs.
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Inventory Management :
                <Text style={styles.subDescription}>
                  Retailers can use AQAD for real-time inventory tracking and
                  management.
                </Text>
              </Text>
            </View>
          </View>
        </View>
        {/* sec-5 */}
        <View style={styles.section}>
          <Text style={styles.heading}>8. Logistics Partner Terms</Text>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Delivery Services :
                <Text style={styles.subDescription}>
                  Logistics partners agree to provide reliable and timely
                  delivery services as per the agreements with suppliers and
                  retailers.
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Tracking :
                <Text style={styles.subDescription}>
                  Logistics partners must use AQAD’s tracking functionalities to
                  update delivery statuses in real-time.
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Compliance :
                <Text style={styles.subDescription}>
                  Logistics partners must comply with all applicable transport
                  and safety regulations in the UAE.
                </Text>
              </Text>
            </View>
          </View>
        </View>
        {/* sec-6 */}
        <View style={styles.section}>
          <Text style={styles.heading}>9. Fees and Payments</Text>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Service Fees :
                <Text style={styles.subDescription}>
                  AQAD may charge fees for certain services. Users will be
                  notified of any applicable fees before completing a
                  transaction.
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Payment Processing :
                <Text style={styles.subDescription}>
                  AQAD facilitates secure payment processing through integrated
                  banking APIs. Users must provide valid payment information.
                </Text>
              </Text>
            </View>
          </View>
        </View>
        {/* sec-7 */}
        <View style={styles.section}>
          <Text style={styles.heading}>10. Data Privacy</Text>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Personal Data :
                <Text style={styles.subDescription}>
                  AQAD collects and processes personal data in accordance with
                  our Privacy Policy. Users consent to such processing by using
                  our services.
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subHeading}>
                Data Security :
                <Text style={styles.subDescription}>
                  AQAD implements appropriate security measures to protect user
                  data. However, AQAD cannot guarantee absolute security against
                  data breaches.
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading1: {
    color: '#00274d',
    fontFamily: POPPINS.PoppinsSemiBold,
    fontSize: 13,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
  },
  topNavigation: {
    // Add necessary styles for your image
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: ROBOTO.RobotoBold,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: blue,
  },
  section: {
    paddingTop: 16,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  bullet: {
    fontSize: 18,
    lineHeight: 24,
    marginRight: 4,
  },
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  heading: {
    color: textColorCustom,
    fontFamily: POPPINS.PoppinsSemiBold,
    fontSize: 13,
  },
  description: {
    color: flexTradButtonColor,
    fontFamily: POPPINS.PoppinsRegular,
    lineHeight: 18,
    fontSize: 10,
  },
  subHeading: {
    color: blue,
    fontFamily: POPPINS.PoppinsRegular,
    fontSize: 10,
    lineHeight: 18,
  },
  subDescription: {
    color: flexTradButtonColor,
    fontFamily: POPPINS.PoppinsLight,
    fontSize: 10,
    lineHeight: 18,
  },
});

export default MyComponent;
