import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // allows connections from any network interface
    port: 5123, // or your desired port
    strictPort: true, // fails if the port is already in use
    hmr: {
      host: 'localhost', // specify the HMR host
    },
  },
});
