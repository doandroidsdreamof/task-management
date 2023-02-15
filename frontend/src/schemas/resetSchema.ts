import * as Yup from 'yup';

const holder: null | any = null;

const resetSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email'),
  password: Yup.string().required(),
  confirmPassword: Yup.string()
    .label('confirm password')
    .required()
    .oneOf([Yup.ref('password'), holder], 'Passwords must match'),
});

export default resetSchema;
