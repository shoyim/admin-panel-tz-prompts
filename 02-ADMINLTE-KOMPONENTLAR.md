# AdminLTE 2.4.18 komponentlar xaritasi

AI ga aniq ko'rsatma berish uchun: qaysi funksiya uchun AdminLTE ning qaysi sahifasi/plagini namuna bo'ladi.

## Sahifalar

| Funksiya | AdminLTE namunasi | Izoh |
|---|---|---|
| Master layout | `starter.html` | Toza skelet — shundan boshlang |
| Dashboard v1 | `index.html` | small-box, Morris grafik, chat, todo |
| Dashboard v2 | `index2.html` | info-box, Chart.js, jvectormap |
| Login | `pages/examples/login.html` | `login-page`, iCheck |
| Ro'yxatdan o'tish | `pages/examples/register.html` | |
| Ekran qulfi | `pages/examples/lockscreen.html` | Sessiya tugaganda |
| Profil | `pages/examples/profile.html` | box-profile, tablar |
| Invoice / chek | `pages/examples/invoice.html`, `invoice-print.html` | Buyurtma ko'rinishi va chop etish |
| 404 / 500 | `pages/examples/404.html`, `500.html` | Xato sahifalari |
| Bo'sh sahifa | `pages/examples/blank.html` | Yangi bo'lim uchun |
| Oddiy forma | `pages/forms/general.html` | form-group, input-group |
| Murakkab forma | `pages/forms/advanced.html` | Select2, datepicker, colorpicker, inputmask |
| Matn muharriri | `pages/forms/editors.html` | CKEditor, wysihtml5 |
| Oddiy jadval | `pages/tables/simple.html` | |
| DataTables | `pages/tables/data.html` | Qidiruv, saralash, paginatsiya |
| Grafiklar | `pages/charts/chartjs.html`, `morris.html`, `flot.html`, `inline.html` | |
| Kalendar | `pages/calendar.html` | FullCalendar |
| Pochta | `pages/mailbox/mailbox.html`, `compose.html`, `read-mail.html` | Ichki xabarlar |
| Vidjetlar | `pages/widgets.html` | info-box, box-widget, direct-chat |
| UI elementlar | `pages/UI/*.html` | buttons, modals, timeline, sliders, icons |
| Layout variantlari | `pages/layout/*.html` | top-nav, boxed, fixed, collapsed-sidebar |

## Plaginlar (`bower_components/` va `plugins/`)

| Vazifa | Plagin |
|---|---|
| Jadval | `datatables.net`, `datatables.net-bs` |
| Select / qidiruvli select | `select2` |
| Sana | `bootstrap-datepicker`, `bootstrap-daterangepicker`, `moment` |
| Vaqt | `plugins/timepicker` |
| Matn muharriri | `ckeditor`, `plugins/bootstrap-wysihtml5` |
| Checkbox / radio | `plugins/iCheck` |
| Input maska (telefon) | `inputmask`, `plugins/input-mask` |
| Rang tanlash | `bootstrap-colorpicker` |
| Grafiklar | `chart.js`, `morris.js` (+ `raphael`), `Flot`, `jquery-sparkline`, `jquery-knob` |
| Xarita | `jvectormap` |
| Kalendar | `fullcalendar` |
| Slayder | `ion.rangeSlider`, `seiyria-bootstrap-slider` |
| Yuklanish indikatori | `PACE` |
| Skroll | `jquery-slimscroll` |
| Ikonlar | `font-awesome` (4.7), `Ionicons` |

## Muhim CSS klasslar

- Layout: `hold-transition skin-blue sidebar-mini`, `wrapper`, `main-header`, `main-sidebar`, `content-wrapper`, `main-footer`
- Box: `box box-primary|info|success|warning|danger|default`, `box-header with-border`, `box-body`, `box-footer`, `box-tools`
- Statistika: `small-box bg-aqua|green|yellow|red`, `info-box`
- Status: `label label-success|warning|danger|info|default`
- Menyu: `sidebar-menu`, `treeview`, `treeview-menu`, `active`, `menu-open`
- Xabar: `callout callout-info|success|warning|danger`, `alert alert-dismissible`

## Telefon raqam (O'zbekiston) maskasi

`skills/adminlte-admin-panel/assets/admin.js` ulanganda JS yozish shart emas:

```html
<input type="text" name="phone" class="form-control" data-ui="phone">
```

> To'liq, sinovdan o'tgan markup katalogi: [`skills/adminlte-admin-panel/references/components.md`](skills/adminlte-admin-panel/references/components.md)
