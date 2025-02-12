/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm AI Images',
    description: 'The official store for Kasm AI workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://emrul.github.io/kasm_ai_registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
