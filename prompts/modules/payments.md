# Modul: To'lovlar (Payme, Click, Uzum)

```text
Admin panel uchun to'lovlar modulini yoz. To'lov tizimlari: {{TIZIMLAR}} (standart: Payme, Click, naqd).

1. Tranzaksiyalar (/{{ADMIN_PREFIX}}/payments):
   - Jadval: ID, tashqi ID (provider transaction id), buyurtma/hisob, mijoz, summa, tizim (logo yoki label),
     status (pending|paid|cancelled|refunded|failed), yaratilgan va to'langan vaqt
   - Filtr: tizim, status, sana oralig'i, summa oralig'i
   - Batafsil sahifa: so'rovlar/javoblar logi (JSON, chiroyli formatda), status tarixi timeline'da
   - Amallar: qaytarish (refund — tizim API si orqali, faqat payments.refund ruxsati bilan),
     qo'lda "to'langan" deb belgilash (izoh majburiy, audit logga yoziladi)

2. Integratsiya (backend):
   - Payme: Merchant API (CheckPerformTransaction, CreateTransaction, PerformTransaction,
     CancelTransaction, CheckTransaction, GetStatement), Basic auth tekshiruvi
   - Click: Prepare / Complete, sign_string tekshiruvi
   - Har bir callback idempotent bo'lsin (bir tranzaksiya ikki marta o'tkazilmasin)
   - Summalar tiyinda (integer) saqlanadi
   - Barcha callback'lar alohida jadvalga loglanadi

3. Dashboard vidjetlari: bugungi tushum (tizim bo'yicha), muvaffaqiyatsiz to'lovlar soni
4. Hisobot: davr bo'yicha tizimlar kesimida tushum, Excel export
5. Sozlamalar: merchant ID, kalitlar (shifrlangan), test/production rejimi

Testlar: har bir callback metodi uchun muvaffaqiyatli va xato holatlar, idempotentlik.
```
