# Misol: Internet do'kon admin paneli

```text
Sen tajribali full-stack dasturchisan. Menga "MarketUz" loyihasi uchun AdminLTE 2.4.18 asosida
admin panel qurib ber.

Loyiha: elektronika internet do'koni. Stack: Laravel 11 + Blade, MySQL 8. Prefiks: /admin. Tillar: uz, ru.

Rollar:
- super_admin — hammasi
- manager — mahsulotlar, buyurtmalar, mijozlar
- operator — faqat buyurtmalar (ko'rish, statusni o'zgartirish)
- content — bannerlar, sahifalar, yangiliklar

Entitylar:
- Category: name (uz/ru), slug, parent_id (daraxt), icon, sort_order, is_active
- Brand: name, logo, slug
- Product: title (uz/ru), slug, sku (unique), category_id, brand_id, price, old_price,
  stock (int), images (ko'p), description (uz/ru, CKEditor), attributes (JSON: rang, xotira...),
  status (draft|active|archived), is_featured
- Order: number (auto, ORD-000123), customer_id, items (OrderItem: product_id, qty, price),
  total, delivery_type (pickup|courier), address, payment_method (cash|payme|click),
  payment_status (pending|paid|failed|refunded), status (new|confirmed|shipping|delivered|cancelled)
- Customer: name, phone (+998), email, addresses, orders_count, total_spent
- Banner: image, link, position (home_top|home_middle), sort_order, active_from, active_to
- Page: title, slug, body

Maxsus talablar:
- Buyurtma sahifasi invoice.html uslubida, "Chop etish" (invoice-print.html)
- Buyurtma statusi o'zgarishi timeline'da ko'rinadi, mijozga SMS (Eskiz) ketadi
- Dashboard: bugungi buyurtmalar, tushum, yangi mijozlar, ombordagi kam qolgan tovarlar (stock < 5)
- Hisobot: davr bo'yicha sotuvlar, TOP-20 mahsulot, kategoriya bo'yicha tushum
- Yangi buyurtmada Telegram guruhga bildirishnoma
- Mahsulotlarni Excel'dan import (shablon fayl bilan)

Ish tartibi: avval reja (DB sxema, route'lar, fayllar), tasdiqlagach bosqichma-bosqich.
```
