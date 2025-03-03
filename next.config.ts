import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes para export estático
  },
};

export default nextConfig;
