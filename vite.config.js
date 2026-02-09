import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({mode})=>({
  plugins: [react()],
<<<<<<< HEAD
  base: mode==="production"? "/git-Pages/" : "/",
=======
  base: mode==="production"? "/semi-project-myself/" : "/",
>>>>>>> eeda39f7ef0c15474fa3b9b660c2492482e22460
}))
