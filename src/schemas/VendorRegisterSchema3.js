import * as Yup from 'yup';

export const VendorRegisterSchema3 = Yup.object({
  // cancelledChequeIBAN: Yup.string(),
  // emiratesIDNumber: Yup.string(),

  vat_certificate: Yup.mixed()
    .required('VAT Certificate document is required')
    .test(
      'fileSize',
      'File too large',
      value => !value || value.size <= 5 * 1024 * 1024, // 5MB file size limit
    )
    .test(
      'fileFormat',
      'Unsupported file format',
      value =>
        !value ||
        ['application/pdf', 'image/jpeg', 'image/jpg'].includes(value.type),
    ),
});
