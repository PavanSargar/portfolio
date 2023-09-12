/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "photos.fife.usercontent.google.com" },
      { protocol: "https", hostname: "media.licdn.com" },
      { protocol: "https", hostname: "fiverr-res.cloudinary.com" },
      { protocol: "https", hostname: "ik.imagekit.io" },
    ],
  },
};

module.exports = nextConfig;
