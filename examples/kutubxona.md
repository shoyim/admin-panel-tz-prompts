# Misol: Elektron kutubxona admin paneli

```text
Sen tajribali full-stack dasturchisan. Menga "Elektron kutubxona" loyihasi uchun AdminLTE 2.4.18
asosida admin panel qurib ber.

Stack: Laravel 11 + Blade, MySQL. Prefiks: /admin. Tillar: uz (lotin), uz (kirill), ru.

Rollar: super_admin, librarian (kitoblar, mualliflar, ijaralar), moderator (sharhlar), viewer.

Entitylar:
- Author: full_name, birth_year, death_year, biography (CKEditor), photo
- Genre: name, slug, parent_id
- Publisher: name, city
- Book: title, slug, isbn (unique, inputmask), authors (many-to-many), genre_id, publisher_id,
  year, pages, language (uz|ru|en), cover, pdf_file (maks 50MB), epub_file, description,
  copies_total, copies_available, status (draft|published), downloads_count, views_count
- Reader: full_name, phone, passport (AA1234567), card_number (auto), status (active|blocked)
- Loan (ijara): reader_id, book_id, issued_at, due_at, returned_at, status (active|returned|overdue)
- Review: book_id, user_id, rating (1-5), text, status (pending|approved|rejected)

Maxsus talablar:
- Muddati o'tgan ijaralar har kuni scheduler bilan "overdue" ga o'tadi va dashboardda qizil kartada
- Kitob qaytarilganda copies_available avtomatik oshadi
- Dashboard: jami kitoblar, faol ijaralar, muddati o'tganlar, bugungi yuklab olishlar;
  grafik — oylik yuklab olishlar; TOP-10 mashhur kitob
- Sharhlar moderatsiyasi: bitta sahifada tasdiqlash/rad etish (AJAX)
- Kitob kartochkasini chop etish (shtrix-kod bilan)
```
