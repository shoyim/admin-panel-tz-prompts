# Misol: O'quv markaz CRM admin paneli

```text
Sen tajribali full-stack dasturchisan. Menga o'quv markaz uchun "EduCRM" admin panelini
AdminLTE 2.4.18 asosida qurib ber.

Stack: Django 5, PostgreSQL. Prefiks: /panel. Tillar: uz, ru.

Rollar: director (hammasi), admin (lidlar, o'quvchilar, guruhlar, to'lovlar), teacher (o'z guruhlari,
davomat), accountant (to'lovlar, hisobotlar).

Entitylar:
- Lead: name, phone, source (instagram|telegram|referral|walk_in), course_id, status
  (new|contacted|trial|converted|lost), comment, assigned_to, next_call_at
- Course: name, price_monthly, duration_months, description
- Teacher: user_id, phone, salary_type (fixed|percent), salary_value
- Group: name, course_id, teacher_id, days (Du-Cho-Ju), time, room, start_date, status
- Student: full_name, phone, parent_phone, birth_date, groups (many-to-many), balance
- Attendance: group_id, student_id, date, status (present|absent|late)
- Payment: student_id, group_id, amount, method (cash|card|transfer), month, paid_at, created_by
- Expense: category, amount, date, comment

Maxsus talablar:
- Lidlar Kanban ko'rinishida (status ustunlari, drag & drop, jQuery UI sortable) + jadval ko'rinishi
- Dars jadvali FullCalendar'da (xona va o'qituvchi bo'yicha filtr)
- Davomat: guruh + sana tanlanadi, o'quvchilar ro'yxatida tez belgilash
- Qarzdorlar ro'yxati (balance < 0), SMS eslatma yuborish
- Hisobot: oylik tushum/xarajat/foyda, o'qituvchi maoshi hisoblash, lid konversiyasi (manba bo'yicha)
- Dashboard: faol o'quvchilar, bu oy tushum, qarzdorlik, bugungi darslar, yangi lidlar
```
