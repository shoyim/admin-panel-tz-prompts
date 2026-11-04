# Modul: Sozlamalar

```text
Admin panel uchun "Sozlamalar" modulini yoz. Sozlamalar DB da key-value (group, key, value, type)
ko'rinishida saqlanadi va keshlanadi.

Sahifa: /{{ADMIN_PREFIX}}/settings — nav-tabs-custom tablar:
1. Umumiy: sayt nomi (har til uchun), logo, favicon, admin panel skin (skin-* tanlash, preview bilan)
2. Kontaktlar: telefon(lar), email, manzil, xarita koordinatalari, ish vaqti
3. Ijtimoiy tarmoqlar: Telegram, Instagram, Facebook, YouTube
4. SEO: meta title, description, keywords (har til uchun), Google Analytics / Yandex Metrika ID
5. Pochta: SMTP host, port, user, parol (shifrlangan saqlanadi), "Test xat yuborish" tugmasi
6. Integratsiyalar: {{INTEGRATSIYALAR}} (masalan: Telegram bot token, Payme/Click, Eskiz SMS)
7. Texnik: texnik ishlar rejimi (maintenance) yoqish/o'chirish, keshni tozalash tugmasi

Talablar:
- Faqat settings.update ruxsati borlar o'zgartira oladi
- Maxfiy qiymatlar (parol, token) formada yulduzcha bilan, bo'sh qoldirilsa o'zgarmaydi
- Har o'zgarish audit logga (eski va yangi qiymat, maxfiylari yashirilgan)
- Global helper: setting('group.key', default)
```
