import * as Yup from "yup";

export const OtpSchema = Yup.object({
  otp: Yup.string().min(4).required("Please Enter OTP"),
});