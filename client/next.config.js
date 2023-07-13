/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.SERVER_HOST}:${process.env.API_PORT}/api/:path*` // Proxy to Backend
      }
    ];
  },
  reactStrictMode: false,
  experimental: {
    typedRoutes: true
  },
  env: {
    API_HOST: 'https://localhost',
    API_PORT: 3000
  },
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      displayName: true,
      // Enabled by default.
      ssr: true,
      // Enabled by default.
      fileName: false
      // Not supported yet.
      // minify: true,
      // Not supported yet.
      // transpileTemplateLiterals: true,
      // Not supported yet.
      // pures: true,
    }
  }
};
