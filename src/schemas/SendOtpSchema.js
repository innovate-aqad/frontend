import * as Yup from 'yup';

export const SendOtpSchema = Yup.object({
  email: Yup.string().email().required('Please Enter Your Email'),
});
