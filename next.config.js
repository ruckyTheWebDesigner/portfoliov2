/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["images.unsplash.com", "cdn.hashnode.com"],
    remotePatterns: [
      {
        // protocol: 'https',
        hostname: "cdn.hashnode.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
