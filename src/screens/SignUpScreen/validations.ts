import * as yup from 'yup';

export const SignUpSchema = yup.object().shape({
  nickname: yup
    .string()
    .min(3, 'Minimum characters for nickname is 3')
    .max(20, 'Maximum characters for nickname is 20')
    .required('Nickname field cannot be blank, is required'),
  email: yup
    .string()
    .email('Email format is invalid')
    .required('Email field cannot be blank, is required'),
  phoneNumber: yup
    .number()
    .required('Phone number field cannot be blank, is required'),
  password: yup
    .string()
    .min(8, 'Minimum characters for password is 8')
    .max(20, 'Maximum characters for password is 20')
    .required('Password field cannot be blank, is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords should be match'),
});
