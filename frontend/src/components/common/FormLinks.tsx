import React, { FC, useEffect, useState } from 'react';
//? react-router-dom //
import { Link } from 'react-router-dom';
//? types && interfaces //
import { FormLinksProps } from '../../types/interface';

const FormLinks: FC<FormLinksProps> = ({ login, register }: FormLinksProps) => {


  const navigation: string = !login ? 'login' : 'register';

  return (
    <Link to={`/${navigation}`} className='text-blue-600'>
      {login || register}
    </Link>
  );
};

export default FormLinks;
