import React,{FC} from 'react'

//? types && interfaces //
import { FormHeaderProps } from '../../types/interface'

const FormHeader:FC<FormHeaderProps> = ({loginPage,registerPage}: FormHeaderProps) => {
  console.log("🚀 ~ file: FormHeader.tsx:4 ~ FormHeader ~ props", loginPage)
  return (
    <h2 className='mb-8 text-2xl font-bold text-gray-800 dark:text-white'>{loginPage || registerPage}</h2>

  )
}

export default FormHeader