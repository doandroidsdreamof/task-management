import React from 'react';

//? local imports //
import { FormSubmitButton, FormEmail, FormLink, FormHeader, FormPassword, FormLabel } from '../common/commonIndex';

//? redux-toolkit //
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { saveUserName, saveConfirmPassword } from '../../store/reducers/reducersIndex';

//? formik //
import { withFormik, FormikProps, FormikErrors, Form, Field, Formik } from 'formik';

//? types && interfaces //
import { RegisterFormProps } from '../../types/interface';

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const registerValues: RegisterFormProps = { userName: '', email: '', password: '', confirmPassword: '' };

  return (
    <div>
      <Formik
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
          </div>
          <FormEmail />
          <FormPassword />
          <div>
            <FormLabel text={'Confirm password'} htmlFor={'confirm-password'} />
            <Field
              type='password'
              name='confirmPassword'
              placeholder='••••••••'
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
          </div>
          <FormSubmitButton text={'Create an account'} />
          <FormLink text={'Already have an account?'} link={'Login here'} router={'login'} />
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
