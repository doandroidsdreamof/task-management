export interface FormLinkProps {
  text: string;
  link: string;
  router: string;
}

export interface FormLayoutProps {
  login?: React.ReactNode;
  register?: React.ReactNode;
}

export interface TextProps {
  text: string;
}

export interface  LabelProps extends TextProps   {
  htmlFor: string;
}


export interface LoginFormProps {
  email: string;
  password: string;
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
