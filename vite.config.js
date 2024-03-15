import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  env: {
    VITE_APP_EMAILJS_SERVICE_ID: "service_fkaxkwv",
    VITE_APP_EMAILJS_TEMPLATE_ID: "template_3qx83se",
    VITE_APP_EMAILJS_PUBLIC_KEY: "XQwcyGt0D-6-M9MNXs",
    // Add other environment variables here
  },
});
