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
import { useAppDispatch } from '../../store/hooks';

//? formik //
import { Form, Field, Formik } from 'formik';

//? types && interfaces //
import { ResetPassword } from '../../types/interface';

//? helper functions //
import resetSchema from '../../schemas/resetSchema';

const ResetPasswordForm = () => {
  const newPasswordValues: ResetPassword = { email: '', password: '', confirmPassword: '' };

  return (
    <div>
      <Formik
        validationSchema={resetSchema}
        initialValues={newPasswordValues}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
        }}
      >
        <Form className='space-y-4 md:space-y-6'>
          <FormHeader text={'Change Password'} />
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
          <FormSubmitButton text={'Reset password'} />
        </Form>
      </Formik>
    </div>
  );
};

export default ResetPasswordForm;
