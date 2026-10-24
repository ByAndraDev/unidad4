# WebQuest · Unidad 4: Redes de área amplia (WANs)
React + TypeScript + Tailwind CSS v4 + Vite.

    npm install
    npm run dev      # desarrollo
    npm run build    # producción (carpeta dist)

Edita el contenido en `src/data.ts`.

## Despliegue en Vercel

1. Sube el proyecto a un repositorio Git y conéctalo desde el panel de Vercel.
2. Vercel detectará Vite. La configuración del proyecto usa `npm run build` como comando de compilación y `dist` como directorio de salida.
3. Conserva el comando de instalación predeterminado (`npm install`) y despliega.

La configuración de [`vercel.json`](./vercel.json) también redirige las rutas de la aplicación a `index.html`, para que la WebQuest funcione al abrir una ruta directamente.
