# Umumiy talablar (barcha adminkalar uchun standart)

Bu faylni har qanday prompt oxiriga **"Quyidagi umumiy standartlarga amal qil:"** deb qo'shib yuborish mumkin.

```text
UMUMIY STANDARTLAR:

UI/UX
- Faqat AdminLTE 2.4.18 komponentlari va Bootstrap 3 grid ishlatilsin; boshqa CSS framework qo'shilmasin.
- Har bir sahifa: content-header (sarlavha + breadcrumb) -> content -> box(lar).
- Jadval ustida: "Qo'shish" tugmasi (btn btn-success, fa-plus), filtrlar, export tugmalari.
- Tugma ranglari: saqlash — btn-primary, qo'shish — btn-success, o'chirish — btn-danger,
  bekor qilish — btn-default.
- Ikonlar: Font Awesome 4.7 (fa-*), kerak bo'lsa Ionicons.
- Mobil (xs/sm) ekranlarda jadval `table-responsive` ichida, sidebar yig'iladi.
- Yuklanish holati: PACE yoki tugmada spinner (fa-spinner fa-spin), ikki marta yuborish bloklanadi.
- Bo'sh holat: "Ma'lumot topilmadi" xabari va "Qo'shish" havolasi.

Ma'lumot va validatsiya
- Validatsiya ham frontendda (HTML5 / jQuery), ham backendda (asosiysi backend).
- Xato xabarlari tanlangan tilda va maydon ostida ko'rsatilsin.
- Sana formati: dd.mm.yyyy, vaqt: HH:mm, valyuta: 1 234 567 so'm (bo'sh joy bilan).
- Vaqt zonasi: Asia/Tashkent.
- Slug avtomatik (lotin, kichik harf, defis), qo'lda tahrirlash mumkin.

Kod sifati
- Takrorlanadigan UI qismlar komponent/partial ga ajratilsin (box, modal, form-group, delete-button).
- Biznes logika controllerda emas, service/action qatlamida.
- N+1 so'rovlardan qoching (eager loading), ro'yxatlar paginatsiyali.
- Nomlash: kod — ingliz tilida, interfeys matnlari — tarjima fayllarida.
- .env da maxfiy ma'lumotlar, repoda .env.example.

Xavfsizlik
- Har bir action uchun ruxsat (permission) tekshiruvi backendda.
- CSRF, XSS escaping, mass-assignment himoyasi, rate limiting.
- Fayl yuklash: ruxsat etilgan kengaytmalar ro'yxati, maks. hajm, fayl nomi qayta generatsiya.
- Muhim amallar (o'chirish, rol o'zgartirish, sozlamalar) audit logga yozilsin.

Ishlash tezligi
- Statik assetlar minify qilingan (.min.css / .min.js) versiyalari ulanadi.
- Faqat sahifada kerakli plaginlar ulanadi (stack/section orqali).
- Dashboard statistikasi keshlanadi (5–10 daqiqa).
```
