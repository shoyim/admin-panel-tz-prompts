# Modul: Hisobotlar va export

```text
Admin panel uchun "Hisobotlar" bo'limini yoz.

Hisobotlar:
{{HISOBOTLAR}}
Misol:
- Sotuvlar hisoboti: davr (daterangepicker), kategoriya, menejer bo'yicha; jami summa, soni, o'rtacha chek
- Foydalanuvchilar o'sishi: kunlik/haftalik/oylik guruhlash
- Eng ko'p sotilgan TOP-20 mahsulot

Har bir hisobot sahifasi:
- Yuqorida filtrlar box'i, "Ko'rsatish" tugmasi
- small-box / info-box'larda jami ko'rsatkichlar
- Chart.js grafik (davr bo'yicha)
- Batafsil jadval (DataTables), pastda "Jami" qatori
- Export: Excel (formatlangan, sarlavha va filtr ma'lumoti bilan), PDF, CSV; chop etish (invoice-print.html uslubi)

Texnik:
- Katta exportlar (> 5000 qator) navbatda (queue) tayyorlanadi, tayyor bo'lgach bildirishnoma + yuklab olish havolasi
- Hisobot so'rovlari faqat o'qish uchun, indekslar bilan, kerak bo'lsa kesh
- Ruxsat: reports.view, reports.export
```
