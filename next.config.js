const STUDIO_REWRITE = {
  source: '/sanity/:path*',
  destination:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3333/sanity/:path*'
      : '/sanity/index.html',
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    transpilePackages: ["@algolia/autocomplete-shared"]
  },
  rewrites: () => [STUDIO_REWRITE],
  images: {
    domains: ['cdn.sanity.io', 'www.elkjop.no']
  }
}

module.exports = nextConfig
