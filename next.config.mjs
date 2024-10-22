/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "monitor-backend-rust.vercel.app",
        port: "",
        pathname: "/api/customers/**", // Existing pattern for customers
      },
      {
        protocol: "https",
        hostname: "monitor-backend-rust.vercel.app",
        port: "",
        pathname: "/api/pets/**", // Existing pattern for pets
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com", // New entry for Firebase Storage
        port: "",
        pathname: "/**", // Allow access to any path under this hostname
      },
    ],
  },
};

export default nextConfig;
