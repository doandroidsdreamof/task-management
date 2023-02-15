import React from 'react';

//? local imports //
import{FormSubmitButton,FormEmail,FormLink,FormHeader} from '../common/commonIndex'


const RegisterForm = () => {
  return (
    <>

 <FormHeader text={'Create and account'} />

      <form className='space-y-4 md:space-y-6' action='#'>
       <FormEmail />

        <div>
          <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='••••••••'
            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <div>
          <label htmlFor='confirm-password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Confirm password
          </label>
          <input
            type='confirm-password'
            name='confirm-password'
            id='confirm-password'
            placeholder='••••••••'
            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <div className='flex items-start'></div>

        <FormSubmitButton text={'Create an account'} />
        <FormLink text={'Already have an account?'} link={'Login here'} router={'login'} />
      </form>
    </>
  );
};

export default RegisterForm;
