/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  env: {
    NEXT_APP_API: process.env.NEXT_APP_API,
    NEXT_APP_STRAPI_API: process.env.NEXT_APP_STRAPI_API,
    NEXT_APP_DOMAIN: process.env.NEXT_APP_DOMAIN,
    
  }
}

module.exports = nextConfig
