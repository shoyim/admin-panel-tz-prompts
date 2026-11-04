# Misol: Test (quiz) platformasi admin paneli

```text
Sen tajribali full-stack dasturchisan. Menga "QuizUz" onlayn test platformasi uchun AdminLTE 2.4.18
asosida admin panel qurib ber.

Stack: Laravel 11 + Blade, PostgreSQL. Prefiks: /admin. Tillar: uz, ru.

Rollar: super_admin, teacher (faqat o'z testlari va natijalari), moderator (savollar bazasi), viewer.

Entitylar:
- Subject: name, icon, color (colorpicker)
- Topic: subject_id, name, sort_order
- Question: topic_id, type (single|multiple|true_false|text), body (CKEditor, rasm va formula bilan),
  options (Option: text, is_correct), difficulty (easy|medium|hard), explanation, author_id
- Quiz: title, subject_id, questions (many-to-many, tartib bilan), time_limit (daqiqa),
  attempts_allowed, shuffle_questions, shuffle_options, pass_score (%), starts_at, ends_at,
  access (public|by_code|groups), status
- Group: name, teacher_id, students (many-to-many)
- Attempt: quiz_id, user_id, started_at, finished_at, score, percent, answers (JSON), ip

Maxsus talablar:
- Savollarni Excel/Word shablondan ommaviy import, xatolar qatorma-qator ko'rsatiladi
- Test yaratishda: savollar bazasidan filtr (mavzu, qiyinlik) bilan tanlash yoki "tasodifiy N ta"
- Natijalar: test bo'yicha jadval, har savol bo'yicha to'g'ri javob foizi (bar chart),
  o'quvchi bo'yicha batafsil ko'rish, Excel export
- Dashboard: bugungi urinishlar, o'rtacha ball, faol testlar, eng qiyin 10 savol
- teacher faqat o'z ma'lumotlarini ko'radi (policy darajasida)
- Shubhali urinishlar (juda tez tugatilgan, bir IP dan ko'p) belgilanadi
```
