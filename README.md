# Admin Panel TZ Promptlari (AdminLTE 2.4.18 asosida)

Har qanday loyihaga (Laravel, Django, Node.js, oddiy PHP va h.k.) **AdminLTE 2.4.18** shabloni asosida admin panel qurish uchun tayyor **texnik topshiriq (TZ) promptlari** to'plami.

Promptlar AI yordamchiga (Claude, ChatGPT, Cursor va h.k.) to'g'ridan-to'g'ri berish uchun yozilgan: `{{...}}` ichidagi joylarni o'z loyihangizga moslab to'ldirasiz va nusxalab yuborasiz.

## Tuzilma

```
.
├── 00-MASTER-TZ.md              # Asosiy universal TZ prompt (shu yerdan boshlang)
├── 01-UMUMIY-TALABLAR.md        # Barcha adminkalar uchun majburiy standartlar
├── 02-ADMINLTE-KOMPONENTLAR.md  # AdminLTE sahifa/plaginlari -> funksiya xaritasi
├── 03-QABUL-CHECKLIST.md        # Topshirishdan oldin tekshiruv ro'yxati
├── prompts/
│   ├── modules/                 # Har bir modul uchun alohida TZ prompt
│   │   ├── auth.md
│   │   ├── dashboard.md
│   │   ├── crud.md
│   │   ├── users-roles.md
│   │   ├── settings.md
│   │   ├── media-files.md
│   │   ├── notifications.md
│   │   ├── reports-export.md
│   │   ├── audit-log.md
│   │   ├── profile.md
│   │   ├── payments.md          # Payme, Click
│   │   ├── sms-telegram.md      # Eskiz SMS, Telegram bot
│   │   ├── import.md            # Excel/CSV import
│   │   ├── i18n-content.md      # Ko'p tillilik
│   │   ├── api-keys.md          # API kalitlar, webhooklar
│   │   └── backup-system.md     # Backup, tizim holati, loglar
│   └── stacks/                  # Texnologiyaga moslashtirish promptlari
│       ├── laravel-blade.md
│       ├── laravel-api-spa.md
│       ├── django.md
│       ├── fastapi.md
│       ├── node-express.md
│       ├── nextjs.md
│       ├── yii2.md
│       ├── plain-php.md
│       └── static-html.md
└── examples/                    # To'ldirilgan real misollar
    ├── internet-dokon.md
    ├── kutubxona.md
    ├── test-quiz-platforma.md
    ├── crm.md
    ├── restoran-yetkazib-berish.md
    └── klinika.md
```

> 🇬🇧 English: [README.en.md](README.en.md)

## Qanday foydalanish

1. **`00-MASTER-TZ.md`** ni oching, `{{LOYIHA_NOMI}}`, `{{STACK}}`, `{{ENTITYLAR}}` kabi joylarni to'ldiring.
2. O'z stack'ingizga mos faylni `prompts/stacks/` dan oling va master prompt oxiriga qo'shing.
3. Kerakli modullarni `prompts/modules/` dan tanlab, **bittadan** AI ga bering (bir vaqtda hammasini emas — sifat yaxshiroq bo'ladi).
4. Har bir bosqichdan keyin `03-QABUL-CHECKLIST.md` bo'yicha tekshiring.
5. Tayyor misollarni `examples/` dan ko'rib, o'zingiznikini shunga o'xshatib yozing.

## Tavsiya etilgan ketma-ketlik

| Bosqich | Prompt | Natija |
|---|---|---|
| 1 | `00-MASTER-TZ.md` + stack | Loyiha skeleti, layout (header/sidebar/footer) |
| 2 | `modules/auth.md` | Login, logout, parolni tiklash |
| 3 | `modules/users-roles.md` | Foydalanuvchilar va rollar (RBAC) |
| 4 | `modules/crud.md` (har bir entity uchun) | Asosiy biznes bo'limlar |
| 5 | `modules/dashboard.md` | Statistik kartalar, grafiklar |
| 6 | `modules/settings.md`, `media-files.md` | Sozlamalar, fayllar |
| 7 | `modules/reports-export.md`, `audit-log.md`, `notifications.md` | Hisobot, log, bildirishnoma |
| 8 | Kerak bo'lsa: `payments.md`, `sms-telegram.md`, `import.md`, `i18n-content.md`, `api-keys.md` | Integratsiyalar |
| 9 | `modules/backup-system.md` | Backup va monitoring |
| 10 | `03-QABUL-CHECKLIST.md` | Yakuniy tekshiruv |

## Hissa qo'shish

Yangi modul, stack yoki misol taklif qilish uchun [Issue](../../issues/new/choose) oching yoki Pull Request yuboring.
Prompt yozish qoidalari: o'zbek tilida (lotin), `{{PLACEHOLDER}}` lar katta harfda, har prompt ```` ```text ```` blokida.

## Litsenziya

MIT. AdminLTE — [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) (MIT).
