---
name: adminlte-admin-panel
description: Builds a complete, production-ready admin panel (adminka) in the AdminLTE 2.4.18 style inside ANY existing or new project — Laravel, Django, FastAPI/Flask, Express, Yii2, plain PHP, or SPA. Auto-detects the stack and models, then generates layout, login, RBAC, CRUD pages, dashboard, settings, profile and audit log with a tested shared JS/CSS kit and verifies every page in a headless browser. Use this skill whenever the user asks to make, add, generate or redesign an admin panel, adminka, admin dashboard, back-office, CMS panel, boshqaruv paneli, админка or панель администратора, mentions AdminLTE, or wants CRUD pages / an admin area for their models — even if they don't name AdminLTE.
---

# AdminLTE admin panel

Istalgan loyihaga AdminLTE 2.4.18 uslubidagi to'liq admin panelni bir yo'la qurish uchun yo'riqnoma.
Natija: loyiha stack'iga tabiiy qo'shilgan, hamma sahifasi bir xil ko'rinadigan, JS xatolarisiz va tez ishlaydigan admin qism.

## Skill tarkibi

| Fayl | Qachon o'qiladi |
|---|---|
| `references/style-guide.md` | **Har doim**, markup yozishdan oldin: ranglar, skinlar, ikonlar, grid, status xaritasi |
| `references/components.md` | Har bir sahifa turini yozishda: tayyor markup |
| `references/stacks.md` | Stack aniqlangach: fayllar joyi, slotlar, JSON shartnomalar, endpoint namunasi |
| `references/pitfalls.md` | Kod yozishdan oldin bir marta. Sahifa ishlamasa — birinchi navbatda shu yerdan |
| `assets/layout.html` | Master layout — loyiha shablonizatoriga ko'chiriladi |
| `assets/login.html` | Login sahifasi |
| `assets/admin.js`, `assets/admin.css` | O'zgartirmasdan loyihaga ko'chiriladi. Barcha plaginlar `data-ui` orqali ishlaydi |
| `assets/demo.html` | Etalon: barcha komponentlar bitta sahifada. Stilni solishtirish uchun |
| `assets/assets.txt` + `scripts/install-assets.{sh,ps1}` | Vendor fayllarni lokal o'rnatish (CDN siz) |
| `scripts/check_page.py` | Sahifalarni headless brauzerda ochib, JS xatolarini topadi |

Nima uchun kit tayyor holda berilgan: AdminLTE + Bootstrap 3 + jQuery plaginlarida ko'p mayda tuzoq bor
(versiyalar mos kelmasligi, init tartibi, data-atribut to'qnashuvlari, modal ichidagi Select2, CSRF).
`admin.js` ularni bir marta hal qilgan va sinovdan o'tgan. Uni har loyihada qaytadan yozish yangi xatolar demak.

## Ish tartibi

### 1. Loyihani aniqlash (savol bermasdan, o'zing tekshir)

Root fayllar bo'yicha stack: `artisan` + `composer.json` → Laravel; `manage.py` → Django; `pyproject.toml`/`requirements.txt`
ichida fastapi/flask; `package.json` ichida express/next; `yii` → Yii2; faqat `.php` → oddiy PHP.

Keyin aniqlanadi:
- Shablonizator va mavjud layoutlar, assetlar qanday ulanadi (bundler bormi).
- Auth: foydalanuvchi modeli, mavjud login, rol/ruxsat paketi (spatie/permission, Django groups...).
- **Entitylar**: modellar va migratsiyalar → maydonlar, turlar, bog'lanishlar, enum/status maydonlari.
- Til: interfeys tili (standart: o'zbek lotin, ikkinchi — rus), mavjud tarjima fayllari.
- Mavjud `/admin` route'lari bormi (to'qnashmaslik uchun).

Faqat aniqlab bo'lmaydigan va natijani tubdan o'zgartiradigan narsa uchun savol beriladi (masalan, ikkita teng
huquqli foydalanuvchi modeli). Qolgan hamma narsa uchun oqilona standart tanlanadi va hisobotda aytiladi.

### 2. Qisqa reja

Loyiha ildizida `ADMIN_PLAN.md` yaratiladi: stack, URL prefiks (standart `/admin`), skin (standart `skin-blue`),
rollar, bo'limlar ro'yxati (entity → maydonlar → ro'yxat ustunlari → filtrlar), qo'shiladigan paketlar,
yaratiladigan fayllar. Foydalanuvchi "hammasini o'zing qil" desa, reja yoziladi va ish davom etadi.
Aks holda reja ko'rsatilib, tasdiq kutiladi.

### 3. Assetlar

1. `assets/admin.css` va `assets/admin.js` loyihaning public admin papkasiga **o'zgartirmasdan** ko'chiriladi
   (masalan `public/admin/`). Loyihaga xos stil kerak bo'lsa, alohida `admin-custom.css` ga yoziladi.
2. Standart: vendorlar CDN dan (`layout.html` dagi havolalar sinovdan o'tgan). Production yoki oflayn kerak bo'lsa,
   `scripts/install-assets.sh <public>/admin/vendor` ishga tushiriladi (Windows'da `.ps1`) va layoutdagi
   `https://cdn.jsdelivr.net/npm/` prefiksi `/admin/vendor/` ga almashtiriladi.
3. Admin assetlari loyiha bundleriga (Vite/Webpack/Mix) qo'shilmaydi.

### 4. Layout va login

`assets/layout.html` stack shablonizatoriga ko'chiriladi (`references/stacks.md` → slot mosligi).
Struktura, klasslar va skriptlar tartibi saqlanadi. Header, sidebar, footer, flash partiallarga ajratiladi.
Sidebar konfiguratsiyadan generatsiya qilinadi (title, route, icon, permission, children). Ruxsatsiz bandlar chiqmaydi,
joriy band `active`, ochiq guruh `treeview active menu-open`.
`#confirm-modal` va `<meta name="csrf-token">` layoutda qoladi, chunki `admin.js` ularga tayanadi.
Login `assets/login.html` dan: master layoutdan meros olmaydi.

### 5. Modullar (shu tartibda)

1. **Auth**: login/logout (POST), "meni eslab qol", parolni tiklash, rate limit (5 urinish/daqiqa), admin bo'lmaganlarni kiritmaslik.
2. **RBAC**: rollar va ruxsatlar (`modul.amal`: `view, create, update, delete, export`). Har bir route va AJAX endpoint backendda tekshiriladi.
   Seeder: `super_admin` roli va foydalanuvchisi (parol `.env` dan yoki tasodifiy, hisobotda aytiladi).
3. **CRUD** har bir entity uchun (`components.md` 1–4): ro'yxat (server-side DataTables, filtrlar, ommaviy o'chirish, Excel/CSV export),
   yaratish/tahrirlash (bitta umumiy forma partial), ko'rish, o'chirish (`data-delete`, soft delete bo'lsa — tiklash).
   Maydon turi → komponent: string → input, text → textarea, rich text → `data-ui="editor"`, FK (≤ 50 yozuv) → `data-ui="select2"`,
   FK (katta) → Select2 AJAX, enum → select, bool → `icheck`, date → `data-ui="date"`, phone → `data-ui="phone"`, image → file + preview.
4. **Dashboard** (`components.md` 5): har bir asosiy entity uchun small-box (son + havola), bitta grafik (oxirgi 30 kun), oxirgi yozuvlar jadvali. Agregatlar keshlanadi.
5. **Foydalanuvchilar**, **Sozlamalar** (key-value, tablar), **Profil** (ma'lumot, avatar, parol), **Audit log** (kim, nima, qachon, eski/yangi qiymat).
6. Xato sahifalari 403/404/500 admin layoutida.

Takrorlanadigan markup (box, form-group, delete tugmasi, status label) birinchi CRUD'dayoq komponent/partial qilinadi,
keyingi bo'limlar shularni ishlatadi. Shu tufayli 10-bo'lim ham 1-bo'lim bilan bir xil ko'rinadi.

### 6. Sifat qoidalari

- **Stil**: faqat `style-guide.md` dagi klasslar ishlatiladi. Inline rang, yangi shrift, Bootstrap 4/5 yoki FA5 klassi ishlatilmaydi.
- **Xavfsizlik**: CSRF, chiqishda escape, mass-assignment himoyasi, saralash/ommaviy amal oq ro'yxati, fayl MIME tekshiruvi, logout POST.
- **Tezlik**: eager loading, server-side pagination, filtr ustunlariga indeks, dashboard keshi, plaginlar faqat kerakli sahifada, ro'yxatda thumbnail.
- **Mavjud kodni buzmaslik**: sayt qismi, mavjud route'lar va modellar o'zgartirilmaydi (faqat trait/relation qo'shish mumkin).
  Migratsiyalar faqat qo'shadi, hech narsani o'chirmaydi.
- **Tarjima**: interfeys matnlari tarjima fayllarida.

### 7. Tekshirish (topshirishdan oldin majburiy)

1. Stack testlari va linter ishga tushiriladi. Admin uchun feature testlar yoziladi: auth, ruxsat (403), CRUD, validatsiya.
2. Route ro'yxati tekshiriladi: har bir admin route'da auth middleware bormi.
3. Dev server (yoki Herd/Valet) orqali har bir admin sahifa tekshiriladi:
   ```bash
   python <skill>/scripts/check_page.py http://localhost:8000/admin http://localhost:8000/admin/products ... --cookie "<sessiya cookie>"
   ```
   Sessiya cookie'sini olish uchun test login qilinadi (seeder foydalanuvchisi bilan, masalan `curl -c`).
   Skript `Uncaught`, `[admin] ... ulanmagan` va yuklanmagan fayllarni ko'rsatadi. Hammasi toza bo'lmaguncha tuzatiladi.
4. Brauzer vositalari mavjud bo'lsa, ro'yxat va forma sahifasining skrinshoti olinib, `assets/demo.html` bilan solishtiriladi.

### 8. Hisobot

Oxirida qisqa hisobot beriladi: qaysi bo'limlar qo'shildi, admin URL, login (parol chatda emas, `.env`/seeder yo'li),
tanlangan standartlar (skin, til, prefiks), qo'shilgan paketlar, test va `check_page.py` natijalari, qolgan ishlar.
