import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import {
  Submit,
  Form,
  Input,
  Label,
  Container,
  Span,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Span>Login</Span>
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Submit type="submit">Log In</Submit>
      </Form>
    </Container>
  );
};
