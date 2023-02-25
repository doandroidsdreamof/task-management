import React, { FC, useEffect } from 'react';

//? types && interfaces //
import { FormLinkProps } from '../../types/interface';

//? react-router-dom //
import { Link } from 'react-router-dom';

//? redux-toolkit //
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { cleanUpForm } from '../../store/slices/slicesIndex';

const FormLink: FC<FormLinkProps> = ({ text, link, router }: FormLinkProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(cleanUpForm());
  }, [document.URL]);

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
