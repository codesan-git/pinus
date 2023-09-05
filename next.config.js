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
}

module.exports = nextConfig
