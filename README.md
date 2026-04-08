# JMS Valoraciones – Web Next.js

Web profesional de Jorge Martínez Soler (JMS Valoraciones), desplegada en Easypanel via Docker.

## Stack
- **Next.js 14** (App Router, output standalone)
- **Tailwind CSS**
- **Nodemailer** – formulario de contacto por SMTP
- **Docker multi-stage** – imagen final ~200 MB

---

## 🚀 Deploy en Easypanel paso a paso

### 1. Subir el código a GitHub

```bash
git init
git add .
git commit -m "feat: JMS Valoraciones web"
git remote add origin https://github.com/dnogares/jms-valoraciones.git
git push -u origin main
```

### 2. Crear el servicio en Easypanel

1. Accede a **panel.tecnologiaalcala.es**
2. Crea un nuevo proyecto → **"jms-valoraciones"**
3. Añade un servicio tipo **"App"**
4. Elige fuente: **GitHub → dnogares/jms-valoraciones**
5. Build method: **Dockerfile** (detecta automáticamente)

### 3. Variables de entorno

En **Service → Environment → Variables**, añade:

| Variable | Valor |
|---|---|
| `SMTP_HOST` | `mail.infomaniak.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | `jorge.martinez@geotasalia.es` |
| `SMTP_PASS` | *(tu contraseña – nunca en el código)* |
| `SMTP_TO` | `jorge.martinez@geotasalia.es` |
| `NEXT_PUBLIC_SITE_URL` | `https://www.geotasalia.es` |

### 4. Dominio

1. En **Service → Domains**, añade `www.geotasalia.es`
2. Easypanel genera el certificado SSL automáticamente via Let's Encrypt
3. En tu DNS (Infomaniak), añade un registro **CNAME** o **A**:
   - `www` → IP del VPS (`82.223.196.160`)
   - O si usas Cloudflare Tunnel, apunta al servicio interno

### 5. Puerto

El contenedor expone el **puerto 3000**. Easypanel lo mapea automáticamente.

---

## 🔧 Desarrollo local

```bash
cp .env.example .env.local
# Rellena SMTP_PASS en .env.local

npm install
npm run dev
# → http://localhost:3000
```

## 🐳 Docker local (prueba antes de subir)

```bash
docker build -t jms-web .
docker run -p 3000:3000 \
  -e SMTP_HOST=mail.infomaniak.com \
  -e SMTP_PORT=587 \
  -e SMTP_USER=jorge.martinez@geotasalia.es \
  -e SMTP_PASS=TU_CONTRASEÑA \
  -e SMTP_TO=jorge.martinez@geotasalia.es \
  jms-web
```

---

## 📁 Estructura

```
src/
  app/
    page.tsx          → Inicio
    sobre-mi/         → Sobre mí
    servicios/        → 8 servicios
    contacto/         → Formulario + datos
    api/contact/      → API Route SMTP
    aviso-legal/      → Aviso legal
  components/
    Header.tsx        → Nav responsive
    Footer.tsx        → Footer con links
    ContactForm.tsx   → Formulario con estado
```
