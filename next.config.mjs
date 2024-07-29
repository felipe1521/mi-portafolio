/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's3.amazonaws.com',
          port: '',
          pathname: '/www.myportalio.felipe.alarcon.contreras.cl/**',
        },
      ],
    },
};

export default nextConfig;