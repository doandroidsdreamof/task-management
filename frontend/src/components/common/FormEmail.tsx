import React from 'react';

import FormLabel from './FormLabel';

//? redux-toolkit //
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { saveEmail } from '../../store/reducers/reducersIndex';

const FormEmail = () => {
  const dispatch = useAppDispatch();
  const reduxEmail = useAppSelector((state) => state.registerForm.formSlice)
  console.log("🚀 ~ file: FormEmail.tsx:12 ~ FormEmail ~ reduxRegisterForm", reduxEmail)

  return (
    <div>
      <FormLabel text={'Your email'} htmlFor={'email'} />
      <input
        onChange={(e) => dispatch(saveEmail(e.target.value))}
        type='email'
        name='email'
        id='email'
        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder='email'
      />
    </div>
  );
};

export default FormEmail;
