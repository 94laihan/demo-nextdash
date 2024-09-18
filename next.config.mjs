/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "www.chinapress.com.my",
        },
      ],
    },
  };
  
// module.exports = nextConfig;

export default nextConfig;
