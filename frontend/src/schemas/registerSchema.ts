import * as Yup from 'yup';

const holder: null | any = null;

const SignupSchema = Yup.object().shape({
  userName: Yup.string().min(6, 'Minimum six characters'),
  email: Yup.string().email('Invalid email'),
  password: Yup.string()
    .required()
    .min(8, 'Must be 8 characters or more')
    .matches(/[a-z]+/, 'One lowercase character')
    .matches(/[A-Z]+/, 'One uppercase character')
    .matches(/\d+/, 'One number'),
  confirmPassword: Yup.string()
    .label('confirm password')
    .required()
    .oneOf([Yup.ref('password'), holder], 'Passwords must match'),
});

export default SignupSchema;
