import * as Yup from 'yup';

export const LogisticRegisterSchema3 = Yup.object({
  trade_license: Yup.mixed()
    .required('Trade License document is required')
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
