/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Trattamento non più offerto: la vecchia pagina porta alla riflessologia plantare.
  async redirects() {
    return [{ source: '/servizi/riflessologia-impacco', destination: '/riflessologia-plantare', permanent: true }]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
