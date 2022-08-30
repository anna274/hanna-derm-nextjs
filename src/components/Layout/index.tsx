import Link from 'next/link';
import React from 'react';
import { Container, Navigation, NavigationLink } from './styled';
import { useSession, signOut } from 'next-auth/react';
import { InlineButton } from 'components/Button';

const getNavigationLinks = ({ session }: { session: any }) => {
  return [
    {
      to: '/',
      label: 'Home',
      condition: true,
    },
    {
      to: '/services',
      label: 'Our services',
      condition: session.status !== 'authenticated',
    },
    {
      to: '/doctors',
      label: 'Our doctors',
      condition: session.status !== 'authenticated',
    },
    {
      to: '/about',
      label: 'About',
      condition: session.status !== 'authenticated',
    },
    {
      to: '/admin',
      label: 'Admin',
      condition: session.data?.user?.role === 'admin',
    },
    {
      to: '/dashboard',
      label: 'Dashboard',
      condition: session.status === 'authenticated',
    },
  ].filter(({ condition }) => condition);
};

export const Layout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const session = useSession();
  return (
    <Container>
      <Navigation>
        {getNavigationLinks({ session }).map(({ to, label }) => (
          <Link key={label} href={to}>
            <NavigationLink>{label}</NavigationLink>
          </Link>
        ))}
        {session.status !== 'authenticated' && (
          <Link href={'/login'}>
            <NavigationLink>Login</NavigationLink>
          </Link>
        )}
        {session.status === 'authenticated' && (
          <InlineButton onClick={() => signOut()}>Logout</InlineButton>
        )}
      </Navigation>
      {children}
    </Container>
  );
};
