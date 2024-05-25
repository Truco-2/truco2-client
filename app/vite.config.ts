import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 4200,
    watch: {
      usePolling: true
    }
    // hmr: {
    //   protocol: 'ws',
    //   host: 'localhost',
    //   clientPort: 4200,
    //   overlay: false
    // },
    // hmr: {
    //   clientPort: 4200,
    //   overlay: false
    // },
    // origin: 'https//:localhost:4200'
  },
});
