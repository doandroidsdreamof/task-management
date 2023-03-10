export interface FormLinkProps {
  text: string;
  link: string;
  router: string;
}

export interface TextProps {
  text: string;
}

export interface LabelProps extends TextProps {
  htmlFor: string;
}

export interface LoginFormProps {
  email: string;
  password: string;
}

export interface ResetPassword extends LoginFormProps {
  confirmPassword: string;
}

export interface RegisterFormProps {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FormErrorProps {
  name: string;
}

