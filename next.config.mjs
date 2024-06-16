/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        // unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'w.wallhaven.cc',
                pathname: '/**',
            },
        ],
    },
    experimental: {
        swcPlugins: [
            [
                '@swc/plugin-transform-imports',
                {
                    '@mui/material': {
                        transform: '@mui/material/{{member}}',
                    },
                },
            ],
        ],
    },
};

export default nextConfig;
