/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ['localhost'],
  },
    eslint:{
        ignoreDuringBuilds:true
    },
    output:"export",
    images:{
      unoptimized: true,
    }
};

export default nextConfig;
