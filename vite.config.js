import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Hope-Foundation/', // 👈 IMPORTANT: Must match your repo name exactly
  plugins: [react()],
})
