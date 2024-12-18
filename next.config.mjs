/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,  // This is the correct location for swcMinify
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openweathermap.org",
      },
    ],
  },
  webpack(config) {
    // Force using the WASM version of SWC
    config.resolve.alias['@next/swc'] = require.resolve('@next/swc-wasm');
    return config;
  },
};

export default nextConfig;
  