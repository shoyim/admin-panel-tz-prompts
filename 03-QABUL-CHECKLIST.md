# Qabul qilish checklisti

Har bir bosqichdan keyin AI ga yuboring: **"Quyidagi checklist bo'yicha o'z ishingni tekshir va har bir band uchun ✅/❌ va izoh yoz:"**

## Layout
- [ ] Barcha sahifalar bitta master layoutdan meros oladi
- [ ] Sidebar rolga qarab dinamik, joriy sahifa `active`
- [ ] Header: avatar, ism, profil, chiqish, til almashtirgich ishlaydi
- [ ] Breadcrumb har sahifada to'g'ri
- [ ] Mobil ekranda (375px) layout buzilmaydi

## Autentifikatsiya
- [ ] Login / logout ishlaydi, "Meni eslab qol" ishlaydi
- [ ] Noto'g'ri parol 5 martadan keyin vaqtincha bloklanadi
- [ ] Parolni tiklash email orqali ishlaydi
- [ ] Auth bo'lmagan foydalanuvchi `/admin/*` ga kira olmaydi (login'ga yo'naltiriladi)

## Ruxsatlar (RBAC)
- [ ] Ruxsati yo'q bo'lim menyuda ko'rinmaydi
- [ ] URL ni qo'lda yozib kirilganda 403 qaytadi
- [ ] super_admin o'zini o'chira olmaydi / rolini tushira olmaydi

## CRUD
- [ ] Ro'yxat: paginatsiya, qidiruv, saralash, filtrlar ishlaydi
- [ ] Yaratish / tahrirlash: validatsiya xatolari maydon ostida
- [ ] O'chirish tasdiqlash modali bilan, soft delete, tiklash mumkin
- [ ] Ommaviy amallar ishlaydi
- [ ] Excel/CSV export to'g'ri ma'lumot beradi (filtrlarni hisobga olib)

## Xavfsizlik
- [ ] CSRF tokeni barcha formalarda
- [ ] `<script>` kiritilganda XSS bo'lmaydi
- [ ] Fayl yuklashda `.php` va boshqa xavfli fayllar rad etiladi
- [ ] .env repoda yo'q

## Sifat
- [ ] Seeder: super_admin + demo ma'lumotlar
- [ ] Testlar o'tadi
- [ ] Konsolda JS xatolari yo'q
- [ ] N+1 so'rovlar yo'q
- [ ] README da o'rnatish va demo login yozilgan
