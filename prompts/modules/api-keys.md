# Modul: API kalitlar va webhooklar

```text
Admin panelga tashqi integratsiyalar uchun API kalitlar va webhooklar bo'limini qo'sh.

1. API kalitlar (/{{ADMIN_PREFIX}}/api-keys):
   - Yaratish: nom, ruxsatlar (scopes: products.read, orders.write...), IP whitelist, amal qilish muddati
   - Kalit faqat bir marta ko'rsatiladi (nusxalash tugmasi bilan), DB da hash holida saqlanadi
   - Ro'yxat: nom, prefiks (sk_live_ab12...), scopes, oxirgi ishlatilgan vaqt va IP, status
   - Amallar: bekor qilish (revoke), qayta generatsiya
   - Rate limit: kalit bo'yicha (masalan 60 so'rov/daqiqa), sozlanadi

2. API so'rovlar logi: vaqt, kalit, metod, URL, status kod, javob vaqti (ms); filtr va grafik

3. Webhooklar (/{{ADMIN_PREFIX}}/webhooks):
   - URL, hodisalar (order.created, payment.paid...), secret (HMAC-SHA256 imzo header'da)
   - Yuborish navbatda, xato bo'lsa qayta urinish (1, 5, 30 daqiqa, 2 soat), keyin "failed"
   - Yetkazish logi: so'rov tanasi, javob kodi va tanasi; "Qayta yuborish" va "Test yuborish" tugmalari

Ruxsat: api_keys.manage (faqat super_admin). Barcha amallar audit logga.
```
