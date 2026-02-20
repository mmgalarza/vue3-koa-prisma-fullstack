import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  server: {
    host: true,        // equivalente a '0.0.0.0'
    port: 5175,
    strictPort: true   // evita que cambie a otro puerto si está ocupado
  }
});
