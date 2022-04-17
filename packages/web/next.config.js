/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
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
