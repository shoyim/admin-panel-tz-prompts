# Modul: Bildirishnomalar

```text
Admin panel uchun bildirishnomalar modulini yoz.

1. Header'dagi qo'ng'iroq (AdminLTE notifications-menu):
   - O'qilmaganlar soni label-warning badge'da
   - Dropdown: oxirgi 10 ta, ikon + matn + vaqt ("5 daqiqa oldin"), bosilganda tegishli sahifaga
   - "Hammasini o'qilgan deb belgilash"
   - Har {{SONIYA}} soniyada AJAX polling (yoki WebSocket mavjud bo'lsa — real-time)

2. /{{ADMIN_PREFIX}}/notifications — barcha bildirishnomalar ro'yxati, filtr (o'qilgan/o'qilmagan, tur)

3. Hodisalar (qachon bildirishnoma yaratiladi):
{{HODISALAR}}
Misol: yangi buyurtma, yangi ariza, to'lov muvaffaqiyatsiz, ombordagi mahsulot kam qoldi

4. Kanallar: admin panel (DB) + ixtiyoriy {{KANALLAR}} (Telegram bot, email)
   - Har foydalanuvchi profilida qaysi hodisa qaysi kanalga kelishini tanlaydi

5. Ommaviy xabar: super_admin barcha/rol bo'yicha adminlarga xabar yubora oladi.
```
