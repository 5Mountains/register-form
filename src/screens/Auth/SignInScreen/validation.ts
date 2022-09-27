import * as yup from 'yup';

export const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email cannot be blank, is required')
    .email('Email format is invalid'),
  password: yup
    .string()
    .required('Password cannot be blank, is required')
    .min(8, 'Minimum characters for password is 8'),
});
