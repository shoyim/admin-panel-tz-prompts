# Stack: Oddiy PHP (frameworksiz)

```text
STACK TALABLARI (PHP {{VERSIYA}}, frameworksiz, oddiy hosting uchun):
- Struktura: public/admin/index.php (front controller), src/{Controllers,Models,Services,Views},
  config/, storage/, vendor/ (Composer)
- Routing: kichik router (nikic/fast-route yoki o'zimizniki), barcha so'rovlar index.php orqali
- DB: PDO, faqat prepared statements; oddiy Model sinfi (find, where, insert, update, delete)
- Shablon: oddiy PHP view'lar, layout.php + partials, htmlspecialchars uchun e() helper
- Sessiya: session_regenerate_id login'dan keyin, HttpOnly + Secure + SameSite cookie
- CSRF: sessiyadagi token, har POST formada yashirin maydon
- Parol: password_hash / password_verify
- Migratsiya: sql/ papkasida raqamlangan .sql fayllar va oddiy migrate.php skript
- Fayl yuklash: finfo MIME tekshiruvi, storage/ ga (public tashqarisida), yuklab olish PHP orqali
- Export: phpoffice/phpspreadsheet
- .htaccess (Apache) va nginx konfiguratsiya misoli README da
```
