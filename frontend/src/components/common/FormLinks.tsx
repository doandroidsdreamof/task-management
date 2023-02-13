import React from 'react';
//? react-router-dom //
import { Link } from 'react-router-dom';

const FormLinks = () => {
  return (
    <Link to={'/register'} className='text-blue-600'>
      Sign up
    </Link>
  );
};

export default FormLinks;
