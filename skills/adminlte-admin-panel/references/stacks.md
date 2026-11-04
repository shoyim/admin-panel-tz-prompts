# Backend shartnomalari va stack bo'yicha integratsiya

## Mundarija
1. `admin.js` kutadigan JSON shartnomalar (har qanday stack uchun bir xil)
2. Laravel + Blade
3. Django
4. FastAPI / Flask (Jinja2)
5. Node.js Express (EJS)
6. Yii2
7. Oddiy PHP
8. SPA (React/Vue) va Next.js

---

## 1. JSON shartnomalar

Frontend bir xil bo'lishi uchun backend shu formatlarga amal qiladi.

### DataTables server-side (`data-ajax-url`)

So'rov (GET): `draw`, `start`, `length`, `search[value]`, `order[0][column]`, `order[0][dir]`,
`columns[i][data]` + filtr formasidagi maydonlar.

Javob:
```json
{
  "draw": 3,
  "recordsTotal": 1250,
  "recordsFiltered": 37,
  "data": [
    { "check": "<input type=\"checkbox\" name=\"ids[]\" value=\"7\">", "id": 7, "title": "iPhone 15",
      "status": "<span class=\"label label-success\">Faol</span>", "created_at": "05.11.2026 14:20",
      "actions": "<a ...>...</a>" }
  ]
}
```
Qoidalar:
- `draw` so'rovdagi qiymat bilan bir xil qaytariladi (int).
- Saralash ustuni **oq ro'yxat** bo'yicha tekshiriladi: `columns[i][data]` to'g'ridan-to'g'ri SQL ga qo'yilmaydi (SQL injection).
- `length` maksimum 100 bilan cheklanadi, `-1` qabul qilinmaydi.
- HTML ustunlar (`check`, `status`, `actions`) serverda shablon/partial orqali yasaladi, foydalanuvchi matni ichida escape qilinadi.

### Select2 AJAX (`data-ajax-url`)
So'rov: `?q=matn&page=1`. Javob (sahifada 20 tadan):
```json
{ "results": [ { "id": 1, "text": "Toshkent" } ], "pagination": { "more": true } }
```

### O'chirish (`data-delete`)
So'rov: `DELETE {data-url}` (CSRF header bilan). Javob: `200 {"message": "O'chirildi"}`.
Ruxsat yo'q: `403 {"message": "..."}`. Bog'liq yozuv sababli o'chirib bo'lmasa: `409 {"message": "..."}`.

### Ommaviy amal (`data-bulk-action`)
So'rov: `POST {data-url}` → `ids[]=1&ids[]=2&action=delete`. Javob: `{"message": "3 ta yozuv o'chirildi"}`.
`action` ham oq ro'yxat bo'yicha tekshiriladi.

### AJAX forma (`data-ajax-form`)
Muvaffaqiyat: `200 {"message": "Saqlandi", "redirect": "/admin/products"}` (`redirect` ixtiyoriy).
Validatsiya: `422 {"message": "...", "errors": {"title": ["Nomi majburiy"], "items.0.qty": ["..."]}}`.

### Umumiy
`401` — login kerak, `419` — CSRF/sessiya tugagan, `403` — ruxsat yo'q. `admin.js` bularni o'zi ko'rsatadi.
Har bir AJAX endpoint ham sahifa kabi auth + ruxsat bilan himoyalanadi.

---

## 2. Laravel + Blade

| Narsa | Joyi |
|---|---|
| Assetlar | `public/admin/admin.css`, `public/admin/admin.js`, (lokal bo'lsa) `public/admin/vendor/` |
| Layout | `resources/views/admin/layouts/app.blade.php` (`layout.html` dan) |
| Login | `resources/views/admin/auth/login.blade.php` (`login.html` dan) |
| Partiallar | `resources/views/admin/partials/{header,sidebar,footer,flash}.blade.php` |
| Komponentlar | `resources/views/components/admin/{box,form/input,form/select,delete-button}.blade.php` |
| Route'lar | `routes/admin.php`: `prefix('admin')->name('admin.')->middleware(['web','auth','can:access-admin'])` |
| Controllerlar | `app/Http/Controllers/Admin/*` |
| Menyu | `config/admin.php` → `['title','route','icon','permission','children']` |

Slot mosligi: `<!-- SLOT: content -->` → `@yield('content')`, `plugin-css`/`page-css` → `@stack('styles')`,
`plugin-js`/`page-js` → `@stack('scripts')`, `[[CSRF_TOKEN]]` → `{{ csrf_token() }}`, `[[CSRF_FIELD]]` → `@csrf`,
`[[PAGE_TITLE]]` → `@yield('title')`, `[[ASSET_URL]]` → `{{ asset('admin') }}`.

Sidebar active: `request()->routeIs('admin.products.*') ? 'active' : ''`.

DataTables endpoint (paketsiz, yajra ishlatilmasa):

```php
public function data(Request $request)
{
    $columns = ['id' => 'id', 'title' => 'title', 'created_at' => 'created_at']; // saralash oq ro'yxati
    $query = Product::query()->select(['id', 'title', 'status', 'created_at']);
    $total = (clone $query)->count();

    if ($s = $request->input('search.value')) {
        $query->where(fn ($q) => $q->where('title', 'like', "%{$s}%")->orWhere('id', $s));
    }
    if ($request->filled('category_id')) {
        $query->where('category_id', $request->integer('category_id'));
    }
    $filtered = (clone $query)->count();

    $key = $request->input('columns.' . $request->integer('order.0.column') . '.data');
    $query->orderBy($columns[$key] ?? 'id', $request->input('order.0.dir') === 'asc' ? 'asc' : 'desc');

    $rows = $query->skip($request->integer('start'))->take(min($request->integer('length', 25), 100))->get();

    return response()->json([
        'draw' => $request->integer('draw'),
        'recordsTotal' => $total,
        'recordsFiltered' => $filtered,
        'data' => $rows->map(fn ($p) => [
            'check' => view('admin.partials.row-check', ['id' => $p->id])->render(),
            'id' => $p->id,
            'title' => $p->title,
            'status' => view('admin.partials.status', ['status' => $p->status])->render(),
            'created_at' => $p->created_at->format('d.m.Y H:i'),
            'actions' => view('admin.products._actions', ['product' => $p])->render(),
        ]),
    ]);
}
```

Paketlar (ixtiyoriy, mavjud bo'lsa ishlating): `spatie/laravel-permission`, `spatie/laravel-activitylog`,
`yajra/laravel-datatables-oracle`, `maatwebsite/excel`. Testlar: Pest/PHPUnit Feature.

## 3. Django

| Narsa | Joyi |
|---|---|
| App | `adminpanel/` (standart `django.contrib.admin` dan alohida) |
| Assetlar | `adminpanel/static/adminpanel/{admin.css,admin.js,vendor/}` |
| Layout | `adminpanel/templates/adminpanel/base.html` |
| URL | `path("panel/", include("adminpanel.urls", namespace="adminpanel"))` |
| View'lar | CBV + `LoginRequiredMixin` + `PermissionRequiredMixin` |

Slot mosligi: `content` → `{% block content %}{% endblock %}`, `plugin-css` → `{% block extra_css %}`,
`page-js` → `{% block extra_js %}`, `[[CSRF_TOKEN]]` → `{{ csrf_token }}`, `[[CSRF_FIELD]]` → `{% csrf_token %}`,
`[[ASSET_URL]]` → `{% static 'adminpanel' %}`.

Form widget'lariga `form-control` klassini mixin orqali bering. Xato: `field.errors` → `has-error` + `help-block`.
DataTables endpoint: `JsonResponse`, saralash oq ro'yxat bilan, `Paginator` emas, `qs[start:start+length]`.
Testlar: `pytest-django`.

## 4. FastAPI / Flask (Jinja2)

Layout `templates/admin/base.html`, bloklar Django kabi. Static: `app.mount("/admin/static", StaticFiles(...))`.
CSRF: Flask-WTF (`csrf_token()`), FastAPI'da `starlette-csrf`. Sessiya cookie `HttpOnly`, `SameSite=Lax`.
RBAC: FastAPI `Depends(require_permission("products.update"))`, Flask decorator.

## 5. Node.js Express (EJS)

`express-ejs-layouts`: `views/admin/layout.ejs` ichida `<%- body %>` content slot.
Qo'shimcha bloklar: `<%- defineContent('scripts') %>` yoki `res.locals.scripts` massivi.
CSRF: `csrf-csrf` (double submit), token `res.locals.csrfToken` orqali meta'ga.
Static: `app.use('/admin', express.static('public/admin', { maxAge: '7d' }))`. Xavfsizlik: `helmet` (CSP da `cdn.jsdelivr.net` va `fonts.googleapis.com` ga ruxsat bering).

## 6. Yii2

`backend/views/layouts/main.php`, AssetBundle'lar: `AdminLteAsset` (CSS/JS CDN yoki `@web/admin/vendor`),
`depends => [JqueryAsset, BootstrapAsset(3)]`. Yii2 jQuery'sini ishlatsa, layoutda jQuery ikki marta ulanmaydi.
CSRF: `Html::csrfMetaTags()` (meta nomi `csrf-token`, `admin.js` mos keladi). GridView o'rniga DataTables JSON endpoint yoki
GridView `tableOptions => ['class' => 'table table-bordered table-striped table-hover']` bilan box ichida.

## 7. Oddiy PHP

Front controller `public/admin/index.php`, view'lar `layout.php` + `include`. Har bir chiqish `htmlspecialchars` (`e()` helper).
PDO prepared statements, `password_hash`, sessiya `session_regenerate_id(true)` login'dan keyin. CSRF tokeni sessiyada.

## 8. SPA (React/Vue) va Next.js

AdminLTE 2 jQuery'ga bog'liq. SPA'da:
- `AdminLTE.min.css` va skin global ulanadi. Layout JSX/Vue komponentiga ko'chiriladi (klasslar o'zgarmaydi).
- `admin.js` **ulanmaydi** (DOM ni o'zi boshqaradi). Uning vazifalari komponentlarda bajariladi:
  Select2 → `react-select`/`vue-select` (AdminLTE stilida), DataTables → TanStack Table + `table table-bordered`, modal → state.
- Sidebar toggle: `body` ga `sidebar-collapse` / `sidebar-open` klassini qo'shib-olib tashlash.
- Treeview: ochiq guruh `menu-open` + `.treeview-menu { display: block }`.
Agar loyiha server-rendered bo'lishi mumkin bo'lsa, admin panelni server-rendered qilish oson va barqarorroq.
