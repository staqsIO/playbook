/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable compression
  compress: true,

  // Optimize output - generates static HTML/CSS/JS at build time
  // Remove this line if you need server-side features in the future
  output: 'export',

  // Disable image optimization for static export (uses Next.js server)
  // If you remove 'output: export', uncomment the images config below
  images: {
    unoptimized: true, // Required for static export
  },

  // Configure headers for better caching
  // Note: These work on Vercel/platforms that support them, not in pure static export
  async headers() {
    return [
      {
        // Cache all static pages
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Cache video files aggressively (they don't change often)
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache poster images
        source: '/images/posters/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache brand images
        source: '/images/brands/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache fonts
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Optimize package imports
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'gsap'],
  },

  // Trailing slash for better static hosting compatibility
  trailingSlash: true,
};

export default nextConfig;
