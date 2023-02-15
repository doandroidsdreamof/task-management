import React from 'react';

//? local imports //
import LoginForm from '../components/login/LoginForm';
import FormLayout from '../layout/FormLayout';

const LoginPage = () => {
  return (
    <>
      <FormLayout login={<LoginForm />} />
    </>
  );
};

export default LoginPage;
