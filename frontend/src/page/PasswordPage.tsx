import React from 'react'

//? local imports //
import FormLayout from '../layout/FormLayout';
import ResetPasswordForm from '../components/resetPassword/ResetPasswordForm';




const PasswordPage = () => {
  return (
    <>
      <FormLayout resetPassword={<ResetPasswordForm />} />
    </>
  )
}

export default PasswordPage