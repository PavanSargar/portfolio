/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "photos.fife.usercontent.google.com" },
      {protocol: "https", hostname: "media.licdn.com"}
    ],
  },
};

module.exports = nextConfig;