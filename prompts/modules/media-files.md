# Modul: Media / fayl menejeri

```text
Admin panel uchun media kutubxonasi modulini yoz.

Funksiyalar:
- /{{ADMIN_PREFIX}}/media — grid ko'rinish (rasm preview), ro'yxat ko'rinish, papkalar
- Drag & drop bilan ko'p fayl yuklash, progress bar (AdminLTE progress klasslari)
- Ruxsat etilgan turlar: {{TURLAR}} (standart: jpg, jpeg, png, webp, pdf, docx, xlsx); maks. {{MAKS_MB}} MB
- Rasmlar uchun avtomatik thumbnail (150x150, 600px) va WebP versiya
- Fayl ma'lumotlari: nom, hajm, o'lcham, kim yukladi, qayerda ishlatilgan
- Qayta nomlash, alt matn, o'chirish (ishlatilayotgan bo'lsa ogohlantirish)
- Boshqa formalarda qayta ishlatiladigan "Media tanlash" modali (bitta / ko'p tanlash)
- CKEditor ichidan rasm yuklash shu modul orqali

Xavfsizlik:
- MIME turi fayl tarkibi bo'yicha tekshiriladi (faqat kengaytma emas)
- Fayl nomi UUID ga almashtiriladi, original nom DB da
- Bajariladigan fayllar (.php, .exe, .sh, .js, .svg ichida script) rad etiladi
- Storage: {{STORAGE}} (local / S3)
```
