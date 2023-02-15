import React, { FC } from 'react';

//? formik //
import { ErrorMessage } from 'formik';

//? types && interfaces //
import { FormErrorProps } from '../../types/interface';

const FormError: FC<FormErrorProps> = ({ name }: FormErrorProps) => {
  return (
    <>
      <ErrorMessage
        className='text-red-700 text-xs inline-flex'
        component={'span'}
        name={name}

      />
    </>
  );
};

export default FormError;
