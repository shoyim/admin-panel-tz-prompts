# Modul: Foydalanuvchilar, rollar va ruxsatlar (RBAC)

```text
Admin panel uchun RBAC modulini yoz. Stack: {{STACK}}
(Laravel bo'lsa spatie/laravel-permission, Django bo'lsa built-in Groups/Permissions ishlat).

1. Foydalanuvchilar bo'limi (/{{ADMIN_PREFIX}}/users):
   - Ro'yxat: avatar, ism, email, telefon, rollar (label), status, oxirgi kirish, amallar
   - Filtr: rol, status, ro'yxatdan o'tgan sana
   - Forma: ism, email, telefon (inputmask +998), parol (faqat yaratishda majburiy), avatar,
     rollar (Select2 multiple), status (active / blocked)
   - Amallar: bloklash/ochish, parolni tiklash havolasini yuborish, "Uning nomidan kirish"
     (impersonate — faqat super_admin, audit logga yoziladi)

2. Rollar bo'limi (/{{ADMIN_PREFIX}}/roles):
   - Ro'yxat: nom, foydalanuvchilar soni, ruxsatlar soni
   - Forma: nom, tavsif, ruxsatlar matritsasi — jadval: qatorlar = modullar,
     ustunlar = view/create/update/delete/export, har birida iCheck checkbox,
     qator va ustun bo'yicha "hammasini belgilash"

3. Ruxsatlar:
   - Ruxsatlar kodda (config/seeder) aniqlanadi, UI dan yaratilmaydi
   - Nom formati: modul.amal (masalan: products.update)
   - Sidebar menyusi va tugmalar ruxsatga qarab ko'rsatiladi; backendda policy/middleware

Cheklovlar:
- super_admin roli o'chirilmaydi va tahrirlanmaydi; oxirgi super_admin o'chirilmaydi
- Foydalanuvchi o'zini o'chira/bloklay olmaydi
- Rol o'zgarishi darhol kuchga kiradi (kesh tozalanadi)

Rollar: {{ROLLAR}}
```
