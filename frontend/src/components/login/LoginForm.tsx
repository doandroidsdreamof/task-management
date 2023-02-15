import React from 'react';

//? local imports //
import { FormSubmitButton, FormEmail, FormLink, FormHeader } from '../common/commonIndex';

//? react-router-dom //
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <>
      <FormHeader text={' Sign in to your account '} />
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
              <label htmlFor='remember' className='text-gray-500 dark:text-gray-300'>
                Remember me
              </label>
            </div>
          </div>
          <Link
            to='/reset-password'
            className='text-sm font-medium text-primary-600 hover:underline dark:text-primary-500'
          >
            Forgot password?
          </Link>
        </div>
        <FormSubmitButton text={'Sign in'} />
        <FormLink text={'Don’t have an account yet?'} link={'Sign up'} router={'register'} />
      </form>
    </>
  );
};

export default LoginForm;
