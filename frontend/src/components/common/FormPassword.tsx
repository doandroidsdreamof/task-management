import React from 'react';

//? local imports //
import { FormLabel, FormError } from '../common/commonIndex';

//? redux-toolkit //
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { savePassword } from '../../store/reducers/reducersIndex';

//? formik //
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

const FormPassword = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <FormLabel text={'Password'} htmlFor={'password'} />
      <Field
        type='password'
        name='password'
        id='password'
        placeholder='••••••••'
        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      />
      <FormError name='password' />
    </div>
  );
};

export default FormPassword;
