import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Your Email"),
  password: Yup.string().min(5).required("Please Enter Your Password"),  
});