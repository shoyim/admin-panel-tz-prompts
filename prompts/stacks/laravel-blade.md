# Stack: Laravel + Blade

```text
STACK TALABLARI (Laravel {{VERSIYA}} + Blade):
- Admin qismi alohida: app/Http/Controllers/Admin/*, resources/views/admin/*, routes/admin.php
  (RouteServiceProvider/bootstrap/app.php da prefix('admin')->name('admin.')->middleware(['web','auth','admin']))
- Layout: resources/views/admin/layouts/app.blade.php (starter.html asosida),
  partials: header, sidebar, footer, breadcrumb, flash; @stack('styles'), @stack('scripts')
- Blade komponentlar: <x-admin.box>, <x-admin.form.input>, <x-admin.form.select>,
  <x-admin.delete-button>, <x-admin.modal>
- Sidebar: config/admin_menu.php dan generatsiya, har band uchun 'permission' kaliti, @can bilan
- Validatsiya: FormRequest (StoreXRequest, UpdateXRequest)
- Ruxsatlar: spatie/laravel-permission + Policy'lar
- DataTables: yajra/laravel-datatables-oracle
- Export: maatwebsite/excel
- Audit: spatie/laravel-activitylog
- Media: spatie/laravel-medialibrary yoki Storage + intervention/image
- Tarjima: lang/uz/admin.php, lang/ru/admin.php
- Assetlar: AdminLTE dist/, bower_components/, plugins/ -> public/admin/
- Testlar: Pest yoki PHPUnit Feature testlar
- Herd/Valet/Sail da ishga tushirish README da
```
