# Modul: Audit log (faoliyat jurnali)

```text
Admin panel uchun audit log modulini yoz
(Laravel bo'lsa spatie/laravel-activitylog, Django bo'lsa django-auditlog ishlatish mumkin).

Nima yoziladi:
- Barcha modellarda yaratish / tahrirlash / o'chirish / tiklash: eski va yangi qiymatlar (diff)
- Login, logout, muvaffaqiyatsiz login, impersonate, parol o'zgartirish
- Sozlamalar va rol/ruxsat o'zgarishlari
- Export qilish (kim, qaysi hisobot, qaysi filtr bilan)
- Har yozuvda: user, IP, user-agent, vaqt, obyekt turi va ID

Sahifa /{{ADMIN_PREFIX}}/activity-log:
- DataTables: vaqt, foydalanuvchi, amal (rangli label), obyekt, IP
- Filtr: foydalanuvchi, amal turi, obyekt turi, sana oralig'i
- Batafsil ko'rish modalida diff jadvali: maydon | eski | yangi (o'zgarganlar sariq fon)
- Obyekt sahifasida (show) "O'zgarishlar tarixi" — timeline ko'rinishida

Qoidalar:
- Parol, token kabi maydonlar logga yozilmaydi
- Log faqat o'qiladi, UI dan tahrirlanmaydi/o'chirilmaydi
- {{SAQLASH_KUN}} kundan eski yozuvlar scheduler bilan arxivlanadi/o'chiriladi
- Ruxsat: activity_log.view (standart faqat super_admin)
```
