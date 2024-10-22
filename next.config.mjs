/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "monitor-backend-rust.vercel.app",
        port: "",
        pathname: "/api/customers/**", // Adjust this to match the correct path for your images
      },
    ],
  },
};

export default nextConfig;
