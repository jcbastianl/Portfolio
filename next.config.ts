import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Si tu repositorio no se llama "tu-usuario.github.io" sino algo como "Portafolio", 
  // descomenta la siguiente línea y pon el nombre de tu repositorio:
  // basePath: "/Portafolio",
};

export default nextConfig;
