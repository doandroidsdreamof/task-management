import React from 'react';

//? local imports //
import { FormSubmitButton, FormEmail, FormLink, FormHeader, FormPassword, FormLabel } from '../common/commonIndex';
//? redux-toolkit //
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { saveUserName } from '../../store/reducers/reducersIndex';




const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const reduxRegisterForm = useAppSelector((state) => state.registerForm.registerFormSlice)


  return (
    <>
      <FormHeader text={'Create and account'} />
      <form className='space-y-4 md:space-y-6' action='#'>
        <div>
          <FormLabel text={'User name'} htmlFor={'confirm-password'} />
          <input
           onChange={(e) => dispatch(saveUserName(e.target.value))}
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
          <input
            type='confirm-password'
            name='confirm-password'
            id='confirm-password'
            placeholder='••••••••'
            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <FormSubmitButton text={'Create an account'} />
        <FormLink text={'Already have an account?'} link={'Login here'} router={'login'} />
      </form>
    </>
  );
};

export default RegisterForm;
