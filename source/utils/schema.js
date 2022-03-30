import * as Yup from 'yup';
import I18n from '../lang/i18n';

const addProductSchema = Yup.object({
  name: Yup.string().required(I18n.t('validation.required')),
  sku: Yup.string().required(I18n.t('validation.required')),
  hsn: Yup.string().required(I18n.t('validation.required')),
  price: Yup.string().required(I18n.t('validation.required')),
  inventory: Yup.string().required(I18n.t('validation.required')),
  minOrderQuantity: Yup.string().required(I18n.t('validation.required')),
});
const addCatalogSchema = Yup.object({
  name: Yup.string().required(I18n.t('validation.required')),
});
const addCustomerSchema = Yup.object({
  name: Yup.string().required(I18n.t('validation.required')),
  email: Yup.string()
    .email(I18n.t('validation.email'))
    // .required(I18n.t('validation.required'))
    .trim(),
});
const addEmployeeSchema1 = Yup.object({
  name: Yup.string().required(I18n.t('validation.required')),
  phone: Yup.string().required(I18n.t('validation.required')),
  role: Yup.string().required(I18n.t('validation.required')),
  email: Yup.string()
    .email(I18n.t('validation.email'))
    .required(I18n.t('validation.required'))
    .trim(),
});
const addEmployeeSchema2 = Yup.object({
  name: Yup.string().required(I18n.t('validation.required')),
  phone: Yup.string().required(I18n.t('validation.required')),
  role: Yup.string().required(I18n.t('validation.required')),
  email: Yup.string()
    .email(I18n.t('validation.email'))
    .required(I18n.t('validation.required'))
    .trim(),
  password: Yup.string().required(I18n.t('validation.required')).min(8),
});
const accountInfoSchema = Yup.object({
  name: Yup.string().required(I18n.t('validation.required')),
  email: Yup.string()
    .email(I18n.t('validation.email'))
    .required(I18n.t('validation.required'))
    .trim(),
});
const companyInfoSchema = Yup.object({
  name: Yup.string().required(I18n.t('validation.required')),
  // country_id: Yup.string().required(I18n.t('validation.required')),
});
const notificationSchema = Yup.object({
  email: Yup.string()
    .email(I18n.t('validation.email'))
    .required(I18n.t('validation.required'))
    .trim(),
});
const addTaxSchema = Yup.object({
  name: Yup.string().required(I18n.t('validation.required')),
  percent: Yup.string().required(I18n.t('validation.required')),
});
const addCategorySchema = Yup.object({
  name: Yup.string().required(I18n.t('validation.required')),
  // parentCategory: Yup.string().required(I18n.t('validation.required')),
});

export {
  addProductSchema,
  addCatalogSchema,
  accountInfoSchema,
  addTaxSchema,
  notificationSchema,
  addCategorySchema,
  addEmployeeSchema1,
  addEmployeeSchema2,
  addCustomerSchema,
  companyInfoSchema,
};
