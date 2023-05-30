import { sveltekit } from "@sveltejs/kit/vite";
import "dotenv/config";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    port: process.env.PORT,
  },
});
