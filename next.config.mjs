/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "assets.coingecko.com",
      "api.coingecko.com",
      "raw.githubusercontent.com",
      "myterrablobs.blob.core.windows.net",
      "celo-org.github.io"
    ],
  },
};

export default nextConfig;
