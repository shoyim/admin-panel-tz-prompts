# Misol: Klinika (tibbiyot markazi) admin paneli

```text
Sen tajribali full-stack dasturchisan. Menga "SalomatMed" klinikasi uchun AdminLTE 2.4.18 asosida
admin panel qurib ber.

Stack: Django 5, PostgreSQL. Prefiks: /panel. Tillar: uz, ru.

Rollar: chief (hammasi), registrar (qabulxona: bemorlar, navbat, to'lov), doctor (o'z bemorlari va
qabullari), cashier (kassa), lab (tahlil natijalari).

Entitylar:
- Department: name, floor
- Doctor: user, department_id, specialty, photo, schedule (hafta kunlari va soatlari), slot_minutes, price
- Service: name, department_id, price, duration_minutes
- Patient: full_name, birth_date, gender, phone, passport/JSHSHIR, address, card_number (auto),
  allergies, notes
- Appointment: patient_id, doctor_id, service_id, starts_at, status
  (booked|arrived|in_progress|done|cancelled|no_show), source (phone|online|walk_in)
- Visit (qabul natijasi): appointment_id, complaints, diagnosis (ICD-10 kod, Select2 qidiruv),
  prescription, recommendations, files (rasm, PDF)
- LabOrder / LabResult: tahlil turi, natija qiymatlari, norma oralig'i, status
- Payment: patient_id, services, amount, discount, method, cashier

Maxsus talablar:
- Navbat kalendari (FullCalendar): shifokor bo'yicha ustunlar, bo'sh slotlarga bosib yozish, drag bilan ko'chirish
- Bemor kartasi: barcha tashriflar timeline'da, tahlillar, to'lovlar
- Shifokor faqat o'z bemorlari tibbiy ma'lumotlarini ko'radi (policy darajasida); tibbiy ma'lumotlarni
  ko'rish ham audit logga yoziladi
- Qabul xulosasi va tahlil natijasini PDF'da chop etish (klinika blanki bilan)
- Bemorga SMS: qabul eslatmasi (1 kun va 2 soat oldin), tahlil tayyor
- Dashboard: bugungi qabullar, kelmaganlar, kassa tushumi, shifokorlar yuklamasi (bar chart)
- Shaxsiy ma'lumotlar himoyasi: passport/JSHSHIR shifrlangan, ro'yxatlarda qisman yashirilgan
```
