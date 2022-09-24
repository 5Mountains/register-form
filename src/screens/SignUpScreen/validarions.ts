import * as yup from 'yup';

export const SignSchema = yup.object().shape({
  nickname: yup.string().required('Nickname cannot be blank, is required'),
  email: yup
    .string()
    .required('Email cannot be blank, is required')
    .email('Email format is invalid'),
  phoneNumber: yup
    .number()
    .required('Phone number cannot be blank, is required'),
  password: yup
    .string()
    .required('Password cannot be blank, is required')
    .min(8, 'Minimum characters for password is 8'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null])
    .required('Password should be match'),
});
