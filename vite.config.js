import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-static-webapp/',  // repo name
  build: { outDir: 'dist' }
});
