# Modul: Backup va tizim holati

```text
Admin panelga "Tizim" bo'limini qo'sh (faqat super_admin).

1. Backup (/{{ADMIN_PREFIX}}/system/backups):
   - Ma'lumotlar bazasi va yuklangan fayllar zaxirasi (Laravel: spatie/laravel-backup)
   - Avtomatik: har kuni {{VAQT}} da, oxirgi {{SONI}} ta saqlanadi; saqlash joyi: {{JOY}} (local / S3 / FTP)
   - Ro'yxat: sana, hajm, tur (DB / to'liq), status; yuklab olish (vaqtinchalik imzolangan havola), o'chirish
   - "Hozir backup olish" tugmasi (navbatda), natija bildirishnoma bilan
   - Backup muvaffaqiyatsiz bo'lsa Telegram/email ogohlantirish

2. Tizim holati (/{{ADMIN_PREFIX}}/system/health):
   - info-box'larda: PHP/Python/Node versiyasi, framework versiyasi, disk joyi, DB hajmi,
     navbat (queue) dagi ishlar soni, muvaffaqiyatsiz ishlar, kesh drayveri, oxirgi cron ishga tushgan vaqt
   - Tekshiruvlar ro'yxati (yashil/qizil): DB ulanish, storage yozish huquqi, .env APP_DEBUG=false,
     HTTPS, SMTP, tashqi API'lar
   - Muvaffaqiyatsiz navbat ishlari: ko'rish, qayta urinish, o'chirish

3. Loglar (/{{ADMIN_PREFIX}}/system/logs): oxirgi xatolar ro'yxati (daraja, vaqt, xabar), batafsil stack trace,
   fayl bo'yicha filtr, yuklab olish.

4. Texnik amallar: keshni tozalash, konfiguratsiya keshini yangilash, maintenance rejimi (maxfiy bypass havola bilan).
```
