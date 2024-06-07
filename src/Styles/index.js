import {StyleSheet} from 'react-native';
import {POPPINS, ROBOTO} from '../constants/CustomFontFamily';
import {blue, lowGray} from '../constants/Theme';

const CustomStyle = StyleSheet.create({
  activeButton: {
    backgroundColor: '#F96900',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    color: 'red',
  },
  invactiveButton: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    color: 'red',
  },
  topNavigation: {
    height: 15,
    width: 23.3,
  },
  signupHeading: {
    fontFamily: ROBOTO.RobotoBold,
    fontSize: 35,
    color: blue,
  },
  signupSubDec: {
    fontFamily: POPPINS.PoppinsLight,
    fontSize: 13,
    color: lowGray,
    paddingTop: 5,
  },
  inputLabel: {
    fontFamily: POPPINS.PoppinsMedium,
    fontSize: 13,
    color: blue,
  },
  inputStyle: {
    paddingVertical: 4,
    margin: 3,
    borderWidth: 1,
    color: 'gray',
    backgroundColor: 'white',
    fontFamily: 'Poppins-Light',
  },
});

export default CustomStyle;
