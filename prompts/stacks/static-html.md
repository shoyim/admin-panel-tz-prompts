# Stack: Statik HTML prototip (backendsiz)

> Dizaynni mijoz bilan kelishib olish uchun tez prototip.

```text
STACK TALABLARI (statik HTML prototip):
- Faqat AdminLTE 2.4.18 fayllari: dist/, bower_components/, plugins/ — nisbiy yo'llar bilan
- Har bir sahifa alohida .html, umumiy header/sidebar/footer takrorlanmasligi uchun
  kichik JS include (fetch('partials/sidebar.html')) yoki build vaqtida Gulp/Grunt include
- Ma'lumotlar: data/*.json mock fayllar, jadvallar DataTables (ajax: 'data/products.json') bilan
- Formalar ishlaydi (validatsiya, Select2, datepicker), "Saqlash" — toastr/callout bilan demo xabar
- Sahifalar ro'yxati: login, dashboard, {{BO'LIMLAR}} (ro'yxat + forma + ko'rish), profil, sozlamalar, 404
- Keyinchalik backendga ko'chirish oson bo'lsin: har sahifa strukturasi master layout + content
```
