# Modul: Universal CRUD bo'lim

> Har bir entity uchun alohida yuboring.

```text
"{{ENTITY_NOMI}}" bo'limi uchun to'liq CRUD yoz. Stack: {{STACK}}.

Maydonlar:
{{MAYDONLAR}}
Format: nom | turi | majburiy? | validatsiya | formada qaysi komponent
Misol:
- title | string(255) | ha | unique | input text
- category_id | FK categories | ha | exists | Select2 (AJAX qidiruv)
- price | decimal(12,2) | ha | min:0 | input-group "so'm"
- published_at | datetime | yo'q | date | bootstrap-datepicker + timepicker
- body | text | ha | - | CKEditor
- image | file | yo'q | image, max 2MB | preview bilan file input
- is_active | boolean | - | - | iCheck checkbox
- tags | many-to-many | yo'q | - | Select2 multiple, tags:true

Sahifalar:
1. Ro'yxat (index):
   - DataTables server-side; ustunlar: {{USTUNLAR}}
   - Filtrlar (box-collapsed): {{FILTRLAR}}; filtrlar URL query'da saqlanadi
   - Checkbox bilan ommaviy amallar: o'chirish, statusni o'zgartirish
   - Export: Excel, CSV (joriy filtr bo'yicha)
   - "Savat" tabi: soft-delete qilinganlar, tiklash / butunlay o'chirish
2. Yaratish va Tahrirlash — bitta umumiy forma partial; 2 ustunli layout:
   chapda asosiy maydonlar (col-md-8), o'ngda status/rasm/meta (col-md-4)
3. Ko'rish (show) — box ichida ma'lumotlar, bog'liq yozuvlar, o'zgarishlar tarixi
4. O'chirish — modal-danger tasdiqlash, AJAX, jadval qayta yuklanadi

Ruxsatlar: {{entity}}.view, {{entity}}.create, {{entity}}.update, {{entity}}.delete, {{entity}}.export
Sidebar: "{{MENYU_GURUHI}}" guruhida, ikon {{FA_IKON}}

Natija: migratsiya, model (bog'lanishlar, casts, scopes), request validatsiya, controller, service,
policy, route'lar, view'lar, tarjimalar, seeder (20 ta demo yozuv), testlar.
```
