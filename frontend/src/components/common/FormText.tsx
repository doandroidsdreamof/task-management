import React,{FC} from 'react';

//? types && interfaces //
import { FormTextProps } from '../../types/interface';

const FormText:FC<FormTextProps> = ({text}:FormTextProps) => {
  return (
    <p className='border-t border-gray-100 dark:border-gray-700  text-sm text-gray-500 dark:text-gray-400'>
      {text}
    </p>
  );
};

export default FormText;
