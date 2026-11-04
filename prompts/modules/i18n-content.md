# Modul: Ko'p tilli kontent va tarjimalar

```text
Admin panelga ko'p tillilikni qo'sh. Tillar: {{TILLAR}} (masalan: uz, oz (kirill), ru, en).

1. Interfeys tili:
   - Header'da til almashtirgich (bayroq + nom), tanlov foydalanuvchi profilida saqlanadi
   - Barcha matnlar tarjima fayllarida; yo'q tarjima uchun fallback — {{ASOSIY_TIL}}

2. Kontent tarjimasi (modellar):
   - Tarjima qilinadigan maydonlar JSON ustunda ({"uz": "...", "ru": "..."}) yoki alohida
     translations jadvalida — {{USUL}}
   - Formada har til uchun tab (nav-tabs), to'ldirilmagan til tabi qizil nuqta bilan
   - Asosiy til majburiy, qolganlari ixtiyoriy
   - Ro'yxatda "tarjima holati" ustuni: har til uchun ✓/✗
   - Lotin <-> kirill avtomatik transliteratsiya tugmasi (o'zbek tili uchun)

3. Tarjimalar menejeri (/{{ADMIN_PREFIX}}/translations):
   - Interfeys kalitlari jadvali: kalit | uz | ru | en, inline tahrirlash
   - Tarjima qilinmaganlarni filtrlash, kodda ishlatilgan yangi kalitlarni skanerlash
   - Export / import (JSON yoki Excel)

4. Slug har til uchun alohida, URL lar /{locale}/... ko'rinishida (sayt qismi uchun).
```
