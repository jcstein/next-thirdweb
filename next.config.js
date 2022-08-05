/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require("next-plausible");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPlausibleProxy() && nextConfig;
