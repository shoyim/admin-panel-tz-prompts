# Modul: Excel/CSV import

```text
"{{ENTITY_NOMI}}" uchun Excel/CSV dan ommaviy import yoz.

Jarayon (wizard, 3 qadam, AdminLTE box + progress bar):
1. Yuklash: .xlsx/.csv (maks {{MAKS_MB}} MB), "Shablonni yuklab olish" tugmasi
   (to'g'ri ustunlar, misol qatorlar, izohlar bilan)
2. Moslashtirish: fayl ustunlari -> entity maydonlari (Select2), avtomatik taxminiy moslashtirish;
   birinchi 10 qator preview
3. Tekshirish va import:
   - Har qator validatsiya qilinadi; xatolar jadvali: qator raqami | maydon | xato
   - Rejim: faqat yangilarini qo'shish / mavjudlarini {{UNIQUE_KALIT}} bo'yicha yangilash
   - "Faqat to'g'ri qatorlarni import qilish" yoki "Xato bo'lsa hammasini bekor qilish" (tranzaksiya)
   - Katta fayllar navbatda, bo'laklab (chunk 500), tugaganda bildirishnoma

Natija: qo'shildi / yangilandi / o'tkazib yuborildi soni, xatolar faylini Excel'da yuklab olish.
Import tarixi: kim, qachon, fayl, natija. Ruxsat: {{entity}}.import.
Bog'liq maydonlar (kategoriya nomi -> ID) nom bo'yicha topiladi, topilmasa xato yoki yaratish (sozlanadi).
```
