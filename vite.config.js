import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '', // ✅ Vercel requires this to be empty
  plugins: [react()],
});
