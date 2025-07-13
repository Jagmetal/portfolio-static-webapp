import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/portfolio-static-webapp/",
  build: {
    outDir: 'docs'  // change output directory from 'dist' to 'docs'
  }
});
