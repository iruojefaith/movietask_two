/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.themoviedb.org/3/movie/',
            port: '',
            pathname: '/account123/**',
          },
        ],
      },
}

module.exports = nextConfig
