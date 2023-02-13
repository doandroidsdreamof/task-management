import React, { FC } from 'react';

//? types && interfaces //
import { FormButtonProps } from '../../types/interface';

const FormButton: FC<FormButtonProps> = ({ text }: FormButtonProps) => {
  return (
    <button className='relative rounded-full ease-in duration-150  bg-blue-500 flex h-11 w-full hover:bg-blue-600 items-center justify-center px-6  active:duration-75 active:before:scale-95'>
      <span className='relative text-base font-semibold text-white dark:text-dark'>{text}</span>
    </button>
  );
};

export default FormButton;
