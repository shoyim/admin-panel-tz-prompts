# Stack: Next.js (App Router) — AdminLTE ko'rinishida

```text
STACK TALABLARI (Next.js {{VERSIYA}}, App Router, TypeScript):
- Struktura: app/(admin)/{{ADMIN_PREFIX}}/layout.tsx — header/sidebar/footer; sahifalar shu layout ichida
- AdminLTE 2.4.18 CSS (Bootstrap 3, skins) global ulanadi; jQuery plaginlar faqat client komponentlarda
  ('use client', useEffect da init, cleanup'da destroy). Imkon bo'lsa React muqobillari:
  react-select (Select2 o'rniga), react-datepicker, Chart.js uchun react-chartjs-2
- Ma'lumotlar: Prisma + {{DB}}; Server Actions yoki route handlers (app/api/admin/*)
- Auth: Auth.js (NextAuth) credentials provider, middleware.ts bilan /{{ADMIN_PREFIX}} himoyasi
- RBAC: sessiyada rol va permissionlar; server tomonda har action'da tekshiruv
- Validatsiya: zod (server va client umumiy schema)
- Jadval: TanStack Table, server-side pagination (searchParams orqali)
- Export: exceljs (route handler orqali stream)
- Tarjima: next-intl
- Testlar: vitest + Playwright (asosiy oqimlar uchun)
```
