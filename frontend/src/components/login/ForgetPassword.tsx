import React from 'react';

//? react-router-dom //
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <Link to='/reset-password'>
      <button className='-mr-2 p-2' type='reset'>
        <span className='text-sm text-blue-600'>Forgot your password?</span>
      </button>
    </Link>
  );
};

export default ForgetPassword;
