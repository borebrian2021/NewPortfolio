import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  theme: {
    extend:{},
    // Some useful comment
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif'],
      'Poppins': ['Poppins','sans-serif']
     
    },
  },
})
