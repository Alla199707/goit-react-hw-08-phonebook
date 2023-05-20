import { StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/register">Registration</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
    </div>
  );
};
