/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // This should be placed directly under the root object, not inside 'compiler'
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openweathermap.org",
      },
    ],
  },
  webpack(config) {
    // Force using the WASM version of SWC to avoid native binary issues
    config.resolve.alias['@next/swc'] = require.resolve('@next/swc-wasm');
    return config;
  },
};

export default nextConfig;
