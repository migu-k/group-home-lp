/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'enyama.jp',
      },
      {
        protocol: 'https',
        hostname: 'as-heim.com',
      },
    ],
  },
}

module.exports = nextConfig
