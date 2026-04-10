import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-website-/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("three")) return "vendor-three";
            if (id.includes("@react-three/drei")) return "vendor-drei";
            if (id.includes("@react-three/fiber")) return "vendor-fiber";
            if (id.includes("gsap")) return "vendor-gsap";
            if (id.includes("@react-three/rapier") || id.includes("@dimforge/rapier")) return "vendor-physics";
            return "vendor";
          }
        },
      },
    },
  },
});
