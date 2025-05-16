import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace "myreactapp" with your repo name
export default defineConfig({
  base: '/myreactapp/',
  plugins: [react()],
})
