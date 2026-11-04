# Modul: Autentifikatsiya

```text
Admin panel uchun autentifikatsiya modulini yoz. Stack: {{STACK}}.

Sahifalar (AdminLTE pages/examples/login.html dizaynida, body class="hold-transition login-page"):
1. /{{ADMIN_PREFIX}}/login — email (yoki login) + parol, "Meni eslab qol" (iCheck), "Parolni unutdingizmi?"
2. /{{ADMIN_PREFIX}}/forgot-password — email kiritish, tiklash havolasi yuboriladi
3. /{{ADMIN_PREFIX}}/reset-password/{token} — yangi parol + tasdiqlash
4. /{{ADMIN_PREFIX}}/lock — ekran qulfi (lockscreen.html), {{LOCK_MINUT}} daqiqa harakatsizlikdan keyin

Talablar:
- Faqat is_admin=true yoki admin rollaridan biri bor foydalanuvchilar kira oladi.
- Bloklangan (status=blocked) foydalanuvchi kira olmaydi, aniq xabar chiqadi.
- Rate limit: 5 noto'g'ri urinish / 1 daqiqa (IP + login bo'yicha).
- Login muvaffaqiyatli bo'lsa: last_login_at, last_login_ip yangilanadi, audit logga yoziladi.
- Logout POST so'rov orqali (CSRF bilan), sessiya to'liq bekor qilinadi.
- Parol talablari: kamida 8 belgi, harf + raqam.
- Ixtiyoriy: 2FA (TOTP, Google Authenticator) — {{2FA_KERAKMI}}.
- Login sahifasida logo va sayt nomi Sozlamalardan olinadi.

Natija: route'lar, controller, middleware, view'lar, tarjimalar, testlar
(muvaffaqiyatli login, noto'g'ri parol, bloklangan user, rate limit, logout).
```
