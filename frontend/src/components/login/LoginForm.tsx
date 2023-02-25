import React from 'react';

//? local imports //
import { FormSubmitButton, FormEmail, FormLink, FormHeader, FormPassword, FormLabel } from '../common/commonIndex';

//? react-router-dom //
import { Link } from 'react-router-dom';
//? formik //
import { withFormik, FormikProps, FormikErrors, Form, Field, Formik } from 'formik';

//? types && interfaces //
import { LoginFormProps } from '../../types/interface';

//? redux-toolkit //
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { saveUserName, saveConfirmPassword } from '../../store/slices/slicesIndex';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const loginValues: LoginFormProps = { email: '', password: '' };

  return (
    <Formik
      initialValues={loginValues}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
      }}
    >
      <Form className='space-y-4 md:space-y-6'>
        <FormHeader text={'Sign in to your account'} />
        <FormEmail />
        <FormPassword />
        <div className='flex items-center justify-between'>
          <div className='flex items-start'>
            <div className='flex items-center h-5'>
              <input
                id='remember'
                aria-describedby='remember'
                type='checkbox'
                className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
              />
            </div>
            <div className='ml-3 text-sm'>
              <FormLabel text={'Remember me'} htmlFor={'remember'} />
            </div>
          </div>
          <Link
            to={'/reset-password'}
            className='text-sm font-medium text-primary-600 hover:underline dark:text-primary-500'
          >
            Forgot password?
          </Link>
        </div>
        <FormSubmitButton text={'Sign in'} />
        <FormLink text={'Don’t have an account yet?'} link={'Sign up'} router={'register'} />
      </Form>
    </Formik>
  );
};

export default LoginForm;
