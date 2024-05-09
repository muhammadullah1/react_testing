import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  server: { https: false},
  plugins: [react(), mkcert()],
})



// import { defineConfig } from 'vite'
// import mkcert from 'vite-plugin-mkcert'

// export default defineConfig({
//   server: { https: true }, // Not needed for Vite 5+
//   plugins: [ mkcert() ]
// })