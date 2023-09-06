/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'img.logoipsum.com'
            }
        ]
    },
    transpilePackages: ['three'],
    compress: true,
}

module.exports = nextConfig
