Remove-Item -Recurse -Force "node_modules", ".svelte-kit", ".vite", "dist", ".cache" -ErrorAction SilentlyContinue
Remove-Item -Force "package-lock.json" -ErrorAction SilentlyContinue
npm install
npm run dev
