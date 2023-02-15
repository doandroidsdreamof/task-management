import React from 'react';

//? local imports //
import {
  FormSubmitButton,
  FormEmail,
  FormLink,
  FormHeader,
  FormPassword,
  FormLabel,
  FormError,
} from '../common/commonIndex';

//? redux-toolkit //
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { saveUserName, saveConfirmPassword } from '../../store/reducers/reducersIndex';

//? formik //
import { withFormik, FormikProps, FormikErrors, Form, Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//? types && interfaces //
import { RegisterFormProps } from '../../types/interface';

const holder: null | any = null;

const SignupSchema = Yup.object().shape({
  userName: Yup.string().min(6, 'Minimum six characters'),
  email: Yup.string().email('Invalid email'),
  password: Yup.string().required(),
  confirmPassword: Yup.string()
    .label('confirm password')
    .required()
    .oneOf([Yup.ref('password'), holder], 'Passwords must match'),
});

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const registerValues: RegisterFormProps = { userName: '', email: '', password: '', confirmPassword: '' };

  return (
    <div>
      <Formik
        validationSchema={SignupSchema}
        initialValues={registerValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          actions.setSubmitting(false);
        }}
      >
        <Form className='space-y-4 md:space-y-6'>
          <FormHeader text={'Create an account'} />

          <div>
            <FormLabel text={'User name'} htmlFor={'confirm-password'} />
            <Field
              type='text'
              name='userName'
              id='userName'
              placeholder='User name'
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
            <FormError name='userName' />
          </div>
          <FormEmail />
          <FormError name='email' />
          <FormPassword />
          <div>
            <FormLabel text={'Confirm password'} htmlFor={'confirm-password'} />
            <Field
              type='password'
              name='confirmPassword'
              placeholder='••••••••'
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
            <FormError name='confirmPassword' />
          </div>
          <FormSubmitButton text={'Create an account'} />
          <FormLink text={'Already have an account?'} link={'Login here'} router={'login'} />
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
