import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: import.meta.env.VITE_API_URL, // .env থেকে API URL ব্যবহার
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // "/api" সরিয়ে ফেলবে
      },
    },
  },

  // server: {
  //   proxy: {
  //     '/api/': {
  //       target: "http://localhost:2020",
  //     }
  //   }
  // }
});
