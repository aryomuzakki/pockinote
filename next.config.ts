import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const hideConsole = process.env.HIDE_CONSOLE
  ? process.env.HIDE_CONSOLE === "true"
  : isProd;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  eslint: { dirs: ["src"], ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  compiler: { removeConsole: hideConsole },
};

export default nextConfig;
