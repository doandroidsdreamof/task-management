import React from 'react';

const LoginPage = () => {
  return (
    <div className='relative py-16'>
      <div className='container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40'>
        <div className='m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12'>
          <div className='rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl'>
            <div className='p-8 py-12 sm:p-16'>
              <h2 className='mb-8 text-2xl font-bold text-gray-800 dark:text-white'>Sign in to your account</h2>
              <form action='' className='space-y-8'>
                <div className='space-y-2'>
                  <label htmlFor='email' className='text-gray-600 dark:text-gray-300'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300'
                  />
                </div>

                <div>
                  <div className='flex items-center justify-between'>
                    <label htmlFor='pwd' className='text-gray-600 dark:text-gray-300'>
                      Password
                    </label>
                    <button className='-mr-2 p-2' type='reset'>
                      <span className='text-sm text-blue-600'>Forgot your password ?</span>
                    </button>
                  </div>
                  <input
                    type='password'
                    name='pwd'
                    id='pwd'
                    className='focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300'
                  />
                </div>

                <button

                  className='relative rounded-full ease-in duration-150  bg-blue-500 flex h-11 w-full hover:bg-blue-600 items-center justify-center px-6  active:duration-75 active:before:scale-95'
                >
                  <span className='relative text-base font-semibold text-white dark:text-dark'>Login</span>
                </button>

                <p className='border-t border-gray-100 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400'>
                  Don&rsquo;t have an account ?
                  <a href='#' className='text-blue-600'>
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
