/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    typedRoutes: true
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
