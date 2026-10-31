import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,

  /* Autorise l'accès via IP réseau en dev (évite l'erreur "host" / cross-origin) */
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "192.168.11.101",
  ],

  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ninoplayer.com",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/guide-installation",
        destination: "/guide",
        permanent: true,
      },
      {
        source: "/abonnement-iptv-maroc",
        has: [{ type: "host", value: "www.ondima.ma" }],
        destination: "https://ondima.ma/abonnement-iptv-pro",
        statusCode: 301,
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.ondima.ma" }],
        destination: "https://ondima.ma/pro",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ondima.ma" }],
        destination: "https://ondima.ma/:path*",
        permanent: true,
      },
      {
        source: "/abonnement-iptv-maroc",
        destination: "/abonnement-iptv-pro",
        statusCode: 301,
      },
      {
        source: "/",
        destination: "/pro",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
