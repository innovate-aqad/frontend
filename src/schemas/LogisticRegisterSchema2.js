import * as Yup from 'yup';

export const LogisticRegisterSchema2 = Yup.object({
  companyName: Yup.string()
    .min(2)
    .max(50)
    .required('Please Enter Company Name'),
  designation: Yup.string().min(2).max(50).required('Please Enter Designation'),
  tradeLicenseNo: Yup.string().min(2).max(50),
  companyAddress: Yup.string()
    .min(2)
    .max(100)
    .required('Please Enter Company Address'),
  companyAddressline2: Yup.string().min(2).max(100),
  vendorPoBox: Yup.string().min(2).max(50).required('Please Enter PO Box'),
  country: Yup.string().min(1).max(10).required('Please Enter Country Code'),
});
