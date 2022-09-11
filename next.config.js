/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    backendBaseUrl: 'http://localhost:8000',
  },
  redirects: async () => [
    {
      source: '/old-page',
      destination: '/',
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
