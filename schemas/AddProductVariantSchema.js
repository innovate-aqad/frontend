import * as Yup from 'yup';

export const AddProductVariantSchema = Yup.object().shape({
  selectedFiles: Yup.array()
    .min(1, 'At least one file is required')
    .required('Files are required'),
  price: Yup.string().min(1).required('Please Enter Price'),
  comparePriceAt: Yup.string().min(5),
  quantity: Yup.string().min(1).required('Please Enter Quantity'),
  sku: Yup.string().min(1).required('Please Enter SKU'),
});
