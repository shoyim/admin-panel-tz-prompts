# Stack: Node.js + Express

```text
STACK TALABLARI (Node.js {{VERSIYA}} + Express + EJS):
- Struktura: src/admin/{routes,controllers,services,validators,views}
- Shablonlar: EJS + express-ejs-layouts; views/admin/layout.ejs (starter.html asosida), partials/
- ORM: Prisma yoki Sequelize ({{ORM}}), migratsiya va seed skriptlari
- Auth: express-session + connect-redis/DB store, bcrypt, csurf (yoki csrf-csrf), helmet
- Rate limit: express-rate-limit (login uchun)
- Validatsiya: zod yoki express-validator, xatolar formaga qaytariladi (old input bilan)
- RBAC: o'z middleware: requirePermission('products.update')
- Fayl yuklash: multer + sharp (thumbnail), file-type bilan MIME tekshiruvi
- Export: exceljs
- Tarjima: i18next
- Testlar: vitest/jest + supertest
- .env: dotenv, .env.example
```
