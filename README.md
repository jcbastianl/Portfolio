# Página Personal

Guía breve para clonar, instalar y ejecutar el proyecto, cualquier duda sigueme en Instagram. 😁

[![Instagram](https://img.shields.io/badge/Instagram-@cebas.snz-E4405F?logo=instagram&logoColor=white)](https://instagram.com/cebas.snz)

## Requisitos
- Node.js 18+ (recomendado 20)
- npm 9+ o pnpm/yarn

## Instalación
```bash
git clone <https://github.com/jcbastianl/Portafolio.git>
cd Portafolio
npm install
```

## Desarrollo
```bash
# Para correr el proyecto y verlo, despues vas a la APP
npm run dev
```

App disponible en `http://localhost:3000`.

## Build y producción
```bash
npm run build
npm start
```

## Redes sociales (sígueme y da ⭐ al repo)

Por favor, apóyame dando una estrella a este repositorio y siguiéndome en mis redes. ¡Esto me ayuda muchísimo a seguir creando!

- Instagram: `https://instagram.com/cebas.snz`
- LinkedIn: `https://www.linkedin.com/in/joseph-balcazar-loaiza-33324228b`
- GitHub: `https://github.com/jcbastianl`

## Estructura de carpetas
```text
.
├─ public/
│  ├─ favicon.ico
│  ├─ proyecto1.png
│  ├─ proyecto2.png
│  ├─ proyecto3.png
│  └─ cv.pdf
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx        # Root layout (App Router)
│  │  ├─ page.tsx          # Página principal
│  │  └─ globals.css       # Estilos globales + animaciones
│  └─ components/
│     ├─ header.tsx        # Navegación fija con scroll spy
│     ├─ hero.tsx          # Sección principal (typing y CTA)
│     ├─ about.tsx         # Sección Acerca de Mí
│     ├─ projects.tsx      # Proyectos con animación on-scroll
│     ├─ services.tsx      # Servicios + fondo animado
│     ├─ footer.tsx        # Footer
│     ├─ loading-screen.tsx# Pantalla de carga inicial
│     └─ page-wrapper.tsx  # Wrapper que gestiona loading/scroll
├─ eslint.config.mjs
├─ next.config.ts
├─ tsconfig.json
├─ package.json
└─ postcss.config.mjs
```

## Notas
- Este proyecto usa Next.js (App Router), Tailwind CSS y componentes client/server mixtos.
- Las imágenes del `hero` y `about` deben existir en `public/`.
- El PDF del CV se sirve desde `public/cv.pdf`.

## Deploy (Vercel sugerido)
1. Importa el repo en Vercel.
2. Framework: Next.js (auto-detección).
3. Variables de entorno (si fueran necesarias) en el panel de Vercel.
4. Deploy.

---

Si este proyecto te fue útil o te gustó el resultado:

- Da ⭐ al repositorio.
- Sígueme en `Instagram`, `LinkedIn` y `GitHub` para más proyectos y actualizaciones. 

