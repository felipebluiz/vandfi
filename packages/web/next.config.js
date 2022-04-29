/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  pageExtensions: ['page.tsx', 'page.ts'],
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true
      }
    ]
  }
}
