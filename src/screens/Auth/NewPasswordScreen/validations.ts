import * as yup from 'yup';

export const NewPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'Minimum characters for password is 8')
    .max(20, 'Maximum characters for password is 20')
    .required('Password field cannot be blank, is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords should be match'),
});
