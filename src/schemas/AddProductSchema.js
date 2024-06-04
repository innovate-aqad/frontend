import * as Yup from 'yup';

export const AddProductSchema = Yup.object({
  name: Yup.string().min(2).max(50).required('Please Enter Product Name'),
  description: Yup.string().required('Please Enter Product Description'),
  upc: Yup.string().required('Please Enter Product UPC'),
  value: Yup.string().required('Please Select Category'),
  valueSubCategory: Yup.string().required('Please Select Sub Category'),
  valueBrand: Yup.string().required('Please Select Brand'),
});
