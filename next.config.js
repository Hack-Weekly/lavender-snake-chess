/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        port: "",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["deta"],
  },
};

module.exports = nextConfig;
