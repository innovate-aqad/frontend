import * as Yup from 'yup';

// export const AddProductVariantSchema = Yup.object().shape({
//   selectedFiles: Yup.array()
//     .min(1, 'At least one file is required')
//     .required('Files are required'),
//   price: Yup.string().min(1).required('Please Enter Price'),
//   comparePriceAt: Yup.string(),
//   quantity: Yup.string().min(1).required('Please Enter Quantity'),
//   sku: Yup.string().min(1).required('Please Enter SKU'),
//   valueWareHouse: Yup.string().required('Please Select WareHouse'),
//   // valueVariation: Yup.string().required('Please Select Variation'),
//   // valueVariationUnit: Yup.string().required('Please Enter Variation Value'),
//   variations: Yup.array().of(
//     Yup.object().shape({
//       valueVariation: Yup.string().required('Please Select Variation'),
//       valueVariationUnit: Yup.string().required('Please Enter Variation Value'),
//     }),
//   ),
// });

export const AddProductVariantSchema = Yup.object().shape({
  // selectedFiles: Yup.array()
  //   .min(1, 'At least one file is required')
  //   .required('Files are required'),
  variationType: Yup.string().min(1).required('Please Select Variiaton'),
  variationValue: Yup.string().min(1).required('Please Enter Variiaton Value'),
  price: Yup.string().min(1).required('Please Enter Price'),
  comparePriceAt: Yup.string(),
  sku: Yup.string().min(1).required('Please Enter SKU'),
  wareHouses: Yup.array()
    .of(
      Yup.object().shape({
        po_box: Yup.string().required('Please Select Warehouse'),
        quantity: Yup.string().required('Please Enter Quantity'),
      }),
    )
    .test(
      'at-least-one-pair',
      'At least one pair of warehouse and quantity must be present',
      wareHouses => {
        return wareHouses.some(
          warehouse => warehouse.po_box && warehouse.quantity,
        );
      },
    ),
});
