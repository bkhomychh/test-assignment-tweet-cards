import { StyledButton } from './Button.styled';

const Button = ({ children, ...otherProps }) => {
  console.log({ ...otherProps });
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};

export default Button;
