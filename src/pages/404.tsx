import Link from 'next/link';

export default function Custom404() {
  return (
    <p style={{ textAlign: 'center' }}>
      Sorry, page you opened does not exist, you can{' '}
      <Link href='/'>
        <a style={{ color: '#638a6b', textDecoration: 'none' }}>
          return to home page
        </a>
      </Link>{' '}
      and continue investigation ;)
    </p>
  );
}
