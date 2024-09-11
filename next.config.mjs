/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["font.gstatic.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
