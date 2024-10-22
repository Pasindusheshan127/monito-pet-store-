/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "monitor-backend-rust.vercel.app",
        port: "",
        pathname: "/api/customers/**",
      },
      {
        protocol: "https",
        hostname: "monitor-backend-rust.vercel.app",
        port: "",
        pathname: "/api/pets/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.figma.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
