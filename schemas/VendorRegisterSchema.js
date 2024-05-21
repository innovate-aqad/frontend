import * as Yup from "yup";

export const VendorRegisterSchema = Yup.object({
  fullName: Yup.string().min(2).max(25).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  country : Yup.number().required("Please Select Your Country"),
  number : Yup.string().required("Please Enter Your Number"),
  dateOfBirth : Yup.string(),
});
