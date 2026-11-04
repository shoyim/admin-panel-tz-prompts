# Stack: Laravel API + SPA (Vue / React) AdminLTE ko'rinishida

```text
STACK TALABLARI (Laravel API + {{FRONTEND}}):
- Backend: routes/api.php da /api/admin/* , Sanctum token yoki SPA cookie auth
- API Resource'lar (JsonResource) bilan javob, xatolar yagona formatda:
  { "message": "...", "errors": { "field": ["..."] } }
- Paginatsiya: ?page=&per_page=&search=&sort=&filter[...]= (spatie/laravel-query-builder)
- Frontend: Vite + {{FRONTEND}}; AdminLTE 2.4.18 CSS (Bootstrap 3) global ulanadi,
  jQuery plaginlar (Select2, datepicker, iCheck) wrapper komponentlar ichida mount/unmount qilinadi
- Router: layout route (header/sidebar/footer) + child route'lar; route meta'da permission
- State: Pinia (Vue) / Zustand (React); auth user va ruxsatlar global store'da
- Axios interceptor: 401 -> login, 403 -> 403 sahifa, 422 -> forma xatolari
- Komponentlar: Box, DataTable (server-side), FormInput, FormSelect, ConfirmModal, Pagination
- Build natijasi public/admin ga, Laravel catch-all route SPA ni qaytaradi
```
