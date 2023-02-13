//* Dark mode context-api //
export interface ThemeProps {
  initialTheme?: string;
  children?: React.ReactNode;
}

export interface FormHeaderProps {
  loginPage?: string;
  registerPage?: string;
  passwordPage?: string;
}
export interface FormLinksProps {
  login?: string;
  register?: string;
}

export interface FormButtonProps extends FormLinksProps {
  text: string;
}

export interface FormTextProps {
  text: string;
}
