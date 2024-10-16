/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Enables the App Router if needed
  },
  output: "standalone", // Vercel optimization
};

module.exports = nextConfig;
