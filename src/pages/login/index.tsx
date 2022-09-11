import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { Button } from 'components';
import { Container, FromInput, PageTitle } from 'styled/login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onSubmit = async () => {
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (!res?.error) {
      router.push((router.query.callbackUrl as string) || '/dashboard');
    } else {
      alert(res?.error);
    }
  };

  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch('/dashboard');
  }, []);

  return (
    <>
      <PageTitle>Login</PageTitle>
      <Container>
        <FromInput
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          type='email'
        />
        <FromInput
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          type='password'
        />
        <Button onClick={onSubmit}>Login</Button>
      </Container>
    </>
  );
};

export default Login;
