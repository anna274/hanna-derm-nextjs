import Link from 'next/link';
import React from 'react';
import { Container, Navigation, NavigationLink } from './styled';

const navigationLinks = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/services',
    label: 'Our services',
  },
  {
    to: '/doctors',
    label: 'Our doctors',
  },
  {
    to: '/about',
    label: 'About',
  },
];

export const Layout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <Container>
      <Navigation>
        {navigationLinks.map(({ to, label }) => (
          <Link key={label} href={to}>
            <NavigationLink>{label}</NavigationLink>
          </Link>
        ))}
      </Navigation>
      {children}
    </Container>
  );
};
