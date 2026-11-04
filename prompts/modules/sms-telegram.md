# Modul: SMS va Telegram xabarlar

```text
Admin panel uchun SMS (Eskiz.uz / Playmobile) va Telegram bot orqali xabar yuborish modulini yoz.

1. Shablonlar (/{{ADMIN_PREFIX}}/message-templates):
   - kod (order_created, password_reset...), kanal (sms|telegram), matn (uz/ru),
     o'zgaruvchilar {name}, {order_number}, {amount} — formada ro'yxati ko'rsatiladi
   - Oldindan ko'rish (preview) va SMS uchun belgilar soni / SMS qismlar soni

2. Ommaviy yuborish (/{{ADMIN_PREFIX}}/mailings):
   - Qabul qiluvchilar: barcha mijozlar / filtr bo'yicha / Excel'dan telefonlar ro'yxati
   - Kanal, shablon yoki erkin matn, rejalashtirish (sana-vaqt)
   - Yuborish navbatda (queue), sekundiga limit bilan; progress bar va natija statistikasi
   - Bekor qilish (hali yuborilmaganlar uchun)

3. Xabarlar logi: telefon/chat_id, matn, status (queued|sent|delivered|failed), xato sababi, narx

4. Telegram:
   - Bot token sozlamalarda, webhook o'rnatish tugmasi
   - Adminlar uchun: hodisalar (yangi buyurtma, xato) guruh/kanalga
   - Foydalanuvchini bot bilan bog'lash (deep link /start <token>)

5. Telefon formati: +998XXXXXXXXX ga normallashtiriladi, noto'g'ri raqamlar o'tkazib yuboriladi.
6. Balans: Eskiz balansini dashboardda ko'rsatish, kam qolganda ogohlantirish.
```
