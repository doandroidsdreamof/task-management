import React,{FC} from 'react'

//? types && interfaces //
import { LabelProps } from '../../types/interface'

const FormLabel:FC<LabelProps> = ({text,htmlFor}:LabelProps) => {
  return (
    <label htmlFor={htmlFor} className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
    {text}
  </label>
  )
}

export default FormLabel