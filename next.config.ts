import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/hotel-well-suites-madivala",
        destination: "/hotel-well-suites-madiwala",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
