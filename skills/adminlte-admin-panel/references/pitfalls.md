# Ko'p uchraydigan xatolar va yechimlar

Ro'yxat AdminLTE 2 + Bootstrap 3 + jQuery plaginlari bilan ishlashda amalda uchraydigan muammolardan tuzilgan.
Kod yozishdan oldin bir marta o'qib chiqing. Sahifa ishlamasa, avval shu yerdan qidiring.

## Assetlar va tartib

| Belgi | Sabab | Yechim |
|---|---|---|
| `$ is not defined` / `jQuery is not defined` | jQuery boshqa skriptdan keyin ulangan yoki `defer` qo'yilgan | Tartib: jQuery → Bootstrap → plaginlar → `adminlte.min.js` → `admin.js` → sahifa skripti. jQuery'ga `defer`/`async` qo'yilmaydi |
| Sidebar ochilmaydi, treeview ishlamaydi | `adminlte.min.js` ulanmagan yoki Bootstrap 4/5 ulangan | Faqat Bootstrap **3.4.1** ishlatiladi |
| Ikonlar kvadrat bo'lib chiqadi | FA 5/6 klassi (`fas fa-user`) yoki lokal nusxada `fonts/` papkasi yo'q | FA 4.7: `fa fa-user`. Lokalda `font-awesome@4.7.0/fonts/*` ham bo'lishi shart (`install-assets` qiladi) |
| Glyphicon (login sahifasidagi ikon) ko'rinmaydi | `bootstrap/dist/fonts` yo'q | `install-assets` orqali o'rnating |
| Vite/Webpack AdminLTE ni buzadi | Plaginlar global `jQuery` ni kutadi, bundler esa modul ichida yopadi | Admin assetlari bundlerga **qo'shilmaydi**, oddiy `<script>` bilan ulanadi. Sayt qismi o'z bundleri bilan ishlayveradi |
| Tailwind bilan to'qnashuv (tugmalar, `.collapse`, `.hidden`) | Sayt CSS i admin layoutiga ham ulangan | Admin layoutida faqat AdminLTE CSS i bo'ladi, sayt CSS i ulanmaydi |
| Kontent sidebar ostida qolib ketadi | `.wrapper` / `.content-wrapper` strukturasi buzilgan | `layout.html` dagi struktura o'zgartirilmaydi |

## Plaginlar

| Belgi | Sabab | Yechim |
|---|---|---|
| `GetData(...).destroy is not a function` (Select2) | Elementda `data-select2` atributi bor: Select2 instansini shu kalitda saqlaydi | Plagin nomli data-atributlar ishlatilmaydi. Hooklar: `data-ui="select2|date|phone|editor|datatable"` |
| Select2 modal ichida yozib bo'lmaydi / dropdown modal ortida qoladi | `dropdownParent` berilmagan | `admin.js` buni avtomatik qiladi. Modal ichidagi select modal ochilganda init bo'ladi (`shown.bs.modal`) |
| Select2 tahrirlashda bo'sh chiqadi (AJAX) | Tanlangan qiymat `<option>` sifatida render qilinmagan | `<option value="ID" selected>Matn</option>` serverda chiqariladi |
| Select2 `reset` dan keyin eski qiymatni ko'rsatadi | Select2 `reset` hodisasini eshitmaydi | `trigger('change.select2')` (filtr formasida `admin.js` qiladi) |
| Datepicker tanlangan sana bilan server formati mos emas | UI `dd.mm.yyyy`, DB `Y-m-d` | Backend request'da parse qiladi (Laravel: `Carbon::createFromFormat('d.m.Y', ...)`), view'da qaytib formatlaydi |
| iCheck checkbox `change` hodisasi ishlamaydi | iCheck o'z `ifChanged` hodisasini chiqaradi | `admin.js` uni `change` ga o'tkazadi. Jadvaldagi ommaviy tanlov checkboxlariga iCheck qo'yilmaydi |
| CKEditor qiymati formada yuborilmaydi (AJAX) | Textarea yangilanmagan | `admin.js` submitdan oldin `updateElement()` chaqiradi |
| CKEditor "This CKEditor version is not secure" bannerini chiqaradi | 4.22 versiya tekshiruvi | `versionCheck = false` (`admin.js` da bor) |
| DataTables `Cannot reinitialise` | Bir jadval ikki marta init bo'lgan (sahifa skripti + `admin.js`) | Yoki `data-ui="datatable"`, yoki qo'lda init. Ikkalasi birga emas |
| DataTables ustunlar soni mos emas (`Requested unknown parameter`) | `<th data-data>` kalitlari JSON bilan mos emas | Har `<th>` uchun `data-data` = JSON dagi kalit nomi |
| DataTables JSON da XSS | Server foydalanuvchi matnini HTML sifatida qaytargan | `data-html` siz ustunlar avtomatik escape qilinadi. `data-html` faqat server o'zi yasagan, escape qilingan HTML uchun |
| Jadval mobil ekranda sahifani suradi | Keng jadval | `admin.js` jadvalni `.table-responsive` ichiga o'raydi |

## Formalar va so'rovlar

| Belgi | Sabab | Yechim |
|---|---|---|
| AJAX so'rov 419 (Laravel) / 403 CSRF (Django) | CSRF header yo'q | Layoutda `<meta name="csrf-token">`, `admin.js` header qo'shadi. Django uchun `{{ csrf_token }}` |
| DELETE so'rov 405 | Route DELETE ni qabul qilmaydi | Route `DELETE` bo'lishi kerak; `data-method="POST"` bilan o'zgartirish mumkin |
| O'chirgandan keyin JSON sahifa ochiladi | Tugma oddiy `<a href>` va `data-delete` yo'q | `data-delete data-url="..."`. Oddiy forma uchun: `<form data-confirm="...">` |
| Saqlash tugmasi bloklanib qoladi | Brauzer orqaga qaytganda bfcache | `admin.js` `pageshow` da tiklaydi |
| Validatsiya xatosidan keyin forma bo'shab qoladi | Old input qaytarilmagan | Laravel `old()`, Django bound form, Express sessiyadagi old input |
| Belgilanmagan checkbox saqlanmaydi | HTML belgilanmagan checkboxni yubormaydi | Backend `boolean('field')` / `has()`; yoki `hidden` 0 qiymat |
| Fayl yuklanmaydi | `enctype="multipart/form-data"` yo'q | Fayl maydoni bor formada majburiy |

## Sidebar va navigatsiya

| Belgi | Sabab | Yechim |
|---|---|---|
| Joriy menyu belgilanmaydi | `active` serverda qo'yilmagan | Server route nomi bo'yicha qo'yadi. Fallback sifatida `admin.js` URL bo'yicha belgilaydi |
| Ichki menyu sahifa ochilganda yopiq | Ota `li` da `active menu-open` yo'q | `<li class="treeview active menu-open">` |
| Ruxsat yo'q bo'lim menyuda ko'rinadi | Menyu statik yozilgan | Menyu konfiguratsiyadan generatsiya qilinadi va har band ruxsat bilan tekshiriladi |
| Logout GET orqali | CSRF zaifligi | Logout faqat POST forma bilan (layoutda shunday) |

## Ishlash tezligi

| Muammo | Yechim |
|---|---|
| Ro'yxat sekin (N+1) | Eager loading (`with()`, `select_related`/`prefetch_related`, `include`) |
| Katta jadval to'liq yuklanadi | > 200 yozuv bo'lsa server-side DataTables, faqat kerakli ustunlar `select` qilinadi |
| Filtr/saralash ustunlari sekin | Shu ustunlarga DB indeks |
| Dashboard har ochilishda og'ir so'rovlar | Agregatlar 5–10 daqiqa keshlanadi, grafiklar AJAX bilan alohida yuklanadi |
| Har sahifada 15 ta plagin yuklanadi | Plagin CSS/JS faqat kerakli sahifada (`@push`, `{% block %}`) |
| Export qotib qoladi | > 5000 qator bo'lsa navbatda (queue) tayyorlanadi |
| Rasmlar og'ir | Ro'yxatda thumbnail (`img-thumb`, 40×40), originali emas |
