import * as Yup from "yup";

export const VendorRegisterSchema2 = Yup.object({
  companyName: Yup.string().min(2).max(50).required("Please Enter Company Name"),
  designation: Yup.string().min(2).max(50).required("Please Enter Designation"),
  tradeLicenseNo: Yup.string().min(2).max(50),
  companyAddress: Yup.string().min(2).max(100).required("Please Enter Company Address"),
  companyAddressline2: Yup.string().min(2).max(100),
  vendorPoBox: Yup.string().min(2).max(50).required("Please Enter Vendor PO Box"),
  country: Yup.string().min(1).max(10).required("Please Enter Country Code"),
  warehouse_addresses: Yup.array().of(
    Yup.object().shape({
      address: Yup.string().required('Warehouse address is required'),
      po_box: Yup.string().required('PO Box is required'),
    })
  ).test('atLeastOnePair', 'At least one pair of warehouse address and PO Box is required', function(value) {
    return value && value.some(pair => pair.address && pair.po_box);
  }),
//   email: Yup.string().email().required("Please Enter Your Email"),
//   country : Yup.number().required("Please Select Your Country"),
//   number : Yup.string().required("Please Enter Your Number"),
//   dateOfBirth : Yup.string(),
});
