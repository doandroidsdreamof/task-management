import React, { FC } from 'react';

//? types && interfaces //
import { FormLinkProps } from '../../types/interface';

//? react-router-dom //
import { Link } from 'react-router-dom';

const FormLink: FC<FormLinkProps> = ({ text, link,router }: FormLinkProps) => {
  return (
    <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
       {text}
      <Link to={`/${router}`} className='font-medium text-primary-600 hover:underline dark:text-primary-500'>
        {link}
      </Link>
    </p>
  );
};

export default FormLink;
