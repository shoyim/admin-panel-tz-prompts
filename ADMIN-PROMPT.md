# Universal prompt: istalgan loyihaga AdminLTE admin panel

Bu bitta prompt **istalgan loyihaga** (Laravel, Django, FastAPI, Express, Yii2, oddiy PHP...) AdminLTE 2.4.18 uslubida
to'liq admin panelni bir yo'la qurdiradi. Stil, JS va tekshiruv skripti tayyor kit sifatida shu repodan olinadi,
shuning uchun natija har safar bir xil ko'rinadi.

**Claude Code** ishlatsangiz, prompt o'rniga skill'ni o'rnating (pastda). Skill shu promptning to'liq versiyasi.
**ChatGPT / Cursor / Copilot / Windsurf** uchun pastdagi blokni loyiha ochiq turgan holda yuboring.

---

```text
Sen tajribali full-stack dasturchisan. Shu loyihaga AdminLTE 2.4.18 uslubida to'liq admin panel qo'sh.
Savol berma: hamma narsani loyihadan o'zing aniqla. Faqat natijani tubdan o'zgartiradigan, aniqlab bo'lmaydigan
narsa uchun so'ra. Qolganida oqilona standart tanla va oxirida ayt.

0. KIT (stil manbai, o'zgartirmasdan ishlat)
   Avval quyidagi fayllarni o'qi. Ular sinovdan o'tgan, stilning yagona manbai:
   BASE=https://raw.githubusercontent.com/shoyim/admin-panel-tz-prompts/main/skills/adminlte-admin-panel
   - $BASE/references/style-guide.md   — ranglar, skinlar, ikonlar, grid, status ranglari (QOIDALAR)
   - $BASE/references/components.md    — har bir sahifa turi uchun tayyor markup
   - $BASE/references/stacks.md        — stack bo'yicha fayl joylari, slotlar, JSON shartnomalar
   - $BASE/references/pitfalls.md      — ma'lum xatolar va yechimlar
   - $BASE/assets/layout.html          — master layout
   - $BASE/assets/login.html           — login sahifasi
   - $BASE/assets/admin.js, admin.css  — loyihaning public/admin/ papkasiga O'ZGARTIRMASDAN ko'chir
   - $BASE/scripts/check_page.py       — sahifalarni headless brauzerda tekshiradi
   - $BASE/scripts/install-assets.sh   — vendorlarni lokal yuklab oladi (ixtiyoriy, CDN siz ishlash uchun)
   Fayllarni ko'chirish uchun: curl -fsSL "$BASE/assets/admin.js" -o public/admin/admin.js (va hokazo).

1. ANIQLASH
   Stack, shablonizator, auth (user modeli, rol paketi), barcha modellar/migratsiyalar (maydonlar, turlar,
   bog'lanishlar, status/enum), tillar, mavjud /admin route'lar.

2. REJA
   Loyiha ildizida ADMIN_PLAN.md yoz: stack, prefiks (/admin), skin (skin-blue), rollar, bo'limlar
   (entity → maydonlar → ro'yxat ustunlari → filtrlar), paketlar, fayllar. Keyin davom et.

3. QURISH (shu tartibda)
   a) layout.html ni stack shablonizatoriga ko'chir: struktura, klasslar va skriptlar tartibi o'zgarmaydi.
      Header, sidebar, footer, flash partiallarga ajratiladi. Sidebar konfiguratsiyadan, ruxsatga qarab.
      #confirm-modal va <meta name="csrf-token"> layoutda qoladi.
   b) Auth: login (login.html), logout POST, "meni eslab qol", parolni tiklash, 5 urinish/daqiqa cheklovi.
   c) RBAC: rollar, ruxsatlar "modul.amal". Har bir route va AJAX endpoint backendda tekshiriladi.
      Seeder: super_admin.
   d) Har bir entity uchun CRUD (components.md 1–4): server-side DataTables (data-ui="datatable"),
      filtrlar (data-dt-filter), ommaviy o'chirish, Excel/CSV export, bitta umumiy forma partial, ko'rish,
      o'chirish (data-delete). JSON formatlar stacks.md dagi shartnomalar bo'yicha.
      Plaginlar faqat data-ui orqali: select2, date, phone, editor, datatable (data-select2 ISHLATMA).
   e) Dashboard: small-box'lar (aqua, green, yellow, red), bitta Chart.js grafik (AJAX), oxirgi yozuvlar. Kesh 5–10 daqiqa.
   f) Foydalanuvchilar, Sozlamalar (tablar), Profil, Audit log, 403/404/500 sahifalari.
   Takrorlanadigan markup birinchi CRUD'dayoq komponent/partial qilinadi.

4. QOIDALAR
   - Faqat style-guide.md dagi klasslar: Bootstrap 3.4.1, Font Awesome 4.7. Bootstrap 4/5, FA5/6,
     Tailwind va inline ranglar ishlatilmaydi.
   - Xavfsizlik: CSRF, escape, mass-assignment, saralash/ommaviy amallar uchun oq ro'yxat, fayl MIME tekshiruvi.
   - Tezlik: eager loading, server-side pagination, indekslar, kesh, plaginlar faqat kerakli sahifada.
   - Mavjud sayt kodi, route'lar va ma'lumotlar buzilmaydi. Migratsiyalar faqat qo'shadi.
   - Interfeys matnlari tarjima fayllarida (asosiy til: o'zbek lotin).

5. TEKSHIRISH (majburiy)
   - Testlar: auth, ruxsat (403), CRUD, validatsiya — hammasi o'tishi kerak.
   - Har bir admin sahifani tekshir:
     python check_page.py http://localhost:8000/admin http://localhost:8000/admin/<bo'lim> ... --cookie "<sessiya>"
     "JS xatolari: yo'q" bo'lmaguncha tuzat.

6. HISOBOT
   Qo'shilgan bo'limlar, admin URL, login qayerdan olinadi (parolni chatga yozma), tanlangan standartlar,
   paketlar, test va check_page natijalari.
```

---

## Claude Code uchun: skill sifatida o'rnatish

```bash
# Linux / macOS
git clone https://github.com/shoyim/admin-panel-tz-prompts.git /tmp/atp
mkdir -p ~/.claude/skills && cp -r /tmp/atp/skills/adminlte-admin-panel ~/.claude/skills/

# Windows (PowerShell)
git clone https://github.com/shoyim/admin-panel-tz-prompts.git $env:TEMP\atp
New-Item -ItemType Directory -Force "$HOME\.claude\skills" | Out-Null
Copy-Item -Recurse "$env:TEMP\atp\skills\adminlte-admin-panel" "$HOME\.claude\skills\"
```

So'ng istalgan loyihada shunchaki yozing: **"shu loyihaga admin panel qilib ber"**. Skill o'zi ishga tushadi.

## Stilni ko'rish

`skills/adminlte-admin-panel/assets/demo.html` ni brauzerda oching. Barcha standart komponentlar shu sahifada:
small-box, filtr, DataTables, ommaviy amallar, forma, xato holati, Select2, datepicker, iCheck, telefon maskasi,
o'chirishni tasdiqlash modali.
