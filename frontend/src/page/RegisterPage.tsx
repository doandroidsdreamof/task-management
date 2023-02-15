import React from 'react';

//? local imports //
import FormLayout from '../layout/FormLayout';
import RegisterForm from '../components/register/RegisterForm';

const RegisterPage = () => {
  return (
    <>
      <FormLayout register={<RegisterForm />} />
    </>
  );
};

export default RegisterPage;
