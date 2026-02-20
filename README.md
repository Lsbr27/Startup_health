# Deploy en Vercel desde GitHub

Este repositorio ya está preparado para que los *push* a la rama `main` desplieguen automáticamente en Vercel mediante GitHub Actions.

Qué añadí:
- `index.html` — archivo servido en la raíz (ya presente)
- `vercel.json` — limpio y con una `route` que apunta `/` a `index.html`
- `.github/workflows/vercel-deploy.yml` — workflow que ejecuta el deploy en cada push a `main`

Pasos que debes completar en GitHub/Vercel (requeridos):
1. En Vercel, crea un token personal: https://vercel.com/dashboard
   - Vercel → Settings → Tokens → Create Token. Copia el valor.
2. Obtén `VERCEL_ORG_ID` y `VERCEL_PROJECT_ID` desde el dashboard de Vercel:
   - Organization ID: Vercel → Settings (Organization) → General → ID
   - Project ID: Vercel → Project → Settings → General → Project ID
3. En el repo de GitHub, añade los siguientes *secrets* (Settings → Secrets → Actions):
   - `VERCEL_TOKEN` = el token creado en paso 1
   - `VERCEL_ORG_ID` = Organization ID
   - `VERCEL_PROJECT_ID` = Project ID

Comandos para enviar los cambios (desde tu máquina):
```bash
git add .
git commit -m "Add GitHub Actions workflow for Vercel deploy and routes"
git push origin main
```

Después de pushear, GitHub Actions ejecutará el workflow y Vercel desplegará el sitio (URL del proyecto en tu dashboard de Vercel).

Notas:
- Si prefieres no usar Actions, también puedes conectar el repositorio desde la interfaz web de Vercel (Integrations → Git Provider) para deploys automáticos.
- Si necesitas que yo haga el `git commit` y `git push` desde aquí, dímelo y lo ejecuto.
