const path = require('path');


/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // output: 'export',
  images: {
    domains: ["backend.searchgurbani.com"], // 👈 allow this domain
  },
  outputFileTracingRoot: path.join(__dirname),

  eslint: {
    ignoreDuringBuilds: true, // ✅ ignore eslint warnings during build
  },

  typescript: {
    ignoreBuildErrors: true, // ✅ ignore TS type errors during build
  },

  // webpack(config) {
  //   // ✅ ignore annoying warnings
  //   config.ignoreWarnings = [
  //     { message: /Global CSS cannot be imported/ },
  //     { message: /different in casing/ },
  //   ];
  //   return config;
  // },
};

module.exports = nextConfig;
