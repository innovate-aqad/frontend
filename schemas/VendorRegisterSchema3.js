import * as Yup from 'yup';

export const VendorRegisterSchema3 = Yup.object({
  tradeLicense: Yup.string(),
  cancelledChequeDocument: Yup.string(),
  cancelledChequeIBAN: Yup.string(),

  vatCertificateDocument: Yup.string().required('VAT Certificate document is required'),
  emiratesIDDocument: Yup.string(),
  emiratesIDNumber: Yup.string(),
});
