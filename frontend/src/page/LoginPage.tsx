import React from 'react';

//? local imports //
import { ForgetPassword } from '../components/login/loginIndex';
import { FormHeader, FormLinks, FormButton, FormText } from '../components/common/commonIndex';

//? react-router-dom //
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const header: string = 'Sign in to your account';
  const signUp: string = 'Sign up';

  return (
    <div className='relative py-16'>
      <div className='container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40'>
        <div className='m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12'>
          <div className='rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl'>
            <div className='p-8 py-12 sm:p-16'>
              <FormHeader loginPage={header} />
              <form action='' className='space-y-8'>
                <div className='space-y-2'>
                  <label htmlFor='userName' className='text-gray-600 dark:text-gray-300'>
                    User Name
                  </label>
                  <input
                    type='text'
                    name='userName'
                    id='userName'
                    className='focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300'
                  />
                </div>

                <div>
                  <div className='flex items-center justify-between'>
                    <label htmlFor='pwd' className='text-gray-600 dark:text-gray-300'>
                      Password
                    </label>

                    <ForgetPassword />
                  </div>
                  <input
                    type='password'
                    name='pwd'
                    id='pwd'
                    className='focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300'
                  />
                </div>

                <FormButton text={'login'} />
                <div className='flex flex-row items-center '>
                  <FormText text={"Don't have an account ?"} />
                  <FormLinks login={signUp} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
