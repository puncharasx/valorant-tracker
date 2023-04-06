/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['static.lolesports.com']
  }
}

module.exports = nextConfig
