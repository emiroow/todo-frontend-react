import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 6005,
    host: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Add more aliases as needed
    },
  },
  plugins: [react()],
});
