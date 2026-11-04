# AdminLTE 2.4.18 stil qo'llanmasi

AdminLTE manba kodidan (`build/less/variables.less`, `skins/`, `boxes.less` va boshqalar) olingan qoidalar.
Maqsad: har bir yangi sahifa avvalgilaridan farq qilmasligi. Yangi rang, shrift yoki o'lcham **o'ylab topilmaydi**:
hammasi shu yerdagi klasslar bilan qilinadi. Sababi: AdminLTE ning yaxlit ko'rinishi aynan shu cheklangan
palitra va takrorlanuvchi bloklardan kelib chiqadi. Bitta "o'zgacha" sahifa butun panelni arzon ko'rsatadi.

## Mundarija
1. Texnologiya versiyalari
2. Ranglar
3. Skinlar
4. Tipografiya va ikonlar
5. Layout va grid
6. Komponent tanlash qoidalari
7. Holatlar (status) xaritasi
8. Matn va format qoidalari

## 1. Texnologiya versiyalari (aralashtirilmaydi)

| Kutubxona | Versiya | Izoh |
|---|---|---|
| AdminLTE | 2.4.18 | `admin-lte@2.4.18` |
| Bootstrap | **3.4.1** | 4/5 klasslari (`d-flex`, `card`, `ml-2`, `form-row`, `custom-select`, `btn-outline-*`) ishlamaydi |
| jQuery | 3.7.1 | |
| Font Awesome | **4.7.0** | FA5/6 nomlari (`fas fa-...`, `fa-solid`, `fa-trash-alt`) ishlamaydi |
| DataTables | 1.13.11 + `datatables.net-bs` | `-bs` (Bootstrap 3) varianti, `-bs4` emas |
| Select2 | 4.0.13 | |
| bootstrap-datepicker | 1.10.0 | |
| iCheck | 1.0.2 | `square/blue` skin |
| Chart.js | 4.4.1 | UMD build |
| CKEditor | 4.22.1 | `versionCheck: false` |

## 2. Ranglar

Rang faqat klass orqali beriladi (`bg-*`, `text-*`, `label-*`, `btn-*`, `box-*`, `callout-*`, `progress-bar-*`).
Inline `style="color:#..."` va yangi hex ranglar yozilmaydi.

| Nomi | Hex | `bg-` / `text-` | Bootstrap mosligi | Ma'nosi |
|---|---|---|---|---|
| light-blue | `#3c8dbc` | `bg-light-blue` | `primary` | Asosiy amal, skin-blue header |
| aqua | `#00c0ef` | `bg-aqua` | `info` | Ma'lumot, neytral statistika |
| green | `#00a65a` | `bg-green` | `success` | Muvaffaqiyat, faol, to'langan, qo'shish |
| yellow | `#f39c12` | `bg-yellow` | `warning` | Kutilmoqda, qoralama, ogohlantirish |
| red | `#dd4b39` | `bg-red` | `danger` | Xato, o'chirish, bekor qilingan |
| blue | `#0073b7` | `bg-blue` | — | Qo'shimcha |
| navy | `#001F3F` | `bg-navy` | — | Qo'shimcha |
| teal | `#39CCCC` | `bg-teal` | — | Qo'shimcha |
| olive | `#3D9970` | `bg-olive` | — | Qo'shimcha |
| orange | `#FF851B` | `bg-orange` | — | Qo'shimcha |
| purple | `#605ca8` | `bg-purple` | — | Qo'shimcha |
| maroon | `#D81B60` | `bg-maroon` | — | Qo'shimcha |
| gray | `#d2d6de` | `bg-gray` | `default` | Arxiv, nofaol |
| black | `#111` | `bg-black` | — | |

Fon va chegaralar: kontent foni `#ecf0f5`, box chegarasi `#f4f4f4`, box soyasi `0 1px 1px rgba(0,0,0,.1)`,
box burchagi `3px`, input burchagi `0` (AdminLTE inputlari to'rtburchak), tugma burchagi `3px`,
qorong'u sidebar `#222d32`, sidebar kengligi `230px` (yig'ilganda `50px`).

**Dashboard kartalari ketma-ketligi:** `aqua → green → yellow → red`. 4 tadan ko'p bo'lsa, keyingilari
`purple`, `teal`, `maroon`, `navy`. Har qatorda rang takrorlanmaydi.

## 3. Skinlar

`<body class="hold-transition skin-XXX sidebar-mini">`. Bitta loyihada bitta skin, u Sozlamalardan olinadi.

| Skin | Header | Sidebar |
|---|---|---|
| `skin-blue` (standart) | `#3c8dbc` | qorong'u |
| `skin-blue-light` | `#3c8dbc` | och |
| `skin-black` | oq | qorong'u |
| `skin-purple` | `#605ca8` | qorong'u |
| `skin-green` | `#00a65a` | qorong'u |
| `skin-red` | `#dd4b39` | qorong'u |
| `skin-yellow` | `#f39c12` | qorong'u |
| `*-light` variantlari | o'sha rang | och |

Har skinning alohida fayli bor: `dist/css/skins/skin-blue.min.css`. Barchasini birdan ulash shart emas
(`_all-skins.min.css` faqat skin tanlash sahifasida kerak).

## 4. Tipografiya va ikonlar

- Shrift: **Source Sans Pro** (300, 400, 600, 700, kursiv) Google Fonts dan. Boshqa shrift qo'shilmaydi.
- Sahifa sarlavhasi: `content-header > h1` va `<small>`dagi izoh. Box sarlavhasi: `h3.box-title`.
- Raqamli statistika: `small-box .inner h3` yoki `info-box-number`. Qo'lda `font-size` berilmaydi.
- Ikonlar: Font Awesome 4.7 `fa fa-*`. Ionicons (`ion ion-*`) faqat small-box ichida ishlatilsa bo'ladi.

Standart ikonlar (bir xil amal hamma joyda bir xil ikon bilan):

| Amal / bo'lim | Ikon | | Amal / bo'lim | Ikon |
|---|---|---|---|---|
| Dashboard | `fa-dashboard` | | Qo'shish | `fa-plus` |
| Foydalanuvchilar | `fa-users` | | Tahrirlash | `fa-pencil` |
| Rollar | `fa-shield` | | O'chirish | `fa-trash` |
| Sozlamalar | `fa-cogs` | | Ko'rish | `fa-eye` |
| Profil | `fa-user` | | Saqlash | `fa-save` |
| Chiqish | `fa-sign-out` | | Qidirish | `fa-search` |
| Buyurtmalar | `fa-shopping-cart` | | Filtr | `fa-filter` |
| Mahsulotlar | `fa-cube` / `fa-shopping-bag` | | Excel | `fa-file-excel-o` |
| Kategoriyalar | `fa-folder` / `fa-sitemap` | | PDF | `fa-file-pdf-o` |
| Hisobotlar | `fa-bar-chart` | | Chop etish | `fa-print` |
| Audit log | `fa-history` | | Tiklash | `fa-undo` |
| Media | `fa-image` | | Yuklash (upload) | `fa-upload` |
| Bildirishnomalar | `fa-bell-o` | | Yuklab olish | `fa-download` |
| Xabarlar | `fa-envelope-o` | | Orqaga | `fa-arrow-left` |
| To'lovlar | `fa-credit-card` | | Yangilash | `fa-refresh` |
| Sahifalar / kontent | `fa-file-text-o` | | Ichki menyu bandi | `fa-circle-o` |

## 5. Layout va grid

- Struktura: `.wrapper > .main-header + .main-sidebar + .content-wrapper (.content-header + .content) + .main-footer`.
- Grid: Bootstrap 3 (`col-xs/sm/md/lg-*`). `row` ichida faqat `col-*`.
- Sahifa turlari bo'yicha grid:

| Sahifa | Grid |
|---|---|
| Ro'yxat | `col-xs-12`: filtr box (yig'iladigan) + ro'yxat box |
| Forma | `col-md-8` asosiy maydonlar + `col-md-4` nashr/rasm/meta. Kichik forma (≤5 maydon): `col-md-6 col-md-offset-3` |
| Ko'rish (show) | `col-md-8` ma'lumot + `col-md-4` bog'liq/tarix |
| Dashboard | small-box: `col-lg-3 col-xs-6`; grafiklar: `col-md-8` + `col-md-4`; jadval + timeline: `col-md-7` + `col-md-5` |
| Sozlamalar / profil | `nav-tabs-custom` (profil: `col-md-3` + `col-md-9`) |

- Sahifa tugmalari (Qo'shish, Export) `content-header` da emas, **ro'yxat box'ining `box-tools pull-right`** ichida turadi.
- Formadagi Saqlash / Bekor qilish tugmalari `box-footer` da: Bekor qilish chapda, Saqlash `pull-right`.

## 6. Komponent tanlash qoidalari

| Vazifa | Komponent | Klass |
|---|---|---|
| Har qanday kontent bloki | box | `box box-{primary\|default\|...}` |
| Ro'yxat / forma (asosiy) | | `box-primary` |
| Filtr, yon panel, ikkinchi darajali | | `box-default` |
| Xavfli zona (o'chirish va h.k.) | | `box-danger` |
| Statistika (dashboard) | small-box | `small-box bg-*` |
| Ixcham statistika (hisobot, tizim) | info-box | `info-box` + `info-box-icon bg-*` |
| Status | label | `label label-*` |
| Menyudagi son | label | `label pull-right bg-*` |
| Vaqtinchalik xabar | alert | `alert alert-* alert-dismissible` |
| Doimiy izoh, yo'riqnoma | callout | `callout callout-*` |
| Tasdiqlash | modal | `modal modal-danger` (o'chirish), `modal` (boshqa) |
| Tablar | nav-tabs-custom | `nav-tabs-custom` > `nav nav-tabs` + `tab-content` |
| Tarix / faollik | timeline | `timeline` |
| Progress | progress | `progress progress-xs` + `progress-bar progress-bar-*` |
| Jadval | table | `table table-bordered table-striped table-hover` |

Tugmalar:

| Amal | Klass |
|---|---|
| Saqlash / asosiy | `btn btn-primary` |
| Qo'shish | `btn btn-success` |
| O'chirish | `btn btn-danger` |
| Bekor qilish / ikkinchi darajali / export | `btn btn-default` |
| Ogohlantiruvchi (bloklash, arxivlash) | `btn btn-warning` |
| Box sarlavhasidagi tugmalar | `btn-sm` |
| Jadval qatoridagi amallar | `btn-xs`, faqat ikon + `title` |
| Login, user-menu | `btn-flat` |

## 7. Holatlar (status) xaritasi

Bir xil ma'noli status hamma bo'limda bir xil rangda bo'ladi:

| Ma'no | Misollar | Label |
|---|---|---|
| Ijobiy / yakunlangan | active, published, paid, delivered, approved, done | `label-success` |
| Kutilmoqda / jarayonda | pending, draft, new, processing, in_progress | `label-warning` |
| Ma'lumot / oraliq | confirmed, shipping, scheduled | `label-info` |
| Asosiy | featured, primary | `label-primary` |
| Salbiy | blocked, cancelled, failed, rejected, overdue | `label-danger` |
| Nofaol | archived, inactive, expired, deleted | `label-default` |

Status xaritasi kodda **bitta joyda** saqlanadi (enum yoki helper), view'larda takrorlanmaydi.

## 8. Matn va format qoidalari

- Interfeys tili standart bo'yicha o'zbek (lotin). Barcha matnlar tarjima fayllarida bo'ladi.
- Sana `dd.mm.yyyy`, vaqt `HH:mm`, vaqt zonasi `Asia/Tashkent`.
- Pul: `12 450 000 so'm` (minglik ajratuvchi — bo'sh joy, kasr yo'q).
- Telefon: `+998 (90) 123-45-67` (`data-ui="phone"`).
- Jadvalda bo'sh qiymat `—` bilan ko'rsatiladi, bo'sh katak qoldirilmaydi.
- Tugma matni fe'l bilan yoziladi: "Saqlash", "Qo'shish", "O'chirish" ("OK" yoki "Submit" emas).
- Sahifa sarlavhasi: ro'yxatda ko'plik ("Mahsulotlar"), formada amal ("Mahsulot qo'shish", "Mahsulotni tahrirlash").
