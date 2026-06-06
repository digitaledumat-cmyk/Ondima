import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Autorise l'accès via IP réseau en dev (évite l'erreur "host" / cross-origin) */
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "192.168.11.101",
  ],

  images: {
    formats: ["image/webp", "image/avif"],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ondima.ma" }],
        destination: "https://ondima.ma/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
