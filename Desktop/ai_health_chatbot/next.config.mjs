/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', 
    images: {
        unoptimized: true,
    },
    experimental: {
        allowedDevOrigins: ['http://192.168.101.72'],
      },
};

export default nextConfig;
