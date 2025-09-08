/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["backend.searchgurbani.com"], // 👈 allow this domain
  },
};

module.exports = nextConfig;
