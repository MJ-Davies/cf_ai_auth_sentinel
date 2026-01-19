import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxies any request starting with /api to your local Worker
      '/api': {
        target: 'http://127.0.0.1:8787',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // Proxies the OIDC endpoints directly so you can test auth flows easily
      '/authorize': {
        target: 'http://127.0.0.1:8787',
        changeOrigin: true,
        secure: false,
      },
      '/token': {
        target: 'http://127.0.0.1:8787',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
