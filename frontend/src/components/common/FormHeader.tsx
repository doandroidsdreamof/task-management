import React, { FC } from 'react';

//? types && interfaces //
import { TextProps } from '../../types/interface';

const FormHeader: FC<TextProps> = ({ text }: TextProps) => {
  return <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>{text}</h1>;
};

export default FormHeader;
