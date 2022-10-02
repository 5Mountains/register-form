import * as yup from 'yup';

export const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email cannot be blank, is required')
    .email('Email format is invalid'),
});
