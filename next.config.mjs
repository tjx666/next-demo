/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'w.wallhaven.cc',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
