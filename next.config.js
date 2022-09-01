/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['previews.123rf.com', 'thumbs.dreamstime.com'],
    },
};

module.exports = nextConfig;
