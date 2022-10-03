import * as yup from 'yup';

export const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email cannot be blank, is required')
    .email('Email format is invalid'),
  code: yup
    .string()
    .required('Code cannot be blank, is required')
    .min(6, 'The code must have 6 characters')
    .max(6, 'The code must have 6 characters'),
});
