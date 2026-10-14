/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Next/Vercel servira WebP u veličini koja odgovara ekranu (SVG ide bez obrade)
    formats: ["image/webp"],
  },
}

export default nextConfig
