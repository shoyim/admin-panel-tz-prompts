# Modul: Profil

```text
Joriy admin uchun profil sahifasini yoz. Namuna: AdminLTE pages/examples/profile.html.

/{{ADMIN_PREFIX}}/profile:
- Chap ustun (col-md-3): box-profile — avatar, ism, rol(lar), ro'yxatdan o'tgan sana, oxirgi kirish
- O'ng ustun (col-md-9) nav-tabs-custom:
  1. Ma'lumotlar: ism, email, telefon, til, vaqt zonasi
  2. Avatar: yuklash + kesish (crop, kvadrat), o'chirish
  3. Xavfsizlik: joriy parol + yangi parol + tasdiqlash; 2FA yoqish/o'chirish (agar bor bo'lsa);
     faol sessiyalar ro'yxati (qurilma, IP, vaqt) va "Boshqa qurilmalardan chiqish"
  4. Bildirishnoma sozlamalari: hodisa x kanal matritsasi
  5. Mening faolligim: audit logdan o'z amallarim (timeline)

Talablar:
- Email o'zgartirilsa — yangi emailga tasdiqlash xati
- Parol o'zgarsa — boshqa sessiyalar yopiladi, audit logga yoziladi
- Header'dagi avatar va ism darhol yangilanadi
```
