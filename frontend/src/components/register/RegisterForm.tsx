import React, { useState, useEffect } from 'react';

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

//? axios //
import axios from 'axios';

//? redux-toolkit //
import { useAppDispatch } from '../../store/hooks';

//? formik //
import { Form, Field, Formik } from 'formik';
import * as Yup from 'yup';

//? types && interfaces //
import { RegisterFormProps } from '../../types/interface';

//? helper functions //
import SignupSchema from '../../schemas/registerSchema';

import getRequest from '../../api/getRequest';

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const registerValues: RegisterFormProps = { userName: '', password: '', email: '', confirmPassword: '' };


  function testPost(postData: RegisterFormProps) {
    axios
      .post('http://localhost:3000/v1/kanban/users/register', {
        userName: postData.userName,
        email: postData.email,
        password: postData.password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getValidData(data: RegisterFormProps) {
    SignupSchema.isValid(data).then((valid) => {
      console.log(valid); // true
      testPost(data)
    });
  }

  return (
    <div>
      <Formik
        validationSchema={SignupSchema}
        initialValues={registerValues}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          getValidData(values);
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
