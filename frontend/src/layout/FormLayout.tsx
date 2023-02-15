import React, { FC } from 'react';

//? types && interfaces //
import { FormLayoutProps } from '../types/interface';

const FormLayout: FC<FormLayoutProps> = ({ login, register }: FormLayoutProps) => {
  return (
    <section className='bg-gray-50 dark:bg-gray-900 h-screen '>
      <div className='flex flex-col  items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>{login || register}</div>
        </div>
      </div>
    </section>
  );
};

export default FormLayout;