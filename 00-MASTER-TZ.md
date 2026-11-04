# MASTER TZ PROMPT — AdminLTE 2.4.18 asosida admin panel

> Quyidagi blokni to'liq nusxalang, `{{...}}` joylarni to'ldiring va AI ga yuboring.

---

```text
Sen tajribali full-stack dasturchisan. Menga "{{LOYIHA_NOMI}}" loyihasi uchun
AdminLTE 2.4.18 (Bootstrap 3, jQuery) shabloni asosida admin panel qurib ber.

## 1. Loyiha haqida
- Loyiha nomi: {{LOYIHA_NOMI}}
- Qisqacha tavsif: {{LOYIHA_TAVSIFI}}  (masalan: "onlayn kitob do'koni", "o'quv markaz CRM")
- Asosiy sayt/ilova: {{MAVJUD | YANGI}}  (mavjud bo'lsa — repo/papka yo'li: {{YO'L}})
- Stack: {{STACK}}  (masalan: Laravel 11 + Blade, Django 5, Node.js Express + EJS)
- Ma'lumotlar bazasi: {{DB}}  (MySQL / PostgreSQL / SQLite)
- Admin panel URL prefiksi: /{{ADMIN_PREFIX}}  (standart: /admin)
- Interfeys tillari: {{TILLAR}}  (standart: uz, ru; asosiy — uz)

## 2. Foydalanuvchi rollari
{{ROLLAR}}
Misol:
- super_admin — hamma narsaga to'liq ruxsat, rollarni boshqaradi
- admin — barcha bo'limlar, lekin sozlamalar va rollarni o'zgartira olmaydi
- manager — faqat o'ziga biriktirilgan bo'limlar (ko'rish + tahrirlash)
- viewer — faqat ko'rish

## 3. Entitylar (bo'limlar)
Har bir entity uchun: nomi, maydonlari (turi, majburiyligi), bog'lanishlari.
{{ENTITYLAR}}
Misol:
- Product: title (string, majburiy, 255), slug (unique), price (decimal 12,2),
  category_id (FK -> Category), images (ko'p rasm), status (draft|active|archived),
  description (rich text), created_at, updated_at
- Category: name, parent_id (o'ziga FK, daraxt), sort_order

## 4. Layout talablari (AdminLTE)
- Asos: `starter.html` strukturasi — `.wrapper`, `.main-header`, `.main-sidebar`,
  `.content-wrapper`, `.main-footer`. Layoutni bitta umumiy shablonga (master layout) chiqar,
  sahifalar faqat `content` qismini to'ldirsin.
- Skin: {{SKIN}}  (skin-blue / skin-black / skin-purple / skin-green / skin-red / skin-yellow,
  standart: skin-blue). `sidebar-mini` klassi yoqilgan bo'lsin.
- Sidebar menyusi rolga qarab dinamik generatsiya qilinsin (ruxsat bo'lmagan bo'lim ko'rinmasin),
  joriy sahifa `active`, ichki menyular `treeview`.
- Header: foydalanuvchi avatari va ismi, dropdownda "Profil" va "Chiqish",
  bildirishnomalar qo'ng'irog'i (notifications-menu), til almashtirgich.
- Har bir sahifada `content-header`: sarlavha, kichik izoh va breadcrumb.
- Flash xabarlar `callout`/`alert` orqali (success, danger, warning, info), avtomatik yopiladi.

## 5. Har bir CRUD bo'lim uchun standart
- Ro'yxat: DataTables (server-side pagination, qidiruv, saralash), filtrlar paneli `box` ichida,
  status `label` lar bilan, amallar ustuni (ko'rish / tahrirlash / o'chirish).
- Forma: `box box-primary`, validatsiya xatolari `has-error` + `help-block`,
  select uchun Select2, sana uchun bootstrap-datepicker, matn muharriri uchun CKEditor,
  checkbox/radio uchun iCheck.
- O'chirish: tasdiqlash modali (`modal modal-danger`), soft delete + "Savat" (tiklash).
- Ommaviy amallar: belgilanganlarni o'chirish / statusini o'zgartirish.
- Export: Excel (xlsx) va CSV.

## 6. Majburiy modullar
- Autentifikatsiya (AdminLTE `pages/examples/login.html` dizayni), parolni tiklash, "Meni eslab qol"
- Dashboard (small-box kartalar, Chart.js grafiklari, oxirgi yozuvlar jadvali)
- Foydalanuvchilar va rollar (RBAC)
- Sozlamalar (sayt nomi, logo, kontaktlar, SEO, til)
- Profil (ma'lumotlar, avatar, parol o'zgartirish)
- Audit log (kim, qachon, nimani o'zgartirdi)
- Xato sahifalari: 403, 404, 500 (AdminLTE `pages/examples/404.html`, `500.html` uslubida)

## 7. Xavfsizlik
- Barcha admin route'lar auth + rol middleware ostida.
- CSRF himoyasi, XSS dan escaping, SQL injection'dan ORM/prepared statements.
- Login urinishlari cheklovi (5 marta / 1 daqiqa), parollar bcrypt/argon2.
- Fayl yuklashda MIME va hajm tekshiruvi, fayllar public papkadan tashqarida yoki xavfsiz nom bilan.
- Ruxsatlar faqat UI da emas, backendda ham tekshirilsin.

## 8. Texnik talablar
- Kod tuzilmasi stack'ning rasmiy best-practice'lariga mos (controller/service/request/model ajratilgan).
- Migratsiyalar + seederlar: super_admin foydalanuvchi, rollar, demo ma'lumotlar.
- Barcha matnlar tarjima fayllarida (hardcode qilinmasin).
- AdminLTE assetlari (`dist/`, `bower_components/`, `plugins/`) `public/admin/` ga ko'chirilsin,
  faqat ishlatiladigan plaginlar ulanadi.
- Muhim qismlar uchun avtomatik testlar (auth, ruxsatlar, CRUD).
- README: o'rnatish, ishga tushirish, demo login/parol.

## 9. Ish tartibi
1. Avval reja tuz: fayllar ro'yxati, DB sxemasi, route'lar — va menga ko'rsat.
2. Men tasdiqlagach, bosqichma-bosqich yoz: layout -> auth -> RBAC -> CRUDlar -> dashboard -> qolganlari.
3. Har bosqich oxirida nima qilinganini va qanday tekshirishni qisqa yoz.
4. Noaniq joy bo'lsa — taxmin qilma, so'ra.

## 10. Qo'shimcha talablar
{{QO'SHIMCHA}}
```

---

## Placeholderlar ro'yxati

| Placeholder | Ma'nosi | Misol |
|---|---|---|
| `{{LOYIHA_NOMI}}` | Loyiha nomi | AbutoLib |
| `{{LOYIHA_TAVSIFI}}` | 1–2 gaplik tavsif | Elektron kutubxona |
| `{{STACK}}` | Texnologiya | Laravel 11 + Blade |
| `{{DB}}` | Baza | MySQL 8 |
| `{{ADMIN_PREFIX}}` | URL prefiks | admin |
| `{{TILLAR}}` | Tillar | uz, ru, en |
| `{{ROLLAR}}` | Rollar ro'yxati | yuqoridagi misol |
| `{{ENTITYLAR}}` | Entitylar va maydonlar | yuqoridagi misol |
| `{{SKIN}}` | AdminLTE skin | skin-blue |
| `{{QO'SHIMCHA}}` | Maxsus talablar | Telegram bot orqali bildirishnoma |
